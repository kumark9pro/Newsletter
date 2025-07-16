import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import ScrollReveal from './ScrollReveal';
import { CosmicIcon } from './CosmicIcons';

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

  const getCosmicIconContainer = (category, index) => {
    const colorMap = {
      corporate: 'from-red-500/12 to-red-600/12 border-red-500/25 hover:border-red-500/40',
      product: 'from-blue-500/12 to-blue-600/12 border-blue-500/25 hover:border-blue-500/40',
      healthcare: 'from-green-500/12 to-green-600/12 border-green-500/25 hover:border-green-500/40',
      fact: 'from-purple-500/12 to-purple-600/12 border-purple-500/25 hover:border-purple-500/40'
    };
    
    const colors = colorMap[category] || 'from-cyan-500/12 to-blue-500/12 border-cyan-500/25 hover:border-cyan-500/40';

    return (
      <div className="relative group">
        <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${colors} flex items-center justify-center border transition-all duration-700 backdrop-blur-sm`}>
          <CosmicIcon 
            category={category} 
            size={32}
            className="transition-all duration-500 group-hover:scale-110"
            showGlow={hoveredCard === index}
          />
        </div>
        {hoveredCard === index && (
          <>
            <div className="absolute inset-0 rounded-full border border-cyan-400/20 animate-ping"></div>
            <div className="absolute inset-0 rounded-full border border-cyan-400/15 animate-ping" style={{animationDelay: '0.5s'}}></div>
          </>
        )}
      </div>
    );
  };

  return (
    <section className="space-cosmic-2xl">
      <div className="text-center space-cosmic-xl">
        <h2 className="text-5xl md:text-6xl font-light tracking-wider space-cosmic-lg animate-fade-in-up">
          <span className="bg-gradient-to-r from-cyan-100 via-white to-blue-100 bg-clip-text text-transparent">
            QUICK LOG
          </span>
        </h2>
        <div className="w-32 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent mx-auto animate-expand"></div>
      </div>

      {/* Mobile: Enhanced vertical layout with improved cards */}
      <div className="md:hidden space-y-8">
        {cards.map((card, index) => (
          <ScrollReveal key={card.id} delay={index * 150}>
            <div 
              className={`group cursor-pointer transition-all duration-1000 hover:scale-105 ${
                selectedCard === card.id ? 'scale-105' : ''
              }`}
              onClick={() => handleCardClick(card.id)}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="card-cosmic-width mx-auto">
                <div className="relative p-8 rounded-3xl bg-slate-950/8 hover:bg-slate-950/15 border border-slate-800/20 hover:border-cyan-400/12 transition-all duration-1000 hover:shadow-2xl hover:shadow-cyan-400/3 floating-card">
                  {/* Enhanced glowing ripple effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-400/2 to-blue-400/2 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                  
                  {/* Soft pulsing outer ring on hover */}
                  {hoveredCard === index && (
                    <div className="absolute inset-0 rounded-3xl border border-cyan-400/10 animate-ping"></div>
                  )}
                  
                  <div className="relative flex items-start space-x-6">
                    <div className="transition-transform duration-700 group-hover:scale-110">
                      {getCosmicIconContainer(card.category, index)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <Badge className={`${getCategoryColor(card.category)} text-xs font-light mb-4 px-4 py-2 rounded-full group-hover:scale-105 transition-transform duration-500`}>
                        {card.category.toUpperCase()}
                      </Badge>
                      <h3 className="text-xl font-medium text-cyan-100 mb-4 leading-tight group-hover:text-white transition-colors duration-700">
                        {card.title}
                      </h3>
                      <p className="text-slate-300 text-base leading-relaxed font-light group-hover:text-slate-200 transition-colors duration-700">
                        {card.summary}
                      </p>
                      
                      {/* Lens opening effect indicator */}
                      <div className="mt-4 flex items-center space-x-3 text-cyan-400 opacity-0 group-hover:opacity-100 transition-all duration-700">
                        <div className="w-5 h-5 rounded-full border-2 border-cyan-400/50 flex items-center justify-center">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></div>
                        </div>
                        <span className="text-xs font-light">Tap to expand with oracle lens</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Desktop: Enhanced grid layout with cosmic card widths */}
      <div className="hidden md:flex md:justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 max-w-7xl">
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
                <div className="card-cosmic-width mx-auto">
                  <div className="relative h-full p-8 rounded-3xl bg-slate-950/8 hover:bg-slate-950/15 border border-slate-800/20 hover:border-cyan-400/12 transition-all duration-1000 hover:shadow-2xl hover:shadow-cyan-400/3 floating-card">
                    {/* Enhanced glowing ripple effect */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-400/2 to-blue-400/2 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                    
                    {/* Soft pulsing outer ring on hover */}
                    {hoveredCard === index && (
                      <div className="absolute inset-0 rounded-3xl border border-cyan-400/10 animate-ping"></div>
                    )}
                    
                    <div className="relative text-center h-full flex flex-col">
                      <div className="mb-6 flex justify-center transition-transform duration-700 group-hover:scale-110">
                        {getCosmicIconContainer(card.category, index)}
                      </div>
                      <Badge className={`${getCategoryColor(card.category)} mb-6 text-xs font-light px-4 py-2 rounded-full group-hover:scale-105 transition-transform duration-500 mx-auto`}>
                        {card.category.toUpperCase()}
                      </Badge>
                      <h3 className="text-xl font-medium text-cyan-100 mb-4 leading-tight group-hover:text-white transition-colors duration-700 flex-grow">
                        {card.title}
                      </h3>
                      <p className="text-slate-300 text-base leading-relaxed font-light group-hover:text-slate-200 transition-colors duration-700 mb-6">
                        {card.summary}
                      </p>
                      
                      {/* Lens opening effect indicator */}
                      <div className="flex items-center justify-center space-x-3 text-cyan-400 opacity-0 group-hover:opacity-100 transition-all duration-700">
                        <div className="w-5 h-5 rounded-full border-2 border-cyan-400/50 flex items-center justify-center">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></div>
                        </div>
                        <span className="text-xs font-light">Click to expand</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Enhanced interaction hint */}
      <div className="text-center space-cosmic-lg">
        <p className="text-slate-500 text-lg font-light animate-fade-in-up mb-6">
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