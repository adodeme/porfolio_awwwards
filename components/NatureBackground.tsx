"use client";

import { useEffect, useState } from "react";

const images = [
  "/images/2w.jpeg",
  "/images/9u.jpg",
  "/images/dS-.jpg",
  "/images/pC_.jpg",
  "/images/Pn.jpg",
  "/images/V3.jpg",
  "/images/VA.jpg",
];

export default function NatureBackground() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-20">
      {images.map((img, i) => (
        <div
          key={img}
          className="absolute inset-0 transition-opacity duration-[2000ms] z-20"
          style={{
            opacity: i === index ? 1 : 0,
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}

      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
}