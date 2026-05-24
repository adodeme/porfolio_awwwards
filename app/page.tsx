import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import SpaceBackground from "@/components/SpaceBackground";

export default function Home() {
  return (
    <main className="relative bg-black">
      <SpaceBackground />
      <Hero />
      <About />
      <Projects />
    </main>
  );
}