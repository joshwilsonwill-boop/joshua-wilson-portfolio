"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollProgress() {
  const progressRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!progressRef.current) return;
    
    gsap.to(progressRef.current, {
      scaleX: 1,
      ease: "none",
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top top",
        end: "bottom bottom",
        scrub: 0,
      },
    });
  }, { scope: progressRef });

  return (
    <div
      ref={progressRef}
      className="fixed top-0 left-0 h-[2px] w-full bg-[var(--accent-cyan)] z-50 origin-left scale-x-0 pointer-events-none"
    />
  );
}
