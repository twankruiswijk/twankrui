import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from 'remix';
import type { MetaFunction } from 'remix';

import Navigation from '~/components/Navigation';
import Footer from './components/Navigation/Footer';
import Button, { ButtonSize } from './components/Button';

import { heading, paragraph } from '~/styles/typography';

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

export function CatchBoundary() {
  const caught = useCatch();

  let message;

  switch (caught.status) {
    case 404:
      message = "This is not the page you're looking for";
      break;
    default:
      throw new Error(caught.data || caught.statusText);
  }

  return (
    <html className="h-full">
      <head>
        <title>Oopsie!</title>
        <Meta />
        <Links />
      </head>
      <body className="h-full bg-brand-600 text-white">
        <Navigation />

        <main className="flex py-20 md:py-32 flex-col items-center justify-center">
          <div className="h-40 w-40 mx-auto mb-10">
            <img src="/404-cat.png" alt="even the cat is angry at the server" />
          </div>
          <h1 className={`${heading} mb-2 md:mb-2`}>
            {caught.status}: {caught.statusText}
          </h1>

          {message && <p className={paragraph}>{message}</p>}

          <div className="w-48 mx-auto mt-6">
            <Button title="Take me home" linkUrl="/" size={ButtonSize.sm} />
          </div>
        </main>
        <Footer />

        <Scripts />
      </body>
    </html>
  );
}
