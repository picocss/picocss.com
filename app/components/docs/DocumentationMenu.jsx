import { useState } from "react";
import { useMatches } from "@remix-run/react";
import { useCurrentPath } from "~/utils";
import { useDocumentation } from "~/contexts/DocumentationContext";

import { documentationMenu } from "~/data/documentationMenu";

import Heading from "~/components/docs/Heading";
import Link from "~/components/Link";
import Close from "~/components/icons/Close";

export default function Aside(props) {
  const currentPath = useCurrentPath();

  const routes = useMatches();
  const isThemeGeneratorNestedPage = routes.some(
    (route) => route.pathname === "/docs/theme-generator"
  );
  const isColorsNestedPage = routes.some((route) => route.pathname === "/docs/colors");
  const { menuIsOpenOnMobile, setMenuIsOpenOnMobile } = useDocumentation();
  const [currentCategory, setCurrentCategory] = useState("Getting started");

  const onClose = (event) => {
    event.preventDefault();
    setMenuIsOpenOnMobile(false);
  };

  return (
    <aside
      id="documentation-menu"
      {...(menuIsOpenOnMobile && { className: "is-open-on-mobile" })}
      {...props}
    >
      <header>
        <Heading level={2}>Documentation</Heading>
        <Link to="#" aria-label="Close" className="secondary" onClick={onClose}>
          <Close />
        </Link>
      </header>

      {/* Navigation */}
      <nav>
        {documentationMenu.map((category, index) => {
          const isCurrentCategory = category.links.some((link) => link.route === currentPath);
          const shouldOpen =
            isCurrentCategory ||
            ((isThemeGeneratorNestedPage || isColorsNestedPage) &&
              category.category === "Customization");

          if (isCurrentCategory && currentCategory !== category.category) {
            setCurrentCategory(category.category);
          }

          return (
            <details key={index} open={shouldOpen}>
              {/* Category button */}
              <summary {...(shouldOpen && { "aria-current": true })}>{category.category}</summary>
              <ul>
                {category.links.map((link, index) => {
                  const isThemeGeneratorPage = link.route === "/docs/theme-generator";
                  const isColorsPage = link.route === "/docs/colors";

                  // Link
                  return (
                    <li key={index}>
                      <Link
                        to={link.route}
                        className="secondary"
                        {...(((isThemeGeneratorNestedPage && isThemeGeneratorPage) ||
                          (isColorsNestedPage && isColorsPage)) && { "aria-current": "page" })}
                        onClick={() => setMenuIsOpenOnMobile(false)}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </details>
          );
        })}
      </nav>
    </aside>
  );
}
