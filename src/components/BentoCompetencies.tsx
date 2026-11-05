import React from 'react';
import { motion } from 'framer-motion';
import { 
  Server, 
  Database, 
  GraduationCap, 
  Award, 
  Clock, 
  Code2 
} from 'lucide-react';
import { EDUCATION_DATA } from '../data/achievements';

export const BentoCompetencies: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* 1. Primary Backend Architecture Card (Span 2) */}
      <motion.div
        whileHover={{ y: -2 }}
        transition={{ duration: 0.2 }}
        className="md:col-span-2 card-surface rounded-2xl p-6 sm:p-7 space-y-4 flex flex-col justify-between"
      >
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                <Server className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Backend Systems & High-Throughput APIs
              </h3>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              Core Specialty
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Architecting stateless RESTful APIs, event-driven WebSocket connections, and distributed task queues. Focus on clean MVC boundaries, input sanitization, and sub-second responses.
          </p>

          <div className="flex flex-wrap gap-1.5 pt-1">
            {[
              { name: 'Node.js', role: 'Event Loop' },
              { name: 'Express.js', role: 'MVC Routing' },
              { name: 'REST APIs', role: 'HTTP Standards' },
              { name: 'Socket.IO', role: 'WebSockets' },
              { name: 'Redis', role: '<2ms Cache' },
              { name: 'BullMQ', role: 'Job Queues' },
              { name: 'JWT & RBAC', role: 'Stateless Auth' },
            ].map((item) => (
              <span
                key={item.name}
                className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/[0.08] text-slate-800 dark:text-slate-200"
              >
                <strong>{item.name}</strong> <span className="text-slate-400 dark:text-slate-500 font-sans text-[11px]">· {item.role}</span>
              </span>
            ))}
          </div>
        </div>

        <div className="pt-2 border-t border-slate-200/80 dark:border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-500">
          <span>Worker Protocol: BullMQ + Redis</span>
          <span className="text-emerald-500 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Asynchronous Backoff
          </span>
        </div>
      </motion.div>

      {/* 2. Academic Distinction Card (Span 1) */}
      <motion.div
        whileHover={{ y: -2 }}
        transition={{ duration: 0.2 }}
        className="card-surface-highlight rounded-2xl p-6 flex flex-col justify-between space-y-4"
      >
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
              <GraduationCap className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              Academic Standing
            </span>
          </div>

          <div>
            <div className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              9.6 / 10
            </div>
            <p className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold mt-0.5">
              Cumulative GPA (Sem 5)
            </p>
          </div>

          <div className="space-y-1 text-xs">
            <h4 className="font-semibold text-slate-900 dark:text-white">
              {EDUCATION_DATA.institution}
            </h4>
            <p className="text-slate-500 dark:text-slate-400">
              {EDUCATION_DATA.degree} in {EDUCATION_DATA.field}
            </p>
          </div>
        </div>

        <div className="pt-2 border-t border-slate-200/80 dark:border-white/[0.06] text-[11px] font-mono text-slate-500">
          VIT Mumbai · 2023 – 2027
        </div>
      </motion.div>

      {/* 3. L&T DevOps Residency (Span 1) */}
      <motion.div
        whileHover={{ y: -2 }}
        transition={{ duration: 0.2 }}
        className="card-surface rounded-2xl p-6 flex flex-col justify-between space-y-4"
      >
        <div className="space-y-2.5">
          <div className="flex items-center justify-between">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-500 flex items-center justify-center">
              <Clock className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
              60 Hours
            </span>
          </div>

          <div>
            <h4 className="text-base font-bold text-slate-900 dark:text-white">
              DevOps Engineering Residency
            </h4>
            <p className="text-xs font-mono text-cyan-600 dark:text-cyan-400 mt-0.5">
              L&T STA · 2026
            </p>
          </div>

          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Hands-on training covering CI/CD automated deployment pipelines, Docker container isolation, and production delivery practices.
          </p>
        </div>

        <div className="pt-2 border-t border-slate-200/80 dark:border-white/[0.06] text-[11px] font-mono text-slate-500">
          CI/CD Automation · Docker Registry
        </div>
      </motion.div>

      {/* 4. Hackathon Recognition (Span 1) */}
      <motion.div
        whileHover={{ y: -2 }}
        transition={{ duration: 0.2 }}
        className="card-surface rounded-2xl p-6 flex flex-col justify-between space-y-4"
      >
        <div className="space-y-2.5">
          <div className="flex items-center justify-between">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center">
              <Award className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
              2nd Runner-Up
            </span>
          </div>

          <div>
            <h4 className="text-base font-bold text-slate-900 dark:text-white">
              TechSprint Hackathon
            </h4>
            <p className="text-xs font-mono text-amber-600 dark:text-amber-400 mt-0.5">
              GDGoC VIT Mumbai · 2026
            </p>
          </div>

          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Built <strong>HireDesk</strong>, an intelligent candidate pipeline orchestration engine for collaborative recruitment workflows.
          </p>
        </div>

        <div className="pt-2 border-t border-slate-200/80 dark:border-white/[0.06] text-[11px] font-mono text-slate-500">
          Awarded Podium Rank · Project: HireDesk
        </div>
      </motion.div>

      {/* 5. Dual-Database & Data Persistence (Span 1) */}
      <motion.div
        whileHover={{ y: -2 }}
        transition={{ duration: 0.2 }}
        className="card-surface rounded-2xl p-6 flex flex-col justify-between space-y-4"
      >
        <div className="space-y-2.5">
          <div className="flex items-center justify-between">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
              <Database className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
              Persistence
            </span>
          </div>

          <div>
            <h4 className="text-base font-bold text-slate-900 dark:text-white">
              Data & Storage Architecture
            </h4>
            <p className="text-xs font-mono text-indigo-600 dark:text-indigo-400 mt-0.5">
              PostgreSQL + MongoDB
            </p>
          </div>

          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Pairing relational ACID models for analytical snapshots with MongoDB document collections for dynamic user profiles and sessions.
          </p>
        </div>

        <div className="pt-2 border-t border-slate-200/80 dark:border-white/[0.06] text-[11px] font-mono text-slate-500">
          Mongoose · Atlas · ACID Transactions
        </div>
      </motion.div>

      {/* 6. Core Languages & Foundations (Span 3 on full width) */}
      <motion.div
        whileHover={{ y: -2 }}
        transition={{ duration: 0.2 }}
        className="md:col-span-3 card-surface rounded-2xl p-6 sm:p-7 space-y-4"
      >
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-200/80 dark:border-white/[0.06]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-teal-500/10 text-teal-500 flex items-center justify-center">
              <Code2 className="w-4 h-4" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Languages & Engineering Principles
            </h3>
          </div>
          <span className="text-xs font-mono text-slate-400">
            Algorithms & Problem Solving
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="space-y-1">
            <strong className="text-slate-900 dark:text-white font-mono text-sm block">C++ & DSA</strong>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
              Standard Template Library (STL), memory efficiency, graph traversals, and algorithmic complexity analysis.
            </p>
          </div>

          <div className="space-y-1">
            <strong className="text-slate-900 dark:text-white font-mono text-sm block">JavaScript & Python</strong>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
              ES6+, asynchronous event loop, promises, closures, API scripting, and automated utility development.
            </p>
          </div>

          <div className="space-y-1">
            <strong className="text-slate-900 dark:text-white font-mono text-sm block">Architecture & Security</strong>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
              MVC modular architecture, role-based access control (RBAC), bcrypt salting, and non-blocking I/O.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
