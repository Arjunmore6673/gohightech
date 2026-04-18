'use client';

import { useState } from 'react';
import { AGENCY } from '@/data/agency';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Simulated submission — wire up to your backend / EmailJS / Formspree
    await new Promise((r) => setTimeout(r, 1500));
    setStatus('sent');
  };

  return (
    <section id="contact" className="bg-[#0b0b16] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Start Your{' '}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Project
            </span>
          </h2>
          <p className="max-w-xl mx-auto text-white/50 text-lg">
            Tell us about your idea. We will get back to you within 24 hours with a free consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact info */}
          <div className="space-y-8">
            {/* Info cards */}
            {[
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                ),
                label: 'Email Us',
                value: AGENCY.brand.email,
                href: `mailto:${AGENCY.brand.email}`,
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.06-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z" />
                  </svg>
                ),
                label: 'Call / WhatsApp',
                value: AGENCY.brand.phone,
                href: `tel:${AGENCY.brand.phone.replace(/-/g, '')}`,
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                  </svg>
                ),
                label: 'Location',
                value: AGENCY.brand.location,
                href: 'https://maps.google.com/?q=Pune,Maharashtra,India',
              },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 bg-white/[0.03] border border-white/8 rounded-2xl hover:bg-white/[0.06] hover:border-violet-500/30 transition-all duration-200 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-600/30 to-cyan-600/30 border border-violet-500/20 flex items-center justify-center text-violet-300 shrink-0 group-hover:from-violet-600 group-hover:to-cyan-600 group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <div>
                  <div className="text-white/40 text-xs uppercase tracking-wider mb-0.5">{item.label}</div>
                  <div className="text-white font-medium">{item.value}</div>
                </div>
              </a>
            ))}

            {/* FAQ */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Frequently Asked</h3>
              <div className="space-y-3">
                {AGENCY.faq.slice(0, 4).map((item, i) => (
                  <div
                    key={i}
                    className="bg-white/[0.03] border border-white/8 rounded-xl overflow-hidden"
                  >
                    <button
                      id={`faq-toggle-${i}`}
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-white/5 transition-colors"
                    >
                      <span className="text-white/80 text-sm font-medium pr-4">{item.q}</span>
                      <span
                        className={`text-violet-400 shrink-0 transition-transform duration-200 ${
                          openFaq === i ? 'rotate-45' : ''
                        }`}
                      >
                        +
                      </span>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openFaq === i ? 'max-h-40' : 'max-h-0'
                      }`}
                    >
                      <p className="px-5 pb-4 text-white/50 text-sm leading-relaxed">{item.a}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-white/[0.03] border border-white/8 rounded-3xl p-8 lg:p-10">
            {status === 'sent' ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8 text-emerald-400">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-white/50">We will get back to you within 24 hours.</p>
                <button
                  onClick={() => { setStatus('idle'); setForm({ name: '', email: '', service: '', message: '' }); }}
                  className="mt-6 px-6 py-2.5 rounded-xl bg-violet-600/20 text-violet-300 text-sm font-medium hover:bg-violet-600/30 transition-colors"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-bold text-white mb-6">Get a Free Quote</h3>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-name" className="block text-white/50 text-xs uppercase tracking-wider mb-2">
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Rahul Sharma"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-violet-500/50 focus:bg-white/8 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-white/50 text-xs uppercase tracking-wider mb-2">
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="rahul@company.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-violet-500/50 focus:bg-white/8 transition-all duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-service" className="block text-white/50 text-xs uppercase tracking-wider mb-2">
                    Service Needed
                  </label>
                  <select
                    id="contact-service"
                    name="service"
                    required
                    value={form.service}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-violet-500/50 transition-all duration-200 appearance-none"
                  >
                    <option value="" className="bg-[#0b0b16]">Select a service...</option>
                    {AGENCY.services.map((s) => (
                      <option key={s.id} value={s.id} className="bg-[#0b0b16]">
                        {s.title}
                      </option>
                    ))}
                    <option value="other" className="bg-[#0b0b16]">Other / Not Sure</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-white/50 text-xs uppercase tracking-wider mb-2">
                    Project Brief
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project — platform, features, timeline, budget..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-violet-500/50 focus:bg-white/8 transition-all duration-200 resize-none"
                  />
                </div>

                <button
                  id="contact-submit"
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full py-4 bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-semibold rounded-xl hover:opacity-90 hover:scale-[1.02] transition-all duration-200 shadow-2xl shadow-violet-500/30 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === 'sending' ? (
                    <>
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    'Send Message →'
                  )}
                </button>

                <p className="text-center text-white/30 text-xs">
                  No spam. We reply within 24 hours. 100% free consultation.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
