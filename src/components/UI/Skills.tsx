import { motion } from 'framer-motion';
import { Code2, Database, Server, Wrench } from 'lucide-react';
import Heading from '../Layout/Heading';
import Text from '../Layout/Text';

const skills = [
  {
    category: 'Frontend',
    icon: Code2,
    skills: [
      { name: 'React', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'Next.js', level: 85 },
      { name: 'Tailwind CSS', level: 90 },
    ],
  },
  {
    category: 'Backend',
    icon: Server,
    skills: [
      { name: 'Node.js', level: 80 },
      { name: 'Express', level: 75 },
      { name: 'REST APIs', level: 85 },
      { name: 'GraphQL', level: 70 },
    ],
  },
  {
    category: 'Database',
    icon: Database,
    skills: [
      { name: 'MongoDB', level: 80 },
      { name: 'PostgreSQL', level: 75 },
      { name: 'Redis', level: 70 },
      { name: 'Prisma', level: 80 },
    ],
  },
  {
    category: 'Tools & Others',
    icon: Wrench,
    skills: [
      { name: 'Git', level: 85 },
      { name: 'Docker', level: 75 },
      { name: 'AWS', level: 70 },
      { name: 'CI/CD', level: 75 },
    ],
  },
];

const Skills = () => {
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
            Skills & Technologies
          </Heading>
          <Text className="mx-auto max-w-2xl">
            A comprehensive overview of my technical expertise and the tools I
            use to bring ideas to life.
          </Text>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className={`rounded-xl border border-secondary-yellow p-6 ${
                index === skills.length - 1 ? 'lg:col-start-2' : ''
              }`}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.2 + 0.2 }}
                className="mb-4 flex items-center"
              >
                <category.icon className="mr-3 h-8 w-8 text-secondary-yellow" />
                <h3 className="text-xl font-semibold">{category.category}</h3>
              </motion.div>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.2 + 0.3 + skillIndex * 0.1,
                    }}
                  >
                    <div className="mb-1 flex justify-between">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-200">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: index * 0.2 + 0.4 + skillIndex * 0.1,
                          ease: [0.21, 0.47, 0.32, 0.98],
                        }}
                        className="h-2 rounded-full bg-secondary-yellow"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
