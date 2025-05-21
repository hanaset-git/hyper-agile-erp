import HeroSection from "@/components/HeroSection";
import PathSelector from "@/components/PathSelector";
import IntelligenceSection from "@/components/IntelligenceSection";

export default function Home() {
  return (
    <main className="flex flex-col"> 
      <HeroSection />
      <PathSelector />
      <IntelligenceSection />
    </main>
  );
}
