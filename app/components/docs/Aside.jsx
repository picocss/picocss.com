import { useState } from "react";
import { useMatches } from "@remix-run/react";

import Link from "~/components/Link";

import useCurrentPath from "~/utils/useCurrentPath";

import CollapseIcon from "~/components/icons/Collapse";
import ExpandIcon from "~/components/icons/Expand";

export default function Aside(props) {
  const currentPath = useCurrentPath();

  const docLinks = [
    {
      category: "Getting started",
      links: [
        { label: "Usage", route: "/docs" },
        { label: "Themes", route: "/docs/themes" },
        { label: "Class-less version", route: "/docs/classless" },
        { label: "RTL", route: "/docs/rtl" },
      ],
    },
    {
      category: "Customize",
      links: [
        { label: "CSS variables", route: "/docs/customization" },
        { label: "Sass", route: "/docs/sass" },
        { label: "Colors", route: "/docs/colors" },
        { label: "We love .classes", route: "/docs/we-love-classes" },
      ],
    },
    {
      category: "Layout",
      links: [
        { label: "Container", route: "/docs/container" },
        { label: "Landmarks & section", route: "/docs/landmarks-sections" },
        { label: "Grid", route: "/docs/grid" },
        { label: "Horizontal scroller", route: "/docs/scroller" },
      ],
    },
    {
      category: "Content",
      links: [
        { label: "Typography", route: "/docs/typography" },
        { label: "Link", route: "/docs/link" },
        { label: "Button", route: "/docs/button" },
        { label: "Table", route: "/docs/table" },
      ],
    },
    {
      category: "Forms",
      links: [
        { label: "Overview", route: "/docs/forms" },
        { label: "Input", route: "/docs/forms/input" },
        { label: "Select", route: "/docs/forms/select" },
        { label: "Check, radio & switch", route: "/docs/forms/check-radio-switch" },
      ],
    },
    {
      category: "Components",
      links: [
        { label: "Accordion", route: "/docs/accordion" },
        { label: "Card", route: "/docs/card" },
        { label: "Dropdown", route: "/docs/dropdown" },
        { label: "Modal", route: "/docs/modal" },
        { label: "Nav", route: "/docs/nav" },
        { label: "Progress", route: "/docs/progress" },
      ],
    },
    {
      category: "Utilities",
      links: [
        { label: "Loading", route: "/docs/loading" },
        { label: "Tooltip", route: "/docs/tooltip" },
      ],
    },
  ];

  const routes = useMatches();
  const isCustomizationNestedPage = routes.some(
    (route) => route.pathname === "/docs/customization"
  );

  const [isCollapsedOnMobile, setIsCollapsedOnMobile] = useState(true);

  return (
    <aside {...props}>
      {/* Table of content button */}
      <button onClick={() => setIsCollapsedOnMobile(!isCollapsedOnMobile)}>
        {isCollapsedOnMobile ? <ExpandIcon /> : <CollapseIcon />}
        Table of content
      </button>

      {/* Navigation */}
      <nav {...(isCollapsedOnMobile && { className: "is-collapsed-on-mobile" })}>
        {docLinks.map((category, index) => {
          const isCurrentCategory = category.links.some((link) => link.route === currentPath);
          const shouldOpen =
            isCurrentCategory || (isCustomizationNestedPage && category.category === "Customize");

          return (
            <details key={index} open={shouldOpen}>
              {/* Category button */}
              <summary {...(shouldOpen && { "aria-current": true })}>{category.category}</summary>
              <ul>
                {category.links.map((link, index) => {
                  const isCustomizationPage = link.route === "/docs/customization";

                  // Link
                  return (
                    <li key={index}>
                      <Link
                        to={link.route}
                        className="secondary"
                        {...(isCustomizationNestedPage &&
                          isCustomizationPage && { "aria-current": "page" })}
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
