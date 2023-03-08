import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from "@remix-run/react";

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

// <link rel="stylesheet" media="print" onload="this.onload=null;this.removeAttribute('media');" href="(font CSS URL goes here)">

export function links() {
  return [
    { rel: "stylesheet", href: picoStyles },
    { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Figtree:wght@700&family=Fira+Code&display=swap",
    },
  ];
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
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </PageProvider>
    </HelmetProvider>
  );
}
