import { Sword, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const participants = [
  { name: "Player1", sponsor: "50 coins" },
  { name: "Player2", sponsor: "25 coins" },
  { name: "Player3", sponsor: null },
  { name: "+20 more...", sponsor: "Various" }
];

export default function GiveawaysSection() {
  const handleJoinGiveaway = () => {
    console.log('Joining giveaway...');
  };

  return (
    <section id="giveaways" className="py-20 bg-dark-secondary relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text-orange-yellow">
              Hunger Games Giveaways
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Forget random draws! Winners are determined through epic battle simulations where skill and sponsorships matter
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Giveaway Process */}
          <div className="space-y-8">
            <div className="bg-dark-primary border border-orange-primary/20 rounded-2xl p-8">
              <h3 className="text-3xl font-bold mb-6 text-white">How It Works</h3>
              
              <div className="space-y-6">
                {[
                  {
                    step: "1",
                    title: "Create Giveaway",
                    description: "Set up your prize and let participants enter the Hunger Games simulation"
                  },
                  {
                    step: "2", 
                    title: "Players Join & Sponsor",
                    description: "Participants can use coins to sponsor their character for better odds"
                  },
                  {
                    step: "3",
                    title: "Epic Battle Simulation",
                    description: "Watch as participants fight in a thrilling Hunger Games simulation"
                  },
                  {
                    step: "4",
                    title: "Winner Takes Prize",
                    description: "The last survivor claims the giveaway prize through skill, not luck!"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4" data-testid={`process-step-${index}`}>
                    <div className="w-10 h-10 gradient-bg-orange-yellow rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-dark-primary font-bold">{item.step}</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Mock Giveaway Example */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-orange-primary/10 to-yellow-primary/10 border border-orange-primary/30 rounded-2xl p-6 backdrop-blur-md">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">🎁 Discord Nitro Giveaway</h3>
                <span className="gradient-bg-orange-yellow text-dark-primary px-3 py-1 rounded-full text-sm font-semibold">ACTIVE</span>
              </div>
              
              <div className="mb-6">
                <p className="text-gray-300 mb-4">Prize: 3 Month Discord Nitro Subscription</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Participants: 24/24</span>
                  <span className="text-orange-primary">Starting soon...</span>
                </div>
              </div>
              
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-white">Current Participants:</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {participants.map((participant, index) => (
                    <div 
                      key={index}
                      className="bg-dark-primary/50 rounded-lg p-2 flex items-center justify-between"
                      data-testid={`participant-${index}`}
                    >
                      <span className="text-gray-300">{participant.name}</span>
                      <span className={participant.sponsor && participant.sponsor !== "Various" && participant.sponsor !== "No sponsor" ? "text-yellow-primary" : "text-gray-400"}>
                        {participant.sponsor ? (participant.sponsor === "Various" ? participant.sponsor : `⭐ ${participant.sponsor}`) : "No sponsor"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
              <Button 
                onClick={handleJoinGiveaway}
                className="w-full mt-6 gradient-bg-orange-yellow text-dark-primary py-3 rounded-full font-semibold hover:scale-105 transform transition-all duration-300"
                data-testid="button-join-giveaway"
              >
                <Sword className="mr-2 h-4 w-4" />
                Enter the Arena
              </Button>
            </div>
            
            {/* Floating Coin Animation */}
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-12 h-12 gradient-bg-yellow-orange rounded-full animate-bounce-slow opacity-80"></div>
              <div className="absolute -bottom-6 -left-6 w-8 h-8 gradient-bg-orange-yellow rounded-full animate-float opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
