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
    <section className="mb-12">
      <h2 className="text-3xl font-bold text-center mb-8 tracking-wider">
        <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          LIVE DATA
        </span>
      </h2>
      
      <Card className="bg-slate-800/50 border-slate-700">
        <CardContent className="p-6">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-cyan-400 mb-2">
              {data.title}
            </h3>
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">
              ${animatedValue}
              <span className="text-2xl text-slate-400 ml-2">{data.unit}</span>
            </div>
            <div className="text-lg text-green-400 font-medium">
              {data.change} vs last year
            </div>
          </div>

          {/* Animated Bar Chart */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-cyan-400 text-center mb-6">
              Investment by Sector
            </h4>
            <div className="grid grid-cols-5 gap-4 items-end h-48">
              {data.sectors.map((sector, index) => (
                <div
                  key={sector.name}
                  className="flex flex-col items-center cursor-pointer transition-all duration-300 hover:scale-105"
                  onMouseEnter={() => setHoveredSector(index)}
                  onMouseLeave={() => setHoveredSector(null)}
                >
                  <div className="w-full flex flex-col items-center">
                    <div
                      className="w-12 md:w-16 transition-all duration-1000 ease-out rounded-t-lg relative"
                      style={{
                        height: `${getBarHeight(sector.value)}%`,
                        backgroundColor: sector.color,
                        boxShadow: hoveredSector === index ? `0 0 20px ${sector.color}50` : 'none'
                      }}
                    >
                      {hoveredSector === index && (
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white px-2 py-1 rounded text-sm whitespace-nowrap">
                          ${sector.value}B
                        </div>
                      )}
                    </div>
                    <div className="text-xs text-slate-400 mt-2 text-center">
                      {sector.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {data.sectors.map((sector, index) => (
              <div
                key={sector.name}
                className="flex items-center space-x-2 cursor-pointer"
                onMouseEnter={() => setHoveredSector(index)}
                onMouseLeave={() => setHoveredSector(null)}
              >
                <div
                  className="w-4 h-4 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: sector.color,
                    boxShadow: hoveredSector === index ? `0 0 10px ${sector.color}` : 'none'
                  }}
                />
                <span className="text-sm text-slate-300">{sector.name}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default LiveDataSection;