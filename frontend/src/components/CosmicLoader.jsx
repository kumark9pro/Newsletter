import React, { useState, useEffect } from 'react';

const CosmicLoader = ({ onComplete }) => {
  const [stage, setStage] = useState(0);
  const [particles, setParticles] = useState([]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Generate subtle constellation
    const particleArray = [];
    for (let i = 0; i < 50; i++) {
      particleArray.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 0.5,
        delay: Math.random() * 4,
        duration: 2 + Math.random() * 3
      });
    }
    setParticles(particleArray);

    // Premium animation sequence
    const timer1 = setTimeout(() => setStage(1), 800);
    const timer2 = setTimeout(() => setStage(2), 2000);
    const timer3 = setTimeout(() => setStage(3), 3200);
    const timer4 = setTimeout(() => {
      setIsTransitioning(true);
      // Smooth transition - fade out loader before calling onComplete
      setTimeout(() => onComplete(), 1000);
    }, 4500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-50 bg-black transition-opacity duration-1000 ${
      isTransitioning ? 'opacity-0' : 'opacity-100'
    }`}>
      {/* Subtle constellation background */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-white opacity-60"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animation: `twinkle ${particle.duration}s ease-in-out infinite`,
              animationDelay: `${particle.delay}s`
            }}
          />
        ))}
      </div>

      {/* Converging cosmic lines */}
      <div className="absolute inset-0 flex items-center justify-center">
        {stage >= 1 && (
          <>
            {/* Horizontal line */}
            <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent animate-fade-in" />
            {/* Vertical line */}
            <div className="absolute h-full w-px bg-gradient-to-b from-transparent via-cyan-400/40 to-transparent animate-fade-in" />
            {/* Outer ring */}
            <div className="absolute w-96 h-96 border border-cyan-400/20 rounded-full animate-ping" />
            {/* Inner ring */}
            <div className="absolute w-64 h-64 border border-blue-400/20 rounded-full animate-ping" style={{ animationDelay: '0.7s' }} />
          </>
        )}
      </div>

      {/* Daiva logo with premium cosmic effects */}
      <div className="absolute inset-0 flex items-center justify-center">
        {stage >= 2 && (
          <div className="text-center">
            {/* Cosmic lens flare */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 bg-gradient-radial from-cyan-400/10 via-blue-400/5 to-transparent rounded-full animate-pulse" />
            </div>
            
            {/* Premium logo */}
            <div className="relative">
              <div className="text-9xl font-light bg-gradient-to-r from-cyan-200 via-white to-blue-200 bg-clip-text text-transparent tracking-widest animate-cosmic-entrance">
                DAIVA
              </div>
              
              {/* Elegant cosmic rings */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[600px] h-32 border border-cyan-400/15 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
                <div className="absolute w-96 h-24 border border-blue-400/15 rounded-full animate-ping" style={{ animationDelay: '0.5s', animationDuration: '3s' }} />
              </div>
            </div>
            
            {/* Tagline with smooth reveal */}
            {stage >= 3 && (
              <div className="mt-12 space-y-4 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                <div className="text-cyan-300 text-xl font-light tracking-wide">
                  Where Insight Emerges
                </div>
                <div className="w-32 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent mx-auto animate-expand" />
              </div>
            )}
          </div>
        )}
      </div>

      {/* Gentle shimmer overlay for transition */}
      {stage >= 3 && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/3 to-transparent animate-shimmer" />
      )}
    </div>
  );
};

export default CosmicLoader;