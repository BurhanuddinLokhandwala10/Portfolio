import React, { useState } from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  onClick,
}) => {
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);

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
      onClick={onClick}
      className={`group relative rounded-[20px] bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.10)] backdrop-blur-[12px] transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(124,140,255,0.45)] hover:shadow-[0_12px_30px_-10px_rgba(43,51,128,0.25)] overflow-hidden ${className}`}
    >
      {/* Soft radial spotlight following mouse on desktop */}
      {mousePos && (
        <div
          className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(124, 140, 255, 0.08), transparent 80%)`,
          }}
          aria-hidden="true"
        />
      )}
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
};

