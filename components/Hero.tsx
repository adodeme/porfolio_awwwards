"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative z-10 h-screen flex flex-col justify-center items-center text-center px-6 backdrop-blur-sm">
        <motion.h1
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="text-7xl md:text-[11rem] font-black text-white leading-none"
        style={{
        textShadow:
            "0 0 20px #ffd000, 0 0 40px #ffe600, 0 0 80px #ff0080",
        }}
        >
        Flodias 
        </motion.h1>

        <p className="mt-6 text-cyan-300 text-xl md:text-2xl tracking-[0.3em] uppercase">
            Creative Developer
        </p>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.5 }}
        className="mt-12"
      >
        <motion.button
        whileHover={{
            scale: 1.1,
            boxShadow: "0 0 40px #00ffff",
        }}
        whileTap={{ scale: 0.95 }}
        className="px-8 py-4 rounded-full border border-cyan-400 text-cyan-400"
        >
            Explorer
        </motion.button>
      </motion.div>
    </section>
  );
}