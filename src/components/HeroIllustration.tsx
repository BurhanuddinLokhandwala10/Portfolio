import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Code2, Database, Cloud } from 'lucide-react';

export const HeroIllustration: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 8, y: -y * 8 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[540px] h-[520px] sm:h-[580px] mx-auto flex items-center justify-center select-none"
    >
      {/* Background: Flowing wave pattern of thin curved SVG lines (1px, accent at ~15% opacity) fading to right */}
      <svg
        className="absolute -bottom-10 -left-16 w-[420px] h-[280px] pointer-events-none opacity-20"
        viewBox="0 0 400 250"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M0 220C90 220 120 140 220 150C320 160 350 70 400 40"
          stroke="#7C8CFF"
          strokeWidth="1.2"
          strokeDasharray="4 4"
        />
        <path
          d="M0 190C80 190 110 110 210 120C310 130 340 50 400 20"
          stroke="#7C8CFF"
          strokeWidth="1"
        />
        <path
          d="M0 240C110 240 140 170 240 180C340 190 370 100 400 70"
          stroke="#7C8CFF"
          strokeWidth="0.8"
        />
        <path
          d="M0 160C70 160 100 80 200 90C300 100 330 30 400 0"
          stroke="#7C8CFF"
          strokeWidth="1"
          strokeOpacity="0.6"
        />
      </svg>

      {/* Arch-shaped panel (rounded top, ~340x460) with vertical gradient from --accent-deep at top to transparent */}
      <div
        className="absolute w-[320px] sm:w-[360px] h-[440px] sm:h-[480px] rounded-t-[180px] rounded-b-[40px] pointer-events-none overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, rgba(43, 51, 128, 0.45) 0%, rgba(43, 51, 128, 0.08) 60%, transparent 100%)',
          border: '1px solid rgba(124, 140, 255, 0.15)',
          boxShadow: '0 0 60px -10px rgba(43, 51, 128, 0.5)',
        }}
      >
        {/* Faint dashed circular orbit ring */}
        <div className="absolute top-[40px] left-1/2 -translate-x-1/2 w-[280px] h-[280px] rounded-full border border-dashed border-[#7C8CFF]/20" />
        
        {/* Tiny accent particles */}
        <div className="absolute top-[90px] left-[60px] w-1.5 h-1.5 rounded-full bg-[#7C8CFF] shadow-[0_0_8px_#7C8CFF]" />
        <div className="absolute top-[140px] right-[70px] w-1 h-1 rounded-full bg-[#7C8CFF]/80" />
        <div className="absolute top-[260px] left-[90px] w-1 h-1 rounded-full bg-[#7C8CFF]/60" />
      </div>

      {/* 3D Isometric Stack Container with tilt */}
      <motion.div
        animate={{
          rotateY: tilt.x,
          rotateX: tilt.y,
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 25 }}
        className="relative w-[300px] h-[300px] flex items-center justify-center preserve-3d"
        style={{ perspective: 1000 }}
      >
        <div
          className="relative w-[230px] sm:w-[250px] h-[230px] sm:h-[250px] preserve-3d"
          style={{
            transform: 'rotateX(58deg) rotateZ(-40deg)',
          }}
        >
          {/* Bottom Tile: Cloud Infrastructure (translateZ -60px) */}
          <motion.div
            animate={
              shouldReduceMotion
                ? {}
                : {
                    y: [0, -8, 0],
                  }
            }
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.8,
            }}
            className="absolute inset-0 rounded-[28px] border border-[rgba(255,255,255,0.18)] flex items-center justify-center backdrop-blur-md shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
            style={{
              transform: 'translateZ(-60px)',
              background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)',
            }}
          >
            {/* Counter-rotate icon to stand upright */}
            <div
              className="p-4 rounded-xl bg-[#07090F]/50 border border-[rgba(255,255,255,0.1)]"
              style={{ transform: 'rotateZ(40deg) rotateX(-58deg)' }}
            >
              <Cloud className="w-8 h-8 text-white stroke-[2]" />
            </div>
          </motion.div>

          {/* Middle Tile: Database Layer (translateZ 10px) - Rim light on bottom-right edge */}
          <motion.div
            animate={
              shouldReduceMotion
                ? {}
                : {
                    y: [0, -8, 0],
                  }
            }
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.4,
            }}
            className="absolute inset-0 rounded-[28px] border border-[rgba(255,255,255,0.22)] flex items-center justify-center backdrop-blur-md shadow-[0_25px_50px_rgba(0,0,0,0.7)]"
            style={{
              transform: 'translateZ(10px)',
              background: 'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.03) 100%)',
              boxShadow: 'inset -2px -2px 0 0 rgba(124, 140, 255, 0.7), 0 20px 40px rgba(0,0,0,0.6)',
            }}
          >
            {/* Counter-rotate icon */}
            <div
              className="p-4 rounded-xl bg-[#0E1220]/60 border border-[rgba(124,140,255,0.3)] shadow-[0_0_15px_rgba(124,140,255,0.2)]"
              style={{ transform: 'rotateZ(40deg) rotateX(-58deg)' }}
            >
              <Database className="w-8 h-8 text-white stroke-[2]" />
            </div>
          </motion.div>

          {/* Top Tile: Application Code & APIs (translateZ 80px) */}
          <motion.div
            animate={
              shouldReduceMotion
                ? {}
                : {
                    y: [0, -8, 0],
                  }
            }
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0,
            }}
            className="absolute inset-0 rounded-[28px] border border-[rgba(255,255,255,0.25)] flex items-center justify-center backdrop-blur-md shadow-[0_30px_60px_rgba(0,0,0,0.8)]"
            style={{
              transform: 'translateZ(80px)',
              background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.04) 100%)',
            }}
          >
            {/* Counter-rotate icon */}
            <div
              className="p-4 rounded-xl bg-[#07090F]/70 border border-[rgba(255,255,255,0.15)]"
              style={{ transform: 'rotateZ(40deg) rotateX(-58deg)' }}
            >
              <Code2 className="w-8 h-8 text-white stroke-[2]" />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Floating Label Chips connected via thin lines with glowing accent dots */}
      {/* 1. APIs - Top Right */}
      <motion.div
        animate={shouldReduceMotion ? {} : { y: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
        className="absolute top-[80px] right-2 sm:-right-4 flex items-center gap-2 pointer-events-none"
      >
        <div className="relative">
          <div className="px-3.5 py-1.5 rounded-chip bg-[#0E1220]/90 border border-[rgba(255,255,255,0.15)] backdrop-blur-md font-mono text-[13px] sm:text-[14px] text-[#F3F4F8] shadow-lg">
            APIs
          </div>
          {/* Connector line ending in accent dot */}
          <div className="absolute top-1/2 -left-6 w-6 h-[1px] bg-[#7C8CFF]/50" />
          <div className="absolute top-1/2 -left-6 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#7C8CFF] shadow-[0_0_6px_#7C8CFF]" />
        </div>
      </motion.div>

      {/* 2. Backend - Middle Left */}
      <motion.div
        animate={shouldReduceMotion ? {} : { y: [0, -6, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute top-[230px] -left-2 sm:-left-6 flex items-center gap-2 pointer-events-none"
      >
        <div className="relative">
          <div className="px-3.5 py-1.5 rounded-chip bg-[#0E1220]/90 border border-[rgba(255,255,255,0.15)] backdrop-blur-md font-mono text-[13px] sm:text-[14px] text-[#F3F4F8] shadow-lg">
            Backend
          </div>
          {/* Connector line ending in accent dot */}
          <div className="absolute top-1/2 -right-6 w-6 h-[1px] bg-[#7C8CFF]/50" />
          <div className="absolute top-1/2 -right-6 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#7C8CFF] shadow-[0_0_6px_#7C8CFF]" />
        </div>
      </motion.div>

      {/* 3. Databases - Bottom Right */}
      <motion.div
        animate={shouldReduceMotion ? {} : { y: [0, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
        className="absolute bottom-[90px] right-4 sm:right-0 flex items-center gap-2 pointer-events-none"
      >
        <div className="relative">
          <div className="px-3.5 py-1.5 rounded-chip bg-[#0E1220]/90 border border-[rgba(255,255,255,0.15)] backdrop-blur-md font-mono text-[13px] sm:text-[14px] text-[#F3F4F8] shadow-lg">
            Databases
          </div>
          {/* Connector line ending in accent dot */}
          <div className="absolute top-1/2 -left-6 w-6 h-[1px] bg-[#7C8CFF]/50" />
          <div className="absolute top-1/2 -left-6 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#7C8CFF] shadow-[0_0_6px_#7C8CFF]" />
        </div>
      </motion.div>
    </div>
  );
};

