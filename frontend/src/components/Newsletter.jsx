import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from './ui/card';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import QuickLogSection from './QuickLogSection';
import LogEntryCard from './LogEntryCard';
import DidYouKnowSection from './DidYouKnowSection';
import LiveDataSection from './LiveDataSection';
import ScrollReveal from './ScrollReveal';
import CosmicLoader from './CosmicLoader';
import PremiumButton from './PremiumButton';
import { CosmicIcon } from './CosmicIcons';
import { mockData } from '../data/mockData';

const Newsletter = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentFactIndex, setCurrentFactIndex] = useState(0);
  const [feedback, setFeedback] = useState(null);
  const [consultQuestion, setConsultQuestion] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [constellationStars, setConstellationStars] = useState([]);

  // Generate perfect constellation background
  useEffect(() => {
    const stars = [];
    for (let i = 0; i < 120; i++) {
      stars.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 0.3,
        delay: Math.random() * 8,
        duration: 4 + Math.random() * 6,
        brightness: 0.2 + Math.random() * 0.6
      });
    }
    setConstellationStars(stars);
  }, []);

  // Rotate facts every 6 seconds for better reading
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFactIndex((prev) => (prev + 1) % mockData.didYouKnowFacts.length);
    }, 6000);
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

  return (
    <div className="min-h-screen relative text-white">
      {/* Loading State */}
      {isLoading && (
        <CosmicLoader onComplete={handleLoadingComplete} />
      )}

      {/* Enhanced Constellation Background (Already in CSS) */}
      <div className="absolute inset-0">
        {constellationStars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.brightness,
              animation: `twinkle ${star.duration}s ease-in-out infinite`,
              animationDelay: `${star.delay}s`
            }}
          />
        ))}
      </div>

      {/* Main Content with Enhanced Premium Spacing */}
      <main className={`relative z-10 transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        
        {/* 1. Legendary Oracle Opening */}
        <ScrollReveal>
          <header className="text-center space-cosmic-2xl">
            <div className="space-cosmic-xl">
              <div className="inline-block relative group">
                <div className="p-20 rounded-full bg-gradient-to-br from-cyan-400/6 to-blue-400/6 backdrop-blur-sm transition-all duration-1000 group-hover:from-cyan-400/10 group-hover:to-blue-400/10 floating-card">
                  <div className="text-9xl font-light bg-gradient-to-r from-cyan-100 via-white to-blue-100 bg-clip-text text-transparent tracking-widest cosmic-pulse">
                    DAIVA
                  </div>
                </div>
                
                {/* Perfected cosmic rings */}
                <div className="absolute inset-0 rounded-full border border-cyan-400/6 animate-ping" style={{ animationDuration: '5s' }}></div>
                <div className="absolute inset-0 rounded-full border border-blue-400/4 animate-ping" style={{ animationDelay: '1.5s', animationDuration: '5s' }}></div>
                <div className="absolute inset-0 rounded-full border border-cyan-400/3 animate-ping" style={{ animationDelay: '3s', animationDuration: '5s' }}></div>
              </div>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-light space-cosmic-lg tracking-wide leading-tight animate-fade-in-up">
              YOU HAVE REACHED{' '}
              <span className="bg-gradient-to-r from-cyan-100 via-white to-blue-100 bg-clip-text text-transparent">
                DAIVA
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-slate-300 space-cosmic-lg font-light animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              Where Insight Emerges
            </p>
            
            <div className="inline-block px-16 py-8 rounded-full bg-cyan-400/8 border border-cyan-400/15 hover:bg-cyan-400/12 transition-all duration-1000 animate-fade-in-up floating-card" style={{animationDelay: '0.8s'}}>
              <p className="text-base text-cyan-200 font-light tracking-wider uppercase">
                The Log for July 22, 2025, is now open
              </p>
            </div>
            
            {/* Perfect divider */}
            <div className="mt-20 w-64 h-px bg-gradient-to-r from-transparent via-cyan-400/25 to-transparent mx-auto animate-expand" style={{animationDelay: '1.2s'}} />
          </header>
        </ScrollReveal>

        {/* 2. Enhanced Quick Log Section with Premium Spacing */}
        <ScrollReveal delay={400}>
          <div className="space-cosmic-2xl">
            <QuickLogSection cards={mockData.quickLogCards} />
          </div>
        </ScrollReveal>

        {/* 3. Perfect Log Entries with Floating Cards */}
        <ScrollReveal delay={600}>
          <section className="space-cosmic-2xl">
            <div className="text-center space-cosmic-xl">
              <h2 className="text-5xl md:text-6xl font-light tracking-wider space-cosmic-lg animate-fade-in-up">
                <span className="bg-gradient-to-r from-cyan-100 via-white to-blue-100 bg-clip-text text-transparent">
                  LOG ENTRIES
                </span>
              </h2>
              <div className="w-32 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent mx-auto animate-expand"></div>
            </div>
            
            <div className="space-cosmic-xl">
              {mockData.logEntries.map((entry, index) => (
                <ScrollReveal key={entry.id} delay={index * 250}>
                  <div className="floating-card">
                    <LogEntryCard entry={entry} />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* 4. Enhanced Did You Know Section */}
        <ScrollReveal delay={800}>
          <div className="space-cosmic-2xl">
            <DidYouKnowSection 
              facts={mockData.didYouKnowFacts}
              currentIndex={currentFactIndex}
            />
          </div>
        </ScrollReveal>

        {/* 5. Legendary Applied Wisdom with Enhanced Cards */}
        <ScrollReveal delay={1000}>
          <section className="space-cosmic-2xl">
            <div className="text-center space-cosmic-xl">
              <h2 className="text-5xl md:text-6xl font-light tracking-wider space-cosmic-lg animate-fade-in-up">
                <span className="bg-gradient-to-r from-cyan-100 via-white to-blue-100 bg-clip-text text-transparent">
                  APPLIED WISDOM
                </span>
              </h2>
              <div className="w-32 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent mx-auto animate-expand"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 space-cosmic-md max-w-6xl mx-auto">
              {mockData.appliedWisdom.map((item, index) => (
                <ScrollReveal key={item.id} delay={index * 300}>
                  <div className="group card-cosmic-width mx-auto">
                    <div className="p-8 rounded-3xl bg-slate-950/10 hover:bg-slate-950/20 transition-all duration-1000 border border-slate-800/20 hover:border-cyan-400/15 floating-card h-full">
                      <div className="flex items-start space-x-6 h-full">
                        <div className="p-6 rounded-full bg-gradient-to-br from-cyan-400/8 to-blue-400/8 group-hover:from-cyan-400/12 group-hover:to-blue-400/12 transition-all duration-700 border border-cyan-400/15">
                          <CosmicIcon 
                            category={item.category} 
                            size={32}
                            className="group-hover:scale-110 transition-transform duration-500"
                            showGlow={true}
                          />
                        </div>
                        <div className="flex-1 flex flex-col h-full">
                          <h3 className="text-2xl font-medium mb-4 text-cyan-100 group-hover:text-white transition-colors duration-500 tracking-wide">{item.title}</h3>
                          <p className="text-slate-300 mb-6 text-lg leading-relaxed font-light group-hover:text-slate-200 transition-colors duration-500 flex-grow">{item.description}</p>
                          <PremiumButton 
                            variant="cosmic-glow"
                            size="sm"
                            className="self-start"
                          >
                            {item.buttonText}
                          </PremiumButton>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* 6. Perfect Live Data Section */}
        <ScrollReveal delay={1200}>
          <LiveDataSection data={mockData.liveData} />
        </ScrollReveal>

        {/* 7. Legendary Consult Daiva with cosmic particles */}
        <ScrollReveal delay={1400}>
          <section className="mb-96">
            <div className="text-center mb-56">
              <h2 className="text-5xl md:text-6xl font-light tracking-wider mb-16 animate-fade-in-up">
                <span className="bg-gradient-to-r from-cyan-100 via-white to-blue-100 bg-clip-text text-transparent">
                  CONSULT DAIVA
                </span>
              </h2>
              <div className="w-32 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent mx-auto animate-expand"></div>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="group relative p-24 rounded-3xl bg-slate-950/8 border border-slate-800/20 hover:border-cyan-400/12 hover:bg-slate-950/12 transition-all duration-1000 overflow-hidden">
                {/* Cosmic background particles on focus */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  {consultQuestion && [...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-float-up opacity-40"
                      style={{
                        left: `${10 + i * 10}%`,
                        bottom: '20%',
                        animationDelay: `${i * 0.5}s`,
                        animationDuration: '6s'
                      }}
                    />
                  ))}
                </div>

                <div className="relative space-y-20">
                  <div className="relative">
                    <Input
                      placeholder="What AI question or topic do you want Daiva to cover next?"
                      value={consultQuestion}
                      onChange={(e) => setConsultQuestion(e.target.value)}
                      className="bg-transparent border-2 border-slate-700/15 focus:border-cyan-400/25 text-slate-100 placeholder-slate-400 text-xl py-12 px-20 rounded-full font-light transition-all duration-1000 hover:border-cyan-400/15 focus:shadow-lg focus:shadow-cyan-400/10"
                    />
                    {/* Gentle glow on focus */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/1 to-blue-400/1 opacity-0 group-focus-within:opacity-100 transition-opacity duration-1000 pointer-events-none"></div>
                  </div>
                  
                  <PremiumButton 
                    variant="primary"
                    size="xl"
                    disabled={!consultQuestion.trim() || isSubmitted}
                    onClick={handleConsultSubmit}
                    className="w-full"
                  >
                    {isSubmitted ? '✨ Question Received' : '🔮 Submit to Oracle'}
                  </PremiumButton>
                  
                  {isSubmitted && (
                    <div className="text-center p-20 bg-gradient-to-r from-cyan-400/4 to-blue-400/4 rounded-3xl border border-cyan-400/8 animate-fade-in-up relative overflow-hidden">
                      {/* Soft particle drift in background */}
                      <div className="absolute inset-0 pointer-events-none">
                        {[...Array(6)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-float-up opacity-30"
                            style={{
                              left: `${15 + i * 12}%`,
                              bottom: '10%',
                              animationDelay: `${i * 0.3}s`,
                              animationDuration: '5s'
                            }}
                          />
                        ))}
                      </div>
                      <p className="relative text-cyan-200 font-light text-xl animate-pulse">
                        Your question has been received by Daiva...
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* 8. Perfect Feedback & Share */}
        <ScrollReveal delay={1600}>
          <section className="mb-96">
            <div className="group p-20 rounded-3xl bg-slate-950/15 border border-slate-800/20 hover:border-cyan-400/15 hover:bg-slate-950/20 transition-all duration-1000">
              <div className="flex flex-col md:flex-row items-center justify-between space-y-16 md:space-y-0">
                <div className="flex items-center space-x-16">
                  <span className="text-xl text-slate-300 font-light">Was today's Log useful?</span>
                  <div className="flex space-x-8">
                    <PremiumButton
                      variant={feedback === 'positive' ? 'feedback-positive' : 'feedback-positive'}
                      size="default"
                      onClick={() => handleFeedback('positive')}
                      className={feedback === 'positive' ? 'scale-110' : ''}
                    >
                      <span className="text-2xl mr-2">👍</span>
                      {feedback === 'positive' && <span className="animate-bounce text-lg">✨</span>}
                    </PremiumButton>
                    <PremiumButton
                      variant={feedback === 'negative' ? 'feedback-negative' : 'feedback-negative'}
                      size="default"
                      onClick={() => handleFeedback('negative')}
                      className={feedback === 'negative' ? 'scale-110' : ''}
                    >
                      <span className="text-2xl mr-2">👎</span>
                      {feedback === 'negative' && <span className="animate-bounce text-lg">✨</span>}
                    </PremiumButton>
                  </div>
                </div>
                
                <PremiumButton
                  variant="outline"
                  size="lg"
                  onClick={() => {/* Mock share action */}}
                >
                  <span className="mr-3">✨</span>
                  Share Daiva
                </PremiumButton>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* 9. Sacred Footer */}
        <ScrollReveal delay={1800}>
          <footer className="text-center space-y-32">
            <div className="py-32">
              <div className="mb-20">
                <div className="inline-block p-16 rounded-full bg-gradient-to-br from-cyan-400/6 to-blue-400/6 mb-16 hover:from-cyan-400/10 hover:to-blue-400/10 transition-all duration-1000">
                  <div className="text-4xl animate-pulse">🌟</div>
                </div>
              </div>
              
              <p className="text-3xl text-cyan-200 font-light mb-16 animate-fade-in-up tracking-wide">
                This concludes today's Log.
              </p>
              <p className="text-xl text-slate-400 mb-20 font-light animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                You may consult Daiva again tomorrow.
              </p>
              
              <div className="space-y-12">
                <div className="w-48 h-px bg-gradient-to-r from-transparent via-slate-700/30 to-transparent mx-auto animate-expand"></div>
                <div className="text-sm text-slate-500 font-light space-y-4 animate-fade-in-up tracking-wider uppercase" style={{animationDelay: '0.8s'}}>
                  <p>All entries independently verified (Truth Protocol)</p>
                  <p>Sources available on request</p>
                </div>
              </div>
            </div>
          </footer>
        </ScrollReveal>
      </main>
    </div>
  );
};

export default Newsletter;