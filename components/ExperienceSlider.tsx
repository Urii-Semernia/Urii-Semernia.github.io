
import React, { useState } from 'react';
import { EXPERIENCES } from '../constants';

const ExperienceSlider: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handlePrev = () => {
    if (activeIdx > 0 && !isTransitioning) {
      setIsTransitioning(true);
      setActiveIdx(prev => Math.max(0, prev - 1));
      setTimeout(() => setIsTransitioning(false), 700);
    }
  };

  const handleNext = () => {
    if (activeIdx < EXPERIENCES.length - 1 && !isTransitioning) {
      setIsTransitioning(true);
      setActiveIdx(prev => Math.min(EXPERIENCES.length - 1, prev + 1));
      setTimeout(() => setIsTransitioning(false), 700);
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

        <div className="relative overflow-hidden min-h-[500px]" role="region" aria-label="Work experience">
          {/* Slider track with gradient fade */}
          <div className="absolute inset-0 pointer-events-none z-10">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-zinc-950 to-transparent"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-zinc-950 to-transparent"></div>
          </div>
          
          <div 
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)]" 
            style={{ transform: `translateX(-${activeIdx * 100}%)` }}
            role="list"
          >
            {EXPERIENCES.map((exp, idx) => (
              <div 
                key={idx} 
                className={`w-full shrink-0 px-2 experience-slide-item ${idx === activeIdx ? 'active' : ''}`}
                role="listitem" 
                aria-current={idx === activeIdx ? 'true' : undefined}
              >
                <div className={`glass p-10 rounded-[3rem] border-zinc-800 transition-all duration-500 ${
                  idx === activeIdx 
                    ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/20 scale-100 opacity-100' 
                    : 'opacity-60 scale-95'
                }`}>
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
                    <div className="overflow-hidden">
                      <h3 className={`text-4xl font-extrabold text-white mb-2 transition-all duration-700 ${
                        idx === activeIdx 
                          ? 'translate-x-0 opacity-100' 
                          : '-translate-x-4 opacity-0'
                      }`} style={{ transitionDelay: idx === activeIdx ? '200ms' : '0ms' }}>
                        {exp.company}
                      </h3>
                      <div className={`flex items-center gap-2 text-cyan-400 font-mono transition-all duration-700 ${
                        idx === activeIdx 
                          ? 'translate-x-0 opacity-100' 
                          : '-translate-x-4 opacity-0'
                      }`} style={{ transitionDelay: idx === activeIdx ? '300ms' : '0ms' }}>
                        <span className="text-lg font-bold">{exp.role}</span>
                        <span className="w-1 h-1 bg-zinc-600 rounded-full"></span>
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                    <div className={`px-6 py-2 bg-zinc-800 rounded-full border border-zinc-700 text-sm font-bold text-zinc-300 transition-all duration-700 transform ${
                      idx === activeIdx 
                        ? 'translate-x-0 opacity-100 scale-100' 
                        : 'translate-x-4 opacity-0 scale-90'
                    }`} style={{ transitionDelay: idx === activeIdx ? '400ms' : '0ms' }}>
                      {exp.period}
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-4">
                      {exp.achievements.map((ach, aIdx) => (
                        <div 
                          key={aIdx} 
                          className={`flex gap-4 group transition-all duration-500 ${
                            idx === activeIdx 
                              ? 'translate-x-0 opacity-100' 
                              : 'translate-x-8 opacity-0'
                          }`}
                          style={{ transitionDelay: idx === activeIdx ? `${500 + aIdx * 100}ms` : '0ms' }}
                        >
                          <div className="mt-1.5 w-5 h-5 shrink-0 rounded-full border-2 border-cyan-500/30 flex items-center justify-center group-hover:border-cyan-500 group-hover:scale-125 transition-all duration-300">
                            <div className="w-2 h-2 rounded-full bg-cyan-500 group-hover:scale-150 transition-transform duration-300"></div>
                          </div>
                          <p className="text-zinc-400 group-hover:text-white transition-colors">{ach}</p>
                        </div>
                      ))}
                    </div>
                    <div className={`hidden md:flex flex-col justify-center items-end opacity-20 select-none transition-all duration-700 ${
                      idx === activeIdx 
                        ? 'translate-y-0 opacity-20 scale-100' 
                        : 'translate-y-8 opacity-0 scale-90'
                    }`} style={{ transitionDelay: idx === activeIdx ? '600ms' : '0ms' }}>
                      <span className="text-9xl font-black italic">0{idx + 1}</span>
                      <span className="text-2xl font-bold tracking-widest uppercase">Experience</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Slide indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
            {EXPERIENCES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  if (!isTransitioning) {
                    setIsTransitioning(true);
                    setActiveIdx(idx);
                    setTimeout(() => setIsTransitioning(false), 700);
                  }
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === activeIdx 
                    ? 'w-8 bg-cyan-500' 
                    : 'w-2 bg-zinc-700 hover:bg-zinc-600'
                }`}
                aria-label={`Go to experience ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSlider;
