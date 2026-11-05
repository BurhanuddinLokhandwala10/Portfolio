import React, { useState } from 'react';
import { useTheme } from './hooks/useTheme';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/hero/HeroSection';
import { AboutSection } from './components/about/AboutSection';
import { FeaturedProjects } from './components/projects/FeaturedProjects';
import { SkillsSection } from './components/skills/SkillsSection';
import { ExperienceSection } from './components/experience/ExperienceSection';
import { ContactSection } from './components/contact/ContactSection';
import { Footer } from './components/layout/Footer';
import { ResumeModal } from './components/resume/ResumeModal';

export const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-canvas-light dark:bg-[#08090D] text-slate-900 dark:text-slate-100 transition-colors duration-200">
      {/* Background Dot Texture */}
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none opacity-40 -z-10" />

      {/* Navigation */}
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        onResumeClick={() => setIsResumeOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        <HeroSection onResumeClick={() => setIsResumeOpen(true)} />
        <AboutSection />
        <FeaturedProjects />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Resume View/Print Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
};

export default App;

