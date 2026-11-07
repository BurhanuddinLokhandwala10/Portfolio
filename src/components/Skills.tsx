import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Database, Layout, Terminal, Cpu } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { GlassCard } from './GlassCard';
import { SKILL_CATEGORIES } from '../data';

const getCategoryIcon = (iconName: string) => {
  switch (iconName) {
    case 'code':
      return <Code2 className="w-5 h-5 text-[#7C8CFF] stroke-[1.75]" />;
    case 'server':
      return <Server className="w-5 h-5 text-[#7C8CFF] stroke-[1.75]" />;
    case 'database':
      return <Database className="w-5 h-5 text-[#7C8CFF] stroke-[1.75]" />;
    case 'layout':
      return <Layout className="w-5 h-5 text-[#7C8CFF] stroke-[1.75]" />;
    case 'terminal':
      return <Terminal className="w-5 h-5 text-[#7C8CFF] stroke-[1.75]" />;
    case 'cpu':
      return <Cpu className="w-5 h-5 text-[#7C8CFF] stroke-[1.75]" />;
    default:
      return <Code2 className="w-5 h-5 text-[#7C8CFF] stroke-[1.75]" />;
  }
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 lg:py-32 relative scroll-mt-20">
      <div className="max-w-[1280px] mx-auto px-8 lg:px-16">
        <SectionHeader
          label="02 / Skills"
          title="The tools I work with."
          subtext="Production-tested technologies across systems engineering, database architecture, and fullstack delivery."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat, catIdx) => (
            <GlassCard key={cat.category} className="p-7 flex flex-col justify-between">
              <div>
                {/* Header with Icon and Title */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 rounded-xl bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)]">
                    {getCategoryIcon(cat.icon)}
                  </div>
                  <h3 className="font-bold text-[18px] text-[#F3F4F8] tracking-tight">
                    {cat.category}
                  </h3>
                </div>

                {/* Staggered Chips */}
                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((skill, skillIdx) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.35,
                        delay: catIdx * 0.05 + skillIdx * 0.04,
                      }}
                      className="px-3.5 py-1.5 rounded-chip bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.09)] text-[14px] text-[#F3F4F8] font-mono hover:border-[#7C8CFF]/50 hover:bg-[#7C8CFF]/5 transition-colors duration-200"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

