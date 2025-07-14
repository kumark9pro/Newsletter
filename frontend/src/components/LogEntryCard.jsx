import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const LogEntryCard = ({ entry }) => {
  const [isLensRevealed, setIsLensRevealed] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleLens = () => {
    setIsLensRevealed(!isLensRevealed);
  };

  const handleInteractive = () => {
    if (entry.interactive) {
      setIsExpanded(!isExpanded);
    }
  };

  const getCategoryColor = (category) => {
    const colors = {
      corporate: 'bg-red-500/20 text-red-300 border-red-500/30',
      product: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
      healthcare: 'bg-green-500/20 text-green-300 border-green-500/30'
    };
    return colors[category] || 'bg-gray-500/20 text-gray-300 border-gray-500/30';
  };

  return (
    <Card className="group bg-gray-900/50 border-gray-700/50 hover:border-cyan-500/30 transition-all duration-500 overflow-hidden backdrop-blur-sm hover:shadow-2xl hover:shadow-cyan-500/10">
      <CardContent className="p-0">
        {/* Hero Image */}
        <div className="relative h-64 md:h-72 overflow-hidden">
          <img 
            src={entry.image} 
            alt={entry.headline}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          
          {/* Enhanced gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent"></div>
          
          {/* Cosmic overlay effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="absolute bottom-6 left-6 right-6">
            <Badge className={`${getCategoryColor(entry.category)} text-xs font-medium px-3 py-1`}>
              {entry.category.toUpperCase()}
            </Badge>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <h3 className="text-3xl font-bold mb-6 text-cyan-300 leading-tight group-hover:text-cyan-200 transition-colors">
            {entry.headline}
          </h3>
          
          <p className="text-gray-300 mb-8 text-lg leading-relaxed">
            {entry.summary}
          </p>

          {/* Enhanced Live Stat */}
          <div className="mb-8 p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 backdrop-blur-sm">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-cyan-300 mb-3 animate-pulse">
                {entry.stat.match(/\d+%?/)?.[0] || entry.stat.split(' ')[0]}
              </div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">
                {entry.stat}
              </div>
              
              {/* Neon line effect */}
              <div className="mt-4 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
            </div>
          </div>

          {/* Interactive Element for Reachy Mini */}
          {entry.interactive && (
            <div className="mb-8">
              <Button
                onClick={handleInteractive}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 border-0 text-white font-semibold py-6 text-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
              >
                <span className="flex items-center justify-center space-x-3">
                  <span>{isExpanded ? 'Close the Box' : 'Open the Box'}</span>
                  <span className="text-2xl">📦</span>
                </span>
              </Button>
              
              {isExpanded && (
                <div className="mt-6 p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl border border-blue-500/30 backdrop-blur-sm animate-in slide-in-from-top duration-500">
                  <div className="text-center">
                    <div className="text-7xl mb-6 animate-bounce">🤖</div>
                    <div className="grid grid-cols-3 gap-6 text-5xl mb-6">
                      <div className="animate-pulse" style={{ animationDelay: '0s' }}>⚙️</div>
                      <div className="animate-pulse" style={{ animationDelay: '0.3s' }}>🔧</div>
                      <div className="animate-pulse" style={{ animationDelay: '0.6s' }}>🔩</div>
                    </div>
                    <p className="text-cyan-300 font-semibold text-lg">Robot parts assembling...</p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Enhanced Reveal Daiva's Lens Button */}
          <Button
            onClick={toggleLens}
            variant="outline"
            className={`w-full border-2 border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10 transition-all duration-300 py-6 text-lg font-semibold ${
              isLensRevealed ? 'bg-cyan-500/10 border-cyan-500 shadow-lg shadow-cyan-500/25' : 'hover:border-cyan-500'
            }`}
          >
            <span className="flex items-center justify-center space-x-3">
              <span className="text-2xl">🔮</span>
              <span>{isLensRevealed ? "Hide Daiva's Lens" : "Reveal Daiva's Lens"}</span>
            </span>
          </Button>

          {/* Enhanced Daiva's Lens Content */}
          {isLensRevealed && (
            <div className="mt-6 p-6 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl border border-cyan-500/30 backdrop-blur-sm animate-in slide-in-from-top duration-500">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30">
                  <div className="text-2xl animate-pulse">👁️</div>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-cyan-300 mb-3 tracking-wide">
                    DAIVA'S LENS
                  </h4>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {entry.daivaLens}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default LogEntryCard;