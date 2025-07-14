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
        <h2 className="text-3xl md:text-4xl font-light tracking-wider mb-8">
          <span className="bg-gradient-to-r from-cyan-200 to-blue-200 bg-clip-text text-transparent">
            QUICK LOG
          </span>
        </h2>
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent mx-auto"></div>
      </div>
      
      {/* Mobile: Scrollable horizontal cards */}
      <div className="md:hidden">
        <div className="flex space-x-8 overflow-x-auto pb-8 px-4 scrollbar-hide">
          {cards.map((card, index) => (
            <ScrollReveal key={card.id} delay={index * 100}>
              <div 
                className={`group flex-shrink-0 w-80 cursor-pointer transition-all duration-700 ${
                  selectedCard === card.id
                    ? 'transform scale-105'
                    : 'hover:transform hover:scale-102'
                }`}
                onClick={() => handleCardClick(card.id)}
              >
                <div className="p-8 rounded-2xl bg-slate-950/30 hover:bg-slate-950/50 border border-slate-800/50 hover:border-cyan-500/20 transition-all duration-700">
                  <div className="flex items-start space-x-6">
                    <div className="p-4 rounded-full bg-gradient-to-br from-cyan-500/10 to-blue-500/10">
                      <div className="text-xl">{card.icon}</div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <Badge className={`${getCategoryColor(card.category)} text-xs font-light mb-4 px-3 py-1 rounded-full`}>
                        {card.category.toUpperCase()}
                      </Badge>
                      <h3 className="text-lg font-medium text-cyan-200 mb-4 leading-tight">
                        {card.title}
                      </h3>
                      <p className="text-slate-300 text-sm leading-relaxed font-light">
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

      {/* Desktop: Grid layout */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {cards.map((card, index) => (
          <ScrollReveal key={card.id} delay={index * 100}>
            <div 
              className={`group cursor-pointer transition-all duration-700 ${
                selectedCard === card.id
                  ? 'transform scale-105'
                  : 'hover:transform hover:scale-102'
              }`}
              onClick={() => handleCardClick(card.id)}
            >
              <div className="p-8 rounded-2xl bg-slate-950/30 hover:bg-slate-950/50 border border-slate-800/50 hover:border-cyan-500/20 transition-all duration-700">
                <div className="text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 rounded-full bg-gradient-to-br from-cyan-500/10 to-blue-500/10">
                      <div className="text-xl">{card.icon}</div>
                    </div>
                  </div>
                  <Badge className={`${getCategoryColor(card.category)} mb-6 text-xs font-light px-3 py-1 rounded-full`}>
                    {card.category.toUpperCase()}
                  </Badge>
                  <h3 className="text-lg font-medium text-cyan-200 mb-4 leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed font-light">
                    {card.summary}
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Minimalist interaction hint */}
      <div className="text-center mt-16">
        <p className="text-slate-500 text-sm font-light">
          Tap cards to expand full Log Entry below
        </p>
      </div>
    </section>
  );
};

export default QuickLogSection;