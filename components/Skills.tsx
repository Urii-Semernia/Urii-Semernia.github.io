
import React, { useEffect, useRef, useState } from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-24 bg-zinc-950/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">Core <span className="text-cyan-400">Competencies</span></h2>
          <p className="text-zinc-500 max-w-2xl mx-auto">Specialized in multiple layers of testing to ensure robust and high-performing software products.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {SKILLS.map((skill, index) => (
            <div 
              key={index}
              className={`group p-6 sm:p-8 rounded-3xl border border-zinc-800 bg-zinc-900/40 hover:bg-zinc-800/60 hover:border-cyan-500/50 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: isVisible ? `${index * 50}ms` : '0ms' }}
            >
              <div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-cyan-500 transition-colors shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-black transition-colors"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-2 break-words leading-tight" style={{ wordBreak: 'break-word', overflowWrap: 'anywhere' }}>{skill.name}</h3>
              <p className="text-xs font-mono uppercase text-zinc-500 tracking-widest break-all">{skill.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
