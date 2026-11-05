export const PROFILE = {
  name: "Burhanuddin Lokhandwala",
  preferredName: "Burhanuddin",
  role: "Backend-Focused Software Developer",
  location: "Mumbai, India",
  email: "burlokh23@gmail.com",
  headline: "Building reliable backend systems and thoughtful digital experiences.",
  summary:
    "I'm Burhanuddin, a backend-focused software developer passionate about building scalable applications, designing APIs, and solving engineering problems.",
  availability: {
    status: "Available for Internships",
    type: "Software Engineering & Backend Roles",
    isAvailable: true,
  },
  social: {
    github: "https://github.com/BurhanuddinLokhandwala",
    linkedin: "https://linkedin.com/in/burhanuddin-lokhandwala",
    email: "mailto:burlokh23@gmail.com",
  },
  stats: [
    { label: "Academic CGPA", value: "9.6 / 10", caption: "VIT Mumbai (IT)" },
    { label: "Core Focus", value: "Backend Systems", caption: "APIs, Queues & Dual-DB" },
    { label: "DevOps Residency", value: "60 Hours", caption: "L&T STA Program" },
    { label: "Hackathon", value: "2nd Runner-Up", caption: "GDGoC VIT TechSprint" },
  ],
  engineeringPhilosophy: [
    {
      title: "Resilient API & Data Architecture",
      description:
        "Choosing the right database for the right workload—such as pairing MongoDB for dynamic user identity with PostgreSQL for strict time-series aggregations.",
    },
    {
      title: "Asynchronous & Queue-Driven Workflows",
      description:
        "Offloading heavy, non-blocking synchronization tasks to Redis and BullMQ queues to safeguard API latency and respect rate limits.",
    },
    {
      title: "Real-Time Bidirectional Systems",
      description:
        "Building low-latency event flows using WebSockets and Socket.IO with strict JWT handshakes and room-scoped isolation.",
    },
    {
      title: "Clean MVC & Separation of Concerns",
      description:
        "Structuring codebases where controllers handle transport protocols, services encapsulate business logic, and data models remain decoupled.",
    },
  ],
};

