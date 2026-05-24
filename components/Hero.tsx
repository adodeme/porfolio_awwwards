"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative z-10 h-screen flex flex-col justify-center items-center text-center px-6 backdrop-blur-sm">
        <motion.h1
        initial={{
        opacity: 0,
        scale: 0.7,
        }}

        animate={{
        opacity: 1,
        scale: 1,
        }}

        transition={{
        duration: 1.5,
        delay: 0.5,
        }}
        className="text-7xl md:text-[11rem] font-black text-white leading-none"
        style={{
        textShadow:
            "0 0 20px #f3df85, 0 0 40px #f5efb6, 0 0 80px #f1accf",
        }}>
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