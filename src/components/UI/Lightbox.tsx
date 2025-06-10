'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import Image, { type StaticImageData } from 'next/image';
import { useEffect, useState } from 'react';

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  images: { src: StaticImageData; alt: string }[];
  currentIndex: number;
  onNext: () => void;
  onPrev: () => void;
}

export default function Lightbox({
  isOpen,
  onClose,
  images,
  currentIndex,
  onNext,
  onPrev,
}: LightboxProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
        onClick={onClose}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-white hover:text-secondary-yellow"
        >
          <X size={24} />
        </button>

        <div className="relative h-full w-full max-w-7xl p-4">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="relative h-full w-full"
          >
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              fill
              className="object-cover size-full"
              onLoadingComplete={() => setIsLoaded(true)}
              priority
            />
            {!isLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                <div className="h-8 w-8 animate-spin rounded-full border-2 border-secondary-yellow border-t-transparent" />
              </div>
            )}
          </motion.div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
          >
            ←
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
          >
            →
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-white">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
} 