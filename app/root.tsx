import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'remix';
import type { MetaFunction } from 'remix';

import Navigation from '~/components/Navigation';
import Footer from './components/Navigation/Footer';

import styles from './tailwind.css';

export const meta: MetaFunction = () => {
  const description =
    'Twan Kruiswijk is an independent creator who loves to help you build your next front-end. Besides writing code, I write about code, productivity, and remote work.';

  return {
    description,
    keywords:
      'front-end, code, productivity, remote work, creator, developer, designer',
    'twitter:card': 'summary_large_image',
    'twitter:creator': '@twankrui',
    'twitter:site': '@twankrui',
    'og:url': 'https://twankrui.com',
    'og:title': 'Twan Kruiswijk',
    'og:description': description,
    'og:image': '/ogimage.jpg',
  };
};

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-brand-600 text-white">
        <Navigation />
        <Outlet />
        <Footer />

        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  );
}
