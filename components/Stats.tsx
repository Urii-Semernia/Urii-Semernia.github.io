
import React, { useEffect, useRef, useState } from 'react';

interface Stat {
  value: string;
  label: string;
  suffix?: string;
}

const stats: Stat[] = [
  { value: '4', suffix: '+', label: 'Years Experience' },
  { value: '50', suffix: '+', label: 'Projects Completed' },
  { value: '1000', suffix: '+', label: 'Bugs Found' },
  { value: '98', suffix: '%', label: 'Client Satisfaction' }
];

const Stats: React.FC = () => {
  const [countersVisible, setCountersVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCountersVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950/50 to-zinc-950"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="glass p-8 rounded-3xl border border-zinc-800 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20">
                <div className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                  {countersVisible && (
                    <CounterAnimation
                      targetValue={parseInt(stat.value)}
                      suffix={stat.suffix}
                    />
                  )}
                  {!countersVisible && `0${stat.suffix || ''}`}
                </div>
                <p className="text-zinc-400 font-mono text-sm uppercase tracking-widest">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

interface CounterAnimationProps {
  targetValue: number;
  suffix?: string;
}

const CounterAnimation: React.FC<CounterAnimationProps> = ({ targetValue, suffix }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = targetValue / steps;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const newValue = Math.min(Math.floor(increment * currentStep), targetValue);
      setCount(newValue);

      if (newValue >= targetValue) {
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [targetValue]);

  return <>{count}{suffix}</>;
};

export default Stats;

