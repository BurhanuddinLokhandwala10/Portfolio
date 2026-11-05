import React, { useState } from 'react';
import { useTheme } from './hooks/useTheme';
import { Navbar } from './components/Navbar';
import { ResumeModal } from './components/ResumeModal';
import { PROFILE } from './data/profile';
import { PROJECTS } from './data/projects';
import { SKILL_CATEGORIES } from './data/skills';
import { EDUCATION_DATA, ACHIEVEMENTS_DATA } from './data/achievements';
import { 
  ArrowUpRight, 
  Copy, 
  Check, 
  Send, 
  Github, 
  Linkedin, 
  FileText 
} from 'lucide-react';

export const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Simple, clean contact form state
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'sent'>('idle');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('sent');
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setFormStatus('idle'), 4000);
    }, 700);
  };

  return (
    <div className="min-h-screen bg-[#faf9f6] dark:bg-[#0f1012] text-zinc-800 dark:text-zinc-200 antialiased selection:bg-zinc-200 dark:selection:bg-zinc-800 transition-colors">
      <div className="max-w-2xl mx-auto px-6 py-8 sm:py-16 space-y-16">
        {/* Navigation */}
        <Navbar
          theme={theme}
          onToggleTheme={toggleTheme}
          onResumeClick={() => setIsResumeOpen(true)}
        />

        {/* Hero / Introduction */}
        <section className="space-y-4 pt-4">
          <div className="space-y-1">
            <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
              Burhanuddin Lokhandwala
            </h1>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Backend-Focused Software Developer · Mumbai, India
            </p>
          </div>

          <p className="text-sm sm:text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
            I build reliable backend systems, design APIs, and solve engineering problems. Currently in my third year studying Information Technology at Vidyalankar Institute of Technology (VIT Mumbai), maintaining a 9.6/10 CGPA.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs pt-1 font-mono text-zinc-600 dark:text-zinc-400">
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedEmail ? 'Copied' : PROFILE.email}</span>
            </button>
            <span>·</span>
            <a
              href={PROFILE.social.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <span>·</span>
            <a
              href={PROFILE.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <span>·</span>
            <button
              onClick={() => setIsResumeOpen(true)}
              className="inline-flex items-center gap-1 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="space-y-4 pt-4 border-t border-zinc-200 dark:border-zinc-800">
          <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
            About
          </h2>
          <div className="space-y-3 text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
            <p>
              I am drawn to what happens behind the interface. My primary interest is in designing scalable API layers, thinking through database persistence models, and structuring asynchronous workflows so applications remain fast and predictable under load.
            </p>
            <p>
              In my projects, I work with dual-database patterns—pairing PostgreSQL for structured, relational, time-series data with MongoDB for flexible identity and conversation stores. I also use Redis and BullMQ to offload heavy background synchronization and avoid rate-limiting third-party APIs.
            </p>
            <p>
              Beyond backend systems, I have a strong foundation in C++ and Data Structures & Algorithms, and completed a 60-hour DevOps residency with L&T STA focusing on CI/CD pipelines and containerization.
            </p>
          </div>
        </section>

        {/* Featured Projects */}
        <section id="projects" className="space-y-8 pt-4 border-t border-zinc-200 dark:border-zinc-800">
          <div className="flex items-baseline justify-between">
            <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              Selected Work
            </h2>
          </div>

          <div className="space-y-8">
            {PROJECTS.map((project) => (
              <article key={project.id} className="space-y-2.5">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-medium text-zinc-900 dark:text-zinc-100">
                      {project.title}
                    </h3>
                    {project.isFlagship && (
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                        Flagship
                      </span>
                    )}
                    {project.clientProject && (
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                        Client Work
                      </span>
                    )}
                  </div>
                  <div className="text-xs font-mono text-zinc-400 dark:text-zinc-500">
                    {project.techStack.slice(0, 4).join(' · ')}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {project.description}
                </p>

                {/* Key engineering details */}
                <ul className="space-y-1 text-xs text-zinc-600 dark:text-zinc-400 pl-4 list-disc">
                  {project.keyContributions.slice(0, 3).map((item, idx) => (
                    <li key={idx} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Tech list & links */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs">
                  <div className="flex flex-wrap gap-1.5 font-mono text-[11px] text-zinc-500">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 font-mono text-xs text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:underline"
                    >
                      <span>Repository</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Technical Skills */}
        <section id="skills" className="space-y-4 pt-4 border-t border-zinc-200 dark:border-zinc-800">
          <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
            Technical Skills
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            {SKILL_CATEGORIES.map((cat, idx) => (
              <div key={idx} className="space-y-1 p-3 rounded-lg bg-zinc-100/60 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800">
                <span className="font-medium text-zinc-900 dark:text-zinc-100 block">
                  {cat.title}
                </span>
                <p className="text-zinc-600 dark:text-zinc-400 font-mono text-[11px]">
                  {cat.skills.map((s) => s.name).join(', ')}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Achievements */}
        <section id="achievements" className="space-y-6 pt-4 border-t border-zinc-200 dark:border-zinc-800">
          <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
            Education & Achievements
          </h2>

          <div className="space-y-6 text-xs sm:text-sm">
            {/* Education */}
            <div className="space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <strong className="text-zinc-900 dark:text-zinc-100 font-medium">
                  {EDUCATION_DATA.institution}
                </strong>
                <span className="font-mono text-xs text-zinc-500">
                  {EDUCATION_DATA.timeline}
                </span>
              </div>
              <p className="text-xs text-zinc-600 dark:text-zinc-400">
                {EDUCATION_DATA.degree} in {EDUCATION_DATA.field} · <span className="font-mono text-zinc-900 dark:text-zinc-100 font-medium">CGPA: {EDUCATION_DATA.score}</span>
              </p>
              <p className="text-xs text-zinc-500 dark:text-zinc-500 pt-0.5">
                Core coursework: Data Structures & Algorithms, DBMS, Operating Systems, Computer Networks.
              </p>
            </div>

            {/* Achievements */}
            <div className="space-y-4 pt-2 border-t border-zinc-200 dark:border-zinc-800/80">
              {ACHIEVEMENTS_DATA.map((item) => (
                <div key={item.id} className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <strong className="text-zinc-900 dark:text-zinc-100 font-medium">
                      {item.title}
                    </strong>
                    <span className="font-mono text-xs text-zinc-500">
                      {item.year}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400">
                    {item.organization} {item.duration ? `· ${item.duration}` : ''}
                  </p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="space-y-6 pt-4 border-t border-zinc-200 dark:border-zinc-800">
          <div className="space-y-1">
            <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              Contact
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              I am open to software engineering internships and backend roles. Feel free to reach out via email or send a quick note below.
            </p>
          </div>

          <div className="flex items-center gap-3 text-xs font-mono">
            <a
              href={`mailto:${PROFILE.email}`}
              className="text-zinc-900 dark:text-zinc-100 underline underline-offset-4 hover:opacity-80"
            >
              {PROFILE.email}
            </a>
            <button
              onClick={handleCopyEmail}
              className="px-2 py-1 rounded border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 transition-colors"
            >
              {copiedEmail ? 'Copied' : 'Copy'}
            </button>
          </div>

          {/* Simple, unpretentious contact form */}
          <form onSubmit={handleFormSubmit} className="space-y-3 pt-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <input
                type="text"
                placeholder="Your name"
                required
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                className="w-full px-3 py-2 rounded border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-500 text-xs"
              />
              <input
                type="email"
                placeholder="Your email"
                required
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                className="w-full px-3 py-2 rounded border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-500 text-xs"
              />
            </div>
            <textarea
              rows={3}
              placeholder="Your message"
              required
              value={formState.message}
              onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              className="w-full px-3 py-2 rounded border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-500 text-xs resize-y"
            />
            <div>
              <button
                type="submit"
                disabled={formStatus !== 'idle'}
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-xs font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {formStatus === 'submitting' ? (
                  'Sending...'
                ) : formStatus === 'sent' ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    Sent
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </form>
        </section>

        {/* Minimal Footer */}
        <footer className="pt-8 border-t border-zinc-200 dark:border-zinc-800 text-xs font-mono text-zinc-400 dark:text-zinc-600 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>{PROFILE.name} · Mumbai</span>
          <span>VIT Mumbai · IT (CGPA 9.6)</span>
        </footer>
      </div>

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
};

export default App;
