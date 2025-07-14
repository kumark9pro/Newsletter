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
import { mockData } from '../data/mockData';

const Newsletter = () => {
  const [currentFactIndex, setCurrentFactIndex] = useState(0);
  const [feedback, setFeedback] = useState(null);
  const [consultQuestion, setConsultQuestion] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Rotate facts every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFactIndex((prev) => (prev + 1) % mockData.didYouKnowFacts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleFeedback = (type) => {
    setFeedback(type);
    setTimeout(() => setFeedback(null), 2000);
  };

  const handleConsultSubmit = () => {
    if (consultQuestion.trim()) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setConsultQuestion('');
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-gray-950 text-slate-100">
      {/* Minimal Cosmic Background */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(white_0.5px,transparent_0.5px)] bg-[size:80px_80px] opacity-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#60f6ff05,transparent_80%)]"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-8 py-24">
        
        {/* 1. Minimalist Ritualistic Opening */}
        <ScrollReveal>
          <header className="text-center mb-48">
            <div className="mb-20">
              <div className="inline-block relative">
                <div className="p-12 rounded-full bg-gradient-to-br from-cyan-500/5 to-blue-500/5 backdrop-blur-sm">
                  <div className="text-6xl font-light bg-gradient-to-r from-cyan-200 to-blue-200 bg-clip-text text-transparent tracking-widest">
                    DAIVA
                  </div>
                </div>
                
                {/* Subtle cosmic ring */}
                <div className="absolute inset-0 rounded-full border border-cyan-500/10 animate-pulse"></div>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-light mb-12 tracking-wide leading-tight">
              YOU HAVE REACHED{' '}
              <span className="bg-gradient-to-r from-cyan-200 to-blue-200 bg-clip-text text-transparent">
                DAIVA
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 mb-12 font-light">
              Where Insight Emerges
            </p>
            
            <div className="inline-block px-8 py-4 rounded-full bg-cyan-500/5 border border-cyan-500/10">
              <p className="text-sm text-cyan-300 font-light">
                The Log for July 22, 2025, is now open.
              </p>
            </div>
          </header>
        </ScrollReveal>

        {/* 2. Quick Log Section */}
        <ScrollReveal delay={200}>
          <QuickLogSection cards={mockData.quickLogCards} />
        </ScrollReveal>

        {/* 3. Log Entries */}
        <ScrollReveal delay={400}>
          <section className="mb-48">
            <div className="text-center mb-32">
              <h2 className="text-3xl md:text-4xl font-light tracking-wider mb-8">
                <span className="bg-gradient-to-r from-cyan-200 to-blue-200 bg-clip-text text-transparent">
                  LOG ENTRIES
                </span>
              </h2>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent mx-auto"></div>
            </div>
            
            <div className="space-y-32">
              {mockData.logEntries.map((entry, index) => (
                <ScrollReveal key={entry.id} delay={index * 150}>
                  <LogEntryCard entry={entry} />
                </ScrollReveal>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* 4. Did You Know Section */}
        <ScrollReveal delay={600}>
          <DidYouKnowSection 
            facts={mockData.didYouKnowFacts}
            currentIndex={currentFactIndex}
          />
        </ScrollReveal>

        {/* 5. Applied Wisdom */}
        <ScrollReveal delay={800}>
          <section className="mb-48">
            <div className="text-center mb-32">
              <h2 className="text-3xl md:text-4xl font-light tracking-wider mb-8">
                <span className="bg-gradient-to-r from-cyan-200 to-blue-200 bg-clip-text text-transparent">
                  APPLIED WISDOM
                </span>
              </h2>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-16">
              {mockData.appliedWisdom.map((item, index) => (
                <ScrollReveal key={item.id} delay={index * 200}>
                  <div className="group p-12 rounded-2xl bg-slate-950/30 hover:bg-slate-950/50 transition-all duration-700 border border-slate-800/50 hover:border-cyan-500/20">
                    <div className="flex items-start space-x-8">
                      <div className="p-6 rounded-full bg-gradient-to-br from-cyan-500/10 to-blue-500/10">
                        <div className="text-2xl">{item.icon}</div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-medium mb-6 text-cyan-200">{item.title}</h3>
                        <p className="text-slate-300 mb-8 text-base leading-relaxed font-light">{item.description}</p>
                        <Button 
                          className="bg-gradient-to-r from-cyan-600/80 to-blue-600/80 hover:from-cyan-500/80 hover:to-blue-500/80 border-0 text-white font-light px-8 py-6 rounded-full transition-all duration-500"
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

        {/* 6. Live Data Section */}
        <ScrollReveal delay={1000}>
          <LiveDataSection data={mockData.liveData} />
        </ScrollReveal>

        {/* 7. Consult Daiva */}
        <ScrollReveal delay={1200}>
          <section className="mb-48">
            <div className="text-center mb-32">
              <h2 className="text-3xl md:text-4xl font-light tracking-wider mb-8">
                <span className="bg-gradient-to-r from-cyan-200 to-blue-200 bg-clip-text text-transparent">
                  CONSULT DAIVA
                </span>
              </h2>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent mx-auto"></div>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <div className="p-12 rounded-2xl bg-slate-950/30 border border-slate-800/50">
                <div className="space-y-8">
                  <div className="relative">
                    <Input
                      placeholder="What AI question or topic do you want Daiva to cover next?"
                      value={consultQuestion}
                      onChange={(e) => setConsultQuestion(e.target.value)}
                      className="bg-transparent border-slate-700/50 focus:border-cyan-500/50 text-slate-100 placeholder-slate-400 text-base py-6 px-8 rounded-full font-light"
                    />
                  </div>
                  
                  <Button 
                    onClick={handleConsultSubmit}
                    disabled={!consultQuestion.trim() || isSubmitted}
                    className="w-full bg-gradient-to-r from-cyan-600/80 to-blue-600/80 hover:from-cyan-500/80 hover:to-blue-500/80 border-0 text-white font-light py-6 rounded-full disabled:opacity-50 transition-all duration-500"
                  >
                    {isSubmitted ? '✨ Question Received' : '🔮 Submit to Oracle'}
                  </Button>
                  
                  {isSubmitted && (
                    <div className="text-center p-8 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-2xl border border-cyan-500/10">
                      <p className="text-cyan-300 font-light animate-pulse">
                        Your question has been received by Daiva...
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* 8. Feedback & Share */}
        <ScrollReveal delay={1400}>
          <section className="mb-48">
            <div className="p-12 rounded-2xl bg-slate-950/30 border border-slate-800/50">
              <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
                <div className="flex items-center space-x-8">
                  <span className="text-base text-slate-300 font-light">Was today's Log useful?</span>
                  <div className="flex space-x-4">
                    <Button
                      variant="outline"
                      onClick={() => handleFeedback('positive')}
                      className={`border-slate-700/50 text-slate-300 hover:bg-green-500/10 hover:border-green-500/50 transition-all duration-500 px-6 py-3 rounded-full font-light ${
                        feedback === 'positive' ? 'bg-green-500/10 border-green-500/50' : ''
                      }`}
                    >
                      <span className="text-xl">👍</span>
                      {feedback === 'positive' && <span className="ml-2">✨</span>}
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => handleFeedback('negative')}
                      className={`border-slate-700/50 text-slate-300 hover:bg-red-500/10 hover:border-red-500/50 transition-all duration-500 px-6 py-3 rounded-full font-light ${
                        feedback === 'negative' ? 'bg-red-500/10 border-red-500/50' : ''
                      }`}
                    >
                      <span className="text-xl">👎</span>
                      {feedback === 'negative' && <span className="ml-2">✨</span>}
                    </Button>
                  </div>
                </div>
                
                <Button
                  variant="outline"
                  className="border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10 px-8 py-3 rounded-full font-light transition-all duration-500"
                  onClick={() => {/* Mock share action */}}
                >
                  <span className="mr-2">✨</span>
                  Share Daiva
                </Button>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* 9. Minimalist Footer */}
        <ScrollReveal delay={1600}>
          <footer className="text-center space-y-16">
            <div className="py-16">
              <div className="mb-12">
                <div className="inline-block p-8 rounded-full bg-gradient-to-br from-cyan-500/5 to-blue-500/5 mb-8">
                  <div className="text-2xl">🌟</div>
                </div>
              </div>
              
              <p className="text-xl text-cyan-300 font-light mb-8">
                This concludes today's Log.
              </p>
              <p className="text-base text-slate-400 mb-12 font-light">
                You may consult Daiva again tomorrow.
              </p>
              
              <div className="space-y-4">
                <div className="w-24 h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent mx-auto"></div>
                <div className="text-xs text-slate-500 font-light space-y-2">
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