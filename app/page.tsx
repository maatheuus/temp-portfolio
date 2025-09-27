'use client';
import Heading from '@/src/components/Layout/Heading';
import Layout from '@/src/components/Layout/Layout';
import Text from '@/src/components/Layout/Text';
import ContactGrid from '@/src/components/UI/contact/ContactGrid';
import ContactLinks from '@/src/components/UI/ContactLinks';
import FeaturedProjects from '@/src/components/UI/FeaturedProjects';
import Skills from '@/src/components/UI/Skills';
import Tooltip from '@/src/helpers/Tooltip';
import useScrollPage from '@/src/util/scrollPage';

export default function Page() {
  useScrollPage();

  return (
    <Layout>
      <ContactLinks />
      <div>
        <Heading as="h1" className="mb-8 text-3xl md:text-5xl lg:text-7xl">
          Hello, I&apos;m Matheus, a Frontend Engineer based in Brazil, always
          seeking new challenges.
        </Heading>{' '}
        <Text className="max-w-2xl text-base md:text-lg">
          I&apos;m currently working for a company as a front-end developer.
        </Text>
        <div className="inline-flex flex-wrap gap-x-1">
          <Text>But besides that:</Text>
          <Text className="flex items-center gap-1">
            I&apos;m a{' '}
            <Tooltip content="I'm actually a good nature photographer">
              <span className="cursor-help font-semibold text-secondary-yellow underline">
                photographer.
              </span>
            </Tooltip>
          </Text>
          <Text className="flex items-center gap-1">
            I&apos;m also a good{' '}
            <Tooltip content="I mean... I appreciate good music, but nobody needs to know">
              <span className="cursor-help font-semibold text-secondary-yellow underline">
                musician.
              </span>
            </Tooltip>
          </Text>
          <Text className="flex items-center gap-1">
            I&apos;m a good{' '}
            <Tooltip content="I mean... I think you got the point">
              <span className="cursor-help font-semibold text-secondary-yellow underline">
                cook
              </span>
            </Tooltip>{' '}
            too.
          </Text>
        </div>
      </div>
      <Skills />
      <FeaturedProjects />
      <ContactGrid />
    </Layout>
  );
}
