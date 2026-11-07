import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Briefcase, Award, Terminal, GraduationCap } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { GlassCard } from './GlassCard';
import { JOURNEY } from '../data';

const getJourneyIcon = (iconName: string) => {
  switch (iconName) {
    case 'briefcase':
      return <Briefcase className="w-4 h-4 text-[#7C8CFF]" />;
    case 'award':
      return <Award className="w-4 h-4 text-[#7C8CFF]" />;
    case 'terminal':
      return <Terminal className="w-4 h-4 text-[#7C8CFF]" />;
    case 'graduation-cap':
      return <GraduationCap className="w-4 h-4 text-[#7C8CFF]" />;
    default:
      return <Briefcase className="w-4 h-4 text-[#7C8CFF]" />;
  }
};

export const Journey: React.FC = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section id="journey" className="py-20 lg:py-32 relative scroll-mt-20">
      <div className="max-w-[1280px] mx-auto px-8 lg:px-16">
        <SectionHeader
          label="04 / Journey"
          title="Where I've been."
          subtext="Academic milestones, client consulting, competitive hackathons, and systems training."
        />

        <div ref={containerRef} className="relative mt-16 max-w-4xl mx-auto">
          {/* Static background track line */}
          <div className="absolute top-0 bottom-0 left-4 md:left-1/2 -translate-x-1/2 w-[1px] bg-[rgba(255,255,255,0.10)]" />

          {/* Animated drawing line */}
          <motion.div
            style={{ scaleY }}
            className="absolute top-0 left-4 md:left-1/2 -translate-x-1/2 w-[2px] bg-[#7C8CFF] origin-top shadow-[0_0_10px_rgba(124,140,255,0.7)]"
          />

          <div className="space-y-12">
            {JOURNEY.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className={`relative flex items-center md:justify-between ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Glowing center accent dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#07090F] border-2 border-[#7C8CFF] shadow-[0_0_10px_#7C8CFF] z-20 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#7C8CFF]" />
                  </div>

                  {/* Empty spacer on alternate side on desktop */}
                  <div className="hidden md:block w-5/12" />

                  {/* Content Glass Card */}
                  <div className="ml-12 md:ml-0 w-full md:w-5/12">
                    <GlassCard className="p-6 sm:p-7">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <div className="p-1.5 rounded-lg bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)]">
                            {getJourneyIcon(item.icon)}
                          </div>
                          <span className="font-mono text-xs font-semibold text-[#7C8CFF]">
                            {item.period}
                          </span>
                        </div>
                      </div>

                      <h3 className="text-[17px] font-bold text-[#F3F4F8] mb-1">
                        {item.role}
                      </h3>
                      <div className="font-mono text-xs text-[#9AA0B4] mb-3">
                        {item.organization}
                      </div>

                      <p className="text-[14px] text-[#9AA0B4] leading-relaxed">
                        {item.description}
                      </p>
                    </GlassCard>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

