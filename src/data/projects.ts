import { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'developer-productivity-hub',
    title: 'Developer Productivity Hub',
    subtitle: 'Unified Developer Analytics & Preparation Intelligence',
    tagline: 'Dual-database analytics platform aggregating GitHub and LeetCode activity with queue-driven sync and AI insights.',
    category: 'Full Stack & Distributed',
    isFlagship: true,
    featured: true,
    description:
      'A comprehensive developer analytics and preparation platform that aggregates GitHub commit activity and LeetCode problem-solving performance. Built to give developers real-time feedback on codebase momentum, DSA consistency, and contest trajectory.',
    problemStatement:
      'Developers maintain active profiles across disparate platforms like GitHub for version control and LeetCode for competitive programming. Tracking unified momentum, contest trends, and readiness requires manual tracking and lacks predictive feedback.',
    engineeringSolution:
      'Architected a distributed backend service utilizing a dual-database design. MongoDB manages flexible user auth records and preference states, while PostgreSQL guarantees strict ACID compliance and time-series consistency for historical snapshot metrics. Redis and BullMQ manage rate-limited external API scraping in the background, topped with an LLM-driven preparation engine.',
    techStack: [
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'MongoDB',
      'Redis',
      'BullMQ',
      'React',
      'JWT',
    ],
    keyContributions: [
      'Engineered a dual-database architecture: MongoDB for user entities/auth and PostgreSQL for relational analytical snapshots and time-series progress.',
      'Designed and deployed asynchronous background workers using Redis and BullMQ to sync GitHub commits and LeetCode contest ranks without blocking user requests.',
      'Implemented JWT-secured REST endpoints with role-aware middleware and rate-limiting.',
      'Developed proprietary algorithms for GitHub Health Score (commit velocity, PR review cadence) and DSA-Readiness Score (topic difficulty balance, streak longevity).',
      'Integrated an LLM-powered analyst module that evaluates snapshot histories to pinpoint preparation bottlenecks and recommend targeted practice problems.',
    ],
    architecture: {
      summary:
        'A decoupled architecture separating user traffic ingress from asynchronous external metric synchronization.',
      databaseDesign:
        'MongoDB / Mongoose handles dynamic user identities, session metadata, and API key storage. PostgreSQL stores structured historical metric snapshots with indexed timestamps (user_id, recorded_at, metric_type) for rapid analytical aggregations.',
      dataFlow: [
        'Client requests aggregated analytics via JWT-authenticated REST endpoint.',
        'Express checks Redis cache for cached metric payload (5-minute TTL).',
        'If stale or cache miss, BullMQ background job is dispatched to fetch from GitHub GraphQL & LeetCode APIs.',
        'Synchronized payloads are validated, normalized, and written into PostgreSQL snapshots.',
        'LLM worker ingests delta changes to update the readiness assessment score.',
        'Response is streamed back to client and re-cached in Redis.',
      ],
      keyChallenges: [
        'Preventing rate-limiting timeouts against third-party public endpoints (GitHub REST API & LeetCode). Solved via BullMQ exponential backoff and job deduplication keys.',
        'Maintaining schema consistency across dual databases. Solved via transactional patterns and idempotent sync worker routines.',
      ],
      endpoints: [
        { method: 'POST', path: '/api/v1/auth/register', description: 'JWT issue & user entity creation in MongoDB' },
        { method: 'GET', path: '/api/v1/analytics/summary', description: 'Cached performance overview (Redis -> Postgres)' },
        { method: 'POST', path: '/api/v1/sync/trigger', description: 'Enqueues background sync job via BullMQ' },
        { method: 'GET', path: '/api/v1/analyst/report', description: 'Retrieves LLM-generated readiness diagnostics' },
      ],
    },
    metrics: [
      { label: 'Architecture', value: 'Dual-Database' },
      { label: 'Job Worker', value: 'BullMQ + Redis' },
      { label: 'Security', value: 'JWT + RBAC' },
      { label: 'Intelligence', value: 'LLM Diagnostics' },
    ],
    githubUrl: 'https://github.com/BurhanuddinLokhandwala',
    liveUrl: '#',
    screenshots: [
      {
        caption: 'Analytics Overview & Composite Health Dashboard',
        alt: 'Developer Productivity Hub Dashboard',
      },
      {
        caption: 'Dual Database Ingestion & Queue Monitor Pipeline',
        alt: 'System Architecture Flow',
      },
    ],
  },
  {
    id: 'realtime-chat-app',
    title: 'Real-Time Chat Application',
    subtitle: 'Low-Latency Bidirectional Messaging Platform',
    tagline: 'Full-stack WhatsApp-inspired messaging application with persistent MongoDB storage and room-scoped WebSockets.',
    category: 'Real-Time Communication',
    featured: true,
    description:
      'A full-stack, responsive real-time chat application inspired by modern messaging clients. Features bidirectional instant communication, persistent message history, secure authentication, and presence indicators.',
    problemStatement:
      'Web applications requiring instant peer-to-peer communication often suffer from polling overhead, race conditions in state updates, or unauthenticated socket vulnerabilities.',
    engineeringSolution:
      'Built with Node.js and Socket.IO, implementing connection handshake authentication using signed JWTs. Messages are dispatched into room-scoped event channels and concurrently persisted into MongoDB with compound indices on conversation IDs and timestamps.',
    techStack: [
      'Node.js',
      'Express.js',
      'Socket.IO',
      'MongoDB',
      'React',
      'Tailwind CSS',
      'JWT',
      'bcrypt',
    ],
    keyContributions: [
      'Integrated Socket.IO for low-latency, event-driven bidirectional client-server communication.',
      'Secured socket handshakes with JWT authentication middleware, preventing unauthorized event subscriptions.',
      'Implemented salted bcrypt password hashing (12 rounds) and secure user registration/login flow.',
      'Designed MongoDB message schema with compound indexing for efficient pagination of conversation histories.',
      'Built a sleek, responsive React + Tailwind interface supporting typing indicators, delivery status, and online presence.',
    ],
    architecture: {
      summary:
        'Socket.IO server maintaining persistent WebSocket connections alongside an Express REST API for historical message recovery.',
      databaseDesign:
        'MongoDB collections: Users (hashed passwords, profile metadata), Conversations (participants, lastMessage timestamp), and Messages (sender, conversationId, content, readBy, createdAt indexed).',
      dataFlow: [
        'User logs in via REST endpoint, receives signed JWT.',
        'Client establishes WebSocket connection passing JWT in auth handshake.',
        'Socket middleware verifies token and joins client to their active conversation rooms.',
        'New message event is received, saved to MongoDB, and broadcasted to active room sockets.',
        'Recipient acknowledges receipt, triggering a read-receipt event back to sender.',
      ],
      keyChallenges: [
        'Handling intermittent disconnects and reconnection state synchronization without duplicate messages.',
        'Securing WebSocket event channels against ID spoofing through socket-session verification.',
      ],
      endpoints: [
        { method: 'POST', path: '/api/v1/auth/login', description: 'User login with bcrypt comparison & JWT generation' },
        { method: 'GET', path: '/api/v1/messages/:chatId', description: 'Paginated message history from MongoDB' },
        { method: 'WS', path: 'socket.on("send_message")', description: 'Broadcasts message to room and persists in DB' },
        { method: 'WS', path: 'socket.on("typing")', description: 'Emits ephemeral typing status to participants' },
      ],
    },
    metrics: [
      { label: 'Protocol', value: 'WebSockets (Socket.IO)' },
      { label: 'Auth & Hashing', value: 'JWT + bcrypt (12 rounds)' },
      { label: 'Database', value: 'MongoDB Indexed' },
      { label: 'Latency', value: 'Sub-100ms Event Flow' },
    ],
    githubUrl: 'https://github.com/BurhanuddinLokhandwala',
    liveUrl: '#',
    screenshots: [
      {
        caption: 'Active Chat Window with Room Scoping and Status',
        alt: 'Real-Time Chat Interface',
      },
    ],
  },
  {
    id: 'accurategst-platform',
    title: 'AccurateGST — Services Platform',
    subtitle: 'Commercial Production Client Website',
    tagline: 'Production client web application for GST filing, tax advisory services, and decoupled headless CMS blog management.',
    category: 'Client Production',
    clientProject: true,
    featured: true,
    description:
      'A live, client-facing commercial website developed for a professional tax and GST consultancy firm. Delivers a frictionless client inquiry experience, high-conversion service breakdowns, and headless CMS content publishing.',
    problemStatement:
      'The client needed a trustworthy, fast-loading digital portal to capture client inquiries, present complex GST services clearly, and allow non-technical staff to publish regulatory tax updates without engineering intervention.',
    engineeringSolution:
      'Delivered a performant client website integrating Sanity.io as a headless CMS for dynamic blog posts and regulatory updates. Integrated dual-channel transactional email pipelines via Nodemailer and EmailJS for verified inquiry routing.',
    techStack: [
      'React',
      'Tailwind CSS',
      'Sanity.io',
      'Nodemailer',
      'EmailJS',
      'Vercel',
    ],
    keyContributions: [
      'Architected and launched a production client website customized for tax and GST advisory services.',
      'Integrated Sanity.io headless CMS, enabling non-technical stakeholders to publish and update blog articles without redeployment.',
      'Developed robust contact inquiry pipelines using Nodemailer and EmailJS with client-side validation and fallback delivery.',
      'Optimized load performance, Core Web Vitals, and mobile responsiveness for high conversion and corporate trust.',
      'Maintained deployment lifecycle on Vercel with automated preview pipelines and SSL security.',
    ],
    architecture: {
      summary:
        'Client-side application coupled with Sanity.io headless content lake and serverless transactional email delivery.',
      databaseDesign:
        'Sanity.io GROQ-queried document schemas: Posts, Categories, Authors, and Service Tiers with rich-text portability.',
      dataFlow: [
        'User submits inquiry form on service page.',
        'Form inputs validated against schema (email syntax, required fields).',
        'Payload dispatched through transactional delivery pipeline (EmailJS / Nodemailer gateway).',
        'Client receives instant confirmation state while administrative staff receives formatted inquiry alert.',
      ],
      keyChallenges: [
        'Ensuring non-technical editors cannot break UI layout when publishing rich text via Sanity. Configured strict portable text serializers.',
        'Guaranteed email delivery without spam filtering false-positives via SPF/DKIM aligned transactional headers.',
      ],
      endpoints: [
        { method: 'POST', path: '/api/contact', description: 'Transactional inquiry notification dispatch' },
        { method: 'GET', path: 'GROQ: *[_type == "post"]', description: 'Fetches cached tax advice articles from Sanity CMS' },
      ],
    },
    metrics: [
      { label: 'Type', value: 'Live Client Production' },
      { label: 'CMS', value: 'Sanity.io Headless' },
      { label: 'Inquiry Pipeline', value: 'Nodemailer / EmailJS' },
      { label: 'Deployment', value: 'Vercel Edge Network' },
    ],
    githubUrl: 'https://github.com/BurhanuddinLokhandwala',
    liveUrl: '#',
    screenshots: [
      {
        caption: 'AccurateGST Client Landing & Service Consultation Portal',
        alt: 'AccurateGST Production Website',
      },
    ],
  },
];

