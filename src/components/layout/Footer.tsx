import React from 'react';
import { PROFILE } from '../../data/profile';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200/80 dark:border-white/[0.08] bg-white/50 dark:bg-[#07080C] py-12 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200/80 dark:border-white/[0.06]">
          {/* Logo & Headline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-md bg-slate-900 dark:bg-white/[0.08] border border-slate-300 dark:border-white/15 flex items-center justify-center font-mono font-bold text-xs text-white dark:text-emerald-400">
                BL
              </div>
              <span className="font-semibold text-sm text-slate-900 dark:text-white">
                {PROFILE.name}
              </span>
            </div>
            <p className="mt-1.5 text-xs text-slate-500 dark:text-slate-400 max-w-sm">
              Backend-focused software developer passionate about scalable APIs, queues, and database architecture.
            </p>
          </div>

          {/* Quick Links & Back to Top */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-600 dark:text-slate-400 font-medium">
            <a href="#home" className="hover:text-emerald-500 transition-colors">Home</a>
            <a href="#about" className="hover:text-emerald-500 transition-colors">About</a>
            <a href="#projects" className="hover:text-emerald-500 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-emerald-500 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-emerald-500 transition-colors">Experience</a>
            <a href="#contact" className="hover:text-emerald-500 transition-colors">Contact</a>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 p-1.5 rounded-lg border border-slate-200 dark:border-white/[0.08] text-slate-500 hover:text-black dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.06] transition-colors ml-2"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Credits & Heartbeat */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500 dark:text-slate-500">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>All Backend Subsystems Operational</span>
          </div>

          <div>
            © {new Date().getFullYear()} {PROFILE.name}. Designed & Built with Precision.
          </div>
        </div>
      </div>
    </footer>
  );
};

