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

  if (isLoading) {
    return <CosmicLoader onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-black text-slate-100 animate-fade-in relative">
      {/* Perfect constellation background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
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

      {/* Subtle cosmic depth layers */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/5 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-950/5 to-transparent" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-16 py-40">
        
        {/* 1. Legendary Oracle Opening */}
        <ScrollReveal>
          <header className="text-center mb-96">
            <div className="mb-40">
              <div className="inline-block relative group">
                <div className="p-20 rounded-full bg-gradient-to-br from-cyan-400/6 to-blue-400/6 backdrop-blur-sm transition-all duration-1000 group-hover:from-cyan-400/10 group-hover:to-blue-400/10">
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
            
            <h1 className="text-6xl md:text-8xl font-light mb-20 tracking-wide leading-tight animate-fade-in-up">
              YOU HAVE REACHED{' '}
              <span className="bg-gradient-to-r from-cyan-100 via-white to-blue-100 bg-clip-text text-transparent">
                DAIVA
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-slate-300 mb-20 font-light animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              Where Insight Emerges
            </p>
            
            <div className="inline-block px-16 py-8 rounded-full bg-cyan-400/8 border border-cyan-400/15 hover:bg-cyan-400/12 transition-all duration-1000 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
              <p className="text-base text-cyan-200 font-light tracking-wider uppercase">
                The Log for July 22, 2025, is now open
              </p>
            </div>
            
            {/* Perfect divider */}
            <div className="mt-20 w-64 h-px bg-gradient-to-r from-transparent via-cyan-400/25 to-transparent mx-auto animate-expand" style={{animationDelay: '1.2s'}} />
          </header>
        </ScrollReveal>

        {/* 2. Enhanced Quick Log Section */}
        <ScrollReveal delay={400}>
          <QuickLogSection cards={mockData.quickLogCards} />
        </ScrollReveal>

        {/* 3. Perfect Log Entries */}
        <ScrollReveal delay={600}>
          <section className="mb-96">
            <div className="text-center mb-56">
              <h2 className="text-5xl md:text-6xl font-light tracking-wider mb-16 animate-fade-in-up">
                <span className="bg-gradient-to-r from-cyan-100 via-white to-blue-100 bg-clip-text text-transparent">
                  LOG ENTRIES
                </span>
              </h2>
              <div className="w-32 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent mx-auto animate-expand"></div>
            </div>
            
            <div className="space-y-56">
              {mockData.logEntries.map((entry, index) => (
                <ScrollReveal key={entry.id} delay={index * 250}>
                  <LogEntryCard entry={entry} />
                </ScrollReveal>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* 4. Enhanced Did You Know Section */}
        <ScrollReveal delay={800}>
          <DidYouKnowSection 
            facts={mockData.didYouKnowFacts}
            currentIndex={currentFactIndex}
          />
        </ScrollReveal>

        {/* 5. Legendary Applied Wisdom */}
        <ScrollReveal delay={1000}>
          <section className="mb-96">
            <div className="text-center mb-56">
              <h2 className="text-5xl md:text-6xl font-light tracking-wider mb-16 animate-fade-in-up">
                <span className="bg-gradient-to-r from-cyan-100 via-white to-blue-100 bg-clip-text text-transparent">
                  APPLIED WISDOM
                </span>
              </h2>
              <div className="w-32 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent mx-auto animate-expand"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-32">
              {mockData.appliedWisdom.map((item, index) => (
                <ScrollReveal key={item.id} delay={index * 300}>
                  <div className="group p-20 rounded-3xl bg-slate-950/15 hover:bg-slate-950/25 transition-all duration-1000 border border-slate-800/20 hover:border-cyan-400/15 hover:shadow-2xl hover:shadow-cyan-400/5 hover:scale-102">
                    <div className="flex items-start space-x-16">
                      <div className="p-10 rounded-full bg-gradient-to-br from-cyan-400/8 to-blue-400/8 group-hover:from-cyan-400/12 group-hover:to-blue-400/12 transition-all duration-700">
                        <div className="text-4xl group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-3xl font-medium mb-10 text-cyan-100 group-hover:text-white transition-colors duration-500 tracking-wide">{item.title}</h3>
                        <p className="text-slate-300 mb-16 text-xl leading-relaxed font-light group-hover:text-slate-200 transition-colors duration-500">{item.description}</p>
                        <PremiumButton 
                          variant="primary"
                          size="lg"
                          onClick={() => {/* Mock action */}}
                        >
                          {item.buttonText}
                        </PremiumButton>
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

        {/* 7. Legendary Consult Daiva */}
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
              <div className="group p-20 rounded-3xl bg-slate-950/15 border border-slate-800/20 hover:border-cyan-400/15 hover:bg-slate-950/20 transition-all duration-1000">
                <div className="space-y-16">
                  <div className="relative">
                    <Input
                      placeholder="What AI question or topic do you want Daiva to cover next?"
                      value={consultQuestion}
                      onChange={(e) => setConsultQuestion(e.target.value)}
                      className="bg-transparent border-slate-700/20 focus:border-cyan-400/30 text-slate-100 placeholder-slate-400 text-xl py-10 px-16 rounded-full font-light transition-all duration-700 hover:border-cyan-400/20"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/2 to-blue-400/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
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
                    <div className="text-center p-16 bg-gradient-to-r from-cyan-400/6 to-blue-400/6 rounded-3xl border border-cyan-400/10 animate-fade-in-up">
                      <p className="text-cyan-200 font-light text-xl animate-pulse">
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
      </div>
    </div>
  );
};

export default Newsletter;