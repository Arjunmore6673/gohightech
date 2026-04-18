'use client';

import { useState } from 'react';
import { AGENCY } from '@/data/agency';

const CATEGORIES = ['All', 'Web & Mobile', 'Web App', 'Mobile App', 'Full-Stack'];

export default function Work() {
  const [filter, setFilter] = useState('All');

  const filtered = AGENCY.work.filter(
    (w) => filter === 'All' || w.category === filter,
  );

  return (
    <section id="work" className="bg-[#080810] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-sm font-medium mb-4">
            Our Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Shipped{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Products
            </span>
          </h2>
          <p className="max-w-xl mx-auto text-white/50 text-lg">
            Real apps. Real users. Real impact.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              id={`work-filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                filter === cat
                  ? 'bg-gradient-to-r from-violet-600 to-cyan-600 text-white shadow-lg shadow-violet-500/20'
                  : 'bg-white/5 text-white/50 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Work grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <div
              key={project.title}
              id={`work-card-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
              className="group bg-white/[0.03] border border-white/8 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-violet-500/5"
            >
              {/* Card header gradient */}
              <div className={`h-32 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                <span className="text-5xl">{project.icon}</span>
                <div className="absolute inset-0 bg-black/20" />
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/30 text-white/80 text-xs font-medium backdrop-blur-sm">
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-violet-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.metrics.map((m) => (
                    <span
                      key={m}
                      className="px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-medium"
                    >
                      {m}
                    </span>
                  ))}
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded-md bg-white/5 text-white/40 text-xs border border-white/8"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
