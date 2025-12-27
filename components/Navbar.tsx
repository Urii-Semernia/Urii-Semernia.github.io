
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'py-3 glass border-b border-cyan-500/20 shadow-lg shadow-cyan-500/10' 
        : 'py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo with animated gradient */}
        <a 
          href="#about"
          className={`group relative text-2xl font-black tracking-tight transition-all duration-700 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        >
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              Yurii Semernia
            </span>
            {/* Animated underline */}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-500"></span>
          </span>
          {/* Glow effect on hover */}
          <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10"></span>
        </a>

        {/* Navigation Links */}
        <div className={`hidden md:flex gap-2 items-center transition-all duration-700 ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`} style={{ transitionDelay: '100ms' }}>
          {[
            { href: '#skills', label: 'Skills' },
            { href: '#experience', label: 'Experience' },
            { href: '#contact', label: 'Contact' }
          ].map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative px-4 py-2 text-sm font-semibold text-zinc-400 hover:text-white transition-all duration-300"
              style={{ transitionDelay: `${(index + 1) * 50}ms` }}
            >
              <span className="relative z-10">{link.label}</span>
              {/* Hover background effect */}
              <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              {/* Animated dot indicator */}
              <span className="absolute bottom-1 left-1/2 w-1 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:left-1/2 transition-all duration-300 transform -translate-x-1/2"></span>
            </a>
          ))}
        </div>

        {/* Hire Me Button */}
        <a
          href="#contact"
          className={`group relative overflow-hidden bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-500 transform hover:scale-110 active:scale-95 shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/80 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          <span className="relative z-10 flex items-center gap-2">
            Hire Me
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="transform group-hover:translate-x-1 transition-transform duration-300"
            >
              <path d="M5 12h14"/>
              <path d="m12 5 7 7-7 7"/>
            </svg>
          </span>
          {/* Animated shine effect */}
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
          {/* Glow pulse */}
          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-75 blur-xl transition-opacity duration-500 animate-pulse"></span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
