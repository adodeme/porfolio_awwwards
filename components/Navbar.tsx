"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="backdrop-blur-xl bg-cyan-500/5 border border-cyan-400/20 rounded-full px-8 py-4 shadow-[0_0_30px_rgba(0,255,255,.15)]">
        <ul className="flex gap-8 text-white">
          <li>
            <a href="#hero">Accueil</a>
          </li>
          <li>
            <a href="#about">À propos</a>
          </li>
          <li>
            <a href="#projects">Projets</a>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
}