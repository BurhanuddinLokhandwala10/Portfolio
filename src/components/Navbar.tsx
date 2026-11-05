import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, FileText } from 'lucide-react';

interface NavbarProps {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
  onResumeClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  theme,
  onToggleTheme,
  onResumeClick,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/75 dark:bg-[#090a0f]/80 border-b border-slate-200/80 dark:border-white/[0.08] transition-colors">
      <div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          className="flex items-center gap-2.5 group"
        >
          <div className="w-8 h-8 rounded-lg bg-slate-900 dark:bg-white/[0.08] border border-slate-300 dark:border-white/10 flex items-center justify-center font-mono font-bold text-xs text-white dark:text-emerald-400 group-hover:border-emerald-500/50 transition-colors">
            BL
          </div>
          <span className="font-semibold text-sm tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
            Burhanuddin
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          </span>
        </a>

        <div className="flex items-center gap-4 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">
          <nav className="hidden sm:flex items-center gap-4">
            <a href="#about" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              About
            </a>
            <a href="#projects" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Projects
            </a>
            <a href="#skills" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Skills
            </a>
            <a href="#milestones" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Milestones
            </a>
            <a href="#contact" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-2 sm:pl-3 sm:border-l sm:border-slate-200 dark:sm:border-white/10">
            <button
              onClick={onResumeClick}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03] hover:bg-slate-100 dark:hover:bg-white/[0.08] text-slate-800 dark:text-slate-200 text-xs font-mono transition-all hover:scale-[1.02] active:scale-[0.98]"
              aria-label="View Resume"
            >
              <FileText className="w-3.5 h-3.5 text-emerald-500" />
              <span>Resume</span>
            </button>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={onToggleTheme}
              className="p-1.5 rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03] hover:bg-slate-100 dark:hover:bg-white/[0.08] text-slate-600 dark:text-slate-300 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </motion.button>
          </div>
        </div>
      </div>
    </header>
  );
};
