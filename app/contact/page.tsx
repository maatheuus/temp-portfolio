import Heading from '@/src/components/Layout/Heading';
import Layout from '@/src/components/Layout/Layout';
import Text from '@/src/components/Layout/Text';
import ContactGrid from '@/src/components/UI/contact/ContactGrid';

export default function page() {
  return (
    <Layout>
      <div className="pt-24 text-center sm:pt-32">
        <Heading as="h1">Get in Touch</Heading>
        <Text className="mx-auto mt-4 max-w-xl">
          I'm always open to discussing new projects, creative challenges, or
          collaboration opportunities. Please feel free to reach out in
          whichever way you prefer.
        </Text>
      </div>

      <ContactGrid isContactPage className="!pt-0" />
    </Layout>
  );
}
