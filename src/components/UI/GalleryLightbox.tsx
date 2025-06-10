'use client';

import { motion } from 'framer-motion';
import { Link } from 'next-view-transitions';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Text from '../Layout/Text';

export interface ImageProps {
  src: StaticImageData;
  thumbnail: StaticImageData;
  thumbnailWidth?: number;
  thumbnailHeight?: number;
  caption?: string;
  category: string;
  width: number;
  height: number;
}

interface GalleryLightboxProps {
  title?: string;
  seeMore?: boolean;
  images: ImageProps[];
  categories?: string[];
}

export default function GalleryLightbox({
  images,
  title,
  seeMore = true,
}: GalleryLightboxProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const slides = images.map((img) => ({
    src: img.src.src,
    alt: img.caption || '',
  }));

  return (
    <div className="w-full">
      <div className="my-6 flex items-center gap-x-3">
        <Text className="text-xl text-primary-white">{title}</Text>
        {seeMore && (
          <Link
            href="/gallery"
            className="mt-1 text-xs text-secondary-yellow no-underline"
          >
            (see more...)
          </Link>
        )}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        {images.map((img, index) => (
          <motion.div
            key={img.src.src}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative aspect-square cursor-pointer overflow-hidden rounded-lg"
            onClick={() => {
              setSelectedImageIndex(index);
              setLightboxOpen(true);
            }}
          >
            <Image
              src={img.thumbnail.src}
              alt={img.caption || ''}
              fill
              className="h-full w-full object-cover"
            />
          </motion.div>
        ))}
      </motion.div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={slides}
        index={selectedImageIndex}
      />
    </div>
  );
}
