import { Link } from 'remix';

export enum ButtonVariant {
  secondary = 'secondary',
}

export enum ButtonSize {
  sm = 'sm',
}

// TO-DO: Make either linkUrl or HandleClick required
type ButtonProps = {
  title: string;
  variant?: ButtonVariant;
  linkUrl?: string;
  handleClick?: () => void;
  isExternalLink?: boolean;
  size?: ButtonSize;
  fixedWidth?: string;
  disabled?: boolean;
};

export default function Button({
  title,
  linkUrl,
  handleClick,
  variant,
  isExternalLink,
  size,
  fixedWidth,
  disabled,
}: ButtonProps) {
  const buttonStyles = `block ${
    size === ButtonSize.sm ? 'text-sm px-4 py-3' : 'px-8 py-3 lg:px-12'
  } border rounded-md font-semibold text-center shadow-primary ${
    variant === ButtonVariant.secondary ? 'bg-[#137D44]' : ''
  } ${fixedWidth ? `w-full ${fixedWidth}` : ''} ${
    disabled ? 'opacity-75' : ''
  } transition-shadow hover:shadow-primaryHalf`;

  if (isExternalLink) {
    return (
      <a
        href={linkUrl}
        className={buttonStyles}
        rel="noopener noreferrer nofollow"
      >
        {title}
      </a>
    );
  }

  if (linkUrl) {
    return (
      <Link to={linkUrl} className={buttonStyles}>
        {title}
      </Link>
    );
  }

  return (
    <button onClick={handleClick} className={buttonStyles} disabled={disabled}>
      {title}
    </button>
  );
}
