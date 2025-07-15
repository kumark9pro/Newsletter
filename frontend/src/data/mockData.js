// Mock data for Daiva Newsletter
export const mockData = {
  // Quick Log Cards
  quickLogCards: [
    {
      id: 1,
      title: "Meta's AI Lab Faces Turbulence",
      summary: "Meta's top AI scientist just published a warning about internal challenges.",
      category: "corporate"
    },
    {
      id: 2,
      title: "A $299 Robot for Everyone",
      summary: "Hugging Face launches Reachy Mini - DIY AI robot kit for homes.",
      category: "product"
    },
    {
      id: 3,
      title: "AI Diagnoses Faster Than Doctors",
      summary: "Med-Gemini enables instant health consultations with AI precision.",
      category: "healthcare"
    },
    {
      id: 4,
      title: "Did You Know?",
      summary: "AI creates 100,000 images worldwide every minute.",
      category: "fact"
    }
  ],

  // Main Log Entries
  logEntries: [
    {
      id: 1,
      headline: "Meta's AI Lab Faces Turbulence",
      summary: "Meta's top AI scientist just published a warning: layoffs and fear are slowing down their AI division. If you use Meta's tools or follow AI news, this could shape what comes next.",
      stat: "45% of Meta's core AI engineers switched jobs in the past year",
      daivaLens: "When the biggest AI labs hit trouble, the impact ripples everywhere. New leaders may bring new ideas—or slow things down for all. If you rely on Meta, watch for shifts in their AI roadmap.",
      image: "https://images.unsplash.com/photo-1626553683558-dd8dc97e40a4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwxfHxjb3NtaWMlMjBBSXxlbnwwfHx8Ymx1ZXwxNzUyNTAzMDE2fDA&ixlib=rb-4.1.0&q=85",
      category: "corporate"
    },
    {
      id: 2,
      headline: "A $299 Robot for Everyone",
      summary: "Hugging Face just launched Reachy Mini, a build-it-yourself robot kit that uses AI. Anyone—kids, teachers, creators—can now experiment at home.",
      stat: "Robot kits for home use grew 400% in 2025",
      daivaLens: "When AI hardware becomes affordable, innovation moves from labs to living rooms. This shift could spark unexpected breakthroughs—or flood the market with mediocre gadgets.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwxfHxjb3NtaWMlMjByb2JvdHxlbnwwfHx8Ymx1ZXwxNzUyNTAzMDE2fDA&ixlib=rb-4.1.0&q=85",
      category: "product"
    },
    {
      id: 3,
      headline: "AI Diagnoses Faster Than Doctors",
      summary: "Google's Med-Gemini now handles complex medical cases instantly. What took doctors hours now happens in seconds.",
      stat: "Med-Gemini diagnosed 95% of rare diseases correctly vs. 78% for specialists",
      daivaLens: "Fast diagnosis is powerful, but medicine isn't just about speed. Human intuition, empathy, and complex reasoning still matter. The real win is AI + doctors, not AI vs. doctors.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwxfHxjb3NtaWMlMjBtZWRpY2luZXxlbnwwfHx8Ymx1ZXwxNzUyNTAzMDE2fDA&ixlib=rb-4.1.0&q=85",
      category: "healthcare"
    }
  ],

  // Did You Know Facts
  didYouKnowFacts: [
    {
      id: 1,
      number: "100,000",
      fact: "AI-generated images are created worldwide every minute",
      category: "fact"
    },
    {
      id: 2,
      number: "73%",
      fact: "of Fortune 500 companies now use AI for decision-making",
      category: "analytics"
    },
    {
      id: 3,
      number: "2.3 seconds",
      fact: "is how long it takes AI to read and summarize a 50-page research paper",
      category: "innovation"
    }
  ],

  // Applied Wisdom Cards
  appliedWisdom: [
    {
      id: 1,
      title: "Corporate Strategy",
      description: "Navigate AI disruption in your industry with strategic insights from leading transformation experts.",
      category: "corporate",
      buttonText: "Explore Corporate AI"
    },
    {
      id: 2,
      title: "Product Innovation",
      description: "Build AI-powered products that users love. From ideation to market launch.",
      category: "product", 
      buttonText: "Start Building"
    },
    {
      id: 3,
      title: "Data Analytics",
      description: "Turn your data into actionable insights with advanced AI analytics and visualization.",
      category: "analytics",
      buttonText: "Analyze Data"
    },
    {
      id: 4,
      title: "Security & Ethics",
      description: "Implement AI responsibly with comprehensive security frameworks and ethical guidelines.",
      category: "security",
      buttonText: "Secure Your AI"
    }
  ],

  // Live Data
  liveData: {
    title: "AI Investment 2025",
    value: 220,
    unit: "Billion USD",
    change: "+27%",
    sectors: [
      { name: "Healthcare", value: 45, color: "#60F6FF" },
      { name: "Robotics", value: 38, color: "#3CF2E6" },
      { name: "Enterprise", value: 67, color: "#60A5FA" },
      { name: "Consumer", value: 42, color: "#34D399" },
      { name: "Other", value: 28, color: "#A78BFA" }
    ]
  }
};