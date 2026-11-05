import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../types';
import { 
  ChevronDown, 
  Github, 
  ArrowUpRight, 
  CheckCircle2, 
  Database, 
  Network, 
  ShieldAlert, 
  Sparkles 
} from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.article
      layout
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
      className={`rounded-2xl border transition-all duration-300 ${
        project.isFlagship
          ? 'border-emerald-500/30 dark:border-emerald-500/30 bg-emerald-500/[0.02] dark:bg-emerald-500/[0.03]'
          : 'border-slate-200 dark:border-white/[0.08] bg-white/60 dark:bg-white/[0.02]'
      } backdrop-blur-sm p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-slate-300 dark:hover:border-white/20`}
    >
      <div className="space-y-4">
        {/* Header row: Title + Badges */}
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <h3 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 dark:text-white">
              {project.title}
            </h3>
            {project.isFlagship && (
              <span className="inline-flex items-center gap-1 text-[11px] font-mono font-medium px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                <Sparkles className="w-3 h-3" />
                Flagship
              </span>
            )}
            {project.clientProject && (
              <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                Client Project
              </span>
            )}
          </div>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 font-mono text-xs text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Source</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
            </a>
          )}
        </div>

        {/* Short description */}
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          {project.description}
        </p>

        {/* Engineering Highlights */}
        <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
          {project.keyContributions.slice(0, 3).map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 leading-relaxed">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap items-center gap-1.5 pt-1">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-0.5 rounded-md font-mono text-xs text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-white/[0.05] border border-slate-200/90 dark:border-white/[0.08]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Expandable Architecture Drawer Toggle */}
        {project.architecture && (
          <div className="pt-2">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
            >
              <span>{isExpanded ? 'Hide Architecture Notes' : 'View Architecture Notes'}</span>
              <motion.span
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="w-3.5 h-3.5" />
              </motion.span>
            </button>

            {/* Expandable Architecture Notes */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="mt-3.5 p-4 rounded-xl border border-slate-200 dark:border-white/[0.08] bg-slate-50/80 dark:bg-[#0c0d12] space-y-3.5 text-xs">
                    {/* Database design */}
                    <div>
                      <div className="flex items-center gap-1.5 font-mono font-semibold text-slate-900 dark:text-white mb-1">
                        <Database className="w-3.5 h-3.5 text-indigo-500" />
                        <span>Database Persistence Rationale</span>
                      </div>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        {project.architecture.databaseDesign}
                      </p>
                    </div>

                    {/* Data flow */}
                    <div>
                      <div className="flex items-center gap-1.5 font-mono font-semibold text-slate-900 dark:text-white mb-1">
                        <Network className="w-3.5 h-3.5 text-cyan-500" />
                        <span>Request & Queue Lifecycle</span>
                      </div>
                      <ol className="space-y-1 text-slate-600 dark:text-slate-400 list-decimal list-inside">
                        {project.architecture.dataFlow.map((step, sIdx) => (
                          <li key={sIdx} className="leading-relaxed">
                            {step}
                          </li>
                        ))}
                      </ol>
                    </div>

                    {/* Challenges */}
                    <div>
                      <div className="flex items-center gap-1.5 font-mono font-semibold text-slate-900 dark:text-white mb-1">
                        <ShieldAlert className="w-3.5 h-3.5 text-amber-500" />
                        <span>Key Engineering Challenges</span>
                      </div>
                      <ul className="space-y-1 text-slate-600 dark:text-slate-400 list-disc list-inside">
                        {project.architecture.keyChallenges.map((ch, cIdx) => (
                          <li key={cIdx} className="leading-relaxed">
                            {ch}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </motion.article>
  );
};
