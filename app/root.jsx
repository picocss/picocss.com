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

import RootError from "./components/RootError";
import StructuredData from "./components/StructuredData";

const { domain, siteName, titleSuffix, twitterHandle } = metaData();

export const meta = () => {
  return {
    charset: "utf-8",
    viewport: "width=device-width,initial-scale=1",
    "theme-color": "#2a3140",

    // Open Graph
    "og:image": `${domain}/opengraph.png`,
    "og:image:type": "image/png",
    "og:image:width": "1200",
    "og:image:height": "630",
    "og:site_name": siteName,
    "og:type": "website",
    "twitter:card": "summary_large_image",
    "twitter:domain": domain,
    "twitter:site": twitterHandle,
  };
};

export function links() {
  return [
    // Favicons
    { rel: "icon", href: "/favicon.ico", sizes: "any" },
    { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
    { rel: "icon", href: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
    { rel: "apple-touch-icon", href: "/apple-touch-icon.png", type: "image/png", sizes: "180x180" },
    { rel: "manifest", href: "/site.webmanifest" },

    // Preconnect
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "true" },

    // Styles
    { rel: "stylesheet", href: picoStyles },
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
          <StructuredData />
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
