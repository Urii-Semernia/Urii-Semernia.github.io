
import React, { useState } from 'react';
import { EXPERIENCES } from '../constants';

const ExperienceSlider: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);

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
              onClick={() => setActiveIdx(prev => Math.max(0, prev - 1))}
              disabled={activeIdx === 0}
              className={`w-14 h-14 rounded-full border border-zinc-700 flex items-center justify-center transition-all ${activeIdx === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-cyan-500 hover:text-black hover:border-cyan-500'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <button 
              onClick={() => setActiveIdx(prev => Math.min(EXPERIENCES.length - 1, prev + 1))}
              disabled={activeIdx === EXPERIENCES.length - 1}
              className={`w-14 h-14 rounded-full border border-zinc-700 flex items-center justify-center transition-all ${activeIdx === EXPERIENCES.length - 1 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-cyan-500 hover:text-black hover:border-cyan-500'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden min-h-[500px]">
          <div 
            className="flex transition-transform duration-700 ease-in-out" 
            style={{ transform: `translateX(-${activeIdx * 100}%)` }}
          >
            {EXPERIENCES.map((exp, idx) => (
              <div key={idx} className="w-full shrink-0 px-2">
                <div className="glass p-10 rounded-[3rem] border-zinc-800">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
                    <div>
                      <h3 className="text-4xl font-extrabold text-white mb-2">{exp.company}</h3>
                      <div className="flex items-center gap-2 text-cyan-400 font-mono">
                        <span className="text-lg font-bold">{exp.role}</span>
                        <span className="w-1 h-1 bg-zinc-600 rounded-full"></span>
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                    <div className="px-6 py-2 bg-zinc-800 rounded-full border border-zinc-700 text-sm font-bold text-zinc-300">
                      {exp.period}
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-4">
                      {exp.achievements.map((ach, aIdx) => (
                        <div key={aIdx} className="flex gap-4 group">
                          <div className="mt-1.5 w-5 h-5 shrink-0 rounded-full border-2 border-cyan-500/30 flex items-center justify-center group-hover:border-cyan-500 transition-colors">
                            <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                          </div>
                          <p className="text-zinc-400 group-hover:text-white transition-colors">{ach}</p>
                        </div>
                      ))}
                    </div>
                    <div className="hidden md:flex flex-col justify-center items-end opacity-20 select-none">
                      <span className="text-9xl font-black italic">0{idx + 1}</span>
                      <span className="text-2xl font-bold tracking-widest uppercase">Experience</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSlider;
