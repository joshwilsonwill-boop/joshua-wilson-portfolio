"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isReducedMotion) return;

    const lenis = new Lenis({
      lerp: 0.08, // Heavier, more deliberate feel
      smoothWheel: true,
    });

    // Velocity-based skew effect on elements with .skew-on-scroll class
    lenis.on("scroll", (e) => {
      ScrollTrigger.update();
      
      // Calculate skew based on velocity
      // Max skew is 2 degrees
      const velocity = e.velocity;
      const skew = Math.max(-2, Math.min(2, velocity * 0.05));
      
      gsap.to(".skew-on-scroll", {
        skewY: skew,
        duration: 0.1,
        overwrite: "auto",
        ease: "power1.out",
      });
    });

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000);
      });
      lenis.destroy();
    };
  }, { scope: containerRef });

  return <div ref={containerRef}>{children}</div>;
}
