import { useState } from "react";
import { Menu, X, Flame, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  const handleInviteBot = () => {
    // In a real implementation, this would redirect to Discord's OAuth URL
    console.log('Redirecting to Discord bot invitation...');
    window.open('https://discord.com/oauth2/authorize?client_id=1405031678568693760&scope=bot&permissions=544857390145', '_blank');
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-dark-primary/90 backdrop-blur-md border-b border-orange-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full gradient-bg-orange-yellow flex items-center justify-center animate-glow">
                <Flame className="text-white text-lg animate-wobble" />
              </div>
              <span className="text-2xl font-bold gradient-text-orange-yellow hover:scale-105 transition-transform duration-300 custom-cursor-pointer">Panem</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('features')}
                className="hover:text-orange-primary transition-all duration-300 hover:scale-110 custom-cursor-pointer relative group"
                data-testid="link-features"
              >
                Features
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button 
                onClick={() => scrollToSection('commands')}
                className="hover:text-orange-primary transition-all duration-300 hover:scale-110 custom-cursor-pointer relative group"
                data-testid="link-commands"
              >
                Commands
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button 
                onClick={() => scrollToSection('giveaways')}
                className="hover:text-orange-primary transition-all duration-300 hover:scale-110 custom-cursor-pointer relative group"
                data-testid="link-giveaways"
              >
                Giveaways
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
              <Button 
                onClick={handleInviteBot}
                className="gradient-bg-orange-yellow text-dark-primary px-6 py-2 rounded-full font-semibold hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-orange-primary/25 custom-cursor-pointer"
                data-testid="button-invite-bot"
              >
                <Bot className="mr-2 h-4 w-4" />
                Add to Server
              </Button>
            </div>
            
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white"
              onClick={toggleMobileMenu}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-dark-primary/95 backdrop-blur-md z-40 transform transition-transform duration-300 md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        data-testid="mobile-menu"
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <button 
            onClick={() => scrollToSection('features')}
            className="text-2xl hover:text-orange-primary transition-colors duration-300"
            data-testid="mobile-link-features"
          >
            Features
          </button>
          <button 
            onClick={() => scrollToSection('commands')}
            className="text-2xl hover:text-orange-primary transition-colors duration-300"
            data-testid="mobile-link-commands"
          >
            Commands
          </button>
          <button 
            onClick={() => scrollToSection('giveaways')}
            className="text-2xl hover:text-orange-primary transition-colors duration-300"
            data-testid="mobile-link-giveaways"
          >
            Giveaways
          </button>
          <Button 
            onClick={handleInviteBot}
            className="gradient-bg-orange-yellow text-dark-primary px-8 py-3 rounded-full font-semibold text-lg custom-cursor-pointer"
            data-testid="mobile-button-invite-bot"
          >
            <Bot className="mr-2 h-5 w-5" />
            Add to Server
          </Button>
        </div>
      </div>
    </>
  );
}
