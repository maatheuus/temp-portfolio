'use client';

import {
  ArrowLeftIcon,
  ArrowRightIcon,
  MagnifyingGlassPlusIcon,
} from '@phosphor-icons/react';
import { AnimatePresence, motion } from 'framer-motion';
import type { StaticImageData } from 'next/image';
import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

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
  images: StaticImageData[];
  className?: string;
}) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const imageIndex = ((page % images.length) + images.length) % images.length;

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const isSingleImage = images.length === 1;

  const slides = images.map((img) => ({
    src: img.src,
  }));

  const handleImageClick = () => {
    setLightboxOpen(true);
  };

  return (
    <>
      <div
        className={`group relative aspect-video w-full overflow-hidden rounded-lg ${className ?? ''}`}
      >
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={page}
            src={String(images[imageIndex].src)}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag={isSingleImage ? false : 'x'}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(e, { offset, velocity }) => {
              if (isSingleImage) return;

              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            onClick={handleImageClick}
            className={`absolute h-full w-full object-cover active:cursor-grabbing ${isSingleImage ? 'cursor-pointer' : 'cursor-grab'}`}
            alt={`Project image ${imageIndex + 1}`}
          />
        </AnimatePresence>

        <div
          onClick={handleImageClick}
          className="pointer-events-none absolute inset-0 z-[1] bg-black/15 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
        <div
          onClick={handleImageClick}
          className="absolute inset-0 z-[2] flex cursor-pointer items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        >
          <MagnifyingGlassPlusIcon
            size={32}
            className="text-primary-white drop-shadow-lg"
          />
        </div>

        {!isSingleImage && (
          <>
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
          </>
        )}
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={slides}
        index={imageIndex}
      />
    </>
  );
};

export default ProjectsCarousel;
