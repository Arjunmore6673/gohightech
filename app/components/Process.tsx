import { AGENCY } from '@/data/agency';
import { JSX } from 'react';

const ICONS: Record<string, JSX.Element> = {
  search: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
      <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
    </svg>
  ),
  palette: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
      <circle cx="13.5" cy="6.5" r=".5" /><circle cx="17.5" cy="10.5" r=".5" /><circle cx="8.5" cy="7.5" r=".5" /><circle cx="6.5" cy="12.5" r=".5" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 011.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
    </svg>
  ),
  code: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
      <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" />
    </svg>
  ),
  rocket: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2l-.55-.55M10.5 19.5L12 21l3.5-3.5M19.5 4.5S18 2 15 2C12 2 9.5 4 8 7l9 9c3-1.5 5-4 5-7 0-3-2.5-4.5-2.5-4.5z" />
    </svg>
  ),
  support: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
      <circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3M12 17h.01" />
    </svg>
  ),
};

export default function Process() {
  return (
    <section id="process" className="bg-[#0b0b16] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-sm font-medium mb-4">
            How We Work
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Our{' '}
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              Process
            </span>
          </h2>
          <p className="max-w-xl mx-auto text-white/50 text-lg">
            A proven 6-step process that keeps you in control and us accountable.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-14 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {AGENCY.process.map((step, i) => (
              <div
                key={step.step}
                id={`process-step-${step.step}`}
                className="relative group bg-white/[0.03] border border-white/8 rounded-2xl p-7 hover:bg-white/[0.06] hover:border-violet-500/30 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Step number */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-600/30 to-cyan-600/30 border border-violet-500/20 flex items-center justify-center text-violet-300 group-hover:from-violet-600 group-hover:to-cyan-600 group-hover:text-white transition-all duration-300">
                    {ICONS[step.icon]}
                  </div>
                  <span className="text-4xl font-black text-white/8 group-hover:text-white/15 transition-colors">
                    {step.step}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-violet-300 transition-colors">
                  {step.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {step.desc}
                </p>

                {/* Step indicator dot */}
                {i < AGENCY.process.length - 1 && (
                  <div className="hidden lg:flex absolute -right-4 top-14 w-8 h-8 items-center justify-center z-10">
                    <div className="w-2 h-2 bg-violet-500 rounded-full" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
