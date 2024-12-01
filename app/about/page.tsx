import Heading from '@/src/components/Layout/Heading';
import Text from '@/src/components/Layout/Text';

export default function page() {
  return (
    <section className="mx-auto w-fit">
      <div className="space-y-12">
        <div className="max-w-[36rem] space-y-2">
          <Heading {...{ as: 'h1' }}>About </Heading>
          <Text className="text-primary-grey text-lg">
            {' '}
            Hey there, I&apos;m Matheus, a Frontend Engineer based in Brazil,
            always seeking new challenges.
          </Text>
        </div>
      </div>
    </section>
  );
}
