import { Outlet } from "@remix-run/react";

import { HeaderProvider } from "~/contexts/HeaderContext";
import { DocumentationProvider } from "~/contexts/DocumentationContext";
import { useNavigation } from "~/contexts/NavigationContext";

import docsStyles from "~/styles/css/docs.css";

import Breadcrumb from "~/components/docs/Breadcrumb";
import Header from "~/components/Header";
import DocumentationMenu from "~/components/docs/DocumentationMenu";
import LoadingDocPage from "~/components/docs/LoadingDocPage";

export function links() {
  return [{ rel: "stylesheet", href: docsStyles }];
}

export default function DocsPage(props) {
  const { routePath, isLoading, nextPageCurrentlyLoading, shouldDisplayLoadingState } =
    useNavigation();

  const nextPageIsAGeneratedThemePage =
    isLoading &&
    nextPageCurrentlyLoading.includes("/docs/theme-generator") &&
    routePath.includes("/docs/theme-generator");

  const pageId =
    routePath === "/docs" ? "index" : routePath.replace("/docs/", "").replace(/\//g, "-");

  return (
    <DocumentationProvider>
      <HeaderProvider>
        <Header headerIsFixed={true} />
        <main className="container" id={pageId} {...props}>
          <Breadcrumb />
          <DocumentationMenu />
          {isLoading && shouldDisplayLoadingState && !nextPageIsAGeneratedThemePage ? (
            <LoadingDocPage />
          ) : (
            <Outlet />
          )}
        </main>
      </HeaderProvider>
    </DocumentationProvider>
  );
}
