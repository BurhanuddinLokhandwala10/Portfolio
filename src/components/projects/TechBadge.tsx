import React from 'react';

interface TechBadgeProps {
  name: string;
}

export const TechBadge: React.FC<TechBadgeProps> = ({ name }) => {
  const getBadgeStyle = (tech: string) => {
    const lower = tech.toLowerCase();
    if (lower.includes('postgre') || lower.includes('mongo') || lower.includes('db')) {
      return 'bg-indigo-500/10 text-indigo-500 dark:text-indigo-400 border-indigo-500/20';
    }
    if (lower.includes('redis') || lower.includes('bullmq') || lower.includes('socket')) {
      return 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20';
    }
    if (lower.includes('jwt') || lower.includes('bcrypt')) {
      return 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20';
    }
    if (lower.includes('sanity') || lower.includes('nodemailer') || lower.includes('emailjs')) {
      return 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20';
    }
    return 'bg-slate-100 dark:bg-white/[0.05] text-slate-700 dark:text-slate-300 border-slate-200 dark:border-white/[0.08]';
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-mono font-medium border transition-colors ${getBadgeStyle(
        name
      )}`}
    >
      {name}
    </span>
  );
};

