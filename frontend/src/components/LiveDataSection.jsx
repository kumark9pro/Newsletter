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
    <section className="mb-48">
      <div className="text-center mb-32">
        <h2 className="text-3xl md:text-4xl font-light tracking-wider mb-8">
          <span className="bg-gradient-to-r from-cyan-200 to-blue-200 bg-clip-text text-transparent">
            LIVE DATA
          </span>
        </h2>
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent mx-auto"></div>
      </div>
      
      <div className="p-12 rounded-3xl bg-slate-950/30 border border-slate-800/50">
        <div className="text-center mb-20">
          <h3 className="text-2xl font-light text-cyan-200 mb-8">
            {data.title}
          </h3>
          <div className="text-4xl md:text-5xl font-light text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-200 to-blue-200 bg-clip-text text-transparent">
              ${animatedValue}
            </span>
            <span className="text-xl text-slate-400 ml-3 font-light">{data.unit}</span>
          </div>
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full border border-green-500/20">
            <span className="text-sm text-green-300 font-light">
              {data.change} vs last year
            </span>
          </div>
        </div>

        {/* Minimal Chart */}
        <div className="space-y-12">
          <h4 className="text-lg font-light text-cyan-200 text-center tracking-wide">
            Investment by Sector
          </h4>
          
          <div className="relative">
            {/* Clean bars */}
            <div className="grid grid-cols-5 gap-8 items-end h-48">
              {data.sectors.map((sector, index) => (
                <div
                  key={sector.name}
                  className="flex flex-col items-center cursor-pointer transition-all duration-500 hover:scale-105"
                  onMouseEnter={() => setHoveredSector(index)}
                  onMouseLeave={() => setHoveredSector(null)}
                >
                  <div className="w-full flex flex-col items-center relative">
                    {/* Minimal bar */}
                    <div
                      className="w-12 md:w-16 transition-all duration-1000 ease-out rounded-t-lg"
                      style={{
                        height: `${getBarHeight(sector.value)}%`,
                        background: `linear-gradient(to top, ${sector.color}40, ${sector.color}80)`,
                        boxShadow: hoveredSector === index ? `0 0 20px ${sector.color}40` : 'none'
                      }}
                    />
                    
                    {/* Minimal value tooltip */}
                    {hoveredSector === index && (
                      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-slate-900/90 text-white px-3 py-2 rounded-lg text-xs font-light">
                        ${sector.value}B
                      </div>
                    )}
                  </div>
                  
                  {/* Minimal sector label */}
                  <div className="text-xs text-slate-400 mt-6 text-center font-light">
                    {sector.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Minimal Legend */}
        <div className="mt-16 p-8 bg-slate-900/30 rounded-2xl border border-slate-800/30">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {data.sectors.map((sector, index) => (
              <div
                key={sector.name}
                className="flex items-center space-x-4 cursor-pointer group"
                onMouseEnter={() => setHoveredSector(index)}
                onMouseLeave={() => setHoveredSector(null)}
              >
                <div
                  className="w-4 h-4 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: sector.color,
                    opacity: hoveredSector === index ? 1 : 0.6
                  }}
                />
                <div>
                  <div className="text-sm font-light text-slate-300">
                    {sector.name}
                  </div>
                  <div className="text-xs text-slate-500 font-light">
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