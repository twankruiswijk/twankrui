import FeaturedListItem from './FeaturedListItem';

import { heading, paragraph, subHeader } from '~/styles/typography';

export type Project = {
  logoUrl: string;
  title: string;
  description: string;
  linkUrl?: string;
};

type Props = {
  title: string;
  description: string;
  listTitle: string;
  projects: Project[];
};

export default function FeaturedList({
  title,
  description,
  listTitle,
  projects,
}: Props) {
  const renderProjects = projects.map((p) => (
    <FeaturedListItem
      key={p.title}
      logoUrl={p.logoUrl}
      title={p.title}
      description={p.description}
      linkUrl={p.linkUrl}
    />
  ));

  return (
    <section className="relative">
      <div className="grid gap-x-4 grid-cols-12 grid-rows-[min-content]">
        <div className="col-span-full lg:col-span-8 px-4 md:px-8">
          <h2 className={`${heading}`}>{title}</h2>
          <p className={`${paragraph}`}>{description}</p>
        </div>
      </div>

      <div className="mt-12 grid gap-x-4 grid-cols-12 grid-rows-[min-content]">
        <div className="col-span-full px-4 md:px-8">
          <h3 className={subHeader}>{listTitle}</h3>

          <div className="space-y-8">{renderProjects}</div>
        </div>
      </div>

      <div className="absolute w-full h-full inset-0 shadow-primary rounded-md mt-[1.375rem] -z-10" />
    </section>
  );
}
