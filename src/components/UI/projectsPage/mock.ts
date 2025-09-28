import {
  bookLifeImg,
  bookLifeImg2,
  movieLifeImg1,
  movieLifeImg2,
  movieLifeImg3,
  trilloHotelImg,
  vegcomImg1,
  vegcomImg2,
  vegcomImg3,
  vegcomImg4,
} from '@/src/assets/projectsImgs';

export const allProjects = [
  {
    category: 'Full-Stack',
    status: 'in-progress',
    title: 'Vegcom • Vegan & Vegetarian Recipes Platform',
    tagline:
      'A full-stack platform that blends community, plant-based cooking, and fun.',
    role: 'Full-Stack Developer',
    year: '2025',
    challenge:
      'The challenge was to create a unique space for vegans, vegetarians, and those curious about exploring plant-based cuisine. We needed to combine practicality, a consistent visual identity, intelligent recipe search, personalized profiles, and also pave the way for a premium model.',
    solution:
      'I built Vegcom with Next.js and Tailwind, using reusable components and smooth animations to offer a modern and welcoming experience. We implemented a recipe system with advanced search, filters, favorites, profile pages with sections like "Masterchef in Action" and "Favorites of the Heart," as well as a chat styled in the brands tone. Everything was designed to grow scalably, with room for premium features in the future.',
    features: [
      'Advanced recipe search and filters',
      'Personal chef profiles with favorite collections',
      'Custom empty states with fun copy',
      'Responsive design with Tailwind CSS',
      'Community-driven recipe sharing',
    ],
    images: [vegcomImg1, vegcomImg2, vegcomImg3, vegcomImg4],
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Prisma'],
  },
  {
    category: 'Full-Stack',
    status: 'outdated',
    title: 'Movie Life • Explore & Favorite Movies & Series',
    tagline:
      'A full-stack platform for organizing your personal movie and series universe.',
    role: 'Full-Stack Developer',
    year: '2024',
    challenge:
      'The challenge was to build a modern, user-friendly platform for movie and series enthusiasts. It needed to support intuitive search, real-time favoriting, and personal list management — all with a smooth experience and scalable stack.',
    solution:
      'I developed Movie Life with React and Node.js, using MongoDB for flexible data modeling and React Query for optimized data fetching. The UI is responsive and clean, allowing users to search titles, mark favorites, and manage a personal watchlist. The stack supports future features like authentication and social interactions.',
    features: [
      'Search and explore a large catalog of movies and series',
      'Favorite and organize content into a personal watchlist',
      'Smooth client-side experience with React Query',
      'Clean and responsive design',
      'Built for future scalability with MongoDB and modular structure',
    ],
    images: [movieLifeImg1, movieLifeImg2, movieLifeImg3],
    tags: ['React', 'Node.js', 'MongoDB', 'React Query'],
    github: 'https://github.com/maatheuus/Movie-Life',
    live: 'https://movie-life-ml.vercel.app',
  },
  {
    category: 'Full-Stack',
    status: 'outdated',
    title: 'Book Life • Discover & Bookmark Your Favorite Reads',
    tagline:
      'A full-stack reading platform that lets you explore, favorite, and organize books effortlessly.',
    role: 'Full-Stack Developer',
    year: '2024',
    challenge:
      'The challenge was to build a seamless book discovery experience using a third-party API while implementing secure user authentication and state management. The integration of JWT-based auth with React Query for data handling presented unique coordination and caching challenges.',
    solution:
      'I built Book Life using React, Node.js, and MongoDB, integrating the Google Books API to allow users to search for and favorite books. JWT authentication ensures secure access to personal bookmarks, while React Query manages asynchronous data efficiently. The interface is responsive and clean, built with Tailwind CSS, offering a focused and enjoyable user experience.',
    features: [
      'Book search powered by Google Books API',
      'User authentication with JWT and protected routes',
      'Bookmarking system synced to user profile',
      'Optimized data fetching and caching with React Query',
    ],
    images: [bookLifeImg, bookLifeImg2],
    tags: [
      'React',
      'Node.js',
      'Express',
      'MongoDB',
      'React Query',
      'React Hook Form',
      'JWT',
    ],
    github: 'https://github.com/maatheuus/Book-Life',
    live: 'https://book-life.vercel.app/',
  },
  {
    category: 'Front-End',
    status: 'outdated',
    title: 'Hotel Trillo • Hotel Search Platform in Brazil',
    tagline:
      'A vanilla JavaScript front-end app for exploring and bookmarking hotels across Brazil.',
    role: 'Front-End Developer',
    year: '2023',
    challenge:
      'The challenge was to build a fully functional hotel search platform without using any JavaScript frameworks or libraries. Structuring the application around the MVC (Model-View-Controller) architecture required deep research and careful planning to maintain code clarity and reusability.',
    solution:
      'I developed Hotel Trillo using HTML, CSS (with Sass), and vanilla JavaScript, applying the MVC pattern to separate concerns and structure the codebase efficiently. The app allows users to search hotels, paginate through results, and bookmark their favorite options. It was a foundational project that strengthened my understanding of architecture, UI design, and clean code practices.',
    features: [
      'Hotel search functionality with pagination',
      'Bookmarking system for favorite hotels',
      'Structured using the MVC (Model-View-Controller) pattern',
      'Built entirely with vanilla JavaScript, HTML5, and Sass',
      'Clean, responsive UI design without external libraries',
    ],
    images: [trilloHotelImg],
    tags: ['JavaScript', 'HTML5', 'CSS3', 'Sass', 'MVC'],
    github: 'https://github.com/maatheuus/Trillo-Hotel',
    live: 'https://hotelstrillo.netlify.app/',
  },
];
