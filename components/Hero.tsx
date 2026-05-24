"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative z-10 h-screen flex flex-col justify-center items-center text-center px-6 backdrop-blur-sm">
        <motion.h1
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="text-7xl md:text-[10rem] font-black text-white tracking-tight"
        >
        ADODEME
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