
import React, { useState } from 'react';
import { EXPERIENCES } from '../constants';

const ExperienceSlider: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handlePrev = () => {
    if (activeIdx > 0 && !isTransitioning) {
      setIsTransitioning(true);
      setActiveIdx(prev => Math.max(0, prev - 1));
      setTimeout(() => setIsTransitioning(false), 1000);
    }
  };

  const handleNext = () => {
    if (activeIdx < EXPERIENCES.length - 1 && !isTransitioning) {
      setIsTransitioning(true);
      setActiveIdx(prev => Math.min(EXPERIENCES.length - 1, prev + 1));
      setTimeout(() => setIsTransitioning(false), 1000);
    }
  };

  return (
    <section id="experience" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">Work <span className="text-cyan-400">History</span></h2>
            <p className="text-zinc-500 max-w-xl">Deep diving into technical challenges across international borders.</p>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={handlePrev}
              disabled={activeIdx === 0 || isTransitioning}
              aria-label="Previous experience"
              className={`group relative w-14 h-14 rounded-full border border-zinc-700 flex items-center justify-center transition-all transform ${activeIdx === 0 || isTransitioning ? 'opacity-30 cursor-not-allowed' : 'hover:bg-cyan-500 hover:text-black hover:border-cyan-500 hover:scale-110 active:scale-95 hover:shadow-lg hover:shadow-cyan-500/50'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="transform group-hover:-translate-x-1 transition-transform duration-300"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <button 
              onClick={handleNext}
              disabled={activeIdx === EXPERIENCES.length - 1 || isTransitioning}
              aria-label="Next experience"
              className={`group relative w-14 h-14 rounded-full border border-zinc-700 flex items-center justify-center transition-all transform ${activeIdx === EXPERIENCES.length - 1 || isTransitioning ? 'opacity-30 cursor-not-allowed' : 'hover:bg-cyan-500 hover:text-black hover:border-cyan-500 hover:scale-110 active:scale-95 hover:shadow-lg hover:shadow-cyan-500/50'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="transform group-hover:translate-x-1 transition-transform duration-300"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden min-h-[500px] perspective-container" role="region" aria-label="Work experience">
          {/* Animated background particles */}
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-pulse-slider"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse-slider" style={{ animationDelay: '1s' }}></div>
          </div>
          
          {/* Slider track with gradient fade */}
          <div className="absolute inset-0 pointer-events-none z-10">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-zinc-950 via-zinc-950/80 to-transparent"></div>
          </div>
          
          <div 
            className="flex transition-transform duration-1000 ease-[cubic-bezier(0.25, 0.46, 0.45, 0.94)]" 
            style={{ transform: `translateX(-${activeIdx * 100}%)` }}
            role="list"
          >
            {EXPERIENCES.map((exp, idx) => {
              const offset = idx - activeIdx;
              const absOffset = Math.abs(offset);
              const isActive = idx === activeIdx;
              const isNext = idx === activeIdx + 1;
              const isPrev = idx === activeIdx - 1;
              
              return (
                <div 
                  key={idx} 
                  className={`w-full shrink-0 px-2 experience-slide-item ${isActive ? 'active' : ''}`}
                  role="listitem" 
                  aria-current={isActive ? 'true' : undefined}
                  style={{
                    transform: `translateZ(${-absOffset * 50}px) scale(${isActive ? 1 : 0.92})`,
                    opacity: absOffset > 1 ? 0.3 : isActive ? 1 : 0.6,
                    filter: isActive ? 'blur(0px)' : `blur(${absOffset * 2}px)`,
                    transition: 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    perspective: '1000px',
                    transformStyle: 'preserve-3d'
                  }}
                >
                <div className={`glass p-10 rounded-[3rem] border-zinc-800 transition-all duration-1000 transform-gpu ${
                  isActive 
                    ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/20 scale-100 opacity-100 rotate-y-0' 
                    : isNext
                    ? 'border-cyan-500/20 scale-95 opacity-70 rotate-y-5'
                    : isPrev
                    ? 'border-cyan-500/20 scale-95 opacity-70 -rotate-y-5'
                    : 'border-zinc-800/30 scale-90 opacity-40 rotate-y-0'
                }`}>
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
                    <div className="overflow-hidden">
                      <h3 className={`text-4xl font-extrabold text-white mb-2 transition-all duration-1000 ease-out ${
                        isActive 
                          ? 'translate-x-0 translate-y-0 opacity-100 scale-100' 
                          : 'translate-x-8 -translate-y-4 opacity-0 scale-95'
                      }`} style={{ transitionDelay: isActive ? '150ms' : '0ms' }}>
                        {exp.company}
                      </h3>
                      <div className={`flex items-center gap-2 text-cyan-400 font-mono transition-all duration-1000 ease-out ${
                        isActive 
                          ? 'translate-x-0 translate-y-0 opacity-100 scale-100' 
                          : 'translate-x-8 -translate-y-4 opacity-0 scale-95'
                      }`} style={{ transitionDelay: isActive ? '250ms' : '0ms' }}>
                        <span className="text-lg font-bold">{exp.role}</span>
                        <span className="w-1 h-1 bg-zinc-600 rounded-full animate-pulse"></span>
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                    <div className={`px-6 py-2 bg-zinc-800 rounded-full border border-zinc-700 text-sm font-bold text-zinc-300 transition-all duration-1000 ease-out transform ${
                      isActive 
                        ? 'translate-x-0 translate-y-0 opacity-100 scale-100 rotate-0' 
                        : 'translate-x-12 translate-y-4 opacity-0 scale-85 rotate-12'
                    }`} style={{ transitionDelay: isActive ? '350ms' : '0ms' }}>
                      {exp.period}
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-4">
                      {exp.achievements.map((ach, aIdx) => (
                        <div 
                          key={aIdx} 
                          className={`flex gap-4 group transition-all duration-700 ease-out ${
                            isActive 
                              ? 'translate-x-0 translate-y-0 opacity-100 scale-100' 
                              : 'translate-x-12 translate-y-8 opacity-0 scale-95'
                          }`}
                          style={{ transitionDelay: isActive ? `${450 + aIdx * 80}ms` : '0ms' }}
                        >
                          <div className="mt-1.5 w-5 h-5 shrink-0 rounded-full border-2 border-cyan-500/30 flex items-center justify-center group-hover:border-cyan-500 group-hover:scale-125 group-hover:rotate-180 transition-all duration-500 relative">
                            <div className="w-2 h-2 rounded-full bg-cyan-500 group-hover:scale-150 transition-transform duration-300"></div>
                            <div className="absolute inset-0 rounded-full bg-cyan-500/20 scale-0 group-hover:scale-150 transition-transform duration-500"></div>
                          </div>
                          <p className="text-zinc-400 group-hover:text-white transition-all duration-300 group-hover:translate-x-1">{ach}</p>
                        </div>
                      ))}
                    </div>
                    <div className={`hidden md:flex flex-col justify-center items-end select-none transition-all duration-1000 ease-out ${
                      isActive 
                        ? 'translate-y-0 opacity-20 scale-100' 
                        : 'translate-y-16 opacity-0 scale-80'
                    }`} style={{ transitionDelay: isActive ? '600ms' : '0ms' }}>
                      <span className="text-9xl font-black italic bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 bg-clip-text text-transparent">
                        0{idx + 1}
                      </span>
                      <span className="text-2xl font-bold tracking-widest uppercase text-zinc-600">Experience</span>
                    </div>
                  </div>
                </div>
              </div>
            );
            })}
          </div>
          
          {/* Slide indicators with animation */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-20 items-center">
            {EXPERIENCES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  if (!isTransitioning) {
                    setIsTransitioning(true);
                    setActiveIdx(idx);
                    setTimeout(() => setIsTransitioning(false), 1000);
                  }
                }}
                className={`group relative rounded-full transition-all duration-500 ease-out ${
                  idx === activeIdx 
                    ? 'h-3 w-12 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 shadow-lg shadow-cyan-500/50' 
                    : 'h-2 w-2 bg-zinc-700 hover:bg-cyan-500/50 hover:scale-125'
                }`}
                aria-label={`Go to experience ${idx + 1}`}
              >
                {idx === activeIdx && (
                  <div className="absolute inset-0 rounded-full bg-cyan-500/50 animate-ping"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSlider;
