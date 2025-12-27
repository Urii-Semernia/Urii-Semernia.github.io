
import React, { useState } from 'react';
import { PERSONAL_INFO } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields.');
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    setIsSending(true);
    try {
      // If Formspree form ID is not configured, use mailto as fallback
      const formspreeFormId = import.meta.env.VITE_FORMSPREE_FORM_ID || 'YOUR_FORM_ID';
      
      if (formspreeFormId === 'YOUR_FORM_ID') {
        // Fallback to mailto link
        const subject = encodeURIComponent(`Contact from ${formData.name}`);
        const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
        window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
        alert('Opening email client...');
        setFormData({ name: '', email: '', message: '' });
        setIsSending(false);
        return;
      }

      const response = await fetch(`https://formspree.io/f/${formspreeFormId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      });

      if (response.ok) {
        alert('Thank you! Your message has been sent successfully.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || 'Form submission failed');
      }
    } catch (error) {
      console.error('Form send failed:', error);
      alert('Sorry, there was an error sending your message. Please try again or contact directly via email.');
    } finally {
      setIsSending(false);
    }
  };
  return (
    <footer id="contact" className="pt-24 pb-12 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="text-4xl lg:text-6xl font-black mb-8">Let's build <br/><span className="text-gradient">quality together.</span></h2>
            <p className="text-zinc-400 text-lg mb-10 max-w-md">
              Whether you're looking to scale your QA processes or need a detail-oriented expert for a specific project, I'm just a message away.
            </p>
            <div className="space-y-6">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-4 text-xl font-bold hover:text-cyan-400 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                {PERSONAL_INFO.email}
              </a>
              <div className="flex gap-4">
                <a href={PERSONAL_INFO.telegram} className="px-6 py-3 bg-zinc-900 border border-zinc-800 rounded-xl font-bold hover:bg-zinc-800 transition-colors flex items-center gap-2">
                  Telegram
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
                </a>
                <a href={PERSONAL_INFO.linkedIn} className="px-6 py-3 bg-zinc-900 border border-zinc-800 rounded-xl font-bold hover:bg-zinc-800 transition-colors flex items-center gap-2">
                  LinkedIn
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
                </a>
              </div>
            </div>
          </div>

          <div className="glass p-10 rounded-3xl border-zinc-800">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="contact-name" className="text-sm font-mono text-zinc-500 uppercase">Your Name</label>
                  <input 
                    type="text" 
                    name="name"
                    id="contact-name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    required
                    aria-required="true"
                    className="w-full bg-zinc-800/50 border border-zinc-700 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors" 
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-email" className="text-sm font-mono text-zinc-500 uppercase">Your Email</label>
                  <input 
                    type="email" 
                    name="email"
                    id="contact-email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    required
                    aria-required="true"
                    className="w-full bg-zinc-800/50 border border-zinc-700 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors" 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="contact-message" className="text-sm font-mono text-zinc-500 uppercase">Message</label>
                <textarea 
                  rows={4} 
                  name="message"
                  id="contact-message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="What can I help you with?"
                  required
                  aria-required="true"
                  className="w-full bg-zinc-800/50 border border-zinc-700 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors resize-none" 
                />
              </div>
              <button 
                type="submit" 
                disabled={isSending}
                className="w-full py-4 bg-cyan-500 hover:bg-cyan-600 disabled:bg-zinc-600 text-black font-black text-lg rounded-xl transition-all active:scale-95 disabled:cursor-not-allowed"
              >
                {isSending ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-zinc-900 pt-12 gap-6">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. Built for excellence.
          </p>
          <div className="flex gap-8 text-sm text-zinc-400 font-mono uppercase tracking-widest">
            <span className="hover:text-cyan-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-cyan-400 cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
