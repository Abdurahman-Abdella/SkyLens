
import React from 'react';

const About = () => {
  const techStack = [
    {
      name: 'React',
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <circle cx="12" cy="12" r="2" fill="#61dafb"/>
          <path d="M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8Z" fill="none" stroke="#61dafb" strokeWidth="0.5"/>
          <ellipse cx="12" cy="12" rx="8" ry="3" fill="none" stroke="#61dafb" strokeWidth="1"/>
          <ellipse cx="12" cy="12" rx="8" ry="3" fill="none" stroke="#61dafb" strokeWidth="1" transform="rotate(60 12 12)"/>
          <ellipse cx="12" cy="12" rx="8" ry="3" fill="none" stroke="#61dafb" strokeWidth="1" transform="rotate(120 12 12)"/>
        </svg>
      )
    },
    {
      name: 'TypeScript',
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <rect x="1" y="1" width="22" height="22" rx="3" fill="#3178c6"/>
          <path d="M10.5 8.5h-2v1h1.5v5.5h1v-5.5h1.5v-1h-2zM17 8.5c-.7 0-1.3.3-1.7.8-.2.3-.3.6-.3 1 0 .7.4 1.2 1.1 1.5l1.4.6c.3.1.5.3.5.6 0 .4-.3.7-.8.7-.6 0-1-.3-1.2-.7l-.8.5c.3.7 1 1.2 2 1.2 1.1 0 1.9-.7 1.9-1.7 0-.8-.5-1.3-1.3-1.6l-1.4-.6c-.2-.1-.4-.2-.4-.5 0-.3.3-.5.6-.5.4 0 .7.2.9.5l.7-.5c-.3-.5-.8-.8-1.5-.8z" fill="white"/>
        </svg>
      )
    },
    {
      name: 'Tailwind CSS',
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.12 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C15.61 7.15 14.47 6 12 6zM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.12 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C10.61 13.15 9.47 12 7 12z" fill="#06b6d4"/>
        </svg>
      )
    },
    {
      name: 'Vite',
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <path d="M8.286 10.578L12 16.102l3.714-5.524H20l-8 10.42L4 10.578h4.286z" fill="#ffd028"/>
          <path d="M8.286 10.578L12 16.102l3.714-5.524H20l-8 10.42L4 10.578h4.286z" fill="url(#viteGradient)"/>
          <path d="M12 1.578L20.976 7.2 18.286 10.578 12 4.898 5.714 10.578 3.024 7.2 12 1.578z" fill="#646cff"/>
          <defs>
            <linearGradient id="viteGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#41d1ff"/>
              <stop offset="100%" stopColor="#bd34fe"/>
            </linearGradient>
          </defs>
        </svg>
      )
    },
    {
      name: 'OpenWeather API',
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <circle cx="12" cy="12" r="3" fill="#ff9500"/>
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="#ff9500" strokeWidth="1.5"/>
          <path d="M6 16c-1.5 0-3-1.2-3-3s1.5-3 3-3c.8-1.5 2.5-2.5 4.5-2.5s3.7 1 4.5 2.5c1.5 0 3 1.2 3 3s-1.5 3-3 3" fill="none" stroke="#00aaff" strokeWidth="1.5"/>
        </svg>
      )
    },
    {
      name: 'Shadcn/UI',
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <circle cx="12" cy="12" r="10" fill="none" stroke="#ffffff" strokeWidth="1"/>
          <path d="M8 8h8v8H8z" fill="none" stroke="#ffffff" strokeWidth="1"/>
          <path d="M6 6h2v2H6zM16 6h2v2h-2zM6 16h2v2H6zM16 16h2v2h-2z" fill="#ffffff"/>
          <path d="M10 10h4v4h-4z" fill="#ffffff"/>
        </svg>
      )
    }
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-slate-100 mb-8 animate-fade-in font-mono">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            About SkyLens
          </span>
        </h2>
        
        <div className="backdrop-blur-md bg-slate-800/30 border border-slate-600/40 rounded-3xl p-8 mb-8 animate-scale-in">
          <p className="text-lg text-slate-300 leading-relaxed mb-6 font-mono">
            SkyLens is a modern weather application that combines beautiful glassmorphism design 
            with powerful weather data. Built with cutting-edge web technologies, it provides you with 
            accurate and detailed weather information in an aesthetically pleasing interface.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="backdrop-blur-sm bg-slate-700/20 border border-slate-600/30 rounded-2xl p-6 hover:bg-slate-700/30 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-4">
                <svg viewBox="0 0 64 64" className="w-full h-full text-cyan-400">
                  <defs>
                    <linearGradient id="glassgradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#06b6d4" />
                      <stop offset="100%" stopColor="#0891b2" />
                    </linearGradient>
                  </defs>
                  <rect x="8" y="16" width="48" height="32" rx="8" fill="url(#glassgradient)" opacity="0.3" />
                  <rect x="12" y="20" width="40" height="24" rx="6" fill="none" stroke="url(#glassgradient)" strokeWidth="2" />
                  <circle cx="20" cy="28" r="2" fill="url(#glassgradient)" />
                  <circle cx="32" cy="32" r="2" fill="url(#glassgradient)" />
                  <circle cx="44" cy="36" r="2" fill="url(#glassgradient)" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-100 mb-2 font-mono">Glassmorphism Design</h3>
              <p className="text-slate-400 font-mono text-sm">
                Beautiful frosted glass effects with smooth transitions and modern aesthetics
              </p>
            </div>
            
            <div className="backdrop-blur-sm bg-slate-700/20 border border-slate-600/30 rounded-2xl p-6 hover:bg-slate-700/30 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-4">
                <svg viewBox="0 0 64 64" className="w-full h-full text-blue-400">
                  <defs>
                    <linearGradient id="globegradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#1e40af" />
                    </linearGradient>
                  </defs>
                  <circle cx="32" cy="32" r="24" fill="none" stroke="url(#globegradient)" strokeWidth="2" />
                  <path d="M8 32 Q32 16 56 32 Q32 48 8 32" fill="none" stroke="url(#globegradient)" strokeWidth="1.5" />
                  <path d="M8 32 Q32 48 56 32 Q32 16 8 32" fill="none" stroke="url(#globegradient)" strokeWidth="1.5" />
                  <line x1="32" y1="8" x2="32" y2="56" stroke="url(#globegradient)" strokeWidth="1.5" />
                  <line x1="8" y1="32" x2="56" y2="32" stroke="url(#globegradient)" strokeWidth="1.5" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-100 mb-2 font-mono">Global Coverage</h3>
              <p className="text-slate-400 font-mono text-sm">
                Get weather information for any city worldwide with detailed metrics
              </p>
            </div>
            
            <div className="backdrop-blur-sm bg-slate-700/20 border border-slate-600/30 rounded-2xl p-6 hover:bg-slate-700/30 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-4">
                <svg viewBox="0 0 64 64" className="w-full h-full text-emerald-400">
                  <defs>
                    <linearGradient id="responsivegradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#10b981" />
                      <stop offset="100%" stopColor="#059669" />
                    </linearGradient>
                  </defs>
                  <rect x="12" y="8" width="20" height="32" rx="4" fill="none" stroke="url(#responsivegradient)" strokeWidth="2" />
                  <rect x="36" y="16" width="16" height="24" rx="3" fill="none" stroke="url(#responsivegradient)" strokeWidth="2" />
                  <rect x="16" y="12" width="12" height="2" rx="1" fill="url(#responsivegradient)" />
                  <rect x="40" y="20" width="8" height="1.5" rx="0.75" fill="url(#responsivegradient)" />
                  <circle cx="22" cy="50" r="6" fill="none" stroke="url(#responsivegradient)" strokeWidth="2" />
                  <circle cx="44" cy="50" r="4" fill="none" stroke="url(#responsivegradient)" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-100 mb-2 font-mono">Responsive</h3>
              <p className="text-slate-400 font-mono text-sm">
                Perfectly optimized for all devices with smooth animations
              </p>
            </div>
          </div>
        </div>
        
        <div className="backdrop-blur-md bg-slate-800/30 border border-slate-600/40 rounded-3xl p-8 mb-8 animate-fade-in">
          <h3 className="text-2xl font-bold text-slate-100 mb-6 font-mono">Tech Stack</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {techStack.map((tech, index) => (
              <div 
                key={tech.name}
                className="backdrop-blur-sm bg-slate-700/20 border border-slate-600/30 rounded-2xl p-4 text-center hover:bg-slate-700/30 transition-all duration-300 transform hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 mx-auto mb-3">
                  {tech.icon}
                </div>
                <p className="text-slate-300 text-xs font-medium font-mono">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="backdrop-blur-md bg-slate-800/30 border border-slate-600/40 rounded-3xl p-8 animate-fade-in">
          <h3 className="text-2xl font-bold text-slate-100 mb-6 font-mono">Features</h3>
          <div className="grid md:grid-cols-2 gap-4 text-left">
            <div className="flex items-center space-x-3">
              <span className="text-emerald-400">✓</span>
              <span className="text-slate-300 font-mono text-sm">Real-time weather data</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-emerald-400">✓</span>
              <span className="text-slate-300 font-mono text-sm">Detailed weather metrics</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-emerald-400">✓</span>
              <span className="text-slate-300 font-mono text-sm">Beautiful animations</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-emerald-400">✓</span>
              <span className="text-slate-300 font-mono text-sm">Mobile responsive</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-emerald-400">✓</span>
              <span className="text-slate-300 font-mono text-sm">Glassmorphism UI</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-emerald-400">✓</span>
              <span className="text-slate-300 font-mono text-sm">Global city search</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
