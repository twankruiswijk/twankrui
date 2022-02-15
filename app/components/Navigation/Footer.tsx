import { ReactNode } from 'react';

import Button, { ButtonSize } from '../Button';
import Newsletter from '../Newsletter';

export default function Footer() {
  const footerTitleStyles = 'text-2xl font-semibold mb-1';
  const footerTextStyles = 'text-base text-white/80 mb-4';

  return (
    <footer className="border-t border-white/25 py-12">
      <div className="container">
        <div className="grid gap-x-4 grid-cols-12 space-y-12 lg:space-y-0">
          <div className="col-span-full lg:col-span-3">
            <h1 className={footerTitleStyles}>Twan Kruiswijk</h1>
            <p className={footerTextStyles}>
              Creator &amp; front-end developer, building things for the web.
            </p>

            <div className="grid gap-x-4 grid-cols-[2rem_1fr] text-sm text-white/80 mb-6">
              <span>Kvk</span>
              <span>84572922</span>

              <span>BTW</span>
              <span>NL003984327B90</span>
            </div>

            <ul className="flex space-x-4">
              <li>
                <SocialLink
                  linkUrl="https://twitter.com/twankrui"
                  icon={
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Twitter</title>
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  }
                />
              </li>
              <li>
                <SocialLink
                  linkUrl="https://github.com/twankruiswijk"
                  icon={
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>GitHub</title>
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                  }
                />
              </li>
              <li>
                <SocialLink
                  linkUrl="https://twitch.tv/twankrui"
                  icon={
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Twitch</title>
                      <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z" />
                    </svg>
                  }
                />
              </li>
              <li>
                <SocialLink
                  linkUrl="https://dev.to/twankrui"
                  icon={
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>dev.to</title>
                      <path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.3zm5.09-5.47h-2.47v1.77h1.52v1.28l-.72.04-.75.03v1.77l1.22.03 1.2.04v1.28h-1.6c-1.53 0-1.6-.01-1.87-.3l-.3-.28v-3.16c0-3.02.01-3.18.25-3.48.23-.31.25-.31 1.88-.31h1.64v1.3zm4.68 5.45c-.17.43-.64.79-1 .79-.18 0-.45-.15-.67-.39-.32-.32-.45-.63-.82-2.08l-.9-3.39-.45-1.67h.76c.4 0 .75.02.75.05 0 .06 1.16 4.54 1.26 4.83.04.15.32-.7.73-2.3l.66-2.52.74-.04c.4-.02.73 0 .73.04 0 .14-1.67 6.38-1.8 6.68z" />
                    </svg>
                  }
                />
              </li>
              <li>
                <SocialLink
                  linkUrl="https://medium.com/@Twankruiswijk"
                  icon={
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Medium</title>
                      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                    </svg>
                  }
                />
              </li>
            </ul>
          </div>

          <div className="col-span-full lg:col-start-5 lg:col-span-4">
            <h1 className={footerTitleStyles}>Contact</h1>
            <p className={footerTextStyles}>
              Want to work together, ask me a question, or just drop me a line?
              Send me an email!
            </p>

            <div className="flex space-x-4">
              <Button
                title="Copy to clipboard"
                size={ButtonSize.sm}
                handleClick={() =>
                  navigator.clipboard.writeText('twan@tarch.nl')
                }
              />
              <Button
                isExternalLink
                linkUrl="mailto:twan@tarch.nl"
                title="Open your email"
                size={ButtonSize.sm}
              />
            </div>
          </div>

          <div className="col-span-full lg:col-start-10 lg:col-span-3">
            <h1 className={footerTitleStyles}>Stay up to date</h1>
            <p className={footerTextStyles}>
              Stay up to date with everything I publish!
            </p>

            <Newsletter column />
          </div>

          <p className="col-span-full text-sm">
            All rights reserved © Twan Kruiswijk (t-arch) 2022
          </p>
        </div>
      </div>
    </footer>
  );
}

type SocialLinkProps = {
  linkUrl: string;
  icon: ReactNode;
};

const SocialLink = ({ linkUrl, icon }: SocialLinkProps) => {
  return (
    <a href={linkUrl} target="_blank" rel="noopener noreferrer nofollow">
      <span className="block w-6 h-6 fill-white transition hover:fill-white/75">
        {icon}
      </span>
    </a>
  );
};
