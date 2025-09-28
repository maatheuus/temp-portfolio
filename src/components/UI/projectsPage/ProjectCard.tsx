'use client';

import FeaturedProjectsCarousel from '@/src/components/UI/ProjectsCarousel';
import {
  ArrowUpRightIcon,
  CheckCircleIcon,
  GithubLogoIcon,
} from '@phosphor-icons/react';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { ProjectBadge } from '../featuredProjects/ProjectBadge';
import useOverlapDetector from './hooks/useOverlapDetector';

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const imgRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const overlayVisible = useOverlapDetector(imgRef, textRef, 14);

  return (
    <motion.article
      layout="position"
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.98 }}
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 30,
        duration: 0.8,
      }}
      className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2"
    >
      <motion.div
        ref={imgRef}
        className={`sticky top-24 z-0 aspect-video ${index % 2 === 1 ? 'lg:order-last' : ''}`}
      >
        <FeaturedProjectsCarousel
          images={project.images}
          className={
            overlayVisible
              ? 'relative before:absolute before:inset-0 before:z-10 before:size-full before:bg-primary-black/60 before:opacity-100 before:transition-all before:duration-300 before:content-[""]'
              : 'before:opacity-0'
          }
        />
      </motion.div>

      <div className="relative" ref={textRef}>
        <div className="relative z-30 pt-2">
          <div className="flex items-center gap-4 text-sm font-medium text-primary-grey">
            <span>{project.role}</span>
            <span>•</span>
            <span>{project.year}</span>
          </div>
          <div className="mb-3 mt-2 flex flex-wrap items-center gap-x-4 gap-y-2">
            <h3 className="text-3xl font-bold">{project.title}</h3>
            {project.status && <ProjectBadge status={project.status} />}
          </div>
          <p className="mb-8 text-lg text-primary-grey">{project.tagline}</p>

          <div className="mb-8 space-y-6 text-primary-grey">
            <div>
              <h4 className="mb-2 font-semibold text-primary-black dark:text-primary-white">
                The Challenge
              </h4>
              <p>{project.challenge}</p>
            </div>
            <div>
              <h4 className="mb-2 font-semibold text-primary-black dark:text-primary-white">
                My Solution
              </h4>
              <p>{project.solution}</p>
            </div>
          </div>

          <div className="mb-8">
            <h4 className="mb-4 font-semibold text-primary-black dark:text-primary-white">
              Key Features
            </h4>
            <ul className="space-y-3">
              {project.features.map((feature: string) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircleIcon
                    size={18}
                    className="mt-1 flex-shrink-0 text-secondary-yellow"
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-8">
            <h4 className="mb-4 font-semibold text-primary-black dark:text-primary-white">
              Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag: string) => (
                <span key={tag} className="tags">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4 border-t border-zinc-200 pt-6 dark:border-zinc-800">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-medium transition-colors hover:text-secondary-yellow"
              >
                <GithubLogoIcon size={16} /> Code
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-medium transition-colors hover:text-secondary-yellow"
              >
                <ArrowUpRightIcon size={16} /> Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
};
export default ProjectCard;
