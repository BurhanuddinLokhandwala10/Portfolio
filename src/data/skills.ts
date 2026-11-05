import { SkillCategory } from '../types';

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Backend Engineering & Distributed Systems',
    description: 'High-throughput APIs, message queues, real-time protocols, and authentication pipelines.',
    skills: [
      { name: 'Node.js', isKey: true, description: 'Event loop, asynchronous non-blocking runtime, streams & buffers' },
      { name: 'Express.js', isKey: true, description: 'Middleware composition, RESTful routing, error handling' },
      { name: 'REST APIs', isKey: true, description: 'Stateless API design, HTTP status standards, resource modeling' },
      { name: 'JWT & Auth', isKey: true, description: 'Stateless token issuance, role-based access control (RBAC), token refresh' },
      { name: 'Socket.IO', isKey: true, description: 'Bidirectional WebSockets, room scoping, connection heartbeat' },
      { name: 'Redis', isKey: true, description: 'In-memory caching, sub-millisecond retrieval, TTL invalidation' },
      { name: 'BullMQ', isKey: true, description: 'Background job queues, rate-limit throttling, exponential backoff retries' },
    ],
  },
  {
    title: 'Databases & Data Persistence',
    description: 'Dual-database architecture, relational indexing, document modeling, and query optimization.',
    skills: [
      { name: 'PostgreSQL', isKey: true, description: 'Relational schemas, ACID transactions, indexed time-series snapshots' },
      { name: 'MongoDB', isKey: true, description: 'Document stores, compound indexing, flexible identity models' },
      { name: 'Mongoose', isKey: true, description: 'Schema validation, middleware hooks, population pipelines' },
      { name: 'MongoDB Atlas', isKey: false, description: 'Cloud clusters, automated backups, network whitelisting' },
    ],
  },
  {
    title: 'Core Programming Languages',
    description: 'Foundational problem-solving, systems programming, and scripting.',
    skills: [
      { name: 'C++', isKey: true, description: 'Object-oriented programming, STL algorithms, memory efficiency, DSA' },
      { name: 'JavaScript (ES6+)', isKey: true, description: 'Async/await, Promises, closures, prototypes, event loop mechanics' },
      { name: 'Python', isKey: false, description: 'Scripting, algorithmic prototyping, data manipulation' },
    ],
  },
  {
    title: 'Frontend & UI Engineering',
    description: 'Responsive, component-driven client interfaces built to interface cleanly with REST APIs.',
    skills: [
      { name: 'React.js', isKey: true, description: 'Custom hooks, state lifecycle, virtual DOM reconciliation, performance optimization' },
      { name: 'Tailwind CSS', isKey: true, description: 'Utility-first styling, design token systems, dark/light themes' },
      { name: 'HTML5 & Modern CSS', isKey: false, description: 'Semantic markup, accessibility (ARIA), flexbox/grid layouts' },
    ],
  },
  {
    title: 'Architecture & Engineering Concepts',
    description: 'Theoretical foundations and systems engineering patterns.',
    skills: [
      { name: 'MVC Architecture', isKey: true, description: 'Strict separation between transport controller, service logic, and models' },
      { name: 'Authentication & Authorization', isKey: true, description: 'Defense-in-depth, bcrypt salting, session validation' },
      { name: 'Data Structures & Algorithms', isKey: true, description: 'Graph algorithms, dynamic programming, trees, heaps, complexity analysis' },
      { name: 'Asynchronous Processing', isKey: true, description: 'Job queues, event emitters, non-blocking I/O patterns' },
    ],
  },
  {
    title: 'Tools, DevOps & Integrations',
    description: 'Development environment, deployment targets, and third-party services.',
    skills: [
      { name: 'Git & GitHub', isKey: true, description: 'Branching workflows, code reviews, semantic versioning' },
      { name: 'Vercel & Render', isKey: true, description: 'Production hosting, serverless edge, backend container deployments' },
      { name: 'Nodemailer & EmailJS', isKey: false, description: 'Transactional email dispatch, SMTP relays, template compilation' },
      { name: 'Sanity.io', isKey: false, description: 'Headless CMS schema definition, GROQ querying, live content lake' },
    ],
  },
];

