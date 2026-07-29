'use client';

import {
  AtIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
  TranslateIcon,
  type Icon,
} from '@phosphor-icons/react';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { useLanguage } from '@/src/i18n/LanguageContext';

type LinkData = {
  href: string;
  icon: Icon;
  text: string;
};

export default function ContactLinks({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const { t } = useLanguage();

  const links: LinkData[] = [
    {
      href: 'https://www.linkedin.com/in/matheusmaat/',
      icon: LinkedinLogoIcon,
      text: t.contactLinks.linkedin,
    },
    {
      href: 'mailto:maat.mbx@gmail.com',
      icon: AtIcon,
      text: t.contactLinks.email,
    },
    {
      href: 'https://github.com/maatheuus',
      icon: GithubLogoIcon,
      text: t.contactLinks.github,
    },
  ];

  return (
    <div
      className={twMerge(
        'flex w-full flex-wrap items-center justify-between gap-3',
        className,
      )}
      {...props}
    >
      <div className="flex flex-wrap items-center gap-3">
        {links.map((link, index) => (
          <BlockLink key={index} {...link} />
        ))}
      </div>
      <LanguageToggle />
    </div>
  );
}

function LanguageToggle() {
  const { locale, t, toggleLocale } = useLanguage();

  return (
    <button
      onClick={toggleLocale}
      aria-label={t.languageToggle.ariaLabel}
      className="group flex items-center gap-2 rounded-full border border-primary-grey px-4 py-2 text-secondary-yellow transition-colors duration-300 hover:border-secondary-yellow hover:bg-primary-grey/5"
    >
      <TranslateIcon size={20} />
      <span className="text-sm font-medium uppercase">{locale}</span>
    </button>
  );
}

function BlockLink({ icon: Icon, text, href }: LinkData) {
  return (
    <Link
      href={href}
      target="_blank"
      className="group flex items-center gap-2 rounded-full border border-primary-grey px-4 py-2 transition-colors duration-300 hover:border-secondary-yellow hover:bg-primary-grey/5"
    >
      <Icon
        size={20}
        className="text-primary-grey transition-colors duration-300 group-hover:text-secondary-yellow"
      />
      <span className="text-sm font-medium text-primary-grey transition-colors duration-300 group-hover:text-secondary-yellow">
        {text}
      </span>
    </Link>
  );
}

// function ThemeToggle() {
//   const { theme, setTheme } = useTheme();
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) {
//     return (
//       <div className="flex size-10 items-center justify-center rounded-full border border-primary-grey p-2 opacity-50">
//         <SunIcon size={20} className="text-primary-grey" />
//       </div>
//     );
//   }

//   return (
//     <button
//       onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
//       className="group flex size-10 items-center justify-center rounded-full border border-primary-grey transition-colors duration-300 hover:border-secondary-yellow hover:bg-primary-grey/5 dark:border-primary-grey dark:hover:border-secondary-yellow dark:hover:bg-primary-white/5"
//       aria-label="Toggle theme"
//     >
//       {theme === 'dark' ? (
//         <SunIcon
//           size={20}
//           className="text-primary-grey transition-colors duration-300 group-hover:text-secondary-yellow dark:text-primary-lightgrey dark:group-hover:text-secondary-yellow"
//         />
//       ) : (
//         <MoonIcon
//           size={20}
//           className="text-primary-grey transition-colors duration-300 group-hover:text-secondary-yellow"
//         />
//       )}
//     </button>
//   );
// }
