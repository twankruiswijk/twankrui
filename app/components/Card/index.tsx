import { Link } from 'remix';

type Props = {
  imageUrl: string;
  title: string;
  description: string;
  linkUrl: string;
  externalLink?: boolean;
};

export default function Card({
  imageUrl,
  title,
  description,
  linkUrl,
  externalLink,
}: Props) {
  const CardStyles =
    'relative flex items-end h-60 rounded-md shadow-primary overflow-hidden';

  const renderCardContents = (
    <article className="flex items-end h-full w-full">
      <div className="absolute inset-0 -z-10 h-full w-full">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-600/25 to-brand-600/75" />
      </div>

      <div className="p-4">
        <h1 className="text-lg font-semibold">{title}</h1>
        <p className="text-white/80">{description}</p>
      </div>
    </article>
  );

  if (externalLink) {
    return (
      <a
        href={linkUrl}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className={CardStyles}
      >
        {renderCardContents}
      </a>
    );
  }

  return (
    <Link to={linkUrl} className={CardStyles}>
      {renderCardContents}
    </Link>
  );
}
