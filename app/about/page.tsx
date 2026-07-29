import Layout from '@/src/components/Layout/Layout';
import type { Metadata } from 'next';
import AboutContent from './AboutContent';

export const metadata: Metadata = {
  title: 'About',
  description: "I'm Matheus and I am a frontend developer based in Brasil",
};
export default function page() {
  return (
    <Layout>
      <AboutContent />
    </Layout>
  );
}
