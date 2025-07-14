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
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-950 to-gray-900 text-gray-100">
      {/* Enhanced Cosmic Background Effect */}
      <div className="fixed inset-0 opacity-40">
        {/* Starfield effect */}
        <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] bg-[size:50px_50px] opacity-20"></div>
        
        {/* Cosmic gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,#60f6ff08,transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,#3cf2e608,transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,#60a5fa08,transparent_70%)]"></div>
        
        {/* Animated cosmic particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        
        {/* 1. Ritualistic Opening */}
        <ScrollReveal>
          <header className="text-center mb-24">
            <div className="mb-12">
              <div className="inline-block relative">
                {/* Cosmic rings around logo */}
                <div className="absolute inset-0 rounded-full border border-cyan-500/30 animate-ping"></div>
                <div className="absolute inset-0 rounded-full border border-cyan-500/20 animate-ping" style={{animationDelay: '0.5s'}}></div>
                
                <div className="relative p-8 rounded-full bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-cyan-500/20">
                  <div className="text-7xl font-black bg-gradient-to-r from-cyan-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent animate-pulse tracking-widest">
                    DAIVA
                  </div>
                </div>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-wide leading-tight">
              YOU HAVE REACHED{' '}
              <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
                DAIVA
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-light">
              Where Insight Emerges
            </p>
            
            <div className="relative inline-block">
              <p className="text-xl text-cyan-300 font-medium px-6 py-3 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                The Log for July 22, 2025, is now open.
              </p>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 animate-pulse"></div>
            </div>
            
            <div className="mt-8 flex justify-center">
              <div className="w-32 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
            </div>
          </header>
        </ScrollReveal>

        {/* 2. Quick Log Section */}
        <ScrollReveal delay={200}>
          <QuickLogSection cards={mockData.quickLogCards} />
        </ScrollReveal>

        {/* 3. Log Entries */}
        <ScrollReveal delay={400}>
          <section className="mb-24">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black tracking-wider mb-4">
                <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
                  LOG ENTRIES
                </span>
              </h2>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto"></div>
            </div>
            
            <div className="space-y-16">
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
          <section className="mb-24">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black tracking-wider mb-4">
                <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
                  APPLIED WISDOM
                </span>
              </h2>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {mockData.appliedWisdom.map((item, index) => (
                <ScrollReveal key={item.id} delay={index * 200}>
                  <Card className="group bg-gray-900/50 border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10 backdrop-blur-sm">
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-6">
                        <div className="p-4 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 group-hover:border-cyan-500/50 transition-all duration-300">
                          <div className="text-3xl">{item.icon}</div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold mb-4 text-cyan-300">{item.title}</h3>
                          <p className="text-gray-300 mb-6 text-lg leading-relaxed">{item.description}</p>
                          <Button 
                            className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 border-0 text-white font-semibold px-8 py-6 text-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
                            onClick={() => {/* Mock action */}}
                          >
                            {item.buttonText}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
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
          <section className="mb-24">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black tracking-wider mb-4">
                <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
                  CONSULT DAIVA
                </span>
              </h2>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto"></div>
            </div>
            
            <Card className="max-w-2xl mx-auto bg-gray-900/50 border-gray-700/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="relative">
                    <Input
                      placeholder="What AI question or topic do you want Daiva to cover next?"
                      value={consultQuestion}
                      onChange={(e) => setConsultQuestion(e.target.value)}
                      className="bg-gray-800/50 border-gray-600/50 focus:border-cyan-500 text-gray-100 placeholder-gray-400 text-lg py-6 px-6 rounded-xl"
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/5 to-blue-500/5 pointer-events-none"></div>
                  </div>
                  
                  <Button 
                    onClick={handleConsultSubmit}
                    disabled={!consultQuestion.trim() || isSubmitted}
                    className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 border-0 text-white font-semibold py-6 text-lg disabled:opacity-50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
                  >
                    {isSubmitted ? '✨ Question Received' : '🔮 Submit to Oracle'}
                  </Button>
                  
                  {isSubmitted && (
                    <div className="text-center p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl border border-cyan-500/30">
                      <p className="text-cyan-300 text-lg animate-pulse">
                        Your question has been received by Daiva...
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </section>
        </ScrollReveal>

        {/* 8. Feedback & Share */}
        <ScrollReveal delay={1400}>
          <section className="mb-24">
            <Card className="bg-gray-900/50 border-gray-700/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
                  <div className="flex items-center space-x-6">
                    <span className="text-xl text-gray-300">Was today's Log useful?</span>
                    <div className="flex space-x-4">
                      <Button
                        variant="outline"
                        onClick={() => handleFeedback('positive')}
                        className={`border-gray-600 text-gray-300 hover:bg-green-500/20 hover:border-green-500 transition-all duration-300 px-6 py-3 ${
                          feedback === 'positive' ? 'bg-green-500/20 border-green-500 shadow-lg shadow-green-500/25' : ''
                        }`}
                      >
                        <span className="text-2xl">👍</span>
                        {feedback === 'positive' && <span className="ml-2 text-xl">✨</span>}
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => handleFeedback('negative')}
                        className={`border-gray-600 text-gray-300 hover:bg-red-500/20 hover:border-red-500 transition-all duration-300 px-6 py-3 ${
                          feedback === 'negative' ? 'bg-red-500/20 border-red-500 shadow-lg shadow-red-500/25' : ''
                        }`}
                      >
                        <span className="text-2xl">👎</span>
                        {feedback === 'negative' && <span className="ml-2 text-xl">✨</span>}
                      </Button>
                    </div>
                  </div>
                  
                  <Button
                    variant="outline"
                    className="border-cyan-500 text-cyan-300 hover:bg-cyan-500/20 px-8 py-3 text-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
                    onClick={() => {/* Mock share action */}}
                  >
                    <span className="text-xl mr-2">✨</span>
                    Share Daiva
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>
        </ScrollReveal>

        {/* 9. Footer */}
        <ScrollReveal delay={1600}>
          <footer className="text-center space-y-8">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
            
            <div className="py-12">
              <div className="mb-8">
                <div className="inline-block p-6 rounded-full bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 mb-6">
                  <div className="text-4xl">🌟</div>
                </div>
              </div>
              
              <p className="text-2xl text-cyan-300 font-semibold mb-4">
                This concludes today's Log.
              </p>
              <p className="text-xl text-gray-300 mb-8">
                You may consult Daiva again tomorrow.
              </p>
              
              <div className="text-sm text-gray-500 space-y-2">
                <p>All entries independently verified (Truth Protocol)</p>
                <p>Sources available on request</p>
              </div>
            </div>
          </footer>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Newsletter;