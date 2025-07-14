import React from 'react';
import { Card, CardContent } from './ui/card';

const DidYouKnowSection = ({ facts, currentIndex }) => {
  const currentFact = facts[currentIndex];

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold text-center mb-8 tracking-wider">
        <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          DID YOU KNOW?
        </span>
      </h2>
      
      <div className="max-w-2xl mx-auto">
        <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="text-6xl mb-6 animate-bounce">
                {currentFact.icon}
              </div>
              <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-4 animate-pulse">
                {currentFact.number}
              </div>
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
                {currentFact.fact}
              </p>
            </div>
          </CardContent>
        </Card>
        
        {/* Fact indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {facts.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-cyan-500 shadow-lg shadow-cyan-500/50' 
                  : 'bg-slate-600'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DidYouKnowSection;