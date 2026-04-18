import { AGENCY } from '@/data/agency';
import { JSX } from 'react';

const ICONS: Record<string, JSX.Element> = {
  trophy: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
      <path d="M6 9H4.5a2.5 2.5 0 010-5H6M18 9h1.5a2.5 2.5 0 000-5H18M8 21h8M12 17v4M7 4h10v6a5 5 0 01-10 0V4z" />
    </svg>
  ),
  rocket: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2l-.55-.55M10.5 19.5L12 21l3.5-3.5M19.5 4.5S18 2 15 2C12 2 9.5 4 8 7l9 9c3-1.5 5-4 5-7 0-3-2.5-4.5-2.5-4.5z" />
      <circle cx="10" cy="14" r="1" /><circle cx="14" cy="10" r="1" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  globe: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
      <circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20M2 12h20" />
    </svg>
  ),
  users: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
    </svg>
  ),
  chart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
      <path d="M3 3v18h18M7 16l4-4 4 4 4-4" />
    </svg>
  ),
};

const COLORS = [
  'from-violet-500 to-purple-600',
  'from-cyan-500 to-blue-600',
  'from-emerald-500 to-teal-600',
  'from-amber-500 to-orange-500',
  'from-pink-500 to-rose-600',
  'from-sky-400 to-indigo-600',
];

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-[#0b0b16] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16 lg:mb-20">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-sm font-medium mb-4">
              Why goHighTech
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              Engineering Excellence,{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                Delivered.
              </span>
            </h2>
          </div>
          <div>
            <p className="text-white/50 text-lg leading-relaxed">
              We are not just developers — we are product engineers who care about
              your users, your deadlines, and your success. Here is what sets us apart.
            </p>
          </div>
        </div>

        {/* Why Us grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AGENCY.whyUs.map((item, i) => (
            <div
              key={item.title}
              id={`why-us-${i}`}
              className="group bg-white/[0.03] border border-white/8 rounded-2xl p-7 hover:bg-white/[0.06] hover:border-white/15 transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${COLORS[i % COLORS.length]} flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
              >
                {ICONS[item.icon]}
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-violet-300 transition-colors">
                {item.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Tech Stack strip */}
        <div className="mt-20">
          <p className="text-center text-white/30 text-sm uppercase tracking-widest font-medium mb-8">
            Technologies We Ship With
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {AGENCY.techStack.map((tech) => (
              <div
                key={tech.name}
                className="group flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity duration-200"
                title={tech.name}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-8 h-8 object-contain group-hover:scale-110 transition-transform duration-200"
                />
                <span className="text-xs text-white/50 font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
