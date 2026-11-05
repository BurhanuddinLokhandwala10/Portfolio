import React from 'react';
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
    <nav className="flex items-center justify-between py-6 text-sm">
      <a
        href="#"
        className="font-medium tracking-tight text-zinc-900 dark:text-zinc-100 hover:opacity-80 transition-opacity"
      >
        Burhanuddin Lokhandwala
      </a>

      <div className="flex items-center gap-5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
        <a href="#about" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
          About
        </a>
        <a href="#projects" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
          Projects
        </a>
        <a href="#skills" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
          Skills
        </a>
        <a href="#achievements" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
          Achievements
        </a>
        <a href="#contact" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
          Contact
        </a>

        <div className="flex items-center gap-2 pl-3 border-l border-zinc-200 dark:border-zinc-800">
          <button
            onClick={onResumeClick}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 transition-colors text-xs"
            aria-label="View Resume"
          >
            <FileText className="w-3.5 h-3.5 text-zinc-500" />
            Resume
          </button>

          <button
            onClick={onToggleTheme}
            className="p-1.5 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 transition-colors"
            aria-label="Toggle color theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-zinc-300" />
            ) : (
              <Moon className="w-4 h-4 text-zinc-700" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};
