import React from 'react';
import { useReducedMotion } from 'framer-motion';
import { MARQUEE_SKILLS } from '../data';

export const TechMarquee: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  // Split skills into two rows
  const half = Math.ceil(MARQUEE_SKILLS.length / 2);
  const row1 = MARQUEE_SKILLS.slice(0, half);
  const row2 = MARQUEE_SKILLS.slice(half);

  // Duplicate for seamless loop
  const row1Items = [...row1, ...row1, ...row1];
  const row2Items = [...row2, ...row2, ...row2];

  if (shouldReduceMotion) {
    return (
      <div className="py-12 max-w-[1280px] mx-auto px-8 lg:px-16">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {MARQUEE_SKILLS.map((skill) => (
            <div
              key={skill}
              className="px-4 py-2 rounded-chip bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.10)] font-mono text-[14px] text-[#F3F4F8]"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="py-14 relative overflow-hidden select-none border-y border-[rgba(255,255,255,0.06)] bg-[#07090F]/60 backdrop-blur-sm">
      {/* Edge gradient fade masks */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-48 z-10"
        style={{
          background: 'linear-gradient(to right, #07090F 0%, transparent 100%)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-48 z-10"
        style={{
          background: 'linear-gradient(to left, #07090F 0%, transparent 100%)',
        }}
      />

      <div className="flex flex-col gap-4">
        {/* Row 1: Leftward scroll (35s loop) */}
        <div className="flex overflow-hidden group">
          <div className="flex gap-3.5 shrink-0 animate-marquee-left group-hover:[animation-play-state:paused]">
            {row1Items.map((skill, idx) => (
              <div
                key={`r1-${idx}`}
                className="px-4 py-2 rounded-chip bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.10)] hover:border-[#7C8CFF]/50 transition-colors duration-200 font-mono text-[14px] text-[#F3F4F8] shrink-0"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Rightward scroll (45s loop) */}
        <div className="flex overflow-hidden group">
          <div className="flex gap-3.5 shrink-0 animate-marquee-right group-hover:[animation-play-state:paused]">
            {row2Items.map((skill, idx) => (
              <div
                key={`r2-${idx}`}
                className="px-4 py-2 rounded-chip bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.10)] hover:border-[#7C8CFF]/50 transition-colors duration-200 font-mono text-[14px] text-[#F3F4F8] shrink-0"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

