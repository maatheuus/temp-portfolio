'use client';
import Heading from '@/src/components/Layout/Heading';
import useScrollPage from '@/src/util/scrollPage';

export default function Page() {
  useScrollPage();
  return (
    <section className="mx-auto max-w-[43.563rem] space-y-12">
      <Heading as="h1">
        Hello, I&apos;m Matheus, a Frontend Engineer based in Brazil, always
        seeking new challenges.
      </Heading>{' '}
    </section>
  );
}
