'use client';

import { JSX, useState } from 'react';
import { AGENCY } from '@/data/agency';

const ICONS: Record<string, JSX.Element> = {
  android: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
      <path d="M17.523 15.341A2.474 2.474 0 0115.05 17.8H8.95a2.474 2.474 0 01-2.473-2.459V9.8h11.046v5.541zM6.32 8.4l-1.71-2.96a.5.5 0 01.866-.5l1.74 3.01A7.97 7.97 0 0112 7a7.97 7.97 0 014.784 1.95l1.74-3.01a.5.5 0 01.865.5L17.68 8.4H6.32zm3.88-2.1a.6.6 0 110 1.2.6.6 0 010-1.2zm3.6 0a.6.6 0 110 1.2.6.6 0 010-1.2z" />
    </svg>
  ),
  apple: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
      <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701z" />
    </svg>
  ),
  globe: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20M2 12h20" />
    </svg>
  ),
  palette: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7">
      <circle cx="13.5" cy="6.5" r=".5" /><circle cx="17.5" cy="10.5" r=".5" /><circle cx="8.5" cy="7.5" r=".5" /><circle cx="6.5" cy="12.5" r=".5" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 011.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
    </svg>
  ),
  cloud: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7">
      <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" />
    </svg>
  ),
  lightbulb: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7">
      <path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.65V17a2 2 0 002 2h4a2 2 0 002-2v-2.35A7 7 0 0012 2z" />
    </svg>
  ),
};

export default function Services() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="services" className="bg-[#080810] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm font-medium mb-4">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Our{' '}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-white/50 text-lg">
            End-to-end digital product development — from the first wireframe to production deployment.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AGENCY.services.map((svc) => (
            <div
              key={svc.id}
              id={`service-card-${svc.id}`}
              onClick={() => setActive(active === svc.id ? null : svc.id)}
              className={`relative group cursor-pointer bg-white/[0.03] border rounded-2xl p-7 transition-all duration-300 hover:bg-white/[0.06] ${active === svc.id
                  ? 'border-violet-500/50 shadow-lg shadow-violet-500/10'
                  : 'border-white/8 hover:border-white/15'
                }`}
            >
              {/* Badge */}
              {svc.badge && (
                <span className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-violet-500/20 text-violet-300 text-xs font-semibold border border-violet-500/30">
                  {svc.badge}
                </span>
              )}

              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${svc.color} flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
              >
                {ICONS[svc.icon]}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-violet-300 transition-colors">
                {svc.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed mb-4">
                {svc.shortDesc}
              </p>

              {/* Expandable features */}
              <div
                className={`overflow-hidden transition-all duration-300 ${active === svc.id ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                  }`}
              >
                <p className="text-white/60 text-sm mb-4 leading-relaxed">{svc.description}</p>
                <ul className="space-y-2">
                  {svc.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-white/70">
                      <span className="w-1.5 h-1.5 bg-violet-400 rounded-full shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 flex items-center gap-1 text-sm text-violet-400 font-medium group-hover:gap-2 transition-all">
                {active === svc.id ? 'Show less' : 'Learn more'}
                <span className={`transition-transform duration-200 ${active === svc.id ? 'rotate-90' : ''}`}>
                  →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
