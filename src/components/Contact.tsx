
import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-slate-100 mb-8 animate-fade-in font-mono">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Get In Touch
          </span>
        </h2>
        
        <div className="backdrop-blur-md bg-slate-800/30 border border-slate-600/40 rounded-3xl p-8 animate-scale-in">
          <div className="flex flex-col items-center mb-8">
            <div className="w-24 h-24 mb-6">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <defs>
                  <linearGradient id="avatarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#0891b2" />
                  </linearGradient>
                </defs>
                <circle cx="50" cy="50" r="45" fill="url(#avatarGradient)" opacity="0.2" stroke="url(#avatarGradient)" strokeWidth="2"/>
                <circle cx="50" cy="35" r="12" fill="url(#avatarGradient)"/>
                <path d="M25 75 Q50 65 75 75" stroke="url(#avatarGradient)" strokeWidth="8" fill="none" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-100 mb-2 font-mono">Abdurahman</h3>
            <p className="text-lg text-slate-300 mb-6 font-mono">
              Front-End Engineer
            </p>
            <p className="text-slate-400 max-w-2xl leading-relaxed font-mono text-sm">
              Passionate about creating beautiful, functional web applications that solve real-world problems. 
              SkyLens combines my love for clean design and practical utility to deliver an exceptional weather experience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="https://github.com/Abdurahman-Abdella"
              target="_blank"
              rel="noopener noreferrer"
              className="backdrop-blur-sm bg-slate-700/20 border border-slate-600/30 rounded-2xl p-6 hover:bg-slate-700/30 transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="w-12 h-12 mx-auto mb-4">
                <svg viewBox="0 0 24 24" className="w-full h-full text-slate-300 group-hover:text-white transition-colors">
                  <path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.164 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-slate-100 mb-2 font-mono">GitHub</h4>
              <p className="text-slate-400 font-mono text-sm">Check out my projects and code</p>
            </a>
            
            <a
              href="https://www.linkedin.com/in/abdurahamanlinked7750"
              target="_blank"
              rel="noopener noreferrer"
              className="backdrop-blur-sm bg-slate-700/20 border border-slate-600/30 rounded-2xl p-6 hover:bg-slate-700/30 transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="w-12 h-12 mx-auto mb-4">
                <svg viewBox="0 0 24 24" className="w-full h-full text-slate-300 group-hover:text-blue-400 transition-colors">
                  <path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-slate-100 mb-2 font-mono">LinkedIn</h4>
              <p className="text-slate-400 font-mono text-sm">Connect with me professionally</p>
            </a>
            
            <a
              href="https://www.instagram.com/satoru_hayan?igsh=cGY5d3Q5ZG1udThr"
              target="_blank"
              rel="noopener noreferrer"
              className="backdrop-blur-sm bg-slate-700/20 border border-slate-600/30 rounded-2xl p-6 hover:bg-slate-700/30 transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="w-12 h-12 mx-auto mb-4">
                <svg viewBox="0 0 24 24" className="w-full h-full text-slate-300 group-hover:text-pink-400 transition-colors">
                  <path fill="currentColor" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-slate-100 mb-2 font-mono">Instagram</h4>
              <p className="text-slate-400 font-mono text-sm">Follow my creative journey</p>
            </a>
          </div>
          
          <div className="mt-8 pt-8 border-t border-slate-600/30">
            <p className="text-slate-400 font-mono text-sm">
              Feel free to reach out for collaborations, questions, or just to say hello! 
              I'm always excited to connect with fellow developers and weather enthusiasts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
