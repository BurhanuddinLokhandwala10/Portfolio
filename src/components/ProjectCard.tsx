import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, ExternalLink, Globe } from 'lucide-react';

interface ProjectData {
  id: string;
  featured: boolean;
  title: string;
  summary: string;
  highlights: string[];
  whatWasHard?: string;
  tech: string[];
  browserUrl: string;
  liveUrl?: string;
  githubUrl?: string;
}

interface ProjectCardProps {
  project: ProjectData;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);
  const isEven = index % 2 === 0;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    setMousePos(null);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group relative rounded-[20px] bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.10)] backdrop-blur-[12px] p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:border-[rgba(124,140,255,0.45)] hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(43,51,128,0.3)] overflow-hidden ${
        project.featured ? 'lg:py-14' : ''
      }`}
    >
      {/* Soft mouse spotlight inside card */}
      {mousePos && (
        <div
          className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(550px circle at ${mousePos.x}px ${mousePos.y}px, rgba(124, 140, 255, 0.08), transparent 75%)`,
          }}
          aria-hidden="true"
        />
      )}

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Browser Mockup Image (7 cols) - Alternating side based on index */}
        <div
          className={`lg:col-span-7 relative ${
            isEven ? 'lg:order-1' : 'lg:order-2'
          }`}
        >
          {/* Accent glow behind browser frame */}
          <div
            className="pointer-events-none absolute inset-0 rounded-2xl bg-[#7C8CFF] opacity-15 blur-2xl group-hover:opacity-25 transition-opacity duration-300 -z-10"
            aria-hidden="true"
          />

          {/* Browser Window Frame */}
          <div className="rounded-[16px] border border-[rgba(255,255,255,0.14)] bg-[#0E1220]/90 overflow-hidden shadow-2xl transition-transform duration-300 group-hover:scale-[1.02]">
            {/* 36px Browser Header Bar */}
            <div className="h-[36px] bg-[#07090F]/80 border-b border-[rgba(255,255,255,0.08)] px-4 flex items-center justify-between">
              {/* 3 Window Control Dots */}
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
              </div>

              {/* URL Pill */}
              <div className="flex items-center gap-2 px-3 py-0.5 rounded-full bg-[rgba(255,255,255,0.06)] border border-white/5 font-mono text-[11px] text-[#9AA0B4]">
                <Globe className="w-3 h-3 text-[#7C8CFF]" />
                <span className="truncate max-w-[200px] sm:max-w-[280px]">
                  {project.browserUrl}
                </span>
              </div>

              <div className="w-8" />
            </div>

            {/* Custom Browser Content Canvas */}
            <div className="p-6 sm:p-8 min-h-[240px] sm:min-h-[290px] flex flex-col justify-between bg-gradient-to-br from-[#07090F] to-[#0E1220]">
              <div className="flex items-center justify-between pb-4 border-b border-white/5 font-mono text-xs text-[#9AA0B4]">
                <span className="text-[#7C8CFF]">sys.metrics.stream</span>
                <span>STATUS 200 OK</span>
              </div>

              {/* Dynamic Mockup Graphic Elements */}
              <div className="py-6 space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between p-3 rounded-lg bg-white/[0.03] border border-white/5">
                  <span className="text-[#F3F4F8]">{project.title}</span>
                  <span className="text-[#7C8CFF] font-semibold">Active</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5 text-center">
                    <div className="text-[10px] text-[#9AA0B4]">Latency</div>
                    <div className="text-[#F3F4F8] font-bold mt-0.5">24ms</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5 text-center">
                    <div className="text-[10px] text-[#9AA0B4]">Throughput</div>
                    <div className="text-[#F3F4F8] font-bold mt-0.5">99.9%</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5 text-center">
                    <div className="text-[10px] text-[#9AA0B4]">Queues</div>
                    <div className="text-[#7C8CFF] font-bold mt-0.5">Synced</div>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#9AA0B4]">
                <span>Arch: Dual-DB + Asynchronous Workers</span>
                <span className="text-white/40">Verified</span>
              </div>
            </div>
          </div>
        </div>

        {/* Text Details (5 cols) */}
        <div
          className={`lg:col-span-5 flex flex-col items-start text-left ${
            isEven ? 'lg:order-2' : 'lg:order-1'
          }`}
        >
          {/* Top Meta: Number + Featured Pill */}
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-[13px] text-[#7C8CFF] font-medium tracking-wider">
              {project.id} / 03
            </span>
            {project.featured && (
              <span className="px-2.5 py-0.5 rounded-full bg-[#7C8CFF]/15 border border-[#7C8CFF]/30 font-mono text-[11px] font-semibold text-[#7C8CFF] tracking-wider uppercase">
                Featured Flagship
              </span>
            )}
          </div>

          {/* Title */}
          <h3
            className={`font-bold text-[#F3F4F8] tracking-tight mb-3 ${
              project.featured
                ? 'text-[28px] sm:text-[34px]'
                : 'text-[24px] sm:text-[28px]'
            }`}
          >
            {project.title}
          </h3>

          {/* One-sentence Summary */}
          <p className="text-[15px] sm:text-[16px] text-[#9AA0B4] leading-relaxed mb-5">
            {project.summary}
          </p>

          {/* Bullet Highlights with Accent Dots */}
          <ul className="space-y-2 mb-5">
            {project.highlights.map((h, i) => (
              <li
                key={i}
                className="flex items-start gap-2.5 text-[14px] text-[#F3F4F8]/85 leading-relaxed"
              >
                <span className="text-[#7C8CFF] mt-1 text-xs">●</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>

          {/* What Was Hard (Hidden if empty) */}
          {project.whatWasHard && (
            <div className="mb-6 p-3.5 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-[#9AA0B4] leading-relaxed">
              <span className="font-mono font-semibold text-[#F3F4F8] block mb-1">
                What was hard:
              </span>
              {project.whatWasHard}
            </div>
          )}

          {/* Tech Chips */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 rounded-chip bg-white/[0.03] border border-white/10 font-mono text-[12px] text-[#9AA0B4]"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Action Buttons (Hide if URL is empty) */}
          <div className="flex flex-wrap items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="h-11 px-6 rounded-pill bg-[#E9ECFF] text-[#07090F] font-semibold text-[13px] inline-flex items-center gap-2 transition-all duration-200 hover:bg-white hover:shadow-[0_0_20px_rgba(233,236,255,0.3)] active:scale-[0.98]"
              >
                <span>Live Demo</span>
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="h-11 px-5 rounded-pill border border-[rgba(255,255,255,0.20)] hover:border-[#7C8CFF] hover:bg-[#7C8CFF]/5 text-[#F3F4F8] text-[13px] font-mono inline-flex items-center gap-2 transition-all duration-200"
              >
                <Github className="w-3.5 h-3.5 text-[#7C8CFF]" />
                <span>GitHub</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

