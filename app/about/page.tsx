import HeadingTopText from '@/src/components/Layout/HeadingTopText';
import Layout from '@/src/components/Layout/Layout';
import Text from '@/src/components/Layout/Text';
import ContactGrid from '@/src/components/UI/contact/ContactGrid';
import GalleryLightbox from '@/src/components/UI/GalleryLightbox';
import Tooltip from '@/src/helpers/Tooltip';
import type { Metadata } from 'next';
import { basketImg, photos, poaImg } from '../../src/util/imageData';

export const metadata: Metadata = {
  title: 'About',
  description: "I'm Matheus and I am a frontend developer based in Brasil",
};
export default function page() {
  return (
    <Layout>
      <div className="space-y-12">
        <HeadingTopText
          title="About Me"
          description="A little bit about myself and my work experience"
        />

        <div className="[&>p]:hyphens-manual">
          <Text className="strong mt-4 hyphens-auto text-lg">
            I am a <strong>Full-stack</strong> developer and I am immersed in
            the world of web development. With intermediate skills in
            technologies such as <strong>React.js</strong>,{' '}
            <strong>Next.js</strong>, <strong>Node.js</strong>,{' '}
            <strong>MongoDB</strong>, <strong>Express</strong>,{' '}
            <strong>JavaScript</strong>, and
            <strong> TypeScript</strong>. I am always looking to learn and
            improve.
          </Text>
          <Text className="mt-4 hyphens-auto text-lg">
            I started this career in 2022 with the goal of transforming my life.
            As a self-taught individual, I have always sought knowledge through
            courses on YouTube, Udemy, Frontend Master and others plataforms...
          </Text>
          <Text className="hyphens-auto text-lg">
            <Tooltip content="Yes, I counted every single day haha">
              <span className="cursor-help font-semibold text-secondary-yellow underline">
                It took 727 days (1 year and 11 months)
              </span>
            </Tooltip>{' '}
            of studying every single day until I landed my first job at a
            company in Portugal as a Front-End Developer.
          </Text>
          <div className="">
            <Text className="mt-4 hyphens-auto text-lg">
              But of course, during these nearly 2 years, I had my breaks from
              the study routine. During this free time, I:
            </Text>
            <div className="h-full">
              <GalleryLightbox
                title="Play so much basketball"
                images={basketImg}
              />
              <GalleryLightbox
                title="Make a trip (and I loved...2025 I coming)"
                images={poaImg}
              />
              <GalleryLightbox
                title="I also take a lot of pictures"
                mobileTitle="I also take good pictures"
                images={photos}
              />
            </div>
          </div>
        </div>
      </div>
      <section className="py-24 text-center">
        <ContactGrid />
      </section>
    </Layout>
  );
}
