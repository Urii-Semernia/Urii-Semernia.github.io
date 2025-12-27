
import React, { useState, useEffect, useRef } from 'react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load image from localStorage on mount
  useEffect(() => {
    // Always use default profile.jpg for static deployment
    setProfileImage('/profile.jpg');
  }, []);

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // upload to backend
    try {
      const form = new FormData();
      form.append('file', file);
      const res = await fetch('/api/upload', { method: 'POST', body: form });
      if (res.ok) {
        const data = await res.json();
        setProfileImage(data.url);
        // also keep local copy for offline fallback
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64String = reader.result as string;
          localStorage.setItem('urii_portfolio_photo', base64String);
        };
        reader.readAsDataURL(file);
      } else {
        console.error('Upload failed');
      }
    } catch (err) {
      console.error(err);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
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
            <button className="bg-white text-black px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-zinc-200 transition-all transform hover:-translate-y-1 active:scale-95">
              Download Resume
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
            </button>
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
          <div className="relative group cursor-pointer" onClick={triggerFileInput}>
            <input 
              type="file" 
              ref={fileInputRef} 
              className="hidden" 
              accept="image/*" 
              onChange={handleImageUpload} 
            />
            
            {/* Aesthetic Glow */}
            <div className="absolute inset-0 bg-cyan-500/20 rounded-[2.5rem] blur-2xl group-hover:bg-cyan-500/40 transition-all duration-500"></div>
            
            <div className="relative w-72 h-96 lg:w-96 lg:h-[30rem] rounded-[2.5rem] overflow-hidden border-4 border-zinc-800 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
              {profileImage ? (
                <img 
                  src={profileImage} 
                  alt={PERSONAL_INFO.name} 
                  className="w-full h-full object-cover transition-all duration-500"
                />
              ) : (
                <div className="w-full h-full bg-zinc-900 flex flex-col items-center justify-center text-zinc-600 gap-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  <p className="text-sm font-mono uppercase tracking-widest px-8 text-center">Click to upload your professional photo</p>
                </div>
              )}
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                <div className="bg-white/10 p-4 rounded-full border border-white/20">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>
              <div className="absolute bottom-6 left-6 right-6 pointer-events-none">
                <p className="text-white font-bold text-xl">{PERSONAL_INFO.name}</p>
                <p className="text-cyan-400 text-sm font-mono tracking-wider">{PERSONAL_INFO.title}</p>
              </div>
            </div>

            {/* Floating stats card */}
            <div className="absolute -bottom-6 -right-6 lg:-right-12 glass p-6 rounded-2xl border border-white/10 shadow-2xl animate-bounce pointer-events-none">
                <p className="text-3xl font-bold text-white">3+</p>
                <p className="text-zinc-400 text-xs uppercase tracking-widest font-bold">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
