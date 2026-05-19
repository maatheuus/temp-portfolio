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
    status: 'completed',
    tagline:
      'A recipe and community platform built specifically for vegans and vegetarians.',
    challenge:
      "Most recipe sites treat plant-based cooking as a niche. I wanted to build something that felt purpose-built for it — with real search and filter tools, personal profiles, and a community feed that wasn't tacked on.",
    solution:
      "Next.js 15 frontend, NestJS backend, Prisma + PostgreSQL. The recipe system has advanced filters, favorites, and rich text creation. Profiles have personality. There's a Gemini-powered AI chat and Stripe wired in for a future premium tier.",
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
