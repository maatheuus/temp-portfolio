'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { type RefObject } from 'react';
import TimelineCard from './TimelineCard';
import { timelineData } from './utils';

interface Props {
  containerRef: RefObject<HTMLDivElement>;
}
export default function TimelineContent({ containerRef }: Props) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div className="relative">
      <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-secondary-yellow/20" />
      <motion.div
        className="absolute left-1/2 top-0 w-0.5 -translate-x-1/2 bg-secondary-yellow"
        style={{ height: lineHeight }}
      />

      <div className="space-y-12">
        {timelineData.map((item, index) => (
          <motion.div
            key={`${item.type}-${index}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: '-100px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative flex items-center ${
              index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
            }`}
          >
            <div
              className={`group w-1/2 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}
            >
              <TimelineCard item={item} />
            </div>

            <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2">
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
        ))}
      </div>
    </div>
  );
}
