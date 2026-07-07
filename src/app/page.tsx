import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import GameModes from "@/components/GameModes";
import Leaderboard from "@/components/Leaderboard";
import PremiumPacks from "@/components/PremiumPacks";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full flex flex-col gap-24 py-16 px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
        <Hero />
        <HowItWorks />
        <GameModes />
        <Leaderboard />
        <PremiumPacks />
      </main>
      <Footer />
    </>
  );
}
