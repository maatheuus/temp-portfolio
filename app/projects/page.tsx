'use client';

import HeadingTopText from '@/src/components/Layout/HeadingTopText';
import ContactGrid from '@/src/components/UI/contact/ContactGrid';
import { allProjects } from '@/src/components/UI/projectsPage/mock';
import ProjectCard from '@/src/components/UI/projectsPage/ProjectCard';
import ProjectFilters from '@/src/components/UI/projectsPage/ProjectFilters';
import { AnimatePresence, motion } from 'framer-motion';
import { useMemo, useState } from 'react';

const categories = ['All', 'Full-Stack', 'Front-End'];
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
    <main className="min-h-screen bg-primary-black text-primary-white">
      <section className="py-24 sm:py-32">
        <div className="container mx-auto max-w-5xl px-4 text-center">
          <HeadingTopText
            title=" Selected Works"
            description="A selection of projects that demonstrate my passion for creating digital solutions, from design to deployment."
          />
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
