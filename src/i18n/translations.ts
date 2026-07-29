export type Locale = 'en' | 'pt';

export type Segment = string | { bold: string };

const en = {
  nav: {
    home: 'Home',
    about: 'About',
    works: 'Works',
    projects: 'Projects',
    contact: 'Contact',
  },
  languageToggle: {
    ariaLabel: 'Switch to Portuguese',
  },
  contactLinks: {
    linkedin: 'Connect with me',
    email: 'Send me an email',
    github: 'Check out my GitHub',
  },
  home: {
    heading:
      "Hello, I'm Matheus, a Frontend Engineer based in Brazil, always seeking new challenges.",
    subtext: "I'm currently working for a company as a front-end developer.",
    besides: 'But besides that:',
    photographer: {
      prefix: "I'm a",
      label: 'photographer.',
      tooltip: "I'm actually a good nature photographer",
    },
    musician: {
      prefix: "I'm also a good",
      label: 'musician.',
      tooltip:
        'I mean... I appreciate good music, but nobody needs to know',
    },
    cook: {
      prefix: "I'm a good",
      label: 'cook',
      suffix: 'too.',
      tooltip: 'I mean... I think you got the point',
    },
  },
  about: {
    title: 'About Me',
    description: 'A little bit about myself and my work experience',
    para1: [
      'I am a ',
      { bold: 'Full-stack' },
      ' developer and I am immersed in the world of web development. With intermediate skills in technologies such as ',
      { bold: 'React.js' },
      ', ',
      { bold: 'Next.js' },
      ', ',
      { bold: 'Node.js' },
      ', ',
      { bold: 'MongoDB' },
      ', ',
      { bold: 'Express' },
      ', ',
      { bold: 'JavaScript' },
      ', and ',
      { bold: 'TypeScript' },
      '. I am always looking to learn and improve.',
    ] as Segment[],
    para2:
      'I started this career in 2022 with the goal of transforming my life. As a self-taught individual, I have always sought knowledge through courses on YouTube, Udemy, Frontend Master and others plataforms...',
    para3Tooltip: 'Yes, I counted every single day haha',
    para3Label: 'It took 727 days (1 year and 11 months)',
    para3Suffix:
      ' of studying every single day until I landed my first job at a company in Portugal as a Front-End Developer.',
    para4:
      'But of course, during these nearly 2 years, I had my breaks from the study routine. During this free time, I:',
    galleryBasketball: 'Play so much basketball',
    galleryTrip: 'Make a trip',
    galleryPhotos: 'I also take a lot of pictures',
    galleryPhotosMobile: 'I also take good pictures',
  },
  contact: {
    title: 'Get in Touch',
    description:
      "I'm always open to discussing new projects, creative challenges, or collaboration opportunities. Please feel free to reach out in whichever way you prefer.",
  },
  gallery: {
    title: 'Photo Gallery',
    categoryAll: 'All',
    categories: {
      Basketball: 'Basketball',
      'Porto Alegre': 'Porto Alegre',
      Nature: 'Nature',
    },
  },
  works: {
    heading: 'Experience & Education',
    description:
      'My professional journey and academic background that shaped my expertise in technology.',
  },
  skills: {
    heading: 'My Skills',
    description: "Here are some of the tools and technologies I've worked with.",
    categories: {
      Frontend: 'Frontend',
      Mobile: 'Mobile',
      Backend: 'Backend',
      'Database & Tools': 'Database & Tools',
    },
  },
  featuredProjects: {
    heading: 'Featured Projects',
    description:
      'A selection of my recent work showcasing my expertise in full-stack development and modern technologies.',
    challenge: 'The Challenge',
    solution: 'The Solution',
    code: 'Code',
    liveDemo: 'Live Demo',
    viewAll: 'View All Projects',
  },
  projectBadge: {
    'in-progress': 'In Progress',
    outdated: 'Outdated',
    completed: 'Completed',
  },
  projectsPage: {
    heading: ' Selected Works',
    description:
      'A selection of projects that demonstrate my passion for creating digital solutions, from design to deployment.',
    categoryAll: 'All',
  },
  projectCard: {
    challenge: 'The Challenge',
    solution: 'The Solution',
    keyFeatures: 'Key Features',
    technologies: 'Technologies',
    seeMore: 'See more details',
    code: 'Code',
    liveDemo: 'Live Demo',
  },
  projectDetail: {
    back: 'Back to Projects',
    challenge: 'The Challenge',
    solution: 'The Solution',
    keyFeatures: 'Key Features',
    technologies: 'Technologies',
    links: 'Links',
    viewSource: 'View Source Code',
    visitLive: 'Visit Live Demo',
  },
  contactGrid: {
    heading: "Let's Connect",
    description:
      "Now that you've reached the end, feel free to send me an email, find me on LinkedIn, or check out what I've been up to on GitHub.",
    linkedinDesc: 'My professional network',
    emailDesc: 'Send me a message',
    githubSeeCode: 'See my code',
    githubStatsSeparator: 'repos',
    githubFollowers: 'followers',
  },
  loaderPhrases: [
    'Focusing the lens',
    'Tuning the strings',
    'Plating the code',
    'Rendering pixels',
  ],
  galleryLightbox: {
    seeMore: '(see more...)',
  },
};

