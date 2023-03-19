import { useState } from "react";

import { useDocumentation } from "~/contexts/DocumentationContext";
import { useNavigation } from "~/contexts/NavigationContext";

import { documentationMenu } from "~/data/documentationMenu";

import Heading from "~/components/Heading";
import Link from "~/components/Link";
import Close from "~/components/icons/Close";

export default function Aside(props) {
  const { locationPath } = useNavigation();
  const isThemeGeneratorNestedPage = locationPath.includes("/docs/theme-generator/");
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
          const isCurrentCategory = category.links.some((link) => link.route === locationPath);
          const shouldOpen =
            isCurrentCategory ||
            (isThemeGeneratorNestedPage && category.category === "Customization");

          if (isCurrentCategory && currentCategory !== category.category) {
            setCurrentCategory(category.category);
          }

          return (
            <details key={index} open={shouldOpen}>
              {/* Category button */}
              <summary {...(shouldOpen && { "aria-current": true })}>{category.category}</summary>
              <ul>
                {category.links.map((link, index) => {
                  const isThemeGeneratorLink = link.route === "/docs/theme-generator";

                  // Link
                  return (
                    <li key={index}>
                      <Link
                        to={link.route}
                        className="secondary"
                        {...(isThemeGeneratorNestedPage && isThemeGeneratorLink
                          ? { "aria-current": "page" }
                          : {})}
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
