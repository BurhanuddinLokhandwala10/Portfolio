import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Journey', href: '#journey' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="border-t border-[rgba(255,255,255,0.10)] bg-[#07090F] py-12 relative z-20">
      <div className="max-w-[1280px] mx-auto px-8 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Logo */}
        <a
          href="#"
          className="flex items-center group select-none cursor-pointer"
          aria-label="Burhanuddin Lokhandwala Home"
        >
          <div className="relative p-1 px-2 font-mono font-bold text-sm text-[#F3F4F8] tracking-wider inline-flex items-center">
            <span
              className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#7C8CFF]"
              aria-hidden="true"
            />
            <span
              className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#7C8CFF]"
              aria-hidden="true"
            />
            BL
          </div>
          <span className="font-mono text-sm font-light text-[#9AA0B4] inline-flex items-center">
            <span className="text-[#7C8CFF] font-bold">.</span>dev
          </span>
        </a>

        {/* Center: Nav Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-[13px] text-[#9AA0B4]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#F3F4F8] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right: Copyright & Back-to-Top Button */}
        <div className="flex items-center gap-4">
          <span className="text-xs font-mono text-[#9AA0B4]">
            © {new Date().getFullYear()} {PERSONAL_INFO.fullName}
          </span>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-9 h-9 rounded-full border border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.03)] hover:border-[#7C8CFF] hover:text-[#7C8CFF] text-[#9AA0B4] flex items-center justify-center transition-all duration-200"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

