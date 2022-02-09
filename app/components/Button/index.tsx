import { Link } from 'remix';

export enum ButtonVariant {
  secondary = 'secondary',
}

// TO-DO: Make either linkUrl or HandleClick required
type ButtonProps = {
  title: string;
  variant?: ButtonVariant;
  linkUrl?: string;
  handleClick?: () => void;
};

export default function Button({
  title,
  linkUrl,
  handleClick,
  variant,
}: ButtonProps) {
  const buttonStyles = `px-8 py-3 lg:px-12 border rounded-md font-semibold shadow-primary ${
    variant === 'secondary' ? 'bg-[#137D44]' : null
  } transition-shadow hover:shadow-primaryHalf`;

  if (linkUrl) {
    return (
      <Link to={linkUrl} className={buttonStyles}>
        {title}
      </Link>
    );
  }

  return (
    <button onClick={handleClick} className={buttonStyles}>
      {title}
    </button>
  );
}
