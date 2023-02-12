import { Outlet } from "@remix-run/react";

import useCurrentPath from "~/utils/useCurrentPath";

import Header from "~/components/Header";
import Aside from "~/components/docs/Aside";
import docsStyles from "~/styles/css/docs.css";

export function links() {
  return [{ rel: "stylesheet", href: docsStyles }];
}

export default function DocsPage(props) {
  const currentPath = useCurrentPath();
  const pageId = currentPath.substring(1).replace("docs/", "").replace("forms/", "");

  return (
    <>
      <Header className="fixed" />
      <main className="container" {...props}>
        <Aside />
        <div role="document" id={pageId}>
          <Outlet />
        </div>
      </main>
    </>
  );
}
