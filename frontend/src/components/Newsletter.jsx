import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import QuickLogSection from './QuickLogSection';
import LogEntryCard from './LogEntryCard';
import DidYouKnowSection from './DidYouKnowSection';
import LiveDataSection from './LiveDataSection';
import ScrollReveal from './ScrollReveal';
import CosmicLoader from './CosmicLoader';
import { mockData } from '../data/mockData';

const Newsletter = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentFactIndex, setCurrentFactIndex] = useState(0);
  const [feedback, setFeedback] = useState(null);
  const [consultQuestion, setConsultQuestion] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [constellationStars, setConstellationStars] = useState([]);

  // Generate constellation background
  useEffect(() => {
    const stars = [];
    for (let i = 0; i < 80; i++) {
      stars.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 1.5 + 0.5,
        delay: Math.random() * 5,
        duration: 3 + Math.random() * 4
      });
    }
    setConstellationStars(stars);
  }, []);

  // Rotate facts every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFactIndex((prev) => (prev + 1) % mockData.didYouKnowFacts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const handleFeedback = (type) => {
    setFeedback(type);
    setTimeout(() => setFeedback(null), 3000);
  };

  const handleConsultSubmit = () => {
    if (consultQuestion.trim()) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setConsultQuestion('');
      }, 4000);
    }
  };

  if (isLoading) {
    return <CosmicLoader onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-black text-slate-100 animate-fade-in">
      {/* Subtle constellation background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {constellationStars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white opacity-40"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animation: `twinkle ${star.duration}s ease-in-out infinite`,
              animationDelay: `${star.delay}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-12 py-32">
        
        {/* 1. Premium Oracle Opening */}
        <ScrollReveal>
          <header className="text-center mb-80">
            <div className="mb-32">
              <div className="inline-block relative group">
                <div className="p-16 rounded-full bg-gradient-to-br from-cyan-400/8 to-blue-400/8 backdrop-blur-sm transition-all duration-1000 group-hover:from-cyan-400/12 group-hover:to-blue-400/12">
                  <div className="text-8xl font-light bg-gradient-to-r from-cyan-200 via-white to-blue-200 bg-clip-text text-transparent tracking-widest cosmic-pulse">
                    DAIVA
                  </div>
                </div>
                
                {/* Elegant cosmic rings */}
                <div className="absolute inset-0 rounded-full border border-cyan-400/8 animate-ping" style={{ animationDuration: '4s' }}></div>
                <div className="absolute inset-0 rounded-full border border-blue-400/6 animate-ping" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
                <div className="absolute inset-0 rounded-full border border-cyan-400/4 animate-ping" style={{ animationDelay: '2s', animationDuration: '4s' }}></div>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-light mb-16 tracking-wide leading-tight animate-fade-in-up">
              YOU HAVE REACHED{' '}
              <span className="bg-gradient-to-r from-cyan-200 via-white to-blue-200 bg-clip-text text-transparent">
                DAIVA
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-16 font-light animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              Where Insight Emerges
            </p>
            
            <div className="inline-block px-12 py-6 rounded-full bg-cyan-400/5 border border-cyan-400/10 hover:bg-cyan-400/8 transition-all duration-700 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <p className="text-sm text-cyan-300 font-light tracking-wide uppercase">
                The Log for July 22, 2025, is now open
              </p>
            </div>
            
            {/* Elegant divider */}
            <div className="mt-16 w-48 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent mx-auto animate-expand" style={{animationDelay: '0.9s'}} />
          </header>
        </ScrollReveal>

        {/* 2. Premium Quick Log Section */}
        <ScrollReveal delay={300}>
          <QuickLogSection cards={mockData.quickLogCards} />
        </ScrollReveal>

        {/* 3. Premium Log Entries */}
        <ScrollReveal delay={500}>
          <section className="mb-80">
            <div className="text-center mb-48">
              <h2 className="text-4xl md:text-5xl font-light tracking-wider mb-12 animate-fade-in-up">
                <span className="bg-gradient-to-r from-cyan-200 via-white to-blue-200 bg-clip-text text-transparent">
                  LOG ENTRIES
                </span>
              </h2>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent mx-auto animate-expand"></div>
            </div>
            
            <div className="space-y-48">
              {mockData.logEntries.map((entry, index) => (
                <ScrollReveal key={entry.id} delay={index * 200}>
                  <LogEntryCard entry={entry} />
                </ScrollReveal>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* 4. Premium Did You Know Section */}
        <ScrollReveal delay={700}>
          <DidYouKnowSection 
            facts={mockData.didYouKnowFacts}
            currentIndex={currentFactIndex}
          />
        </ScrollReveal>

        {/* 5. Premium Applied Wisdom */}
        <ScrollReveal delay={900}>
          <section className="mb-80">
            <div className="text-center mb-48">
              <h2 className="text-4xl md:text-5xl font-light tracking-wider mb-12 animate-fade-in-up">
                <span className="bg-gradient-to-r from-cyan-200 via-white to-blue-200 bg-clip-text text-transparent">
                  APPLIED WISDOM
                </span>
              </h2>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent mx-auto animate-expand"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-24">
              {mockData.appliedWisdom.map((item, index) => (
                <ScrollReveal key={item.id} delay={index * 250}>
                  <div className="group p-16 rounded-3xl bg-slate-950/20 hover:bg-slate-950/30 transition-all duration-1000 border border-slate-800/30 hover:border-cyan-400/20 hover:shadow-2xl hover:shadow-cyan-400/5 hover:scale-102">
                    <div className="flex items-start space-x-12">
                      <div className="p-8 rounded-full bg-gradient-to-br from-cyan-400/10 to-blue-400/10 group-hover:from-cyan-400/15 group-hover:to-blue-400/15 transition-all duration-700">
                        <div className="text-3xl group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-medium mb-8 text-cyan-200 group-hover:text-cyan-100 transition-colors duration-500 tracking-wide">{item.title}</h3>
                        <p className="text-slate-300 mb-12 text-lg leading-relaxed font-light group-hover:text-slate-200 transition-colors duration-500">{item.description}</p>
                        <Button 
                          className="bg-gradient-to-r from-cyan-600/60 to-blue-600/60 hover:from-cyan-500/70 hover:to-blue-500/70 border-0 text-white font-light px-12 py-8 rounded-full transition-all duration-700 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/20 uppercase tracking-wide text-sm"
                          onClick={() => {/* Mock action */}}
                        >
                          {item.buttonText}
                        </Button>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* 6. Premium Live Data Section */}
        <ScrollReveal delay={1100}>
          <LiveDataSection data={mockData.liveData} />
        </ScrollReveal>

        {/* 7. Premium Consult Daiva */}
        <ScrollReveal delay={1300}>
          <section className="mb-80">
            <div className="text-center mb-48">
              <h2 className="text-4xl md:text-5xl font-light tracking-wider mb-12 animate-fade-in-up">
                <span className="bg-gradient-to-r from-cyan-200 via-white to-blue-200 bg-clip-text text-transparent">
                  CONSULT DAIVA
                </span>
              </h2>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent mx-auto animate-expand"></div>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <div className="group p-16 rounded-3xl bg-slate-950/20 border border-slate-800/30 hover:border-cyan-400/20 hover:bg-slate-950/25 transition-all duration-1000">
                <div className="space-y-12">
                  <div className="relative">
                    <Input
                      placeholder="What AI question or topic do you want Daiva to cover next?"
                      value={consultQuestion}
                      onChange={(e) => setConsultQuestion(e.target.value)}
                      className="bg-transparent border-slate-700/30 focus:border-cyan-400/40 text-slate-100 placeholder-slate-400 text-lg py-8 px-12 rounded-full font-light transition-all duration-700 hover:border-cyan-400/20"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/3 to-blue-400/3 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                  </div>
                  
                  <Button 
                    onClick={handleConsultSubmit}
                    disabled={!consultQuestion.trim() || isSubmitted}
                    className="w-full bg-gradient-to-r from-cyan-600/60 to-blue-600/60 hover:from-cyan-500/70 hover:to-blue-500/70 border-0 text-white font-light py-8 rounded-full disabled:opacity-40 transition-all duration-700 hover:scale-102 hover:shadow-lg hover:shadow-cyan-400/20 uppercase tracking-wide text-sm"
                  >
                    {isSubmitted ? '✨ Question Received' : '🔮 Submit to Oracle'}
                  </Button>
                  
                  {isSubmitted && (
                    <div className="text-center p-12 bg-gradient-to-r from-cyan-400/8 to-blue-400/8 rounded-3xl border border-cyan-400/15 animate-fade-in-up">
                      <p className="text-cyan-300 font-light text-lg animate-pulse">
                        Your question has been received by Daiva...
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* 8. Premium Feedback & Share */}
        <ScrollReveal delay={1500}>
          <section className="mb-80">
            <div className="group p-16 rounded-3xl bg-slate-950/20 border border-slate-800/30 hover:border-cyan-400/20 hover:bg-slate-950/25 transition-all duration-1000">
              <div className="flex flex-col md:flex-row items-center justify-between space-y-12 md:space-y-0">
                <div className="flex items-center space-x-12">
                  <span className="text-lg text-slate-300 font-light">Was today's Log useful?</span>
                  <div className="flex space-x-6">
                    <Button
                      variant="outline"
                      onClick={() => handleFeedback('positive')}
                      className={`border-slate-700/30 text-slate-300 hover:bg-green-400/10 hover:border-green-400/30 transition-all duration-700 px-8 py-4 rounded-full font-light hover:scale-110 ${
                        feedback === 'positive' ? 'bg-green-400/10 border-green-400/30 scale-110' : ''
                      }`}
                    >
                      <span className="text-2xl transition-transform duration-500">👍</span>
                      {feedback === 'positive' && <span className="ml-3 animate-bounce text-lg">✨</span>}
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => handleFeedback('negative')}
                      className={`border-slate-700/30 text-slate-300 hover:bg-red-400/10 hover:border-red-400/30 transition-all duration-700 px-8 py-4 rounded-full font-light hover:scale-110 ${
                        feedback === 'negative' ? 'bg-red-400/10 border-red-400/30 scale-110' : ''
                      }`}
                    >
                      <span className="text-2xl transition-transform duration-500">👎</span>
                      {feedback === 'negative' && <span className="ml-3 animate-bounce text-lg">✨</span>}
                    </Button>
                  </div>
                </div>
                
                <Button
                  variant="outline"
                  className="border-cyan-400/30 text-cyan-300 hover:bg-cyan-400/10 px-12 py-4 rounded-full font-light transition-all duration-700 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/20 uppercase tracking-wide text-sm"
                  onClick={() => {/* Mock share action */}}
                >
                  <span className="mr-3 transition-transform duration-500">✨</span>
                  Share Daiva
                </Button>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* 9. Premium Sacred Footer */}
        <ScrollReveal delay={1700}>
          <footer className="text-center space-y-24">
            <div className="py-24">
              <div className="mb-16">
                <div className="inline-block p-12 rounded-full bg-gradient-to-br from-cyan-400/8 to-blue-400/8 mb-12 hover:from-cyan-400/12 hover:to-blue-400/12 transition-all duration-700">
                  <div className="text-3xl animate-pulse">🌟</div>
                </div>
              </div>
              
              <p className="text-2xl text-cyan-300 font-light mb-12 animate-fade-in-up tracking-wide">
                This concludes today's Log.
              </p>
              <p className="text-lg text-slate-400 mb-16 font-light animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                You may consult Daiva again tomorrow.
              </p>
              
              <div className="space-y-8">
                <div className="w-32 h-px bg-gradient-to-r from-transparent via-slate-700/40 to-transparent mx-auto animate-expand"></div>
                <div className="text-xs text-slate-500 font-light space-y-3 animate-fade-in-up tracking-wide uppercase" style={{animationDelay: '0.6s'}}>
                  <p>All entries independently verified (Truth Protocol)</p>
                  <p>Sources available on request</p>
                </div>
              </div>
            </div>
          </footer>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Newsletter;