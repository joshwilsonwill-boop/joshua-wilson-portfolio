"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { usePathname } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const refreshFrame = window.requestAnimationFrame(() => {
      const hash = window.location.hash.slice(1);
      const target = hash ? document.getElementById(decodeURIComponent(hash)) : null;

      if (lenisRef.current) {
        if (target) {
          lenisRef.current.scrollTo(target, {
            offset: -96,
            duration: 0.8,
            force: true,
          });
        } else {
          lenisRef.current.scrollTo(0, { immediate: true, force: true });
        }
      }

      ScrollTrigger.refresh();
    });

    return () => window.cancelAnimationFrame(refreshFrame);
  }, [pathname]);

  useGSAP(() => {
    const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isReducedMotion) return;

    const lenis = new Lenis({
      lerp: 0.08, // Heavier, more deliberate feel
      smoothWheel: true,
      anchors: true,
      stopInertiaOnNavigate: true,
    });
    lenisRef.current = lenis;

    // Velocity-based skew effect on elements with .skew-on-scroll class
    lenis.on("scroll", (e) => {
      ScrollTrigger.update();
      
      // Calculate skew based on velocity
      // Max skew is 2 degrees
      const velocity = e.velocity;
      const skew = Math.max(-2, Math.min(2, velocity * 0.05));
      const skewTargets = document.querySelectorAll(".skew-on-scroll");

      if (skewTargets.length) {
        gsap.to(skewTargets, {
          skewY: skew,
          duration: 0.1,
          overwrite: "auto",
          ease: "power1.out",
        });
      }
    });

    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerCallback);

    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, { scope: containerRef });

  return <div ref={containerRef}>{children}</div>;
}
