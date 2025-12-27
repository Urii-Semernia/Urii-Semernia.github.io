
import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  const [profileImage, setProfileImage] = useState<string>('/profile.jpg');

  // Load image on mount and handle errors
  useEffect(() => {
    // Always use default profile.jpg
    setProfileImage('/profile.jpg');
  }, []);

  const handleImageError = () => {
    // Fallback to a placeholder or default avatar
    setProfileImage('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzI3MjcyYSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iI2E4YTliNiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkFWQVRBUjwvdGV4dD48L3N2Zz4=');
  };

  return (
    <section id="about" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <div className="inline-block px-3 py-1 bg-zinc-800 rounded-lg mb-6 border border-zinc-700">
            <span className="text-cyan-400 font-mono text-sm tracking-wide">Available for projects</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 leading-tight">
            Elevating Software <br />
            <span className="text-gradient">Quality Standards</span>
          </h1>
          <p className="text-zinc-400 text-lg mb-10 max-w-lg leading-relaxed">
            {PERSONAL_INFO.summary}
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="/resume.pdf" 
              download 
              className="bg-white text-black px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-zinc-200 transition-all transform hover:-translate-y-1 active:scale-95"
              onClick={(e) => {
                // If file doesn't exist, prevent default and show message
                e.preventDefault();
                // Try to download, if fails, open contact section
                fetch('/resume.pdf')
                  .then(res => {
                    if (res.ok) {
                      window.open('/resume.pdf', '_blank');
                    } else {
                      alert('Resume file not found. Please contact me via email for a copy.');
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }
                  })
                  .catch(() => {
                    alert('Resume file not found. Please contact me via email for a copy.');
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  });
              }}
            >
              Download Resume
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
            </a>
            <div className="flex gap-4 items-center pl-4">
              <a href={PERSONAL_INFO.linkedIn} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl border border-zinc-800 flex items-center justify-center hover:bg-zinc-800 hover:border-zinc-600 transition-all transform hover:-translate-y-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href={PERSONAL_INFO.telegram} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl border border-zinc-800 flex items-center justify-center hover:bg-zinc-800 hover:border-zinc-600 transition-all transform hover:-translate-y-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative">
            {/* Aesthetic Glow */}
            <div className="absolute inset-0 bg-cyan-500/20 rounded-[2.5rem] blur-2xl hover:bg-cyan-500/50 transition-all duration-500"></div>
            
            <div className="relative w-72 h-96 lg:w-96 lg:h-[30rem] rounded-[2.5rem] overflow-hidden border-4 border-zinc-800 shadow-2xl transition-all duration-500 hover:scale-105 hover:rotate-2 hover:brightness-110">
              <img 
                src={profileImage} 
                alt={PERSONAL_INFO.name} 
                onError={handleImageError}
                className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>
              <div className="absolute bottom-6 left-6 right-6 pointer-events-none">
                <p className="text-white font-bold text-xl">{PERSONAL_INFO.name}</p>
                <p className="text-cyan-400 text-sm font-mono tracking-wider">{PERSONAL_INFO.title}</p>
              </div>
            </div>

            {/* Floating stats card with cool animation */}
            <div className="absolute -bottom-6 -right-6 lg:-right-12 glass p-6 rounded-2xl border border-cyan-500/30 shadow-2xl shadow-cyan-500/20 pointer-events-none animate-experience-card group">
                {/* Animated glow background */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 animate-glow-pulse"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <p className="text-3xl font-bold text-white animate-number-bounce">4+</p>
                  <p className="text-zinc-400 text-xs uppercase tracking-widest font-bold mt-1">Years Experience</p>
                </div>
                
                {/* Sparkle effect */}
                <div className="absolute top-2 right-2 w-2 h-2 bg-cyan-400 rounded-full animate-sparkle"></div>
                <div className="absolute bottom-3 left-3 w-1.5 h-1.5 bg-blue-400 rounded-full animate-sparkle-delayed"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
