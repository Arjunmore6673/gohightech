'use client';

import { useState, useEffect } from 'react';
import { AGENCY } from '@/data/agency';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080810]/90 backdrop-blur-xl border-b border-white/5 shadow-2xl'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex items-center gap-2 group"
          id="nav-logo"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-violet-500/30 group-hover:scale-110 transition-transform duration-200">
            <span className="text-white font-black text-sm">gH</span>
          </div>
          <span className="font-bold text-white text-lg tracking-tight">
            go<span className="text-violet-400">High</span>Tech
          </span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1">
          {AGENCY.nav.map((item) => (
            <li key={item.href}>
              <button
                id={`nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => handleNavClick(item.href)}
                className="px-4 py-2 text-sm text-white/70 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200 font-medium"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button
            id="nav-cta-contact"
            onClick={() => handleNavClick('#contact')}
            className="px-5 py-2.5 text-sm font-semibold bg-gradient-to-r from-violet-600 to-cyan-600 text-white rounded-xl hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-lg shadow-violet-500/20"
          >
            Start a Project →
          </button>
        </div>

        {/* Hamburger */}
        <button
          id="nav-menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-white/5 transition-colors"
          aria-label="Toggle menu"
        >
          <span className={`w-5 h-0.5 bg-white transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-5 h-0.5 bg-white transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-5 h-0.5 bg-white transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        } bg-[#080810]/95 backdrop-blur-xl border-t border-white/5`}
      >
        <ul className="px-6 py-4 flex flex-col gap-1">
          {AGENCY.nav.map((item) => (
            <li key={item.href}>
              <button
                id={`mobile-nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => handleNavClick(item.href)}
                className="w-full text-left px-4 py-3 text-sm text-white/70 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200 font-medium"
              >
                {item.label}
              </button>
            </li>
          ))}
          <li className="pt-2">
            <button
              id="mobile-nav-cta"
              onClick={() => handleNavClick('#contact')}
              className="w-full px-5 py-3 text-sm font-semibold bg-gradient-to-r from-violet-600 to-cyan-600 text-white rounded-xl hover:opacity-90"
            >
              Start a Project →
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
