import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import SpaceBackground from "@/components/SpaceBackground";
import ScrollReveal from "@/components/ScrollReveal";
import CustomCursor from "@/components/CustomCursor";
import Loader from "@/components/Loader"
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="relative bg-black">
      <SpaceBackground />
      <Loader/>
      <Navbar/>
      <CustomCursor />
      <Hero />
      <ScrollReveal />
      <About />
      <Projects />
      <section className="h-screen flex items-center justify-center relative z-10">
        <h2 className="text-white text-6xl font-black">
          NEXT GENERATION WEB
        </h2>
      </section>
    </main>
  );
}