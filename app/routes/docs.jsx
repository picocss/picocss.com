import { Outlet } from "@remix-run/react";

import { useCurrentPath } from "~/utils";
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
    </DocumentationProvider>
  );
}
