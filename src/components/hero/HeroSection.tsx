import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  FileText, 
  Github, 
  Linkedin, 
  MapPin, 
  GraduationCap 
} from 'lucide-react';
import { Button } from '../ui/Button';
import { AvailabilityBadge } from './AvailabilityBadge';
import { SystemFlowVisual } from './SystemFlowVisual';
import { PROFILE } from '../../data/profile';
import { fadeInUp, scaleIn, staggerContainer, staggerItem, viewportOnce } from '../../utils/animations';

interface HeroSectionProps {
  onResumeClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onResumeClick }) => {
  return (
    <section id="home" className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 overflow-hidden">
      {/* Background Accent Gradients */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-emerald-500/10 via-cyan-500/5 to-transparent blur-3xl -z-10 pointer-events-none" 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Badges & Availability */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap items-center gap-3 mb-6"
        >
          <motion.div variants={staggerItem}>
            <AvailabilityBadge />
          </motion.div>
          
          <motion.div variants={staggerItem} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/[0.08] text-slate-600 dark:text-slate-400">
            <MapPin className="w-3 h-3 text-emerald-500" />
            <span>{PROFILE.location}</span>
          </motion.div>

          <motion.div variants={staggerItem} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/[0.08] text-slate-600 dark:text-slate-400">
            <GraduationCap className="w-3.5 h-3.5 text-cyan-500" />
            <span>VIT Mumbai • CGPA 9.6/10</span>
          </motion.div>
        </motion.div>

        {/* Hero Headline */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
            {PROFILE.headline}
          </h1>

          <p className="mt-6 text-base sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-normal max-w-3xl">
            {PROFILE.summary}
          </p>
        </motion.div>

        {/* Action CTAs & Social Links */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4"
        >
          <Button
            as="a"
            href="#projects"
            size="lg"
            variant="primary"
            rightIcon={<ArrowRight className="w-4 h-4" />}
          >
            View Projects
          </Button>

          <Button
            size="lg"
            variant="secondary"
            onClick={onResumeClick}
            leftIcon={<FileText className="w-4 h-4 text-emerald-500" />}
          >
            Download Resume
          </Button>

          {/* Social Icons */}
          <div className="flex items-center gap-2 pl-2 sm:pl-4 sm:border-l sm:border-slate-300 dark:sm:border-white/10">
            <a
              href={PROFILE.social.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-lg border border-slate-200 dark:border-white/[0.08] bg-white/50 dark:bg-white/[0.03] text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.08] transition-all hover:scale-105"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>

            <a
              href={PROFILE.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-lg border border-slate-200 dark:border-white/[0.08] bg-white/50 dark:bg-white/[0.03] text-slate-700 dark:text-slate-300 hover:text-[#0A66C2] dark:hover:text-[#0A66C2] hover:bg-slate-100 dark:hover:bg-white/[0.08] transition-all hover:scale-105"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        {/* Hero Interactive System Visual */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 sm:mt-16"
        >
          <SystemFlowVisual />
        </motion.div>
      </div>
    </section>
  );
};
