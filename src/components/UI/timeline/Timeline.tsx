'use client';

import { useRef } from 'react';
import HeadingTopText from '../../Layout/HeadingTopText';
import { useLanguage } from '@/src/i18n/LanguageContext';
import ContactGrid from '../contact/ContactGrid';
import TimelineContent from './TimelineContent';

const Timeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  return (
    <section className="py-20" ref={containerRef}>
      <div className="container mx-auto px-4">
        <HeadingTopText title={t.works.heading} description={t.works.description} />
        <TimelineContent />
      </div>
      <section className="pt-24 text-center">
        <ContactGrid />
      </section>
    </section>
  );
};

export default Timeline;
