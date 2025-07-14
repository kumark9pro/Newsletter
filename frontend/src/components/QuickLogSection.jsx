import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import ScrollReveal from './ScrollReveal';

const QuickLogSection = ({ cards }) => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (cardId) => {
    setSelectedCard(selectedCard === cardId ? null : cardId);
  };

  const getCategoryColor = (category) => {
    const colors = {
      corporate: 'bg-red-500/10 text-red-300/80 border-red-500/20',
      product: 'bg-blue-500/10 text-blue-300/80 border-blue-500/20',
      healthcare: 'bg-green-500/10 text-green-300/80 border-green-500/20',
      fact: 'bg-purple-500/10 text-purple-300/80 border-purple-500/20'
    };
    return colors[category] || 'bg-slate-500/10 text-slate-300/80 border-slate-500/20';
  };

  return (
    <section className="mb-48">
      <div className="text-center mb-32">
        <h2 className="text-3xl md:text-4xl font-light tracking-wider mb-8 animate-fade-in-up">
          <span className="bg-gradient-to-r from-cyan-200 to-blue-200 bg-clip-text text-transparent">
            QUICK LOG
          </span>
        </h2>
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent mx-auto animate-expand"></div>
      </div>
      
      {/* Mobile: Enhanced scrollable horizontal cards */}
      <div className="md:hidden">
        <div className="flex space-x-8 overflow-x-auto pb-8 px-4 scrollbar-hide">
          {cards.map((card, index) => (
            <ScrollReveal key={card.id} delay={index * 100}>
              <div 
                className={`group flex-shrink-0 w-80 cursor-pointer transition-all duration-700 hover:scale-105 ${
                  selectedCard === card.id ? 'scale-105' : ''
                }`}
                onClick={() => handleCardClick(card.id)}
              >
                <div className="relative p-8 rounded-2xl bg-slate-950/30 hover:bg-slate-950/50 border border-slate-800/50 hover:border-cyan-500/20 transition-all duration-700 hover:shadow-2xl hover:shadow-cyan-500/10">
                  {/* Cosmic glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative flex items-start space-x-6">
                    <div className="p-4 rounded-full bg-gradient-to-br from-cyan-500/10 to-blue-500/10 group-hover:from-cyan-500/20 group-hover:to-blue-500/20 transition-all duration-500">
                      <div className="text-xl group-hover:scale-110 transition-transform duration-300">{card.icon}</div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <Badge className={`${getCategoryColor(card.category)} text-xs font-light mb-4 px-3 py-1 rounded-full group-hover:scale-105 transition-transform duration-300`}>
                        {card.category.toUpperCase()}
                      </Badge>
                      <h3 className="text-lg font-medium text-cyan-200 mb-4 leading-tight group-hover:text-cyan-100 transition-colors duration-300">
                        {card.title}
                      </h3>
                      <p className="text-slate-300 text-sm leading-relaxed font-light group-hover:text-slate-200 transition-colors duration-300">
                        {card.summary}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Desktop: Enhanced grid layout */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {cards.map((card, index) => (
          <ScrollReveal key={card.id} delay={index * 100}>
            <div 
              className={`group cursor-pointer transition-all duration-700 hover:scale-105 ${
                selectedCard === card.id ? 'scale-105' : ''
              }`}
              onClick={() => handleCardClick(card.id)}
            >
              <div className="relative p-8 rounded-2xl bg-slate-950/30 hover:bg-slate-950/50 border border-slate-800/50 hover:border-cyan-500/20 transition-all duration-700 hover:shadow-2xl hover:shadow-cyan-500/10">
                {/* Cosmic glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 rounded-full bg-gradient-to-br from-cyan-500/10 to-blue-500/10 group-hover:from-cyan-500/20 group-hover:to-blue-500/20 transition-all duration-500">
                      <div className="text-xl group-hover:scale-110 transition-transform duration-300">{card.icon}</div>
                    </div>
                  </div>
                  <Badge className={`${getCategoryColor(card.category)} mb-6 text-xs font-light px-3 py-1 rounded-full group-hover:scale-105 transition-transform duration-300`}>
                    {card.category.toUpperCase()}
                  </Badge>
                  <h3 className="text-lg font-medium text-cyan-200 mb-4 leading-tight group-hover:text-cyan-100 transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed font-light group-hover:text-slate-200 transition-colors duration-300">
                    {card.summary}
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Enhanced interaction hint */}
      <div className="text-center mt-16">
        <p className="text-slate-500 text-sm font-light animate-fade-in-up">
          Tap cards to expand full Log Entry below
        </p>
        <div className="flex justify-center mt-4 space-x-1">
          <div className="w-1 h-1 bg-cyan-500/50 rounded-full animate-pulse"></div>
          <div className="w-1 h-1 bg-cyan-500/30 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="w-1 h-1 bg-cyan-500/20 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
      </div>
    </section>
  );
};

export default QuickLogSection;