import React from 'react';
import { motion } from 'framer-motion';
import { EDUCATION_DATA, ACHIEVEMENTS_DATA } from '../../data/achievements';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { 
  GraduationCap, 
  Award, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Clock, 
  Users 
} from 'lucide-react';
import { fadeInUp, staggerContainer, staggerItem, viewportOnce } from '../../utils/animations';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 sm:py-28 border-t border-slate-200/80 dark:border-white/[0.06] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="max-w-2xl mb-12"
        >
          <Badge variant="indigo" size="sm">
            Milestones & Track Record
          </Badge>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mt-1">
            Education & Achievements
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed mt-1">
            Academic standing at Vidyalankar Institute of Technology alongside verified industry residencies and competitive hackathons.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
        >
          {/* Left Column: Education Spotlight */}
          <motion.div variants={staggerItem} className="lg:col-span-6 space-y-6">
            <h3 className="flex items-center gap-2 text-sm font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              <GraduationCap className="w-4 h-4 text-emerald-500" />
              <span>Formal Education</span>
            </h3>

            <Card hoverEffect className="p-6 sm:p-7 space-y-5">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                    {EDUCATION_DATA.institution}
                  </h4>
                  <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400 mt-0.5">
                    {EDUCATION_DATA.degree} — {EDUCATION_DATA.field}
                  </p>
                </div>
                <div className="text-right">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    CGPA: {EDUCATION_DATA.score}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500 dark:text-slate-400 py-2 border-y border-slate-200/80 dark:border-white/[0.06]">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>{EDUCATION_DATA.timeline}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{EDUCATION_DATA.location}</span>
                </div>
              </div>

              <div className="space-y-2.5">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                  Academic Focus & Highlights:
                </span>
                <ul className="space-y-2">
                  {EDUCATION_DATA.highlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </motion.div>

          {/* Right Column: Achievements & Residencies */}
          <motion.div variants={staggerItem} className="lg:col-span-6 space-y-6">
            <h3 className="flex items-center gap-2 text-sm font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              <Award className="w-4 h-4 text-cyan-500" />
              <span>Residency & Hackathon Recognitions</span>
            </h3>

            <div className="space-y-4">
              {ACHIEVEMENTS_DATA.map((item) => (
                <Card key={item.id} hoverEffect className="p-6 space-y-4">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                          {item.badge}
                        </span>
                        <span className="text-xs font-mono text-slate-400">
                          {item.year}
                        </span>
                      </div>
                      <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                        {item.title}
                      </h4>
                      <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                        {item.organization}
                      </p>
                    </div>

                    {item.duration && (
                      <div className="flex items-center gap-1 text-xs font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md">
                        <Clock className="w-3 h-3" />
                        <span>{item.duration}</span>
                      </div>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.description}
                  </p>

                  {item.teamProject && (
                    <div className="flex items-center gap-2 text-xs font-mono text-indigo-500 dark:text-indigo-400 bg-indigo-500/[0.06] p-2.5 rounded-lg border border-indigo-500/20">
                      <Users className="w-3.5 h-3.5" />
                      <span>Project Engineered: <strong>{item.teamProject}</strong></span>
                    </div>
                  )}

                  <ul className="space-y-1.5 pt-1">
                    {item.outcomes.map((outcome, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-600 mt-1.5 flex-shrink-0" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

