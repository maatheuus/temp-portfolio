import {
  AtIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
  type Icon,
} from '@phosphor-icons/react';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

type LinkData = {
  href: string;
  icon: Icon;
  text: string;
  className?: string;
  classNameIconText?: string;
  classText?: string;
};

const links: LinkData[] = [
  {
    href: 'https://www.linkedin.com/in/matheusmaat/',
    icon: LinkedinLogoIcon,
    text: 'Connect with me',
    className: 'flex w-full items-center justify-between',
  },
  {
    href: 'mailto:matts14smkd@gmail.com',
    icon: AtIcon,
    text: 'Send me an email',
    className: 'w-full xs:w-fit',
    classText: 'block text-lg xs:hidden',
    classNameIconText: 'justify-start',
  },
  {
    href: 'https://github.com/maatheuus',
    icon: GithubLogoIcon,
    text: 'Check out my GitHub',
    classText: 'block text-lg xs:hidden',
    className: 'w-full xs:w-fit',
    classNameIconText: 'justify-start',
  },
];

// interface ContactLinksProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function ContactLinks({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={twMerge(
        'mx-auto flex w-full flex-col items-center gap-3 xs:flex-row',
        className,
      )}
      {...props}
    >
      {links.map((link, index) => (
        <BlockLink key={index} {...link} />
      ))}
    </div>
  );
}

function BlockLink({
  icon: Icon,
  text,
  className,
  classNameIconText,
  classText,
  href,
}: LinkData) {
  return (
    <Link
      href={href}
      target="_blank"
      className={twMerge(
        'group rounded-lg border border-primary-grey px-3 py-2 transition-colors duration-300 hover:border-secondary-yellow',
        className,
      )}
    >
      <div className={twMerge('flex items-center justify-center gap-3', classNameIconText)}>
        <Icon
          size={28}
          className="text-primary-grey transition-colors duration-300 group-hover:text-secondary-yellow"
        />
        <span className={twMerge('text-sm md:text-lg', classText)}>{text}</span>
      </div>
    </Link>
  );
}
