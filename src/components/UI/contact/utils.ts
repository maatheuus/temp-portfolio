import { LinkedinLogoIcon, MailboxIcon } from '@phosphor-icons/react';

export const contactLinks = [
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/matheusmaat/',
    icon: LinkedinLogoIcon,
    gridClass: '',
  },
  {
    title: 'Email',
    href: 'mailto:maat.mbx@gmail.com',
    icon: MailboxIcon,
    gridClass: '',
  },
];

export const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
};
