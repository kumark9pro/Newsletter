import React, { useState, useEffect } from 'react';

const CosmicLoader = ({ onComplete }) => {
  const [stage, setStage] = useState(0);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate cosmic particles
    const particleArray = [];
    for (let i = 0; i < 20; i++) {
      particleArray.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        delay: Math.random() * 2
      });
    }
    setParticles(particleArray);

    // Animation sequence
    const timer1 = setTimeout(() => setStage(1), 500);
    const timer2 = setTimeout(() => setStage(2), 1500);
    const timer3 = setTimeout(() => setStage(3), 2500);
    const timer4 = setTimeout(() => onComplete(), 3500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-b from-slate-950 to-gray-950 flex items-center justify-center">
      {/* Cosmic particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse opacity-60"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: '3s'
            }}
          />
        ))}
      </div>

      {/* Converging lines */}
      <div className="absolute inset-0">
        {stage >= 1 && (
          <>
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent transform -translate-y-1/2 animate-pulse" />
            <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent transform -translate-x-1/2 animate-pulse" />
            <div className="absolute top-1/2 left-1/2 w-96 h-96 border border-cyan-500/30 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-ping" />
            <div className="absolute top-1/2 left-1/2 w-64 h-64 border border-blue-500/30 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-ping" style={{ animationDelay: '0.5s' }} />
          </>
        )}
      </div>

      {/* Daiva logo with cosmic effects */}
      <div className="relative z-10">
        {stage >= 2 && (
          <div className="text-center">
            {/* Lens flare effect */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 bg-gradient-radial from-cyan-400/20 via-blue-400/10 to-transparent rounded-full animate-pulse" />
            </div>
            
            {/* Pulsing logo */}
            <div className="relative">
              <div className="text-8xl font-light bg-gradient-to-r from-cyan-200 to-blue-200 bg-clip-text text-transparent tracking-widest animate-pulse">
                DAIVA
              </div>
              
              {/* Cosmic rings around logo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-96 h-24 border border-cyan-500/20 rounded-full animate-ping" />
                <div className="absolute w-80 h-20 border border-blue-500/20 rounded-full animate-ping" style={{ animationDelay: '0.3s' }} />
              </div>
            </div>
            
            {stage >= 3 && (
              <div className="mt-8 text-cyan-300 text-lg font-light animate-fade-in">
                Where Insight Emerges
              </div>
            )}
          </div>
        )}
      </div>

      {/* Shimmer effect overlay */}
      {stage >= 3 && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent animate-shimmer" />
      )}
    </div>
  );
};

export default CosmicLoader;