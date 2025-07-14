import React, { useState, useEffect } from 'react';
import { Card, CardContent } from './ui/card';

const LiveDataSection = ({ data }) => {
  const [animatedValue, setAnimatedValue] = useState(0);
  const [hoveredSector, setHoveredSector] = useState(null);
  const [barsAnimated, setBarsAnimated] = useState(false);

  useEffect(() => {
    // Animate the main value
    const timer = setTimeout(() => {
      const increment = data.value / 50;
      let current = 0;
      const interval = setInterval(() => {
        current += increment;
        if (current >= data.value) {
          current = data.value;
          clearInterval(interval);
        }
        setAnimatedValue(Math.round(current));
      }, 40);
    }, 500);

    // Animate bars after a delay
    const barTimer = setTimeout(() => {
      setBarsAnimated(true);
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearTimeout(barTimer);
    };
  }, [data.value]);

  const getBarHeight = (value) => {
    const maxValue = Math.max(...data.sectors.map(s => s.value));
    return barsAnimated ? (value / maxValue) * 100 : 0;
  };

  return (
    <section className="mb-48">
      <div className="text-center mb-32">
        <h2 className="text-3xl md:text-4xl font-light tracking-wider mb-8 animate-fade-in-up">
          <span className="bg-gradient-to-r from-cyan-200 to-blue-200 bg-clip-text text-transparent">
            LIVE DATA
          </span>
        </h2>
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent mx-auto animate-expand"></div>
      </div>
      
      <div className="group p-12 rounded-3xl bg-slate-950/30 border border-slate-800/50 hover:border-cyan-500/20 hover:bg-slate-950/40 transition-all duration-700">
        {/* Enhanced header with animations */}
        <div className="text-center mb-20">
          <h3 className="text-2xl font-light text-cyan-200 mb-8 animate-fade-in-up">
            {data.title}
          </h3>
          <div className="text-4xl md:text-5xl font-light text-white mb-6 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <span className="bg-gradient-to-r from-cyan-200 to-blue-200 bg-clip-text text-transparent">
              ${animatedValue}
            </span>
            <span className="text-xl text-slate-400 ml-3 font-light">{data.unit}</span>
          </div>
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full border border-green-500/20 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <span className="text-sm text-green-300 font-light">
              {data.change} vs last year
            </span>
          </div>
        </div>

        {/* Enhanced animated chart */}
        <div className="space-y-12">
          <h4 className="text-lg font-light text-cyan-200 text-center tracking-wide animate-fade-in-up">
            Investment by Sector
          </h4>
          
          <div className="relative">
            {/* Animated grid lines */}
            <div className="absolute inset-0 opacity-20">
              {[...Array(4)].map((_, i) => (
                <div 
                  key={i} 
                  className="w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent mb-12 animate-fade-in" 
                  style={{animationDelay: `${i * 0.1}s`}}
                />
              ))}
            </div>
            
            {/* Enhanced animated bars */}
            <div className="relative grid grid-cols-5 gap-8 items-end h-48">
              {data.sectors.map((sector, index) => (
                <div
                  key={sector.name}
                  className="flex flex-col items-center cursor-pointer transition-all duration-500 hover:scale-110"
                  onMouseEnter={() => setHoveredSector(index)}
                  onMouseLeave={() => setHoveredSector(null)}
                >
                  <div className="w-full flex flex-col items-center relative">
                    {/* Animated glow effect */}
                    <div
                      className="absolute inset-0 rounded-t-lg blur-sm opacity-0 transition-opacity duration-500"
                      style={{
                        height: `${getBarHeight(sector.value)}%`,
                        backgroundColor: sector.color,
                        opacity: hoveredSector === index ? 0.5 : 0
                      }}
                    />
                    
                    {/* Main animated bar */}
                    <div
                      className="w-12 md:w-16 transition-all duration-1000 ease-out rounded-t-lg relative overflow-hidden"
                      style={{
                        height: `${getBarHeight(sector.value)}%`,
                        background: `linear-gradient(to top, ${sector.color}40, ${sector.color}80)`,
                        boxShadow: hoveredSector === index ? `0 0 20px ${sector.color}40` : 'none',
                        transitionDelay: `${index * 0.1}s`
                      }}
                    >
                      {/* Animated particles in bars */}
                      {hoveredSector === index && (
                        <div className="absolute inset-0">
                          {[...Array(3)].map((_, i) => (
                            <div
                              key={i}
                              className="absolute w-1 h-1 rounded-full animate-pulse"
                              style={{
                                backgroundColor: sector.color,
                                left: `${20 + i * 30}%`,
                                top: `${20 + i * 20}%`,
                                animationDelay: `${i * 0.2}s`
                              }}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                    
                    {/* Enhanced value tooltip */}
                    {hoveredSector === index && (
                      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-slate-900/90 text-white px-3 py-2 rounded-lg text-xs font-light animate-fade-in-up border border-slate-700/50">
                        <div className="font-medium">${sector.value}B</div>
                        <div className="w-2 h-2 bg-slate-900 transform rotate-45 absolute -bottom-1 left-1/2 -translate-x-1/2 border-r border-b border-slate-700/50"></div>
                      </div>
                    )}
                  </div>
                  
                  {/* Animated sector label */}
                  <div className="text-xs text-slate-400 mt-6 text-center font-light transition-colors duration-300 hover:text-slate-300">
                    {sector.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced legend with animations */}
        <div className="mt-16 p-8 bg-slate-900/30 rounded-2xl border border-slate-800/30 hover:border-slate-700/50 transition-all duration-500">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {data.sectors.map((sector, index) => (
              <div
                key={sector.name}
                className="flex items-center space-x-4 cursor-pointer group transition-all duration-300 hover:scale-105 animate-fade-in-up"
                style={{animationDelay: `${index * 0.1}s`}}
                onMouseEnter={() => setHoveredSector(index)}
                onMouseLeave={() => setHoveredSector(null)}
              >
                <div className="relative">
                  <div
                    className="w-4 h-4 rounded-full transition-all duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: sector.color,
                      opacity: hoveredSector === index ? 1 : 0.6,
                      boxShadow: hoveredSector === index ? `0 0 10px ${sector.color}50` : 'none'
                    }}
                  />
                  {hoveredSector === index && (
                    <div className="absolute inset-0 rounded-full border border-white/30 animate-ping"></div>
                  )}
                </div>
                <div>
                  <div className="text-sm font-light text-slate-300 group-hover:text-slate-200 transition-colors duration-300">
                    {sector.name}
                  </div>
                  <div className="text-xs text-slate-500 font-light group-hover:text-slate-400 transition-colors duration-300">
                    ${sector.value}B
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveDataSection;