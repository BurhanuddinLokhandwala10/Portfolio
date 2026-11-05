import React from 'react';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { PROFILE } from '../../data/profile';
import { EDUCATION_DATA, ACHIEVEMENTS_DATA } from '../../data/achievements';
import { PROJECTS } from '../../data/projects';
import { 
  Printer, 
  Mail, 
  MapPin 
} from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Burhanuddin Lokhandwala — Resume"
      subtitle="Backend-Focused Software Developer • B.Tech IT (VIT Mumbai, 9.6 CGPA)"
      maxWidth="4xl"
    >
      <div className="space-y-6 text-slate-800 dark:text-slate-200">
        {/* Action Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-200 dark:border-white/[0.08]">
          <div className="text-xs font-mono text-slate-500 dark:text-slate-400">
            Current Document Version: <strong>2026.1</strong>
          </div>
          <div className="flex items-center gap-2">
            <Button
              size="sm"
              variant="outline"
              onClick={handlePrint}
              leftIcon={<Printer className="w-3.5 h-3.5" />}
            >
              Print / Save PDF
            </Button>
            <Button
              size="sm"
              variant="primary"
              as="a"
              href={`mailto:${PROFILE.email}?subject=Interview%20Inquiry%20-%20Burhanuddin%20Lokhandwala`}
              leftIcon={<Mail className="w-3.5 h-3.5" />}
            >
              Email Directly
            </Button>
          </div>
        </div>

        {/* Printable / Viewable Resume Sheet */}
        <div className="p-6 sm:p-8 rounded-xl bg-slate-50 dark:bg-[#07090D] border border-slate-200 dark:border-white/[0.08] space-y-6 text-xs sm:text-sm font-sans">
          {/* Header */}
          <div className="border-b border-slate-200 dark:border-white/[0.08] pb-5">
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              {PROFILE.name}
            </h1>
            <p className="text-emerald-600 dark:text-emerald-400 font-medium font-mono text-xs mt-0.5">
              {PROFILE.role}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500 dark:text-slate-400 mt-2">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-slate-400" />
                {PROFILE.location}
              </span>
              <span>•</span>
              <a href={`mailto:${PROFILE.email}`} className="text-emerald-500 hover:underline">
                {PROFILE.email}
              </a>
              <span>•</span>
              <a href={PROFILE.social.github} target="_blank" rel="noreferrer" className="hover:underline">
                github.com/BurhanuddinLokhandwala
              </a>
              <span>•</span>
              <a href={PROFILE.social.linkedin} target="_blank" rel="noreferrer" className="hover:underline">
                linkedin.com/in/burhanuddin-lokhandwala
              </a>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Education
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <div>
                <strong className="text-slate-900 dark:text-white">
                  {EDUCATION_DATA.institution}
                </strong>
                <div className="text-xs text-slate-600 dark:text-slate-400">
                  {EDUCATION_DATA.degree} in {EDUCATION_DATA.field}
                </div>
              </div>
              <div className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold">
                CGPA: {EDUCATION_DATA.score} | {EDUCATION_DATA.timeline}
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2 border-t border-slate-200 dark:border-white/[0.08] pt-4">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Technical Proficiencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div>
                <strong className="text-slate-900 dark:text-white font-mono">Languages: </strong>
                <span>C++, JavaScript (ES6+), Python</span>
              </div>
              <div>
                <strong className="text-slate-900 dark:text-white font-mono">Backend: </strong>
                <span>Node.js, Express.js, REST APIs, JWT, Socket.IO, Redis, BullMQ</span>
              </div>
              <div>
                <strong className="text-slate-900 dark:text-white font-mono">Databases: </strong>
                <span>PostgreSQL, MongoDB, Mongoose, MongoDB Atlas</span>
              </div>
              <div>
                <strong className="text-slate-900 dark:text-white font-mono">Concepts & Tools: </strong>
                <span>MVC Architecture, Dual-DB, Git, GitHub, Vercel, Render</span>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-4 border-t border-slate-200 dark:border-white/[0.08] pt-4">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Selected Technical Projects
            </h2>

            {PROJECTS.map((proj) => (
              <div key={proj.id} className="space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div className="flex items-center gap-2">
                    <strong className="text-slate-900 dark:text-white">
                      {proj.title}
                    </strong>
                    {proj.isFlagship && (
                      <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                        Flagship
                      </span>
                    )}
                  </div>
                  <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                    {proj.techStack.slice(0, 5).join(', ')}
                  </span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {proj.tagline}
                </p>
                <ul className="list-disc list-inside text-xs text-slate-600 dark:text-slate-400 space-y-1 pl-1">
                  {proj.keyContributions.slice(0, 2).map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Achievements */}
          <div className="space-y-3 border-t border-slate-200 dark:border-white/[0.08] pt-4">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Certifications & Recognitions
            </h2>
            <div className="space-y-2 text-xs">
              {ACHIEVEMENTS_DATA.map((ach) => (
                <div key={ach.id} className="flex justify-between items-start gap-2">
                  <div>
                    <strong className="text-slate-900 dark:text-white">
                      {ach.title}
                    </strong>{' '}
                    — <span className="text-slate-500 dark:text-slate-400">{ach.organization}</span>
                  </div>
                  <span className="text-xs font-mono text-slate-400 flex-shrink-0">
                    {ach.year}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

