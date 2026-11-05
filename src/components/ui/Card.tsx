import React from 'react';
import { cn } from '../../utils/cn';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
  borderGlow?: 'emerald' | 'cyan' | 'indigo' | 'none';
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  hoverEffect = false,
  borderGlow = 'none',
  ...props
}) => {
  const glowStyles = {
    emerald: 'hover:border-emerald-500/40 hover:shadow-[0_0_25px_rgba(16,185,129,0.08)]',
    cyan: 'hover:border-cyan-500/40 hover:shadow-[0_0_25px_rgba(6,182,212,0.08)]',
    indigo: 'hover:border-indigo-500/40 hover:shadow-[0_0_25px_rgba(99,102,241,0.08)]',
    none: '',
  };

  return (
    <div
      className={cn(
        'relative rounded-xl border border-slate-200/90 dark:border-white/[0.08] bg-white/70 dark:bg-[#10121A]/90 backdrop-blur-sm p-6 transition-all duration-300',
        hoverEffect && 'hover:-translate-y-0.5 hover:border-slate-300 dark:hover:border-white/[0.16] hover:bg-white dark:hover:bg-[#131622]',
        glowStyles[borderGlow],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

