'use client';
import Heading from '@/src/components/Layout/Heading';
import Text from '@/src/components/Layout/Text';
import ContactLinks from '@/src/components/UI/ContactLinks';
import Tooltip from '@/src/helpers/Tooltip';
import useScrollPage from '@/src/util/scrollPage';

export default function Page() {
  useScrollPage();

  return (
    <section className="mx-auto max-w-[43.563rem] space-y-12">
      <Heading as="h1">
        Hello, I&apos;m Matheus, a Frontend Engineer based in Brazil, always
        seeking new challenges.
      </Heading>{' '}
      <ContactLinks />
      <div>
        <Text>
          I&apos;m currently working for a company as a front-end developer
          (with next.js mostly).
        </Text>
        <Tooltip />
      </div>
    </section>
  );
}
