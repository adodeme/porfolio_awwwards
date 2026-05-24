import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import SpaceBackground from "@/components/SpaceBackground";
import ScrollReveal from "@/components/ScrollReveal";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <main className="relative bg-black">
      <SpaceBackground />
      <CustomCursor />
      <Hero />
      <ScrollReveal />
      <About />
      <Projects />

    </main>
  );
}