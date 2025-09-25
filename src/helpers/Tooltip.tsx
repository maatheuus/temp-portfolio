'use client';

import { AnimatePresence, motion } from 'framer-motion';
import React, {
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { createPortal } from 'react-dom';

type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';

interface TooltipContextProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  triggerRef: React.RefObject<HTMLElement>;
  content: React.ReactNode;
  position: TooltipPosition;
}

const TooltipContext = createContext<TooltipContextProps | null>(null);

const useTooltip = () => {
  const context = useContext(TooltipContext);
  if (!context) {
    throw new Error('useTooltip must be used within a Tooltip component');
  }
  return context;
};

function Tooltip({
  children,
  content,
  position = 'top',
}: {
  children: React.ReactElement;
  content: React.ReactNode;
  position?: TooltipPosition;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLElement>(null);

  return (
    <TooltipContext.Provider
      value={{ isOpen, setIsOpen, triggerRef, content, position }}
    >
      <Trigger>{children}</Trigger>
      <Content />
    </TooltipContext.Provider>
  );
}

const Trigger = ({ children }: { children: React.ReactElement }) => {
  const { setIsOpen, triggerRef } = useTooltip();

  return cloneElement(children, {
    ref: triggerRef,
    onMouseEnter: () => setIsOpen(true),
    onMouseLeave: () => setIsOpen(false),
    onClick: () => setIsOpen((prev) => !prev),
    'aria-describedby': 'tooltip',
  });
};

const Content = () => {
  const { isOpen, triggerRef, content, position } = useTooltip();
  const contentRef = useRef<HTMLDivElement>(null);
  const [positionStyles, setPositionStyles] = useState({});
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const updatePosition = () => {
      if (!isOpen || !triggerRef.current || !contentRef.current) return;

      const triggerRect = triggerRef.current.getBoundingClientRect();
      const tooltipRect = contentRef.current.getBoundingClientRect();

      let styles = {};
      const offset = 8;

      const positions = {
        top: {
          left:
            triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2,
          top: triggerRect.top - tooltipRect.height - offset,
        },
        bottom: {
          left:
            triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2,
          top: triggerRect.bottom + offset,
        },
        left: {
          left: triggerRect.left - tooltipRect.width - offset,
          top:
            triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2,
        },
        right: {
          left: triggerRect.right + offset,
          top:
            triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2,
        },
      };

      styles = { ...positions[position] };
      setPositionStyles(styles);
    };

    if (isOpen) {
      setTimeout(updatePosition, 0);
    }

    window.addEventListener('resize', updatePosition);
    window.addEventListener('scroll', updatePosition, true);

    return () => {
      window.removeEventListener('resize', updatePosition);
      window.removeEventListener('scroll', updatePosition, true);
    };
  }, [isOpen, triggerRef, position]);

  if (!isMounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.span
          id="tooltip"
          ref={contentRef}
          role="tooltip"
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          transition={{ duration: 0.15, ease: 'easeOut' }}
          style={{
            position: 'fixed',
            ...positionStyles,
            zIndex: 50,
          }}
          className="tooltip-container--card hyphens-auto"
        >
          {content}
        </motion.span>
      )}
    </AnimatePresence>,
    document.body,
  );
};

export default Tooltip;
