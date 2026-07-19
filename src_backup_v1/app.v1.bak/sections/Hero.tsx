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

    // Subtitle and micro-copy fades in after name completes
    tl.fromTo(
      ".hero-subtitle, .hero-micro",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 1.2, stagger: 0.2 }
    );

    // Scroll indicator animation
    const scrollTl = gsap.timeline({ repeat: -1 });
    scrollTl
      .fromTo(".scroll-line", { scaleY: 0, originY: 0 }, { scaleY: 1, duration: 1, ease: "power2.inOut" })
      .to(".scroll-line", { scaleY: 0, originY: 1, duration: 1, ease: "power2.inOut" });

    // Hide scroll indicator on first scroll and fade out hero text slightly
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

    gsap.to(".hero-content", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
      y: 100,
      opacity: 0,
      ease: "none"
    });
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[100vh] flex flex-col items-center justify-center px-[clamp(1.5rem,5vw,4rem)]"
    >
      <div className="hero-content text-center z-10 flex flex-col items-center justify-center mix-blend-difference skew-on-scroll">
        <TextReveal
          as="h1"
          text="JOSHUA WILSON"
          className="text-[clamp(3rem,10vw,8rem)] font-bold tracking-[-0.03em] leading-none mb-4 text-[var(--text-primary)] skew-on-scroll"
        />
        <p className="hero-subtitle text-[clamp(1.2rem,2vw,1.5rem)] font-light tracking-wide text-[var(--text-secondary)] opacity-0 skew-on-scroll mb-4">
          Engineering the Invisible
        </p>
        <p className="hero-micro max-w-[50ch] text-[clamp(0.9rem,1.2vw,1rem)] text-[var(--text-tertiary)] opacity-0 leading-[1.7] skew-on-scroll">
          I build systems that feel alive. From WebGL shaders to serverless infrastructure, every pixel and every packet is intentional.
        </p>
      </div>

      <div className="scroll-indicator absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-10 mix-blend-difference">
        <span className="text-[0.75rem] uppercase tracking-widest text-[var(--text-tertiary)] font-mono">
          Scroll to explore
        </span>
        <div className="w-[1px] h-12 bg-[var(--chrome-dark)] relative overflow-hidden">
          <div className="scroll-line absolute top-0 left-0 w-full h-full bg-[var(--text-primary)] origin-top" />
        </div>
      </div>
    </section>
  );
}
