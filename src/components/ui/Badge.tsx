import React from 'react';
import { cn } from '../../utils/cn';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'emerald' | 'cyan' | 'indigo' | 'neutral' | 'outline';
  size?: 'sm' | 'md';
  pulse?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  className,
  variant = 'neutral',
  size = 'sm',
  pulse = false,
  ...props
}) => {
  const variantStyles = {
    emerald: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 dark:text-emerald-400',
    cyan: 'bg-cyan-500/10 text-cyan-500 dark:text-cyan-400 border border-cyan-500/20',
    indigo: 'bg-indigo-500/10 text-indigo-500 dark:text-indigo-400 border border-indigo-500/20',
    neutral: 'bg-slate-100 dark:bg-white/[0.05] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/[0.08]',
    outline: 'border border-slate-300 dark:border-white/10 text-slate-600 dark:text-slate-400',
  };

  const sizeStyles = {
    sm: 'text-xs px-2.5 py-0.5 rounded-full font-mono font-medium',
    md: 'text-xs sm:text-sm px-3 py-1 rounded-full font-mono font-medium',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 transition-colors',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
      )}
      {children}
    </span>
  );
};

