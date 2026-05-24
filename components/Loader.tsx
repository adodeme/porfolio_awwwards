"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.floor(Math.random() * 8) + 1;

        if (next >= 100) {
          clearInterval(interval);

          setTimeout(() => {
            setDone(true);
          }, 500);

          return 100;
        }

        return next;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.1,
          }}
          transition={{ duration: 1 }}
          className="fixed inset-0 z-[99999] bg-black flex flex-col items-center justify-center"
        >
          <motion.h1
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
            className="text-white text-5xl font-black"
          >
            ADODEME
          </motion.h1>

          <div className="w-72 h-[2px] bg-white/10 mt-10 overflow-hidden">
            <motion.div
              className="h-full bg-cyan-400"
              style={{
                width: `${progress}%`,
              }}
            />
          </div>

          <p className="text-cyan-300 mt-4 text-xl">
            {progress}%
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}