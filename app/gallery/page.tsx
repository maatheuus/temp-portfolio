'use client';

import Gallery, { ImageProps } from '@/src/components/UI/Gallery';
import { useLanguage } from '@/src/i18n/LanguageContext';
import { basketImg, photos, poaImg } from '../../src/util/imageData';

const allImages: ImageProps[] = [...basketImg, ...poaImg, ...photos];

export default function GalleryPage() {
  const { t } = useLanguage();

  const categories = [
    { value: 'All', label: t.gallery.categoryAll },
    { value: 'Basketball', label: t.gallery.categories.Basketball },
    { value: 'Porto Alegre', label: t.gallery.categories['Porto Alegre'] },
    { value: 'Nature', label: t.gallery.categories.Nature },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">{t.gallery.title}</h1>
      <Gallery images={allImages} categories={categories} />
    </div>
  );
}
