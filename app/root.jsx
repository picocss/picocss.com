import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useRouteError,
} from "@remix-run/react";
import Body from "~/components/Body";
import Footer from "~/components/Footer";
import Head from "~/components/Head/";
import RootError from "~/components/RootError";
import StructuredData from "~/components/StructuredData";
import { HeaderProvider } from "~/contexts/HeaderContext";
import { ModalProvider } from "~/contexts/ModalContext";
import { PageProvider } from "~/contexts/PageContext";
import metaData from "~/data/meta";
import picoStyles from "~/styles/css/main.css";

const { titleSuffix } = metaData;

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
    <PageProvider>
      <HeaderProvider>
        <Head>
          <Meta />
          <title>
            {isRouteErrorResponse(error)
              ? `${error.status} ${error.statusText} ${titleSuffix}`
              : `Something went wrong ${titleSuffix}`}
          </title>
          <Links />
        </Head>
        <Body>
          <RootError error={isRouteErrorResponse(error) ? error : null} />
          <Footer />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </Body>
      </HeaderProvider>
    </PageProvider>
  );
}

export default function App() {
  return (
    <ModalProvider>
      <PageProvider>
        <HeaderProvider>
          <Head>
            <Meta />
            <Links />
            <StructuredData />
          </Head>
          <Body>
            <Outlet />
            <Footer />
            <ScrollRestoration />
            <Scripts />
            <LiveReload />
          </Body>
        </HeaderProvider>
      </PageProvider>
    </ModalProvider>
  );
}
