import { PropsWithChildren } from "react";
import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useRouteError
} from "@remix-run/react";
import tailwind from "./tailwind.css";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  { rel: "stylesheet", href: tailwind }
];

export function Document({ title = 'Open Data Search', children }: PropsWithChildren<{ title?: string }>) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}


export function ErrorBoundary() {
  const error = useRouteError();

  return (
    <Document>
      <div className="flex justify-center p-4 text-lg">
        {isRouteErrorResponse(error) ? (
          <div>
            <h1>Error</h1>
            <p>Status: {error.status}</p>
            <p>{error.data.message}</p>
          </div>
        ) : (
          <div>
            <h1>Uh oh. Something went wrong.</h1>
            <p>{(error as Error).message ?? 'Unknown error'}</p>
          </div>
        )}
      </div>
    </Document>
  );
}

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}
