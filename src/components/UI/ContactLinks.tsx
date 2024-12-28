import { ArrowUpFromDot, AtSign, Github, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

type LinkData = {
  href: string;
  icon: React.ReactNode;
  text: string;
  otherIcon?: React.ReactNode;
  className?: string;
  classNameIconText?: string;
  classText?: string;
};

const links: LinkData[] = [
  {
    href: 'https://www.linkedin.com/in/matheusmaat/',
    icon: <Linkedin />,
    text: 'Connect with me',
    otherIcon: <ArrowUpFromDot />,
    className: 'flex w-full items-center justify-between',
  },
  {
    href: 'mailto:matts14smkd@gmail.com',
    icon: <AtSign />,
    text: 'Send me an email',
    className: 'w-full xs:w-fit',
    classText: 'block text-lg xs:hidden',
    classNameIconText: 'justify-start',
  },
  {
    href: 'https://github.com/maatheuus',
    icon: <Github />,
    text: 'Check out my GitHub',
    classText: 'block text-lg xs:hidden',
    className: 'w-full xs:w-fit',
    classNameIconText: 'justify-start',
  },
];

export default function ContactLinks() {
  return (
    <div className="mx-auto flex w-full max-w-[85%] flex-col items-center gap-3 xs:flex-row">
      {links.map((link, index) => (
        <BlockLink key={index} {...link} />
      ))}
    </div>
  );
}

function BlockLink({
  icon,
  text,
  otherIcon,
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
        'hover:border-secondary-yellow group rounded-lg border border-primary-grey px-3 py-2 transition-colors duration-300',
        className,
      )}
    >
      <div className={twMerge('flex justify-center gap-3', classNameIconText)}>
        {icon}
        <span className={twMerge('text-lg', classText)}>{text}</span>
      </div>
      {otherIcon && (
        <ArrowUpFromDot className="rotate-90 transition-all duration-200 group-hover:rotate-45" />
      )}
    </Link>
  );
}
