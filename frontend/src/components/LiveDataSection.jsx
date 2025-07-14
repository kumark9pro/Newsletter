import React, { useState, useEffect } from 'react';
import { Card, CardContent } from './ui/card';

const LiveDataSection = ({ data }) => {
  const [animatedValue, setAnimatedValue] = useState(0);
  const [hoveredSector, setHoveredSector] = useState(null);
  const [selectedSector, setSelectedSector] = useState(null);
  const [barsAnimated, setBarsAnimated] = useState(false);
  const [gridLinesVisible, setGridLinesVisible] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [particles, setParticles] = useState([]);

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
      const increment = data.value / 120; // Slower animation
      let current = 0;
      const interval = setInterval(() => {
        current += increment;
        if (current >= data.value) {
          current = data.value;
          clearInterval(interval);
        }
        setAnimatedValue(Math.round(current));
      }, 25);
    }, 800);

    // Animate grid lines with staggered delays
    const gridTimer = setTimeout(() => {
      const gridIntervals = [];
      for (let i = 0; i < 5; i++) {
        setTimeout(() => {
          setGridLinesVisible(prev => [...prev, i]);
        }, i * 200);
      }
    }, 1000);

    // Animate bars with slower ease-out
    const barTimer = setTimeout(() => {
      setBarsAnimated(true);
    }, 1800);

    // Generate cosmic particles for tallest bar
    const maxValue = Math.max(...data.sectors.map(s => s.value));
    const tallestSectorIndex = data.sectors.findIndex(s => s.value === maxValue);
    
    const particleTimer = setInterval(() => {
      if (barsAnimated) {
        setParticles(prev => [
          ...prev.slice(-5), // Keep only last 5 particles
          {
            id: Date.now(),
            x: 50 + (tallestSectorIndex * 20) + Math.random() * 10 - 5,
            opacity: 0.3 + Math.random() * 0.4
          }
        ]);
      }
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearTimeout(gridTimer);
      clearTimeout(barTimer);
      clearInterval(particleTimer);
    };
  }, [data.value, isVisible, barsAnimated]);

  const getBarHeight = (value) => {
    const maxValue = Math.max(...data.sectors.map(s => s.value));
    return barsAnimated ? (value / maxValue) * 100 : 0;
  };

  const getBarDelay = (index) => {
    return `${index * 0.3}s`; // Slower staggered animation
  };

  const isBarFaded = (index) => {
    return selectedSector !== null && selectedSector !== index;
  };

  const handleLegendClick = (index) => {
    setSelectedSector(selectedSector === index ? null : index);
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
      
      <div className="group p-24 rounded-3xl bg-slate-950/8 border border-slate-800/20 hover:border-cyan-400/12 hover:bg-slate-950/12 transition-all duration-1000">
        {/* Enhanced animated header with more spacing */}
        <div className="text-center mb-32">
          <h3 className="text-3xl font-light text-cyan-100 mb-16 animate-fade-in-up">
            {data.title}
          </h3>
          <div className="text-6xl md:text-7xl font-light text-white mb-12 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <span className="bg-gradient-to-r from-cyan-100 via-white to-blue-100 bg-clip-text text-transparent">
              ${animatedValue}
            </span>
            <span className="text-2xl text-slate-400 ml-6 font-light">{data.unit}</span>
          </div>
          <div className="inline-block px-12 py-6 bg-gradient-to-r from-green-500/6 to-emerald-500/6 rounded-full border border-green-500/12 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
            <span className="text-base text-green-200 font-light tracking-wide">
              {data.change} vs last year
            </span>
          </div>
        </div>

        {/* LEGENDARY Interactive Bar Chart with cosmic elements */}
        <div className="space-y-20">
          <h4 className="text-2xl font-light text-cyan-100 text-center tracking-wide animate-fade-in-up mb-20">
            Investment by Sector
          </h4>
          
          <div className="relative bg-slate-900/12 rounded-3xl p-16 border border-slate-800/25">
            {/* Cosmic particle drift */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
              {particles.map((particle) => (
                <div
                  key={particle.id}
                  className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-float-up"
                  style={{
                    left: `${particle.x}%`,
                    bottom: '60%',
                    opacity: particle.opacity,
                    animationDuration: '4s'
                  }}
                />
              ))}
            </div>

            {/* Enhanced animated grid lines */}
            <div className="absolute inset-16 pointer-events-none">
              {[...Array(5)].map((_, i) => (
                <div 
                  key={`h-${i}`}
                  className={`w-full h-px bg-gradient-to-r from-cyan-400/15 via-cyan-400/25 to-cyan-400/15 mb-20 transition-opacity duration-1000 ${
                    gridLinesVisible.includes(i) ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
              {[...Array(5)].map((_, i) => (
                <div 
                  key={`v-${i}`}
                  className={`absolute top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/15 via-cyan-400/25 to-cyan-400/15 transition-opacity duration-1000 ${
                    gridLinesVisible.includes(i) ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{
                    left: `${20 + i * 15}%`
                  }}
                />
              ))}
            </div>
            
            {/* Legendary interactive bars */}
            <div className="relative grid grid-cols-5 gap-12 items-end h-96">
              {data.sectors.map((sector, index) => (
                <div
                  key={sector.name}
                  className="flex flex-col items-center cursor-pointer transition-all duration-700 hover:scale-106 group/bar"
                  onMouseEnter={() => setHoveredSector(index)}
                  onMouseLeave={() => setHoveredSector(null)}
                >
                  <div className="w-full flex flex-col items-center relative">
                    {/* Soft cosmic glow halo */}
                    <div
                      className="absolute inset-0 rounded-t-3xl blur-lg transition-all duration-700"
                      style={{
                        height: `${getBarHeight(sector.value)}%`,
                        background: `linear-gradient(to top, #60F6FF40, #3CF2E660)`,
                        opacity: hoveredSector === index ? 0.8 : (isBarFaded(index) ? 0.2 : 0.4),
                        transform: hoveredSector === index ? 'scale(1.1)' : 'scale(1)'
                      }}
                    />
                    
                    {/* Main legendary animated bar with soft gradient */}
                    <div
                      className="relative w-20 md:w-24 transition-all duration-2000 ease-out rounded-t-3xl border-2 border-slate-700/20 group-hover/bar:border-cyan-400/30 overflow-hidden"
                      style={{
                        height: `${getBarHeight(sector.value)}%`,
                        background: `linear-gradient(to top, #60F6FF30, #3CF2E650, #60F6FF70)`,
                        boxShadow: hoveredSector === index ? 
                          `0 0 40px #60F6FF60, inset 0 0 30px #3CF2E630` : 
                          `0 0 20px #60F6FF30`,
                        transitionDelay: getBarDelay(index),
                        opacity: isBarFaded(index) ? 0.3 : 1,
                        transform: hoveredSector === index ? 'scale(1.06)' : 'scale(1)'
                      }}
                    >
                      {/* Gentle pulsing shimmer effect */}
                      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/8 to-transparent translate-y-full group-hover/bar:translate-y-[-100%] transition-transform duration-2000"></div>
                      
                      {/* Gentle cosmic sparkles on hover */}
                      {hoveredSector === index && (
                        <div className="absolute inset-0">
                          {[...Array(4)].map((_, i) => (
                            <div
                              key={i}
                              className="absolute w-1 h-1 bg-cyan-200 rounded-full animate-pulse"
                              style={{
                                left: `${20 + i * 20}%`,
                                top: `${20 + (i % 2) * 40}%`,
                                animationDelay: `${i * 0.3}s`,
                                animationDuration: '2s'
                              }}
                            />
                          ))}
                        </div>
                      )}
                      
                      {/* Soft value display */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white/90 font-medium text-sm opacity-0 group-hover/bar:opacity-100 transition-opacity duration-500">
                          {sector.value}B
                        </span>
                      </div>
                    </div>
                    
                    {/* Enhanced floating tooltip with glow ring */}
                    {hoveredSector === index && (
                      <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 animate-fade-in-up">
                        <div className="relative">
                          <div className="bg-slate-900/95 backdrop-blur-sm text-white px-6 py-4 rounded-2xl text-sm font-medium border border-cyan-400/30 shadow-2xl shadow-cyan-400/20">
                            <div className="text-center">
                              <div className="font-bold text-lg text-cyan-200">${sector.value}B</div>
                              <div className="text-slate-300 text-xs mt-1">{sector.name}</div>
                            </div>
                            <div className="w-3 h-3 bg-slate-900 transform rotate-45 absolute -bottom-1.5 left-1/2 -translate-x-1/2 border-r border-b border-cyan-400/30"></div>
                          </div>
                          {/* Soft glow ring under cursor */}
                          <div className="absolute inset-0 rounded-2xl border-2 border-cyan-400/20 animate-ping"></div>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Enhanced animated sector label */}
                  <div className="mt-12 text-center transition-all duration-700 group-hover/bar:scale-110">
                    <div className={`text-sm font-medium transition-colors duration-500 ${
                      isBarFaded(index) ? 'text-slate-500' : 'text-slate-300 group-hover/bar:text-white'
                    }`}>
                      {sector.name}
                    </div>
                    <div className={`text-xs mt-2 transition-colors duration-500 ${
                      isBarFaded(index) ? 'text-slate-600' : 'text-slate-500 group-hover/bar:text-slate-300'
                    }`}>
                      ${sector.value}B
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced interactive legend with click functionality */}
        <div className="mt-24 p-16 bg-slate-900/10 rounded-3xl border border-slate-800/20 hover:border-slate-700/30 transition-all duration-1000">
          <h5 className="text-xl font-light text-cyan-100 text-center mb-12 tracking-wide">
            Sector Breakdown • Click to highlight
          </h5>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-12">
            {data.sectors.map((sector, index) => (
              <div
                key={sector.name}
                className="flex flex-col items-center space-y-6 cursor-pointer group transition-all duration-700 hover:scale-110 animate-fade-in-up p-6 rounded-2xl hover:bg-slate-800/20"
                style={{animationDelay: `${index * 0.15}s`}}
                onMouseEnter={() => setHoveredSector(index)}
                onMouseLeave={() => setHoveredSector(null)}
                onClick={() => handleLegendClick(index)}
              >
                <div className="relative">
                  <div
                    className="w-10 h-10 rounded-full transition-all duration-700 group-hover:scale-125 border-2 border-slate-600/20 group-hover:border-cyan-400/30"
                    style={{
                      background: `linear-gradient(135deg, #60F6FF60, #3CF2E680)`,
                      opacity: isBarFaded(index) ? 0.4 : (selectedSector === index ? 1 : 0.8),
                      boxShadow: (hoveredSector === index || selectedSector === index) ? 
                        `0 0 25px #60F6FF60, 0 0 50px #3CF2E630` : 
                        `0 0 12px #60F6FF30`,
                      transform: selectedSector === index ? 'scale(1.2)' : 'scale(1)'
                    }}
                  />
                  {(hoveredSector === index || selectedSector === index) && (
                    <>
                      <div className="absolute inset-0 rounded-full border-2 border-cyan-400/30 animate-ping"></div>
                      <div className="absolute inset-0 rounded-full border border-cyan-400/20 animate-ping" style={{animationDelay: '0.5s'}}></div>
                    </>
                  )}
                </div>
                <div className="text-center">
                  <div className={`text-sm font-medium transition-colors duration-500 ${
                    isBarFaded(index) ? 'text-slate-500' : 'text-slate-200 group-hover:text-white'
                  }`}>
                    {sector.name}
                  </div>
                  <div className={`text-xs mt-2 transition-colors duration-500 ${
                    isBarFaded(index) ? 'text-slate-600' : 'text-slate-400 group-hover:text-slate-300'
                  }`}>
                    ${sector.value}B ({Math.round((sector.value / data.value) * 100)}%)
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced interactive summary stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-10">
          {[
            { label: 'Total Investment', value: `$${data.value}B`, color: 'cyan', icon: '💰' },
            { label: 'Growth Rate', value: data.change, color: 'green', icon: '📈' },
            { label: 'Top Sector', value: data.sectors.reduce((max, sector) => sector.value > max.value ? sector : max).name, color: 'blue', icon: '🏆' },
            { label: 'Active Sectors', value: data.sectors.length, color: 'purple', icon: '🎯' }
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-8 rounded-3xl bg-slate-900/15 border border-slate-800/25 hover:border-slate-700/40 transition-all duration-700 hover:scale-105 cursor-pointer group animate-fade-in-up hover:shadow-lg hover:shadow-cyan-400/5"
              style={{animationDelay: `${index * 0.15 + 1.5}s`}}
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-500">
                {stat.icon}
              </div>
              <div className={`text-2xl font-bold mb-3 text-${stat.color}-300 group-hover:text-${stat.color}-200 transition-colors duration-500`}>
                {stat.value}
              </div>
              <div className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors duration-500 uppercase tracking-wider">
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