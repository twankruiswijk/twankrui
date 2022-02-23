import { useEffect, useState } from 'react';
import { Link, NavLink, useTransition } from 'remix';
import { ReactNode } from 'react';

import Button, { ButtonSize } from '~/components/Button';

export default function Navigation() {
  const transition = useTransition();

  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (transition.state === 'idle') {
      setMenuOpen(false);
    }
  }, [transition.state]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      return;
    }

    document.body.style.overflow = 'unset';
  }, [menuOpen]);

  return (
    <header className="border-b border-white/25">
      <div className="container">
        <nav className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center">
            <img
              src="/profile.webp"
              alt="hello, it's me"
              className="h-12 w-12"
              height="48px"
              width="48px"
            />
            <div className="flex flex-col ml-2.5">
              <span className="text-lg font-semibold -mb-0.5 leading-nonew">
                Twankrui
              </span>
              <span className="text-xs font-medium opacity-50 leading-none">
                t-arch
              </span>
            </div>
          </Link>

          <ul
            className={`${
              menuOpen ? 'flex' : 'hidden md:flex md:justify-end'
            } px-4 md:px-0 md:max-w-[unset] flex-col md:flex-row md:items-center fixed z-10 md:z-auto top-[81px] md:top-[unset] md:relative pt-6 md:pt-0 space-y-6 md:space-y-0 md:space-x-6 lg:space-x-8 bg-brand-600 inset-0 md:inset-[unset]`}
          >
            <li>
              <PrimaryLink path="/#projects">Projects</PrimaryLink>
            </li>
            <li>
              <PrimaryLink path="/#about">About me</PrimaryLink>
            </li>
            <li>
              <PrimaryLink path="/blog">Blog</PrimaryLink>
            </li>
            <li>
              <PrimaryLink path="/contact">Contact</PrimaryLink>
            </li>
            <li>
              <Button title="Hire me" linkUrl="/contact" />
            </li>
          </ul>

          <div className="block md:hidden">
            <Button
              title={menuOpen ? 'Close Menu' : 'Open Menu'}
              handleClick={() => handleMenuClick()}
              size={ButtonSize.sm}
            />
          </div>
        </nav>
      </div>
    </header>
  );
}

type PrimaryLinkProps = {
  path: string;
  children: ReactNode;
};

const PrimaryLink = ({ path, children }: PrimaryLinkProps) => {
  return (
    <NavLink
      to={path}
      className="block text-md lg:text-lg font-semibold hover:underline decoration-2 underline-offset-1 w-full md:w-auto"
    >
      {children}
    </NavLink>
  );
};
