export const projectsPt: Record<
  string,
  {
    title: string;
    tagline: string;
    shortChallenge: string;
    shortSolution: string;
    challenge: string;
    solution: string;
    features: string[];
  }
> = {
  vegcom: {
    title: 'Vegcom • Plataforma de Receitas Veganas e Vegetarianas',
    tagline:
      'Uma plataforma full-stack que une comunidade, culinária à base de plantas e diversão.',
    shortChallenge:
      'A maioria dos sites de receitas trata a culinária à base de plantas como um nicho. Eu queria construir algo que parecesse feito sob medida para isso — com ferramentas de busca e filtro de verdade, perfis pessoais e um feed de comunidade que não fosse apenas um complemento.',
    shortSolution:
      'Frontend em Next.js 15, backend em NestJS, Prisma + PostgreSQL. O sistema de receitas tem filtros avançados, favoritos e criação de texto rico. Os perfis têm personalidade. Há um chat de IA com Gemini e Stripe integrado para um futuro plano premium.',
    challenge:
      'A maioria das plataformas de receitas não foi realmente construída para veganos — foram construídas para todo mundo, com um filtro vegano colado por cima. Eu queria construir algo em que o produto inteiro assumisse a base vegetal como padrão. Isso significou pensar de verdade em busca e filtragem (tipo de refeição, tempo de preparo, dificuldade), construir perfis que refletissem uma identidade culinária em vez de apenas um nome de usuário, e criar um feed de comunidade onde as pessoas realmente quisessem postar. Além disso, eu queria espaço para crescer: um modelo de assinatura, um assistente de IA, ferramentas de moderação. Fazer tudo isso parecer coerente, em vez de encaixado à força, foi o verdadeiro desafio de design.',
    solution:
      "O frontend é Next.js 15 com o App Router, TypeScript em todo o projeto, Tailwind CSS v4 para estilização e TanStack Query para estado do servidor. O backend é NestJS com Prisma e PostgreSQL. A autenticação é baseada em JWT com interceptors no cliente Axios, de forma que o gerenciamento de tokens fica invisível para os componentes.\n\nO sistema de receitas suporta busca full-text, filtragem com múltiplos parâmetros, upload de imagens via Cloudinary, um editor de texto rico Tiptap para instruções passo a passo, e reordenação por drag-and-drop com dnd-kit. As receitas passam por um fluxo de revisão antes de serem publicadas.\n\nOs perfis de usuário têm duas seções personalizadas — uma para as receitas publicadas, outra para os favoritos salvos — com textos e estados vazios distintos para dar personalidade à interface em vez de apenas tabelas em branco.\n\nO feed da comunidade suporta três tipos de post (posts, recursos e anúncios), comentários aninhados, curtidas e salvamentos. Ele usa estado de aba mantido em React state em vez de parâmetros de URL, para evitar reexecuções desnecessárias de middleware a cada troca de aba.\n\nO chat de IA roda no Gemini. Cada sessão é isolada, e o histórico da conversa é buscado no banco de dados e enviado de volta ao modelo a cada requisição — o Gemini não tem estado de sessão persistente, então essa reconstrução acontece no servidor. Os limites de tokens são ajustados de acordo com o plano de assinatura.\n\nO Stripe está integrado para gerenciamento de assinaturas: sessões de checkout, o portal do cliente, e um webhook que atualiza o plano do usuário no backend.",
    features: [
      'Criação de receitas com texto rico, upload de imagens e reordenação de passos por drag-and-drop',
      'Busca avançada com filtros por tipo de refeição, tempo de preparo, dificuldade e categoria',
      'Perfis de usuário com receitas publicadas e favoritos salvos',
      'Feed de comunidade com posts, comentários aninhados, curtidas e salvamentos',
      'Chat de IA com Gemini e histórico de conversa por sessão',
      'Autenticação JWT com interceptors do Axios',
      'Checkout e gerenciamento de assinaturas com Stripe',
      'Sistema de notificações com contagem de não lidas em polling',
    ],
  },
  'meeting-transcriber': {
    title: 'Meeting Transcriber • Gravador de Reuniões Local-First com Notas de IA',
    tagline:
      'Um app desktop que grava reuniões, transcreve com identificação de quem fala, e transforma a transcrição em algo sobre o qual você pode agir.',
    shortChallenge:
      'As ferramentas de transcrição de reuniões querem seu áudio nos servidores delas. Eu queria o oposto: gravação, armazenamento e busca que nunca saem da sua máquina, com as partes de IA opcionais em vez de obrigatórias.',
    shortSolution:
      'Electron 39 com React 19 e TypeScript. O Deepgram cuida da transcrição com diarização, o Gemini cuida dos resumos e do chat, e todo o resto — reuniões, segmentos, configurações — vive em um banco SQLite local com migrations versionadas e busca full-text.',
    challenge:
      "Todo produto de transcrição de reuniões que analisei é um app web que é dono dos seus dados. O áudio sobe, as transcrições vivem no banco de dados de outra pessoa, e a busca é o que quer que eles tenham decidido construir. Eu queria um app desktop onde a gravação, o banco de dados e o índice de busca ficassem no seu próprio disco, e a única coisa que sai da máquina é o áudio que você explicitamente envia para ser transcrito.\n\nEssa restrição deixou as partes difíceis evidentes. Capturar o áudio do sistema junto com o microfone significa que o outro lado de uma chamada também é transcrito, algo que o navegador não consegue fazer. Armazenar transcrições localmente significa construir uma busca de verdade em vez de depender de um serviço hospedado. E manter o resumo útil entre regenerações significa que os itens de ação não podem viver dentro do texto do resumo, ou marcar um como concluído seria desfeito na próxima vez que o modelo rodasse.",
    solution:
      "O app é Electron 39 com electron-vite, React 19 e TypeScript, estilizado com Tailwind CSS 4 e shadcn/ui. O processo principal é dono do banco de dados e de todas as integrações; o renderer se comunica com ele através de uma ponte de preload tipada, um módulo IPC por domínio.\n\nA gravação mistura a entrada do microfone com o áudio do sistema em uma única faixa, com uma pílula flutuante mostrando o tempo decorrido e opções de pausar, retomar, parar e capturar a tela enquanto a janela principal fica fora do caminho. A transcrição roda no Deepgram (nova-3) quando a gravação termina, com diarização, pontuação e formatação inteligente. O idioma da reunião fixa o modelo acústico; sem um definido, o Deepgram o detecta automaticamente.\n\nAs falas são armazenadas como segmentos com IDs estáveis — o resumo faz referência a eles, então nunca são reatribuídos. Os segmentos são editáveis inline, renomear um interlocutor reescreve todas as falas daquela pessoa, e clicar em uma linha da transcrição avança o player de áudio para aquele momento.\n\nA camada de IA roda no Gemini: resumos guiados por templates de instrução reutilizáveis, itens de ação extraídos como tarefas marcáveis, um chat que responde perguntas com base na transcrição, nomeação e marcação automáticas, e tradução não destrutiva. Os itens de ação ficam em uma tabela própria justamente para que regenerar um resumo nunca desfaça o que você já marcou como concluído.\n\nA persistência é feita com better-sqlite3, com migrations SQL numeradas e SQLite FTS5 para busca — texto completo em cada transcrição, não só nos títulos. Pastas, tags, fixação e uma lixeira com desfazer ficam por cima disso, e uma reunião pode ser exportada para Markdown, texto simples, SRT, VTT ou JSON.",
    features: [
      'Microfone e áudio do sistema capturados juntos, para transcrever os dois lados de uma chamada',
      'Transcrição com Deepgram com diarização de interlocutores e edição inline',
      'Resumos com Gemini, itens de ação extraídos e chat sobre a transcrição',
      'Busca full-text em todas as transcrições, com SQLite FTS5',
      'Pastas, tags, fixação e lixeira com desfazer em vez de exclusão definitiva',
      'Exportação para Markdown, texto simples, SRT, VTT ou JSON',
    ],
  },
  'movie-life': {
    title: 'Movie Life • Explore e Favorite Filmes e Séries',
    tagline: 'Uma plataforma full-stack para organizar seu universo pessoal de filmes e séries.',
    shortChallenge:
      'O TMDB tem ótimos dados, mas nenhuma memória do que você gostou. Eu queria construir a camada pessoal por cima — favoritos, listas para assistir, coisas que você realmente pode organizar.',
    shortSolution:
      'React + Node.js + MongoDB. O React Query cuida da parte assíncrona. A interface fica discreta para que navegar não pareça trabalho.',
    challenge:
      'O TMDB oferece um catálogo sólido, mas nada lembra das suas preferências. Construir a camada pessoal — autenticação, favoritos, listas para assistir — em cima de uma API de terceiros significa que cada pedaço de estado precisa ser intencional. A parte difícil não foi a busca; foi manter o estado local e remoto sincronizados sem que tudo parecesse lento.',
    solution:
      "Frontend em React com backend em Node.js e MongoDB para os dados do usuário. O React Query gerencia busca e cache para manter a interface ágil. Os usuários podem pesquisar títulos, marcar favoritos e organizar uma lista para assistir. A arquitetura mantém a integração com o TMDB limpa e isolada, para que trocá-la ou estendê-la depois não exija mexer no resto do app.",
    features: [
      'Pesquise e explore um grande catálogo de filmes e séries',
      'Favorite e organize conteúdos em uma lista pessoal para assistir',
      'Experiência fluida no client-side com React Query',
      'Design limpo e responsivo',
      'Estrutura modular pensada para futuras extensões',
    ],
  },
  'book-life': {
    title: 'Book Life • Descubra e Salve Suas Leituras Favoritas',
    tagline:
      'Uma plataforma de leitura full-stack que permite explorar, favoritar e organizar livros sem esforço.',
    shortChallenge:
      'A API do Google Books oferece busca. Ela não lembra do que você gostou. Construir autenticação por cima e manter a sincronização de favoritos limpa foi o principal desafio.',
    shortSolution:
      'React, Node.js, MongoDB. Autenticação JWT com rotas protegidas. Tailwind para a interface. React Query para cache. Os favoritos sincronizam com seu perfil sem atrito.',
    challenge:
      'A API do Google Books cuida do catálogo, mas não existe conceito de usuário do outro lado. Encaixar autenticação e fazer os favoritos parecerem nativos — e não como uma funcionalidade colada em um widget de busca — exigiu uma coordenação cuidadosa entre o estado do JWT, o cache do React Query e a camada de API.',
    solution:
      'Frontend em React com uma API em Node.js/Express e MongoDB. A integração com o Google Books fica isolada atrás de uma camada de serviço. A autenticação JWT protege as rotas pessoais. O React Query cuida do cache para que os resultados de busca não desapareçam ao navegar. O Tailwind mantém a interface limpa sem complicar.',
    features: [
      'Busca de livros com a API do Google Books',
      'Autenticação de usuário com JWT e rotas protegidas',
      'Sistema de favoritos sincronizado com o perfil do usuário',
      'Busca e cache de dados otimizados com React Query',
    ],
  },
  'hotel-trillo': {
    title: 'Hotel Trillo • Plataforma de Busca de Hotéis no Brasil',
    tagline:
      'Um app front-end em JavaScript puro para explorar e favoritar hotéis por todo o Brasil.',
    shortChallenge:
      'Eu queria construir um app completo de busca e favoritos sem nenhum framework. JavaScript puro + MVC significa que cada decisão de arquitetura é intencional.',
    shortSolution:
      'HTML, Sass, JavaScript puro. O padrão MVC manteve o código organizado. Paginação, busca de hotéis, favoritos — tudo sem tocar em React ou qualquer biblioteca.',
    challenge:
      'Sem framework não há atalhos. Construir uma interface de busca e favoritos com paginação em JavaScript puro exige pensar você mesmo em estado, tratamento de eventos e atualizações do DOM. O padrão MVC evitou que tudo virasse uma pilha de event listeners, mas foi preciso um planejamento de verdade para acertar a separação.',
    solution:
      'HTML, CSS com Sass e JavaScript puro. O padrão MVC divide a lógica do modelo, a renderização do DOM e a coordenação do controller em camadas distintas. Busca de hotéis, paginação e favoritos funcionam sem uma única dependência. Foi um exercício deliberado para entender o que os frameworks realmente abstraem.',
    features: [
      'Funcionalidade de busca de hotéis com paginação',
      'Sistema de favoritos para hotéis preferidos',
      'Estruturado com o padrão MVC',
      'Construído inteiramente com JavaScript puro, HTML5 e Sass',
    ],
  },
};
