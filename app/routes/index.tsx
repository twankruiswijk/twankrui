import { ButtonVariant } from '~/components/Button';

import Newsletter from '~/components/Newsletter';
import Button from '~/components/Button';
import FeaturedList from '~/components/FeaturedList';
import Card from '~/components/Card';

import { heading, paragraph } from '~/styles/typography';

const featuredProjects = [
  {
    logoUrl: '/projects/senorwooly.webp',
    title: 'Señor Wooly',
    description: `While working at MOIJ, I was in charge of completely re-writing the front-end code from scratch. We completely rebuild the student and teacher environment for over a million users in ReactJS.\nFor this project, we incrementally implemented the React and Redux code to run alongside the other parts of the web application written in Go (with the HTML/template package).`,
    linkUrl: 'https://senorwooly.com',
  },
  {
    logoUrl: '/projects/upupland.webp',
    title: 'upupland.xyz',
    description:
      "Crypto and web3, who hasn't heard about the hype? We build a web3 directory where people can find and learn anything about web3.\nThis project uses Notion as a CMS, which released their public API. I also leveraged NextJS's static page generation to render the content from Notion. This way, we don't hit the API threshold, and as an (intended) bonus, it makes the site fast to navigate.",
    linkUrl: 'https://upupland.xyz',
  },
  {
    logoUrl: '/projects/duidelijk.webp',
    title: 'Duidelijk.nu (dutch)',
    description:
      "Not everyone needs a web application but does want a home on the internet. If you need a landing page (with or without CMS), I love to help you out! Besides creating something awesome, we'll also focus on how the landing page can help you turn visitors into leads.\nAlready have a design? Let's get to work!",
    linkUrl: 'https://duidelijk.nu',
  },
];

export default function Index() {
  return (
    <main>
      <section className="pt-20 md:pt-24 lg:pt-32 mb-8">
        <div className="container">
          <div className="grid gap-x-4 grid-cols-12 grid-rows-[min-content]">
            <h1 className="text-4xl md:text-5xl md:leading-tight mb-6 md:mb-8 font-semibold inset-1 col-span-full">
              &gt; I build things for the web
            </h1>

            <p className={`${paragraph} mb-8 col-span-full lg:col-span-8`}>
              I am an independent creator who loves to help you build your next
              front-end. Besides writing code, I write about code, productivity,
              and remote work.
            </p>

            <div className="flex flex-col-reverse md:flex-row md:items-center col-span-full">
              <div className="mt-4 md:mt-0">
                <Newsletter />
              </div>
              <span className="md:ml-4 md:mr-5 mt-4 md:mt-0 opacity-50 text-center">
                or
              </span>
              <Button
                title="Hire me"
                linkUrl="/contact"
                variant={ButtonVariant.secondary}
              />
            </div>
          </div>
        </div>
      </section>

      <div id="projects" className="container pt-12 md:pt-24 lg:pt-32">
        <FeaturedList
          title="&gt; What I built ⚙"
          description="Over the past years, I’ve built a lot of awesome front-ends, from landing pages to a full-blown e-learning platform that included games for the student and complex class management interfaces for the teachers."
          listTitle="Featured projects"
          projects={featuredProjects}
        />
      </div>

      <div className="container pt-20 md:pt-24 lg:pt-32">
        <section className="grid gap-x-4 grid-cols-12 grid-rows-[min-content]">
          <h1 className={`${heading} col-span-full`}>&gt; Where I write 🖊</h1>
          <p className={`${paragraph} mb-8 col-span-full lg:col-span-8`}>
            Besides coding, I also love to provide value to people via writing.
          </p>

          <div className="mb-4 lg:mb-0 col-span-full lg:col-start-1 lg:col-span-4">
            <Card
              linkUrl="https://remote101.blog"
              externalLink={true}
              imageUrl="/writing/remote101.webp"
              title="Remote101.blog"
              description="The blog about working remotely and productivity."
            />
          </div>
          <div className="mb-4 lg:mb-0 col-span-full lg:col-span-4">
            <Card
              linkUrl="https://dev.to/twankrui"
              externalLink={true}
              imageUrl="/writing/devto.webp"
              title="Dev.to"
              description="This is the place where I write about anything dev related."
            />
          </div>
          <div className="mb-4 lg:mb-0 col-span-full lg:col-span-4">
            <Card
              linkUrl="https://www.indiehackers.com/Twan"
              externalLink={true}
              imageUrl="/writing/indiehackers.webp"
              title="Indie Hackers"
              description="Writing posts and answering other indie hacker's questions."
            />
          </div>

          <div className="md:flex md:justify-end md:items-center col-span-full mt-6 lg:mt-12">
            <span className="mr-6 font-medium text-white/80 hidden md:block">
              Want to read all my work?
            </span>
            <Button linkUrl="/blog" title="View more blogs" />
          </div>
        </section>
      </div>

      <div id="about" className="container py-20 md:py-32">
        <section className="grid gap-x-4 grid-cols-12 grid-rows-[min-content]">
          <div className="col-span-full md:col-span-7">
            <h1 className={`${heading}`}>&gt; What I love ❤</h1>

            <div className={`${paragraph} font-normal text-white/80 space-y-4`}>
              <p>
                Besides writing code and blog posts, I am also passionate about
                creating music (I play many instruments, but the guitar is my
                weapon of choice). On the weekends, you'll find me playing games
                with friends or hacking on one of my many side projects.
              </p>
              <p>
                During some of my working hours, I like to stream on Twitch. I
                have been working remotely for the best part of my professional
                life, and I always loved co-working with people who were
                streaming. So, at the end of last year, I decided to start{' '}
                <a
                  href="https://www.twitch.tv/twankrui"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="font-semibold underline"
                >
                  my Twitch channel
                </a>
                , where you can find me working on any of my projects (of
                course, with the approval of the stakeholders of those
                projects).
              </p>
            </div>
          </div>

          <div className="col-span-full md:col-start-9 md:col-span-4 -order-1 md:order-none mb-8 md:mb-0 md:mt-12">
            <img
              src="/twan.webp"
              alt="it's a me, Twan"
              className="rounded-md shadow-primary"
              width="348px"
              height="425px"
            />
          </div>
        </section>
      </div>
    </main>
  );
}
