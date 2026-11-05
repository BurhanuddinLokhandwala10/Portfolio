import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PROFILE } from '../data/profile';
import { Copy, Check, Send, Mail } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'sent'>('idle');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('sent');
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setFormStatus('idle'), 4000);
    }, 700);
  };

  return (
    <div className="space-y-6">
      {/* Quick Direct Inquiries Banner */}
      <div className="p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-white/60 dark:bg-white/[0.02] backdrop-blur-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center flex-shrink-0">
            <Mail className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
              Direct Contact
            </span>
            <a
              href={`mailto:${PROFILE.email}`}
              className="text-xs sm:text-sm font-mono font-medium text-slate-900 dark:text-white hover:text-emerald-500 transition-colors"
            >
              {PROFILE.email}
            </a>
          </div>
        </div>

        <button
          onClick={handleCopyEmail}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/[0.06] text-xs font-mono text-slate-700 dark:text-slate-300 transition-all active:scale-95"
        >
          {copiedEmail ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-500" />
              <span className="text-emerald-600 dark:text-emerald-400 font-medium">Copied to Clipboard</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy Email</span>
            </>
          )}
        </button>
      </div>

      {/* Message Form Card */}
      <div className="p-5 sm:p-6 rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-white/60 dark:bg-white/[0.02] backdrop-blur-sm space-y-4">
        <div className="space-y-1">
          <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
            Send a Quick Note
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Have a question or looking to connect regarding an internship or backend role? Reach out below.
          </p>
        </div>

        <form onSubmit={handleFormSubmit} className="space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <input
              type="text"
              placeholder="Your name"
              required
              value={formState.name}
              onChange={(e) => setFormState({ ...formState, name: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-white/[0.03] text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 text-xs transition-all"
            />
            <input
              type="email"
              placeholder="Your email address"
              required
              value={formState.email}
              onChange={(e) => setFormState({ ...formState, email: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-white/[0.03] text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 text-xs transition-all"
            />
          </div>
          <textarea
            rows={3}
            placeholder="Your message..."
            required
            value={formState.message}
            onChange={(e) => setFormState({ ...formState, message: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-white/[0.03] text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 text-xs transition-all resize-y"
          />
          <div>
            <motion.button
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={formStatus !== 'idle'}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-all shadow-xs disabled:opacity-50"
            >
              {formStatus === 'submitting' ? (
                'Sending message...'
              ) : formStatus === 'sent' ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Message Sent Successfully</span>
                </>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message</span>
                </>
              )}
            </motion.button>
          </div>
        </form>
      </div>
    </div>
  );
};
