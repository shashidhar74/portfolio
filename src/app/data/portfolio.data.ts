// All portfolio content lives here. Update this file to change the site text.

export interface Link { label: string; url: string; }
export interface Role { period: string; title: string; summary: string; current?: boolean; }
export interface Stat { value: string; label: string; highlight?: boolean; }
export interface WorkProject {
  name: string; period: string; summary: string; points: string[]; stack: string[]; badge?: string;
}
export interface SkillGroup { title: string; items: string; }
export interface Award { title: string; date: string; reason: string; }

export const PROFILE = {
  name: 'Shashidhara S',
  greeting: 'Hi, I’m Shashidhara',
  headline: 'I build Angular apps for banking and enterprise, and I’m taking them all the way to AI.',
  intro:
    'Full Stack Angular Developer at Muraai Information Technology with 3+ years shipping enterprise approval and credit workflows in Angular 21, Signals, Node.js, NestJS and GraphQL. On my own time I built WordNest, a full-stack blog with an AI assistant powered by a model I trained myself.',
  location: 'Bengaluru',
  email: 'shashiblr74@gmail.com',
  linkedin: 'https://www.linkedin.com/in/shashidhara709',
  github: 'https://github.com/shashidhar74',
  resume: 'resume.pdf', // put your PDF in /public/resume.pdf
  openTo: 'I’m open to Angular and Full Stack Angular + Node.js roles. Email is the fastest way to reach me.',
};

export const STATS: Stat[] = [
  { value: '15+', label: 'Angular modules architected', highlight: true },
  { value: '20+', label: 'REST and SOAP ERP endpoints integrated' },
  { value: '4', label: 'enterprise client rollouts led on the front end' },
  { value: '0', label: 'critical defects after 4+ go-lives' },
];

export const ROLES: Role[] = [
  { period: 'Apr 2026 to present', title: 'Consultant, Angular & Full Stack', summary: 'Owning features end to end on DCR and SIMS-OS at the same time.', current: true },
  { period: 'Aug 2025 to Apr 2026', title: 'Associate Consultant', summary: 'Led front-end delivery on SIMS client rollouts and started the move to Signals.' },
  { period: 'May 2023 to Aug 2025', title: 'Associate Software Consultant', summary: 'Built Angular screens, dashboards and approval workflows for SIMS.' },
];

export const ACHIEVEMENTS: string[] = [
  'Designed a centralised API layer with HttpClient and interceptors that standardises auth, error handling and retry logic across 20+ backend and ERP endpoints',
  'Led the migration from RxJS-heavy state to Angular Signals, cutting boilerplate and improving change detection in multi-step forms',
  'Implemented role-based access across several user personas, rendering the UI from permission data supplied by the API',
  'Refactored AG-Grid and Tailwind components to remove UI bottlenecks and speed up page loads',
  'Mentored 2 batches of new joiners on Angular architecture, component design and API integration',
];

export const WORDNEST = {
  summary:
    'A full-stack blog where creators write posts, admins review them and readers comment, with an AI assistant that understands what you ask for. I built every layer, from the Angular UI to the model behind the assistant.',
  links: [
    { label: 'Live site ↗', url: 'https://wordnest-f2mv.onrender.com' },
    { label: 'Source code', url: 'https://github.com/shashidhar74/wordnest' },
    { label: 'API docs', url: 'https://wordnest-api-16oz.onrender.com/docs' },
  ] as Link[],
  aiIntro: 'Every message first goes through an intent classifier I trained myself. It decides what you’re asking for, and the assistant runs the matching action.',
  aiStats: [
    { value: '87%', label: 'Test accuracy', highlight: true },
    { value: '7', label: 'Intents' },
    { value: '419', label: 'Labelled examples' },
  ] as Stat[],
  aiActions: ['Find posts', 'Summarise a post', 'Explain why a post was rejected', 'Export data as CSV'],
  aiHow: 'I wrote and labelled the dataset, trained a TF-IDF + logistic regression model with scikit-learn, and serve it with FastAPI. The Gemini API handles the language side.',
  features: [
    'Publishing workflow: draft, pending, then approve, reject or send back with a comment, then published',
    'Role-based visibility enforced in SQL for guests, users, creators and admins',
    'Threaded comments with replies, editing and soft delete',
  ],
};

