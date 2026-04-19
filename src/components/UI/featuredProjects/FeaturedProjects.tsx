import { ArrowUpRightIcon, GithubLogoIcon } from '@phosphor-icons/react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import HeadingTopText from '../../Layout/HeadingTopText';
import Layout from '../../Layout/Layout';
import ProjectsCarousel from '../ProjectsCarousel';
import { allProjects } from '../projectsPage/mock';
import { ProjectBadge, type ProjectStatus } from './ProjectBadge';

const FeaturedProjects = () => {
  const featuredProjects = allProjects.filter((p) => p.featured);

  return (
    <Layout>
      <div className="container mx-auto px-4">
        <HeadingTopText
          title="Featured Projects"
          description="A selection of my recent work showcasing my expertise in full-stack
            development and modern technologies."
        />

        <div className="space-y-20">
          {featuredProjects.map((project) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-150px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group"
            >
              <div className="relative mb-8 overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary-yellow/0 via-secondary-yellow/0 to-secondary-yellow/40 opacity-100" />
                <ProjectsCarousel images={project.images} />
              </div>

              <div className="mb-2 flex flex-wrap items-center gap-4">
                <h3 className="text-3xl font-bold">{project.title}</h3>
                <ProjectBadge status={project.status as ProjectStatus} />
              </div>

              <p className="mb-6 text-lg text-zinc-400">{project.tagline}</p>

              <div className="mb-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="tags">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="prose prose-invert max-w-none">
                <h4 className="text-lg font-semibold text-secondary-yellow">
                  The Challenge
                </h4>
                <p className="text-base">{project.shortChallenge}</p>
                <h4 className="text-lg font-semibold text-secondary-yellow">
                  The Solution
                </h4>
                <p className="text-base">{project.shortSolution}</p>
              </div>

              <div className="relative mt-6 flex items-center gap-4">
                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors duration-300 hover:text-secondary-yellow"
                  >
                    <GithubLogoIcon className="h-4 w-4" />
                    Code
                  </Link>
                )}
                {project.live && (
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors duration-300 hover:text-secondary-yellow"
                  >
                    <ArrowUpRightIcon className="h-4 w-4" />
                    Live Demo
                  </Link>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Link href="/projects">
            <div className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-yellow-500 px-6 py-3 text-sm font-medium text-black transition-all duration-300 hover:scale-105 hover:bg-yellow-400">
              <span>View All Projects</span>
              <ArrowUpRightIcon className="h-4 w-4" />
            </div>
          </Link>
        </motion.div>
      </div>
    </Layout>
  );
};

export default FeaturedProjects;
