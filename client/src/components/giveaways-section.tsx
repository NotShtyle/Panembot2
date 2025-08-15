import { Sword, Target, Zap, Users } from "lucide-react";

export default function GiveawaysSection() {
  return (
    <section id="giveaways" className="py-20 bg-dark-secondary relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-40 h-40 gradient-bg-orange-yellow rounded-full opacity-5 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 gradient-bg-yellow-orange rounded-full opacity-10 animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-orange-primary rounded-full opacity-5 animate-pulse-slow"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text-orange-yellow">
              Revolutionary Giveaways
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Forget random draws! Winners are determined through epic battle simulations where skill and sponsorships matter
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Giveaway Process */}
          <div className="space-y-8">
            <div className="bg-dark-primary/30 backdrop-blur-md rounded-2xl p-8 hover:bg-dark-primary/50 transition-all duration-300">
              <h3 className="text-3xl font-bold mb-6 text-white">How It Works</h3>
              
              <div className="space-y-6">
                {[
                  {
                    step: "1",
                    title: "Create Giveaway",
                    description: "Set up your prize and let participants enter the Hunger Games simulation",
                    icon: Target
                  },
                  {
                    step: "2", 
                    title: "Players Join & Sponsor",
                    description: "Participants can use coins to sponsor their character for better odds",
                    icon: Users
                  },
                  {
                    step: "3",
                    title: "Epic Battle Simulation",
                    description: "Watch as participants fight in a thrilling Hunger Games simulation",
                    icon: Sword
                  },
                  {
                    step: "4",
                    title: "Winner Takes Prize",
                    description: "The last survivor claims the giveaway prize through skill, not luck!",
                    icon: Zap
                  }
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-dark-secondary/30 transition-all duration-300 hover:scale-105 custom-cursor-pointer" 
                    data-testid={`process-step-${index}`}
                  >
                    <div className="w-12 h-12 gradient-bg-orange-yellow rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:rotate-12 transition-transform duration-300">
                      <item.icon className="text-dark-primary h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-orange-primary transition-colors duration-300">{item.title}</h4>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Interactive Demonstration */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-orange-primary/20 to-yellow-primary/20 backdrop-blur-md rounded-2xl p-6 hover:shadow-2xl hover:shadow-orange-primary/30 transition-all duration-300">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">⚔️ Battle Arena Preview</h3>
                <p className="text-gray-300">Experience the thrill of Hunger Games giveaways</p>
              </div>
              
              {/* Interactive Elements */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { title: "Survival Rate", value: "34%", color: "text-orange-primary" },
                  { title: "Sponsored Players", value: "12/24", color: "text-yellow-primary" },
                  { title: "Prize Pool", value: "Growing", color: "text-green-400" },
                  { title: "Battle Timer", value: "5:30", color: "text-red-400" }
                ].map((stat, index) => (
                  <div 
                    key={index}
                    className="bg-dark-primary/50 rounded-lg p-3 text-center hover:scale-105 transition-transform duration-300 custom-cursor-pointer"
                    data-testid={`stat-${index}`}
                  >
                    <div className={`text-lg font-bold ${stat.color}`}>{stat.value}</div>
                    <div className="text-gray-400 text-sm">{stat.title}</div>
                  </div>
                ))}
              </div>

              {/* Animated Progress Bars */}
              <div className="space-y-3">
                <div className="text-sm text-gray-300 mb-2">Arena Status:</div>
                {[
                  { label: "Players Remaining", width: "w-3/4", color: "bg-orange-primary" },
                  { label: "Sponsor Activity", width: "w-1/2", color: "bg-yellow-primary" },
                  { label: "Battle Intensity", width: "w-5/6", color: "bg-red-500" }
                ].map((bar, index) => (
                  <div key={index} className="space-y-1">
                    <div className="text-xs text-gray-400">{bar.label}</div>
                    <div className="w-full bg-dark-primary/50 rounded-full h-2">
                      <div 
                        className={`h-2 ${bar.color} ${bar.width} rounded-full animate-pulse transition-all duration-1000`}
                        style={{ animationDelay: `${index * 0.5}s` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Floating Animation Elements */}
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-12 h-12 gradient-bg-yellow-orange rounded-full animate-bounce-slow opacity-80"></div>
              <div className="absolute -bottom-6 -left-6 w-8 h-8 gradient-bg-orange-yellow rounded-full animate-float opacity-60"></div>
              <div className="absolute top-1/2 -right-2 w-6 h-6 bg-yellow-primary rounded-full animate-ping opacity-40"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
