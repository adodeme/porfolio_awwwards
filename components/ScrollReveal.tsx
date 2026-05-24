"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollReveal() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(titleRef.current, {
      y: -250,
      opacity: 0.2,
      ease: "none",
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top center",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative z-10 overflow-hidden">
      <p
        ref={titleRef}
        className="text-white/30 font-black text-[10vw] leading-none text-center select-none"
      >
        Together, let's revolutionize the digital universe
      </p>
    </section>
  );
}