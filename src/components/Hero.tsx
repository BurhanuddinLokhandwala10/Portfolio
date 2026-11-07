import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { MapPin, GraduationCap, Star, ArrowUpRight, ChevronDown } from 'lucide-react';
import { PERSONAL_INFO } from '../data';
import { HeroBackground } from './HeroBackground';

export const Hero: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const roles = PERSONAL_INFO.roles;
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState(roles[0]);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (shouldReduceMotion) {
      setDisplayText(roles[0]);
      return;
    }

    const currentRole = roles[currentRoleIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting && displayText === currentRole) {
      timer = setTimeout(() => setIsDeleting(true), 2400);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      const speed = isDeleting ? 38 : 75;
      timer = setTimeout(() => {
        const nextText = isDeleting
          ? currentRole.substring(0, displayText.length - 1)
          : currentRole.substring(0, displayText.length + 1);
        setDisplayText(nextText);
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex, roles, shouldReduceMotion]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 overflow-hidden"
    >
      {/* Background Engineering Architecture & Grid */}
      <HeroBackground />

      {/* Main Single Centered Column (max-w 980px, text-align center) */}
      <div className="relative z-10 max-w-[980px] w-full mx-auto px-8 lg:px-16 flex-1 flex flex-col justify-center items-center text-center py-10">
        {/* 1. Greeting with Accent Dot */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2.5 font-mono text-[14px] text-[#9AA0B4] mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-[#7C8CFF] shadow-[0_0_8px_#7C8CFF] animate-pulse" />
          <span>{PERSONAL_INFO.greeting}</span>
        </motion.div>

        {/* 2. Name on Two Lines with Circle Period */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[clamp(56px,9vw,120px)] leading-[1] tracking-[-0.03em] font-bold text-[#F3F4F8] mb-6 select-none"
        >
          <span>{PERSONAL_INFO.nameFirst}</span>
          <br />
          <span className="inline-flex items-baseline justify-center">
            <span className="italic font-semibold bg-gradient-to-r from-[#F3F4F8] via-[#F3F4F8]/85 to-[#F3F4F8]/55 bg-clip-text text-transparent">
              {PERSONAL_INFO.nameLast}
            </span>
            {/* Bug 2 Fix: Perfect 14px circular period in --accent sitting on the baseline */}
            <span
              className="inline-block w-[14px] h-[14px] rounded-full bg-[#7C8CFF] shadow-[0_0_10px_rgba(124,140,255,0.8)] ml-2 align-baseline"
              aria-hidden="true"
            />
          </span>
        </motion.h1>

        {/* 3. Role Line in JetBrains Mono with Accent Chevrons and 2px Blinking Caret */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="font-mono text-[20px] sm:text-[28px] lg:text-[34px] text-[#F3F4F8] flex items-center justify-center gap-4 mb-6"
        >
          <span className="text-[#7C8CFF] font-light select-none mr-2">‹</span>
          <span className="text-[#F3F4F8] font-medium tracking-tight">
            {displayText}
          </span>
          {/* Bug 4 Fix: 2px wide blinking caret */}
          <span className="w-[2px] h-[1.15em] bg-[#7C8CFF] inline-block animate-caret-blink -ml-2" />
          <span className="text-[#7C8CFF] font-light select-none ml-2">›</span>
        </motion.div>

        {/* 4. Paragraph (max 560px, centered) */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-[17px] sm:text-[18px] leading-[1.65] text-[#9AA0B4] max-w-[560px] mx-auto mb-10"
        >
          {PERSONAL_INFO.heroBio}
        </motion.p>

        {/* 5. Two Buttons Side by Side (56px high pills) */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-14"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto h-[56px] px-8 rounded-pill bg-[#E9ECFF] text-[#07090F] font-semibold text-[15px] inline-flex items-center justify-center gap-2 transition-all duration-200 hover:bg-white hover:shadow-[0_0_25px_rgba(233,236,255,0.35)] active:scale-[0.98]"
          >
            <span>View My Work</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto h-[56px] px-8 rounded-pill bg-transparent border border-[rgba(255,255,255,0.25)] text-[#F3F4F8] font-medium text-[15px] inline-flex items-center justify-center transition-all duration-200 hover:border-[#7C8CFF] hover:text-[#7C8CFF] hover:bg-[#7C8CFF]/5 active:scale-[0.98]"
          >
            <span>Get in Touch</span>
          </a>
        </motion.div>

        {/* 6. Info Strip as a Centered Row with 1px Dividers */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="inline-flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 p-3 px-6 rounded-2xl bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.06)] backdrop-blur-sm divide-y sm:divide-y-0 sm:divide-x divide-[rgba(255,255,255,0.12)]"
        >
          {/* Mumbai, India */}
          <div className="flex items-center gap-3 pt-2 sm:pt-0">
            <div className="p-2 rounded-lg bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)]">
              <MapPin className="w-4 h-4 text-[#7C8CFF] stroke-[1.75]" />
            </div>
            <div className="text-left">
              <div className="text-[14px] font-medium text-[#F3F4F8]">
                {PERSONAL_INFO.location}
              </div>
            </div>
          </div>

          {/* B.Tech (IT) VIT Mumbai */}
          <div className="flex items-center gap-3 pt-3 sm:pt-0 sm:pl-8">
            <div className="p-2 rounded-lg bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)]">
              <GraduationCap className="w-4 h-4 text-[#7C8CFF] stroke-[1.75]" />
            </div>
            <div className="text-left">
              <div className="text-[14px] font-medium text-[#F3F4F8]">
                {PERSONAL_INFO.education.degree}
              </div>
              <div className="font-mono text-[12px] text-[#9AA0B4]">
                {PERSONAL_INFO.education.institution}
              </div>
            </div>
          </div>

          {/* CGPA 9.6 / 10 */}
          <div className="flex items-center gap-3 pt-3 sm:pt-0 sm:pl-8">
            <div className="p-2 rounded-lg bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)]">
              <Star className="w-4 h-4 text-[#7C8CFF] stroke-[1.75]" />
            </div>
            <div className="text-left">
              <div className="text-[14px] font-medium text-[#F3F4F8]">
                CGPA
              </div>
              <div className="font-mono text-[12px] text-[#9AA0B4]">
                {PERSONAL_INFO.education.cgpa}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 7. Bottom Center: Scroll to Explore */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-2.5 text-[#9AA0B4] select-none pt-6">
        <span className="font-mono text-[12px] tracking-wider text-[#9AA0B4]">
          Scroll to explore
        </span>
        <div className="w-5 h-8 rounded-full border border-[rgba(255,255,255,0.25)] flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-[#7C8CFF] animate-mouse-dot" />
        </div>
        <ChevronDown className="w-4 h-4 text-[#7C8CFF] animate-bounce" />
      </div>
    </section>
  );
};