export const SIMS_OS: WorkProject = {
  name: 'SIMS-OS',
  badge: 'Open source',
  period: 'Feb 2026 to present',
  summary: 'Re-engineering the SIMS application, originally built on OpenText, into an open-source full-stack platform covering Admin, Invoice Processing, OCC, Emails, Tenants, Licenses and DOA.',
  points: [
    'Node.js and NestJS APIs in REST and GraphQL, with a controller, service and data-access structure backed by Prisma-managed SQL schemas',
    'Replacing platform-specific SOAP/XML integrations with standard REST APIs behind a centralised Angular service layer',
    'Role-based tabs, forms and buttons enforced from the database down to the UI, with read-write, read-only and no-access states',
    'JWT auth guards, DTO validation, exception handling and backend unit and integration tests',
  ],
  stack: ['Angular', 'Node.js', 'NestJS', 'GraphQL', 'Prisma', 'SQL'],
};

export const WORK_PROJECTS: WorkProject[] = [
  {
    name: 'DCR, Domestic Credit Requests',
    period: 'Jan 2026 to present',
    summary: 'An enterprise credit workflow application with a 4-stage approval pipeline (Initiation, Review, Decision, Implementation) on web and mobile.',
    points: [
      '15+ modules covering profiles, entity details, analytics and document and approval tracking',
      'Signals-based state for multi-step forms, with Clone, Save as Version and Submit',
      'REST and SOAP integration for stage transitions, approval routing and audit trails',
    ],
    stack: ['Angular 21', 'Signals', 'RxJS', 'Angular Material', 'Formly', 'AG-Grid', 'Tailwind CSS'],
  },
  {
    name: 'SIMS, Supplier Invoice Management',
    period: 'Sep 2023 to Jan 2026',
    summary: 'An enterprise approval automation platform, rolled out to 4 clients with 20+ ERP entities integrated over REST and SOAP.',
    points: [
      'Master-data screens with full CRUD, so business teams can change configuration themselves',
      'Multi-level approval workflows driven by API state transitions',
      'Real-time Highcharts dashboards with dynamic filtering',
    ],
    stack: ['Angular', 'TypeScript', 'AG-Grid', 'Tailwind CSS', 'Highcharts', 'OpenText AppWorks'],
  },
];

export const SKILLS: SkillGroup[] = [
  { title: 'Front end', items: 'Angular 21, Signals, RxJS, TypeScript, standalone components, reactive forms, Formly, Angular Material, AG-Grid, Highcharts, Tailwind CSS, OnPush and zoneless change detection' },
  { title: 'Back end and APIs', items: 'Node.js, NestJS, Express, GraphQL, Prisma, TypeORM, REST and SOAP integration, Swagger, Postman' },
  { title: 'Databases and security', items: 'PostgreSQL, MS SQL Server, JWT, OAuth 2.0, role-based access' },
  { title: 'AI and ML', items: 'Python, scikit-learn for NLP, FastAPI, Gemini API, plus Claude and GitHub Copilot for development and PR review' },
  { title: 'Tools and practice', items: 'Git CI pipelines, PR reviews, unit and integration testing, Agile, OpenText AppWorks, Render, Neon' },
];

export const AWARDS: Award[] = [
  { title: 'Employee of the Month', date: 'Oct 2025', reason: 'For flawless deliveries and innovation across several client projects at once' },
  { title: 'Outstanding Contribution Award', date: 'Aug 2025', reason: 'For Angular work on a major client go-live with external ERP integration' },
  { title: 'Peer-to-Peer Recognition for Innovation', date: 'May 2025', reason: 'For creative, high-impact Angular front-end solutions' },
];

export const EDUCATION: string[] = [
  'B.E., CMR Institute of Technology, Bengaluru (Aug 2018 to Aug 2022)',
  'Java Full Stack Development certification, JSpiders',
];
