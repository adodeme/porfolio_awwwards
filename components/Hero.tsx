"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative z-10 h-screen flex flex-col justify-center items-center text-center px-6">
      <motion.h1
        initial={{ opacity: 0, y: 120 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4 }}
        className="text-7xl md:text-9xl font-black text-white"
      >
        JOHN DOE
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-6 text-gray-400 text-xl"
      >
        Creative Full Stack Developer
      </motion.p>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.5 }}
        className="mt-12"
      >
        <button className="px-8 py-4 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition">
          Explorer
        </button>
      </motion.div>
    </section>
  );
}