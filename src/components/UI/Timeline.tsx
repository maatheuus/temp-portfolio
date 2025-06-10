'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';
import { useRef } from 'react';
import Heading from '../Layout/Heading';
import Text from '../Layout/Text';

const timelineData = [
  {
    type: 'work',
    title: 'Senior Software Engineer',
    company: 'Tech Company',
    period: '2022 - Present',
    description:
      'Leading development of enterprise applications using modern technologies.',
    technologies: ['React', 'Node.js', 'AWS', 'Docker'],
  },
  {
    type: 'education',
    title: 'Master in Computer Science',
    institution: 'University Name',
    period: '2020 - 2022',
    description: 'Specialized in Artificial Intelligence and Machine Learning.',
    technologies: ['Python', 'TensorFlow', 'Data Science'],
  },
  {
    type: 'work',
    title: 'Software Engineer',
    company: 'Previous Company',
    period: '2019 - 2022',
    description:
      'Developed and maintained web applications for various clients.',
    technologies: ['JavaScript', 'React', 'Node.js'],
  },
  {
    type: 'education',
    title: 'Bachelor in Computer Science',
    institution: 'University Name',
    period: '2015 - 2019',
    description: 'Focused on Software Engineering and Web Development.',
    technologies: ['Java', 'Web Development', 'Databases'],
  },
  {
    type: 'work',
    title: 'Junior Developer',
    company: 'Startup Company',
    period: '2018 - 2019',
    description: 'Worked on frontend development and UI/UX improvements.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Vue.js'],
  },
  {
    type: 'education',
    title: 'Web Development Bootcamp',
    institution: 'Coding Academy',
    period: '2018',
    description: 'Intensive training in modern web development technologies.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
  {
    type: 'work',
    title: 'Freelance Developer',
    company: 'Self-employed',
    period: '2017 - 2018',
    description: 'Developed websites and web applications for various clients.',
    technologies: ['WordPress', 'PHP', 'JavaScript', 'MySQL'],
  },
  {
    type: 'education',
    title: 'Computer Science Fundamentals',
    institution: 'Online Platform',
    period: '2017',
    description: 'Learned core programming concepts and algorithms.',
    technologies: ['Python', 'Algorithms', 'Data Structures'],
  },
];

const Timeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section className="py-20" ref={containerRef}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <Heading as="h2" className="mb-4 text-4xl">
            Experience & Education
          </Heading>
          <Text className="mx-auto max-w-2xl">
            My professional journey and academic background that shaped my
            expertise in technology.
          </Text>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-secondary-yellow/20" />

          <motion.div
            className="absolute left-1/2 top-0 w-0.5 -translate-x-1/2 bg-secondary-yellow"
            style={{ height: lineHeight }}
          />

          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <motion.div
                key={`${item.type}-${index}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                  <motion.div
                    whileHover={{
                      scale: 1.02,
                    }}
                    className="relative rounded-xl border border-secondary-yellow bg-white p-6 shadow-lg transition-shadow duration-300"
                  >
                    <motion.div
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                      className="mb-4 flex items-center gap-3"
                    >
                      {item.type === 'work' ? (
                        <Briefcase className="h-6 w-6 text-secondary-yellow" />
                      ) : (
                        <GraduationCap className="h-6 w-6 text-secondary-yellow" />
                      )}
                      <div>
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                        <p className="text-sm text-gray-600">
                          {item.type === 'work'
                            ? item.company
                            : item.institution}
                        </p>
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: false }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    >
                      <Text className="mb-4 text-sm">{item.description}</Text>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                      className="flex flex-wrap gap-2"
                    >
                      {item.technologies.map((tech) => (
                        <motion.span
                          key={tech}
                          whileHover={{ scale: 1.05 }}
                          className="rounded-full bg-secondary-yellow/10 px-3 py-1 text-xs font-medium text-secondary-yellow transition-colors duration-300 hover:bg-secondary-yellow hover:text-primary-black"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: false }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                      className="mt-4 text-sm font-medium text-secondary-yellow"
                    >
                      {item.period}
                    </motion.div>
                  </motion.div>
                </div>

                <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                    className="h-full w-full rounded-full bg-secondary-yellow"
                  />
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                    className="absolute inset-0 rounded-full bg-secondary-yellow/20"
                    style={{ scale: 2 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
