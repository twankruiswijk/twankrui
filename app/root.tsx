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
import {
  transitions,
  positions,
  types,
  Provider as AlertProvider,
} from 'react-alert';

import Navigation from '~/components/Navigation';
import Footer from '~/components/Navigation/Footer';
import Button, { ButtonSize } from '~/components/Button';
import Alert from '~/components/Alert';

import styles from './tailwind.css';
import { heading, paragraph } from '~/styles/typography';

export const meta: MetaFunction = () => {
  const title = 'Twan Kruiswijk - front-end developer';
  const description =
    'Twan Kruiswijk is an independent creator who loves to help you build your next front-end. Besides writing code, I write about code, productivity, and remote work.';
  const imageURL = 'https://twankrui.com/ogimage.jpg';

  return {
    title: title,
    description,
    keywords:
      'front-end, code, productivity, remote work, creator, developer, designer',
    'twitter:title': title,
    'twitter:description': description,
    'twitter:card': 'summary_large_image',
    'twitter:creator': '@twankrui',
    'twitter:site': '@twankrui',
    'twitter:image': imageURL,
    'og:url': 'https://twankrui.com',
    'og:title': 'Twan Kruiswijk',
    'og:description': description,
    'og:image': imageURL,
    'msapplication-TileColor': '#00031d',
    'theme-color': '#00031d',
  };
};

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles,
    },
    {
      rel: 'apple-touch-icon',
      size: '180x180',
      href: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      size: '32x32',
      type: 'image/png',
      href: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      size: '16x16',
      type: 'image/png',
      href: '/favicon-16x16.png',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
    {
      rel: 'mask-icon',
      color: '#00031',
      href: '/safari-pinned-tab.svg',
    },
  ];
}

const alertOptions = {
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: '16px',
  type: types.SUCCESS,
  transition: transitions.FADE,
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <AlertProvider template={Alert} {...alertOptions}>
        <body className="bg-brand-600 text-white">
          <Navigation />
          <Outlet />
          <Footer />

          <ScrollRestoration />
          <Scripts />
          {process.env.NODE_ENV === 'development' && <LiveReload />}
        </body>
      </AlertProvider>
    </html>
  );
}

export function CatchBoundary() {
  const caught = useCatch();

  let message;

  switch (caught.status) {
    case 404:
      message = "This is not the page you're looking for.";
      break;
    default:
      throw new Error(caught.data || caught.statusText);
  }

  return (
    <html className="h-full">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>Oopsie!</title>
        <Meta />
        <Links />
      </head>
      <AlertProvider template={Alert} {...alertOptions}>
        <body className="h-full bg-brand-600 text-white">
          <Navigation />

          <main className="flex py-20 md:py-32 flex-col items-center justify-center">
            <div className="h-40 w-40 mx-auto mb-10">
              <img
                src="/404-cat.webp"
                alt="even the cat is angry at the server"
              />
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
          {process.env.NODE_ENV === 'development' && <LiveReload />}
        </body>
      </AlertProvider>
    </html>
  );
}
