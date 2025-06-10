'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

interface PageTransitionProps {
  children: React.ReactNode;
}

const variants = {
  initial: {
    opacity: 0,
    scale: 0.95,
    rotateX: -15,
    y: 20,
    filter: 'blur(10px)',
  },
  animate: {
    opacity: 1,
    scale: 1,
    rotateX: 0,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    rotateX: 15,
    y: -20,
    filter: 'blur(10px)',
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d',
      }}
    >
      {children}
    </motion.div>
  );
} 