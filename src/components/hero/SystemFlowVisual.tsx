import React, { useState } from 'react';
import { 
  Server, 
  Database, 
  ShieldCheck, 
  Layers, 
  Cpu, 
  Zap 
} from 'lucide-react';

interface NodeInfo {
  id: string;
  label: string;
  role: string;
  type: 'gateway' | 'router' | 'cache' | 'database' | 'queue';
  specs: string;
  details: string;
}

export const SystemFlowVisual: React.FC = () => {
  const [activeNodeId, setActiveNodeId] = useState<string>('dual-db');
  const [pulseTrigger, setPulseTrigger] = useState<boolean>(true);

  const nodes: NodeInfo[] = [
    {
      id: 'gateway',
      label: 'JWT & Gateway',
      role: 'Authentication & Rate Limiter',
      type: 'gateway',
      specs: 'Stateless Token Verify / Leaky Bucket',
      details: 'Inspects Authorization Bearer tokens, decrypts HMAC-SHA256 signatures, and drops malicious request floods.',
    },
    {
      id: 'router',
      label: 'Express Router',
      role: 'MVC Controller & Business Logic',
      type: 'router',
      specs: 'REST Endpoints + WebSockets',
      details: 'Coordinates service layers, handles input sanitation, and delegates payload transactions.',
    },
    {
      id: 'cache',
      label: 'Redis Cache',
      role: 'In-Memory Key/Value Store',
      type: 'cache',
      specs: '< 2ms Latency / TTL Eviction',
      details: 'Prevents database read saturation by caching expensive aggregated analytics with automated cache busting.',
    },
    {
      id: 'dual-db',
      label: 'Dual Database Tier',
      role: 'PostgreSQL + MongoDB Architecture',
      type: 'database',
      specs: 'Relational Snapshots + Dynamic Profiles',
      details: 'PostgreSQL manages ACID-compliant time-series snapshots; MongoDB manages dynamic user accounts & room-scoped chats.',
    },
    {
      id: 'queue',
      label: 'BullMQ Workers',
      role: 'Asynchronous Job Orchestrator',
      type: 'queue',
      specs: 'Redis-backed / Exponential Backoff',
      details: 'Non-blocking workers sync external GitHub & LeetCode APIs, offloading heavy processing away from client responses.',
    },
  ];

  const activeNode = nodes.find((n) => n.id === activeNodeId) || nodes[3];

  const triggerSimulation = () => {
    setPulseTrigger(false);
    setTimeout(() => setPulseTrigger(true), 50);
  };

  return (
    <div className="w-full rounded-2xl border border-slate-200/90 dark:border-white/[0.1] bg-white/60 dark:bg-[#0B0D13]/80 backdrop-blur-md p-5 sm:p-7 shadow-xl shadow-black/5 dark:shadow-black/20">
      {/* Visual Header & Telemetry */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-slate-200/80 dark:border-white/[0.08]">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-800 dark:text-slate-200">
            Backend Architecture Simulator
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline-flex font-mono text-[11px] text-slate-500 dark:text-slate-400">
            Protocol: <strong className="text-emerald-500 font-mono ml-1">HTTP/2 + WS</strong>
          </span>
          <button
            onClick={triggerSimulation}
            className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20 transition-all"
            title="Simulate Request Flow"
          >
            <Zap className="w-3 h-3" />
            Dispatch Request
          </button>
        </div>
      </div>

      {/* Interactive Topology Graph */}
      <div className="py-6 sm:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 relative">
          {/* Node 1: Ingress & Gateway */}
          <button
            onClick={() => setActiveNodeId('gateway')}
            className={`text-left p-3.5 rounded-xl border transition-all relative ${
              activeNodeId === 'gateway'
                ? 'border-emerald-500 bg-emerald-500/[0.08] shadow-[0_0_15px_rgba(16,185,129,0.15)] ring-1 ring-emerald-500/50'
                : 'border-slate-200 dark:border-white/[0.08] bg-slate-50 dark:bg-white/[0.02] hover:border-slate-300 dark:hover:border-white/20'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span className="text-[10px] font-mono text-slate-400">01</span>
            </div>
            <div className="font-semibold text-xs text-slate-900 dark:text-white">
              JWT Gateway
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 truncate">
              Auth & Limiter
            </div>
            {pulseTrigger && (
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping opacity-60" />
            )}
          </button>

          {/* Node 2: Express Router */}
          <button
            onClick={() => setActiveNodeId('router')}
            className={`text-left p-3.5 rounded-xl border transition-all ${
              activeNodeId === 'router'
                ? 'border-cyan-500 bg-cyan-500/[0.08] shadow-[0_0_15px_rgba(6,182,212,0.15)] ring-1 ring-cyan-500/50'
                : 'border-slate-200 dark:border-white/[0.08] bg-slate-50 dark:bg-white/[0.02] hover:border-slate-300 dark:hover:border-white/20'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <Server className="w-4 h-4 text-cyan-500" />
              <span className="text-[10px] font-mono text-slate-400">02</span>
            </div>
            <div className="font-semibold text-xs text-slate-900 dark:text-white">
              API Router
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 truncate">
              Express MVC
            </div>
          </button>

          {/* Node 3: Redis Cache */}
          <button
            onClick={() => setActiveNodeId('cache')}
            className={`text-left p-3.5 rounded-xl border transition-all ${
              activeNodeId === 'cache'
                ? 'border-amber-500 bg-amber-500/[0.08] shadow-[0_0_15px_rgba(245,158,11,0.15)] ring-1 ring-amber-500/50'
                : 'border-slate-200 dark:border-white/[0.08] bg-slate-50 dark:bg-white/[0.02] hover:border-slate-300 dark:hover:border-white/20'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <Layers className="w-4 h-4 text-amber-500" />
              <span className="text-[10px] font-mono text-slate-400">03</span>
            </div>
            <div className="font-semibold text-xs text-slate-900 dark:text-white">
              Redis Cache
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 truncate">
              Sub-ms Store
            </div>
          </button>

          {/* Node 4: Dual Database Tier */}
          <button
            onClick={() => setActiveNodeId('dual-db')}
            className={`text-left p-3.5 rounded-xl border transition-all ${
              activeNodeId === 'dual-db'
                ? 'border-indigo-500 bg-indigo-500/[0.08] shadow-[0_0_15px_rgba(99,102,241,0.15)] ring-1 ring-indigo-500/50'
                : 'border-slate-200 dark:border-white/[0.08] bg-slate-50 dark:bg-white/[0.02] hover:border-slate-300 dark:hover:border-white/20'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <Database className="w-4 h-4 text-indigo-500" />
              <span className="text-[10px] font-mono text-slate-400">04</span>
            </div>
            <div className="font-semibold text-xs text-slate-900 dark:text-white">
              Dual Databases
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 truncate">
              Postgres + Mongo
            </div>
          </button>

          {/* Node 5: BullMQ Queue */}
          <button
            onClick={() => setActiveNodeId('queue')}
            className={`text-left p-3.5 rounded-xl border transition-all ${
              activeNodeId === 'queue'
                ? 'border-emerald-500 bg-emerald-500/[0.08] shadow-[0_0_15px_rgba(16,185,129,0.15)] ring-1 ring-emerald-500/50'
                : 'border-slate-200 dark:border-white/[0.08] bg-slate-50 dark:bg-white/[0.02] hover:border-slate-300 dark:hover:border-white/20'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <Cpu className="w-4 h-4 text-emerald-400" />
              <span className="text-[10px] font-mono text-slate-400">05</span>
            </div>
            <div className="font-semibold text-xs text-slate-900 dark:text-white">
              BullMQ Workers
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 truncate">
              Async Jobs
            </div>
          </button>
        </div>
      </div>

      {/* Deep-Dive Inspection Card */}
      <div className="rounded-xl border border-slate-200/90 dark:border-white/[0.08] bg-slate-50/70 dark:bg-[#07090D] p-4 sm:p-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-200/80 dark:border-white/[0.06]">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-semibold text-slate-900 dark:text-white">
              Active Inspector:
            </span>
            <span className="font-semibold text-sm text-emerald-600 dark:text-emerald-400">
              {activeNode.label}
            </span>
          </div>
          <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-slate-200/60 dark:bg-white/[0.06] text-slate-600 dark:text-slate-400">
            {activeNode.specs}
          </span>
        </div>

        <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          {activeNode.details}
        </p>

        {activeNode.id === 'dual-db' && (
          <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <div className="p-2.5 rounded-lg bg-indigo-500/[0.06] border border-indigo-500/20">
              <span className="font-mono font-semibold text-indigo-500 dark:text-indigo-400 block mb-0.5">
                PostgreSQL Store
              </span>
              <span className="text-slate-500 dark:text-slate-400 text-[11px]">
                Strict relational schemas, time-series metrics snapshots, indexing on (user_id, timestamp).
              </span>
            </div>
            <div className="p-2.5 rounded-lg bg-emerald-500/[0.06] border border-emerald-500/20">
              <span className="font-mono font-semibold text-emerald-500 dark:text-emerald-400 block mb-0.5">
                MongoDB Document Store
              </span>
              <span className="text-slate-500 dark:text-slate-400 text-[11px]">
                Dynamic user profiles, JWT tokens, conversation rooms, and chat message collections.
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
