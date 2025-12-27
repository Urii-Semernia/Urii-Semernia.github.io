
import React, { useState, useEffect } from 'react';
import { EXPERIENCES } from '../constants';

const ExperienceSlider: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');

  const handlePrev = () => {
    if (activeIdx > 0) {
      setDirection('prev');
      setActiveIdx(prev => prev - 1);
    }
  };

  const handleNext = () => {
    if (activeIdx < EXPERIENCES.length - 1) {
      setDirection('next');
      setActiveIdx(prev => prev + 1);
    }
  };

  // Auto-rotate indicator
  const [autoRotateIdx, setAutoRotateIdx] = useState(0);

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-purple-500/10 via-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              Work <span className="text-gradient bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">History</span>
            </h2>
            <p className="text-zinc-500 max-w-xl">Deep diving into technical challenges across international borders.</p>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={handlePrev}
              disabled={activeIdx === 0}
              aria-label="Previous experience"
              className="group relative w-14 h-14 rounded-full border-2 border-zinc-700 bg-zinc-900/50 backdrop-blur-sm flex items-center justify-center transition-all transform hover:border-cyan-500 hover:bg-cyan-500/10 hover:scale-110 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed hover:shadow-xl hover:shadow-cyan-500/20"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400 group-hover:text-cyan-400 transform group-hover:-translate-x-1 transition-all duration-300">
                <path d="m15 18-6-6 6-6"/>
              </svg>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/0 via-cyan-500/20 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
            </button>
            <button 
              onClick={handleNext}
              disabled={activeIdx === EXPERIENCES.length - 1}
              aria-label="Next experience"
              className="group relative w-14 h-14 rounded-full border-2 border-zinc-700 bg-zinc-900/50 backdrop-blur-sm flex items-center justify-center transition-all transform hover:border-cyan-500 hover:bg-cyan-500/10 hover:scale-110 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed hover:shadow-xl hover:shadow-cyan-500/20"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400 group-hover:text-cyan-400 transform group-hover:translate-x-1 transition-all duration-300">
                <path d="m9 18 6-6-6-6"/>
              </svg>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/0 via-cyan-500/20 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
            </button>
          </div>
        </div>

        {/* Unique card stack slider */}
        <div className="relative h-[600px] md:h-[650px] perspective-1000" role="region" aria-label="Work experience">
          {EXPERIENCES.map((exp, idx) => {
            const offset = idx - activeIdx;
            const absOffset = Math.abs(offset);
            const isActive = idx === activeIdx;
            const isBefore = idx < activeIdx;
            const isAfter = idx > activeIdx;
            
            // Card positioning
            let transform = '';
            let zIndex = 10 - absOffset;
            let opacity = 1;
            let scale = 1;
            let rotateX = 0;
            let rotateY = 0;
            let translateX = 0;
            let translateZ = 0;
            
            if (isActive) {
              transform = 'translateX(0) translateY(0) translateZ(0) rotateX(0) rotateY(0) scale(1)';
              zIndex = 50;
              opacity = 1;
            } else if (isBefore) {
              // Cards to the left flip backwards and move left
              translateX = -50 - absOffset * 20;
              translateZ = -absOffset * 50;
              rotateY = -30 + absOffset * 5;
              scale = 1 - absOffset * 0.08;
              opacity = Math.max(0.2, 1 - absOffset * 0.3);
              transform = `translateX(${translateX}px) translateY(0) translateZ(${translateZ}px) rotateX(0) rotateY(${rotateY}deg) scale(${scale})`;
            } else if (isAfter) {
              // Cards to the right flip forwards and move right
              translateX = 50 + absOffset * 20;
              translateZ = -absOffset * 50;
              rotateY = 30 - absOffset * 5;
              scale = 1 - absOffset * 0.08;
              opacity = Math.max(0.2, 1 - absOffset * 0.3);
              transform = `translateX(${translateX}px) translateY(0) translateZ(${translateZ}px) rotateX(0) rotateY(${rotateY}deg) scale(${scale})`;
            }
            
            return (
              <div
                key={idx}
                className="absolute inset-0 transition-all duration-1000 ease-[cubic-bezier(0.34, 1.56, 0.64, 1)]"
                style={{
                  transform,
                  zIndex,
                  opacity,
                  transformStyle: 'preserve-3d',
                  pointerEvents: isActive ? 'auto' : 'none'
                }}
                role="listitem"
                aria-current={isActive ? 'true' : undefined}
              >
                <div className={`glass p-8 md:p-10 rounded-[2.5rem] border-2 h-full flex flex-col transition-all duration-700 ${
                  isActive 
                    ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/30 bg-zinc-900/80' 
                    : 'border-zinc-800/30 bg-zinc-900/40'
                }`}>
                  {/* Header */}
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                    <div className="flex-1">
                      <h3 className={`text-3xl md:text-4xl font-extrabold text-white mb-3 transition-all duration-700 ${
                        isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                      }`} style={{ transitionDelay: isActive ? '200ms' : '0ms' }}>
                        {exp.company}
                      </h3>
                      <div className={`flex flex-wrap items-center gap-2 text-cyan-400 font-mono transition-all duration-700 ${
                        isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                      }`} style={{ transitionDelay: isActive ? '300ms' : '0ms' }}>
                        <span className="text-base md:text-lg font-bold">{exp.role}</span>
                        <span className="w-1 h-1 bg-cyan-500 rounded-full animate-pulse"></span>
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                    <div className={`px-5 py-2 bg-zinc-800/50 rounded-full border border-cyan-500/30 text-sm font-bold text-zinc-300 transition-all duration-700 transform ${
                      isActive ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-90 rotate-12'
                    }`} style={{ transitionDelay: isActive ? '400ms' : '0ms' }}>
                      {exp.period}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 grid md:grid-cols-2 gap-8 overflow-y-auto">
                    <div className="space-y-4">
                      {exp.achievements.map((ach, aIdx) => (
                        <div 
                          key={aIdx} 
                          className={`flex gap-4 group transition-all duration-500 ${
                            isActive ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                          }`}
                          style={{ transitionDelay: isActive ? `${500 + aIdx * 100}ms` : '0ms' }}
                        >
                          <div className="mt-1 w-5 h-5 shrink-0 rounded-full border-2 border-cyan-500/40 flex items-center justify-center group-hover:border-cyan-500 group-hover:bg-cyan-500/20 group-hover:scale-125 transition-all duration-300 relative">
                            <div className="w-2 h-2 rounded-full bg-cyan-500 group-hover:scale-150 transition-transform duration-300"></div>
                            <div className="absolute inset-0 rounded-full bg-cyan-500/30 scale-0 group-hover:scale-200 transition-transform duration-500 opacity-0 group-hover:opacity-100"></div>
                          </div>
                          <p className="text-zinc-400 group-hover:text-white transition-colors text-sm md:text-base leading-relaxed">{ach}</p>
                        </div>
                      ))}
                    </div>
                    <div className={`hidden md:flex flex-col justify-center items-end transition-all duration-700 ${
                      isActive ? 'opacity-20 translate-y-0' : 'opacity-0 translate-y-8'
                    }`} style={{ transitionDelay: isActive ? '700ms' : '0ms' }}>
                      <span className="text-8xl font-black italic bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-purple-500/30 bg-clip-text text-transparent">
                        0{idx + 1}
                      </span>
                      <span className="text-xl font-bold tracking-widest uppercase text-zinc-600">Experience</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Progress dots */}
        <div className="flex justify-center gap-3 mt-12">
          {EXPERIENCES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIdx(idx)}
              className={`group relative transition-all duration-500 ${
                idx === activeIdx 
                  ? 'w-12 h-2' 
                  : 'w-2 h-2'
              }`}
              aria-label={`Go to experience ${idx + 1}`}
            >
              <div className={`absolute inset-0 rounded-full transition-all duration-500 ${
                idx === activeIdx 
                  ? 'bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 shadow-lg shadow-cyan-500/50' 
                  : 'bg-zinc-700 group-hover:bg-cyan-500/50'
              }`}></div>
              {idx === activeIdx && (
                <div className="absolute inset-0 rounded-full bg-cyan-500/50 animate-ping"></div>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSlider;
