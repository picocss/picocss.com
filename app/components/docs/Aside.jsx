import Link from "~/components/Link";
import useCurrentPath from "~/utils/useCurrentPath";

export default function Aside(props) {
  const currentPath = useCurrentPath();

  const docLinks = [
    {
      category: "Getting started",
      links: [
        { label: "Usage", route: "/docs" },
        { label: "Themes", route: "/docs/themes" },
        { label: "Customization", route: "/docs/customization" },
        { label: "Class-less version", route: "/docs/classless" },
        { label: "RTL", route: "/docs/rtl" },
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
    {
      category: "Extend",
      links: [{ label: "We love .classes", route: "/docs/we-love-classes" }],
    },
  ];

  return (
    <aside {...props}>
      <nav>
        {docLinks.map((category, index) => {
          const isCurrentCategory = category.links.some((link) => link.route === currentPath);
          return (
            <details key={index} open={isCurrentCategory}>
              <summary>{category.category}</summary>
              <ul>
                {category.links.map((link, index) => (
                  <li key={index}>
                    <Link to={link.route} className="secondary">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          );
        })}
      </nav>
    </aside>
  );
}
