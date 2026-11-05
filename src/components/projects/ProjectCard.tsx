import React from 'react';
import { Project } from '../../types';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { TechBadge } from './TechBadge';
import { 
  Github, 
  ArrowRight, 
  CheckCircle2, 
  Radio, 
  Briefcase 
} from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onOpenArchitecture: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onOpenArchitecture,
}) => {
  return (
    <Card hoverEffect className="flex flex-col justify-between h-full group p-6 sm:p-7">
      <div className="space-y-5">
        {/* Card Header & Category Badge */}
        <div className="flex items-center justify-between gap-2">
          {project.clientProject ? (
            <Badge variant="cyan" size="sm" className="font-sans">
              <Briefcase className="w-3 h-3 mr-1" />
              Live Client Project
            </Badge>
          ) : (
            <Badge variant="emerald" size="sm" className="font-sans">
              <Radio className="w-3 h-3 mr-1" />
              {project.category}
            </Badge>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="p-1.5 rounded-lg border border-slate-200 dark:border-white/[0.08] text-slate-500 hover:text-black dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.06] transition-colors"
              aria-label={`${project.title} GitHub repository`}
            >
              <Github className="w-4 h-4" />
            </a>
          )}
        </div>

        {/* Title & Tagline */}
        <div>
          <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-0.5">
            {project.subtitle}
          </p>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          {project.description}
        </p>

        {/* Key Engineering Contributions */}
        <div className="space-y-2 pt-1 border-t border-slate-200/80 dark:border-white/[0.06]">
          <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1">
            Core Engineering Highlights:
          </span>
          <ul className="space-y-1.5">
            {project.keyContributions.slice(0, 3).map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300 leading-relaxed"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Metrics Grid if available */}
        {project.metrics && (
          <div className="grid grid-cols-2 gap-2 pt-1">
            {project.metrics.slice(0, 2).map((m, idx) => (
              <div
                key={idx}
                className="p-2 rounded-lg bg-slate-50 dark:bg-white/[0.02] border border-slate-200/90 dark:border-white/[0.06]"
              >
                <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 block">
                  {m.label}
                </span>
                <span className="text-xs font-semibold text-slate-900 dark:text-white">
                  {m.value}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Tech Stack Pills */}
        <div className="pt-2">
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <TechBadge key={tech} name={tech} />
            ))}
          </div>
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="mt-6 pt-4 border-t border-slate-200/80 dark:border-white/[0.06] flex items-center justify-between">
        <Button
          size="sm"
          variant="outline"
          onClick={() => onOpenArchitecture(project)}
          rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
        >
          {project.architecture ? 'Architecture & Specs' : 'Project Details'}
        </Button>

        {project.clientProject && (
          <span className="text-[11px] font-mono text-cyan-600 dark:text-cyan-400 font-medium">
            Production Client
          </span>
        )}
      </div>
    </Card>
  );
};

