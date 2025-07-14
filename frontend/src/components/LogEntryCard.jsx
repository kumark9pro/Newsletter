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
      corporate: 'bg-red-500/20 text-red-400 border-red-500/30',
      product: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      healthcare: 'bg-green-500/20 text-green-400 border-green-500/30'
    };
    return colors[category] || 'bg-slate-500/20 text-slate-400 border-slate-500/30';
  };

  return (
    <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden">
      <CardContent className="p-0">
        {/* Hero Image */}
        <div className="relative h-48 md:h-56 overflow-hidden">
          <img 
            src={entry.image} 
            alt={entry.headline}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent"></div>
          <div className="absolute bottom-4 left-4 right-4">
            <Badge className={getCategoryColor(entry.category)}>
              {entry.category}
            </Badge>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-4 text-cyan-400 leading-tight">
            {entry.headline}
          </h3>
          
          <p className="text-slate-300 mb-6 leading-relaxed">
            {entry.summary}
          </p>

          {/* Live Stat */}
          <div className="mb-6 p-4 bg-slate-900/50 rounded-lg border border-slate-700">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2 animate-pulse">
                {entry.stat.match(/\d+%?/)?.[0] || entry.stat.split(' ')[0]}
              </div>
              <div className="text-sm text-slate-400">
                {entry.stat}
              </div>
            </div>
          </div>

          {/* Interactive Element for Reachy Mini */}
          {entry.interactive && (
            <div className="mb-6">
              <Button
                onClick={handleInteractive}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 border-0 text-white font-medium"
              >
                {isExpanded ? 'Close the Box' : 'Open the Box'} 📦
              </Button>
              
              {isExpanded && (
                <div className="mt-4 p-4 bg-slate-900/50 rounded-lg border border-blue-500/30 animate-in slide-in-from-top duration-300">
                  <div className="text-center">
                    <div className="text-6xl mb-4 animate-bounce">🤖</div>
                    <div className="grid grid-cols-3 gap-4 text-4xl mb-4">
                      <div className="animate-pulse" style={{ animationDelay: '0s' }}>⚙️</div>
                      <div className="animate-pulse" style={{ animationDelay: '0.2s' }}>🔧</div>
                      <div className="animate-pulse" style={{ animationDelay: '0.4s' }}>🔩</div>
                    </div>
                    <p className="text-cyan-400 font-medium">Robot parts assembling...</p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Reveal Daiva's Lens Button */}
          <Button
            onClick={toggleLens}
            variant="outline"
            className={`w-full border-cyan-500 text-cyan-400 hover:bg-cyan-500/20 transition-all duration-300 ${
              isLensRevealed ? 'bg-cyan-500/20' : ''
            }`}
          >
            <span className="flex items-center justify-center space-x-2">
              <span>🔮</span>
              <span>{isLensRevealed ? "Hide Daiva's Lens" : "Reveal Daiva's Lens"}</span>
            </span>
          </Button>

          {/* Daiva's Lens Content */}
          {isLensRevealed && (
            <div className="mt-4 p-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg border border-cyan-500/30 backdrop-blur-sm animate-in slide-in-from-top duration-500">
              <div className="flex items-start space-x-3">
                <div className="text-2xl animate-pulse">👁️</div>
                <div>
                  <h4 className="text-lg font-semibold text-cyan-400 mb-2">Daiva's Lens</h4>
                  <p className="text-slate-300 leading-relaxed">
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