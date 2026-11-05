import React from 'react';
import { Project } from '../../types';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { TechBadge } from './TechBadge';
import { 
  Database, 
  Cpu, 
  ShieldCheck, 
  Brain, 
  Github, 
  ArrowRight, 
  CheckCircle2, 
  Workflow, 
  ChevronRight 
} from 'lucide-react';

interface FlagshipShowcaseProps {
  project: Project;
  onOpenArchitecture: (project: Project) => void;
}

export const FlagshipShowcase: React.FC<FlagshipShowcaseProps> = ({
  project,
  onOpenArchitecture,
}) => {

  return (
    <div className="relative rounded-2xl border-2 border-emerald-500/30 dark:border-emerald-500/30 bg-white dark:bg-[#0D1017] p-6 sm:p-9 shadow-2xl shadow-emerald-500/[0.04]">
      {/* Top Banner & Flagship Indicator */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-200 dark:border-white/[0.08]">
        <div className="flex items-center gap-2.5">
          <Badge variant="emerald" size="md" pulse>
            Flagship Engineering Project
          </Badge>
          <span className="hidden sm:inline-block text-xs font-mono text-slate-400">
            • Dual-Database & Distributed Queues
          </span>
        </div>

        <div className="flex items-center gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/[0.08] text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.06] transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          )}
          <Button
            size="sm"
            variant="outline"
            onClick={() => onOpenArchitecture(project)}
            rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
          >
            System Specs
          </Button>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Narrative, Problem, Tech Stack */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <span className="font-mono text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block mb-1">
              {project.category}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              {project.title}
            </h3>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">
              {project.subtitle}
            </p>
          </div>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {project.description}
          </p>

          {/* Dual-Database Architecture Highlight Callout */}
          <div className="rounded-xl border border-indigo-500/20 bg-indigo-500/[0.04] p-4 space-y-2">
            <div className="flex items-center gap-2 font-mono text-xs font-semibold text-indigo-500 dark:text-indigo-400">
              <Database className="w-4 h-4" />
              <span>Engineered Dual-Database Workload Separation</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Separated analytical write-heavy metrics from authentication workflows:
              <strong className="text-slate-900 dark:text-white font-medium ml-1">MongoDB</strong> handles dynamic user identities & session tokens, while
              <strong className="text-slate-900 dark:text-white font-medium ml-1">PostgreSQL</strong> enforces relational integrity and indexed time-series snapshots for historical commit and contest velocity.
            </p>
          </div>

          {/* Key Engineering Contributions */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Key Engineering Contributions:
            </h4>
            <ul className="space-y-2.5">
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
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2.5">
              Applied Stack:
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <TechBadge key={tech} name={tech} />
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Interactive System Schematic & Metrics */}
        <div className="lg:col-span-5 space-y-5">
          {/* Architecture Schematic Diagram */}
          <div className="rounded-xl border border-slate-200 dark:border-white/[0.08] bg-slate-50/70 dark:bg-[#07090D] p-5 shadow-inner">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-white/[0.06] mb-4">
              <span className="font-mono text-xs font-semibold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
                System Ingestion Topology
              </span>
              <span className="text-[10px] font-mono text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded">
                Active Queue
              </span>
            </div>

            {/* Micro Flow Visual */}
            <div className="space-y-3 text-xs font-mono">
              <div className="p-3 rounded-lg bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.08] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-cyan-500" />
                  <span>REST API + JWT</span>
                </div>
                <span className="text-[10px] text-slate-400">Stateless</span>
              </div>

              <div className="flex justify-center my-1 text-slate-400">
                <ChevronRight className="w-4 h-4 rotate-90" />
              </div>

              {/* Dual DB Split */}
              <div className="grid grid-cols-2 gap-2">
                <div className="p-2.5 rounded-lg bg-indigo-500/[0.06] border border-indigo-500/20 text-[11px]">
                  <div className="flex items-center gap-1.5 font-bold text-indigo-400 mb-1">
                    <Database className="w-3.5 h-3.5" />
                    <span>PostgreSQL</span>
                  </div>
                  <span className="text-slate-500 dark:text-slate-400">
                    Snapshots & Time-Series
                  </span>
                </div>

                <div className="p-2.5 rounded-lg bg-emerald-500/[0.06] border border-emerald-500/20 text-[11px]">
                  <div className="flex items-center gap-1.5 font-bold text-emerald-400 mb-1">
                    <Database className="w-3.5 h-3.5" />
                    <span>MongoDB</span>
                  </div>
                  <span className="text-slate-500 dark:text-slate-400">
                    Auth & User Entities
                  </span>
                </div>
              </div>

              <div className="flex justify-center my-1 text-slate-400">
                <ChevronRight className="w-4 h-4 rotate-90" />
              </div>

              {/* BullMQ Worker */}
              <div className="p-3 rounded-lg bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.08] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Workflow className="w-4 h-4 text-amber-500" />
                  <span>BullMQ + Redis Worker</span>
                </div>
                <span className="text-[10px] text-amber-500 font-semibold">Async Job Sync</span>
              </div>

              <div className="flex justify-center my-1 text-slate-400">
                <ChevronRight className="w-4 h-4 rotate-90" />
              </div>

              {/* LLM Engine */}
              <div className="p-3 rounded-lg bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/30 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Brain className="w-4 h-4 text-emerald-400" />
                  <span className="font-sans font-semibold text-slate-900 dark:text-white">LLM Analyst</span>
                </div>
                <span className="text-[10px] text-emerald-400">Readiness Score</span>
              </div>
            </div>
          </div>

          {/* Architecture Metrics Grid */}
          <div className="grid grid-cols-2 gap-3">
            {project.metrics?.map((metric, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl border border-slate-200 dark:border-white/[0.08] bg-slate-50/50 dark:bg-white/[0.02]"
              >
                <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 block mb-0.5">
                  {metric.label}
                </span>
                <span className="text-sm font-semibold text-slate-900 dark:text-white">
                  {metric.value}
                </span>
              </div>
            ))}
          </div>

          {/* Full Architecture Case Study CTA */}
          <Button
            className="w-full justify-center"
            size="md"
            variant="secondary"
            onClick={() => onOpenArchitecture(project)}
            leftIcon={<Cpu className="w-4 h-4 text-emerald-500" />}
          >
            Explore Case Study & DB Schemas
          </Button>
        </div>
      </div>
    </div>
  );
};

