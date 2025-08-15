import { Flame } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark-primary border-t border-orange-primary/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-6 md:mb-0">
            <div className="w-10 h-10 rounded-full gradient-bg-orange-yellow flex items-center justify-center animate-glow">
              <Flame className="text-white text-lg animate-wobble" />
            </div>
            <span className="text-2xl font-bold gradient-text-orange-yellow hover:scale-105 transition-transform duration-300 custom-cursor-pointer">Panem</span>
          </div>
          
          <div className="flex items-center space-x-8 text-gray-400">
            <a href="#" className="hover:text-orange-primary transition-all duration-300 hover:scale-110 custom-cursor-pointer relative group" data-testid="link-privacy">
              Privacy Policy
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#" className="hover:text-orange-primary transition-all duration-300 hover:scale-110 custom-cursor-pointer relative group" data-testid="link-terms">
              Terms of Service
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#" className="hover:text-orange-primary transition-all duration-300 hover:scale-110 custom-cursor-pointer relative group" data-testid="link-support">
              Support
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500">© 2025 Panem Discord Bot. May the odds be ever in your favor.</p>
        </div>
      </div>
    </footer>
  );
}
