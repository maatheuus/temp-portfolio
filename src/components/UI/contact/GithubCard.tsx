'use client';

import { ArrowUpRightIcon, GithubLogoIcon } from '@phosphor-icons/react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { itemVariants } from './utils';

const GITHUB_USERNAME = 'maatheuus';
const MAX_TILT = 10;

interface Stats {
  repos: number;
  followers: number;
}

const GithubCard = () => {
  const ref = useRef<HTMLAnchorElement>(null);
  const [stats, setStats] = useState<Stats | null>(null);
  const [chartFailed, setChartFailed] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 15, stiffness: 200 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width - 0.5) * 2;
    const y = ((e.clientY - top) / height - 0.5) * 2;
    mouseX.set(x * MAX_TILT);
    mouseY.set(y * MAX_TILT);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  useEffect(() => {
    let cancelled = false;

    fetch(`https://api.github.com/users/${GITHUB_USERNAME}`)
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (!cancelled && data) {
          setStats({ repos: data.public_repos, followers: data.followers });
        }
      })
      .catch(() => {});

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <motion.a
      ref={ref}
      href={`https://github.com/${GITHUB_USERNAME}`}
      target="_blank"
      rel="noopener noreferrer"
      variants={itemVariants}
      className="group relative flex flex-col items-start justify-between overflow-hidden rounded-xl border border-zinc-800 p-6 text-left transition-shadow duration-300 ease-in-out hover:shadow-2xl md:col-span-2"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-secondary-yellow/0 via-secondary-yellow/0 to-secondary-yellow/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <motion.div
        style={{ x: springX, y: springY }}
        className="relative z-10 flex h-full w-full flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"
      >
        <div>
          <div className="mb-4 text-primary-white transition-transform duration-300 ease-out group-hover:scale-110">
            <GithubLogoIcon className="size-8" />
          </div>
          <h3 className="mb-1 text-xl font-bold text-primary-white">
            GitHub
          </h3>
          <p className="text-sm text-primary-lightgrey">See my code</p>
          {stats && (
            <p className="mt-3 text-sm text-primary-lightgrey">
              {stats.repos} repos · {stats.followers} followers
            </p>
          )}
        </div>

        {!chartFailed && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={`https://ghchart.rshah.org/FFBA08/${GITHUB_USERNAME}`}
            alt="GitHub contribution graph"
            className="h-auto w-full max-w-md opacity-80 transition-opacity duration-300 group-hover:opacity-100 sm:w-1/2"
            loading="lazy"
            onError={() => setChartFailed(true)}
          />
        )}
      </motion.div>

      <ArrowUpRightIcon className="absolute right-4 top-4 z-10 size-6 text-yellow-400/70 opacity-0 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100" />
    </motion.a>
  );
};

export default GithubCard;
