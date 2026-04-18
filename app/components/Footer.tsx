'use client';

import { AGENCY } from '@/data/agency';

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080810] border-t border-white/5">
      {/* CTA Banner */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-12">
        <div className="relative overflow-hidden bg-gradient-to-r from-violet-600/20 via-purple-600/10 to-cyan-600/20 border border-violet-500/20 rounded-3xl px-8 sm:px-12 py-12 text-center mb-16">
          <div className="absolute -top-20 -left-20 w-60 h-60 bg-violet-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-cyan-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
              Ready to Build Something{' '}
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Great?
              </span>
            </h2>
            <p className="text-white/50 text-lg mb-8 max-w-xl mx-auto">
              Let&rsquo;s turn your idea into a product that users love. Free consultation, no obligation.
            </p>
            <button
              id="footer-cta"
              onClick={() => scrollTo('#contact')}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-semibold rounded-2xl hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-2xl shadow-violet-500/30"
            >
              Start a Project Today
              <span>→</span>
            </button>
          </div>
        </div>

        {/* Footer links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-violet-500/30">
                <span className="text-white font-black text-sm">gH</span>
              </div>
              <span className="font-bold text-white text-lg tracking-tight">
                go<span className="text-violet-400">High</span>Tech
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs mb-5">
              {AGENCY.brand.description}
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {[
                {
                  href: AGENCY.brand.social.linkedin,
                  label: 'LinkedIn',
                  icon: (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  ),
                },
                {
                  href: AGENCY.brand.social.twitter,
                  label: 'Twitter',
                  icon: (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  ),
                },
                {
                  href: AGENCY.brand.social.github,
                  label: 'GitHub',
                  icon: (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                  ),
                },
                {
                  href: AGENCY.brand.social.instagram,
                  label: 'Instagram',
                  icon: (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  ),
                },
              ].map((soc) => (
                <a
                  key={soc.label}
                  href={soc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={soc.label}
                  id={`footer-social-${soc.label.toLowerCase()}`}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 hover:border-violet-500/30 transition-all duration-200"
                >
                  {soc.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Services</h3>
            <ul className="space-y-2.5">
              {AGENCY.services.slice(0, 4).map((s) => (
                <li key={s.id}>
                  <button
                    id={`footer-service-${s.id}`}
                    onClick={() => scrollTo('#services')}
                    className="text-white/40 hover:text-white/80 text-sm transition-colors text-left"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Company</h3>
            <ul className="space-y-2.5">
              {AGENCY.nav.map((item) => (
                <li key={item.href}>
                  <button
                    id={`footer-nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={() => scrollTo(item.href)}
                    className="text-white/40 hover:text-white/80 text-sm transition-colors text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${AGENCY.brand.email}`}
                  className="text-white/40 hover:text-white/80 text-sm transition-colors"
                >
                  {AGENCY.brand.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-sm">
            © {year} {AGENCY.brand.domain}. All rights reserved.
          </p>
          <p className="text-white/25 text-sm">
            Built with ♥ in Pune, India 🇮🇳
          </p>
        </div>
      </div>
    </footer>
  );
}
