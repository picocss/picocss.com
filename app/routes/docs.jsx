import { Outlet } from "@remix-run/react";
import Header from "~/components/Header";
import Breadcrumb from "~/components/docs/Breadcrumb";
import DocumentationMenu from "~/components/docs/DocumentationMenu";
import Main from "~/components/docs/Main";
import { DocumentationProvider } from "~/contexts/DocumentationContext";
import docsStyles from "~/styles/css/docs.css";
import SkipToContent from "~/components/SkipToContent";

export function links() {
  return [{ rel: "stylesheet", href: docsStyles }];
}

export default function DocsPage() {
  return (
    <DocumentationProvider>
      <SkipToContent />
      <Header headerIsFixed={true} shouldDisplayDocsVersion={true} />
      <Main>
        <Breadcrumb />
        <DocumentationMenu />
        <Outlet />
      </Main>
    </DocumentationProvider>
  );
}
