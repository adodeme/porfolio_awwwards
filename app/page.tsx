import Hero from "@/components/Hero";
import SpaceBackground from "@/components/SpaceBackground";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black overflow-hidden">
      <SpaceBackground />
      <Hero />
    </main>
  );
}