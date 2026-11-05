import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Database, Cpu, Check, Copy } from 'lucide-react';

export const HeroCodePreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'api' | 'dual-db' | 'queue'>('api');
  const [copied, setCopied] = useState(false);

  const tabs = [
    { id: 'api', label: 'REST API', icon: <Terminal className="w-3.5 h-3.5 text-cyan-500" /> },
    { id: 'dual-db', label: 'Dual-DB Schema', icon: <Database className="w-3.5 h-3.5 text-indigo-500" /> },
    { id: 'queue', label: 'BullMQ Queue', icon: <Cpu className="w-3.5 h-3.5 text-emerald-500" /> },
  ] as const;

  const codeSnippets = {
    api: `// GET /api/v1/analytics/summary (Cached in Redis)
{
  "status": "success",
  "latencyMs": 2.4,
  "cacheHit": true,
  "data": {
    "developer": "Burhanuddin Lokhandwala",
    "githubScore": 94.2,      // Commit cadence & PR reviews
    "dsaReadiness": 96.0,     // LeetCode consistency & contest rank
    "activeQueues": ["github-sync", "leetcode-crawler"],
    "dbSplit": {
      "authStore": "MongoDB",
      "analyticsStore": "PostgreSQL"
    }
  }
}`,
    'dual-db': `-- PostgreSQL: Indexed Time-Series Snapshots
CREATE TABLE metric_snapshots (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id VARCHAR(64) NOT NULL REFERENCES users(id),
  recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  github_commit_velocity INT NOT NULL,
  leetcode_rank INT NOT NULL,
  dsa_topic_distribution JSONB NOT NULL
);
CREATE INDEX idx_snapshots_user_time 
  ON metric_snapshots(user_id, recorded_at DESC);

// MongoDB: Flexible User & Session Store
const UserSchema = new Schema({
  username: { type: String, unique: true },
  passwordHash: { type: String, select: false },
  preferences: { syncInterval: Number }
});`,
    queue: `// Redis + BullMQ Asynchronous Job Worker
import { Worker, Queue } from 'bullmq';
const connection = { host: 'redis-cache', port: 6379 };

export const syncQueue = new Queue('sync-metrics', { connection });

// Rate-limited worker with exponential backoff
export const syncWorker = new Worker('sync-metrics', async (job) => {
  const { userId, ghToken } = job.data;
  const metrics = await fetchWithThrottling(userId, ghToken);
  await postgres.query(INSERT_SNAPSHOT, [userId, metrics]);
}, {
  connection,
  concurrency: 5,
  limiter: { max: 30, duration: 60000 } // Respect 3rd-party limits
});`,
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-2xl border border-slate-200/90 dark:border-white/[0.08] bg-slate-900 text-slate-200 shadow-2xl overflow-hidden font-mono text-xs">
      {/* Top Window Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-950/80 border-b border-white/[0.08]">
        {/* Window controls & Tabs */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>

          <div className="flex items-center gap-1 pl-2 border-l border-white/10">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] transition-colors ${
                  activeTab === tab.id
                    ? 'bg-white/10 text-white font-medium'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Copy button */}
        <button
          onClick={handleCopy}
          className="p-1 rounded text-slate-400 hover:text-white transition-colors"
          title="Copy snippet"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Code Body */}
      <div className="p-4 sm:p-5 overflow-x-auto max-h-[300px] leading-relaxed text-[11px] sm:text-xs text-slate-300">
        <AnimatePresence mode="wait">
          <motion.pre
            key={activeTab}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
          >
            <code>{codeSnippets[activeTab]}</code>
          </motion.pre>
        </AnimatePresence>
      </div>

      {/* Bottom Bar: Live System Stats */}
      <div className="px-4 py-2 bg-slate-950/60 border-t border-white/[0.06] flex items-center justify-between text-[10px] text-slate-400">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Production Specimen · Node.js / PostgreSQL / Redis</span>
        </div>
        <span className="hidden sm:inline font-mono">Status: 200 OK</span>
      </div>
    </div>
  );
};
