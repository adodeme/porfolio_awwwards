"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function CurtainReveal() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const leftX = useTransform(scrollYProgress, [0, 1], [0, -500]);

  const rightX = useTransform(scrollYProgress, [0, 1], [0, 500]);

  return (
    <section
      ref={ref}
      className="relative h-[200vh] flex items-center justify-center"
    >
      {/* Contenu derrière le rideau */}
      <div className="sticky top-0 h-screen flex items-center justify-center z-10 px-8">
        <div className="max-w-4xl text-center">
          <h2 className="text-white text-6xl font-black mb-8">
            ADODEME
          </h2>

          <p className="text-gray-300 text-xl leading-relaxed">
            Développeur Full Stack passionné par les expériences
            interactives, le design web moderne et les technologies
            immersives.
          </p>

          <div className="mt-10 space-y-4 text-cyan-300">
            <p>🎓 Diplômes : CEP, BEPC, BAC</p>
            <p>📚 Niveau d'étude : BAC+2</p>
            <h3>Mes compétences</h3>
            <li>
                <ul>HTML</ul>
                <ul>CSS</ul>
                <ul>JavaScript</ul>
                <ul>Base de données</ul>
                <ul>Laravel</ul>
                <ul>WORD</ul>
                <ul>EXCEL</ul>
            </li>
            <p>💻 React • Next.js • TypeScript • Node.js</p>
            <p>🚀 Three.js • GSAP • Framer Motion</p>
          </div>
        </div>
      </div>

      {/* Rideau gauche */}
      <motion.div
        style={{ x: leftX }}
        className="absolute left-0 top-0 w-1/2 h-full bg-gradient-to-b from-black via-cyan-950 to-black z-20 border-r border-cyan-500/20"
      />

      {/* Rideau droit */}
      <motion.div
        style={{ x: rightX }}
        className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-b from-black via-cyan-950 to-black z-20 border-l border-cyan-500/20"
      />
    </section>
  );
}