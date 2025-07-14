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
      corporate: 'bg-red-500/8 text-red-200/80 border-red-500/15',
      product: 'bg-blue-500/8 text-blue-200/80 border-blue-500/15',
      healthcare: 'bg-green-500/8 text-green-200/80 border-green-500/15',
      fact: 'bg-purple-500/8 text-purple-200/80 border-purple-500/15'
    };
    return colors[category] || 'bg-slate-500/8 text-slate-200/80 border-slate-500/15';
  };

  const getCosmicIcon = (category, index) => {
    const icons = {
      corporate: (
        <div className="relative group">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500/15 to-red-600/15 flex items-center justify-center border border-red-500/25 group-hover:border-red-500/40 transition-all duration-500">
            <div className="text-2xl">🌪️</div>
          </div>
          {hoveredCard === index && (
            <>
              <div className="absolute inset-0 rounded-full border border-red-500/20 animate-ping"></div>
              <div className="absolute inset-0 rounded-full border border-red-500/15 animate-ping" style={{animationDelay: '0.5s'}}></div>
            </>
          )}
        </div>
      ),
      product: (
        <div className="relative group">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/15 to-blue-600/15 flex items-center justify-center border border-blue-500/25 group-hover:border-blue-500/40 transition-all duration-500">
            <div className="text-2xl">🤖</div>
          </div>
          {hoveredCard === index && (
            <>
              <div className="absolute inset-0 rounded-full border border-blue-500/20 animate-ping"></div>
              <div className="absolute inset-0 rounded-full border border-blue-500/15 animate-ping" style={{animationDelay: '0.5s'}}></div>
            </>
          )}
        </div>
      ),
      healthcare: (
        <div className="relative group">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500/15 to-green-600/15 flex items-center justify-center border border-green-500/25 group-hover:border-green-500/40 transition-all duration-500">
            <div className="text-2xl">⚕️</div>
          </div>
          {hoveredCard === index && (
            <>
              <div className="absolute inset-0 rounded-full border border-green-500/20 animate-ping"></div>
              <div className="absolute inset-0 rounded-full border border-green-500/15 animate-ping" style={{animationDelay: '0.5s'}}></div>
            </>
          )}
        </div>
      ),
      fact: (
        <div className="relative group">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/15 to-purple-600/15 flex items-center justify-center border border-purple-500/25 group-hover:border-purple-500/40 transition-all duration-500">
            <div className="text-2xl">💡</div>
          </div>
          {hoveredCard === index && (
            <>
              <div className="absolute inset-0 rounded-full border border-purple-500/20 animate-ping"></div>
              <div className="absolute inset-0 rounded-full border border-purple-500/15 animate-ping" style={{animationDelay: '0.5s'}}></div>
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
      
      {/* Mobile: Enhanced scrollable horizontal cards */}
      <div className="md:hidden">
        <div className="flex space-x-12 overflow-x-auto pb-12 px-8 scrollbar-hide">
          {cards.map((card, index) => (
            <ScrollReveal key={card.id} delay={index * 100}>
              <div 
                className={`group flex-shrink-0 w-96 cursor-pointer transition-all duration-1000 hover:scale-105 ${
                  selectedCard === card.id ? 'scale-105' : ''
                }`}
                onClick={() => handleCardClick(card.id)}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="relative p-12 rounded-3xl bg-slate-950/12 hover:bg-slate-950/20 border border-slate-800/25 hover:border-cyan-400/15 transition-all duration-1000 hover:shadow-2xl hover:shadow-cyan-400/5">
                  {/* Enhanced cosmic glow effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-400/2 to-blue-400/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  <div className="relative flex items-start space-x-8">
                    <div className="transition-transform duration-500 group-hover:scale-110">
                      {getCosmicIcon(card.category, index)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <Badge className={`${getCategoryColor(card.category)} text-xs font-light mb-6 px-4 py-2 rounded-full group-hover:scale-105 transition-transform duration-300`}>
                        {card.category.toUpperCase()}
                      </Badge>
                      <h3 className="text-xl font-medium text-cyan-100 mb-6 leading-tight group-hover:text-white transition-colors duration-500">
                        {card.title}
                      </h3>
                      <p className="text-slate-300 text-base leading-relaxed font-light group-hover:text-slate-200 transition-colors duration-500">
                        {card.summary}
                      </p>
                      
                      {/* Interactive expand indicator */}
                      <div className="mt-6 flex items-center space-x-2 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <span className="text-sm font-light">Click to expand</span>
                        <span className="text-lg animate-pulse">→</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Desktop: Enhanced grid layout */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-12">
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
              <div className="relative h-full p-12 rounded-3xl bg-slate-950/12 hover:bg-slate-950/20 border border-slate-800/25 hover:border-cyan-400/15 transition-all duration-1000 hover:shadow-2xl hover:shadow-cyan-400/5">
                {/* Enhanced cosmic glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-400/2 to-blue-400/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div className="relative text-center h-full flex flex-col">
                  <div className="mb-8 flex justify-center transition-transform duration-500 group-hover:scale-110">
                    {getCosmicIcon(card.category, index)}
                  </div>
                  <Badge className={`${getCategoryColor(card.category)} mb-8 text-xs font-light px-4 py-2 rounded-full group-hover:scale-105 transition-transform duration-300 mx-auto`}>
                    {card.category.toUpperCase()}
                  </Badge>
                  <h3 className="text-xl font-medium text-cyan-100 mb-6 leading-tight group-hover:text-white transition-colors duration-500 flex-grow">
                    {card.title}
                  </h3>
                  <p className="text-slate-300 text-base leading-relaxed font-light group-hover:text-slate-200 transition-colors duration-500 mb-6">
                    {card.summary}
                  </p>
                  
                  {/* Interactive expand indicator */}
                  <div className="flex items-center justify-center space-x-2 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-sm font-light">Click to expand</span>
                    <span className="text-lg animate-pulse">→</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Enhanced interaction hint */}
      <div className="text-center mt-20">
        <p className="text-slate-500 text-base font-light animate-fade-in-up mb-6">
          Tap cards to expand full Log Entry below
        </p>
        <div className="flex justify-center space-x-2">
          <div className="w-2 h-2 bg-cyan-500/40 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-cyan-500/30 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="w-2 h-2 bg-cyan-500/20 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
      </div>
    </section>
  );
};

export default QuickLogSection;