import Gallery from '@/src/components/ui/Gallery';
import { basketImg, photos, poaImg } from '../../src/util/imageData';
export default function page() {
  const allImages = [...basketImg, ...poaImg, ...photos];
  return (
    <section className="h-full">
      <Gallery
        title="I little bit of my photos"
        images={allImages}
        numberSlices={-1}
        seeMore={false}
      />
    </section>
  );
}
