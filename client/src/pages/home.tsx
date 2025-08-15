import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import CommandsSection from "@/components/commands-section";
import GiveawaysSection from "@/components/giveaways-section";
import CTASection from "@/components/cta-section";
import Footer from "@/components/footer";
import FloatingActionButton from "@/components/floating-action-button";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <CommandsSection />
      <GiveawaysSection />
      <CTASection />
      <Footer />
      <FloatingActionButton />
    </div>
  );
}
