import React, { useEffect } from 'react';
import { X, Printer } from 'lucide-react';
import { PROFILE } from '../data/profile';
import { EDUCATION_DATA, ACHIEVEMENTS_DATA } from '../data/achievements';
import { PROJECTS } from '../data/projects';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-3xl rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xl z-10 my-8 overflow-hidden">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 dark:border-zinc-800">
          <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
            Resume Preview
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 px-3 py-1 text-xs rounded border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200"
            >
              <Printer className="w-3.5 h-3.5" />
              Print / Save PDF
            </button>
            <button
              onClick={onClose}
              className="p-1 rounded text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Sheet */}
        <div className="p-6 sm:p-10 max-h-[80vh] overflow-y-auto text-sm text-zinc-800 dark:text-zinc-200 space-y-6">
          {/* Header */}
          <div className="border-b border-zinc-200 dark:border-zinc-800 pb-5">
            <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
              {PROFILE.name}
            </h1>
            <p className="text-zinc-600 dark:text-zinc-400 mt-0.5">
              {PROFILE.role} — {PROFILE.location}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-500 dark:text-zinc-400 mt-3 font-mono">
              <a href={`mailto:${PROFILE.email}`} className="hover:underline">
                {PROFILE.email}
              </a>
              <span>·</span>
              <a href={PROFILE.social.github} target="_blank" rel="noreferrer" className="hover:underline">
                GitHub
              </a>
              <span>·</span>
              <a href={PROFILE.social.linkedin} target="_blank" rel="noreferrer" className="hover:underline">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-500 mb-2">
              Education
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <div>
                <strong className="text-zinc-900 dark:text-zinc-100">
                  {EDUCATION_DATA.institution}
                </strong>
                <p className="text-xs text-zinc-600 dark:text-zinc-400">
                  {EDUCATION_DATA.degree} in {EDUCATION_DATA.field}
                </p>
              </div>
              <div className="text-xs font-mono text-zinc-600 dark:text-zinc-400">
                CGPA: {EDUCATION_DATA.score} | {EDUCATION_DATA.timeline}
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-500 mb-2">
              Technical Skills
            </h2>
            <div className="space-y-1 text-xs text-zinc-700 dark:text-zinc-300">
              <p><strong className="text-zinc-900 dark:text-zinc-100">Languages:</strong> C++, JavaScript (ES6+), Python</p>
              <p><strong className="text-zinc-900 dark:text-zinc-100">Backend:</strong> Node.js, Express.js, REST APIs, JWT, Socket.IO, Redis, BullMQ</p>
              <p><strong className="text-zinc-900 dark:text-zinc-100">Databases:</strong> PostgreSQL, MongoDB, Mongoose, MongoDB Atlas</p>
              <p><strong className="text-zinc-900 dark:text-zinc-100">Tools & Core Concepts:</strong> Git, GitHub, Vercel, Render, MVC Architecture, Data Structures & Algorithms</p>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-500 mb-3">
              Key Projects
            </h2>
            <div className="space-y-4">
              {PROJECTS.map((p) => (
                <div key={p.id} className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <strong className="text-zinc-900 dark:text-zinc-100">
                      {p.title}
                    </strong>
                    <span className="text-xs font-mono text-zinc-500">
                      {p.techStack.join(', ')}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {p.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-500 mb-2">
              Achievements & Residencies
            </h2>
            <div className="space-y-2 text-xs">
              {ACHIEVEMENTS_DATA.map((ach) => (
                <div key={ach.id} className="flex justify-between items-start gap-2">
                  <div>
                    <strong className="text-zinc-900 dark:text-zinc-100">{ach.title}</strong> —{' '}
                    <span className="text-zinc-600 dark:text-zinc-400">{ach.organization}</span>
                  </div>
                  <span className="font-mono text-zinc-500">{ach.year}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
