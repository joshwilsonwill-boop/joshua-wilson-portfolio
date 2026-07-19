"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import TextReveal from "../components/TextReveal";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const tl = gsap.timeline();

    // Subtitle fades in after name completes (TextReveal takes ~0.8s + stagger)
    tl.fromTo(
      ".hero-subtitle",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 1.2 }
    );

    // Scroll indicator animation
    const scrollTl = gsap.timeline({ repeat: -1 });
    scrollTl
      .fromTo(".scroll-line", { scaleY: 0, originY: 0 }, { scaleY: 1, duration: 1, ease: "power2.inOut" })
      .to(".scroll-line", { scaleY: 0, originY: 1, duration: 1, ease: "power2.inOut" });

    // Hide scroll indicator on first scroll
    gsap.to(".scroll-indicator", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=100",
        scrub: true,
      },
      opacity: 0,
      autoAlpha: 0,
    });
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[100vh] flex flex-col items-center justify-center px-[clamp(1.5rem,5vw,4rem)]"
    >
      <div className="text-center z-10 flex flex-col items-center justify-center mix-blend-difference">
        <TextReveal
          as="h1"
          text="JOSHUA WILSON"
          className="text-[clamp(3rem,10vw,8rem)] font-bold tracking-[-0.03em] leading-none mb-4 text-[var(--text-primary)]"
        />
        <p className="hero-subtitle text-[clamp(1.2rem,2vw,1.5rem)] font-light tracking-wide text-[var(--text-secondary)] opacity-0">
          Engineering the Invisible
        </p>
      </div>

      <div className="scroll-indicator absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-10 mix-blend-difference">
        <span className="text-[0.75rem] uppercase tracking-widest text-[var(--text-tertiary)] font-mono">
          Scroll
        </span>
        <div className="w-[1px] h-12 bg-[var(--chrome-dark)] relative overflow-hidden">
          <div className="scroll-line absolute top-0 left-0 w-full h-full bg-[var(--text-primary)] origin-top" />
        </div>
      </div>
    </section>
  );
}
