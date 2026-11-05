import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../types';
import { 
  Github, 
  CheckCircle2, 
  ChevronDown, 
  Radio, 
  Briefcase, 
  FileCheck 
} from 'lucide-react';

interface SecondaryProjectCardProps {
  project: Project;
}

export const SecondaryProjectCard: React.FC<SecondaryProjectCardProps> = ({ project }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
      className="card-surface rounded-2xl p-6 sm:p-7 flex flex-col justify-between space-y-5 transition-all"
    >
      <div className="space-y-4">
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2">
          {project.clientProject ? (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
              <Briefcase className="w-3 h-3" />
              Live Client Work
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              <Radio className="w-3 h-3" />
              Real-Time Protocol
            </span>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="p-1.5 rounded-lg border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/[0.06] text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white transition-colors"
              aria-label={`${project.title} repository`}
            >
              <Github className="w-4 h-4" />
            </a>
          )}
        </div>

        {/* Title & Subtitle */}
        <div>
          <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
            {project.title}
          </h3>
          <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-0.5">
            {project.subtitle}
          </p>
        </div>

        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          {project.description}
        </p>

        {/* Interactive Specimen / Visual Preview for Chat vs GST */}
        {project.id === 'realtime-chat-app' ? (
          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-white/[0.06] bg-slate-50/70 dark:bg-[#0c0d12] font-mono text-[11px] space-y-2">
            <div className="flex items-center justify-between text-slate-400 border-b border-slate-200 dark:border-white/[0.06] pb-1.5 text-[10px]">
              <span className="flex items-center gap-1 text-emerald-500">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                Socket.IO Handshake Verified
              </span>
              <span>Room: #team-dev</span>
            </div>
            <div className="space-y-1.5">
              <div className="bg-slate-200/60 dark:bg-white/[0.06] p-2 rounded-lg max-w-[85%] text-slate-700 dark:text-slate-300">
                <span>Optimistic UI dispatch & sub-100ms event delivery</span>
              </div>
              <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-300 p-2 rounded-lg ml-auto max-w-[85%] flex items-center justify-between">
                <span>Persisted in MongoDB with compound index</span>
                <CheckCircle2 className="w-3 h-3 text-emerald-500 flex-shrink-0 ml-1" />
              </div>
            </div>
          </div>
        ) : (
          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-white/[0.06] bg-slate-50/70 dark:bg-[#0c0d12] font-mono text-[11px] space-y-2">
            <div className="flex items-center justify-between text-slate-400 border-b border-slate-200 dark:border-white/[0.06] pb-1.5 text-[10px]">
              <span className="flex items-center gap-1 text-cyan-500">
                <FileCheck className="w-3 h-3" />
                Sanity.io Headless CMS
              </span>
              <span>Vercel Edge</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 font-sans leading-relaxed">
              Decoupled content lake enabling non-technical accountants to publish tax compliance updates with transactional Nodemailer notifications.
            </p>
          </div>
        )}

        {/* Key Contributions */}
        <div className="space-y-1.5">
          <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 block">
            Highlights:
          </span>
          <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-300">
            {project.keyContributions.slice(0, 3).map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 leading-relaxed">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.06] text-slate-700 dark:text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Expandable Architecture Notes */}
      {project.architecture && (
        <div className="pt-2 border-t border-slate-200/80 dark:border-white/[0.06]">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="flex items-center justify-between w-full text-xs font-mono font-medium text-emerald-600 dark:text-emerald-400 hover:opacity-80 transition-opacity"
          >
            <span>{showDetails ? 'Hide Details' : 'View Architecture Specs'}</span>
            <motion.span
              animate={{ rotate: showDetails ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown className="w-3.5 h-3.5" />
            </motion.span>
          </button>

          <AnimatePresence>
            {showDetails && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden mt-3 p-3.5 rounded-xl border border-slate-200 dark:border-white/[0.06] bg-slate-50 dark:bg-white/[0.02] space-y-2 text-xs"
              >
                <div className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  <strong className="text-slate-900 dark:text-white font-mono block mb-0.5">Persistence & Protocol:</strong>
                  {project.architecture.databaseDesign}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </motion.div>
  );
};
