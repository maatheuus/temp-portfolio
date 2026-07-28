'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const MIN_DURATION = 1500;
const EASE = [0.22, 1, 0.36, 1] as const;

const PHRASES = [
  'Focusing the lens',
  'Tuning the strings',
  'Plating the code',
  'Rendering pixels',
];

const stack = {
  initial: { opacity: 0, scale: 0.98 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: EASE },
  },
};

const logoContainer = {
  initial: {},
  animate: {
    transition: { staggerChildren: 0.06, delayChildren: 0.15 },
  },
  exit: {
    transition: { staggerChildren: 0.04, staggerDirection: -1 },
  },
};

const logoLetter = {
  initial: { opacity: 0, y: 14, rotate: -4, filter: 'blur(6px)' },
  animate: {
    opacity: 1,
    y: 0,
    rotate: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.55, ease: EASE },
  },
  exit: {
    opacity: 0,
    y: -10,
    filter: 'blur(6px)',
    transition: { duration: 0.35, ease: EASE },
  },
};

export default function Loader() {
  const [loading, setLoading] = useState(true);
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);

    const start = Date.now();
    const finish = () => {
      const elapsed = Date.now() - start;
      const remaining = Math.max(MIN_DURATION - elapsed, 0);
      setTimeout(() => setLoading(false), remaining);
    };

    if (document.readyState === 'complete') {
      finish();
    } else {
      window.addEventListener('load', finish);
    }

    const phraseTimer = setInterval(() => {
      setPhraseIndex((i) => (i + 1) % PHRASES.length);
    }, 700);

    return () => {
      window.removeEventListener('load', finish);
      clearInterval(phraseTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 overflow-hidden bg-primary-black"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            filter: 'blur(14px)',
            transition: { duration: 0.6, ease: EASE, delay: 0.3 },
          }}
        >
          {/* ambient glow breathing behind the logo */}
          <motion.div
            className="pointer-events-none absolute inset-0 m-auto h-72 w-72 rounded-full bg-secondary-yellow/20 blur-3xl"
            animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
          />

          <motion.div
            variants={stack}
            initial="initial"
            animate="animate"
            className="relative flex flex-col items-center gap-6"
          >
            <motion.div
              className="flex font-alice text-4xl text-primary-white sm:text-5xl"
              variants={logoContainer}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {'MAAT'.split('').map((char, i) => (
                <motion.span
                  key={i}
                  variants={logoLetter}
                  className={
                    i === 1 || i === 2 ? 'text-secondary-yellow' : undefined
                  }
                >
                  {char}
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              className="relative h-5 overflow-hidden"
              exit={{
                opacity: 0,
                y: -8,
                filter: 'blur(4px)',
                transition: { duration: 0.3, ease: EASE, delay: 0.05 },
              }}
            >
              <AnimatePresence mode="wait">
                <motion.p
                  key={phraseIndex}
                  initial={{ opacity: 0, y: 6, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -6, filter: 'blur(4px)' }}
                  transition={{ duration: 0.35, ease: EASE }}
                  className="flex items-center gap-1 text-sm tracking-wide text-primary-lightgrey"
                >
                  {PHRASES[phraseIndex]}
                  <span className="flex gap-0.5">
                    {[0, 1, 2].map((d) => (
                      <motion.span
                        key={d}
                        animate={{ opacity: [0.2, 1, 0.2] }}
                        transition={{
                          duration: 1.1,
                          repeat: Infinity,
                          ease: 'easeInOut',
                          delay: d * 0.15,
                        }}
                      >
                        .
                      </motion.span>
                    ))}
                  </span>
                </motion.p>
              </AnimatePresence>
            </motion.div>

            <motion.div
              className="relative h-px w-32 overflow-hidden rounded-full bg-primary-grey/30"
              exit={{
                opacity: 0,
                y: -8,
                transition: { duration: 0.3, ease: EASE, delay: 0.1 },
              }}
            >
              <motion.div
                className="h-full bg-secondary-yellow"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: MIN_DURATION / 1000, ease: 'linear' }}
              />
              <motion.div
                className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-transparent via-primary-white/60 to-transparent"
                animate={{ x: ['-2.5rem', '10rem'] }}
                transition={{
                  duration: 1.1,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
