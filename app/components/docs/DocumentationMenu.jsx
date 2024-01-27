import parse from "html-react-parser";
import { useEffect, useRef, useState } from "react";
import Heading from "~/components/Heading";
import Link from "~/components/Link";
import Close from "~/components/icons/Close";
import { useDocumentation } from "~/contexts/DocumentationContext";
import { useNavigation } from "~/contexts/NavigationContext";
import documentationMenu from "~/data/documentationMenu";

export default function Aside(props) {
  const navRef = useRef();
  const { locationPath } = useNavigation();
  const isThemeGeneratorNestedPage = locationPath.includes("/docs/theme-generator/");
  const { menuIsOpenOnMobile, setMenuIsOpenOnMobile } = useDocumentation();
  const [currentCategory, setCurrentCategory] = useState("Getting started");
  const [maxHeight, setMaxHeight] = useState(0);

  const onClose = (event) => {
    event.preventDefault();
    setMenuIsOpenOnMobile(false);
  };

  // Calculate Navigation max height
  const calculateMaxHeight = () => {
    if (!navRef.current) return;
    const navTop = navRef.current.getBoundingClientRect().top;
    const maxHeight = window.innerHeight - navTop;
    setMaxHeight(maxHeight);
  };

  useEffect(() => {
    calculateMaxHeight();
    window.addEventListener("resize", calculateMaxHeight);
    return () => window.removeEventListener("resize", calculateMaxHeight);
  }, []);

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
      <nav
        ref={navRef}
        className="is-sticky-above-lg"
        {...(maxHeight !== 0 && {
          style: { "--max-height": `${maxHeight}px` },
        })}
      >
        {documentationMenu.map((category, index) => {
          const { category: title, links } = category;
          const isCurrentCategory = links.some((link) => link.route === locationPath);
          const shouldOpen =
            isCurrentCategory || (isThemeGeneratorNestedPage && title === "Customization");

          if (isCurrentCategory && currentCategory !== title) {
            setCurrentCategory(title);
          }

          return (
            <details key={index} open={shouldOpen} onToggle={calculateMaxHeight}>
              {/* Category button */}
              <summary {...(shouldOpen && { "aria-current": true })}>{parse(title)}</summary>
              <ul>
                {category.links.map((link, index) => {
                  const { label, route } = link;
                  const isThemeGeneratorLink = link.route === "/docs/theme-generator";

                  // Link
                  return (
                    <li key={index}>
                      <Link
                        to={route}
                        className="secondary"
                        {...(isThemeGeneratorNestedPage && isThemeGeneratorLink
                          ? { "aria-current": "page" }
                          : {})}
                        onClick={() => setMenuIsOpenOnMobile(false)}
                      >
                        {parse(label)}
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
