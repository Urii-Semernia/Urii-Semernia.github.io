
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="pt-24 pb-12 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-black mb-8">
            Let's build <br/><span className="text-gradient">quality together.</span>
          </h2>
          <p className="text-zinc-400 text-lg mb-12 max-w-md mx-auto">
            Whether you're looking to scale your QA processes or need a detail-oriented expert for a specific project, I'm just a message away.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            {/* Email */}
            <a 
              href={`mailto:${PERSONAL_INFO.email}`} 
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-zinc-900 border border-zinc-800 rounded-xl font-bold hover:bg-zinc-800 hover:border-cyan-500/50 transition-all duration-300 flex items-center gap-3 transform hover:scale-105"
            >
              <div className="w-12 h-12 rounded-lg bg-zinc-800 group-hover:bg-cyan-500/20 border border-zinc-700 group-hover:border-cyan-500/50 flex items-center justify-center transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </div>
              <span className="text-white group-hover:text-cyan-400 transition-colors">{PERSONAL_INFO.email}</span>
            </a>
            
            {/* Telegram */}
            <a 
              href={PERSONAL_INFO.telegram} 
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-zinc-900 border border-zinc-800 rounded-xl font-bold hover:bg-zinc-800 hover:border-cyan-500/50 transition-all duration-300 flex items-center gap-3 transform hover:scale-105"
            >
              <div className="w-12 h-12 rounded-lg bg-zinc-800 group-hover:bg-cyan-500/20 border border-zinc-700 group-hover:border-cyan-500/50 flex items-center justify-center transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400">
                  <path d="m22 2-7 20-4-9-9-4Z"/>
                  <path d="M22 2 11 13"/>
                </svg>
              </div>
              <span className="text-white group-hover:text-cyan-400 transition-colors">Telegram</span>
            </a>
            
            {/* LinkedIn */}
            <a 
              href={PERSONAL_INFO.linkedIn} 
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-zinc-900 border border-zinc-800 rounded-xl font-bold hover:bg-zinc-800 hover:border-cyan-500/50 transition-all duration-300 flex items-center gap-3 transform hover:scale-105"
            >
              <div className="w-12 h-12 rounded-lg bg-zinc-800 group-hover:bg-cyan-500/20 border border-zinc-700 group-hover:border-cyan-500/50 flex items-center justify-center transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect width="4" height="12" x="2" y="9"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </div>
              <span className="text-white group-hover:text-cyan-400 transition-colors">LinkedIn</span>
            </a>
          </div>
        </div>

        <div className="flex justify-center items-center border-t border-zinc-900 pt-12">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. Built for excellence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
