'use client';

import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';
import HeadingTopText from '../../Layout/HeadingTopText';
import Layout from '../../Layout/Layout';
import { useLanguage } from '@/src/i18n/LanguageContext';
import ContactCard from './ContactCard';
import GithubCard from './GithubCard';
import { contactLinks, containerVariants } from './utils';

interface ContactGridProps extends React.HTMLAttributes<HTMLDivElement> {
  isContactPage?: boolean;
}

export const ContactGrid = ({
  isContactPage,
  className,
  ...props
}: ContactGridProps) => {
  const { t } = useLanguage();

  const links = contactLinks.map((link) => ({
    ...link,
    description:
      link.title === 'LinkedIn' ? t.contactGrid.linkedinDesc : t.contactGrid.emailDesc,
  }));

  return (
    <Layout className={twMerge('py-8 md:py-10 lg:py-16', className)} {...props}>
      <div className="container mx-auto max-w-4xl px-4 text-center">
        {!isContactPage && (
          <HeadingTopText
            title={t.contactGrid.heading}
            description={t.contactGrid.description}
          />
        )}

        <motion.div
          className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {links.map((link) => (
            <ContactCard key={link.title} {...link} icon={link.icon} />
          ))}
          <GithubCard />
        </motion.div>
      </div>
    </Layout>
  );
};

export default ContactGrid;
