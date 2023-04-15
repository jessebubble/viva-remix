import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import stylesheet from "~/tailwind.css";
import GlobalPattern from "./GlobalPattern";
import GlobalNavigation from "./GlobalNavigation";
import GlobalFooter from "./GlobalFooter";

export default function App() {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width,initial-scale=1" />
                <Meta />
                <Links />
            </head>
            <body>
                <div className="relative isolate bg-slate-900">
                    <GlobalPattern />
                    <GlobalNavigation />
                    <Outlet />
                </div>
                <div>
                    <GlobalFooter />
                </div>
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    );
}

export const links: LinksFunction = () => [
    { rel: "stylesheet", href: stylesheet },
    { rel: "stylesheet", href: "https://rsms.me/inter/inter.css" },
];