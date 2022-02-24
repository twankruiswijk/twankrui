import { Link } from 'remix';
import BlurredUpImage from '~/components/BlurredUpImage';

type Props = {
  imageUrl: string;
  title: string;
  description: string;
  linkUrl: string;
  externalLink?: boolean;
  variant?: 'blog' | undefined;
};

export default function Card({
  imageUrl,
  title,
  description,
  linkUrl,
  externalLink,
  variant,
}: Props) {
  const CardStyles = `${
    variant === 'blog' ? 'md:h-[21rem]' : 'h-60 items-end'
  } relative flex rounded-md shadow-primary overflow-hidden transition-shadow hover:shadow-primaryHalf`;

  const renderCardContents = () => {
    if (variant === 'blog') {
      return (
        <article className="w-full">
          <div className="h-60 md:h-44 w-full border rounder-md border-brand-400/75">
            <BlurredUpImage
              imgSrc={imageUrl}
              props={{
                alt: title,
                className: 'h-full w-full object-cover object-center',
                width: '348px',
                height: '208px',
              }}
            />
          </div>

          <div className="p-4">
            {title && (
              <h1 className="text-lg font-semibold leading-snug mb-2">
                {title}
              </h1>
            )}
            {description && (
              <p className="text-white/80 text-sm">
                {description.length > 110
                  ? `${description.substring(0, 110)}...`
                  : description}
              </p>
            )}
          </div>
        </article>
      );
    }

    return (
      <article className="flex items-end h-full w-full">
        <div className="absolute inset-0 -z-10 h-full w-full">
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-cover object-center"
            width="348px"
            height="240px"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-600/40 to-brand-600/90" />
        </div>

        <div className="p-4">
          <h1 className="text-lg font-bold">{title}</h1>
          <p className="text-white/80 text-sm">{description}</p>
        </div>
      </article>
    );
  };

  if (externalLink) {
    return (
      <a
        href={linkUrl}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className={CardStyles}
      >
        {renderCardContents()}
      </a>
    );
  }

  return (
    <Link to={linkUrl} className={CardStyles}>
      {renderCardContents()}
    </Link>
  );
}
