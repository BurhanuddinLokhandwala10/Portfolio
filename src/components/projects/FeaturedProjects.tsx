import React, { useState } from 'react';
import { Project } from '../../types';
import { PROJECTS } from '../../data/projects';
import { FlagshipShowcase } from './FlagshipShowcase';
import { ProjectCard } from './ProjectCard';
import { ArchitectureModal } from './ArchitectureModal';
import { Badge } from '../ui/Badge';

export const FeaturedProjects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState<'all' | 'flagship' | 'realtime' | 'client'>('all');

  const flagshipProject = PROJECTS.find((p) => p.isFlagship) || PROJECTS[0];
  const secondaryProjects = PROJECTS.filter((p) => !p.isFlagship);

  const handleOpenArchitecture = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const filteredSecondary = secondaryProjects.filter((p) => {
    if (filter === 'all') return true;
    if (filter === 'realtime') return p.category === 'Real-Time Communication';
    if (filter === 'client') return p.clientProject;
    return true;
  });

  return (
    <section id="projects" className="py-20 sm:py-28 border-t border-slate-200/80 dark:border-white/[0.06] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div className="max-w-2xl">
            <Badge variant="emerald" size="sm">
              Production & Distributed Systems
            </Badge>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mt-1">
              Featured Engineering Projects
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed mt-1">
              Deep-dive into production architectures, dual-database implementations, asynchronous job queues, and real-time protocols.
            </p>
          </div>

          {/* Quick Filter Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-lg border border-slate-200 dark:border-white/[0.08] bg-slate-50 dark:bg-white/[0.02]">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1 rounded-md text-xs font-mono transition-colors ${
                filter === 'all'
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white'
              }`}
            >
              All (3)
            </button>
            <button
              onClick={() => setFilter('realtime')}
              className={`px-3 py-1 rounded-md text-xs font-mono transition-colors ${
                filter === 'realtime'
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white'
              }`}
            >
              Real-Time
            </button>
            <button
              onClick={() => setFilter('client')}
              className={`px-3 py-1 rounded-md text-xs font-mono transition-colors ${
                filter === 'client'
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white'
              }`}
            >
              Client Work
            </button>
          </div>
        </div>

        {/* Flagship Project Showcase */}
        {(filter === 'all' || filter === 'flagship') && (
          <div className="mb-12">
            <FlagshipShowcase
              project={flagshipProject}
              onOpenArchitecture={handleOpenArchitecture}
            />
          </div>
        )}

        {/* Secondary Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {filteredSecondary.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenArchitecture={handleOpenArchitecture}
            />
          ))}
        </div>
      </div>

      {/* Architecture Deep Dive Modal */}
      <ArchitectureModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

