import { CodeIcon, GithubLogoIcon } from '@phosphor-icons/react';

export const allProjects = [
  {
    category: 'Full-Stack',
    title: 'Horizon • Plataforma de E-commerce',
    tagline:
      'Uma plataforma de e-commerce completa construída para performance e escalabilidade.',
    role: 'Lead Full-Stack Developer',
    year: '2024',
    challenge:
      'O principal desafio era criar uma experiência de compra fluida com gerenciamento de inventário em tempo real, um gateway de pagamento seguro e um painel de administração intuitivo para os gerentes da loja.',
    solution:
      'Desenvolvi uma arquitetura robusta com Next.js no frontend para garantir carregamentos rápidos e SEO, e um backend com Node.js e Prisma para um gerenciamento de dados eficiente. A integração com a API da Stripe garantiu a segurança das transações.',
    features: [
      'Pagamentos seguros com Stripe',
      'Dashboard de administração para produtos',
      'Busca de produtos em tempo real',
      'Design totalmente responsivo',
    ],
    images: [
      'https://picsum.photos/seed/horizon1/1200/675',
      'https://picsum.photos/seed/horizon2/1200/675',
      'https://picsum.photos/seed/horizon3/1200/675',
    ],
    tags: ['Next.js', 'TypeScript', 'Prisma', 'Stripe', 'Tailwind CSS'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    category: 'Frontend',
    title: 'Momentum • App de Produtividade',
    tagline:
      'Uma aplicação colaborativa para gerenciamento de tarefas com atualizações em tempo real.',
    role: 'Frontend Engineer',
    year: '2023',
    challenge:
      'O objetivo era construir uma UI altamente interativa que refletisse as mudanças no banco de dados em tempo real para todos os clientes conectados, utilizando WebSockets e gerenciando um estado complexo da aplicação.',
    solution:
      'Utilizei React com a Context API para um gerenciamento de estado global e Socket.io para a comunicação bidirecional com o servidor. As animações, feitas com Framer Motion, foram cruciais para dar feedback visual instantâneo das ações do usuário.',
    features: [
      'Sincronização de tarefas em tempo real',
      'Sistema de notificação',
      'Interface drag-and-drop para organização',
    ],
    images: [
      'https://picsum.photos/seed/momentum1/1200/675',
      'https://picsum.photos/seed/momentum2/1200/675',
    ],
    tags: ['React', 'Framer Motion', 'MongoDB', 'Socket.io', ' Zustand'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    category: 'Backend',
    title: 'Pulse API • Monitoramento de Sistemas',
    tagline:
      'API robusta para coleta e análise de métricas de performance em tempo real.',
    role: 'Backend Developer',
    year: '2024',
    challenge:
      'Criar uma API altamente performática que coletasse dados de sistemas distribuídos, armazenando e agregando milhões de registros por hora sem comprometer a velocidade das requisições.',
    solution:
      'Implementei a API usando Node.js com Fastify para melhor performance e baixo overhead. Utilizei PostgreSQL com TimescaleDB para armazenamento de séries temporais e Redis para caching de consultas frequentes.',
    features: [
      'Coleta de métricas em tempo real',
      'Agregações otimizadas com TimescaleDB',
      'Sistema de alertas customizável',
      'Documentação com Swagger',
    ],
    images: [
      'https://picsum.photos/seed/pulseapi1/1200/675',
      'https://picsum.photos/seed/pulseapi2/1200/675',
    ],
    tags: ['Node.js', 'Fastify', 'TimescaleDB', 'Redis', 'Swagger'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    category: 'Mobile',
    title: 'FitTrack • App de Bem-Estar e Exercícios',
    tagline:
      'Aplicativo móvel para rastreamento de treinos e metas de saúde com integração com dispositivos wearable.',
    role: 'Mobile Developer',
    year: '2025',
    challenge:
      'Desenvolver uma experiência mobile fluida com sincronização de dados offline, gráficos interativos e integração com APIs de saúde como Google Fit e Apple Health.',
    solution:
      'Utilizei React Native com Expo e Redux Toolkit para gerenciamento de estado. Para gráficos, usei Victory Native. A sincronização offline foi implementada com SQLite local e sincronização periódica com backend em Firebase.',
    features: [
      'Sincronização com Google Fit',
      'Gráficos de progresso interativos',
      'Modo offline com sincronização automática',
      'Notificações personalizadas de treino',
    ],
    images: [
      'https://picsum.photos/seed/fittrack1/1200/675',
      'https://picsum.photos/seed/fittrack2/1200/675',
    ],
    tags: ['React Native', 'Expo', 'Firebase', 'Redux Toolkit', 'Victory'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    category: 'UI/UX Design',
    title: 'NovaBank • Redesign de Plataforma Bancária',
    tagline:
      'Redesign completo da interface de um app bancário, focado em acessibilidade e experiência do usuário.',
    role: 'UI/UX Designer',
    year: '2023',
    challenge:
      'O desafio era repensar a interface de um app bancário legado, tornando-o mais moderno, acessível e intuitivo, mantendo a confiança e a segurança visual esperadas por usuários.',
    solution:
      'Conduzi entrevistas com usuários e testes de usabilidade. Criei um novo design system em Figma, com foco em contraste, legibilidade e navegação por gestos. Também defini animações de microinteração para reforçar feedbacks visuais.',
    features: [
      'Design system completo e reutilizável',
      'Dark mode com acessibilidade AA',
      'Wireframes interativos e prototipagem no Figma',
      'Teste de usabilidade com usuários reais',
    ],
    images: [
      'https://picsum.photos/seed/novabank1/1200/675',
      'https://picsum.photos/seed/novabank2/1200/675',
    ],
    tags: [
      'Figma',
      'Acessibilidade',
      'Design System',
      'Prototipagem',
      'UX Research',
    ],
    github: '',
    live: 'https://example.com',
  },
];

export const otherProjects = [
  {
    title: 'Dotfiles',
    description: 'Minhas configurações de ambiente de desenvolvimento.',
    href: '#',
    icon: <CodeIcon size={24} />,
  },
  {
    title: 'Portfolio v1',
    description: 'A primeira versão do meu portfólio, construído com Vue.js.',
    href: '#',
    icon: <GithubLogoIcon size={24} />,
  },
];
