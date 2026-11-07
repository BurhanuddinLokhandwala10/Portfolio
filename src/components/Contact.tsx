import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Copy,
  Check,
  Send,
  MapPin,
  Github,
  Linkedin,
  AlertCircle,
  Sparkles,
} from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { GlassCard } from './GlassCard';
import { PERSONAL_INFO } from '../data';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    honeypot: '', // Spam honeypot
  });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  const validate = () => {
    const newErrors: { name?: string; email?: string; message?: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your name.';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address.';
    }
    if (!formData.message.trim()) newErrors.message = 'Please enter a message.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Reject spam honeypot
    if (formData.honeypot) return;
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          honeypot: formData.honeypot,
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok) {
        setToast({
          type: 'success',
          message: "Thanks for getting in touch! I'll get back to you as soon as possible.",
        });
        setFormData({ name: '', email: '', message: '', honeypot: '' });
      } else {
        setToast({
          type: 'error',
          message:
            data.error ||
            'Failed to dispatch email via Resend. Check your API key in .env or email directly.',
        });
      }
    } catch (err: any) {
      setToast({
        type: 'error',
        message: 'Network error communicating with the server. Please check connection.',
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setToast(null), 8000);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-32 relative scroll-mt-20">
      {/* Soft blurred accent-deep glow positioned behind the contact section */}
      <div
        className="pointer-events-none absolute bottom-10 right-0 w-[550px] h-[550px] rounded-full blur-[160px] opacity-25 bg-[#2B3380] -z-10"
        aria-hidden="true"
      />

      <div className="max-w-[1280px] mx-auto px-8 lg:px-16">
        <SectionHeader
          label="05 / Contact"
          title="Let's build something together."
          italicWord="together."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Inquiries */}
          <div className="lg:col-span-5 flex flex-col items-start space-y-8">
            <p className="text-[18px] leading-[1.65] text-[#9AA0B4] max-w-[480px]">
              Open to Backend and Fullstack roles. The fastest way to reach me is email.
            </p>

            {/* Email link with Copy button */}
            <div className="w-full p-6 rounded-[20px] bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] backdrop-blur-sm space-y-4">
              <span className="font-mono text-xs uppercase tracking-wider text-[#9AA0B4] flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#7C8CFF]" />
                Direct Email
              </span>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="font-mono text-[16px] sm:text-[18px] text-[#F3F4F8] hover:text-[#7C8CFF] underline underline-offset-4 decoration-[#7C8CFF]/50 transition-colors break-all"
                >
                  {PERSONAL_INFO.email}
                </a>

                <button
                  onClick={handleCopyEmail}
                  type="button"
                  aria-label="Copy email address"
                  className="h-10 px-4 rounded-pill border border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.04)] hover:border-[#7C8CFF] hover:bg-[#7C8CFF]/5 text-xs font-mono text-[#F3F4F8] inline-flex items-center gap-1.5 transition-all duration-200 shrink-0 self-start sm:self-auto active:scale-95 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#7C8CFF]" />
                      <span className="text-[#7C8CFF]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#9AA0B4]" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Location & Social Profile Links */}
            <div className="space-y-4 w-full">
              <div className="flex items-center gap-3 text-sm text-[#9AA0B4]">
                <div className="p-2 rounded-lg bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)]">
                  <MapPin className="w-4 h-4 text-[#7C8CFF]" />
                </div>
                <span>{PERSONAL_INFO.location}</span>
              </div>

              {(PERSONAL_INFO.github || PERSONAL_INFO.linkedin) && (
                <div className="flex items-center gap-3 pt-2">
                  {PERSONAL_INFO.github && (
                    <a
                      href={PERSONAL_INFO.github}
                      target="_blank"
                      rel="noreferrer"
                      className="h-10 px-4 rounded-pill border border-[rgba(255,255,255,0.15)] hover:border-[#7C8CFF] hover:bg-[#7C8CFF]/5 text-[#F3F4F8] text-xs font-mono inline-flex items-center gap-2 transition-all duration-200"
                    >
                      <Github className="w-4 h-4 text-[#7C8CFF]" />
                      <span>GitHub</span>
                    </a>
                  )}

                  {PERSONAL_INFO.linkedin && (
                    <a
                      href={PERSONAL_INFO.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="h-10 px-4 rounded-pill border border-[rgba(255,255,255,0.15)] hover:border-[#7C8CFF] hover:bg-[#7C8CFF]/5 text-[#F3F4F8] text-xs font-mono inline-flex items-center gap-2 transition-all duration-200"
                    >
                      <Linkedin className="w-4 h-4 text-[#7C8CFF]" />
                      <span>LinkedIn</span>
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Glass Contact Form Card (Powered by Resend) */}
          <div className="lg:col-span-7">
            <GlassCard className="p-8 sm:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot field (hidden from screen readers & visual users) */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* Name Field */}
                <div>
                  <label className="block text-xs font-mono text-[#9AA0B4] uppercase tracking-wider mb-2">
                    Name <span className="text-[#7C8CFF]">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: undefined });
                    }}
                    placeholder="Alex Morgan"
                    className="w-full h-12 px-4 rounded-chip bg-[#0E1220] border border-[rgba(255,255,255,0.10)] focus:border-[#7C8CFF] text-[#F3F4F8] text-sm placeholder:text-[#9AA0B4]/40 transition-colors"
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-[#7C8CFF] flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-xs font-mono text-[#9AA0B4] uppercase tracking-wider mb-2">
                    Email <span className="text-[#7C8CFF]">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: undefined });
                    }}
                    placeholder="alex@company.com"
                    className="w-full h-12 px-4 rounded-chip bg-[#0E1220] border border-[rgba(255,255,255,0.10)] focus:border-[#7C8CFF] text-[#F3F4F8] text-sm placeholder:text-[#9AA0B4]/40 transition-colors"
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-[#7C8CFF] flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-xs font-mono text-[#9AA0B4] uppercase tracking-wider mb-2">
                    Message <span className="text-[#7C8CFF]">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: undefined });
                    }}
                    placeholder="Hi Burhanuddin, we came across your work on the Developer Productivity Hub and would like to speak regarding an SDE role..."
                    className="w-full p-4 rounded-chip bg-[#0E1220] border border-[rgba(255,255,255,0.10)] focus:border-[#7C8CFF] text-[#F3F4F8] text-sm placeholder:text-[#9AA0B4]/40 transition-colors resize-none"
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-[#7C8CFF] flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 rounded-pill bg-[#E9ECFF] text-[#07090F] font-semibold text-sm inline-flex items-center justify-center gap-2 transition-all duration-200 hover:bg-white hover:shadow-[0_0_25px_rgba(233,236,255,0.3)] disabled:opacity-60 active:scale-[0.99] cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-[#07090F] border-t-transparent rounded-full animate-spin" />
                      <span>Sending via Resend...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send message</span>
                    </>
                  )}
                </button>
              </form>

              {/* Toast Feedback */}
              <AnimatePresence>
                {toast && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className={`mt-4 p-4 rounded-xl border text-xs font-mono flex items-center gap-2 ${toast.type === 'success'
                      ? 'bg-[#7C8CFF]/10 border-[#7C8CFF]/30 text-[#F3F4F8]'
                      : 'bg-red-500/10 border-red-500/30 text-red-200'
                      }`}
                  >
                    {toast.type === 'success' ? (
                      <Sparkles className="w-4 h-4 text-[#7C8CFF] shrink-0" />
                    ) : (
                      <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                    )}
                    <span>{toast.message}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};
