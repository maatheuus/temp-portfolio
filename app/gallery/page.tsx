import Gallery, { ImageProps } from '@/src/components/UI/Gallery';
import { basketImg, photos, poaImg } from '../../src/util/imageData';

const allImages: ImageProps[] = [...basketImg, ...poaImg, ...photos];

const categories = ['All','Basketball', 'Porto Alegre', 'Nature'];

export default function GalleryPage() {
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">Photo Gallery</h1>
      <Gallery images={allImages} categories={categories} />
    </div>
  );
}
