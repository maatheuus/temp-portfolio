'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import TimelineCard from './TimelineCard';
import { timelineData } from './utils';

export default function TimelineContent() {
  const timelineContentRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: timelineContentRef,
    offset: ['start start', 'end end'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div className="relative mt-16">
      <div className="absolute left-4 top-0 h-full w-0.5 -translate-x-1/2 bg-secondary-yellow/20 md:left-1/2" />
      <motion.div
        className="absolute left-4 top-0 w-0.5 -translate-x-1/2 bg-secondary-yellow md:left-1/2"
        style={{ height: lineHeight }}
      />

      <div ref={timelineContentRef} className="space-y-8 md:space-y-12">
        {timelineData.map((item, index) => {
          const isLeft = index % 2 === 0;
          return (
            <motion.div
              key={`${item.type}-${index}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative md:flex md:items-center ${
                isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div
                className={`w-full pl-12 md:w-1/2 ${
                  isLeft ? 'md:pl-0 md:pr-12' : 'md:pl-12'
                }`}
              >
                <div className="group">
                  <TimelineCard item={item} />
                </div>
              </div>

              <div className="absolute left-4 top-4 h-4 w-4 -translate-x-1/2 md:left-1/2 md:top-1/2 md:-translate-y-1/2">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                  className="h-full w-full rounded-full bg-secondary-yellow"
                />
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                  className="absolute inset-0 rounded-full bg-secondary-yellow/20"
                  style={{ scale: 2 }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
