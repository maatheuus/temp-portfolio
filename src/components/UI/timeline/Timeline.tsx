'use client';

import { useRef } from 'react';
import HeadingTopText from '../../Layout/HeadingTopText';
import ContactGrid from '../contact/ContactGrid';
import TimelineContent from './TimelineContent';

const Timeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-20" ref={containerRef}>
      <div className="container mx-auto px-4">
        <HeadingTopText
          title="Experience & Education"
          description="My professional journey and academic background that shaped my
            expertise in technology."
        />
        <TimelineContent containerRef={containerRef} />
      </div>
      <section className="pt-24 text-center">
        <ContactGrid />
      </section>
    </section>
  );
};

export default Timeline;
