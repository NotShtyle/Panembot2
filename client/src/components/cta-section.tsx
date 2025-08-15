import { Bot, ExternalLink, Users, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  const handleInviteBot = () => {
    console.log('Redirecting to Discord bot invitation...');
    window.open('https://discord.com/oauth2/authorize?client_id=1405031678568693760&scope=bot&permissions=544857390145', '_blank');
  };

  return (
    <section className="py-20 bg-dark-tertiary relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-64 h-64 gradient-bg-orange-yellow rounded-full opacity-5 animate-rotate-slow"></div>
        <div className="absolute bottom-1/4 right-10 w-48 h-48 bg-gradient-to-r from-yellow-primary to-orange-secondary rounded-full opacity-10 animate-rotate-slow" style={{ animationDirection: 'reverse' }}></div>
      </div>
      
      <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-6xl font-black mb-8">
          <span className="gradient-text-orange-yellow">
            Ready to Rule the Arena?
          </span>
        </h2>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
          Join thousands of Discord servers already hosting epic Hunger Games battles. 
          Add Panem to your server and let the games begin!
        </p>
        
        <div className="flex justify-center">
          <Button 
            onClick={handleInviteBot}
            className="group gradient-bg-orange-yellow text-dark-primary px-12 py-5 rounded-full font-bold text-xl hover:scale-110 transform transition-all duration-300 shadow-2xl hover:shadow-orange-primary/50 custom-cursor-pointer"
            data-testid="button-cta-invite"
          >
            <Bot className="mr-4 h-6 w-6" />
            Add Panem Bot
            <ExternalLink className="ml-4 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
        
        {/* Quick Start Guide */}
        <div className="mt-16 bg-dark-secondary/30 backdrop-blur-md rounded-2xl p-8 hover:bg-dark-secondary/50 transition-all duration-300">
          <h3 className="text-2xl font-bold mb-6 text-white">Quick Start Guide</h3>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            {[
              {
                step: "1",
                title: "Add Bot",
                description: "Click the button above to invite Panem to your server"
              },
              {
                step: "2",
                title: "Type /help",
                description: "Learn all available commands and features"
              },
              {
                step: "3",
                title: "Start Playing",
                description: "Create your first Hunger Games with /game"
              }
            ].map((item, index) => (
              <div key={index} className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-dark-primary/30 transition-all duration-300 hover:scale-105 custom-cursor-pointer" data-testid={`quick-start-${index}`}>
                <div className="w-8 h-8 gradient-bg-orange-yellow rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:rotate-12 transition-transform duration-300">
                  <span className="text-dark-primary font-bold text-sm">{item.step}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white group-hover:text-orange-primary transition-colors duration-300">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
