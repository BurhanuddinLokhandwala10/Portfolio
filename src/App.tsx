import React, { useState, useEffect } from 'react';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechMarquee } from './components/TechMarquee';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Journey } from './components/Journey';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Track active section via IntersectionObserver for Navbar indicator
  useEffect(() => {
    const sectionIds = ['about', 'skills', 'projects', 'journey', 'contact'];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { rootMargin: '-25% 0px -60% 0px' }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#07090F] text-[#F3F4F8] relative selection:bg-[#7C8CFF]/30 selection:text-white overflow-x-hidden font-sans">
      {/* Scroll Progress Bar at the very top */}
      <ScrollProgress />

      {/* Faint vertical guidelines (4% opacity) */}
      <div
        className="fixed inset-0 bg-guidelines pointer-events-none z-0"
        aria-hidden="true"
      />

      {/* Sticky Navbar */}
      <Navbar activeSection={activeSection} />

      <main className="relative z-10">
        <Hero />
        <TechMarquee />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
