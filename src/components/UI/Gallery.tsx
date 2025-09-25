'use client';

import { motion } from 'framer-motion';
import type { StaticImageData } from 'next/image';
import { useState } from 'react';
import { RowsPhotoAlbum } from 'react-photo-album';
import 'react-photo-album/rows.css';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import ProjectFilters from './projectsPage/ProjectFilters';

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
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const filteredImages =
    selectedCategory === 'All'
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
      <div className="flex">
        <ProjectFilters
          categories={categories || []}
          activeCategory={selectedCategory}
          setActiveCategory={setSelectedCategory}
        />
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
