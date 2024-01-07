import type { LinksFunction } from '@remix-run/node';
import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from '@remix-run/react';
import stylesheet from '~/tailwind.css';
import { RootLayout } from './RootLayout';

export const links: LinksFunction = () => [
    { rel: 'stylesheet', href: stylesheet },
    { rel: 'icon', href: '/favicon.ico' },
];

export default function App() {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1"
                />
                <title>
                    We are a design and web development studio in San Antonio,
                    TX
                </title>
                <Meta />
                <Links />
            </head>
            <body>
                <div className="relative isolate bg-slate-900">
                    <RootLayout>
                        <Outlet />
                        <ScrollRestoration />
                        <Scripts />
                        <LiveReload />
                    </RootLayout>
                </div>
            </body>
        </html>
    );
}
