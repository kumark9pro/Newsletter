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
      corporate: 'bg-red-500/10 text-red-300/80 border-red-500/20',
      product: 'bg-blue-500/10 text-blue-300/80 border-blue-500/20',
      healthcare: 'bg-green-500/10 text-green-300/80 border-green-500/20'
    };
    return colors[category] || 'bg-slate-500/10 text-slate-300/80 border-slate-500/20';
  };

  return (
    <div className="group transition-all duration-700 hover:transform hover:scale-101">
      <div className="rounded-3xl bg-slate-950/30 border border-slate-800/50 hover:border-cyan-500/20 transition-all duration-700 overflow-hidden">
        {/* Minimalist Hero Image */}
        <div className="relative h-80 overflow-hidden">
          <img 
            src={entry.image} 
            alt={entry.headline}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
          
          <div className="absolute bottom-8 left-8 right-8">
            <Badge className={`${getCategoryColor(entry.category)} text-xs font-light px-4 py-2 rounded-full`}>
              {entry.category.toUpperCase()}
            </Badge>
          </div>
        </div>

        {/* Spacious Content */}
        <div className="p-12">
          <h3 className="text-2xl font-light mb-8 text-cyan-200 leading-tight">
            {entry.headline}
          </h3>
          
          <p className="text-slate-300 mb-12 text-base leading-relaxed font-light">
            {entry.summary}
          </p>

          {/* Minimal Live Stat */}
          <div className="mb-12 p-8 rounded-2xl bg-slate-900/30 border border-slate-800/30">
            <div className="text-center">
              <div className="text-3xl font-light text-cyan-300 mb-4">
                {entry.stat.match(/\d+%?/)?.[0] || entry.stat.split(' ')[0]}
              </div>
              <div className="text-xs text-slate-400 uppercase tracking-wide font-light">
                {entry.stat}
              </div>
            </div>
          </div>

          {/* Interactive Element for Reachy Mini */}
          {entry.interactive && (
            <div className="mb-12">
              <Button
                onClick={handleInteractive}
                className="w-full bg-gradient-to-r from-blue-600/60 to-purple-600/60 hover:from-blue-500/60 hover:to-purple-500/60 border-0 text-white font-light py-6 rounded-full transition-all duration-700"
              >
                <span className="flex items-center justify-center space-x-4">
                  <span>{isExpanded ? 'Close the Box' : 'Open the Box'}</span>
                  <span className="text-xl">📦</span>
                </span>
              </Button>
              
              {isExpanded && (
                <div className="mt-8 p-8 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl border border-blue-500/10 animate-in slide-in-from-top duration-700">
                  <div className="text-center space-y-8">
                    <div className="text-5xl animate-bounce">🤖</div>
                    <div className="grid grid-cols-3 gap-8 text-3xl">
                      <div className="animate-pulse" style={{ animationDelay: '0s' }}>⚙️</div>
                      <div className="animate-pulse" style={{ animationDelay: '0.3s' }}>🔧</div>
                      <div className="animate-pulse" style={{ animationDelay: '0.6s' }}>🔩</div>
                    </div>
                    <p className="text-cyan-300 font-light">Robot parts assembling...</p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Minimal Reveal Daiva's Lens Button */}
          <Button
            onClick={toggleLens}
            variant="outline"
            className={`w-full border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/5 transition-all duration-700 py-6 rounded-full font-light ${
              isLensRevealed ? 'bg-cyan-500/5 border-cyan-500/50' : ''
            }`}
          >
            <span className="flex items-center justify-center space-x-4">
              <span className="text-xl">🔮</span>
              <span>{isLensRevealed ? "Hide Daiva's Lens" : "Reveal Daiva's Lens"}</span>
            </span>
          </Button>

          {/* Minimal Daiva's Lens Content */}
          {isLensRevealed && (
            <div className="mt-8 p-8 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-2xl border border-cyan-500/10 animate-in slide-in-from-top duration-700">
              <div className="flex items-start space-x-6">
                <div className="p-4 rounded-full bg-gradient-to-br from-cyan-500/10 to-blue-500/10">
                  <div className="text-xl">👁️</div>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-medium text-cyan-200 mb-4 tracking-wide">
                    DAIVA'S LENS
                  </h4>
                  <p className="text-slate-300 leading-relaxed font-light">
                    {entry.daivaLens}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LogEntryCard;