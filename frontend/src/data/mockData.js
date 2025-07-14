// Mock data for Daiva Newsletter
export const mockData = {
  // Quick Log Cards
  quickLogCards: [
    {
      id: 1,
      title: "Meta's AI Lab Faces Turbulence",
      summary: "Meta's top AI scientist just published a warning about internal challenges.",
      icon: "🌪️",
      category: "corporate"
    },
    {
      id: 2,
      title: "A $299 Robot for Everyone",
      summary: "Hugging Face launches Reachy Mini - DIY AI robot kit for homes.",
      icon: "🤖",
      category: "product"
    },
    {
      id: 3,
      title: "AI Diagnoses Faster Than Doctors",
      summary: "Med-Gemini enables instant health consultations with AI precision.",
      icon: "⚕️",
      category: "healthcare"
    },
    {
      id: 4,
      title: "Did You Know?",
      summary: "AI creates 100,000 images worldwide every minute.",
      icon: "💡",
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
      daivaLens: "AI and robotics are moving out of the lab and into your hands. The next wave of innovation could come from a teenager's desk—not a giant tech company.",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwyfHxmdXR1cmlzdGljJTIwdGVjaG5vbG9neXxlbnwwfHx8Ymx1ZXwxNzUyNTAzMDI1fDA&ixlib=rb-4.1.0&q=85",
      category: "product",
      interactive: true
    },
    {
      id: 3,
      headline: "AI Diagnoses Faster Than Doctors",
      summary: "New tools like Med-Gemini let you chat with an AI doctor—no appointment needed. Studies show it can spot certain diseases even faster than experts.",
      stat: "By 2025, 1 in 5 clinics uses AI to help with diagnosis",
      daivaLens: "Instant, AI-powered health checks could make quality care available to everyone—especially where doctors are scarce. But it's not perfect—always double-check before making decisions.",
      image: "https://images.unsplash.com/photo-1660165458059-57cfb6cc87e5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwdGVjaG5vbG9neXxlbnwwfHx8Ymx1ZXwxNzUyNTAzMDI1fDA&ixlib=rb-4.1.0&q=85",
      category: "healthcare"
    }
  ],

  // Did You Know Facts
  didYouKnowFacts: [
    {
      id: 1,
      fact: "Every minute, AI helps create 100,000 images worldwide.",
      icon: "🎨",
      number: "100,000"
    },
    {
      id: 2,
      fact: "45% of new software tools in 2025 are powered by AI.",
      icon: "⚡",
      number: "45%"
    },
    {
      id: 3,
      fact: "AI writes lyrics for 1 in 10 hit songs today.",
      icon: "🎵",
      number: "1 in 10"
    },
    {
      id: 4,
      fact: "ChatGPT processes 10 billion messages daily.",
      icon: "💬",
      number: "10B"
    }
  ],

  // Applied Wisdom Tools
  appliedWisdom: [
    {
      id: 1,
      title: "Try Med-Gemini",
      description: "Ask a health question. See how fast the AI responds.",
      buttonText: "Test Med-Gemini",
      icon: "⚕️"
    },
    {
      id: 2,
      title: "Build Your Own Robot",
      description: "Reachy Mini's starter kit is open source. Free guide here.",
      buttonText: "View Build Guide",
      icon: "🔧"
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