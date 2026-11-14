// All portfolio content lives here. Edit this file to change the site text, links and assets.
// Paths without a leading slash (e.g. 'images/x.webp') are resolved against <base href>,
// so they keep working under the GitHub Pages sub-path /portfolio/.

export interface Link { label: string; url: string; }
export interface Metric { value: string; label: string; }
export interface Highlight { title: string; text: string; icon: IconName; }
export interface SkillGroup { title: string; icon: IconName; blurb: string; items: Tech[]; }
export interface Tech { name: string; logo?: string; } // logo = file name in public/icons (without .svg)
export interface Award { title: string; date: string; reason: string; org: string; }
export interface Resume { title: string; focus: string; file: string | null; sizeLabel?: string; points: string[]; }

export type IconName =
  | 'github' | 'linkedin' | 'mail' | 'pin' | 'download' | 'arrow-right' | 'arrow-up-right' | 'sun' | 'moon'
  | 'menu' | 'close' | 'layers' | 'server' | 'database' | 'flask' | 'tool' | 'sparkles' | 'shield'
  | 'workflow' | 'users' | 'code' | 'trophy' | 'award' | 'star' | 'file' | 'copy' | 'check' | 'bank'
  | 'grad' | 'eye' | 'plug' | 'rocket' | 'chart' | 'arrow-up' | 'zap';

export const PROFILE = {
  name: 'Shashidhara S',
  firstName: 'Shashidhara',
  title: 'Full Stack Angular Developer',
  company: 'Muraai Information Technology',
  location: 'Bengaluru, India',
  email: 'sshashidhar709@gmail.com',
  linkedin: 'https://www.linkedin.com/in/shashidhara709',
  github: 'https://github.com/shashidhar74',
  // Your photo. Replace the files in public/images to change it.
  photo: { src: 'images/profile-400.webp', srcset: 'images/profile-400.webp 400w, images/profile-800.webp 800w', fallback: 'images/profile-800.jpg' },
  headline: 'Building scalable enterprise applications with Angular & full stack technologies.',
  intro:
    'Hi, I’m Shashidhara — a Full Stack Angular Developer with 3+ years of experience building enterprise applications, banking workflows and business solutions. I specialize in Angular, TypeScript and modern frontend architecture, with hands-on backend experience using Node.js, NestJS, GraphQL and SQL. I also explore AI-powered applications through my personal project, WordNest.',
  heroStack: [
    { name: 'Angular 21', logo: 'angular' }, { name: 'Signals' }, { name: 'TypeScript', logo: 'typescript' },
    { name: 'Node.js', logo: 'nodedotjs' }, { name: 'NestJS', logo: 'nestjs' }, { name: 'GraphQL', logo: 'graphql' },
  ] as Tech[],
};

/**
 * Availability badge in the hero. Set `show: false` to hide it, or change the label.
 * Keep it truthful: it says you are open to roles, not that you can start immediately.
 */
export const AVAILABILITY = {
  show: true,
  label: 'Open to Angular & Full Stack roles',
};

export const NAV = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
] as const;

export const ABOUT = {
  lead:
    'I’m an Angular developer who enjoys turning complicated business processes into interfaces people can actually work with — approval chains, credit workflows, invoice pipelines and the dashboards around them.',
  body: [
    'For the past 3+ years at Muraai Information Technology I’ve built enterprise applications for banking and invoice management clients: multi-stage approval workflows, role-based screens, ERP integrations and the reusable Angular architecture that holds them together.',
    'I work across the stack. Alongside the Angular front end I build NestJS and GraphQL modules with Prisma and SQL, and on my own time I built WordNest — a full-stack blog with an AI assistant powered by an intent model I trained myself.',
  ],
  highlights: [
    { icon: 'layers', title: 'Enterprise Angular', text: 'Angular 21, Signals, RxJS and reusable component architecture for large, multi-module apps.' },
    { icon: 'server', title: 'Hands-on backend', text: 'Node.js, NestJS, GraphQL and Prisma with PostgreSQL and MS SQL Server.' },
    { icon: 'bank', title: 'Banking & workflows', text: 'Credit approval pipelines, invoice automation, RBAC and audit trails.' },
    { icon: 'sparkles', title: 'AI-powered apps', text: 'Exploring AI features through WordNest: intent classification, Gemini and an AI chat assistant.' },
    { icon: 'code', title: 'Maintainable code', text: 'Typed, reusable and testable code, reviewed through PR workflows.' },
    { icon: 'users', title: 'Team player', text: 'Mentored two batches of new joiners on Angular architecture and API integration.' },
  ] as Highlight[],
};

