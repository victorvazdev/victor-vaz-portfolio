import aluraViagens from '../assets/projects/aluraviagens.jpg'
import bancoDouro from '../assets/projects/banco-douro.jpg'
import bbQuotes from '../assets/projects/bbquotes.jpg'
import chefDelivery from '../assets/projects/chefdelivery.jpg'
import cinetopia from '../assets/projects/cinetopia.jpg'
import conversorDeMoedas from '../assets/projects/conversordemoedas.jpg'
import dex3 from '../assets/projects/dex3.jpg'
import hpTrivia from '../assets/projects/hptrivia.jpg'
import iQuiz from '../assets/projects/iquiz.jpg'
import jpApexPredators from '../assets/projects/jpapexpredator.jpg'

export type SocialKind = 'github' | 'linkedin' | 'x' | 'youtube' | 'instagram'

export interface Social {
  kind: SocialKind
  label: string
  href: string
}

export const profile = {
  name: 'Victor Vaz',
  fullName: 'Victor Vaz de Oliveira',
  role: 'Engenheiro de Software',
  location: 'Goiás, Brasil',
  email: 'victor@victorvaz.dev',
  phone: '+55 (24) 99876-5245',
  phoneHref: 'https://wa.me/5524998765245',
  resume: '/victor-vaz-curriculo.pdf',
  headline:
    'Desenvolvedor full stack: APIs REST em Node.js e Python, front-ends em Angular e JavaScript puro, apps em Flutter e SwiftUI — e ferramentas de terminal publicadas no Homebrew.',
  about: [
    'Sou bacharel em Sistemas de Informação pela UNA e pós-graduando em Engenharia de Software pela PUC-Rio. Comecei pelo mobile com Flutter e Swift e hoje trabalho de ponta a ponta: do contrato da API ao pixel na tela.',
    'Lidero a equipe de desenvolvimento da Ruraliza, onde aplico arquitetura em camadas, injeção de dependências, Repository Pattern e documentação OpenAPI validada por testes. Gosto de código limpo, arquitetura bem pensada, documentação clara e projetos que rodam fácil — de preferência com um docker run ou um brew install.',
    'Antes da engenharia, liderei equipes de mídia e comunicação, o que me deu prática em organizar pessoas, distribuir tarefas e entregar dentro do prazo.',
  ],
  highlights: [
    { value: 'Líder', label: 'da equipe de desenvolvimento da Ruraliza' },
    { value: 'PUC-Rio', label: 'Pós-graduação em Engenharia de Software' },
    { value: 'Homebrew', label: 'CLI publicada e instalável com brew install' },
  ],
}

