import { GraduationCapIcon, SuitcaseIcon } from '@phosphor-icons/react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import React, { useRef } from 'react';
import Text from '../../Layout/Text';
import type { timelineData } from './utils';

const TimelineCard = ({ item }: { item: (typeof timelineData)[0] }) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [-0.5, 0.5], ['20%', '80%']);
  const left = useTransform(mouseXSpring, [-0.5, 0.5], ['20%', '80%']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const mouseX = e.clientX - left;
    const mouseY = e.clientY - top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY: useTransform(mouseXSpring, [-0.5, 0.5], ['-10deg', '10deg']),
        rotateX: useTransform(mouseYSpring, [-0.5, 0.5], ['10deg', '-10deg']),
        transformStyle: 'preserve-3d',
      }}
      className="relative rounded-xl border border-secondary-yellow bg-black/40 p-6 shadow-lg transition-shadow duration-300"
    >
      <div
        className="bg-gradient-radial absolute inset-0 rounded-xl from-yellow-400/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          top: String(top),
          left: String(left),
          transform: 'translate(-50%, -50%)',
          width: '150%',
          height: '150%',
        }}
      />
      <div style={{ transform: 'translateZ(20px)' }}>
        <div className="mb-4 flex items-center gap-3">
          {item.type === 'work' ? (
            <SuitcaseIcon className="h-6 w-6 text-secondary-yellow" />
          ) : (
            <GraduationCapIcon className="h-6 w-6 text-secondary-yellow" />
          )}
          <div>
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-600">
              {item.type === 'work' ? item.company : item.institution}
            </p>
          </div>
        </div>
        <Text className="mb-4 text-sm">{item.description}</Text>
        <div className="flex flex-wrap gap-2">
          {item.technologies.map((tech) => (
            <span key={tech} className="tags">
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-4 text-sm font-medium text-secondary-yellow">
          {item.period}
        </div>
      </div>
    </motion.div>
  );
};
export default TimelineCard;
