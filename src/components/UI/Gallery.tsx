'use client';

import { motion } from 'framer-motion';
import type { StaticImageData } from 'next/image';
import { useState } from 'react';
import { RowsPhotoAlbum } from 'react-photo-album';
import 'react-photo-album/rows.css';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

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

interface GalleryProps {
  images: ImageProps[];
  categories?: string[];
}

export default function Gallery({ images, categories }: GalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const filteredImages =
    selectedCategory === 'all'
      ? images
      : images.filter((img) => img.category === selectedCategory);

  const slides = filteredImages.map((img) => ({
    src: img.src.src,
    alt: img.caption || '',
  }));

  const photos = filteredImages.map((img) => ({
    src: img.thumbnail.src,
    alt: img.caption || '',
    width: img.width,
    height: img.height,
  }));

  return (
    <div className="w-full">
      <div className="mb-8 flex flex-wrap gap-2">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setSelectedCategory('all')}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
            selectedCategory === 'all'
              ? 'bg-secondary-yellow text-primary-black'
              : 'bg-gray-100 text-primary-black transition-colors hover:bg-gray-200'
          }`}
        >
          All
        </motion.button>
        {categories &&
          categories?.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-secondary-yellow text-primary-black'
                  : 'bg-gray-100 text-primary-black transition-colors hover:bg-gray-200'
              }`}
            >
              {category}
            </motion.button>
          ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <RowsPhotoAlbum
          photos={photos}
          targetRowHeight={500}
          spacing={8}
          padding={0}
          onClick={({ index: current }) => {
            setSelectedImageIndex(current);
            setLightboxOpen(true);
          }}
        />
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
