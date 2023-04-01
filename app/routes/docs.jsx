import { Outlet } from "@remix-run/react";

import { HeaderProvider } from "~/contexts/HeaderContext";
import { DocumentationProvider } from "~/contexts/DocumentationContext";
import { useNavigation } from "~/contexts/NavigationContext";

import docsStyles from "~/styles/css/docs.css";

import Header from "~/components/Header";
import Main from "~/components/docs/Main";
import Breadcrumb from "~/components/docs/Breadcrumb";
import DocumentationMenu from "~/components/docs/DocumentationMenu";
import LoadingDocPage from "~/components/docs/LoadingDocPage";

export function links() {
  return [{ rel: "stylesheet", href: docsStyles }];
}

export default function DocsPage() {
  const { routePath, isLoading, nextPageCurrentlyLoading, shouldDisplayLoadingState } =
    useNavigation();

  const nextPageIsAGeneratedThemePage =
    isLoading &&
    nextPageCurrentlyLoading.includes("/docs/theme-generator") &&
    routePath.includes("/docs/theme-generator");

  return (
    <DocumentationProvider>
      <HeaderProvider>
        <Header headerIsFixed={true} />
        <Main>
          <Breadcrumb />
          <DocumentationMenu />
          {isLoading && shouldDisplayLoadingState && !nextPageIsAGeneratedThemePage ? (
            <LoadingDocPage />
          ) : (
            <Outlet />
          )}
        </Main>
      </HeaderProvider>
    </DocumentationProvider>
  );
}
