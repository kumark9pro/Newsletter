import React, { useState, useEffect } from 'react';
import { Card, CardContent } from './ui/card';

const LiveDataSection = ({ data }) => {
  const [animatedValue, setAnimatedValue] = useState(0);
  const [hoveredSector, setHoveredSector] = useState(null);

  useEffect(() => {
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
      }, 50);
    }, 500);

    return () => clearTimeout(timer);
  }, [data.value]);

  const getBarHeight = (value) => {
    const maxValue = Math.max(...data.sectors.map(s => s.value));
    return (value / maxValue) * 100;
  };

  return (
    <section className="mb-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black tracking-wider mb-4">
          <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
            LIVE DATA
          </span>
        </h2>
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto"></div>
      </div>
      
      <Card className="bg-gray-900/50 border-gray-700/50 backdrop-blur-sm">
        <CardContent className="p-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-cyan-300 mb-4">
              {data.title}
            </h3>
            <div className="text-5xl md:text-6xl font-black text-white mb-4">
              <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                ${animatedValue}
              </span>
              <span className="text-2xl text-gray-400 ml-3">{data.unit}</span>
            </div>
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full border border-green-500/30">
              <span className="text-xl text-green-300 font-bold">
                {data.change} vs last year
              </span>
            </div>
          </div>

          {/* Enhanced Neon Bar Chart */}
          <div className="space-y-6">
            <h4 className="text-2xl font-bold text-cyan-300 text-center mb-8 tracking-wide">
              INVESTMENT BY SECTOR
            </h4>
            
            <div className="relative">
              {/* Grid lines */}
              <div className="absolute inset-0 grid grid-cols-5 gap-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="border-l border-gray-700/30 h-64"></div>
                ))}
              </div>
              
              {/* Horizontal grid lines */}
              <div className="absolute inset-0 space-y-16">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-full h-px bg-gray-700/30"></div>
                ))}
              </div>
              
              {/* Bars */}
              <div className="relative grid grid-cols-5 gap-4 items-end h-64">
                {data.sectors.map((sector, index) => (
                  <div
                    key={sector.name}
                    className="flex flex-col items-center cursor-pointer transition-all duration-300 hover:scale-105"
                    onMouseEnter={() => setHoveredSector(index)}
                    onMouseLeave={() => setHoveredSector(null)}
                  >
                    <div className="w-full flex flex-col items-center relative">
                      {/* Neon glow effect */}
                      <div
                        className="absolute inset-0 rounded-t-xl blur-sm opacity-50"
                        style={{
                          height: `${getBarHeight(sector.value)}%`,
                          backgroundColor: sector.color,
                          filter: `drop-shadow(0 0 10px ${sector.color})`
                        }}
                      />
                      
                      {/* Main bar */}
                      <div
                        className="relative w-16 md:w-20 transition-all duration-1000 ease-out rounded-t-xl border-2 border-gray-600/50"
                        style={{
                          height: `${getBarHeight(sector.value)}%`,
                          background: `linear-gradient(to top, ${sector.color}, ${sector.color}88)`,
                          boxShadow: hoveredSector === index ? `0 0 30px ${sector.color}66` : `0 0 15px ${sector.color}33`
                        }}
                      >
                        {/* Animated particles */}
                        {hoveredSector === index && (
                          <div className="absolute inset-0 overflow-hidden rounded-t-xl">
                            {[...Array(5)].map((_, i) => (
                              <div
                                key={i}
                                className="absolute w-1 h-1 rounded-full animate-pulse"
                                style={{
                                  backgroundColor: sector.color,
                                  left: `${Math.random() * 100}%`,
                                  top: `${Math.random() * 100}%`,
                                  animationDelay: `${Math.random() * 2}s`
                                }}
                              />
                            ))}
                          </div>
                        )}
                      </div>
                      
                      {/* Value tooltip */}
                      {hoveredSector === index && (
                        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap border border-gray-700 shadow-lg">
                          <div className="font-bold">${sector.value}B</div>
                          <div className="w-2 h-2 bg-gray-900 transform rotate-45 absolute -bottom-1 left-1/2 -translate-x-1/2 border-r border-b border-gray-700"></div>
                        </div>
                      )}
                    </div>
                    
                    {/* Sector label */}
                    <div className="text-xs text-gray-400 mt-4 text-center font-medium uppercase tracking-wide">
                      {sector.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Legend */}
          <div className="mt-12 p-6 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {data.sectors.map((sector, index) => (
                <div
                  key={sector.name}
                  className="flex items-center space-x-3 cursor-pointer group"
                  onMouseEnter={() => setHoveredSector(index)}
                  onMouseLeave={() => setHoveredSector(null)}
                >
                  <div className="relative">
                    <div
                      className="w-6 h-6 rounded-full transition-all duration-300 border-2 border-gray-600/50"
                      style={{
                        backgroundColor: sector.color,
                        boxShadow: hoveredSector === index ? `0 0 15px ${sector.color}66` : `0 0 8px ${sector.color}33`
                      }}
                    />
                    {hoveredSector === index && (
                      <div className="absolute inset-0 rounded-full border-2 border-white/50 animate-ping"></div>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                      {sector.name}
                    </div>
                    <div className="text-xs text-gray-500">
                      ${sector.value}B
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default LiveDataSection;