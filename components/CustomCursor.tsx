"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-[9999] w-8 h-8 rounded-full border border-cyan-400"
      style={{
        left: position.x - 16,
        top: position.y - 16,
        boxShadow:
          "0 0 20px #bbf0f0, 0 0 40px #ffbb00",
      }}
    />
  );
}