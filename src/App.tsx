import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from './hooks/useTheme';
import { Navbar } from './components/Navbar';
import { ResumeModal } from './components/ResumeModal';
import { ProjectCard } from './components/ProjectCard';
import { SkillsGrid } from './components/SkillsGrid';
import { MilestonesSection } from './components/MilestonesSection';
import { ContactSection } from './components/ContactSection';
import { PROFILE } from './data/profile';
import { PROJECTS } from './data/projects';
import { fadeInUp, viewportOnce } from './utils/animations';
import { 
  ArrowRight, 
  FileText, 
  Github, 
  Linkedin 
} from 'lucide-react';

export const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#090a0f] text-slate-800 dark:text-slate-200 antialiased selection:bg-emerald-500/20 selection:text-emerald-500 transition-colors duration-200 relative">
      {/* Subtle ambient lighting */}
      <div 
        aria-hidden="true" 
        className="fixed inset-0 bg-ambient-gradient pointer-events-none -z-10" 
      />

      {/* Sticky Blurred Header */}
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        onResumeClick={() => setIsResumeOpen(true)}
      />

      <main className="max-w-3xl mx-auto px-6 py-10 sm:py-16 space-y-16">
        {/* Hero Section */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="space-y-6 pt-2"
        >
          {/* Availability Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>Available for SWE & Backend Internships</span>
          </div>

          {/* Name & Headline */}
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              {PROFILE.name}
            </h1>
            <p className="text-base sm:text-lg font-medium text-slate-600 dark:text-slate-400">
              {PROFILE.role} · {PROFILE.location}
            </p>
          </div>

          {/* Concise Bio */}
          <p className="text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300 max-w-2xl">
            {PROFILE.summary} Maintaining a <strong className="text-slate-900 dark:text-white font-semibold">9.6/10 CGPA</strong> in Information Technology at Vidyalankar Institute of Technology (VIT Mumbai).
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-all shadow-xs"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={() => setIsResumeOpen(true)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.03] hover:bg-slate-100 dark:hover:bg-white/[0.08] text-slate-800 dark:text-slate-200 text-xs font-semibold transition-all shadow-xs"
            >
              <FileText className="w-3.5 h-3.5 text-emerald-500" />
              <span>Resume</span>
            </button>

            <div className="flex items-center gap-2 pl-2">
              <a
                href={PROFILE.social.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.03] text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.08] transition-all"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={PROFILE.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.03] text-slate-700 dark:text-slate-300 hover:text-[#0A66C2] dark:hover:text-[#0A66C2] hover:bg-slate-100 dark:hover:bg-white/[0.08] transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.section>

        {/* About Section */}
        <motion.section
          id="about"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="space-y-4 pt-6 border-t border-slate-200/80 dark:border-white/[0.08]"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Engineering Focus
            </h2>
          </div>

          <div className="space-y-3 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            <p>
              I specialize in backend engineering—structuring scalable APIs, choosing the right database for specific persistence requirements, and managing asynchronous workflows.
            </p>
            <p>
              In my projects, I use <strong className="text-slate-900 dark:text-white font-medium">dual-database architectures</strong> (pairing PostgreSQL for structured time-series snapshots with MongoDB for dynamic user identity), manage background jobs using <strong className="text-slate-900 dark:text-white font-medium">Redis & BullMQ</strong> to avoid third-party rate limits, and secure transport layers with stateless JWT middleware.
            </p>
          </div>

          {/* Quick Technical Pillars Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="p-3.5 rounded-xl border border-slate-200 dark:border-white/[0.08] bg-white/50 dark:bg-white/[0.02] space-y-1">
              <span className="text-xs font-mono font-semibold text-emerald-600 dark:text-emerald-400 block">
                API Architecture
              </span>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                RESTful routing, JWT authorization guards, and structured controllers.
              </p>
            </div>

            <div className="p-3.5 rounded-xl border border-slate-200 dark:border-white/[0.08] bg-white/50 dark:bg-white/[0.02] space-y-1">
              <span className="text-xs font-mono font-semibold text-indigo-600 dark:text-indigo-400 block">
                Dual-Database
              </span>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                PostgreSQL relational snapshots + MongoDB document collections.
              </p>
            </div>

            <div className="p-3.5 rounded-xl border border-slate-200 dark:border-white/[0.08] bg-white/50 dark:bg-white/[0.02] space-y-1">
              <span className="text-xs font-mono font-semibold text-cyan-600 dark:text-cyan-400 block">
                Background Queues
              </span>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Redis-backed BullMQ workers with exponential backoff retries.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Selected Work Section */}
        <motion.section
          id="projects"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="space-y-6 pt-6 border-t border-slate-200/80 dark:border-white/[0.08]"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-500" />
              <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Selected Work
              </h2>
            </div>
            <span className="text-xs font-mono text-slate-400">
              {PROJECTS.length} Projects
            </span>
          </div>

          <div className="space-y-6">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </motion.section>

        {/* Technical Skills Section */}
        <motion.section
          id="skills"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="space-y-5 pt-6 border-t border-slate-200/80 dark:border-white/[0.08]"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-indigo-500" />
            <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Technical Competencies
            </h2>
          </div>

          <SkillsGrid />
        </motion.section>

        {/* Milestones & Education Section */}
        <motion.section
          id="milestones"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="space-y-5 pt-6 border-t border-slate-200/80 dark:border-white/[0.08]"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Education & Achievements
            </h2>
          </div>

          <MilestonesSection />
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="space-y-5 pt-6 border-t border-slate-200/80 dark:border-white/[0.08]"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Get in Touch
            </h2>
          </div>

          <ContactSection />
        </motion.section>

        {/* Minimal Footer */}
        <footer className="pt-8 border-t border-slate-200/80 dark:border-white/[0.08] text-xs font-mono text-slate-400 dark:text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>Burhanuddin Lokhandwala · Mumbai, India</span>
          </div>
          <span>VIT Mumbai · IT (CGPA 9.6)</span>
        </footer>
      </main>

      {/* Resume Preview Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
};

export default App;
