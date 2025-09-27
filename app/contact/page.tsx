import HeadingTopText from '@/src/components/Layout/HeadingTopText';
import Layout from '@/src/components/Layout/Layout';
import ContactGrid from '@/src/components/UI/contact/ContactGrid';

export default function page() {
  return (
    <Layout>
      <div className="pt-24 text-center sm:pt-32">
        <HeadingTopText
          title="Get in Touch"
          description="I'm always open to discussing new projects, creative challenges, or
          collaboration opportunities. Please feel free to reach out in
          whichever way you prefer."
        />
      </div>

      <ContactGrid isContactPage className="!pt-0" />
    </Layout>
  );
}
