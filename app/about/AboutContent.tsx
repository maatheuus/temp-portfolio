'use client';

import HeadingTopText from '@/src/components/Layout/HeadingTopText';
import RichText from '@/src/components/Layout/RichText';
import Text from '@/src/components/Layout/Text';
import ContactGrid from '@/src/components/UI/contact/ContactGrid';
import GalleryLightbox from '@/src/components/UI/GalleryLightbox';
import Tooltip from '@/src/helpers/Tooltip';
import { useLanguage } from '@/src/i18n/LanguageContext';
import { basketImg, photos, poaImg } from '@/src/util/imageData';

export default function AboutContent() {
  const { t } = useLanguage();

  return (
    <>
      <div className="space-y-12">
        <HeadingTopText title={t.about.title} description={t.about.description} />

        <div className="[&>p]:hyphens-manual">
          <Text className="strong mt-4 hyphens-auto text-lg">
            <RichText segments={t.about.para1} />
          </Text>
          <Text className="mt-4 hyphens-auto text-lg">{t.about.para2}</Text>
          <Text className="hyphens-auto text-lg">
            <Tooltip content={t.about.para3Tooltip}>
              <span className="cursor-help font-semibold text-secondary-yellow underline">
                {t.about.para3Label}
              </span>
            </Tooltip>
            {t.about.para3Suffix}
          </Text>
          <div className="">
            <Text className="mt-4 hyphens-auto text-lg">{t.about.para4}</Text>
            <div className="h-full">
              <GalleryLightbox title={t.about.galleryBasketball} images={basketImg} />
              <GalleryLightbox title={t.about.galleryTrip} images={poaImg} />
              <GalleryLightbox
                title={t.about.galleryPhotos}
                mobileTitle={t.about.galleryPhotosMobile}
                images={photos}
              />
            </div>
          </div>
        </div>
      </div>
      <section className="py-24 text-center">
        <ContactGrid />
      </section>
    </>
  );
}
