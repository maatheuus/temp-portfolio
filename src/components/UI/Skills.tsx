import { motion } from 'framer-motion';

import { CodeIcon, DatabaseIcon, HardDrivesIcon, type Icon } from '@phosphor-icons/react';
import { twMerge } from 'tailwind-merge';
import HeadingTopText from '../Layout/HeadingTopText';
import Layout from '../Layout/Layout';

type Skill = {
  name: string;
};

type SkillCategory = {
  category: string;
  icon: Icon;
  skills: Skill[];
};

const skillsData: SkillCategory[] = [
  {
    category: 'Frontend',
    icon: CodeIcon,
    skills: [
      { name: 'React' },
      { name: 'TypeScript' },
      { name: 'Next.js' },
      { name: 'Tailwind CSS' },
      { name: 'Framer Motion' },
      { name: 'HTML5 & CSS3' },
    ],
  },
  {
    category: 'Backend',
    icon: HardDrivesIcon,
    skills: [
      { name: 'Node.js' },
      { name: 'Express' },
      { name: 'REST APIs' },
      { name: 'Prisma' },
      { name: 'Zod' },
    ],
  },
  {
    category: 'Database & Tools',
    icon: DatabaseIcon,
    skills: [
      { name: 'MongoDB' },
      { name: 'PostgreSQL' },
      { name: 'Git & GitHub' },
      { name: 'Docker' },
      { name: 'Figma' },
    ],
  },
];

const Skills = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <Layout className={twMerge(' ', className)} {...props}>
      <div className="container mx-auto max-w-6xl px-4">
        <HeadingTopText
          title="My Skills"
          description="Here are some of the tools and technologies I've worked with."
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="group flex flex-col rounded-lg border border-zinc-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg md:p-6 lg:col-span-2 lg:px-6 lg:py-2 dark:border-zinc-800 dark:bg-zinc-900/50"
        >
          {skillsData.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{
                duration: 0.5,
                delay: (index + 1) * 0.1,
                ease: 'easeOut',
              }}
              className="flex flex-col py-4 md:py-6"
            >
              <div className="mb-5 flex items-center gap-4">
                <category.icon className="size-5 text-yellow-500 md:size-6" />
                <h3 className="text-lg font-semibold text-zinc-800 md:text-xl dark:text-zinc-100">
                  {category.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.08, y: -2 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: (index + 1) * 0.1 + skillIndex * 0.08,
                    }}
                    className="tags"
                  >
                    {skill.name}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Layout>
  );
};

export default Skills;