const pt: typeof en = {
  nav: {
    home: 'Início',
    about: 'Sobre',
    works: 'Trajetória',
    projects: 'Projetos',
    contact: 'Contato',
  },
  languageToggle: {
    ariaLabel: 'Mudar para inglês',
  },
  contactLinks: {
    linkedin: 'Conecte-se comigo',
    email: 'Envie-me um email',
    github: 'Confira meu GitHub',
  },
  home: {
    heading:
      'Olá, sou o Matheus, um Engenheiro Frontend baseado no Brasil, sempre em busca de novos desafios.',
    subtext: 'Atualmente trabalho em uma empresa como desenvolvedor front-end.',
    besides: 'Mas além disso:',
    photographer: {
      prefix: 'Sou um',
      label: 'fotógrafo.',
      tooltip: 'Na verdade, sou um bom fotógrafo de natureza',
    },
    musician: {
      prefix: 'Também sou um bom',
      label: 'músico.',
      tooltip: 'Quer dizer... eu aprecio uma boa música, mas ninguém precisa saber disso',
    },
    cook: {
      prefix: 'Sou um bom',
      label: 'cozinheiro',
      suffix: 'também.',
      tooltip: 'Quer dizer... acho que você entendeu a ideia',
    },
  },
  about: {
    title: 'Sobre Mim',
    description: 'Um pouco sobre mim e minha experiência profissional',
    para1: [
      'Sou desenvolvedor ',
      { bold: 'Full-stack' },
      ' e estou imerso no mundo do desenvolvimento web. Tenho conhecimento intermediário em tecnologias como ',
      { bold: 'React.js' },
      ', ',
      { bold: 'Next.js' },
      ', ',
      { bold: 'Node.js' },
      ', ',
      { bold: 'MongoDB' },
      ', ',
      { bold: 'Express' },
      ', ',
      { bold: 'JavaScript' },
      ' e ',
      { bold: 'TypeScript' },
      '. Estou sempre buscando aprender e evoluir.',
    ] as Segment[],
    para2:
      'Comecei nessa carreira em 2022 com o objetivo de transformar minha vida. Como autodidata, sempre busquei conhecimento através de cursos no YouTube, Udemy, Frontend Masters e outras plataformas...',
    para3Tooltip: 'Sim, eu contei cada dia, haha',
    para3Label: 'Foram 727 dias (1 ano e 11 meses)',
    para3Suffix:
      ' estudando todos os dias até conseguir meu primeiro emprego em uma empresa em Portugal como Front-End Developer.',
    para4:
      'Mas é claro que, durante esses quase 2 anos, também tive minhas pausas na rotina de estudos. Nesse tempo livre, eu:',
    galleryBasketball: 'Jogava bastante basquete',
    galleryTrip: 'Fiz uma viagem',
    galleryPhotos: 'Também tiro muitas fotos',
    galleryPhotosMobile: 'Também tiro boas fotos',
  },
  contact: {
    title: 'Entre em Contato',
    description:
      'Estou sempre aberto a discutir novos projetos, desafios criativos ou oportunidades de colaboração. Sinta-se à vontade para entrar em contato da forma que preferir.',
  },
  gallery: {
    title: 'Galeria de Fotos',
    categoryAll: 'Todas',
    categories: {
      Basketball: 'Basquete',
      'Porto Alegre': 'Porto Alegre',
      Nature: 'Natureza',
    },
  },
  works: {
    heading: 'Experiência & Formação',
    description:
      'Minha jornada profissional e formação acadêmica que moldaram minha experiência em tecnologia.',
  },
  skills: {
    heading: 'Minhas Habilidades',
    description: 'Aqui estão algumas das ferramentas e tecnologias com as quais já trabalhei.',
    categories: {
      Frontend: 'Frontend',
      Mobile: 'Mobile',
      Backend: 'Backend',
      'Database & Tools': 'Banco de Dados & Ferramentas',
    },
  },
  featuredProjects: {
    heading: 'Projetos em Destaque',
    description:
      'Uma seleção dos meus trabalhos recentes que demonstram minha experiência em desenvolvimento full-stack e tecnologias modernas.',
    challenge: 'O Desafio',
    solution: 'A Solução',
    code: 'Código',
    liveDemo: 'Demo ao Vivo',
    viewAll: 'Ver Todos os Projetos',
  },
  projectBadge: {
    'in-progress': 'Em Andamento',
    outdated: 'Desatualizado',
    completed: 'Concluído',
  },
  projectsPage: {
    heading: ' Trabalhos Selecionados',
    description:
      'Uma seleção de projetos que demonstram minha paixão por criar soluções digitais, do design à implantação.',
    categoryAll: 'Todos',
  },
  projectCard: {
    challenge: 'O Desafio',
    solution: 'A Solução',
    keyFeatures: 'Principais Funcionalidades',
    technologies: 'Tecnologias',
    seeMore: 'Ver mais detalhes',
    code: 'Código',
    liveDemo: 'Demo ao Vivo',
  },
  projectDetail: {
    back: 'Voltar para Projetos',
    challenge: 'O Desafio',
    solution: 'A Solução',
    keyFeatures: 'Principais Funcionalidades',
    technologies: 'Tecnologias',
    links: 'Links',
    viewSource: 'Ver Código Fonte',
    visitLive: 'Visitar Demo ao Vivo',
  },
  contactGrid: {
    heading: 'Vamos Conversar',
    description:
      'Agora que você chegou até o final, sinta-se à vontade para me enviar um email, me encontrar no LinkedIn, ou conferir o que tenho feito no GitHub.',
    linkedinDesc: 'Minha rede profissional',
    emailDesc: 'Envie-me uma mensagem',
    githubSeeCode: 'Veja meu código',
    githubStatsSeparator: 'repositórios',
    githubFollowers: 'seguidores',
  },
  loaderPhrases: [
    'Ajustando o foco',
    'Afinando as cordas',
    'Empratando o código',
    'Renderizando pixels',
  ],
  galleryLightbox: {
    seeMore: '(ver mais...)',
  },
};

export const translations = { en, pt };
