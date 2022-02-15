import { Link, NavLink } from 'remix';
import { ReactNode } from 'react';

import Button from '~/components/Button';

export default function Navigation() {
  return (
    <header className="border-b border-white/25">
      <div className="container">
        <nav className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center">
            <img
              src="/profile.png"
              alt="hello, it's me"
              className="h-12 w-12"
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

          <ul className="flex items-center space-x-6 lg:space-x-8 hidden md:flex">
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
      className="text-md lg:text-lg font-semibold hover:underline decoration-2 underline-offset-1"
    >
      {children}
    </NavLink>
  );
};
