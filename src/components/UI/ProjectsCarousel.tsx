'use client';

import { ArrowLeftIcon, ArrowRightIcon } from '@phosphor-icons/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const ProjectsCarousel = ({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) => {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = ((page % images.length) + images.length) % images.length;

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div
      className={`group relative aspect-video w-full overflow-hidden rounded-lg ${className ?? ''}`}
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={page}
          src={images[imageIndex]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);
            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
          className="absolute h-full w-full cursor-grab object-cover active:cursor-grabbing"
          alt={`Project image ${imageIndex + 1}`}
        />
      </AnimatePresence>
      <div className="pointer-events-none absolute inset-0 z-[1] bg-black/15" />

      <div
        className="group/arrow absolute right-4 top-1/2 z-10 block -translate-y-1/2 cursor-pointer select-none rounded-full bg-yellow-400/40 p-2 text-white opacity-0 transition-all duration-300 hover:bg-yellow-400/80 group-hover:opacity-100"
        onClick={() => paginate(1)}
      >
        <ArrowRightIcon
          size={20}
          className="transition-transform duration-200 group-hover/arrow:translate-x-0.5"
        />
      </div>

      <div
        className="group/arrow absolute left-4 top-1/2 z-10 block -translate-y-1/2 cursor-pointer select-none rounded-full bg-yellow-400/40 p-2 text-white opacity-0 transition-all duration-300 hover:bg-yellow-400/80 group-hover:opacity-100"
        onClick={() => paginate(-1)}
      >
        <ArrowLeftIcon
          size={20}
          className="transition-transform duration-200 group-hover/arrow:-translate-x-0.5"
        />
      </div>

      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 space-x-2">
        {images.map((_, i) => (
          <div
            key={i}
            onClick={() => setPage([i, i > imageIndex ? 1 : -1])}
            className={`h-2 w-2 cursor-pointer rounded-full transition-colors ${
              i === imageIndex ? 'bg-yellow-600' : 'bg-yellow-300/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsCarousel;
