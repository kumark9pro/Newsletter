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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-slate-100">
      {/* Cosmic Background Effect */}
      <div className="fixed inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,#60f6ff15,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,#3cf2e615,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,#60a5fa15,transparent_50%)]"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-8">
        
        {/* 1. Ritualistic Opening */}
        <header className="text-center mb-12">
          <div className="mb-8">
            <div className="inline-block p-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-500/30">
              <div className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
                DAIVA
              </div>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-wide">
            YOU HAVE REACHED{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              DAIVA
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-2">
            Where Insight Emerges
          </p>
          <p className="text-lg text-cyan-400 font-medium">
            The Log for July 22, 2025, is now open.
          </p>
          <div className="mt-6 w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full animate-pulse"></div>
        </header>

        {/* 2. Quick Log Section */}
        <QuickLogSection cards={mockData.quickLogCards} />

        {/* 3. Log Entries */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 tracking-wider">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              LOG ENTRIES
            </span>
          </h2>
          <div className="space-y-8">
            {mockData.logEntries.map((entry) => (
              <LogEntryCard key={entry.id} entry={entry} />
            ))}
          </div>
        </section>

        {/* 4. Did You Know Section */}
        <DidYouKnowSection 
          facts={mockData.didYouKnowFacts}
          currentIndex={currentFactIndex}
        />

        {/* 5. Applied Wisdom */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 tracking-wider">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              APPLIED WISDOM
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {mockData.appliedWisdom.map((item) => (
              <Card key={item.id} className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{item.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 text-cyan-400">{item.title}</h3>
                      <p className="text-slate-300 mb-4">{item.description}</p>
                      <Button 
                        className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 border-0 text-white font-medium"
                        onClick={() => {/* Mock action */}}
                      >
                        {item.buttonText}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* 6. Live Data Section */}
        <LiveDataSection data={mockData.liveData} />

        {/* 7. Consult Daiva */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 tracking-wider">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              CONSULT DAIVA
            </span>
          </h2>
          <Card className="bg-slate-800/50 border-slate-700">
            <CardContent className="p-6">
              <div className="space-y-4">
                <Input
                  placeholder="What AI question or topic do you want Daiva to cover next?"
                  value={consultQuestion}
                  onChange={(e) => setConsultQuestion(e.target.value)}
                  className="bg-slate-900/50 border-slate-600 focus:border-cyan-500 text-slate-100 placeholder-slate-400"
                />
                <Button 
                  onClick={handleConsultSubmit}
                  disabled={!consultQuestion.trim() || isSubmitted}
                  className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 border-0 text-white font-medium disabled:opacity-50"
                >
                  {isSubmitted ? 'Question Received ✨' : 'Submit to Oracle'}
                </Button>
                {isSubmitted && (
                  <p className="text-center text-cyan-400 text-sm animate-pulse">
                    Your question has been received by Daiva...
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* 8. Feedback & Share */}
        <section className="mb-12">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                <div className="flex items-center space-x-4">
                  <span className="text-lg text-slate-300">Was today's Log useful?</span>
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleFeedback('positive')}
                      className={`border-slate-600 text-slate-300 hover:bg-green-500/20 hover:border-green-500 transition-all duration-200 ${
                        feedback === 'positive' ? 'bg-green-500/20 border-green-500' : ''
                      }`}
                    >
                      👍 {feedback === 'positive' && '✨'}
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleFeedback('negative')}
                      className={`border-slate-600 text-slate-300 hover:bg-red-500/20 hover:border-red-500 transition-all duration-200 ${
                        feedback === 'negative' ? 'bg-red-500/20 border-red-500' : ''
                      }`}
                    >
                      👎 {feedback === 'negative' && '✨'}
                    </Button>
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/20"
                  onClick={() => {/* Mock share action */}}
                >
                  Share Daiva ✨
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* 9. Footer */}
        <footer className="text-center space-y-4">
          <Separator className="bg-slate-700" />
          <div className="py-6">
            <p className="text-xl text-cyan-400 font-medium mb-2">
              This concludes today's Log.
            </p>
            <p className="text-lg text-slate-300">
              You may consult Daiva again tomorrow.
            </p>
            <p className="text-sm text-slate-500 mt-4">
              All entries independently verified (Truth Protocol). Sources available on request.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Newsletter;