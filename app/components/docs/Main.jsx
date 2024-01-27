import { useNavigation } from "~/contexts/NavigationContext";

function getPageId(routePath) {
  let pageId =
    routePath === "/docs/"
      ? "index"
      : routePath
          .replace("/docs/", "")
          .replace(/\/\s*$/, "")
          .replace(/\//g, "-");
  if (pageId.includes("theme-generator-")) {
    pageId = "theme-generator";
  }
  return pageId;
}

export default function Main({ children, ...props }) {
  const { isLoading, routePath } = useNavigation();
  const pageId = getPageId(routePath);

  const pageIdsWithoutTableOfContents = [
    "color-schemes",
    "rtl",
    "theme-generator",
    "scroller",
    "link",
    "forms-range",
    "loading",
    "mission",
    "usage-scenarios",
  ];
  const hasTableOfContents = !pageIdsWithoutTableOfContents.includes(pageId);

  const classNames = [
    "container",
    hasTableOfContents && "has-table-of-contents",
    isLoading && "is-loading",
    `page-${pageId}`,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <main className={classNames} {...props}>
      {children}
    </main>
  );
}
