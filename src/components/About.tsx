import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Download, Github, Linkedin, ExternalLink } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { GlassCard } from './GlassCard';
import { ABOUT_DATA, PERSONAL_INFO } from '../data';

// Stat count-up component
const StatCounter: React.FC<{
  target: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  label: string;
}> = ({ target, suffix = '', prefix = '', decimals = 0, label }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1400;
    const frameRate = 1000 / 60;
    const totalFrames = Math.round(duration / frameRate);
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(start + eased * target);

      if (frame >= totalFrames) {
        clearInterval(timer);
        setCount(target);
      }
    }, frameRate);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <div ref={ref} className="p-6 sm:p-7 flex flex-col justify-between h-full">
      <div className="font-mono text-4xl sm:text-5xl font-bold text-[#F3F4F8] mb-2 tracking-tight">
        {prefix}
        {count.toFixed(decimals)}
        <span className="text-[#7C8CFF]">{suffix}</span>
      </div>
      <div className="font-mono text-xs sm:text-sm text-[#9AA0B4] leading-relaxed">
        {label}
      </div>
    </div>
  );
};

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-32 relative scroll-mt-20">
      {/* Soft blurred accent-deep glow positioned behind the section */}
      <div
        className="pointer-events-none absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full blur-[140px] opacity-25 bg-[#2B3380] -z-10"
        aria-hidden="true"
      />

      <div className="max-w-[1280px] mx-auto px-8 lg:px-16">
        <SectionHeader
          label={ABOUT_DATA.sectionLabel}
          title={`${ABOUT_DATA.headingMain} ${ABOUT_DATA.headingAccent}`}
          italicWord={ABOUT_DATA.headingAccent}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Narrative Copy & Actions */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-8">
            <p className="text-[18px] leading-[1.65] text-[#9AA0B4] max-w-[62ch]">
              {ABOUT_DATA.body}
            </p>

            {/* Resume button + GitHub / LinkedIn icon buttons (rendered only if URL is present) */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={PERSONAL_INFO.resumeUrl}
                download="Burhanuddin_Lokhandwala_Resume.pdf"
                className="h-12 px-6 rounded-pill border border-[rgba(255,255,255,0.20)] hover:border-[#7C8CFF] hover:bg-[#7C8CFF]/5 text-[#F3F4F8] hover:text-[#7C8CFF] text-sm font-mono tracking-wide inline-flex items-center gap-2 transition-all duration-200 active:scale-98"
              >
                <Download className="w-4 h-4 text-[#7C8CFF]" />
                <span>Download Resume</span>
              </a>

              {PERSONAL_INFO.github && (
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-full border border-[rgba(255,255,255,0.15)] hover:border-[#7C8CFF] hover:bg-[#7C8CFF]/5 text-[#9AA0B4] hover:text-[#F3F4F8] inline-flex items-center justify-center transition-all duration-200"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>
              )}

              {PERSONAL_INFO.linkedin && (
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-full border border-[rgba(255,255,255,0.15)] hover:border-[#7C8CFF] hover:bg-[#7C8CFF]/5 text-[#9AA0B4] hover:text-[#F3F4F8] inline-flex items-center justify-center transition-all duration-200"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          {/* Right Column: 2x2 Glass Stat Cards with Count-up */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {ABOUT_DATA.stats.map((stat, i) => (
              <GlassCard key={i} className="min-h-[140px]">
                <StatCounter
                  target={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                  label={stat.label}
                />
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

