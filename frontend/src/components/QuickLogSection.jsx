import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

const QuickLogSection = ({ cards }) => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (cardId) => {
    setSelectedCard(selectedCard === cardId ? null : cardId);
  };

  const getCategoryColor = (category) => {
    const colors = {
      corporate: 'bg-red-500/20 text-red-400 border-red-500/30',
      product: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      healthcare: 'bg-green-500/20 text-green-400 border-green-500/30',
      fact: 'bg-purple-500/20 text-purple-400 border-purple-500/30'
    };
    return colors[category] || 'bg-slate-500/20 text-slate-400 border-slate-500/30';
  };

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold text-center mb-8 tracking-wider">
        <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          QUICK LOG
        </span>
      </h2>
      
      {/* Mobile: Scrollable horizontal cards */}
      <div className="md:hidden">
        <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
          {cards.map((card) => (
            <Card 
              key={card.id}
              className={`flex-shrink-0 w-72 cursor-pointer transition-all duration-300 ${
                selectedCard === card.id
                  ? 'bg-slate-800/80 border-cyan-500 shadow-lg shadow-cyan-500/20'
                  : 'bg-slate-800/50 border-slate-700 hover:border-cyan-500/50'
              }`}
              onClick={() => handleCardClick(card.id)}
            >
              <CardContent className="p-4">
                <div className="flex items-start space-x-3">
                  <div className={`text-2xl p-2 rounded-full ${
                    selectedCard === card.id ? 'animate-pulse' : ''
                  }`}>
                    {card.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-2">
                      <Badge className={getCategoryColor(card.category)}>
                        {card.category}
                      </Badge>
                    </div>
                    <h3 className="text-lg font-semibold text-cyan-400 mb-2 leading-tight">
                      {card.title}
                    </h3>
                    <p className="text-slate-300 text-sm">
                      {card.summary}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Desktop: Grid layout */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card) => (
          <Card 
            key={card.id}
            className={`cursor-pointer transition-all duration-300 ${
              selectedCard === card.id
                ? 'bg-slate-800/80 border-cyan-500 shadow-lg shadow-cyan-500/20 scale-105'
                : 'bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 hover:scale-102'
            }`}
            onClick={() => handleCardClick(card.id)}
          >
            <CardContent className="p-4">
              <div className="text-center">
                <div className={`text-3xl mb-3 ${
                  selectedCard === card.id ? 'animate-pulse' : ''
                }`}>
                  {card.icon}
                </div>
                <Badge className={`${getCategoryColor(card.category)} mb-3`}>
                  {card.category}
                </Badge>
                <h3 className="text-lg font-semibold text-cyan-400 mb-2 leading-tight">
                  {card.title}
                </h3>
                <p className="text-slate-300 text-sm">
                  {card.summary}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Interaction hint */}
      <p className="text-center text-slate-500 text-sm mt-4">
        Tap cards to expand full Log Entry below
      </p>
    </section>
  );
};

export default QuickLogSection;