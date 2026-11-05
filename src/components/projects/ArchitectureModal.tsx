import React from 'react';
import { Project } from '../../types';
import { Modal } from '../ui/Modal';
import { Database, Network, ShieldAlert, Cpu } from 'lucide-react';
import { TechBadge } from './TechBadge';

interface ArchitectureModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ArchitectureModal: React.FC<ArchitectureModalProps> = ({
  project,
  isOpen,
  onClose,
}) => {
  if (!project || !project.architecture) return null;

  const { architecture } = project;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={`${project.title} — System Architecture`}
      subtitle={project.tagline}
      maxWidth="4xl"
    >
      <div className="space-y-6">
        {/* Architecture Overview */}
        <div className="rounded-xl border border-slate-200 dark:border-white/[0.08] bg-slate-50 dark:bg-white/[0.02] p-4 sm:p-5">
          <div className="flex items-center gap-2 mb-2 font-mono text-xs uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-semibold">
            <Cpu className="w-4 h-4" />
            <span>Architecture Summary</span>
          </div>
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            {architecture.summary}
          </p>
        </div>

        {/* Database Rationale */}
        <div>
          <h4 className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider font-mono mb-2.5">
            <Database className="w-4 h-4 text-indigo-500" />
            <span>Database Schema & Persistence Design</span>
          </h4>
          <div className="p-4 rounded-xl border border-indigo-500/20 bg-indigo-500/[0.04] text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
            {architecture.databaseDesign}
          </div>
        </div>

        {/* Data Flow Lifecycle */}
        <div>
          <h4 className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider font-mono mb-2.5">
            <Network className="w-4 h-4 text-cyan-500" />
            <span>Request Lifecycle & Data Flow</span>
          </h4>
          <ol className="space-y-2.5">
            {architecture.dataFlow.map((step, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 p-3 rounded-lg border border-slate-200/90 dark:border-white/[0.06] bg-slate-50/70 dark:bg-white/[0.02] text-xs sm:text-sm text-slate-700 dark:text-slate-300"
              >
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-cyan-500/10 text-cyan-500 dark:text-cyan-400 font-mono text-xs font-semibold flex items-center justify-center">
                  {idx + 1}
                </span>
                <span className="leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* API Endpoint Contracts */}
        <div>
          <h4 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider font-mono mb-2.5">
            Key Endpoint Contracts
          </h4>
          <div className="rounded-xl border border-slate-200 dark:border-white/[0.08] overflow-hidden">
            <div className="divide-y divide-slate-200 dark:divide-white/[0.08]">
              {architecture.endpoints.map((ep, idx) => (
                <div
                  key={idx}
                  className="p-3 sm:p-3.5 bg-slate-50/50 dark:bg-white/[0.01] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono"
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        ep.method === 'GET'
                          ? 'bg-blue-500/10 text-blue-500 dark:text-blue-400'
                          : ep.method === 'POST'
                          ? 'bg-emerald-500/10 text-emerald-500 dark:text-emerald-400'
                          : ep.method === 'WS'
                          ? 'bg-amber-500/10 text-amber-500 dark:text-amber-400'
                          : 'bg-purple-500/10 text-purple-400'
                      }`}
                    >
                      {ep.method}
                    </span>
                    <span className="text-slate-900 dark:text-white font-medium">
                      {ep.path}
                    </span>
                  </div>
                  <span className="text-slate-500 dark:text-slate-400 font-sans text-xs">
                    {ep.description}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technical Challenges & Solutions */}
        <div>
          <h4 className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider font-mono mb-2.5">
            <ShieldAlert className="w-4 h-4 text-amber-500" />
            <span>Key Engineering Challenges & Trade-Offs</span>
          </h4>
          <div className="space-y-2">
            {architecture.keyChallenges.map((challenge, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-lg border border-amber-500/20 bg-amber-500/[0.04] text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed"
              >
                {challenge}
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div className="pt-2">
          <span className="block text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
            Technologies Applied
          </span>
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <TechBadge key={tech} name={tech} />
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
};

