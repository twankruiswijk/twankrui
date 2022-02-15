import { ReactNode } from 'react';
import { heading } from '~/styles/typography';

export default function Post() {
  return (
    <article className="py-20 md:py-32">
      <div className="container">
        <div className="grid gap-x-4 grid-cols-12 mb-10 md:mb-16">
          <div className="col-span-full lg:col-span-8">
            <h1 className={`${heading} inset-1 col-span-full`}>
              &gt; Don’t let your home office become a prison.
            </h1>

            <span className="font-normal">
              Published on{' '}
              <a href="https://remote101.blo g" className="font-semibold">
                Remote101
              </a>{' '}
              on <time>January 31</time> . 4 min read
            </span>
          </div>
        </div>

        <div className="w-full h-80 md:h-[34rem] rounded-md overflow-hidden shadow-primary mb-10 md:mb-16">
          <img
            src="https://images.unsplash.com/photo-1605565348518-bef3e7d6fed8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDJ8fGhvbWUlMjBvZmZpY2V8ZW58MHx8fHwxNjQzNjQzNDI0&ixlib=rb-1.2.1&q=80&w=2000"
            alt="post image"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="grid gap-x-4 grid-cols-12">
          <div className="col-span-full md:col-span-1 order-1 md:order-none">
            <div className="md:sticky top-4 flex items-center md:block space-x-3 md:space-x-0 md:space-y-3">
              <span className="block">Share</span>

              <ShareButton
                linkUrl="https://twitter.com"
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
              <ShareButton
                linkUrl="https://linkedin.com"
                icon={
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>LinkedIn</title>
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                }
              />

              <ShareButton
                linkUrl="mailto:jaja"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                }
              />
            </div>
          </div>
          <div className="col-span-full md:col-start-3 md:col-span-10 lg:col-span-8 space-y-8 text-lg mb-12 md:mb-0">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
              autem illum ullam libero cumque voluptas, a quo ipsam beatae ut
              aliquam neque, aperiam harum id? Amet tempora quis quibusdam
              architecto? Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Quae autem illum ullam libero cumque voluptas, a quo ipsam
              beatae ut aliquam neque, aperiam harum id? Amet tempora quis
              quibusdam architecto?
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
              autem illum ullam libero cumque voluptas, a quo ipsam beatae ut
              aliquam neque, aperiam harum id? Amet tempora quis quibusdam
              architecto?
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
              autem illum ullam libero cumque voluptas, a quo ipsam beatae ut
              aliquam neque, aperiam harum id? Amet tempora quis quibusdam
              architecto?
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
              autem illum ullam libero cumque voluptas, a quo ipsam beatae ut
              aliquam neque, aperiam harum id? Amet tempora quis quibusdam
              architecto?
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
              autem illum ullam libero cumque voluptas, a quo ipsam beatae ut
              aliquam neque, aperiam harum id? Amet tempora quis quibusdam
              architecto?
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
              autem illum ullam libero cumque voluptas, a quo ipsam beatae ut
              aliquam neque, aperiam harum id? Amet tempora quis quibusdam
              architecto?
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
              autem illum ullam libero cumque voluptas, a quo ipsam beatae ut
              aliquam neque, aperiam harum id? Amet tempora quis quibusdam
              architecto? Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Quae autem illum ullam libero cumque voluptas, a quo ipsam
              beatae ut aliquam neque, aperiam harum id? Amet tempora quis
              quibusdam architecto?
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
              autem illum ullam libero cumque voluptas, a quo ipsam beatae ut
              aliquam neque, aperiam harum id? Amet tempora quis quibusdam
              architecto?
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
              autem illum ullam libero cumque voluptas, a quo ipsam beatae ut
              aliquam neque, aperiam harum id? Amet tempora quis quibusdam
              architecto?
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
              autem illum ullam libero cumque voluptas, a quo ipsam beatae ut
              aliquam neque, aperiam harum id? Amet tempora quis quibusdam
              architecto?
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
              autem illum ullam libero cumque voluptas, a quo ipsam beatae ut
              aliquam neque, aperiam harum id? Amet tempora quis quibusdam
              architecto?
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
              autem illum ullam libero cumque voluptas, a quo ipsam beatae ut
              aliquam neque, aperiam harum id? Amet tempora quis quibusdam
              architecto?
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

type ShareButtonProps = {
  linkUrl: string;
  icon: ReactNode;
};

const ShareButton = ({ linkUrl, icon }: ShareButtonProps) => (
  <a
    href={linkUrl}
    target="_blank"
    rel="noopener noreferrer nofollow"
    className="flex items-center justify-center bg-brand-400 w-11 h-11 rounded-full"
  >
    <span className="block w-5 h-5 fill-white transition hover:fill-white/75">
      {icon}
    </span>
  </a>
);
