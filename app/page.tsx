import Hero from "@/components/Hero";
import About from "@/components/About";
import SpaceBackground from "@/components/SpaceBackground";

export default function Home() {
  return (
    <main className="relative bg-black">
      <SpaceBackground />

      <Hero />

      <About />
    </main>
  );
}