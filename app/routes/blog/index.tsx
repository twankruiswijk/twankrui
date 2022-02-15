import Card from '~/components/Card';
import Newsletter from '~/components/Newsletter';
import { heading, paragraph } from '~/styles/typography';

export default function BlogIndex() {
  return (
    <main>
      <section className="pt-20 md:pt-32 mb-8">
        <div className="container">
          <div className="grid gap-x-4 grid-cols-12 grid-rows-[min-content]">
            <h1 className={`${heading} inset-1 col-span-full`}>
              &gt; I build things for the web
            </h1>

            <p className={`${paragraph} mb-8 col-span-full lg:col-span-8`}>
              I am an independent creator who loves to help you build your next
              front-end. Besides writing code, I write about code, productivity,
              and remote work.
            </p>

            <div className="col-span-full">
              <div className="mt-4 md:mt-0">
                <Newsletter />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-32">
        <div className="container">
          <div className="grid gap-x-4 gap-y-4 grid-cols-12 lg:gap-y-8">
            <div className="mb-4 lg:mb-0 col-span-full md:col-span-6 lg:col-span-4">
              <Card
                linkUrl="https://www.indiehackers.com/Twan"
                externalLink={true}
                imageUrl="/writing/indiehackers.jpg"
                title="Indie Hackers"
                description="Writing posts and answering other indie hacker's questions."
              />
            </div>
            <div className="mb-4 lg:mb-0 col-span-full md:col-span-6 lg:col-span-4">
              <Card
                linkUrl="https://www.indiehackers.com/Twan"
                externalLink={true}
                imageUrl="/writing/indiehackers.jpg"
                title="Indie Hackers"
                description="Writing posts and answering other indie hacker's questions."
              />
            </div>
            <div className="mb-4 lg:mb-0 col-span-full md:col-span-6 lg:col-span-4">
              <Card
                linkUrl="https://www.indiehackers.com/Twan"
                externalLink={true}
                imageUrl="/writing/indiehackers.jpg"
                title="Indie Hackers"
                description="Writing posts and answering other indie hacker's questions."
              />
            </div>
            <div className="mb-4 lg:mb-0 col-span-full md:col-span-6 lg:col-span-4">
              <Card
                linkUrl="https://www.indiehackers.com/Twan"
                externalLink={true}
                imageUrl="/writing/indiehackers.jpg"
                title="Indie Hackers"
                description="Writing posts and answering other indie hacker's questions."
              />
            </div>
            <div className="mb-4 lg:mb-0 col-span-full md:col-span-6 lg:col-span-4">
              <Card
                linkUrl="https://www.indiehackers.com/Twan"
                externalLink={true}
                imageUrl="/writing/indiehackers.jpg"
                title="Indie Hackers"
                description="Writing posts and answering other indie hacker's questions."
              />
            </div>
            <div className="mb-4 lg:mb-0 col-span-full md:col-span-6 lg:col-span-4">
              <Card
                linkUrl="https://www.indiehackers.com/Twan"
                externalLink={true}
                imageUrl="/writing/indiehackers.jpg"
                title="Indie Hackers"
                description="Writing posts and answering other indie hacker's questions."
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
