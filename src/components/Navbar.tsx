import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Menu, X } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Journey', href: '#journey', id: 'journey' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 h-[80px] transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0E1220]/80 backdrop-blur-md border-b border-[rgba(255,255,255,0.10)]'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-[1280px] h-full mx-auto px-8 lg:px-16 flex items-center justify-between">
          {/* Left Logo: "BL" with corner brackets + ".dev" with NO gap, NO trailing dot, and accent dot before dev */}
          <a
            href="#"
            className="flex items-center group select-none cursor-pointer"
            aria-label="Burhanuddin Lokhandwala Home"
          >
            <div className="relative p-1 px-2 font-mono font-bold text-sm text-[#F3F4F8] tracking-wider inline-flex items-center">
              {/* Top-left L bracket */}
              <span
                className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#7C8CFF] transition-transform duration-300 group-hover:scale-110"
                aria-hidden="true"
              />
              {/* Bottom-right L bracket */}
              <span
                className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#7C8CFF] transition-transform duration-300 group-hover:scale-110"
                aria-hidden="true"
              />
              BL
            </div>
            <span className="font-mono text-sm font-light text-[#9AA0B4] group-hover:text-[#F3F4F8] transition-colors inline-flex items-center">
              <span className="text-[#7C8CFF] font-bold">.</span>dev
            </span>
          </a>

          {/* Center Links (Desktop) */}
          <nav
            className="hidden md:flex items-center gap-8 text-[14px] text-[#9AA0B4]"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`relative py-1 transition-colors duration-200 hover:text-[#F3F4F8] ${
                    isActive ? 'text-[#F3F4F8] font-medium' : ''
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavUnderline"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#7C8CFF] rounded-full"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action: "Resume" outlined pill */}
          <div className="hidden md:flex items-center">
            <a
              href={PERSONAL_INFO.resumeUrl}
              download="Burhanuddin_Lokhandwala_Resume.pdf"
              className="inline-flex items-center gap-2 h-10 px-5 rounded-pill border border-[rgba(255,255,255,0.20)] text-[#F3F4F8] hover:border-[#7C8CFF] hover:text-[#7C8CFF] hover:bg-[#7C8CFF]/5 text-xs font-mono tracking-wide transition-all duration-200 active:scale-98"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#F3F4F8] hover:text-[#7C8CFF] transition-colors"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Full-screen Mobile Sheet */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-0 z-30 bg-[#07090F]/98 backdrop-blur-xl md:hidden pt-28 px-8 flex flex-col justify-between pb-12"
          >
            <nav className="flex flex-col gap-6" aria-label="Mobile Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-semibold text-[#F3F4F8] hover:text-[#7C8CFF] transition-colors flex items-center justify-between py-2 border-b border-[rgba(255,255,255,0.06)]"
                >
                  <span>{link.label}</span>
                  <span className="font-mono text-xs text-[#9AA0B4]">
                    {link.id === activeSection ? '● Active' : '→'}
                  </span>
                </a>
              ))}
            </nav>

            <div className="pt-8">
              <a
                href={PERSONAL_INFO.resumeUrl}
                download="Burhanuddin_Lokhandwala_Resume.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 h-14 rounded-pill border border-[#7C8CFF]/50 bg-[#7C8CFF]/10 text-[#F3F4F8] font-mono text-sm tracking-wide"
              >
                <Download className="w-4 h-4 text-[#7C8CFF]" />
                <span>Download Resume</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
