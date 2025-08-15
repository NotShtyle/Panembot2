import { Terminal, Play, ArrowRight, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToDemo = () => {
    const element = document.getElementById('features');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleInviteBot = () => {
    console.log('Redirecting to Discord bot invitation...');
    window.open('https://discord.com/oauth2/authorize?client_id=1405031678568693760&scope=bot&permissions=544857390145', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 gradient-bg-orange-yellow rounded-full opacity-10 animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 gradient-bg-yellow-orange rounded-full opacity-15 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-r from-orange-secondary to-yellow-secondary rounded-full opacity-5 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            <span className="gradient-text-orange-yellow animate-pulse-slow">
              Panem
            </span>
            <br />
            <span className="text-white text-4xl md:text-5xl font-semibold">Discord Bot</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Create epic <span className="text-orange-primary font-semibold">Hunger Games simulations</span> in your Discord server. 
            Compete, wager coins, and climb the leaderboards in the ultimate survival experience.
          </p>
          
          <div className="flex justify-center items-center mb-12">
            <Button 
              onClick={handleInviteBot}
              className="group gradient-bg-orange-yellow text-dark-primary px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transform transition-all duration-300 shadow-2xl hover:shadow-orange-primary/40 custom-cursor-pointer"
              data-testid="button-hero-invite"
            >
              <Bot className="mr-3 h-5 w-5" />
              Add to Your Server
              <ArrowRight className="ml-3 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
        
        {/* Floating Command Preview */}
        <div className="animate-fade-in" style={{ animationDelay: '1s' }}>
          <div className="bg-dark-secondary/80 backdrop-blur-md rounded-2xl p-6 max-w-md mx-auto transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-orange-primary/20 animate-glow custom-cursor-pointer">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 rounded-full gradient-bg-orange-yellow flex items-center justify-center mr-3 animate-wobble">
                <Terminal className="text-dark-primary text-sm" />
              </div>
              <span className="text-gray-400 text-sm">Try it out:</span>
            </div>
            <div className="bg-dark-primary rounded-lg p-4 font-mono relative overflow-hidden">
              <div className="absolute inset-0 animate-shimmer"></div>
              <div className="relative z-10">
                <span className="text-orange-primary">/game</span>
                <span className="text-gray-300 ml-2">100</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
