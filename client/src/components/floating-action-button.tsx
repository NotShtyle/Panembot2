import { Bot } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FloatingActionButton() {
  const handleInviteBot = () => {
    console.log('Redirecting to Discord bot invitation...');
    window.open('https://discord.com/api/oauth2/authorize?client_id=YOUR_BOT_ID&permissions=YOUR_PERMISSIONS&scope=bot%20applications.commands', '_blank');
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <Button 
        onClick={handleInviteBot}
        className="gradient-bg-orange-yellow text-dark-primary w-16 h-16 rounded-full shadow-2xl hover:scale-110 transform transition-all duration-300 hover:shadow-orange-primary/50 animate-pulse-slow"
        size="icon"
        data-testid="button-floating-invite"
      >
        <Bot className="h-8 w-8" />
      </Button>
    </div>
  );
}
