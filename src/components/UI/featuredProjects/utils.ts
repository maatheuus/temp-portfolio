import {
  movieLifeImg1,
  movieLifeImg2,
  movieLifeImg3,
  vegcomImg1,
  vegcomImg2,
  vegcomImg3,
  vegcomImg4,
} from '@/src/assets/projectsImgs';

export const projects = [
  {
    title: 'Vegcom',
    status: 'in-progress',
    tagline:
      'The vegan and vegetarian recipe platform that combines community, learning, and fun.',
    challenge:
      'The challenge was to create a unique space for vegans, vegetarians, and those curious about exploring plant-based cuisine. We needed to combine practicality, a consistent visual identity, intelligent recipe search, personalized profiles, and also pave the way for a premium model.',
    solution:
      'I built Vegcom with Next.js and Tailwind, using reusable components and smooth animations to offer a modern and welcoming experience. We implemented a recipe system with advanced search, filters, favorites, profile pages with sections like "Masterchef in Action" and "Favorites of the Heart," as well as a chat styled in the brands tone. Everything was designed to grow scalably, with room for premium features in the future.',
    images: [vegcomImg1, vegcomImg2, vegcomImg3, vegcomImg4],
    tags: ['Next.js', 'TypeScript', 'Nest.js', 'Prisma', 'PostgreSQL'],
  },
  {
    title: 'Movie Life',
    status: 'outdated',
    tagline:
      'Explore, favorite, and organize your movie and series library with ease.',
    challenge:
      'The challenge was to design a simple yet powerful platform for movie and series enthusiasts. It needed to support fast search, intuitive navigation, favoriting, and custom list management — all while offering a smooth and responsive experience on both desktop and mobile.',
    solution:
      'I built Movie Life with React and a Node.js backend, using MongoDB for flexible data storage and React Query for efficient data fetching and caching. The result is a clean, responsive interface where users can search titles, favorite content, and manage their personal watchlist with minimal friction. Everything was structured to prioritize performance and ease of use, making the platform ideal for daily entertainment tracking.',
    images: [movieLifeImg1, movieLifeImg2, movieLifeImg3],
    tags: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/maatheuus/Movie-Life',
    live: 'https://movie-life-ml.vercel.app',
  },
];