export const socials: Social[] = [
  { kind: 'github', label: 'GitHub', href: 'https://github.com/victorvazdev' },
  { kind: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/victorvazdev/' },
  { kind: 'x', label: 'X', href: 'https://x.com/victorvazdev' },
  { kind: 'youtube', label: 'YouTube', href: 'https://www.youtube.com/@victorvazdev' },
  { kind: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/victorvazdev' },
]

export interface SkillGroup {
  title: string
  items: string[]
}

export const skills: SkillGroup[] = [
  {
    title: 'Linguagens',
    items: ['TypeScript', 'JavaScript (ES6+)', 'Python', 'Dart', 'Swift', 'HTML5', 'CSS3', 'Shell (Zsh/Bash)', 'AppleScript', 'Ruby (Homebrew)', 'SQL', 'Java (fundamentos)'],
  },
  {
    title: 'Front-end & Mobile',
    items: ['Angular (Standalone, Signals, SSR)', 'Flutter', 'SwiftUI', 'UIKit', 'MapKit', 'Vanilla JavaScript', 'Fetch API', 'Flexbox & CSS Grid', 'Design responsivo'],
  },
  {
    title: 'Back-end & Dados',
    items: ['Node.js', 'Express 5', 'Flask', 'SQLAlchemy', 'Pydantic', 'Sharp', 'REST APIs', 'OpenAPI / Swagger', 'SQLite', 'Firebase', 'MongoDB'],
  },
  {
    title: 'Arquitetura & Práticas',
    items: ['Arquitetura em camadas', 'MVC', 'Clean Code', 'Injeção de dependências', 'Repository Pattern', 'Design Patterns', 'Contratos de API', 'Testes unitários e smoke tests', 'Programação assíncrona'],
  },
  {
    title: 'Ferramentas & DevOps',
    items: ['Git', 'GitHub Actions (CI/CD)', 'Docker', 'Homebrew', 'Vitest', 'ESLint', 'Prettier', 'Xcode', 'VS Code', 'Azure DevOps', 'AWS (fundamentos)'],
  },
  {
    title: 'Metodologias',
    items: ['Scrum', 'Metodologias ágeis', 'Liderança de equipe', 'Gestão de tarefas', 'Comunicação', 'Resolução de problemas'],
  },
]

export interface Link {
  label: string
  href: string
  kind: 'code' | 'demo' | 'video' | 'site'
}

export interface FeaturedProject {
  id: string
  name: string
  tagline: string
  badge?: string
  role?: string
  points: string[]
  stack: string[]
  links: Link[]
  install?: string[]
}

export const featuredProjects: FeaturedProject[] = [
  {
    id: 'ruraliza',
    name: 'Ruraliza',
    tagline: 'Mão de obra no campo, na hora certa.',
    badge: 'Em desenvolvimento',
    role: 'Líder de equipe',
    points: [
      'Marketplace AgTech que conecta produtores rurais a trabalhadores, prestadores de serviço e estudantes — publicação de vagas, candidatura, contratação e liberação de pagamento em um fluxo único.',
      'Back-end em Node.js/Express 5 com TypeScript strict e arquitetura em camadas (routes → controllers → use cases → domain ← infra), com injeção de dependências e Repository Pattern: trocar a persistência em memória por PostgreSQL mexe só na infraestrutura.',
      'Paridade front ↔ back garantida validando todas as respostas contra o schema OpenAPI, com testes unitários, smoke tests do fluxo HTTP completo e checagem automatizada de contratos de tipos.',
      'Front-end em Angular com Standalone Components, Signals e SSR (landing pré-renderizada), filtros persistidos na URL, layout responsivo e Google Maps para geolocalizar propriedades.',
    ],
    stack: ['Angular', 'TypeScript', 'Node.js', 'Express 5', 'OpenAPI', 'Sharp', 'Vitest', 'GitHub Actions'],
    links: [
      { label: 'Acessar o site', href: 'https://ruraliza.github.io/ruraliza-frontend/', kind: 'site' },
      { label: 'Front-end', href: 'https://github.com/Ruraliza/ruraliza-frontend', kind: 'code' },
      { label: 'Back-end', href: 'https://github.com/Ruraliza/ruraliza-backend', kind: 'code' },
    ],
  },
  {
    id: 'distribuidora-smart',
    name: 'Distribuidora Smart',
    tagline: 'Gestão de estoque full stack, containerizada.',
    points: [
      'API REST de produtos em Flask + SQLAlchemy com validação Pydantic, organizada em models, routes e schemas e documentada com Swagger interativo.',
      'SPA em JavaScript puro integrada à Open Food Facts: o código de barras preenche nome e imagem do produto, respeitando o limite de 15 requisições/minuto.',
      'Front e back em Docker — a aplicação completa roda sem instalar Python ou Node.js.',
    ],
    stack: ['Python', 'Flask', 'SQLAlchemy', 'Pydantic', 'SQLite', 'JavaScript', 'Docker'],
    links: [
      { label: 'Back-end', href: 'https://github.com/victorvazdev/distribuidora-smart-backend', kind: 'code' },
      { label: 'Front-end', href: 'https://github.com/victorvazdev/distribuidora-smart-frontend', kind: 'code' },
    ],
  },
  {
    id: 'ttsync',
    name: 'ttsync',
    tagline: 'Terminal.app no tema certo, sozinho.',
    badge: 'Homebrew',
    points: [
      'CLI que sincroniza o perfil do Terminal.app com o modo claro/escuro do macOS, publicada no meu tap do Homebrew.',
      'Detecção de aparência via hook do Zsh e osascript, sem dependências externas e restrita ao Terminal nativo — não interfere em VS Code, Xcode, Cursor ou iTerm2.',
    ],
    stack: ['Zsh', 'AppleScript', 'Ruby (Homebrew)'],
    links: [
      { label: 'Código', href: 'https://github.com/victorvazdev/terminal-theme-sync', kind: 'code' },
      { label: 'Tap', href: 'https://github.com/victorvazdev/homebrew-brews', kind: 'code' },
    ],
    install: ['brew tap victorvazdev/brews', 'brew trust victorvazdev/brews', 'brew install ttsync'],
  },
]

export type ProjectCategory = 'fullstack' | 'web' | 'flutter' | 'ios' | 'dart' | 'produto'

export const projectCategories: { id: ProjectCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'Todos' },
  { id: 'fullstack', label: 'Full stack' },
  { id: 'web', label: 'Web' },
  { id: 'flutter', label: 'Flutter' },
  { id: 'ios', label: 'iOS' },
  { id: 'dart', label: 'Dart' },
  { id: 'produto', label: 'Produto & Ágil' },
]

export interface Project {
  name: string
  description: string
  category: ProjectCategory
  stack: string[]
  image?: string
  links: Link[]
}

const gh = (repo: string) => `https://github.com/victorvazdev/${repo}`

export const projects: Project[] = [
  {
    name: 'Digilibra',
    description: 'API REST para o acervo de uma biblioteca — livros e autores com modelagem relacional, validação Pydantic e OpenAPI — consumida por um front-end próprio em JavaScript puro.',
    category: 'fullstack',
    stack: ['Python', 'Flask', 'SQLAlchemy', 'OpenAPI', 'JavaScript'],
    links: [
      { label: 'API', href: gh('digilibra_api'), kind: 'code' },
      { label: 'Front-end', href: gh('digilibra-front'), kind: 'code' },
    ],
  },
  {
    name: 'Banco d’Ouro',
    description: 'Simulador bancário: visualize contas, cadastre novas e faça transações, com persistência remota via GitHub Gists API e consumo assíncrono de serviços REST.',
    category: 'flutter',
    stack: ['Flutter', 'Dart', 'REST'],
    image: bancoDouro,
    links: [
      { label: 'Demo', href: 'https://banco-d-ouro.web.app/', kind: 'demo' },
      { label: 'Vídeo', href: 'https://youtube.com/shorts/nVIehQ3PgR0', kind: 'video' },
      { label: 'Código', href: gh('flutter_banco_douro'), kind: 'code' },
    ],
  },
  {
    name: 'Cinetopia',
    description: 'Explore os filmes mais populares, lançamentos recentes e faça buscas personalizadas consumindo uma API REST de filmes.',
    category: 'flutter',
    stack: ['Flutter', 'Dart', 'REST'],
    image: cinetopia,
    links: [
      { label: 'Demo', href: 'https://cinetopia-19660.web.app/', kind: 'demo' },
      { label: 'Vídeo', href: 'https://youtube.com/shorts/4wSzNC_XFLQ', kind: 'video' },
      { label: 'Código', href: gh('flutter_cinetopia'), kind: 'code' },
    ],
  },
  {
    name: 'Dex3',
    description: 'Pokédex que captura e processa um grande volume de dados da PokéAPI, com listagem, busca e detalhes de cada Pokémon.',
    category: 'ios',
    stack: ['Swift', 'SwiftUI', 'REST'],
    image: dex3,
    links: [
      { label: 'Vídeo', href: 'https://youtu.be/EwN0EmSkYT8', kind: 'video' },
      { label: 'Código', href: gh('Dex3'), kind: 'code' },
    ],
  },
  {
    name: 'JPApexPredators',
    description: 'Catálogo de dinossauros a partir de JSON local, com filtros por tipo, ordenação alfabética e localização de cada espécie no Apple Maps.',
    category: 'ios',
    stack: ['Swift', 'SwiftUI', 'MapKit'],
    image: jpApexPredators,
    links: [
      { label: 'Vídeo', href: 'https://youtube.com/shorts/lCa0uYM_TN4', kind: 'video' },
      { label: 'Código', href: gh('JPApexPredators'), kind: 'code' },
    ],
  },
  {
    name: 'HpTrivia',
    description: 'Quiz sobre o universo de Harry Potter: o jogador escolhe os livros que geram as perguntas, com três gratuitos e quatro desbloqueáveis.',
    category: 'ios',
    stack: ['Swift', 'SwiftUI'],
    image: hpTrivia,
    links: [
      { label: 'Vídeo', href: 'https://youtu.be/1cCxlNfNaws', kind: 'video' },
      { label: 'Código', href: gh('HpTrivia'), kind: 'code' },
    ],
  },
  {
    name: 'BBQuotes',
    description: 'Consome uma API de personagens e citações de Breaking Bad, Better Call Saul e El Camino.',
    category: 'ios',
    stack: ['Swift', 'SwiftUI', 'REST'],
    image: bbQuotes,
    links: [
      { label: 'Vídeo', href: 'https://youtube.com/shorts/sJ06nJkHuLY', kind: 'video' },
      { label: 'Código', href: gh('BBQuotes'), kind: 'code' },
    ],
  },
  {
    name: 'Conversor de Moedas',
    description: 'Converte valores entre moedas de cobre, prata e ouro — exercício de estado e componentes em SwiftUI.',
    category: 'ios',
    stack: ['Swift', 'SwiftUI'],
    image: conversorDeMoedas,
    links: [
      { label: 'Vídeo', href: 'https://youtube.com/shorts/rnJO_UyZWVE', kind: 'video' },
      { label: 'Código', href: gh('ConversorDeMoedas'), kind: 'code' },
    ],
  },
  {
    name: 'iQuiz',
    description: 'Quiz sobre o universo geek construído com UIKit e Storyboard.',
    category: 'ios',
    stack: ['Swift', 'UIKit'],
    image: iQuiz,
    links: [
      { label: 'Vídeo', href: 'https://youtube.com/shorts/sxIKoSYBfTM', kind: 'video' },
      { label: 'Código', href: gh('iQuiz'), kind: 'code' },
    ],
  },
  {
    name: 'Alura Viagens',
    description: 'Tela inicial de um app de planejamento de viagens com Auto Layout e constraints, otimizada para iPhone e iPad.',
    category: 'ios',
    stack: ['Swift', 'UIKit', 'Auto Layout'],
    image: aluraViagens,
    links: [
      { label: 'Vídeo', href: 'https://youtube.com/shorts/GsNL2JSm3Do', kind: 'video' },
      { label: 'Código', href: gh('AluraViagens'), kind: 'code' },
    ],
  },
  {
    name: 'ChefDelivery',
    description: 'Tela inicial de um app de delivery de comida, componentizada em SwiftUI.',
    category: 'ios',
    stack: ['Swift', 'SwiftUI'],
    image: chefDelivery,
    links: [
      { label: 'Vídeo', href: 'https://youtube.com/shorts/LWMer3tEzlU', kind: 'video' },
      { label: 'Código', href: gh('ChefDelivery'), kind: 'code' },
    ],
  },
  {
    name: 'e-greja',
    description: 'Web app para igrejas construído com Angular e Firebase.',
    category: 'web',
    stack: ['Angular', 'TypeScript', 'Firebase'],
    links: [{ label: 'Código', href: gh('e-greja'), kind: 'code' }],
  },
  {
    name: 'Instalike (back-end)',
    description: 'Back-end de uma rede social no estilo Instagram, com upload de imagens.',
    category: 'web',
    stack: ['Node.js', 'Express', 'MongoDB'],
    links: [{ label: 'Código', href: gh('curso-nodejs-instalike-back'), kind: 'code' }],
  },
  {
    name: 'Website pessoal (Angular)',
    description: 'Versão anterior do meu site pessoal, feita em Angular.',
    category: 'web',
    stack: ['Angular', 'HTML', 'CSS'],
    links: [
      { label: 'Código', href: gh('victor-vaz-website'), kind: 'code' },
    ],
  },
  {
    name: 'Bandeira do Brasil',
    description: 'A bandeira do Brasil desenhada só com HTML e CSS.',
    category: 'web',
    stack: ['HTML', 'CSS'],
    links: [{ label: 'Código', href: gh('bandeira-do-brasil'), kind: 'code' }],
  },
  {
    name: 'Portfólio em Flutter Web',
    description: 'A versão anterior deste portfólio, com dados servidos por Cloud Functions a partir de um Gist.',
    category: 'flutter',
    stack: ['Flutter Web', 'Dart', 'Firebase'],
    links: [{ label: 'Código', href: gh('victor_vaz_portfolio'), kind: 'code' }],
  },
  {
    name: 'Banco d’Ouro (CLI)',
    description: 'Simulador bancário de linha de comando com programação assíncrona, persistência via GitHub Gists e eventos em tempo real com StreamController.',
    category: 'dart',
    stack: ['Dart', 'Streams', 'REST'],
    links: [{ label: 'Código', href: gh('dart_banco_douro'), kind: 'code' }],
  },
  {
    name: 'AnyBank',
    description: 'Múltiplos tipos de conta bancária com comportamentos distintos, explorando herança, polimorfismo, mixins e encapsulamento.',
    category: 'dart',
    stack: ['Dart', 'POO'],
    links: [{ label: 'Código', href: gh('anybank'), kind: 'code' }],
  },
  {
    name: 'Dart Task Manager',
    description: 'Gerenciador de tarefas em memória com CRUD completo e StreamController registrando cada ação.',
    category: 'dart',
    stack: ['Dart', 'Streams'],
    links: [{ label: 'Código', href: gh('dart_task_manager'), kind: 'code' }],
  },
  {
    name: 'Mega Correio',
    description: 'Provedor de e-mail pensado para o público brasileiro: wireframes do app, Canvas MVP, Product Backlog e Sprint 1 no Jira.',
    category: 'produto',
    stack: ['Scrum', 'Wireframes', 'Jira', 'Miro'],
    links: [
      { label: 'Vídeo', href: 'https://youtu.be/oRvvJ40JJlc', kind: 'video' },
      { label: 'Repositório', href: gh('mega-correio-sgapp'), kind: 'code' },
    ],
  },
]

export interface Experience {
  role: string
  org: string
  period: string
  points: string[]
}

export const experiences: Experience[] = [
  {
    role: 'Líder da Equipe de Comunicação',
    org: 'Lagoinha Buritis',
    period: 'mar 2023 — out 2023',
    points: [
      'Coordenei a equipe de captação de imagens e vídeos em eventos, gestão de redes sociais e transmissões ao vivo no YouTube, distribuindo tarefas e garantindo entregas dentro do cronograma de cada evento.',
    ],
  },
  {
    role: 'Líder da Equipe de Mídia',
    org: 'Luz do Mundo Church',
    period: 'nov 2021 — fev 2023',
    points: [
      'Desenvolvi e mantive o website institucional, centralizando informações e fortalecendo a presença digital da organização.',
      'Distribuí e acompanhei tarefas da equipe e gerenciei o canal no YouTube e as redes sociais, com produção de conteúdo estratégico.',
    ],
  },
]

export interface Education {
  course: string
  school: string
  period: string
}

export const education: Education[] = [
  { course: 'Pós-graduação Lato Sensu em Engenharia de Software', school: 'PUC-Rio (CCEC)', period: 'fev 2026 — em andamento' },
  { course: 'Bacharelado em Sistemas de Informação', school: 'Centro Universitário UNA', period: 'fev 2022 — dez 2025' },
]

export interface Certificate {
  name: string
  issuer: string
  url: string
}

const drive = (id: string) => `https://drive.google.com/file/d/${id}/view`

export const keyCertificates: Certificate[] = [
  { name: 'Scrum Fundamentals Certified (SFC™)', issuer: 'SCRUMstudy', url: drive('1b6rXO8nL5VXWyu4VQuXvD2GFmXhUi5Zk') },
  { name: 'AWS Cloud Practitioner Essentials', issuer: 'AWS', url: drive('15n8Yvlm6X_RQkbOzFMmzbDteB6ACOQgZ') },
  { name: 'Get Started with Azure DevOps', issuer: 'Microsoft', url: drive('1Xorm4Imc7RwHodIC6hSPd9zz0N_DHryb') },
  { name: 'EF Level 9 — Intermediate (CEFR B1)', issuer: 'EF English Live', url: drive('1ck361DcC5klmdGnrX5U_PGOtHelVNuE2') },
]

export const certificateGroups: { title: string; items: Certificate[] }[] = [
  {
    title: 'Flutter & Dart',
    items: [
      { name: 'Flutter: Arquitetura e Navegação', issuer: 'Alura', url: drive('10CvRMRhqmRn2P9BfrWVem6nryrPQFHHX') },
      { name: 'Flutter: melhore a qualidade do app com design patterns', issuer: 'Alura', url: drive('1d4ibQO4D9dch9ysasOBH87kYmDO9rPef') },
      { name: 'Flutter: introdução ao desenvolvimento de aplicativos móveis', issuer: 'Alura', url: drive('15syGEV3WPg7JwreDaQZTKpklZj6pbrwd') },
      { name: 'Do Dart ao Flutter: criando seu primeiro aplicativo', issuer: 'Alura', url: drive('1IBnZocOahOegtpRnaN5Or_p4dEfYCeIs') },
      { name: 'Formação Dart', issuer: 'Alura', url: drive('1GSgp8LWnb-7dKh27TVo-vO7Uk6coy_1Y') },
      { name: 'Dart: dominando assincronismo e comunicação com APIs', issuer: 'Alura', url: drive('10tMDwVeSiJT3Bma8NmlD5XQ3BGBpbxpQ') },
      { name: 'Dart: trabalhando com orientação a objetos', issuer: 'Alura', url: drive('1SbcqWhXFVydVnhULqLS4GgnVWRL0j1vW') },
      { name: 'Dart: lidando com erros, exceções e null safety', issuer: 'Alura', url: drive('1CjtHpy8PIeO5CiDFHV9OF42gh8ALiYdh') },
      { name: 'Praticando Collections no Dart: listas, sets e mapas', issuer: 'Alura', url: drive('1YRw3MO5sC2zZ9PL68Z1p1SKZ78W14ubB') },
      { name: 'Dart: sintaxe e configuração de projeto', issuer: 'Alura', url: drive('14lJeTjCK59xtBhGo-UIUFoRddXiT0yFr') },
    ],
  },
  {
    title: 'iOS & Swift',
    items: [
      { name: 'iOS 18, SwiftUI 6 & Swift 6: Build iOS Apps From Scratch', issuer: 'Udemy', url: drive('16AW0hbz0FJY9g9pwzPsJ1cqf13VmuSRr') },
      { name: 'Formação: Domine a linguagem Swift', issuer: 'Alura', url: drive('1dB1LYxD_tVIGjcrjtH7-kxFObgX2qjJ3') },
      { name: 'iOS com SwiftUI: construindo componentes e layouts', issuer: 'Alura', url: drive('1vPy8_TWAFx6k3ZO6OELAfCYI1H1K2uhJ') },
      { name: 'iOS com UIKit: fundamentos de view code', issuer: 'Alura', url: drive('1PQZoy5bZrGpK1GJdf_2cXz_DQwHFn0Ag') },
      { name: 'iOS: auto layout com constraints', issuer: 'Alura', url: drive('1Jg9ZkloroTC3imxAD5JNs30HAn079LMQ') },
      { name: 'iOS: construindo seu primeiro aplicativo', issuer: 'Alura', url: drive('1mCyKI3Vu3Tc8YulQWuNDzAHyBnRDN_tk') },
      { name: 'Swift: entendendo e praticando orientação a objetos', issuer: 'Alura', url: drive('1eu9BApu0OqXwezUlXfojs7Fe84kEM-es') },
      { name: 'Swift: entendendo a linguagem', issuer: 'Alura', url: drive('1kpKWovfbprV5kr0jDIUZYyPm9Cugyrq_') },
    ],
  },
  {
    title: 'Back-end & Full Stack',
    items: [
      { name: 'Desenvolvimento Full Stack Básico', issuer: 'PUC-Rio (CCEC)', url: drive('1Ma77w_lKGpBa4fgbsSvj5unrBLx5fdXg') },
      { name: 'Flask: APIs e aplicações web com MongoDB', issuer: 'Alura', url: drive('1ZUPRb4viupfAH74L-yv06hMPGB2cKsmo') },
      { name: 'Imersão Dev Back-End', issuer: 'Alura', url: drive('17EBlTWHwZimF8wKavIhYMJE1GukFJ-0d') },
      { name: 'Java: aplicando a orientação a objetos', issuer: 'Alura', url: drive('1HTzMHQJ9sEx627EUe9NCxFWKF2jk6aFs') },
      { name: 'Java: criando a sua primeira aplicação', issuer: 'Alura', url: drive('1ufgeduRh5hEoRjk6xVcc_EH70OA4He81') },
      { name: 'Java Foundations', issuer: 'Oracle', url: drive('1JqPJsIqAmXiIWtt331DpWXk7Z0hrgHJ4') },
      { name: 'Database Foundations', issuer: 'Oracle', url: drive('1ZytH5_wQt7KJpKwDycbC0kWooGS9Bweh') },
      { name: 'Lógica de programação com JavaScript', issuer: 'Alura', url: drive('1ZrOco0YPDa_3vYLHG_7a9-lDbAwom7Yj') },
      { name: 'Pensamento computacional', issuer: 'Alura', url: drive('1VDYC_MkXfBjVb65OS_WyU7eEpvzkkj2_') },
    ],
  },
  {
    title: 'Engenharia & Gestão',
    items: [
      { name: 'Arquiteturas Empresariais', issuer: 'Ânima Educação', url: drive('1ciYMo_GRlBKbwjAy_q4XIZdOOpRELVxL') },
      { name: 'Gestão e Qualidade de Software', issuer: 'Ânima Educação', url: drive('1zwg374hWkoBfkmRCNULwTtSacAuP6JxX') },
      { name: 'Governança e Serviços de TI', issuer: 'Ânima Educação', url: drive('1l6sUfHR82jGiB26iNoPIQgvBVUP3wpq8') },
      { name: 'Análise de Dados e Big Data', issuer: 'Ânima Educação', url: drive('1azMyLV_cO7xi8efcjX97YnhRZEfR9Y_h') },
      { name: 'Introdução à Análise de Dados com Python', issuer: 'Ânima Educação', url: drive('1hrKLPu2kjKZ68Eho_9dDv9Nkaw3ePqWy') },
      { name: 'Inteligência Artificial', issuer: 'Ânima Educação', url: drive('1LhzMBFC9kZ28wcQIRcOKe5tPcGT8zzop') },
      { name: 'Inteligência Artificial em Saúde', issuer: 'Ânima Educação', url: drive('1daK3_iXOlvW4bqsP9wEF7X4jS6_nxv6T') },
      { name: 'Oficina de Gestão do Tempo', issuer: 'Ânima Educação', url: drive('1DvVOVc9X9QBorFVZ4Um_QHskBJ4zYkB_') },
      { name: 'Líder Discente — Legal Lab Milton Campos', issuer: 'Ânima Educação', url: drive('1R5YHp3M653D7sYutkGnRq-22SJ5E6N2Z') },
    ],
  },
]

/** Endpoint da Cloud Function (Firebase) que já atendia o formulário do portfólio antigo. */
export const contactEndpoint = 'https://api-cjay4kdwqq-uc.a.run.app/send-email'
