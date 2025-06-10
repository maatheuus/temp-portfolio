import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import Link from 'next/link';
import Heading from '../Layout/Heading';
import Text from '../Layout/Text';

const projects = [
  {
    title: 'E-commerce Platform',
    description:
      'A full-stack e-commerce platform with real-time inventory management, payment processing, and admin dashboard.',
    image: '/projects/ecommerce.jpg',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'Stripe'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'Task Management App',
    description:
      'A collaborative task management application with real-time updates, team features, and progress tracking.',
    image: '/projects/taskmanager.jpg',
    tags: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'AI Image Generator',
    description:
      'An AI-powered image generation tool that creates custom artwork based on text prompts and style preferences.',
    image: '/projects/ai-generator.jpg',
    tags: ['Python', 'TensorFlow', 'React', 'FastAPI'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
];

const FeaturedProjects = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <Heading as="h2" className="mb-4 text-4xl">
            Featured Projects
          </Heading>
          <Text className="mx-auto max-w-2xl">
            A selection of my recent work showcasing my expertise in full-stack
            development and modern technologies.
          </Text>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative aspect-video overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              <div className="relative p-6">
                <div className="absolute -top-12 left-6 h-24 w-24 rounded-full bg-secondary-yellow/10 blur-2xl transition-all duration-300 group-hover:bg-secondary-yellow/20" />

                <h3 className="relative mb-2 text-xl font-semibold transition-colors duration-300 group-hover:text-secondary-yellow">
                  {project.title}
                </h3>
                <Text className="relative mb-4 text-sm text-gray-600">
                  {project.description}
                </Text>

                <div className="relative mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-secondary-yellow/10 px-3 py-1 text-xs font-medium text-secondary-yellow transition-colors duration-300 group-hover:bg-secondary-yellow group-hover:text-primary-black"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="relative flex items-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors duration-300 hover:text-secondary-yellow"
                  >
                    <Github className="h-4 w-4" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors duration-300 hover:text-secondary-yellow"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                    Live Demo
                  </a>
                </div>
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
            <motion.div
              className="inline-flex items-center gap-2 rounded-full bg-secondary-yellow px-6 py-3 text-sm font-medium text-primary-black"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{
                type: 'spring',
                stiffness: 400,
                damping: 17,
              }}
            >
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: -4 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                View All Projects
              </motion.span>
              <motion.div
                initial={{ x: 0 }}
                whileHover={{ x: 4 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <ArrowUpRight className="h-4 w-4" />
              </motion.div>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
