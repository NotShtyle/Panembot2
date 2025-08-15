import { HelpCircle, Sword, Star, Wallet } from "lucide-react";

const commands = [
  {
    icon: HelpCircle,
    command: "/help",
    description: "Get started with all commands",
    example: "> /help",
    output: `📋 **Panem Bot Commands**
🎮 \`/game\` - Start Hunger Games
🏆 \`/leaderboard\` - View rankings
💰 \`/balance\` - Check your stats
🎁 \`/giveaway\` - Create giveaways`
  },
  {
    icon: Sword,
    command: "/game",
    description: "Create a Hunger Games lobby",
    example: "> /game start-lobby 100",
    output: `🎮 **Hunger Games Lobby Created!**
💰 Entry Fee: 100 coins
👥 Players: 0/24
⏰ Starting in 5 minutes
⚔️ React with ⚔️ to join!`
  },
  {
    icon: Star,
    command: "/leaderboard",
    description: "View server or global rankings",
    example: "> /leaderboard global",
    output: `🏆 **Global Leaderboard**
🥇 Champion - 2,847 coins
🥈 Survivor - 1,923 coins
🥉 Victor - 1,456 coins
...`
  },
  {
    icon: Wallet,
    command: "/balance",
    description: "Check your coins and stats",
    example: "> /balance",
    output: `💰 **Your Stats**
🪙 Coins: 1,250
🏆 Wins: 23
💀 Games Played: 67
📊 Win Rate: 34.3%`
  }
];

export default function CommandsSection() {
  return (
    <section id="commands" className="py-20 bg-dark-tertiary relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute top-0 left-0 w-full h-full" 
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 40px, var(--orange-primary) 40px, var(--orange-primary) 42px)'
          }}
        ></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text-orange-yellow">
              Bot Commands
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Master these essential commands to dominate the arena
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {commands.map((cmd, index) => (
            <div 
              key={index}
              className="group bg-dark-secondary/30 backdrop-blur-md rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-primary/20 hover:bg-dark-secondary/60 hover:scale-105 custom-cursor-pointer"
              data-testid={`command-card-${index}`}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 gradient-bg-orange-yellow rounded-xl flex items-center justify-center mr-4 group-hover:rotate-12 transition-transform duration-300 animate-glow">
                  <cmd.icon className="text-dark-primary text-xl group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-orange-primary transition-colors duration-300">{cmd.command}</h3>
                  <p className="text-gray-400">{cmd.description}</p>
                </div>
              </div>
              <div className="bg-dark-primary rounded-lg p-4 font-mono text-sm relative overflow-hidden group-hover:shadow-lg transition-all duration-300">
                <div className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="text-orange-primary mb-2">{cmd.example}</div>
                  <div className="text-gray-300 whitespace-pre-line">
                    {cmd.output}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
