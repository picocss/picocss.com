import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import { HelmetProvider } from "react-helmet-async";

import { PageProvider } from "~/contexts/PageContext";

import picoStyles from "~/styles/css/main.min.css";
import FaviconsAndOpenGraph from "~/components/FaviconsAndOpenGraph";
import Header from "~/components/header";

export const meta = () => ({
  charset: "utf-8",
  title: "Pico",
  viewport: "width=device-width,initial-scale=1",
});

export function links() {
  return [{ rel: "stylesheet", href: picoStyles }];
}

export default function App() {
  return (
    <HelmetProvider>
      <PageProvider>
        <head>
          <Meta />
          <Links />
          <FaviconsAndOpenGraph />
        </head>
        <body>
          <Header />
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </PageProvider>
    </HelmetProvider>
  );
}
