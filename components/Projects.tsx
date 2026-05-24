"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "AI Platform",
    description: "Plateforme SaaS alimentée par l'IA.",
  },
  {
    title: "Crypto Dashboard",
    description: "Tableau de bord temps réel pour les marchés crypto.",
  },
  {
    title: "3D Experience",
    description: "Expérience immersive réalisée avec Three.js.",
  },
];

export default function Projects() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-8 py-32 relative z-10">
      <motion.h2
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-bold text-white mb-20 text-center"
      >
        Projets
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto w-full">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
            }}
            whileHover={{
              y: -15,
              scale: 1.03,
            }}
            className="backdrop-blur-md bg-white/5 border border-cyan-500/20 rounded-3xl p-8"
          >
            <h3 className="text-3xl font-bold text-white mb-4">
              {project.title}
            </h3>

            <p className="text-gray-300">
              {project.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}