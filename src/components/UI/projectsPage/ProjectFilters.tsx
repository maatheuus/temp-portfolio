import { motion } from 'framer-motion';

const ProjectFilters = ({
  activeCategory,
  setActiveCategory,
  categories,
}: {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  categories: string[];
}) => (
  <div className="mb-12 flex flex-wrap items-center justify-center gap-4">
    {categories.map((category) => (
      <button
        key={category}
        onClick={() => setActiveCategory(category)}
        className={`relative rounded-full px-5 py-2 text-sm font-medium transition-colors ${
          activeCategory === category
            ? 'text-primary-black'
            : 'text-primary-grey hover:text-primary-white'
        }`}
      >
        {activeCategory === category && (
          <motion.div
            layoutId="activeFilter"
            className="absolute inset-0 z-0 rounded-full bg-secondary-yellow"
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          />
        )}
        <span className="relative z-10">{category}</span>
      </button>
    ))}
  </div>
);

export default ProjectFilters;
