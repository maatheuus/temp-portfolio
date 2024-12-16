'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import Text from '../components/Layout/Text';
import { useOutsideClick } from '../hooks/useOutsideClick';

interface TooltipProps {
  textDisplay: string;
  textTooltip: string;
}

function Hover({ textDisplay, textTooltip }: TooltipProps) {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useOutsideClick(() => setIsHovered(false));

  return (
    <motion.span
      ref={ref}
      className={twMerge('relative inline-flex flex-col')}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => setIsHovered(!isHovered)}
    >
      <span className="flex gap-1 font-bold underline">{textDisplay}</span>
      <span
        className={twMerge(
          'absolute -left-1/2 w-52 rounded-lg bg-primary-white px-4 py-2 font-fenix text-base text-primary-black transition-all duration-200 sm:w-max',
          isHovered ? 'block -translate-y-16 sm:-translate-y-10' : 'hidden',
        )}
      >
        {textTooltip}
      </span>
    </motion.span>
  );
}

function Item({ textDisplay, textTooltip }: TooltipProps) {
  return <Hover textDisplay={textDisplay} textTooltip={textTooltip} />;
}

function Tooltip() {
  return (
    <div className="flex gap-1">
      <Text>But besides that:</Text>
      <Text>
        I&apos;m a{' '}
        <Item
          textDisplay="photographer."
          textTooltip="I'm actually a good nature photographer 😅"
        />
      </Text>
      <Text>
        I&apos;m also a good{' '}
        <Item
          textDisplay="musician."
          textTooltip="I mean... I appreciate good music, but nobody needs to know 🤣"
        />
      </Text>
      <Text>
        I&apos;m a good{' '}
        <Item
          textDisplay="cook"
          textTooltip="I mean... I think you got the point 😅"
        />{' '}
        too.
      </Text>
    </div>
  );
}

Tooltip.Hover = Hover;
Tooltip.Item = Item;

export default Tooltip;
