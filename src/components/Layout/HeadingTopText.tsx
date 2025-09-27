'use client';

import { motion } from 'framer-motion';

import { twMerge } from 'tailwind-merge';
import Heading from '../Layout/Heading';
import Text from '../Layout/Text';

const fadeInAnimation = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: 'easeInOut' },
};

interface HeadingTopTextProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
}

export default function HeadingTopText({
  className,
  title,
  description,
}: HeadingTopTextProps) {
  return (
    <motion.div
      {...fadeInAnimation}
      className={twMerge('mb-10 text-center', className)}
    >
      <Heading as="h1" className="mb-4 text-4xl md:text-5xl lg:text-7xl">
        {title}
      </Heading>
      {description && (
        <Text className="mx-auto max-w-2xl text-base md:text-lg text-primary-grey">
          {description}
        </Text>
      )}
    </motion.div>
  );
}
