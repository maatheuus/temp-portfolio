'use client';

import HeadingTopText from '@/src/components/Layout/HeadingTopText';
import Layout from '@/src/components/Layout/Layout';
import ContactGrid from '@/src/components/UI/contact/ContactGrid';
import { useLanguage } from '@/src/i18n/LanguageContext';

export default function Page() {
  const { t } = useLanguage();

  return (
    <Layout>
      <div className="pt-24 text-center sm:pt-32">
        <HeadingTopText title={t.contact.title} description={t.contact.description} />
      </div>

      <ContactGrid isContactPage className="!pt-0" />
    </Layout>
  );
}
