import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import SpaceBackground from "@/components/SpaceBackground";
import ScrollReveal from "@/components/ScrollReveal";
import CustomCursor from "@/components/CustomCursor";
import Loader from "@/components/Loader"
import Navbar from "@/components/Navbar";
import GridBackground from "@/components/GridBackground";
import CurtainReveal from "@/components/CurtainReveal";

export default function Home() {
  return (
    <main className="relative bg-black">
      
      <Loader/>
      <GridBackground />
      <Navbar/>
      <CustomCursor />
      <SpaceBackground />
      <Hero />
      <ScrollReveal />
      <CurtainReveal/>
      <About />
      <Projects />
      <section className="h-screen flex items-center justify-center relative z-10">
        <h4 className="text-white text-6xl font-black">
          NEXT GENERATION WEB
        </h4>
      </section>
      
    </main>
  );
}