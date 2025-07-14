import React from 'react';
import { Card, CardContent } from './ui/card';

const DidYouKnowSection = ({ facts, currentIndex }) => {
  const currentFact = facts[currentIndex];

  return (
    <section className="mb-48">
      <div className="text-center mb-32">
        <h2 className="text-3xl md:text-4xl font-light tracking-wider mb-8">
          <span className="bg-gradient-to-r from-cyan-200 to-blue-200 bg-clip-text text-transparent">
            DID YOU KNOW?
          </span>
        </h2>
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent mx-auto"></div>
      </div>
      
      <div className="max-w-2xl mx-auto">
        <div className="p-16 rounded-3xl bg-slate-950/30 border border-slate-800/50 hover:border-cyan-500/20 transition-all duration-700">
          <div className="text-center space-y-12">
            {/* Minimal cosmic icon */}
            <div className="inline-block p-8 rounded-full bg-gradient-to-br from-cyan-500/10 to-blue-500/10">
              <div className="text-4xl">
                {currentFact.icon}
              </div>
            </div>
            
            {/* Clean number display */}
            <div className="space-y-4">
              <div className="text-4xl md:text-5xl font-light text-cyan-200">
                {currentFact.number}
              </div>
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent mx-auto"></div>
            </div>
            
            {/* Clean fact text */}
            <p className="text-lg text-slate-300 leading-relaxed font-light">
              {currentFact.fact}
            </p>
          </div>
        </div>
        
        {/* Minimal fact indicators */}
        <div className="flex justify-center mt-12 space-x-3">
          {facts.map((_, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ${
                index === currentIndex 
                  ? 'w-6 h-2 bg-gradient-to-r from-cyan-500/80 to-blue-500/80 rounded-full' 
                  : 'w-2 h-2 bg-slate-600/50 rounded-full'
              }`}
            />
          ))}
        </div>
        
        {/* Minimal rotation indicator */}
        <div className="text-center mt-8">
          <p className="text-slate-500 text-xs font-light">
            Facts rotate every 4 seconds
          </p>
        </div>
      </div>
    </section>
  );
};

export default DidYouKnowSection;