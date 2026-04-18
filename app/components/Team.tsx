import { AGENCY } from '@/data/agency';

export default function Team() {
  return (
    <section id="team" className="bg-[#080810] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-300 text-sm font-medium mb-4">
            The Team
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Meet the{' '}
            <span className="bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent">
              Builders
            </span>
          </h2>
          <p className="max-w-xl mx-auto text-white/50 text-lg">
            Senior engineers with real-world, production-grade experience.
          </p>
        </div>

        {/* Team cards */}
        <div className="flex flex-wrap justify-center gap-8">
          {AGENCY.team.map((member) => (
            <div
              key={member.name}
              id={`team-member-${member.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="group w-full max-w-sm bg-white/[0.03] border border-white/8 rounded-3xl p-8 hover:bg-white/[0.06] hover:border-violet-500/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-500/10 text-center"
            >
              {/* Avatar */}
              <div
                className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white text-3xl font-black mx-auto mb-5 group-hover:scale-110 transition-transform duration-300 shadow-2xl`}
              >
                {member.avatar}
              </div>

              {/* Info */}
              <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
              <p className="text-violet-400 text-sm font-semibold mb-4">{member.role}</p>
              <p className="text-white/50 text-sm leading-relaxed mb-6">{member.bio}</p>

              {/* Skills */}
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {member.skills.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1 rounded-lg bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-medium"
                  >
                    {s}
                  </span>
                ))}
              </div>

              {/* LinkedIn */}
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                id={`team-linkedin-${member.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600/10 border border-blue-600/20 text-blue-400 text-sm font-medium hover:bg-blue-600/20 hover:text-blue-300 transition-all duration-200"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                Connect on LinkedIn
              </a>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-20">
          <p className="text-center text-white/30 text-sm uppercase tracking-widest font-medium mb-12">
            What Our Clients Say
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {AGENCY.testimonials.map((t) => (
              <div
                key={t.author}
                className="bg-white/[0.03] border border-white/8 rounded-2xl p-7 hover:bg-white/[0.06] transition-all duration-300"
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-amber-400">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white/70 text-sm leading-relaxed mb-5 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white text-sm font-bold shrink-0`}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold">{t.author}</div>
                    <div className="text-white/40 text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
