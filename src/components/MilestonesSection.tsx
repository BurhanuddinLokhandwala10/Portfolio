import React from 'react';
import { motion } from 'framer-motion';
import { EDUCATION_DATA, ACHIEVEMENTS_DATA } from '../data/achievements';
import { GraduationCap, Calendar, Clock, MapPin } from 'lucide-react';

export const MilestonesSection: React.FC = () => {
  return (
    <div className="space-y-4">
      {/* Education Card */}
      <motion.div
        whileHover={{ y: -2 }}
        transition={{ duration: 0.2 }}
        className="p-5 sm:p-6 rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-white/60 dark:bg-white/[0.02] backdrop-blur-sm space-y-3"
      >
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
              <GraduationCap className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                {EDUCATION_DATA.institution}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {EDUCATION_DATA.degree} in {EDUCATION_DATA.field}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              CGPA: {EDUCATION_DATA.score}
            </span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500 dark:text-slate-400 pt-1">
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {EDUCATION_DATA.timeline}
          </span>
          <span>·</span>
          <span className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5" />
            {EDUCATION_DATA.location}
          </span>
        </div>

        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pt-1">
          Rigorous coursework covering Data Structures & Algorithms, Database Management Systems (DBMS), Operating Systems, and Computer Networks.
        </p>
      </motion.div>

      {/* Achievements Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        {ACHIEVEMENTS_DATA.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
            className="p-5 rounded-xl border border-slate-200 dark:border-white/[0.08] bg-white/60 dark:bg-white/[0.02] backdrop-blur-sm space-y-2 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <span className="text-[10px] font-mono font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                  {item.badge}
                </span>
                <span className="font-mono text-xs text-slate-400">
                  {item.year}
                </span>
              </div>

              <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
                {item.title}
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {item.organization}
              </p>

              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                {item.description}
              </p>
            </div>

            {item.duration && (
              <div className="pt-2 flex items-center gap-1 font-mono text-[11px] text-emerald-600 dark:text-emerald-400">
                <Clock className="w-3 h-3" />
                <span>{item.duration}</span>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};
