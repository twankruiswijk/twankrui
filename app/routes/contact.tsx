import { HeadersFunction, MetaFunction } from 'remix';
import { useAlert } from 'react-alert';

import { heading, paragraph } from '../styles/typography';
import Button, { ButtonSize } from '~/components/Button';

export const meta: MetaFunction = () => {
  return {
    title: 'Contact Twan',
    description:
      'Would you like to work together, ask me a question, or just drop me a line? Don’t hesitate to send me an email or DM on Twitter!',
    'og:title': 'Contact Twan',
    'og:description':
      'Would you like to work together, ask me a question, or just drop me a line? Don’t hesitate to send me an email or DM on Twitter!',
  };
};

export const headers: HeadersFunction = ({ loaderHeaders, parentHeaders }) => ({
  ...parentHeaders,
  ...loaderHeaders,
  'Cache-Control':
    'public, max-age=600, s-maxage=2678400, stale-while-revalidate=31540000000',
});

export default function Contact() {
  const alert = useAlert();

  return (
    <main>
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid gap-x-4 grid-cols-12 grid-rows-[min-content]">
            <h1 className={`${heading} inset-1 col-span-full`}>
              &gt; Contact or hire me.
            </h1>

            <p className={`${paragraph} mb-8 col-span-full lg:col-span-8`}>
              Would you like to work together, ask me a question, or just drop
              me a line? Don’t hesitate to send me an email or{' '}
              <a
                href="https://twitter.com/twankrui"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="underline"
              >
                DM on Twitter!
              </a>
            </p>

            <div className="col-span-full mb-8">
              <div className="grid gap-x-4 grid-cols-[3rem_1fr] grid-rows-3 text-lg">
                <span className="text-white/80">Co.</span>
                <span>t-arch</span>

                <span className="text-white/80">KvK</span>
                <span>84572922</span>

                <span className="text-white/80">BTW</span>
                <span>NL003984327B90</span>
              </div>
            </div>

            <div className="col-span-full">
              <p className="mb-5 font-medium text-lg">
                E-mail me! <a href="mailto:twan@tarch.nl">twan@tarch.nl</a>
              </p>

              <div className="flex space-x-4">
                <Button
                  title="Copy to clipboard"
                  size={ButtonSize.sm}
                  handleClick={() => {
                    navigator.clipboard.writeText('twan@tarch.nl');
                    alert.show(
                      'My email has been copied to your clipboard! 🎉',
                    );
                  }}
                />
                <Button
                  isExternalLink
                  size={ButtonSize.sm}
                  title="Open your email"
                  linkUrl="mailto:twan@tarch.nl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
