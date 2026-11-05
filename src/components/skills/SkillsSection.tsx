import React from 'react';
import { motion } from 'framer-motion';
import { SKILL_CATEGORIES } from '../../data/skills';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { 
  Server, 
  Database, 
  Code2, 
  Layout, 
  Wrench, 
  Cpu 
} from 'lucide-react';
import { fadeInUp, staggerContainer, staggerItem, viewportOnce } from '../../utils/animations';

export const SkillsSection: React.FC = () => {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Server className="w-5 h-5 text-emerald-500" />;
      case 1:
        return <Database className="w-5 h-5 text-indigo-500" />;
      case 2:
        return <Code2 className="w-5 h-5 text-cyan-500" />;
      case 3:
        return <Layout className="w-5 h-5 text-amber-500" />;
      case 4:
        return <Cpu className="w-5 h-5 text-teal-500" />;
      default:
        return <Wrench className="w-5 h-5 text-rose-500" />;
    }
  };

  return (
    <section id="skills" className="py-20 sm:py-28 border-t border-slate-200/80 dark:border-white/[0.06] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="max-w-2xl mb-12"
        >
          <Badge variant="cyan" size="sm">
            Technical Stack & Architecture
          </Badge>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mt-1">
            Technical Competencies
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed mt-1">
            A breakdown of languages, backend runtimes, database engines, and core computer science fundamentals.
          </p>
        </motion.div>

        {/* Skills Categories Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.div key={idx} variants={staggerItem}>
              <Card
              hoverEffect
              className="flex flex-col justify-between p-6 group"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 pb-3 mb-4 border-b border-slate-200/80 dark:border-white/[0.06]">
                  <div className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/[0.08] flex items-center justify-center">
                    {getCategoryIcon(idx)}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>
                </div>

                {/* Skills list with engineering context */}
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="group/item">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-medium text-slate-900 dark:text-slate-200 flex items-center gap-1.5">
                          {skill.isKey && (
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          )}
                          {skill.name}
                        </span>
                        {skill.isKey && (
                          <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">
                            Core
                          </span>
                        )}
                      </div>
                      {skill.description && (
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                          {skill.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

