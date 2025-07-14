import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import PremiumButton from './PremiumButton';
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
      corporate: 'bg-red-500/8 text-red-200/80 border-red-500/15',
      product: 'bg-blue-500/8 text-blue-200/80 border-blue-500/15',
      healthcare: 'bg-green-500/8 text-green-200/80 border-green-500/15'
    };
    return colors[category] || 'bg-slate-500/8 text-slate-200/80 border-slate-500/15';
  };

  return (
    <div className="group transition-all duration-1000 hover:transform hover:scale-101">
      <div className="rounded-3xl bg-slate-950/12 border border-slate-800/25 hover:border-cyan-400/15 transition-all duration-1000 overflow-hidden hover:shadow-2xl hover:shadow-cyan-400/5">
        {/* Perfect Hero Image */}
        <div className="relative h-96 overflow-hidden">
          <img 
            src={entry.image} 
            alt={entry.headline}
            className="w-full h-full object-cover transition-transform duration-1500 group-hover:scale-105"
          />
          
          {/* Ethereal gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
          
          <div className="absolute bottom-10 left-10 right-10">
            <Badge className={`${getCategoryColor(entry.category)} text-xs font-light px-6 py-3 rounded-full backdrop-blur-sm`}>
              {entry.category.toUpperCase()}
            </Badge>
          </div>
        </div>

        {/* Perfect Content Spacing */}
        <div className="p-16">
          <h3 className="text-3xl font-light mb-12 text-cyan-100 leading-tight group-hover:text-white transition-colors duration-700">
            {entry.headline}
          </h3>
          
          <p className="text-slate-300 mb-16 text-xl leading-relaxed font-light group-hover:text-slate-200 transition-colors duration-700">
            {entry.summary}
          </p>

          {/* Perfect Live Stat */}
          <div className="mb-16 p-12 rounded-3xl bg-slate-900/20 border border-slate-800/20 hover:border-slate-700/30 transition-all duration-700">
            <div className="text-center">
              <div className="text-4xl font-light text-cyan-200 mb-6 group-hover:text-cyan-100 transition-colors duration-500">
                {entry.stat.match(/\d+%?/)?.[0] || entry.stat.split(' ')[0]}
              </div>
              <div className="text-sm text-slate-400 uppercase tracking-wider font-light">
                {entry.stat}
              </div>
              <div className="mt-6 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"></div>
            </div>
          </div>

          {/* Interactive Element for Reachy Mini */}
          {entry.interactive && (
            <div className="mb-16">
              <PremiumButton
                variant="secondary"
                size="lg"
                onClick={handleInteractive}
                className="w-full"
              >
                <span className="flex items-center justify-center space-x-4">
                  <span>{isExpanded ? 'Close the Box' : 'Open the Box'}</span>
                  <span className="text-2xl">📦</span>
                </span>
              </PremiumButton>
              
              {isExpanded && (
                <div className="mt-12 p-12 bg-gradient-to-br from-blue-500/6 to-purple-500/6 rounded-3xl border border-blue-500/10 animate-in slide-in-from-top duration-1000">
                  <div className="text-center space-y-12">
                    <div className="text-6xl animate-bounce">🤖</div>
                    <div className="grid grid-cols-3 gap-12 text-4xl">
                      <div className="animate-pulse" style={{ animationDelay: '0s' }}>⚙️</div>
                      <div className="animate-pulse" style={{ animationDelay: '0.4s' }}>🔧</div>
                      <div className="animate-pulse" style={{ animationDelay: '0.8s' }}>🔩</div>
                    </div>
                    <p className="text-cyan-200 font-light text-lg">Robot parts assembling...</p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Perfect Reveal Daiva's Lens Button */}
          <PremiumButton
            variant="outline"
            size="lg"
            onClick={toggleLens}
            className={`w-full ${isLensRevealed ? 'scale-105' : ''}`}
          >
            <span className="flex items-center justify-center space-x-4">
              <span className="text-2xl">🔮</span>
              <span>{isLensRevealed ? "Hide Daiva's Lens" : "Reveal Daiva's Lens"}</span>
            </span>
          </PremiumButton>

          {/* Perfect Daiva's Lens Content */}
          {isLensRevealed && (
            <div className="mt-12 p-12 bg-gradient-to-br from-cyan-400/6 to-blue-400/6 rounded-3xl border border-cyan-400/10 backdrop-blur-sm animate-in slide-in-from-top duration-1000">
              <div className="flex items-start space-x-8">
                <div className="p-6 rounded-full bg-gradient-to-br from-cyan-400/10 to-blue-400/10 border border-cyan-400/15">
                  <div className="text-3xl">👁️</div>
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-medium text-cyan-100 mb-6 tracking-wide">
                    DAIVA'S LENS
                  </h4>
                  <p className="text-slate-200 leading-relaxed font-light text-lg">
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