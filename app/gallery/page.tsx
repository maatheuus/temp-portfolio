import Gallery from '@/src/components/UI/Gallery';
import { basketImg, photos, poaImg } from '../../src/util/imageData';
export default function page() {
  const allImages = [...basketImg, ...poaImg, ...photos];
  return (
    <section className="h-full">
      <Gallery images={allImages} numberSlices={-1} seeMore={false} />
    </section>
  );
}
