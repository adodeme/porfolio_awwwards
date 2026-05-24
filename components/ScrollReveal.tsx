"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function ScrollReveal() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: "power4.out",
      }
    );
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative z-10">
      <h2
        ref={titleRef}
        className="text-white font-black text-6xl md:text-[12rem] text-center"
      >
        CREATE
        <br />
        THE FUTURE
      </h2>
    </section>
  );
}