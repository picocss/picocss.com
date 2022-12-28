import { Outlet } from "@remix-run/react";

import Aside from "~/components/docs/Aside";
import docsStyles from "~/styles/css/docs.min.css";

import useCurrentPath from "~/utils/useCurrentPath";

export function links() {
  return [{ rel: "stylesheet", href: docsStyles }];
}

export default function DocsPage(props) {
  const currentPath = useCurrentPath();
  const pageId = currentPath.substring(1).replace("docs/", "");

  return (
    <main className="container" {...props}>
      <Aside />
      <div role="document" className={pageId}>
        <Outlet />
      </div>
    </main>
  );
}
