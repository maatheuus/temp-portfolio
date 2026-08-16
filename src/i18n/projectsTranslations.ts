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
      'O frontend é Next.js 15 com o App Router, TypeScript em todo o projeto, Tailwind CSS v4 para estilização e TanStack Query para estado do servidor. O backend é NestJS com Prisma e PostgreSQL. A autenticação é baseada em JWT com interceptors no cliente Axios, de forma que o gerenciamento de tokens fica invisível para os componentes.\n\nO sistema de receitas suporta busca full-text, filtragem com múltiplos parâmetros, upload de imagens via Cloudinary, um editor de texto rico Tiptap para instruções passo a passo, e reordenação por drag-and-drop com dnd-kit. As receitas passam por um fluxo de revisão antes de serem publicadas.\n\nOs perfis de usuário têm duas seções personalizadas — uma para as receitas publicadas, outra para os favoritos salvos — com textos e estados vazios distintos para dar personalidade à interface em vez de apenas tabelas em branco.\n\nO feed da comunidade suporta três tipos de post (posts, recursos e anúncios), comentários aninhados, curtidas e salvamentos. Ele usa estado de aba mantido em React state em vez de parâmetros de URL, para evitar reexecuções desnecessárias de middleware a cada troca de aba.\n\nO chat de IA roda no Gemini. Cada sessão é isolada, e o histórico da conversa é buscado no banco de dados e enviado de volta ao modelo a cada requisição — o Gemini não tem estado de sessão persistente, então essa reconstrução acontece no servidor. Os limites de tokens são ajustados de acordo com o plano de assinatura.\n\nO Stripe está integrado para gerenciamento de assinaturas: sessões de checkout, o portal do cliente, e um webhook que atualiza o plano do usuário no backend.',
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
    title: 'Transcriber* • Gravador de Reuniões Local-First com Notas de IA',
    tagline:
      'Grave a conversa. Preserve o contexto. Transforme-o em trabalho que sobrevive à próxima reunião.',
    shortChallenge:
      'Decisões importantes ficam enterradas em uma hora de áudio e somem antes da próxima call. Eu queria que o registro útil continuasse pesquisável e sob o controle de quem participou.',
    shortSolution:
      'Um app desktop em Electron, React e TypeScript. Ele grava microfone e áudio do sistema, guarda as reuniões em SQLite local, usa Deepgram para transcrever e Gemini para resumos, itens de ação e perguntas sobre a transcrição.',
    challenge:
      'A reunião termina, a gravação vai para algum lugar e as decisões que importam começam a se perder. Rever tudo toma tempo. Um resumo genérico não basta quando alguém precisa reencontrar uma discussão específica, confirmar um combinado ou transformar aquilo em uma tarefa.\n\nA maior parte das ferramentas resolve isso tornando a gravação e o histórico parte de um serviço de terceiros. Eu queria uma alternativa desktop-first: os arquivos de áudio, a biblioteca de reuniões, a transcrição e o índice de busca ficam na máquina da pessoa. Quando precisa de transcrição ou IA, ela usa as próprias chaves de provedor.',
    solution:
      'O Transcriber* é construído com Electron 39, electron-vite, React 19 e TypeScript. O processo principal do Electron cuida do armazenamento e das integrações; a interface chega a ele por uma ponte de preload tipada, mantendo os recursos de desktop fora do renderer.\n\nO gravador combina a entrada do microfone com o áudio do sistema disponível e preserva um cronômetro contínuo ao pausar e retomar. Um controle flutuante mantém a gravação acessível enquanto a janela principal sai do caminho. Quando a captura termina, o Deepgram Nova-3 gera a transcrição com identificação de interlocutores, pontuação e formatação. Cada segmento é editável, o nome de um interlocutor pode ser corrigido em toda a reunião e uma linha leva o player de áudio direto ao momento correspondente.\n\nO Gemini trabalha a partir da transcrição — não do áudio — para gerar um resumo estruturado, extrair itens de ação marcáveis, responder perguntas sobre a reunião, sugerir título e tags e traduzir sem substituir o texto original. Os itens de ação ficam separados do resumo, então gerar de novo nunca apaga o que já foi concluído.\n\nA biblioteca local usa better-sqlite3 e SQLite FTS5 para deixar cada transcrição pesquisável, junto dos títulos das reuniões. Pastas, tags, fixação, lixeira recuperável e exportação para Markdown, texto simples, SRT, VTT ou JSON mantêm o registro útil depois que a call acaba.',
    features: [
      'Gravação de microfone e áudio do sistema, com pausa, retomada e controle flutuante',
      'Transcrição com Deepgram Nova-3, identificação de interlocutores, formatação e correções inline',
      'Resumos com Gemini, itens de ação marcáveis, perguntas à transcrição, nomeação, tags e tradução',
      'Segmentos editáveis que levam o player ao ponto correspondente do áudio',
      'Busca full-text nas transcrições locais com SQLite FTS5',
      'Pastas, tags, fixação, lixeira recuperável e exportação para Markdown, texto, SRT, VTT ou JSON',
    ],
  },
  'movie-life': {
    title: 'Movie Life • Explore e Favorite Filmes e Séries',
    tagline:
      'Uma plataforma full-stack para organizar seu universo pessoal de filmes e séries.',
    shortChallenge:
      'O TMDB tem ótimos dados, mas nenhuma memória do que você gostou. Eu queria construir a camada pessoal por cima — favoritos, listas para assistir, coisas que você realmente pode organizar.',
    shortSolution:
      'React + Node.js + MongoDB. O React Query cuida da parte assíncrona. A interface fica discreta para que navegar não pareça trabalho.',
    challenge:
      'O TMDB oferece um catálogo sólido, mas nada lembra das suas preferências. Construir a camada pessoal — autenticação, favoritos, listas para assistir — em cima de uma API de terceiros significa que cada pedaço de estado precisa ser intencional. A parte difícil não foi a busca; foi manter o estado local e remoto sincronizados sem que tudo parecesse lento.',
    solution:
      'Frontend em React com backend em Node.js e MongoDB para os dados do usuário. O React Query gerencia busca e cache para manter a interface ágil. Os usuários podem pesquisar títulos, marcar favoritos e organizar uma lista para assistir. A arquitetura mantém a integração com o TMDB limpa e isolada, para que trocá-la ou estendê-la depois não exija mexer no resto do app.',
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
