import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import ScrollReveal from './ScrollReveal';

const QuickLogSection = ({ cards }) => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleCardClick = (cardId) => {
    setSelectedCard(selectedCard === cardId ? null : cardId);
  };

  const getCategoryColor = (category) => {
    const colors = {
      corporate: 'bg-red-500/6 text-red-200/80 border-red-500/12',
      product: 'bg-blue-500/6 text-blue-200/80 border-blue-500/12',
      healthcare: 'bg-green-500/6 text-green-200/80 border-green-500/12',
      fact: 'bg-purple-500/6 text-purple-200/80 border-purple-500/12'
    };
    return colors[category] || 'bg-slate-500/6 text-slate-200/80 border-slate-500/12';
  };

  const getCosmicIcon = (category, index) => {
    const icons = {
      corporate: (
        <div className="relative group">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-500/10 to-red-600/10 flex items-center justify-center border border-red-500/20 group-hover:border-red-500/30 transition-all duration-700">
            <div className="text-3xl">🌪️</div>
          </div>
          {hoveredCard === index && (
            <>
              <div className="absolute inset-0 rounded-full border border-red-500/15 animate-ping"></div>
              <div className="absolute inset-0 rounded-full border border-red-500/10 animate-ping" style={{animationDelay: '0.5s'}}></div>
            </>
          )}
        </div>
      ),
      product: (
        <div className="relative group">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/10 to-blue-600/10 flex items-center justify-center border border-blue-500/20 group-hover:border-blue-500/30 transition-all duration-700">
            <div className="text-3xl">🤖</div>
          </div>
          {hoveredCard === index && (
            <>
              <div className="absolute inset-0 rounded-full border border-blue-500/15 animate-ping"></div>
              <div className="absolute inset-0 rounded-full border border-blue-500/10 animate-ping" style={{animationDelay: '0.5s'}}></div>
            </>
          )}
        </div>
      ),
      healthcare: (
        <div className="relative group">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500/10 to-green-600/10 flex items-center justify-center border border-green-500/20 group-hover:border-green-500/30 transition-all duration-700">
            <div className="text-3xl">⚕️</div>
          </div>
          {hoveredCard === index && (
            <>
              <div className="absolute inset-0 rounded-full border border-green-500/15 animate-ping"></div>
              <div className="absolute inset-0 rounded-full border border-green-500/10 animate-ping" style={{animationDelay: '0.5s'}}></div>
            </>
          )}
        </div>
      ),
      fact: (
        <div className="relative group">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/10 to-purple-600/10 flex items-center justify-center border border-purple-500/20 group-hover:border-purple-500/30 transition-all duration-700">
            <div className="text-3xl">💡</div>
          </div>
          {hoveredCard === index && (
            <>
              <div className="absolute inset-0 rounded-full border border-purple-500/15 animate-ping"></div>
              <div className="absolute inset-0 rounded-full border border-purple-500/10 animate-ping" style={{animationDelay: '0.5s'}}></div>
            </>
          )}
        </div>
      )
    };
    return icons[category] || icons.fact;
  };

  return (
    <section className="mb-96">
      <div className="text-center mb-56">
        <h2 className="text-5xl md:text-6xl font-light tracking-wider mb-16 animate-fade-in-up">
          <span className="bg-gradient-to-r from-cyan-100 via-white to-blue-100 bg-clip-text text-transparent">
            QUICK LOG
          </span>
        </h2>
        <div className="w-32 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent mx-auto animate-expand"></div>
      </div>
      
      {/* Mobile: Enhanced scrollable horizontal cards with more spacing */}
      <div className="md:hidden">
        <div className="flex space-x-16 overflow-x-auto pb-16 px-12 scrollbar-hide">
          {cards.map((card, index) => (
            <ScrollReveal key={card.id} delay={index * 150}>
              <div 
                className={`group flex-shrink-0 w-[420px] cursor-pointer transition-all duration-1000 hover:scale-105 ${
                  selectedCard === card.id ? 'scale-105' : ''
                }`}
                onClick={() => handleCardClick(card.id)}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="relative p-16 rounded-3xl bg-slate-950/8 hover:bg-slate-950/15 border border-slate-800/20 hover:border-cyan-400/12 transition-all duration-1000 hover:shadow-2xl hover:shadow-cyan-400/3 group-hover:transform group-hover:scale-102">
                  {/* Gentle glowing ripple effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-400/2 to-blue-400/2 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                  
                  {/* Soft pulsing outer ring on hover */}
                  {hoveredCard === index && (
                    <div className="absolute inset-0 rounded-3xl border border-cyan-400/10 animate-ping"></div>
                  )}
                  
                  <div className="relative flex items-start space-x-10">
                    <div className="transition-transform duration-700 group-hover:scale-110">
                      {getCosmicIcon(card.category, index)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <Badge className={`${getCategoryColor(card.category)} text-xs font-light mb-8 px-6 py-3 rounded-full group-hover:scale-105 transition-transform duration-500`}>
                        {card.category.toUpperCase()}
                      </Badge>
                      <h3 className="text-2xl font-medium text-cyan-100 mb-8 leading-tight group-hover:text-white transition-colors duration-700">
                        {card.title}
                      </h3>
                      <p className="text-slate-300 text-lg leading-relaxed font-light group-hover:text-slate-200 transition-colors duration-700">
                        {card.summary}
                      </p>
                      
                      {/* Lens opening effect indicator */}
                      <div className="mt-8 flex items-center space-x-3 text-cyan-400 opacity-0 group-hover:opacity-100 transition-all duration-700">
                        <div className="w-6 h-6 rounded-full border-2 border-cyan-400/50 flex items-center justify-center">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                        </div>
                        <span className="text-sm font-light">Click to expand with oracle lens</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Desktop: Enhanced grid layout with generous spacing */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-16">
        {cards.map((card, index) => (
          <ScrollReveal key={card.id} delay={index * 200}>
            <div 
              className={`group cursor-pointer transition-all duration-1000 hover:scale-105 ${
                selectedCard === card.id ? 'scale-105' : ''
              }`}
              onClick={() => handleCardClick(card.id)}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative h-full p-16 rounded-3xl bg-slate-950/8 hover:bg-slate-950/15 border border-slate-800/20 hover:border-cyan-400/12 transition-all duration-1000 hover:shadow-2xl hover:shadow-cyan-400/3 group-hover:transform group-hover:scale-102">
                {/* Gentle glowing ripple effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-400/2 to-blue-400/2 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                
                {/* Soft pulsing outer ring on hover */}
                {hoveredCard === index && (
                  <div className="absolute inset-0 rounded-3xl border border-cyan-400/10 animate-ping"></div>
                )}
                
                <div className="relative text-center h-full flex flex-col">
                  <div className="mb-10 flex justify-center transition-transform duration-700 group-hover:scale-110">
                    {getCosmicIcon(card.category, index)}
                  </div>
                  <Badge className={`${getCategoryColor(card.category)} mb-10 text-xs font-light px-6 py-3 rounded-full group-hover:scale-105 transition-transform duration-500 mx-auto`}>
                    {card.category.toUpperCase()}
                  </Badge>
                  <h3 className="text-2xl font-medium text-cyan-100 mb-8 leading-tight group-hover:text-white transition-colors duration-700 flex-grow">
                    {card.title}
                  </h3>
                  <p className="text-slate-300 text-lg leading-relaxed font-light group-hover:text-slate-200 transition-colors duration-700 mb-8">
                    {card.summary}
                  </p>
                  
                  {/* Lens opening effect indicator */}
                  <div className="flex items-center justify-center space-x-3 text-cyan-400 opacity-0 group-hover:opacity-100 transition-all duration-700">
                    <div className="w-6 h-6 rounded-full border-2 border-cyan-400/50 flex items-center justify-center">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                    </div>
                    <span className="text-sm font-light">Click to expand</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Enhanced interaction hint with more spacing */}
      <div className="text-center mt-24">
        <p className="text-slate-500 text-lg font-light animate-fade-in-up mb-8">
          Tap cards to reveal the oracle's deeper insights
        </p>
        <div className="flex justify-center space-x-3">
          <div className="w-3 h-3 bg-cyan-500/30 rounded-full animate-pulse"></div>
          <div className="w-3 h-3 bg-cyan-500/20 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="w-3 h-3 bg-cyan-500/15 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
      </div>
    </section>
  );
};

export default QuickLogSection;