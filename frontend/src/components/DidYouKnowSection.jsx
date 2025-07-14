import React from 'react';
import { Card, CardContent } from './ui/card';

const DidYouKnowSection = ({ facts, currentIndex }) => {
  const currentFact = facts[currentIndex];

  return (
    <section className="mb-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black tracking-wider mb-4">
          <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
            DID YOU KNOW?
          </span>
        </h2>
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto"></div>
      </div>
      
      <div className="max-w-3xl mx-auto">
        <Card className="bg-gray-900/50 border-gray-700/50 hover:border-cyan-500/30 transition-all duration-500 overflow-hidden backdrop-blur-sm hover:shadow-2xl hover:shadow-cyan-500/10">
          <CardContent className="p-10">
            <div className="text-center">
              {/* Enhanced cosmic icon */}
              <div className="relative mb-8">
                <div className="inline-block p-6 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30">
                  <div className="text-7xl animate-bounce">
                    {currentFact.icon}
                  </div>
                </div>
                
                {/* Cosmic rings */}
                <div className="absolute inset-0 rounded-full border border-cyan-500/20 animate-ping"></div>
                <div className="absolute inset-0 rounded-full border border-blue-500/20 animate-ping" style={{animationDelay: '0.5s'}}></div>
              </div>
              
              {/* Enhanced number display */}
              <div className="relative mb-6">
                <div className="text-6xl md:text-7xl font-black text-cyan-300 mb-2 animate-pulse">
                  {currentFact.number}
                </div>
                <div className="w-32 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto"></div>
              </div>
              
              {/* Enhanced fact text */}
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
                {currentFact.fact}
              </p>
            </div>
          </CardContent>
        </Card>
        
        {/* Enhanced fact indicators */}
        <div className="flex justify-center mt-8 space-x-3">
          {facts.map((_, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ${
                index === currentIndex 
                  ? 'w-8 h-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full shadow-lg shadow-cyan-500/50' 
                  : 'w-3 h-3 bg-gray-600 rounded-full hover:bg-gray-500'
              }`}
            />
          ))}
        </div>
        
        {/* Rotation indicator */}
        <div className="text-center mt-6">
          <p className="text-gray-500 text-sm">
            Facts rotate every 4 seconds
          </p>
          <div className="flex justify-center space-x-1 mt-2">
            <div className="w-1 h-1 bg-cyan-500/50 rounded-full animate-pulse"></div>
            <div className="w-1 h-1 bg-cyan-500/30 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="w-1 h-1 bg-cyan-500/20 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DidYouKnowSection;