export const EXPERIENCE = {
  company: 'Muraai Information Technology Pvt. Ltd.',
  location: 'Bengaluru',
  role: 'Consultant – Angular & Full Stack Development',
  period: 'May 2023 – Present',
  summary:
    'Building enterprise approval, credit and invoice-management applications for banking and enterprise clients, across the Angular front end and the NestJS / GraphQL back end.',
  metrics: [
    { value: '15+', label: 'Angular modules developed' },
    { value: '20+', label: 'REST / SOAP & ERP endpoints integrated' },
    { value: '4', label: 'enterprise client rollouts supported' },
    { value: '4+', label: 'go-live deployments' },
  ] as Metric[],
  groups: [
    {
      icon: 'layers', title: 'Frontend architecture',
      points: [
        'Developed and contributed to 15+ Angular modules for large enterprise workflow applications.',
        'Built reusable Angular components and Signals-based state management for multi-step forms.',
      ],
    },
    {
      icon: 'workflow', title: 'Workflows & access control',
      points: [
        'Developed enterprise multi-level approval workflows driven by API state transitions.',
        'Implemented role-based access control that renders the UI from API-supplied permissions.',
      ],
    },
    {
      icon: 'plug', title: 'Integration & backend',
      points: [
        'Integrated 20+ REST / SOAP backend and ERP endpoints through a centralized service layer.',
        'Worked with NestJS and GraphQL API modules for SIMS-OS.',
      ],
    },
    {
      icon: 'rocket', title: 'Quality & delivery',
      points: [
        'Supported four enterprise client rollouts and contributed to multiple go-live deployments.',
        'Contributed to automated testing and GitHub Actions workflows; mentored new joiners.',
      ],
    },
  ] as { icon: IconName; title: string; points: string[] }[],
  projects: ['DCR', 'SIMS-OS', 'SIMS'],
};

/* -------------------- Personal project -------------------- */
// Content preserved from the existing portfolio and the WordNest README.
export const WORDNEST = {
  name: 'WordNest',
  tagline: 'A full-stack blog with a publishing workflow, threaded comments and an AI assistant.',
  summary:
    'Creators write posts, admins review them and readers comment — with an AI assistant that understands what you ask for. I built every layer, from the Angular UI to the model behind the assistant.',
  liveUrl: 'https://wordnest-f2mv.onrender.com',
  apiDocsUrl: 'https://wordnest-api-16oz.onrender.com/docs',
  // The repository is private, so the GitHub button stays hidden until `repoPublic` is true.
  repoUrl: 'https://github.com/shashidhar74/wordnest',
  repoPublic: false,
  hostingNote: 'Hosted on Render’s free plan — the first visit after a quiet spell can take 30–60 s to wake up.',
  // Add a real screenshot at public/images/wordnest.webp and set this to 'images/wordnest.webp'.
  screenshot: null as string | null,
  stack: [
    { name: 'Angular', logo: 'angular' }, { name: 'Tailwind CSS', logo: 'tailwindcss' },
    { name: 'Node.js', logo: 'nodedotjs' }, { name: 'Express 5', logo: 'express' },
    { name: 'PostgreSQL', logo: 'postgresql' }, { name: 'FastAPI', logo: 'fastapi' },
    { name: 'scikit-learn', logo: 'scikitlearn' }, { name: 'Gemini API', logo: 'googlegemini' },
  ] as Tech[],
  aiIntro:
    'Every chat message first goes through an intent classifier I trained myself. It decides what you’re asking for, and the assistant runs the matching action.',
  aiStats: [
    { value: '87%', label: 'test accuracy' },
    { value: '7', label: 'intents' },
    { value: '419', label: 'labelled examples' },
  ] as Metric[],
  aiActions: ['Find posts', 'Summarize a post', 'Open the editor with a topic', 'Status-wise reports', 'Explain a rejection', 'Export posts as CSV'],
  aiHow:
    'I wrote and labelled the dataset, trained a TF-IDF + logistic regression model with scikit-learn and serve it with FastAPI. The Gemini API handles the language side: “Summarize with AI” on posts and “Write with AI”, which drafts a post from a topic, tone and keywords.',
  features: [
    { title: 'Publishing workflow', text: 'Draft → submit → pending → approve, reject or send back for clarification → published → closed.' },
    { title: 'Roles & visibility', text: 'Users read, creators write, admins review. Visibility rules are enforced in SQL.' },
    { title: 'Threaded comments', text: 'Comments and replies two levels deep, with edit and soft delete that keeps replies.' },
    { title: 'Posts', text: 'Create and edit posts with an image, plus search and paging.' },
  ],
  contribution: [
    'Angular front end with Signals, Tailwind CSS and the chat panel',
    'Express 5 REST API with JWT auth, roles, validation and Swagger docs',
    'PostgreSQL schema and raw SQL queries (Neon in production)',
    'Python intent model + FastAPI service, deployed as 3 services on Render',
  ],
};

