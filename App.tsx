
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Stats from './components/Stats';
import ExperienceSlider from './components/ExperienceSlider';
import Contact from './components/Contact';
import ScrollProgress from './components/ScrollProgress';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-cyan-500 selection:text-black">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Skills />
        <ExperienceSlider />
      </main>
      <Contact />
      <ScrollToTop />
    </div>
  );
};

export default App;
