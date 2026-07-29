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
    title: 'Meeting Transcriber • Local-First Meeting Recorder & AI Notes',
    tagline:
      'A desktop app that records meetings, transcribes them with speaker labels, and turns the transcript into something you can act on.',
    role: 'Full-Stack Developer',
    year: '2026',

    shortChallenge:
      'Meeting transcription tools all want your audio on their servers. I wanted the opposite: recording, storage and search that never leave your machine, with the AI parts opt-in rather than mandatory.',
    shortSolution:
      'Electron 39 with React 19 and TypeScript. Deepgram handles transcription with diarization, Gemini handles summaries and chat, and everything else — meetings, segments, settings — lives in a local SQLite database with versioned migrations and full-text search.',

    challenge:
      "Every meeting transcription product I looked at is a web app that owns your data. Audio goes up, transcripts live in someone else's database, and search is whatever they decided to build. I wanted a desktop app where the recording, the database and the search index sit on your own disk, and the only thing that ever leaves the machine is the audio you explicitly send off to be transcribed.\n\nThat constraint made the hard parts obvious. Capturing system audio alongside the microphone means the other side of a call is transcribed too, which the browser cannot do. Storing transcripts locally means building real search instead of leaning on a hosted service. And keeping the summary useful across regenerations means action items cannot live inside the summary text, or ticking one off would be undone the next time the model runs.",
    solution:
      'The app is Electron 39 with electron-vite, React 19 and TypeScript, styled with Tailwind CSS 4 and shadcn/ui. The main process owns the database and every integration; the renderer talks to it through a typed preload bridge, one IPC module per domain.\n\nRecording mixes microphone input with system audio into a single track, with a floating overlay pill for elapsed time and pause, resume, stop and screen capture while the main window is out of the way. Transcription runs on Deepgram (nova-3) when the recording stops, with diarization, punctuation and smart formatting. The meeting language pins the acoustic model; without one, Deepgram detects it.\n\nTurns are stored as segments with stable IDs — the summary cites them, so they are never reassigned. Segments are editable inline, renaming a speaker rewrites every turn of that speaker, and clicking a transcript line seeks the audio player to that moment.\n\nThe AI layer runs on Gemini: summaries driven by reusable instruction templates, action items extracted as checkable tasks, a chat that answers questions against the transcript, auto-naming and auto-tagging, and non-destructive translation. Action items are stored in their own table precisely so regenerating a summary never resets what you already ticked off.\n\nPersistence is better-sqlite3 with numbered SQL migrations and SQLite FTS5 for search — full text across every transcript, not just titles. Folders, tags, pinning and a trash with undo sit on top of it, and a meeting exports to Markdown, plain text, SRT, VTT or JSON.',

    features: [
      'Microphone and system audio captured together, so both sides of a call are transcribed',
      'Deepgram transcription with speaker diarization and inline editing',
      'Gemini summaries, extracted action items, and chat against the transcript',
      'Full-text search across every transcript, powered by SQLite FTS5',
      'Folders, tags, pinning and a trash with undo instead of hard deletes',
      'Export to Markdown, plain text, SRT, VTT or JSON',
    ],
    images: [
      meetingTranscriberImg1,
      meetingTranscriberImg2,
      meetingTranscriberImg3,
      meetingTranscriberImg4,
      meetingTranscriberImg5,
    ],
    tags: [
      'Electron',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'SQLite',
      'Deepgram',
      'Gemini',
    ],
    github: 'https://github.com/maatheuus/meeting-transcriber',
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
