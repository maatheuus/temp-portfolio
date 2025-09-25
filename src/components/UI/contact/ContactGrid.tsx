'use client';

import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';
import HeadingTopText from '../../Layout/HeadingTopText';
import Layout from '../../Layout/Layout';
import ContactCard from './ContactCard';
import { contactLinks, containerVariants } from './utils';

interface ContactGridProps extends React.HTMLAttributes<HTMLDivElement> {
  isContactPage?: boolean;
}

export const ContactGrid = ({
  isContactPage,
  className,
  ...props
}: ContactGridProps) => {
  return (
    <Layout className={twMerge('py-8 md:py-10 lg:py-16', className)} {...props}>
      <div className="container mx-auto max-w-4xl px-4 text-center">
        {!isContactPage && (
          <HeadingTopText
            title="Let's Connect"
            description="Now that you've reached the end, feel free to send me an email, find
            me on LinkedIn, check out what I've been up to on GitHub, or see my
            playlists on Spotify."
          />
        )}

        <motion.div
          className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {contactLinks.map((link) => (
            <ContactCard key={link.title} {...link} icon={link.icon} />
          ))}
        </motion.div>
      </div>
    </Layout>
  );
};

export default ContactGrid;
