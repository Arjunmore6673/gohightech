'use client';

import { useEffect, useRef } from 'react';
import { AGENCY } from '@/data/agency';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Animated particle grid
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W = canvas.width = canvas.offsetWidth;
    let H = canvas.height = canvas.offsetHeight;
    const particles: { x: number; y: number; vx: number; vy: number; r: number; alpha: number }[] = [];
    const NUM = 60;

    for (let i = 0; i < NUM; i++) {
      particles.push({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 2 + 1,
        alpha: Math.random() * 0.5 + 0.1,
      });
    }

    let animId: number;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(139, 92, 246, ${p.alpha})`;
        ctx.fill();
      });

      // Draw connecting lines
      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach((b) => {
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(139, 92, 246, ${0.12 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animId = requestAnimationFrame(draw);
    };

    draw();

    const onResize = () => {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#080810]"
    >
      {/* Animated canvas background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-24 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-sm font-medium mb-8 backdrop-blur-sm">
          <span className="w-2 h-2 bg-violet-400 rounded-full animate-pulse" />
          Available for new projects
          <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
        </div>

        {/* Main headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[1.05] tracking-tight mb-6">
          We Build Apps
          <br />
          <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            That Scale.
          </span>
        </h1>

        {/* Sub headline */}
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-white/60 leading-relaxed mb-10">
          {AGENCY.brand.subTagline}
          {' '}
          <span className="text-white/90 font-medium">Android. iOS. Web.</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            id="hero-cta-primary"
            onClick={() => scrollToSection('#contact')}
            className="group px-8 py-4 bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-semibold rounded-2xl text-base hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-2xl shadow-violet-500/30 flex items-center gap-2"
          >
            Start Your Project
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </button>
          <button
            id="hero-cta-secondary"
            onClick={() => scrollToSection('#work')}
            className="px-8 py-4 text-white/80 font-semibold rounded-2xl text-base border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all duration-200 backdrop-blur-sm"
          >
            View Our Work
          </button>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {AGENCY.stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-4 py-5 hover:bg-white/8 hover:border-violet-500/30 transition-all duration-300"
            >
              <div className="text-3xl font-black text-transparent bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-white/50 font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 border border-white/20 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-violet-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
