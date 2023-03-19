import { useNavigation } from "~/contexts/NavigationContext";

export default function Main({ children, ...props }) {
  const { routePath } = useNavigation();
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

  // Hack for Firefox, which doesn't support the `:has()` pseudo-class
  const pageIdsWithoutTableOfContents = [
    "color-schemes",
    "rtl",
    "theme-generator",
    "container",
    "landmarks-section",
    "grid",
    "scroller",
    "link",
    "forms-range",
    "modal",
    "nav",
    "progress",
    "loading",
    "tooltip",
  ];
  const hasTableOfContents = !pageIdsWithoutTableOfContents.includes(pageId);

  return (
    <main
      className={`container${hasTableOfContents ? " has-table-of-contents" : ""}`}
      id={pageId}
      {...props}
    >
      {children}
    </main>
  );
}
