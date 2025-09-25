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
      <Heading as="h2" className="mb-4">
        {title}
      </Heading>
      <Text>{description}</Text>
    </motion.div>
  );
}