/* -------------------- Professional projects -------------------- */
export const SIMS_OS = {
  name: 'SIMS-OS',
  subtitle: 'Enterprise Invoice Management Platform',
  period: 'Feb 2026 – Present',
  summary:
    'Re-engineering the SIMS application, originally built on the OpenText platform, into an open-source full-stack platform made of multiple connected enterprise applications.',
  apps: ['Admin', 'Invoice Processing', 'OCC', 'Emails', 'Tenants', 'Licenses', 'DOA'],
  features: [
    { title: 'Connected applications', text: 'Multiple enterprise apps sharing one platform, auth and permission model.' },
    { title: 'Database-driven RBAC', text: 'Tabs, forms and buttons resolved per role as read-write, read-only or no-access.' },
    { title: 'Dynamic JSON forms', text: 'JSON-driven form definitions rendered at runtime using MNL.' },
    { title: 'NestJS GraphQL modules', text: 'Controller / resolver, service and data-access layers with DTO validation.' },
    { title: 'Prisma data access', text: 'Prisma-managed SQL schemas and queries behind the API.' },
    { title: 'API contracts', text: 'Front-end / back-end contract collaboration within a shared Git CI and PR workflow.' },
  ],
  stack: [
    { name: 'Angular', logo: 'angular' }, { name: 'TypeScript', logo: 'typescript' }, { name: 'Node.js', logo: 'nodedotjs' },
    { name: 'NestJS', logo: 'nestjs' }, { name: 'GraphQL', logo: 'graphql' }, { name: 'Prisma', logo: 'prisma' }, { name: 'SQL' },
  ] as Tech[],
};

export const DCR = {
  name: 'Domestic Credit Requests',
  short: 'DCR',
  domain: 'Banking · Corporate credit workflow',
  period: 'Jan 2026 – Present',
  summary:
    'A multi-module Angular application for corporate credit requests, taking each request through a four-stage approval pipeline on web and mobile.',
  stages: ['Initiation', 'Review', 'Decision', 'Implementation'],
  features: [
    'Four-stage credit approval workflow',
    'Enterprise worklist and dashboard modules',
    'Role-based actions per user persona',
    'Server-side pagination on large data grids',
    'Approval tracking and audit history',
    'Comments, attachments and version management (Clone, Save as Version, Submit)',
  ],
  stack: [
    { name: 'Angular 21', logo: 'angular' }, { name: 'TypeScript', logo: 'typescript' }, { name: 'Signals' },
    { name: 'RxJS', logo: 'reactivex' }, { name: 'NgRx', logo: 'ngrx' }, { name: 'Angular Material' },
    { name: 'Formly' }, { name: 'AG-Grid' }, { name: 'REST / SOAP' },
  ] as Tech[],
};

export const SIMS = {
  name: 'Supplier Invoice Management System',
  short: 'SIMS',
  domain: 'Enterprise · Invoice approval automation',
  period: 'Sep 2023 – Jan 2026',
  summary:
    'An enterprise approval-automation platform for supplier invoices, rolled out to four enterprise clients and integrated with their ERP systems.',
  chain: ['Invoice', 'L1 approval', 'L2 approval', 'ERP posting'],
  features: [
    'Invoice approval automation',
    'Multi-level approval chains',
    'Master-data CRUD screens for business teams',
    'ERP integrations, including SAP',
    'Highcharts dashboards with dynamic filtering',
    'Four enterprise client rollouts',
  ],
  stack: [
    { name: 'Angular', logo: 'angular' }, { name: 'TypeScript', logo: 'typescript' }, { name: 'AG-Grid' },
    { name: 'Tailwind CSS', logo: 'tailwindcss' }, { name: 'Highcharts' }, { name: 'REST / SOAP' }, { name: 'SAP ERP' },
  ] as Tech[],
};

