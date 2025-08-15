import { Gamepad2, Coins, Trophy, Gift, HandCoins, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Gamepad2,
    title: "Hunger Games Simulation",
    description: "Create immersive battle royale experiences where players fight for survival in randomly generated arenas with dynamic events."
  },
  {
    icon: Coins,
    title: "Coin Wagering System",
    description: "Bet your coins to enter games and sponsor players. Winners take the entire pot and climb the competitive leaderboards."
  },
  {
    icon: Trophy,
    title: "Global Leaderboards",
    description: "Track your victories across servers with local and global rankings. Compete with players worldwide for ultimate bragging rights."
  },
  {
    icon: Gift,
    title: "Unique Giveaways",
    description: "Revolutionary giveaway system where winners are determined through Hunger Games simulations instead of random draws."
  },
  {
    icon: HandCoins,
    title: "Sponsorship System",
    description: "Use your coins to sponsor players in simulations, giving them better odds and equipment for increased survival chances."
  },
  {
    icon: TrendingUp,
    title: "Player Statistics",
    description: "Track your progress with detailed stats including wins, losses, coins earned, and survival rates across all game modes."
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-dark-secondary relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text-orange-yellow">
              Epic Features
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Experience the thrill of the Hunger Games with these incredible bot features
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-dark-primary border border-orange-primary/20 rounded-2xl p-6 hover:border-orange-primary/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-primary/20"
              data-testid={`feature-card-${index}`}
            >
              <div className="w-16 h-16 gradient-bg-orange-yellow rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
                <feature.icon className="text-dark-primary text-2xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-orange-primary transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
