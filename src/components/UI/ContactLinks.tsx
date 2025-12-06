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
};

const links: LinkData[] = [
  {
    href: 'https://www.linkedin.com/in/matheusmaat/',
    icon: LinkedinLogoIcon,
    text: 'Connect with me',
  },
  {
    href: 'mailto:matts14smkd@gmail.com',
    icon: AtIcon,
    text: 'Send me an email',
  },
  {
    href: 'https://github.com/maatheuus',
    icon: GithubLogoIcon,
    text: 'Check out my GitHub',
  },
];

export default function ContactLinks({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={twMerge('flex w-full flex-wrap items-center gap-3', className)}
      {...props}
    >
      {links.map((link, index) => (
        <BlockLink key={index} {...link} />
      ))}
    </div>
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
