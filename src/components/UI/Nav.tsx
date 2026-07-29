'use client';

import {
  AddressBookIcon,
  DesktopIcon,
  HouseIcon,
  SuitcaseIcon,
  UserIcon,
} from '@phosphor-icons/react';
import { motion, useAnimation } from 'framer-motion';
import { Link } from 'next-view-transitions';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { twMerge } from 'tailwind-merge';
import { useLanguage } from '@/src/i18n/LanguageContext';

type LinkProps = {
  href: string;
  label: string;
  icon: React.ReactNode;
};

export default function Nav() {
  const pathname = usePathname();
  const { t } = useLanguage();

  const linksNav: LinkProps[] = [
    { href: '/', label: t.nav.home, icon: <HouseIcon size={28} /> },
    { href: '/about', label: t.nav.about, icon: <UserIcon size={28} /> },
    { href: '/works', label: t.nav.works, icon: <SuitcaseIcon size={28} /> },
    { href: '/projects', label: t.nav.projects, icon: <DesktopIcon size={28} /> },
    { href: '/contact', label: t.nav.contact, icon: <AddressBookIcon size={28} /> },
  ];
  const controlsSpan = useAnimation();
  const controlsText = useAnimation();
  const duration: number = 0.3;

  useEffect(() => {
    controlsSpan.start({ opacity: 0, x: '-100%' }).then(() => {
      controlsSpan.start({ opacity: 1, x: '0%' });
    });

    controlsText.start({ opacity: 0, y: '10px' }).then(() => {
      controlsText.start({ opacity: 1, y: '0px' });
    });
  }, [pathname, controlsSpan, controlsText]);

  return (
    <nav>
      <ul className="fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-6 rounded-full border border-neutral-100/10 bg-neutral-950/80 bg-opacity-50 px-6 text-sm shadow-lg backdrop-blur-sm backdrop-filter">
        {linksNav.map((link) => (
          <li
            key={link.href}
            className={twMerge(
              'relative px-2 py-3',
              pathname === link.href
                ? 'text-secondary-yellow'
                : 'text-primary-white',
            )}
          >
            <Link href={link.href}>
              <motion.span
                className={twMerge(
                  'absolute left-0 top-full h-px w-full',
                  pathname === link.href ? 'bg-current' : '',
                )}
                animate={controlsSpan}
                initial={{ opacity: 0, x: '-100%' }}
                transition={{ duration }}
              ></motion.span>
              <motion.span
                className={twMerge(
                  'relative hidden transition-colors duration-200 sm:block',
                  pathname === link.href
                    ? 'text-secondary-yellow'
                    : 'text-primary-white hover:text-secondary-yellow/60',
                )}
                animate={controlsText}
                initial={{ opacity: 0, y: '10px' }}
                transition={{ duration }}
              >
                {link.label}
              </motion.span>
              <motion.span
                className={twMerge(
                  'relative block sm:hidden',
                  pathname === link.href
                    ? 'text-secondary-yellow'
                    : 'text-primary-white',
                )}
                animate={controlsText}
                initial={{ opacity: 0, y: '10px' }}
                transition={{ duration }}
              >
                {link.icon}
              </motion.span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
