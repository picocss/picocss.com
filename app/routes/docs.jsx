import { Outlet, useNavigation } from "@remix-run/react";

import { DocumentationProvider } from "~/contexts/DocumentationContext";
import { useCurrentPath } from "~/utils";

import { usePage } from "~/contexts/PageContext";

import Breadcrumb from "~/components/docs/Breadcrumb";
import Header from "~/components/Header";
import DocumentationMenu from "~/components/docs/DocumentationMenu";
import LoadingDocPage from "~/components/docs/LoadingDocPage";

import docsStyles from "~/styles/css/docs.css";

export function links() {
  return [{ rel: "stylesheet", href: docsStyles }];
}

export default function DocsPage(props) {
  const currentPath = useCurrentPath();
  const navigation = useNavigation();
  const nextPageYsAGeneratedThemePage =
    navigation.state === "loading" &&
    navigation.location.pathname.includes("/docs/theme-generator") &&
    currentPath.includes("/docs/theme-generator");

  const { shouldDisplayLoadingState } = usePage();
  const pageId =
    currentPath === "/docs" ? "index" : currentPath.replace("/docs/", "").replace(/\//g, "-");

  return (
    <DocumentationProvider>
      <Header headerIsFixed={true} />
      <main className="container" id={pageId} {...props}>
        <Breadcrumb />
        <DocumentationMenu />
        {shouldDisplayLoadingState &&
        !nextPageYsAGeneratedThemePage &&
        navigation.state === "loading" ? (
          <LoadingDocPage />
        ) : (
          <Outlet />
        )}
      </main>
    </DocumentationProvider>
  );
}
