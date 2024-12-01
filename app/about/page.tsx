import Heading from '@/src/components/Layout/Heading';
import Text from '@/src/components/Layout/Text';
import Gallery from '@/src/components/ui/Gallery';
import type { Metadata } from 'next';
import { basketImg, photos, poaImg } from '../../src/util/imageData';

export const metadata: Metadata = {
  title: 'About',
  description: "I'm Matheus and I am a frontend developer based in Brasil",
};
export default function page() {
  return (
    <section className="mx-auto w-fit">
      <div className="space-y-12">
        <div className="max-w-[36rem] space-y-2">
          <Heading as="h1">About</Heading>
          <Text className="text-lg text-primary-grey">
            {' '}
            Hello, I&apos;m Matheus, a Frontend Engineer based in Brazil, always
            seeking new challenges.
          </Text>
        </div>
        <div className="[&>p]:!text-primary-lightgrey [&>p]:hyphens-manual">
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
            courses on YouTube, Udemy, and others... It took 727 days (1 year
            and 11 months) of studying every day until I landed my first job at
            a company in Portugal as a Front-End Developer.
          </Text>
          <div className="[&>p]:!text-primary-lightgrey">
            <Text className="mt-4 hyphens-auto text-lg">
              But of course, during these nearly 2 years, I had my breaks from
              the study routine. During this free time, I:
            </Text>
            <div className="h-full">
              <Gallery title="I play so much basketball" images={basketImg} />
              <Gallery
                title="I make a trip (and I loved...2025 I coming)"
                images={poaImg}
              />
              <Gallery title="I also take a lot of images" images={photos} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
