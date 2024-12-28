'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
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
      className="relative inline-flex flex-col"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => setIsHovered(!isHovered)}
    >
      <span className="flex">{textDisplay}</span>
      {isHovered && (
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="tooltip-container--card absolute top-full mt-2 rounded bg-gray-800 p-2 text-sm text-white"
        >
          {textTooltip}
        </motion.span>
      )}
    </motion.span>
  );
}

function Item({ textDisplay, textTooltip }: TooltipProps) {
  return <Hover textDisplay={textDisplay} textTooltip={textTooltip} />;
}

function Tooltip() {
  return (
    <div className="tooltip-container">
      <Text>But besides that:</Text>
      <Text className="flex">
        I&apos;m a{' '}
        <Item
          textDisplay="photographer."
          textTooltip="I'm actually a good nature photographer"
        />
      </Text>
      <Text className="flex">
        I&apos;m also a good{' '}
        <Item
          textDisplay="musician."
          textTooltip="I mean... I appreciate good music, but nobody needs to know"
        />
      </Text>
      <Text className="flex">
        I&apos;m a good{' '}
        <Item
          textDisplay="cook"
          textTooltip="I mean... I think you got the point"
        />{' '}
        too.
      </Text>
    </div>
  );
}

Tooltip.Hover = Hover;
Tooltip.Item = Item;

export default Tooltip;
