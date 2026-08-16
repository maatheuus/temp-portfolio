import {
  bookLifeImg,
  bookLifeImg2,
  meetingTranscriberImg1,
  meetingTranscriberImg2,
  meetingTranscriberImg3,
  meetingTranscriberImg4,
  meetingTranscriberImg5,
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
    slug: 'vegcom',
    category: 'Full-Stack',
    status: 'completed',
    featured: true,
    title: 'Vegcom • Vegan & Vegetarian Recipes Platform',
    tagline:
      'A full-stack platform that blends community, plant-based cooking, and fun.',
    role: 'Full-Stack Developer',
    year: '2025',

    shortChallenge:
      "Most recipe sites treat plant-based cooking as a niche. I wanted to build something that felt purpose-built for it — with real search and filter tools, personal profiles, and a community feed that wasn't tacked on.",
    shortSolution:
      "Next.js 15 frontend, NestJS backend, Prisma + PostgreSQL. The recipe system has advanced filters, favorites, and rich text creation. Profiles have personality. There's a Gemini-powered AI chat and Stripe wired in for a future premium tier.",

    challenge:
      "Most recipe platforms weren't really built for vegans — they were built for everyone, with a vegan filter slapped on. I wanted to build something where the whole product assumes plant-based by default. That meant thinking through search and filtering properly (meal type, prep time, difficulty), building profiles that reflect a cooking identity rather than just a username, and creating a community feed where people actually want to post. On top of that, I wanted room to grow: a subscription model, an AI assistant, moderation tools. Getting all of that to feel coherent instead of bolted together was the real design challenge.",
    solution:
      "The frontend is Next.js 15 with the App Router, TypeScript throughout, Tailwind CSS v4 for styling, and TanStack Query for server state. The backend is NestJS with Prisma and PostgreSQL. Auth is JWT-based with interceptors on the Axios client so token handling is invisible to components.\n\nThe recipe system supports full-text search, multi-param filtering, image uploads via Cloudinary, a Tiptap rich text editor for step-by-step instructions, and drag-and-drop ordering with dnd-kit. Recipes go through a review flow before publishing.\n\nUser profiles have two custom sections — one for their published recipes, one for saved favorites — with distinct copy and empty states to give the UI some personality rather than just blank tables.\n\nThe community feed supports three post types (posts, resources, announcements), nested comments, likes, and saves. It uses tab state kept in React state rather than URL params to avoid unnecessary middleware re-runs on every tab switch.\n\nThe AI chat runs on Gemini. Each session is isolated, and conversation history is fetched from the database and passed back to the model on every request — Gemini has no persistent session state, so that reconstruction happens server-side. Token limits are adjusted based on subscription tier.\n\nStripe is integrated for subscription management: checkout sessions, the customer portal, and a webhook that updates the user's plan on the backend.",

    features: [
      'Recipe creation with rich text, image upload, and drag-and-drop step ordering',
      'Advanced search with filters by meal type, prep time, difficulty, and category',
      'User profiles with published recipes and saved favorites',
      'Community feed with posts, nested comments, likes, and saves',
      'Gemini AI chat with per-session conversation history',
      'JWT auth with Axios interceptors',
      'Stripe checkout and subscription management',
      'Notification system with unread count polling',
    ],
    images: [vegcomImg1, vegcomImg2, vegcomImg3, vegcomImg4],
    tags: [
      'Next.js',
      'TypeScript',
      'Tanstack Query',
      'Nest.js',
      'PostgreSQL',
      'Prisma',
    ],
    live: 'https://www.vegcom.life',
  },
  {
    slug: 'meeting-transcriber',
    category: 'Full-Stack',
    status: 'completed',
    featured: true,
    title: 'Transcriber* • Local-First Meeting Recorder & AI Notes',
    tagline:
      'Record the conversation. Keep the context. Turn it into work that survives the next meeting.',
    role: 'Full-Stack Developer',
    year: '2026',

    shortChallenge:
      'Important decisions get buried in an hour of audio, then disappear before the next call. I wanted the useful record to stay searchable and under the user’s control.',
    shortSolution:
      'An Electron desktop app with React and TypeScript. It records microphone and system audio, keeps meetings in local SQLite, uses Deepgram for transcription, and Gemini for summaries, action items, and transcript Q&A.',

    challenge:
      'A meeting ends, the recording is saved somewhere, and the decisions inside it start to fade. Rewatching is slow. A generic summary is not enough when someone needs to find the exact discussion, recover a commitment, or turn it into a task.\n\nMost meeting-note products solve that problem by making the recording and its history part of someone else’s service. I wanted a desktop-first alternative: keep the audio files, meeting library, transcript, and search index on the user’s machine. When transcription or AI assistance is needed, the user brings their own provider keys.',
    solution:
      'Transcriber* is built with Electron 39, electron-vite, React 19, and TypeScript. The Electron main process owns storage and provider integrations; the UI reaches it through a typed preload bridge, keeping desktop capabilities out of the renderer.\n\nThe recorder combines microphone input with available system audio, preserving a continuous clock through pause and resume. A floating control keeps the recording accessible while the main window is out of the way. When the recording stops, Deepgram Nova-3 transcribes it with speaker labels, punctuation, and formatting. Each transcript segment is editable, speaker names can be corrected across the meeting, and a line can take the audio player straight back to that moment.\n\nGemini works from the transcript—not the audio—to generate a structured summary, extract checkable action items, answer questions about the meeting, suggest a title and tags, and translate without replacing the original text. Action items live separately from the summary, so regenerating it never clears work that has already been completed.\n\nThe local library is backed by better-sqlite3 and SQLite FTS5, making every transcript searchable alongside meeting titles. Folders, tags, pinning, a recoverable trash, and exports to Markdown, plain text, SRT, VTT, or JSON make the record useful after the call is over.',

    features: [
      'Microphone and system audio recording, with pause, resume, and a floating recorder',
      'Deepgram Nova-3 transcription with speaker labels, formatting, and inline corrections',
      'Gemini summaries, checkable action items, transcript Q&A, naming, tagging, and translation',
      'Editable transcript segments that seek the audio player to the matching moment',
      'Full-text search across local transcripts with SQLite FTS5',
      'Folders, tags, pinning, recoverable trash, and exports to Markdown, text, SRT, VTT, or JSON',
    ],
    images: [
      meetingTranscriberImg1,
      meetingTranscriberImg2,
      meetingTranscriberImg3,
      meetingTranscriberImg4,
      meetingTranscriberImg5,
    ],
    tags: [
      'Electron 39',
      'electron-vite',
      'React 19',
      'TypeScript',
      'Tailwind CSS v4',
      'better-sqlite3',
      'SQLite FTS5',
      'Deepgram Nova-3',
      'Gemini',
    ],
    live: 'https://transcriberweblp.vercel.app/',
  },
  {
    slug: 'movie-life',
    category: 'Full-Stack',
    status: 'outdated',
    featured: false,
    title: 'Movie Life • Explore & Favorite Movies & Series',
    tagline:
      'A full-stack platform for organizing your personal movie and series universe.',
    role: 'Full-Stack Developer',
    year: '2024',

    shortChallenge:
      'TMDB has great data but no memory of what you liked. I wanted to build the personal layer on top — favorites, watchlists, things you can actually organize.',
    shortSolution:
      "React + Node.js + MongoDB. React Query handles the async side. The UI stays out of the way so browsing doesn't feel like work.",

    challenge:
      "TMDB gives you a solid catalog but nothing remembers your preferences. Building the personal layer — auth, favorites, watchlists — on top of a third-party API means every piece of state has to be intentional. The tricky part wasn't the search; it was keeping local and remote state in sync without things feeling laggy.",
    solution:
      "React frontend with a Node.js backend and MongoDB for user data. React Query manages fetching and caching so the UI stays snappy. Users can search titles, mark favorites, and organize a watchlist. The architecture keeps the TMDB integration clean and isolated so swapping or extending it later wouldn't require touching the rest of the app.",

    features: [
      'Search and explore a large catalog of movies and series',
      'Favorite and organize content into a personal watchlist',
      'Smooth client-side experience with React Query',
      'Clean and responsive design',
      'Modular structure built for future extensions',
    ],
    images: [movieLifeImg1, movieLifeImg2, movieLifeImg3],
    tags: ['React', 'Node.js', 'MongoDB', 'React Query'],
    github: 'https://github.com/maatheuus/Movie-Life',
    live: 'https://movie-life-ml.vercel.app',
  },
  {
    slug: 'book-life',
    category: 'Full-Stack',
    status: 'outdated',
    featured: false,
    title: 'Book Life • Discover & Bookmark Your Favorite Reads',
    tagline:
      'A full-stack reading platform that lets you explore, favorite, and organize books effortlessly.',
    role: 'Full-Stack Developer',
    year: '2024',

    shortChallenge:
      "Google Books API gives you search. It doesn't remember what you liked. Building auth on top and keeping the bookmark sync clean was the main puzzle.",
    shortSolution:
      'React, Node.js, MongoDB. JWT auth with protected routes. Tailwind for the UI. React Query for caching. Bookmarks sync to your profile without friction.',

    challenge:
      "Google Books API handles the catalog, but there's no concept of a user on the other end. Plugging in auth and making bookmarks feel native — not like a feature bolted onto a search widget — required careful coordination between JWT state, React Query cache, and the API layer.",
    solution:
      "React frontend backed by a Node.js/Express API and MongoDB. The Google Books integration is isolated behind a service layer. JWT auth protects personal routes. React Query handles caching so search results don't disappear on navigation. Tailwind keeps the UI clean without fighting it.",

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
    slug: 'hotel-trillo',
    category: 'Front-End',
    status: 'outdated',
    featured: false,
    title: 'Hotel Trillo • Hotel Search Platform in Brazil',
    tagline:
      'A vanilla JavaScript front-end app for exploring and bookmarking hotels across Brazil.',
    role: 'Front-End Developer',
    year: '2023',

    shortChallenge:
      'Wanted to build a full search-and-bookmark app with zero frameworks. Vanilla JS + MVC means every architectural decision is intentional.',
    shortSolution:
      'HTML, Sass, vanilla JavaScript. MVC pattern kept the codebase organized. Pagination, hotel search, bookmarks — all without touching React or any library.',

    challenge:
      'No framework means no shortcuts. Building a search-and-bookmark UI with pagination in vanilla JavaScript requires you to think about state, event handling, and DOM updates yourself. The MVC pattern kept things from turning into a pile of event listeners, but it took real planning to get the separation right.',
    solution:
      'HTML, CSS with Sass, and vanilla JavaScript. The MVC pattern splits model logic, DOM rendering, and controller coordination into distinct layers. Hotel search, pagination, and bookmarking all work without a single dependency. It was a deliberate exercise in understanding what frameworks actually abstract away.',

    features: [
      'Hotel search functionality with pagination',
      'Bookmarking system for favorite hotels',
      'Structured using the MVC pattern',
      'Built entirely with vanilla JavaScript, HTML5, and Sass',
    ],
    images: [trilloHotelImg],
    tags: ['JavaScript', 'HTML5', 'CSS3', 'Sass', 'MVC'],
    github: 'https://github.com/maatheuus/Trillo-Hotel',
    live: 'https://hotelstrillo.netlify.app/',
  },
];
