import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  label: string;
  title: string;
  italicWord?: string;
  subtext?: string;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  label,
  title,
  italicWord,
  subtext,
  className = '',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
      className={`mb-12 md:mb-16 text-left ${className}`}
    >
      {/* Mono label with accent dot */}
      <div className="inline-flex items-center gap-2 font-mono text-[13px] sm:text-[14px] text-[#9AA0B4] mb-3">
        <span className="text-[#7C8CFF] text-[10px] leading-none select-none">●</span>
        <span>{label}</span>
      </div>

      {/* H2 Title with optional italicized word */}
      <h2 className="text-[clamp(36px,5vw,56px)] leading-[1.1] tracking-[-0.02em] font-bold text-[#F3F4F8]">
        {italicWord && title.includes(italicWord) ? (
          <>
            {title.split(italicWord)[0]}
            <span className="italic font-semibold text-[#F3F4F8]">{italicWord}</span>
            {title.split(italicWord)[1]}
          </>
        ) : (
          title
        )}
      </h2>

      {/* Optional one-line muted subtext */}
      {subtext && (
        <p className="mt-4 text-[#9AA0B4] text-[17px] sm:text-[18px] leading-[1.65] max-w-[62ch]">
          {subtext}
        </p>
      )}
    </motion.div>
  );
};

