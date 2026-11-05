import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../types';
import { 
  Sparkles, 
  Github, 
  ArrowUpRight, 
  CheckCircle2, 
  ChevronDown, 
  Database, 
  Workflow, 
  Layers, 
  ShieldCheck, 
  Brain 
} from 'lucide-react';

interface FlagshipProjectShowcaseProps {
  project: Project;
}

export const FlagshipProjectShowcase: React.FC<FlagshipProjectShowcaseProps> = ({ project }) => {
  const [showArchitecture, setShowArchitecture] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
      className="card-surface-highlight rounded-3xl p-6 sm:p-9 relative overflow-hidden backdrop-blur-md"
    >
      {/* Decorative top accent glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 dark:bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" 
      />

      {/* Flagship Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-200/80 dark:border-white/[0.08]">
        <div className="flex items-center gap-2.5">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
            <Sparkles className="w-3.5 h-3.5" />
            Flagship Engineering Project
          </span>
          <span className="text-xs font-mono text-slate-400 dark:text-slate-500 hidden sm:inline">
            · Dual-Database Architecture
          </span>
        </div>

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-white/[0.04] hover:bg-slate-100 dark:hover:bg-white/[0.08] text-xs font-mono font-medium text-slate-800 dark:text-slate-200 transition-all hover:scale-105"
          >
            <Github className="w-3.5 h-3.5" />
            <span>Repository</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
          </a>
        )}
      </div>

      {/* Main Content Layout */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Narrative, Problem, Tech Stack */}
        <div className="lg:col-span-7 space-y-5">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm font-mono text-emerald-600 dark:text-emerald-400 mt-1">
              {project.subtitle}
            </p>
          </div>

          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {project.description}
          </p>

          {/* Dual-Database Architecture Highlight Callout */}
          <div className="rounded-xl border border-indigo-500/20 bg-indigo-500/[0.04] p-4 space-y-1.5 text-xs">
            <div className="flex items-center gap-2 font-mono font-semibold text-indigo-500 dark:text-indigo-400">
              <Database className="w-4 h-4" />
              <span>Engineered Dual-Database Workload Separation</span>
            </div>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
              <strong className="text-slate-900 dark:text-white">MongoDB:</strong> Manages dynamic user identity, authentication entities, and session states.  
              <br />
              <strong className="text-slate-900 dark:text-white">PostgreSQL:</strong> Enforces relational schema consistency and indexed time-series snapshots for commit frequency and contest velocity analytics.
            </p>
          </div>

          {/* Key Contributions List */}
          <div className="space-y-2">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 block">
              Core Engineering Implementations:
            </span>
            <ul className="space-y-2">
              {project.keyContributions.map((contribution, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>{contribution}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Badges */}
          <div className="pt-2">
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/[0.08] text-slate-800 dark:text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Visual Architecture Topology & Metrics */}
        <div className="lg:col-span-5 space-y-4">
          {/* Visual Architecture Flow Card */}
          <div className="rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-slate-50/80 dark:bg-[#0c0d12] p-5 space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-white/[0.06]">
              <span className="font-semibold text-slate-800 dark:text-slate-200">
                System Ingestion Topology
              </span>
              <span className="text-[10px] text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded font-mono">
                Active Queue
              </span>
            </div>

            {/* Topology Flow Items */}
            <div className="space-y-2 text-[11px]">
              <div className="p-2.5 rounded-lg bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-500" />
                  <span className="text-slate-900 dark:text-white font-medium">REST API Gateway</span>
                </div>
                <span className="text-[10px] text-slate-400">JWT Verified</span>
              </div>

              <div className="p-2.5 rounded-lg bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Layers className="w-3.5 h-3.5 text-amber-500" />
                  <span className="text-slate-900 dark:text-white font-medium">Redis Cache</span>
                </div>
                <span className="text-[10px] text-amber-500 font-semibold">&lt; 2ms TTL</span>
              </div>

              {/* Dual DB Split */}
              <div className="grid grid-cols-2 gap-2">
                <div className="p-2.5 rounded-lg bg-indigo-500/[0.06] border border-indigo-500/20">
                  <div className="flex items-center gap-1 text-indigo-500 font-bold mb-0.5">
                    <Database className="w-3 h-3" />
                    <span>PostgreSQL</span>
                  </div>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400">Time-Series Snapshots</span>
                </div>

                <div className="p-2.5 rounded-lg bg-emerald-500/[0.06] border border-emerald-500/20">
                  <div className="flex items-center gap-1 text-emerald-500 font-bold mb-0.5">
                    <Database className="w-3 h-3" />
                    <span>MongoDB</span>
                  </div>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400">User Identity & Auth</span>
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Workflow className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="text-slate-900 dark:text-white font-medium">BullMQ Workers</span>
                </div>
                <span className="text-[10px] text-emerald-500 font-semibold">Async Backoff</span>
              </div>

              <div className="p-2.5 rounded-lg bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Brain className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="text-slate-900 dark:text-white font-medium">LLM Prep Analyst</span>
                </div>
                <span className="text-[10px] text-cyan-400 font-semibold">Readiness Metric</span>
              </div>
            </div>
          </div>

          {/* Toggle for Deep Architecture Accordion */}
          <button
            onClick={() => setShowArchitecture(!showArchitecture)}
            className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-white/[0.03] hover:bg-slate-100 dark:hover:bg-white/[0.08] text-xs font-mono font-medium text-slate-700 dark:text-slate-300 transition-colors"
          >
            <span>{showArchitecture ? 'Collapse Architecture Specs' : 'Expand Architecture Specs & Lifecycle'}</span>
            <motion.span
              animate={{ rotate: showArchitecture ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown className="w-4 h-4" />
            </motion.span>
          </button>
        </div>
      </div>

      {/* Expandable Architecture Drawer */}
      <AnimatePresence>
        {showArchitecture && project.architecture && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden mt-6 pt-6 border-t border-slate-200 dark:border-white/[0.08]"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl border border-slate-200 dark:border-white/[0.08] bg-slate-50 dark:bg-white/[0.02] space-y-2">
                <span className="font-mono font-semibold text-slate-900 dark:text-white uppercase tracking-wider block">
                  Request & Sync Lifecycle
                </span>
                <ol className="space-y-1.5 text-slate-600 dark:text-slate-400 list-decimal list-inside">
                  {project.architecture.dataFlow.map((step, idx) => (
                    <li key={idx} className="leading-relaxed">{step}</li>
                  ))}
                </ol>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 dark:border-white/[0.08] bg-slate-50 dark:bg-white/[0.02] space-y-2">
                <span className="font-mono font-semibold text-slate-900 dark:text-white uppercase tracking-wider block">
                  Engineering Trade-Offs & Challenges
                </span>
                <ul className="space-y-1.5 text-slate-600 dark:text-slate-400 list-disc list-inside">
                  {project.architecture.keyChallenges.map((ch, idx) => (
                    <li key={idx} className="leading-relaxed">{ch}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
