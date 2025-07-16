import React, { useState, useEffect } from 'react';

const CosmicLoader = ({ onComplete }) => {
  const [stage, setStage] = useState(0);
  const [particles, setParticles] = useState([]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    // Generate enhanced constellation with more cosmic feel
    const particleArray = [];
    for (let i = 0; i < 80; i++) {
      particleArray.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 0.5,
        delay: Math.random() * 6,
        duration: 3 + Math.random() * 4,
        brightness: 0.3 + Math.random() * 0.7,
        color: i % 3 === 0 ? 'cyan' : i % 3 === 1 ? 'blue' : 'white'
      });
    }
    setParticles(particleArray);

    // Enhanced animation sequence with progress
    const progressInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    // Premium animation stages
    const timer1 = setTimeout(() => setStage(1), 800);
    const timer2 = setTimeout(() => setStage(2), 2200);
    const timer3 = setTimeout(() => setStage(3), 3800);
    const timer4 = setTimeout(() => setStage(4), 4800);
    const timer5 = setTimeout(() => {
      setIsTransitioning(true);
      // Ultra-smooth transition - fade out loader before calling onComplete
      setTimeout(() => onComplete(), 1200);
    }, 5500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  const getParticleColor = (color) => {
    switch (color) {
      case 'cyan':
        return 'bg-cyan-400';
      case 'blue':
        return 'bg-blue-400';
      default:
        return 'bg-white';
    }
  };

  return (
    <div className={`fixed inset-0 z-50 bg-black transition-all duration-1200 ease-out ${
      isTransitioning ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
    }`}>
      {/* Enhanced constellation background */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className={`absolute rounded-full ${getParticleColor(particle.color)} opacity-60`}
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.brightness,
              animation: `cosmic-twinkle ${particle.duration}s ease-in-out infinite`,
              animationDelay: `${particle.delay}s`,
              filter: 'blur(0.5px)',
              boxShadow: `0 0 ${particle.size * 4}px ${particle.color === 'cyan' ? '#06ffa5' : particle.color === 'blue' ? '#0ea5e9' : '#ffffff'}40`
            }}
          />
        ))}
      </div>

      {/* Cosmic gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 via-black to-blue-900/10" />

      {/* Central loading element */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          {/* Stage 0: Initial appearance */}
          <div className={`transition-all duration-1000 ${stage >= 0 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            {/* Enhanced DAIVA logo */}
            <div className="relative mb-12">
              <div className={`text-8xl font-light bg-gradient-to-r from-cyan-100 via-white to-blue-100 bg-clip-text text-transparent tracking-[0.3em] transition-all duration-1500 ${
                stage >= 1 ? 'scale-100 opacity-100' : 'scale-110 opacity-80'
              }`}>
                DAIVA
              </div>
              
              {/* Cosmic rings around logo */}
              {stage >= 2 && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-96 h-96 rounded-full border border-cyan-400/20 animate-spin" style={{ animationDuration: '20s' }} />
                  <div className="absolute w-80 h-80 rounded-full border border-blue-400/15 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
                  <div className="absolute w-64 h-64 rounded-full border border-cyan-400/10 animate-spin" style={{ animationDuration: '25s' }} />
                </div>
              )}
            </div>
          </div>

          {/* Stage 1: Subtitle appears */}
          <div className={`transition-all duration-1000 delay-500 ${stage >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <p className="text-xl text-slate-300 font-light tracking-widest mb-16">
              INITIALIZING COSMIC INTELLIGENCE
            </p>
          </div>

          {/* Stage 2: Progress indicator */}
          <div className={`transition-all duration-1000 delay-1000 ${stage >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="w-80 mx-auto mb-8">
              <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full transition-all duration-300 ease-out"
                  style={{ width: `${loadingProgress}%` }}
                />
              </div>
            </div>
            <p className="text-sm text-slate-400 font-light tracking-wide">
              {loadingProgress}% COMPLETE
            </p>
          </div>

          {/* Stage 3: Cosmic wisdom quote */}
          <div className={`transition-all duration-1000 delay-1500 ${stage >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <p className="text-lg text-cyan-200 font-light italic tracking-wide mt-12 max-w-md mx-auto leading-relaxed">
              "Where data meets divination, insights illuminate."
            </p>
          </div>

          {/* Stage 4: Final cosmic effect */}
          <div className={`transition-all duration-1000 delay-2000 ${stage >= 4 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="mt-8 flex justify-center space-x-2">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"
                  style={{ animationDelay: `${i * 0.3}s` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Cosmic particle system */}
      <div className="absolute inset-0 pointer-events-none">
        {stage >= 3 && [...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-40"
            style={{
              left: `${20 + i * 60 / 12}%`,
              top: `${30 + Math.sin(i) * 40}%`,
              animation: `float-cosmic ${3 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.2}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default CosmicLoader;