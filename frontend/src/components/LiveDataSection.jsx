import React, { useState, useEffect } from 'react';
import { Card, CardContent } from './ui/card';

const LiveDataSection = ({ data }) => {
  const [animatedValue, setAnimatedValue] = useState(0);
  const [hoveredSector, setHoveredSector] = useState(null);
  const [barsAnimated, setBarsAnimated] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Intersection Observer to trigger animation when visible
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('live-data-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    // Animate the main value
    const timer = setTimeout(() => {
      const increment = data.value / 80;
      let current = 0;
      const interval = setInterval(() => {
        current += increment;
        if (current >= data.value) {
          current = data.value;
          clearInterval(interval);
        }
        setAnimatedValue(Math.round(current));
      }, 30);
    }, 500);

    // Animate bars after a delay
    const barTimer = setTimeout(() => {
      setBarsAnimated(true);
    }, 1200);

    return () => {
      clearTimeout(timer);
      clearTimeout(barTimer);
    };
  }, [data.value, isVisible]);

  const getBarHeight = (value) => {
    const maxValue = Math.max(...data.sectors.map(s => s.value));
    return barsAnimated ? (value / maxValue) * 100 : 0;
  };

  const getBarDelay = (index) => {
    return `${index * 0.2}s`;
  };

  return (
    <section id="live-data-section" className="mb-96">
      <div className="text-center mb-56">
        <h2 className="text-5xl md:text-6xl font-light tracking-wider mb-16 animate-fade-in-up">
          <span className="bg-gradient-to-r from-cyan-100 via-white to-blue-100 bg-clip-text text-transparent">
            LIVE DATA
          </span>
        </h2>
        <div className="w-32 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent mx-auto animate-expand"></div>
      </div>
      
      <div className="group p-20 rounded-3xl bg-slate-950/12 border border-slate-800/25 hover:border-cyan-400/15 hover:bg-slate-950/20 transition-all duration-1000">
        {/* Enhanced animated header */}
        <div className="text-center mb-24">
          <h3 className="text-3xl font-light text-cyan-100 mb-12 animate-fade-in-up">
            {data.title}
          </h3>
          <div className="text-6xl md:text-7xl font-light text-white mb-8 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            <span className="bg-gradient-to-r from-cyan-100 via-white to-blue-100 bg-clip-text text-transparent">
              ${animatedValue}
            </span>
            <span className="text-2xl text-slate-400 ml-4 font-light">{data.unit}</span>
          </div>
          <div className="inline-block px-8 py-4 bg-gradient-to-r from-green-500/8 to-emerald-500/8 rounded-full border border-green-500/15 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <span className="text-base text-green-200 font-light">
              {data.change} vs last year
            </span>
          </div>
        </div>

        {/* LEGENDARY Interactive Bar Chart */}
        <div className="space-y-16">
          <h4 className="text-2xl font-light text-cyan-100 text-center tracking-wide animate-fade-in-up mb-16">
            Investment by Sector
          </h4>
          
          <div className="relative bg-slate-900/20 rounded-3xl p-12 border border-slate-800/30">
            {/* Animated grid lines */}
            <div className="absolute inset-12 opacity-20 pointer-events-none">
              {[...Array(5)].map((_, i) => (
                <div 
                  key={`h-${i}`}
                  className="w-full h-px bg-gradient-to-r from-cyan-400/20 via-cyan-400/40 to-cyan-400/20 mb-16 animate-fade-in" 
                  style={{animationDelay: `${i * 0.1}s`}}
                />
              ))}
              {[...Array(5)].map((_, i) => (
                <div 
                  key={`v-${i}`}
                  className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/20 via-cyan-400/40 to-cyan-400/20 animate-fade-in" 
                  style={{
                    left: `${20 + i * 15}%`,
                    animationDelay: `${i * 0.1 + 0.5}s`
                  }}
                />
              ))}
            </div>
            
            {/* Interactive animated bars */}
            <div className="relative grid grid-cols-5 gap-8 items-end h-80">
              {data.sectors.map((sector, index) => (
                <div
                  key={sector.name}
                  className="flex flex-col items-center cursor-pointer transition-all duration-700 hover:scale-110 group/bar"
                  onMouseEnter={() => setHoveredSector(index)}
                  onMouseLeave={() => setHoveredSector(null)}
                >
                  <div className="w-full flex flex-col items-center relative">
                    {/* Enhanced animated glow effect */}
                    <div
                      className="absolute inset-0 rounded-t-2xl blur-md transition-all duration-700"
                      style={{
                        height: `${getBarHeight(sector.value)}%`,
                        background: `linear-gradient(to top, ${sector.color}60, ${sector.color}80)`,
                        opacity: hoveredSector === index ? 0.8 : 0.3,
                        transform: hoveredSector === index ? 'scale(1.1)' : 'scale(1)'
                      }}
                    />
                    
                    {/* Main legendary animated bar */}
                    <div
                      className="relative w-16 md:w-20 transition-all duration-1500 ease-out rounded-t-2xl border-2 border-slate-700/30 group-hover/bar:border-slate-600/50 overflow-hidden"
                      style={{
                        height: `${getBarHeight(sector.value)}%`,
                        background: `linear-gradient(to top, ${sector.color}40, ${sector.color}90)`,
                        boxShadow: hoveredSector === index ? 
                          `0 0 30px ${sector.color}80, inset 0 0 20px ${sector.color}40` : 
                          `0 0 15px ${sector.color}40`,
                        transitionDelay: getBarDelay(index)
                      }}
                    >
                      {/* Animated shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-transparent translate-y-full group-hover/bar:translate-y-[-100%] transition-transform duration-1000"></div>
                      
                      {/* Animated particles in bars */}
                      {hoveredSector === index && (
                        <div className="absolute inset-0">
                          {[...Array(6)].map((_, i) => (
                            <div
                              key={i}
                              className="absolute w-1.5 h-1.5 rounded-full animate-pulse"
                              style={{
                                backgroundColor: sector.color,
                                left: `${10 + i * 15}%`,
                                top: `${10 + (i % 3) * 30}%`,
                                animationDelay: `${i * 0.2}s`,
                                animationDuration: '1.5s'
                              }}
                            />
                          ))}
                        </div>
                      )}
                      
                      {/* Value display inside bar */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white font-bold text-sm opacity-0 group-hover/bar:opacity-100 transition-opacity duration-300">
                          {sector.value}B
                        </span>
                      </div>
                    </div>
                    
                    {/* Enhanced floating value tooltip */}
                    {hoveredSector === index && (
                      <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 animate-fade-in-up">
                        <div className="bg-slate-900/95 backdrop-blur-sm text-white px-4 py-3 rounded-xl text-sm font-medium border border-slate-700/50 shadow-2xl">
                          <div className="text-center">
                            <div className="font-bold text-lg">${sector.value}B</div>
                            <div className="text-slate-300 text-xs">{sector.name}</div>
                          </div>
                          <div className="w-3 h-3 bg-slate-900 transform rotate-45 absolute -bottom-1.5 left-1/2 -translate-x-1/2 border-r border-b border-slate-700/50"></div>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Enhanced animated sector label */}
                  <div className="mt-8 text-center transition-all duration-500 group-hover/bar:scale-110">
                    <div className="text-sm text-slate-300 font-medium group-hover/bar:text-white transition-colors duration-300">
                      {sector.name}
                    </div>
                    <div className="text-xs text-slate-500 group-hover/bar:text-slate-300 transition-colors duration-300 mt-1">
                      ${sector.value}B
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced interactive legend */}
        <div className="mt-20 p-12 bg-slate-900/15 rounded-3xl border border-slate-800/25 hover:border-slate-700/40 transition-all duration-700">
          <h5 className="text-xl font-light text-cyan-100 text-center mb-8 tracking-wide">
            Sector Breakdown
          </h5>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {data.sectors.map((sector, index) => (
              <div
                key={sector.name}
                className="flex flex-col items-center space-y-4 cursor-pointer group transition-all duration-500 hover:scale-110 animate-fade-in-up p-4 rounded-2xl hover:bg-slate-800/30"
                style={{animationDelay: `${index * 0.1}s`}}
                onMouseEnter={() => setHoveredSector(index)}
                onMouseLeave={() => setHoveredSector(null)}
              >
                <div className="relative">
                  <div
                    className="w-8 h-8 rounded-full transition-all duration-500 group-hover:scale-125 border-2 border-slate-600/30 group-hover:border-slate-500/50"
                    style={{
                      backgroundColor: sector.color,
                      opacity: hoveredSector === index ? 1 : 0.7,
                      boxShadow: hoveredSector === index ? 
                        `0 0 20px ${sector.color}80, 0 0 40px ${sector.color}40` : 
                        `0 0 10px ${sector.color}40`
                    }}
                  />
                  {hoveredSector === index && (
                    <>
                      <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-ping"></div>
                      <div className="absolute inset-0 rounded-full border border-white/20 animate-ping" style={{animationDelay: '0.5s'}}></div>
                    </>
                  )}
                </div>
                <div className="text-center">
                  <div className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors duration-300">
                    {sector.name}
                  </div>
                  <div className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors duration-300 mt-1">
                    ${sector.value}B ({Math.round((sector.value / data.value) * 100)}%)
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive summary stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Total Investment', value: `$${data.value}B`, color: 'cyan' },
            { label: 'Growth Rate', value: data.change, color: 'green' },
            { label: 'Top Sector', value: data.sectors.reduce((max, sector) => sector.value > max.value ? sector : max).name, color: 'blue' },
            { label: 'Active Sectors', value: data.sectors.length, color: 'purple' }
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-slate-900/20 border border-slate-800/30 hover:border-slate-700/50 transition-all duration-500 hover:scale-105 cursor-pointer group animate-fade-in-up"
              style={{animationDelay: `${index * 0.1 + 1}s`}}
            >
              <div className={`text-2xl font-bold mb-2 text-${stat.color}-300 group-hover:text-${stat.color}-200 transition-colors duration-300`}>
                {stat.value}
              </div>
              <div className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors duration-300 uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveDataSection;