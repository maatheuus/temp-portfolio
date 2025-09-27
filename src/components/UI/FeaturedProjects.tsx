import { ArrowUpRightIcon, GithubLogoIcon } from '@phosphor-icons/react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import HeadingTopText from '../Layout/HeadingTopText';
import Layout from '../Layout/Layout';
import ProjectsCarousel from './ProjectsCarousel';

const projects = [
  {
    title: 'E-commerce Platform',
    tagline:
      'A full-stack e-commerce platform built for performance and scale.',
    challenge:
      'The main goal was to create a seamless shopping experience with real-time inventory updates and a secure payment gateway, while giving admins a simple way to manage products.',
    solution:
      'I built a Next.js frontend for fast page loads and a Node.js backend with Prisma for database management. Stripe integration handles payments securely, and a custom admin dashboard allows for easy content management.',
    images: [
      'https://picsum.photos/800/450?random=1',
      'https://picsum.photos/800/450?random=2',
      'https://picsum.photos/800/450?random=3',
    ],
    tags: ['Next.js', 'TypeScript', 'Prisma', 'Stripe'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'Task Management App',
    tagline:
      'A collaborative task management application with real-time updates.',
    challenge:
      'The challenge was to build a highly interactive UI that reflects database changes in real-time across all connected clients, using a non-relational database.',
    solution:
      'The app uses a React frontend and a Node.js backend with Socket.io for real-time communication. User data and tasks are stored in MongoDB, ensuring flexibility and scalability.',
    images: [
      'https://picsum.photos/800/450?random=4',
      'https://picsum.photos/800/450?random=5',
    ],
    tags: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
];

const FeaturedProjects = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4">
        <HeadingTopText
          title="Featured Projects"
          description="A selection of my recent work showcasing my expertise in full-stack
            development and modern technologies."
        />

        <div className="space-y-20">
          {projects.map((project) => (
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

              <h3 className="mb-2 text-3xl font-bold">{project.title}</h3>
              <p className="mb-6 text-lg text-zinc-600 dark:text-zinc-400">
                {project.tagline}
              </p>

              <div className="mb-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="tags">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="prose prose-zinc dark:prose-invert max-w-none">
                <h4 className="text-lg font-semibold text-secondary-yellow">
                  The Challenge
                </h4>
                <p className="text-base">{project.challenge}</p>
                <h4 className="text-lg font-semibold text-secondary-yellow">
                  The Solution
                </h4>
                <p className="text-base">{project.solution}</p>
              </div>

              <div className="relative mt-6 flex items-center gap-4">
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors duration-300 hover:text-secondary-yellow"
                >
                  <GithubLogoIcon className="h-4 w-4" />
                  Code
                </Link>
                <Link
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors duration-300 hover:text-secondary-yellow"
                >
                  <ArrowUpRightIcon className="h-4 w-4" />
                  Live Demo
                </Link>
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
