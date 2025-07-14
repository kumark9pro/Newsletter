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
      corporate: 'bg-red-500/20 text-red-300 border-red-500/30',
      product: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
      healthcare: 'bg-green-500/20 text-green-300 border-green-500/30',
      fact: 'bg-purple-500/20 text-purple-300 border-purple-500/30'
    };
    return colors[category] || 'bg-gray-500/20 text-gray-300 border-gray-500/30';
  };

  const getCosmicIcon = (category) => {
    const icons = {
      corporate: (
        <div className="relative">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-500/30 to-red-600/30 flex items-center justify-center border border-red-500/40">
            <div className="text-lg">🌪️</div>
          </div>
          <div className="absolute inset-0 rounded-full bg-red-500/20 animate-ping"></div>
        </div>
      ),
      product: (
        <div className="relative">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500/30 to-blue-600/30 flex items-center justify-center border border-blue-500/40">
            <div className="text-lg">🤖</div>
          </div>
          <div className="absolute inset-0 rounded-full bg-blue-500/20 animate-ping"></div>
        </div>
      ),
      healthcare: (
        <div className="relative">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500/30 to-green-600/30 flex items-center justify-center border border-green-500/40">
            <div className="text-lg">⚕️</div>
          </div>
          <div className="absolute inset-0 rounded-full bg-green-500/20 animate-ping"></div>
        </div>
      ),
      fact: (
        <div className="relative">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500/30 to-purple-600/30 flex items-center justify-center border border-purple-500/40">
            <div className="text-lg">💡</div>
          </div>
          <div className="absolute inset-0 rounded-full bg-purple-500/20 animate-ping"></div>
        </div>
      )
    };
    return icons[category] || icons.fact;
  };

  return (
    <section className="mb-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black tracking-wider mb-4">
          <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
            QUICK LOG
          </span>
        </h2>
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto"></div>
      </div>
      
      {/* Mobile: Scrollable horizontal cards */}
      <div className="md:hidden">
        <div className="flex space-x-6 overflow-x-auto pb-6 px-2 scrollbar-hide">
          {cards.map((card, index) => (
            <ScrollReveal key={card.id} delay={index * 100}>
              <Card 
                className={`group flex-shrink-0 w-80 cursor-pointer transition-all duration-500 ${
                  selectedCard === card.id
                    ? 'bg-gray-900/80 border-cyan-500/50 shadow-2xl shadow-cyan-500/20 scale-105'
                    : 'bg-gray-900/50 border-gray-700/50 hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/10'
                } backdrop-blur-sm`}
                onClick={() => handleCardClick(card.id)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`${selectedCard === card.id ? 'animate-pulse' : ''}`}>
                      {getCosmicIcon(card.category)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-3">
                        <Badge className={`${getCategoryColor(card.category)} text-xs font-medium`}>
                          {card.category.toUpperCase()}
                        </Badge>
                      </div>
                      <h3 className="text-xl font-bold text-cyan-300 mb-3 leading-tight group-hover:text-cyan-200 transition-colors">
                        {card.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {card.summary}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Desktop: Grid layout */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <ScrollReveal key={card.id} delay={index * 100}>
            <Card 
              className={`group cursor-pointer transition-all duration-500 ${
                selectedCard === card.id
                  ? 'bg-gray-900/80 border-cyan-500/50 shadow-2xl shadow-cyan-500/20 scale-105'
                  : 'bg-gray-900/50 border-gray-700/50 hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/10 hover:scale-102'
              } backdrop-blur-sm`}
              onClick={() => handleCardClick(card.id)}
            >
              <CardContent className="p-6">
                <div className="text-center">
                  <div className={`mb-4 flex justify-center ${
                    selectedCard === card.id ? 'animate-pulse' : ''
                  }`}>
                    {getCosmicIcon(card.category)}
                  </div>
                  <Badge className={`${getCategoryColor(card.category)} mb-4 text-xs font-medium`}>
                    {card.category.toUpperCase()}
                  </Badge>
                  <h3 className="text-xl font-bold text-cyan-300 mb-3 leading-tight group-hover:text-cyan-200 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {card.summary}
                  </p>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        ))}
      </div>

      {/* Interaction hint */}
      <div className="text-center mt-8">
        <p className="text-gray-500 text-sm mb-2">
          Tap cards to expand full Log Entry below
        </p>
        <div className="flex justify-center space-x-2">
          <div className="w-2 h-2 bg-cyan-500/50 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-cyan-500/30 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="w-2 h-2 bg-cyan-500/20 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
      </div>
    </section>
  );
};

export default QuickLogSection;