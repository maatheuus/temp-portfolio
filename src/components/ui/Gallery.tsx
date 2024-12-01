import Image, { type StaticImageData } from 'next/image';

import { Link } from 'next-view-transitions';
import { twMerge } from 'tailwind-merge';
import Text from '../Layout/Text';

interface ImagesArrayProps {
  id: number;
  src: StaticImageData;
  alt: string;
}

type GalleryProps = {
  title: string;
  images: ImagesArrayProps[];
  numberSlices?: number;
  seeMore?: boolean;
};
export default function Gallery({
  title,
  images,
  seeMore = true,
  numberSlices = 4,
}: GalleryProps) {
  const isLast =
    images.length > 3 &&
    images.slice(0, 4).map((_, index) => index === images.length - 1);

  return (
    <section className="h-full">
      <div className="mb-4 mt-7 flex items-end gap-x-4">
        <Text as="h2" className="font-chivo text-2xl">
          {title}
        </Text>
        {seeMore && (
          <Link
            href="/gallery"
            className="text-primary-lightgrey text-sm transition-colors duration-200 hover:text-second-yellow"
          >
            (...see more)
          </Link>
        )}
      </div>
      <div
        className={twMerge(
          'gallery',
          isLast ? '[&_figure:last-child]:col-span-full' : '',
        )}
      >
        {images.slice(0, numberSlices).map((image, index) => (
          <figure
            key={index}
            className="relative h-auto w-full overflow-hidden"
          >
            <Image
              src={image.src}
              alt={image.alt}
              className="h-fit rounded-xl object-cover transition-all duration-300 hover:scale-105"
              loading="lazy"
              placeholder="blur"
              fill
            />
          </figure>
        ))}
      </div>
    </section>
  );
}
