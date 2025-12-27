
import React, { useState, useEffect } from 'react';

const ScrollProgress: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / windowHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', updateScrollProgress);
    updateScrollProgress();

    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-zinc-900/50 z-50">
      <div
        className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 transition-all duration-150 ease-out shadow-lg shadow-cyan-500/50"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};

export default ScrollProgress;

