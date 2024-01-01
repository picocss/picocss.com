import { Outlet } from "@remix-run/react";

import { HeaderProvider } from "~/contexts/HeaderContext";
import { DocumentationProvider } from "~/contexts/DocumentationContext";

import docsStyles from "~/styles/css/docs.css";

import Header from "~/components/Header";
import Main from "~/components/docs/Main";
import Breadcrumb from "~/components/docs/Breadcrumb";
import DocumentationMenu from "~/components/docs/DocumentationMenu";

export function links() {
  return [{ rel: "stylesheet", href: docsStyles }];
}

export default function DocsPage() {
  return (
    <DocumentationProvider>
      <HeaderProvider>
        <Header headerIsFixed={true} shouldDisplayDocsVersion={true} />
        <Main>
          <Breadcrumb />
          <DocumentationMenu />
          <Outlet />
        </Main>
      </HeaderProvider>
    </DocumentationProvider>
  );
}
