import { ArrowUpRightIcon, type Icon } from '@phosphor-icons/react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import React, { useRef } from 'react';
import { itemVariants } from './utils';

interface Props {
  title: string;
  description: string;
  href: string;
  icon: Icon;
  gridClass: string;
}

const ContactCard = ({
  title,
  description,
  href,
  icon: Icon,
  gridClass,
}: Props) => {
  const ref = useRef<HTMLAnchorElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 200 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = e.clientX - left - width / 2;
    const y = e.clientY - top - height / 2;
    mouseX.set(x * 0.1);
    mouseY.set(y * 0.1);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.a
      ref={ref}
      key={title}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      variants={itemVariants}
      className={`group relative flex flex-col items-start justify-between overflow-hidden rounded-xl border border-zinc-200 p-6 text-left transition-shadow duration-300 ease-in-out hover:shadow-2xl dark:border-zinc-800 ${gridClass}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-secondary-yellow/0 via-secondary-yellow/0 to-secondary-yellow/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <motion.div
        style={{ x: springX, y: springY }}
        className="relative z-10 flex h-full flex-col"
      >
        <div className="mb-4 text-primary-black transition-transform duration-300 ease-out group-hover:scale-110 dark:text-primary-white">
          <Icon className="size-8" />
        </div>
        <div className="flex-grow">
          <h3 className="mb-1 text-xl font-bold text-primary-black dark:text-primary-white">
            {title}
          </h3>
          <p className="text-sm text-primary-grey dark:text-primary-lightgrey">
            {description}
          </p>
        </div>
      </motion.div>

      <ArrowUpRightIcon className="absolute right-4 top-4 z-10 size-6 text-yellow-400/70 opacity-0 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100" />
    </motion.a>
  );
};

export default ContactCard;
