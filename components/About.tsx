"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="min-h-screen flex items-center justify-center px-8 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-4xl"
      >
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">
          À propos
        </h2>

        <p className="text-gray-300 text-xl leading-relaxed">
          Je crée des expériences web immersives, performantes et modernes.
          Mon objectif est de transformer des idées en produits numériques
          élégants avec React, Next.js, Three.js et l'écosystème moderne du web.
        </p>
      </motion.div>
    </section>
  );
}