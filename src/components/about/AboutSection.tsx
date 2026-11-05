import React from 'react';
import { motion } from 'framer-motion';
import { 
  Server, 
  Database, 
  KeyRound, 
  Workflow, 
  Radio, 
  Binary 
} from 'lucide-react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { fadeInUp, staggerContainer, staggerItem, viewportOnce } from '../../utils/animations';

export const AboutSection: React.FC = () => {
  const engineeringPillars = [
    {
      icon: <Server className="w-5 h-5 text-emerald-500" />,
      title: 'Backend Engineering & API Design',
      description:
        'Designing modular RESTful architectures with Express.js and Node.js. Focused on request sanitation, deterministic error handling, structured status codes, and clean separation between routing, controllers, and services.',
    },
    {
      icon: <Database className="w-5 h-5 text-indigo-500" />,
      title: 'Database Architecture & Dual-DB Patterns',
      description:
        'Selecting the right database for the right domain requirement. Utilizing PostgreSQL for relational time-series snapshots and strict schema consistency, alongside MongoDB for rapid document traversal and identity entities.',
    },
    {
      icon: <KeyRound className="w-5 h-5 text-cyan-500" />,
      title: 'Authentication & Access Control',
      description:
        'Implementing stateless JSON Web Token (JWT) workflows, role-based authorization guards (RBAC), and 12-round salted bcrypt hashing to safeguard API endpoints and persistent user credentials.',
    },
    {
      icon: <Workflow className="w-5 h-5 text-amber-500" />,
      title: 'Asynchronous Job Queues',
      description:
        'Using Redis and BullMQ to build resilient background processing workers that handle rate-limited external third-party API synchronization without bottlenecking the main request-response cycle.',
    },
    {
      icon: <Radio className="w-5 h-5 text-rose-500" />,
      title: 'Real-Time Bidirectional Systems',
      description:
        'Implementing low-latency WebSocket communication using Socket.IO, with JWT authentication during connection handshakes and isolated room-level event distribution.',
    },
    {
      icon: <Binary className="w-5 h-5 text-teal-500" />,
      title: 'Algorithmic Problem Solving & DSA',
      description:
        'Rooted in strong computer science fundamentals in C++ and algorithmic complexity analysis, maintaining a rigorous 9.6/10 CGPA in Information Technology at VIT Mumbai.',
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 border-t border-slate-200/80 dark:border-white/[0.06] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col items-start gap-2 max-w-2xl"
        >
          <Badge variant="emerald" size="sm">
            Engineering Philosophy
          </Badge>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mt-1">
            How I Approach Engineering
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed mt-1">
            I prioritize technical correctness, maintainable service boundaries, and deterministic systems over superficial flash. Here is the foundation of my technical practice:
          </p>
        </motion.div>

        {/* 6 Engineering Pillars Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {engineeringPillars.map((pillar, index) => (
            <motion.div key={index} variants={staggerItem}>
              <Card
              hoverEffect
              className="flex flex-col justify-between group"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/[0.08] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  {pillar.icon}
                </div>
                <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                  {pillar.title}
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Academic & Background Highlights Card */}
        <div className="mt-10 rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-slate-50/70 dark:bg-[#0E1017]/80 p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-white/[0.08]">
            <div className="flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-semibold block mb-1">
                  Academic Performance
                </span>
                <div className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                  9.6 / 10 CGPA
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                  B.Tech in Information Technology at Vidyalankar Institute of Technology, Mumbai (Semester 5).
                </p>
              </div>
            </div>

            <div className="pt-4 md:pt-0 md:pl-6 flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-cyan-600 dark:text-cyan-400 font-semibold block mb-1">
                  Hands-On Residency
                </span>
                <div className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                  60 Hours DevOps
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                  L&T STA DevOps Residency (2026), covering build pipelines, continuous integration, and infrastructure fundamentals.
                </p>
              </div>
            </div>

            <div className="pt-4 md:pt-0 md:pl-6 flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-semibold block mb-1">
                  Hackathon Recognition
                </span>
                <div className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                  2nd Runner-Up
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                  GDGoC VIT Mumbai TechSprint Hackathon (2026) for engineering HireDesk recruitment workflows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
