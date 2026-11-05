import React from 'react';
import { motion } from 'framer-motion';
import { SKILL_CATEGORIES } from '../data/skills';
import { 
  Server, 
  Database, 
  Code2, 
  Layout, 
  Cpu, 
  Wrench 
} from 'lucide-react';

export const SkillsGrid: React.FC = () => {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Server className="w-4 h-4 text-emerald-500" />;
      case 1:
        return <Database className="w-4 h-4 text-indigo-500" />;
      case 2:
        return <Code2 className="w-4 h-4 text-cyan-500" />;
      case 3:
        return <Layout className="w-4 h-4 text-amber-500" />;
      case 4:
        return <Cpu className="w-4 h-4 text-teal-500" />;
      default:
        return <Wrench className="w-4 h-4 text-rose-500" />;
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
      {SKILL_CATEGORIES.map((category, idx) => (
        <motion.div
          key={idx}
          whileHover={{ y: -2 }}
          transition={{ duration: 0.2 }}
          className="p-4 rounded-xl border border-slate-200/90 dark:border-white/[0.08] bg-white/60 dark:bg-white/[0.02] backdrop-blur-sm space-y-2.5 hover:border-slate-300 dark:hover:border-white/20 transition-all"
        >
          <div className="flex items-center gap-2 pb-1 border-b border-slate-100 dark:border-white/[0.06]">
            {getCategoryIcon(idx)}
            <h3 className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider font-mono">
              {category.title}
            </h3>
          </div>

          <div className="flex flex-wrap gap-1.5 pt-0.5">
            {category.skills.map((skill) => (
              <span
                key={skill.name}
                className={`px-2 py-0.5 rounded text-xs font-mono transition-colors ${
                  skill.isKey
                    ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20'
                    : 'bg-slate-100 dark:bg-white/[0.04] text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-white/[0.06]'
                }`}
                title={skill.description}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

