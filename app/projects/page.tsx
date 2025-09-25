'use client';

import Heading from '@/src/components/Layout/Heading';
import Text from '@/src/components/Layout/Text';
import ContactGrid from '@/src/components/UI/contact/ContactGrid';
import { allProjects } from '@/src/components/UI/projectsPage/mock';
import ProjectCard from '@/src/components/UI/projectsPage/ProjectCard';
import ProjectFilters from '@/src/components/UI/projectsPage/ProjectFilters';
import { AnimatePresence, motion } from 'framer-motion';
import { useMemo, useState } from 'react';

const categories = ['All', 'Full-Stack', 'Frontend', 'Experiments'];
const Page = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = useMemo(
    () =>
      activeCategory === 'All'
        ? allProjects
        : allProjects.filter((p) => p.category === activeCategory),
    [activeCategory],
  );

  return (
    <main className="min-h-screen bg-primary-white text-primary-black dark:bg-primary-black dark:text-primary-white">
      <section className="py-24 sm:py-32">
        <div className="container mx-auto max-w-5xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <Heading as="h1" className="mb-4 text-5xl sm:text-7xl">
              Selected Works
            </Heading>
            <Text className="mx-auto max-w-2xl text-lg text-primary-grey">
              Uma seleção de projetos que demonstram minha paixão por criar
              soluções digitais, desde o design até o deploy.
            </Text>
          </motion.div>
        </div>
      </section>

      <section className="pb-24 sm:pb-32">
        <div className="container mx-auto max-w-6xl md:px-4">
          <ProjectFilters
            categories={categories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
          <motion.div layout className="flex flex-col gap-24 md:gap-32">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={index}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
      <section className="py-24 text-center">
        <ContactGrid />
      </section>
    </main>
  );
};

export default Page;
