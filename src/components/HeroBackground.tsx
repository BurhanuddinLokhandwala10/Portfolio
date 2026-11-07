import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Code2, Database, Cloud } from 'lucide-react';

export const HeroBackground: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile || shouldReduceMotion) return;
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isMobile, shouldReduceMotion]);

  // 12 floating mono code tokens placed in outer margins (left 2% to 22%, right 78% to 98%)
  const tokens = [
    { text: 'GET /api/v1/users', left: '4%', top: '18%', delay: 0, size: '13px', blur: false },
    { text: '200 OK', left: '16%', top: '38%', delay: 1.5, size: '12px', blur: true },
    { text: 'async / await', left: '6%', top: '62%', delay: 3, size: '14px', blur: false },
    { text: '{ }', left: '18%', top: '82%', delay: 2, size: '16px', blur: false },
    { text: '</>', left: '8%', top: '48%', delay: 4, size: '15px', blur: true },
    { text: 'SELECT * FROM', left: '12%', top: '28%', delay: 0.8, size: '13px', blur: false },
    { text: 'npm run dev', right: '5%', top: '22%', delay: 1.2, size: '13px', blur: false },
    { text: 'git push origin main', right: '14%', top: '42%', delay: 3.2, size: '12px', blur: true },
    { text: 'redis.set()', right: '7%', top: '65%', delay: 0.5, size: '14px', blur: false },
    { text: 'socket.emit()', right: '17%', top: '80%', delay: 2.8, size: '13px', blur: false },
    { text: '=>', right: '9%', top: '50%', delay: 4.5, size: '16px', blur: true },
    { text: 'JWT', right: '15%', top: '30%', delay: 2.2, size: '14px', blur: false },
  ];

  const visibleTokens = isMobile ? tokens.slice(0, 6) : tokens;

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0"
      aria-hidden="true"
    >
      {/* Layer 1: Blueprint Grid with Radial Mask */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px),
            linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px, 48px 48px, 240px 240px, 240px 240px',
          maskImage: 'radial-gradient(circle at center, black 40%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 80%)',
        }}
      />

      {/* Layer 4: Desktop Smooth Cursor Spotlight */}
      {!isMobile && !shouldReduceMotion && (
        <div
          className="fixed w-[600px] h-[600px] rounded-full pointer-events-none transition-transform duration-150 ease-out"
          style={{
            transform: `translate3d(${mousePos.x - 300}px, ${mousePos.y - 300}px, 0)`,
            background: 'radial-gradient(circle, rgba(124, 140, 255, 0.07) 0%, transparent 65%)',
          }}
        />
      )}

      {/* Center Depth Layer: Isometric Three-Tile Stack Behind Text (Scale ~1.4, Opacity ~0.2, Blur 1px) */}
      <div className="absolute inset-0 flex items-center justify-center -translate-y-8 pointer-events-none">
        <div
          className="relative w-[340px] h-[340px] flex items-center justify-center opacity-20 filter blur-[1px] transform scale-[1.35] preserve-3d"
          style={{ perspective: '1200px' }}
        >
          <div
            className="relative w-[240px] h-[240px] preserve-3d"
            style={{
              transform: 'rotateX(58deg) rotateZ(-40deg)',
            }}
          >
            {/* Bottom Tile: Cloud Infrastructure (translateZ -90px, offsetY +70px) */}
            <motion.div
              animate={shouldReduceMotion ? {} : { y: [70, 62, 70] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
              className="absolute inset-0 rounded-[28px] border border-[rgba(255,255,255,0.25)] flex items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
              style={{
                transform: 'translateZ(-90px)',
                background: 'linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.04) 100%)',
              }}
            >
              <div
                className="p-4 rounded-xl bg-[#07090F]/70 border border-white/20"
                style={{ transform: 'rotateZ(40deg) rotateX(-58deg)' }}
              >
                <Cloud className="w-10 h-10 text-white stroke-[2]" />
              </div>
            </motion.div>

            {/* Middle Tile: Database Layer (translateZ 0px, offsetY 0px) */}
            <motion.div
              animate={shouldReduceMotion ? {} : { y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
              className="absolute inset-0 rounded-[28px] border border-[rgba(255,255,255,0.3)] flex items-center justify-center shadow-[0_25px_60px_rgba(0,0,0,0.9)]"
              style={{
                transform: 'translateZ(0px)',
                background: 'linear-gradient(135deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.06) 100%)',
                boxShadow: 'inset -2px -2px 0 0 rgba(124, 140, 255, 0.8), 0 25px 50px rgba(0,0,0,0.7)',
              }}
            >
              <div
                className="p-4 rounded-xl bg-[#0E1220]/80 border border-[#7C8CFF]/50"
                style={{ transform: 'rotateZ(40deg) rotateX(-58deg)' }}
              >
                <Database className="w-10 h-10 text-white stroke-[2]" />
              </div>
            </motion.div>

            {/* Top Tile: Application Code & APIs (translateZ 90px, offsetY -70px) */}
            <motion.div
              animate={shouldReduceMotion ? {} : { y: [-70, -78, -70] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0 }}
              className="absolute inset-0 rounded-[28px] border border-[rgba(255,255,255,0.35)] flex items-center justify-center shadow-[0_30px_70px_rgba(0,0,0,0.9)]"
              style={{
                transform: 'translateZ(90px)',
                background: 'linear-gradient(135deg, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.08) 100%)',
              }}
            >
              <div
                className="p-4 rounded-xl bg-[#07090F]/80 border border-white/20"
                style={{ transform: 'rotateZ(40deg) rotateX(-58deg)' }}
              >
                <Code2 className="w-10 h-10 text-white stroke-[2]" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Layer 2: System Architecture Flow (Left and Right Flanks) */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 900"
        fill="none"
        preserveAspectRatio="none"
      >
        {/* Left Traces */}
        <path
          id="trace-left-1"
          d="M 60 120 L 180 120 L 240 180 L 240 340 L 160 420 L 160 640 L 80 720"
          stroke="rgba(255, 255, 255, 0.08)"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          id="trace-left-2"
          d="M 120 220 L 200 300 L 200 520 L 280 600 L 280 760"
          stroke="rgba(124, 140, 255, 0.15)"
          strokeWidth="1.5"
          strokeDasharray="6 6"
          fill="none"
        />

        {/* Right Traces */}
        <path
          id="trace-right-1"
          d="M 1380 140 L 1260 140 L 1200 200 L 1200 360 L 1280 440 L 1280 660 L 1340 720"
          stroke="rgba(255, 255, 255, 0.08)"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          id="trace-right-2"
          d="M 1320 240 L 1240 320 L 1240 540 L 1160 620 L 1160 780"
          stroke="rgba(124, 140, 255, 0.15)"
          strokeWidth="1.5"
          strokeDasharray="6 6"
          fill="none"
        />

        {/* Glowing Accent Packets along traces */}
        {!shouldReduceMotion && (
          <>
            <circle r="3.5" fill="#7C8CFF" filter="drop-shadow(0 0 6px #7C8CFF)">
              <animateMotion
                dur="8s"
                repeatCount="indefinite"
                path="M 60 120 L 180 120 L 240 180 L 240 340 L 160 420 L 160 640 L 80 720"
              />
            </circle>

            <circle r="3" fill="#7C8CFF" opacity="0.8">
              <animateMotion
                dur="11s"
                repeatCount="indefinite"
                path="M 120 220 L 200 300 L 200 520 L 280 600 L 280 760"
              />
            </circle>

            <circle r="3.5" fill="#7C8CFF" filter="drop-shadow(0 0 6px #7C8CFF)">
              <animateMotion
                dur="9s"
                repeatCount="indefinite"
                path="M 1380 140 L 1260 140 L 1200 200 L 1200 360 L 1280 440 L 1280 660 L 1340 720"
              />
            </circle>

            <circle r="3" fill="#7C8CFF" opacity="0.8">
              <animateMotion
                dur="12s"
                repeatCount="indefinite"
                path="M 1320 240 L 1240 320 L 1240 540 L 1160 620 L 1160 780"
              />
            </circle>
          </>
        )}
      </svg>

      {/* Layer 2: Architecture Node Chips sitting on the traces */}
      {/* Left side nodes */}
      <div className="absolute top-[110px] left-[30px] hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-chip bg-[#0E1220]/80 border border-white/10 font-mono text-[12px] text-[#9AA0B4]">
        <span className="w-1.5 h-1.5 rounded-full bg-[#7C8CFF] animate-pulse" />
        Client
      </div>

      <div className="absolute top-[220px] left-[130px] hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-chip bg-[#0E1220]/80 border border-[#7C8CFF]/20 font-mono text-[12px] text-[#F3F4F8]">
        <span className="w-1.5 h-1.5 rounded-full bg-[#7C8CFF]" />
        API Gateway
      </div>

      <div className="absolute top-[370px] left-[70px] hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-chip bg-[#0E1220]/80 border border-white/10 font-mono text-[12px] text-[#9AA0B4]">
        Auth (JWT)
      </div>

      <div className="absolute top-[520px] left-[150px] hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-chip bg-[#0E1220]/80 border border-white/10 font-mono text-[12px] text-[#9AA0B4]">
        APIs
      </div>

      <div className="absolute top-[680px] left-[50px] hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-chip bg-[#0E1220]/80 border border-white/10 font-mono text-[12px] text-[#9AA0B4]">
        Backend
      </div>

      {/* Right side nodes */}
      <div className="absolute top-[130px] right-[40px] hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-chip bg-[#0E1220]/80 border border-white/10 font-mono text-[12px] text-[#9AA0B4]">
        <span className="w-1.5 h-1.5 rounded-full bg-[#7C8CFF] animate-pulse" />
        Cache (Redis)
      </div>

      <div className="absolute top-[260px] right-[140px] hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-chip bg-[#0E1220]/80 border border-[#7C8CFF]/20 font-mono text-[12px] text-[#F3F4F8]">
        Queue (BullMQ)
      </div>

      <div className="absolute top-[410px] right-[80px] hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-chip bg-[#0E1220]/80 border border-white/10 font-mono text-[12px] text-[#9AA0B4]">
        PostgreSQL
      </div>

      <div className="absolute top-[570px] right-[160px] hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-chip bg-[#0E1220]/80 border border-white/10 font-mono text-[12px] text-[#9AA0B4]">
        MongoDB
      </div>

      <div className="absolute top-[710px] right-[60px] hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-chip bg-[#0E1220]/80 border border-white/10 font-mono text-[12px] text-[#9AA0B4]">
        Databases
      </div>

      {/* Layer 3: Floating Code Tokens (Drifting Slowly Diagonally Upward) */}
      {visibleTokens.map((token, i) => (
        <motion.div
          key={i}
          animate={
            shouldReduceMotion
              ? {}
              : {
                  y: [0, -18, 0],
                  x: [0, 6, 0],
                }
          }
          transition={{
            duration: 8 + (i % 4) * 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: token.delay,
          }}
          className={`absolute font-mono text-[#F3F4F8] select-none ${
            token.blur ? 'filter blur-[1px]' : ''
          }`}
          style={{
            left: token.left,
            right: token.right,
            top: token.top,
            fontSize: token.size,
            opacity: 0.1,
          }}
        >
          {token.text}
        </motion.div>
      ))}
    </div>
  );
};

