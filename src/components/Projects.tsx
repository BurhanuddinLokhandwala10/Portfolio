import React from 'react';
import { SectionHeader } from './SectionHeader';
import { ProjectCard } from './ProjectCard';
import { PROJECTS } from '../data';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 lg:py-32 relative scroll-mt-20">
      <div className="max-w-[1280px] mx-auto px-8 lg:px-16">
        <SectionHeader
          label="03 / Projects"
          title="Things I've built."
          subtext="Case studies of production software, asynchronous architectures, and developer analytics platforms."
        />

        <div className="space-y-12 lg:space-y-16">
          {PROJECTS.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

