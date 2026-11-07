// Centralized data store. Never hardcode text or URLs in components.

export const PERSONAL_INFO = {
  nameFirst: "Burhanuddin",
  nameLast: "Lokhandwala",
  fullName: "Burhanuddin Lokhandwala",
  roleTarget: "SDE Backend / Fullstack",
  greeting: "Hello, I'm",
  roles: ["Backend Developer", "Fullstack Developer"],
  heroBio:
    "I build reliable backend systems, design scalable APIs and create meaningful digital products.",
  location: "Mumbai, India",
  education: {
    degree: "B.Tech (IT)",
    institution: "VIT Mumbai",
    cgpa: "9.6 / 10",
    years: "2024 — 2028",
    year: "Third Year, Semester 5",
  },
  email: "burlokh23@gmail.com",
  // Leave empty if not yet available — buttons will automatically be hidden
  linkedin: "",
  github: "",
  resumeUrl: "/resume.pdf",
};

export const ABOUT_DATA = {
  sectionLabel: "01 / About",
  headingMain: "Backend-focused,",
  headingAccent: "product-minded.",
  body: "I'm a third-year Information Technology student at Vidyalankar Institute of Technology, Mumbai, with a 9.6/10 CGPA. I like building the parts of an application users never see: APIs, authentication, data models and background jobs. I've built a real-time chat app, a developer analytics platform, and a live website for a GST services client.",
  stats: [
    { value: 9.6, suffix: "", decimals: 1, label: "CGPA" },
    { value: 3, suffix: "", decimals: 0, label: "Projects shipped" },
    { value: 1, suffix: "", decimals: 0, label: "Live client site" },
    { value: 2, prefix: "", suffix: "nd", decimals: 0, label: "Runner-Up, TechSprint Hackathon" },
  ],
};

export const MARQUEE_SKILLS = [
  "Node.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "Redis",
  "BullMQ",
  "Socket.IO",
  "JWT",
  "React",
  "Tailwind CSS",
  "JavaScript",
  "C++",
  "Python",
  "Git",
  "Vercel",
  "Render",
  "Resend",
  "Nodemailer",
];

export const SKILL_CATEGORIES = [
  {
    category: "Languages",
    icon: "code",
    skills: ["C++", "JavaScript", "Python"],
  },
  {
    category: "Backend & APIs",
    icon: "server",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT",
      "Socket.IO",
      "Redis",
      "BullMQ",
    ],
  },
  {
    category: "Databases",
    icon: "database",
    skills: ["MongoDB", "Mongoose", "PostgreSQL"],
  },
  {
    category: "Frontend",
    icon: "layout",
    skills: ["React.js", "Tailwind CSS"],
  },
  {
    category: "Tools & Platforms",
    icon: "terminal",
    skills: ["Git", "GitHub", "MongoDB Atlas", "Vercel", "Render"],
  },
  {
    category: "Integrations & Email",
    icon: "cpu",
    skills: ["Resend", "Nodemailer"],
  },
];

export const PROJECTS = [
  {
    id: "01",
    featured: true,
    title: "Developer Productivity Hub",
    summary:
      "A developer analytics dashboard that combines GitHub and LeetCode data into one view.",
    highlights: [
      "Tracks repo activity, coding progress by difficulty and contest ratings",
      "Dual-database design, MongoDB for users/auth and PostgreSQL for snapshots and historical analytics",
      "JWT-secured REST APIs with Redis + BullMQ for scheduled background sync",
      "GitHub health score, DSA-readiness score and an LLM-powered analyst with strengths, gaps and next steps",
    ],
    whatWasHard:
      "Synchronizing rate-limited third-party APIs without stalling client requests; solved via BullMQ workers with exponential backoff and dual-database transactional boundaries.",
    tech: [
      "Node.js",
      "Express.js",
      "React",
      "MongoDB",
      "PostgreSQL",
      "Redis",
      "BullMQ",
      "JWT",
    ],
    browserUrl: "productivity-hub.dev/analytics",
    liveUrl: "https://productivity-hub-bay.vercel.app/",
    githubUrl: "", // hidden if empty
  },
  {
    id: "02",
    featured: false,
    title: "WhatsApp-Style Real-Time Chat App",
    summary: "A full-stack messaging app with real-time delivery.",
    highlights: [
      "Bidirectional messaging with Socket.IO",
      "JWT authentication and bcrypt password hashing",
      "MongoDB persistence and a responsive React + Tailwind interface",
    ],
    whatWasHard:
      "Managing socket room synchronization and reconnect state across network drops while maintaining strict message delivery order.",
    tech: [
      "Node.js",
      "Express.js",
      "Socket.IO",
      "MongoDB",
      "React",
      "Tailwind CSS",
      "JWT",
      "bcrypt",
    ],
    browserUrl: "chat-app-alpha-three-36.vercel.app",
    liveUrl: "https://chat-app-alpha-three-36.vercel.app/",
    githubUrl: "", // hidden if empty
  },
  {
    id: "03",
    featured: false,
    title: "GST Services Platform",
    summary: "A live client website for a GST filing services business.",
    highlights: [
      "Built and maintained for a real client",
      "Contact-form email dispatch with Resend and Nodemailer",
      "Responsive service showcase and streamlined client inquiry workflows",
    ],
    whatWasHard:
      "Structuring reliable contact-form delivery and client intake validation without requiring complex backend infrastructure.",
    tech: ["React", "Tailwind CSS", "Resend", "Nodemailer"],
    browserUrl: "accurategst.in",
    liveUrl: "https://accurategst.in",
    githubUrl: "", // hidden if empty
  },
];

export const JOURNEY = [
  {
    role: "B.Tech in Information Technology",
    organization: "Vidyalankar Institute of Technology, Mumbai",
    period: "2024 — 2028",
    description:
      "CGPA 9.6/10. Currently 3rd year (Semester 5). Focused on database architectures, API design, and distributed applications.",
    icon: "graduation-cap",
  },
  {
    role: "TechSprint Hackathon, 2nd Runner-Up",
    organization: "GDGoC VIT Mumbai",
    period: "Dec 2025 — Jan 2026",
    description:
      "Team project: HireDesk. Candidate evaluation and technical workflow platform engineered under 24-hour sprint conditions.",
    icon: "award",
  },
  {
    role: "Freelance Web Developer",
    organization: "GST Services Platform (accurategst.in)",
    period: "May 2026 — Aug 2026",
    description:
      "Built and maintain a live client site with contact form email delivery and service showcase.",
    icon: "briefcase",
  },
  {
    role: "DevOps Residency",
    organization: "L&T STA",
    period: "1 Jun 2026 — 6 Jun 2026",
    description:
      "Residential course (60 hours, Credit Transfer Program) focusing on containerization, CI/CD pipelines, and cloud deployment paradigms.",
    icon: "terminal",
  },
];
