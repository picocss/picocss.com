import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from "@remix-run/react";

import { useLocation } from "react-router-dom";

import { HelmetProvider } from "react-helmet-async";
import { PageProvider } from "~/contexts/PageContext";

import picoStyles from "~/styles/css/main.css";
import metaData from "~/data/meta";

import FaviconsAndOpenGraph from "~/components/FaviconsAndOpenGraph";
import RootError from "./components/RootError";

const { titleSuffix } = metaData();

export const meta = () => {
  return {
    charset: "utf-8",
    viewport: "width=device-width,initial-scale=1",
  };
};

export function links() {
  return [{ rel: "stylesheet", href: picoStyles }];
}

export function CatchBoundary() {
  const caught = useCatch();
  return (
    <HelmetProvider>
      <PageProvider>
        <head>
          <Meta />
          <title>{`${caught.status} ${caught.statusText} ${titleSuffix}`}</title>
          <Links />
          <FaviconsAndOpenGraph />
        </head>
        <body>
          <RootError caught={caught} />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </PageProvider>
    </HelmetProvider>
  );
}

export default function App() {
  const { state } = useLocation();
  const { preventScrollReset } = state || false;
  return (
    <HelmetProvider>
      <PageProvider>
        <head>
          <Meta />
          <Links />
          <FaviconsAndOpenGraph />
        </head>
        <body>
          <Outlet />
          {!preventScrollReset && <ScrollRestoration />}
          <Scripts />
          <LiveReload />
        </body>
      </PageProvider>
    </HelmetProvider>
  );
}
