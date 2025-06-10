'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Text from '../components/Layout/Text';
import { useOutsideClick } from '../hooks/useOutsideClick';

interface TooltipProps {
  textDisplay: string;
  textTooltip: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
}

function Hover({ textDisplay, textTooltip, position = 'bottom' }: TooltipProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const tooltipRef = useRef<HTMLDivElement>(null);
  const outsideClickRef = useOutsideClick(() => setIsHovered(false));

  useEffect(() => {
    const updatePosition = () => {
      if (!outsideClickRef.current || !tooltipRef.current) return;

      const triggerRect = outsideClickRef.current.getBoundingClientRect();
      const tooltipRect = tooltipRef.current.getBoundingClientRect();
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      let x = 0;
      let y = 0;

      switch (position) {
        case 'top':
          x = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2;
          y = triggerRect.top - tooltipRect.height - 8;
          break;
        case 'bottom':
          x = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2;
          y = triggerRect.bottom + 8;
          break;
        case 'left':
          x = triggerRect.left - tooltipRect.width - 8;
          y = triggerRect.top + (triggerRect.height - tooltipRect.height) / 2;
          break;
        case 'right':
          x = triggerRect.right + 8;
          y = triggerRect.top + (triggerRect.height - tooltipRect.height) / 2;
          break;
      }

      // Ensure tooltip stays within viewport
      x = Math.max(8, Math.min(x, windowWidth - tooltipRect.width - 8));
      y = Math.max(8, Math.min(y, windowHeight - tooltipRect.height - 8));

      setTooltipPosition({ x, y });
    };

    if (isHovered) {
      updatePosition();
      window.addEventListener('resize', updatePosition);
      window.addEventListener('scroll', updatePosition);
    }

    return () => {
      window.removeEventListener('resize', updatePosition);
      window.removeEventListener('scroll', updatePosition);
    };
  }, [isHovered, position]);

  return (
    <motion.span
      ref={outsideClickRef}
      className="relative inline-flex flex-col"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => setIsHovered(!isHovered)}
      role="tooltip"
      aria-label={textTooltip}
    >
      <span className="flex cursor-help">{textDisplay}</span>
      <AnimatePresence>
        {isHovered && (
          <motion.span
            ref={tooltipRef}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            style={{
              position: 'fixed',
              left: tooltipPosition.x,
              top: tooltipPosition.y,
              zIndex: 1000,
            }}
            className="tooltip-container--card block rounded-lg bg-gray-800 px-3 py-2 text-sm text-white shadow-lg"
          >
            {textTooltip}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.span>
  );
}

function Item({ textDisplay, textTooltip, position }: TooltipProps) {
  return <Hover textDisplay={textDisplay} textTooltip={textTooltip} position={position} />;
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
          position="bottom"
        />
      </Text>
      <Text className="flex">
        I&apos;m also a good{' '}
        <Item
          textDisplay="musician."
          textTooltip="I mean... I appreciate good music, but nobody needs to know"
          position="bottom"
        />
      </Text>
      <Text className="flex">
        I&apos;m a good{' '}
        <Item
          textDisplay="cook"
          textTooltip="I mean... I think you got the point"
          position="bottom"
        />{' '}
        too.
      </Text>
    </div>
  );
}

Tooltip.Hover = Hover;
Tooltip.Item = Item;

export default Tooltip;
