import React from 'react';
import { Card, CardContent } from './ui/card';
import { CosmicIcon } from './CosmicIcons';

const DidYouKnowSection = ({ facts, currentIndex }) => {
  const currentFact = facts[currentIndex];

  return (
    <section className="space-cosmic-2xl">
      <div className="text-center space-cosmic-xl">
        <h2 className="text-3xl md:text-4xl font-light tracking-wider space-cosmic-lg">
          <span className="bg-gradient-to-r from-cyan-200 to-blue-200 bg-clip-text text-transparent">
            DID YOU KNOW?
          </span>
        </h2>
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent mx-auto"></div>
      </div>
      
      <div className="max-w-2xl mx-auto">
        <div className="card-cosmic-width mx-auto">
          <div className="p-12 rounded-3xl bg-slate-950/20 border border-slate-800/40 hover:border-cyan-500/20 transition-all duration-700 floating-card">
            <div className="text-center space-y-8">
              {/* Enhanced cosmic icon with proper category */}
              <div className="inline-block p-6 rounded-full bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20">
                <CosmicIcon 
                  category="fact" 
                  size={40}
                  className="text-cyan-300"
                  showGlow={true}
                />
              </div>
              
              {/* Clean number display */}
              <div className="space-y-4">
                <div className="text-4xl md:text-5xl font-light text-cyan-200">
                  {currentFact.number}
                </div>
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent mx-auto"></div>
              </div>
              
              {/* Clean fact text with better spacing */}
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-light px-4">
                {currentFact.fact}
              </p>
            </div>
          </div>
        </div>
        
        {/* Enhanced fact indicators */}
        <div className="flex justify-center mt-8 space-x-3">
          {facts.map((_, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ${
                index === currentIndex 
                  ? 'w-8 h-2 bg-gradient-to-r from-cyan-500/80 to-blue-500/80 rounded-full' 
                  : 'w-2 h-2 bg-slate-600/40 rounded-full hover:bg-slate-500/60'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DidYouKnowSection;