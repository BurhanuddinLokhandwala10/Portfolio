import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from './hooks/useTheme';
import { Navbar } from './components/Navbar';
import { ResumeModal } from './components/ResumeModal';
import { HeroCodePreview } from './components/HeroCodePreview';
import { FlagshipProjectShowcase } from './components/FlagshipProjectShowcase';
import { SecondaryProjectCard } from './components/SecondaryProjectCard';
import { BentoCompetencies } from './components/BentoCompetencies';
import { ContactSection } from './components/ContactSection';
import { PROFILE } from './data/profile';
import { PROJECTS } from './data/projects';
import { fadeInUp, viewportOnce } from './utils/animations';
import { 
  ArrowRight, 
  FileText, 
  Github, 
  Linkedin, 
  MapPin, 
  GraduationCap, 
  Layers, 
  Database, 
  Cpu 
} from 'lucide-react';

export const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const flagshipProject = PROJECTS.find((p) => p.isFlagship) || PROJECTS[0];
  const secondaryProjects = PROJECTS.filter((p) => !p.isFlagship);

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#08090d] text-slate-900 dark:text-slate-100 antialiased selection:bg-emerald-500/20 selection:text-emerald-500 transition-colors duration-200 relative overflow-x-hidden">
      {/* Background Grid Pattern with Radial Vignette */}
      <div 
        aria-hidden="true" 
        className="fixed inset-0 grid-bg-overlay pointer-events-none -z-10 opacity-70 dark:opacity-80" 
      />

      {/* Ambient Top Glow */}
      <div 
        aria-hidden="true" 
        className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-emerald-500/10 via-cyan-500/5 to-transparent blur-3xl pointer-events-none -z-10" 
      />

      {/* Sticky Blur Header */}
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        onResumeClick={() => setIsResumeOpen(true)}
      />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-24 sm:space-y-32">
        {/* ===================== HERO SECTION ===================== */}
        <section id="home" className="pt-4 sm:pt-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 items-center">
            {/* Left Column: Headline & Action CTAs */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="lg:col-span-7 space-y-6"
            >
              {/* Availability & Location Pills */}
              <div className="flex flex-wrap items-center gap-2.5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 shadow-xs">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span>Available for Backend Roles</span>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/[0.08] text-slate-600 dark:text-slate-400">
                  <MapPin className="w-3 h-3 text-emerald-500" />
                  <span>Mumbai, India</span>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/[0.08] text-slate-600 dark:text-slate-400">
                  <GraduationCap className="w-3.5 h-3.5 text-cyan-500" />
                  <span>VIT Mumbai · CGPA 9.6</span>
                </div>
              </div>

              {/* Main Headline */}
              <div className="space-y-3">
                <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
                  Building reliable backend systems and thoughtful digital experiences.
                </h1>

                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal max-w-2xl">
                  I'm Burhanuddin, a backend-focused software developer passionate about building scalable applications, designing APIs, and solving engineering problems.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs sm:text-sm font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-all shadow-md active:scale-95"
                >
                  <span>Explore Projects</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <button
                  onClick={() => setIsResumeOpen(true)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-white/[0.04] hover:bg-slate-100 dark:hover:bg-white/[0.08] text-slate-800 dark:text-slate-200 text-xs sm:text-sm font-semibold transition-all active:scale-95 shadow-xs"
                >
                  <FileText className="w-4 h-4 text-emerald-500" />
                  <span>Download Resume</span>
                </button>

                {/* Social Icons */}
                <div className="flex items-center gap-2 pl-2 sm:pl-4 sm:border-l sm:border-slate-200 dark:sm:border-white/10">
                  <a
                    href={PROFILE.social.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/[0.04] text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.08] transition-all hover:scale-105"
                    aria-label="GitHub Profile"
                  >
                    <Github className="w-4 h-4" />
                  </a>

                  <a
                    href={PROFILE.social.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/[0.04] text-slate-700 dark:text-slate-300 hover:text-[#0A66C2] dark:hover:text-[#0A66C2] hover:bg-slate-100 dark:hover:bg-white/[0.08] transition-all hover:scale-105"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Sleek Backend Specimen Preview */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="lg:col-span-5"
            >
              <HeroCodePreview />
            </motion.div>
          </div>
        </section>

        {/* ===================== ABOUT / PHILOSOPHY ===================== */}
        <motion.section
          id="about"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="space-y-6 pt-6 border-t border-slate-200/80 dark:border-white/[0.08]"
        >
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Engineering Philosophy
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              How I Approach System Design
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              I prioritize architectural predictability, data consistency, and maintainable boundaries over superficial complexity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="card-surface rounded-2xl p-6 space-y-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                <Layers className="w-4 h-4" />
              </div>
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                Stateless RESTful APIs
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Clean MVC separation where Express routers delegate to testable services, guarded with stateless JWT authentication and role-based permissions.
              </p>
            </div>

            <div className="card-surface rounded-2xl p-6 space-y-3">
              <div className="w-9 h-9 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
                <Database className="w-4 h-4" />
              </div>
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                Workload-Driven Persistence
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Utilizing PostgreSQL for relational consistency and time-series snapshots, paired with MongoDB for rapid document traversal and session identities.
              </p>
            </div>

            <div className="card-surface rounded-2xl p-6 space-y-3">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center">
                <Cpu className="w-4 h-4" />
              </div>
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                Asynchronous Task Queues
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Offloading third-party API synchronization to Redis and BullMQ background workers with exponential backoff to safeguard request latency.
              </p>
            </div>
          </div>
        </motion.section>

        {/* ===================== FEATURED PROJECTS ===================== */}
        <section id="projects" className="space-y-8 pt-6 border-t border-slate-200/80 dark:border-white/[0.08]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                Featured Engineering
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mt-1">
                Selected Projects
              </h2>
            </div>
            <span className="text-xs font-mono text-slate-500">
              3 Production & Architecture Showcases
            </span>
          </div>

          {/* Flagship Project Showcase */}
          <FlagshipProjectShowcase project={flagshipProject} />

          {/* Secondary Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {secondaryProjects.map((project) => (
              <SecondaryProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* ===================== BENTO COMPETENCIES & MILESTONES ===================== */}
        <section id="skills" className="space-y-8 pt-6 border-t border-slate-200/80 dark:border-white/[0.08]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                Skills & Milestones
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mt-1">
                Technical Competencies
              </h2>
            </div>
            <span className="text-xs font-mono text-slate-500">
              Languages, Databases & Verified Residencies
            </span>
          </div>

          <BentoCompetencies />
        </section>

        {/* ===================== CONTACT SECTION ===================== */}
        <section id="contact" className="space-y-8 pt-6 border-t border-slate-200/80 dark:border-white/[0.08]">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Recruiter Inquiries
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Let's Discuss Engineering
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              Open to software engineering internships and backend roles. Feel free to copy my direct email or send a note below.
            </p>
          </div>

          <ContactSection />
        </section>

        {/* ===================== FOOTER ===================== */}
        <footer className="pt-10 pb-6 border-t border-slate-200/80 dark:border-white/[0.08] text-xs font-mono text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-slate-700 dark:text-slate-300 font-medium">All Backend Subsystems Operational</span>
          </div>

          <div className="flex items-center gap-4">
            <a href="#home" className="hover:text-emerald-500 transition-colors">Top</a>
            <span>·</span>
            <span>VIT Mumbai · IT (CGPA: 9.6/10)</span>
            <span>·</span>
            <span>© {new Date().getFullYear()} Burhanuddin</span>
          </div>
        </footer>
      </main>

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
};

export default App;
