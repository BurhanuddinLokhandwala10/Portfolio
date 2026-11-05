import React from 'react';
import { Badge } from '../ui/Badge';
import { PROFILE } from '../../data/profile';

export const AvailabilityBadge: React.FC = () => {
  if (!PROFILE.availability.isAvailable) return null;

  return (
    <div className="inline-flex items-center gap-2">
      <Badge
        variant="emerald"
        size="md"
        pulse
        className="backdrop-blur-md bg-emerald-500/[0.08] dark:bg-emerald-500/[0.12] border-emerald-500/30 text-emerald-700 dark:text-emerald-300 shadow-sm shadow-emerald-500/10"
      >
        <span>{PROFILE.availability.status}</span>
        <span className="text-slate-400 dark:text-slate-500 mx-1">•</span>
        <span className="font-normal text-[11px] text-slate-600 dark:text-slate-300">
          {PROFILE.availability.type}
        </span>
      </Badge>
    </div>
  );
};

