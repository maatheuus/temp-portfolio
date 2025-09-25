import {
  GithubLogoIcon,
  LinkedinLogoIcon,
  MailboxIcon,
  SpotifyLogoIcon,
} from '@phosphor-icons/react';

export const contactLinks = [
  {
    title: 'LinkedIn',
    description: 'My professional network',
    href: 'https://www.linkedin.com/in/seu-usuario/',
    icon: LinkedinLogoIcon,
    gridClass: 'md:col-span-2',
  },
  {
    title: 'GitHub',
    description: 'See my code',
    href: 'https://github.com/seu-usuario',
    icon: GithubLogoIcon,
    gridClass: 'md:col-span-2',
  },
  {
    title: 'Email',
    description: 'Send me a message',
    href: 'mailto:seu-email@example.com',
    icon: MailboxIcon,
    gridClass: 'md:col-span-2',
  },
  {
    title: 'Spotify',
    description: "What I'm listening to",
    href: 'https://open.spotify.com/',
    icon: SpotifyLogoIcon,
    gridClass: 'md:col-span-2',
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
