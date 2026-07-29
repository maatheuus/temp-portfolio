'use client';
import Heading from '@/src/components/Layout/Heading';
import Layout from '@/src/components/Layout/Layout';
import Text from '@/src/components/Layout/Text';
import ContactGrid from '@/src/components/UI/contact/ContactGrid';
import ContactLinks from '@/src/components/UI/ContactLinks';
import FeaturedProjects from '@/src/components/UI/featuredProjects/FeaturedProjects';
import Skills from '@/src/components/UI/Skills';
import Tooltip from '@/src/helpers/Tooltip';
import { useLanguage } from '@/src/i18n/LanguageContext';
import useScrollPage from '@/src/util/scrollPage';

export default function Page() {
  useScrollPage();
  const { t } = useLanguage();

  return (
    <Layout>
      <ContactLinks />
      <div>
        <Heading as="h1" className="mb-8 text-3xl md:text-5xl lg:text-7xl">
          {t.home.heading}
        </Heading>{' '}
        <Text className="max-w-2xl text-base md:text-lg">
          {t.home.subtext}
        </Text>
        <div className="inline-flex flex-wrap gap-x-1">
          <Text>{t.home.besides}</Text>
          <Text className="flex items-center gap-1">
            {t.home.photographer.prefix}{' '}
            <Tooltip content={t.home.photographer.tooltip}>
              <span className="cursor-help font-semibold text-secondary-yellow underline">
                {t.home.photographer.label}
              </span>
            </Tooltip>
          </Text>
          <Text className="flex items-center gap-1">
            {t.home.musician.prefix}{' '}
            <Tooltip content={t.home.musician.tooltip}>
              <span className="cursor-help font-semibold text-secondary-yellow underline">
                {t.home.musician.label}
              </span>
            </Tooltip>
          </Text>
          <Text className="flex items-center gap-1">
            {t.home.cook.prefix}{' '}
            <Tooltip content={t.home.cook.tooltip}>
              <span className="cursor-help font-semibold text-secondary-yellow underline">
                {t.home.cook.label}
              </span>
            </Tooltip>{' '}
            {t.home.cook.suffix}
          </Text>
        </div>
      </div>
      <Skills />
      <FeaturedProjects />
      <ContactGrid />
    </Layout>
  );
}
