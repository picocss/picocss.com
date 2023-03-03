import { Outlet } from "@remix-run/react";

import useCurrentPath from "~/utils/useCurrentPath";
import { DocumentationProvider } from "~/contexts/DocumentationContext";
import Breadcrumb from "~/components/docs/Breadcrumb";
import Header from "~/components/Header";
import DocumentationMenu from "~/components/docs/DocumentationMenu";

import docsStyles from "~/styles/css/docs.css";

export function links() {
  return [{ rel: "stylesheet", href: docsStyles }];
}

export default function DocsPage(props) {
  const currentPath = useCurrentPath();
  const pageId =
    currentPath === "/docs" ? "index" : currentPath.replace("/docs/", "").replace(/\//g, "-");
  return (
    <DocumentationProvider>
      <Header headerIsFixed={true} />
      <main className="container" id={pageId} {...props}>
        <Breadcrumb />
        <DocumentationMenu />
        <Outlet />
      </main>
      <noscript>
        <style>
          {`
            main [aria-label=breadcrumb] {
              display: none !important;
            }
            
            main aside#documentation-menu {
              display: block !important;
              margin-left: 0 !important;
              transform: inherit !important;
              position: relative !important;
              z-index: inherit !important;
              padding: 0 !important;
            }
            
            main aside#documentation-menu header {
              height: auto !important;
            }
            
            main aside#documentation-menu header a {
              display: none !important;
            }
          `}
        </style>
      </noscript>
    </DocumentationProvider>
  );
}
