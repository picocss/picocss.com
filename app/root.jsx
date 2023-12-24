import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
  isRouteErrorResponse,
} from "@remix-run/react";

import { HelmetProvider } from "react-helmet-async";
import { ModalProvider } from "~/contexts/ModalContext";
import { PageProvider } from "~/contexts/PageContext";

import picoStyles from "~/styles/css/main.css";
import metaData from "~/data/meta";

import Body from "./components/Body";
import RootError from "./components/RootError";
import Footer from "./components/Footer";
import DynamicMeta from "./components/DynamicMeta";
import StructuredData from "./components/StructuredData";

const { domain, siteName, titleSuffix, twitterHandle } = metaData();

export const meta = () => {
  return [
    {
      name: "og:image",
      content: `${domain}/opengraph.png`,
    },
    {
      name: "og:image:type",
      content: "image/png",
    },
    {
      name: "og:image:width",
      content: "1200",
    },
    {
      name: "og:image:height",
      content: "630",
    },
    {
      name: "og:site_name",
      content: siteName,
    },
    {
      name: "og:type",
      content: "website",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:domain",
      content: domain,
    },
    {
      name: "twitter:site",
      content: twitterHandle,
    },
  ];
};

export function links() {
  return [
    // Favicons
    { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
    { rel: "icon", href: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
    { rel: "apple-touch-icon", href: "/apple-touch-icon.png", type: "image/png", sizes: "180x180" },
    { rel: "manifest", href: "/site.webmanifest" },

    // Styles
    { rel: "stylesheet", href: picoStyles },
  ];
}

export function ErrorBoundary() {
  const error = useRouteError();

  return (
    <HelmetProvider>
      <PageProvider>
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <meta name="theme-color" content="#2a3140" />
          <Meta />
          <title>
            {isRouteErrorResponse(error)
              ? `${error.status} ${error.statusText} ${titleSuffix}`
              : `Something went wrong ${titleSuffix}`}
          </title>
          <Links />
        </head>
        <Body>
          <RootError error={isRouteErrorResponse(error) ? error : null} />
          <Footer />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </Body>
      </PageProvider>
    </HelmetProvider>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <ModalProvider>
        <PageProvider>
          <head>
            <Meta />
            <Links />
            <DynamicMeta />
            <StructuredData />
          </head>
          <Body>
            <Outlet />
            <Footer />
            <ScrollRestoration />
            <Scripts />
            <LiveReload />
          </Body>
        </PageProvider>
      </ModalProvider>
    </HelmetProvider>
  );
}