/* -------------------- Skills -------------------- */
export const SKILLS: SkillGroup[] = [
  {
    title: 'Frontend', icon: 'layers', blurb: 'Where I spend most of my time.',
    items: [
      { name: 'Angular', logo: 'angular' }, { name: 'TypeScript', logo: 'typescript' }, { name: 'JavaScript', logo: 'javascript' },
      { name: 'Signals' }, { name: 'RxJS', logo: 'reactivex' }, { name: 'NgRx', logo: 'ngrx' }, { name: 'Angular Material' },
      { name: 'AG-Grid' }, { name: 'Tailwind CSS', logo: 'tailwindcss' }, { name: 'HTML5', logo: 'html5' }, { name: 'CSS3', logo: 'css3' },
    ],
  },
  {
    title: 'Backend', icon: 'server', blurb: 'APIs and services behind the UI.',
    items: [
      { name: 'Node.js', logo: 'nodedotjs' }, { name: 'NestJS', logo: 'nestjs' }, { name: 'GraphQL', logo: 'graphql' },
      { name: 'Prisma ORM', logo: 'prisma' }, { name: 'REST APIs' }, { name: 'SOAP integration' },
    ],
  },
  {
    title: 'Database', icon: 'database', blurb: 'Relational data and queries.',
    items: [{ name: 'PostgreSQL', logo: 'postgresql' }, { name: 'MS SQL Server' }, { name: 'SQL' }],
  },
  {
    title: 'Testing', icon: 'flask', blurb: 'Confidence before merging.',
    items: [{ name: 'Vitest', logo: 'vitest' }, { name: 'Angular TestBed', logo: 'angular' }, { name: 'Unit testing' }],
  },
  {
    title: 'Tools', icon: 'tool', blurb: 'Day-to-day delivery.',
    items: [
      { name: 'Git', logo: 'git' }, { name: 'GitHub', logo: 'github' }, { name: 'GitHub Actions', logo: 'githubactions' },
      { name: 'Postman', logo: 'postman' }, { name: 'Swagger', logo: 'swagger' }, { name: 'VS Code' },
    ],
  },
  {
    title: 'AI', icon: 'sparkles', blurb: 'At work and in WordNest.',
    items: [
      { name: 'Claude AI', logo: 'claude' }, { name: 'AI-assisted development' }, { name: 'Gemini API', logo: 'googlegemini' },
      { name: 'scikit-learn', logo: 'scikitlearn' }, { name: 'FastAPI', logo: 'fastapi' },
    ],
  },
];

/* -------------------- Recognition -------------------- */
export const AWARDS: Award[] = [
  { title: 'Employee of the Month', date: 'October 2025', org: 'Muraai Information Technology', reason: 'Recognized for dedication, flawless deliveries and innovation across multiple concurrent client developments.' },
  { title: 'Outstanding Contribution Award', date: 'August 2025', org: 'Muraai Information Technology', reason: 'For excellence in Angular development during a major enterprise client go-live with external ERP integration.' },
  { title: 'Peer-to-Peer Recognition', date: 'May 2025', org: 'Innovative Category · Muraai', reason: 'For creativity and innovation in Angular front-end development and impactful solutions.' },
];

export const EDUCATION = [
  { title: 'Bachelor of Engineering (B.E.)', place: 'CMR Institute of Technology, Bengaluru', period: '2018 – 2022' },
  { title: 'Java Full Stack Development', place: 'JSpiders, Bengaluru', period: 'Certification' },
];

/* -------------------- Resumes -------------------- */
// Set `file` to null to show a "coming soon" placeholder instead of a broken link.
export const RESUMES: Resume[] = [
  {
    title: 'Angular Developer',
    focus: 'Frontend-focused',
    file: 'resume/Shashidhara_S_Angular_Developer_Resume.pdf',
    sizeLabel: 'PDF · 2 pages',
    points: ['Angular 21, Signals, RxJS', 'Enterprise UI: Material, AG-Grid, Tailwind', 'REST / SOAP integration & RBAC'],
  },
  {
    title: 'Full Stack Angular + Node.js',
    focus: 'Full stack',
    file: 'resume/Shashidhara_S_Full_Stack_Angular_NodeJS_Resume.pdf',
    sizeLabel: 'PDF · 2 pages',
    points: ['Angular front end + NestJS back end', 'Prisma, PostgreSQL, MS SQL Server', 'JWT, OAuth 2.0 & secure APIs'],
  },
];

/* -------------------- Contact -------------------- */
export const CONTACT = {
  heading: 'Let’s build something reliable together.',
  message:
    'Recruiters and engineering teams looking for an Angular or Full Stack Angular + Node.js developer — I’d be glad to talk. Email is the fastest way to reach me.',
  // 'mailto' opens a pre-filled email in the visitor's mail app. There is no server-side sending.
  formMode: 'mailto' as 'mailto' | 'none',
};
