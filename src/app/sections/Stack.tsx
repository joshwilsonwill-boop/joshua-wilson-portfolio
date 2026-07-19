"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const STACK = [
  { name: "Next.js", desc: "App Router, server components, static export" },
  { name: "TypeScript", desc: "Type-safe everything" },
  { name: "Tailwind CSS", desc: "Utility-first, design-system native" },
  { name: "Framer Motion", desc: "React animation orchestration" },
  { name: "GSAP", desc: "Scroll-driven timelines, complex sequences" },
  { name: "Three.js / R3F", desc: "WebGL scenes, spatial experiences" },
  { name: "Python", desc: "Automation, data, backend when needed" },
  { name: "Git", desc: "Version control, CI/CD workflows" },
  { name: "Figma", desc: "Design systems, prototyping" },
];

export default function Stack() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const cards = containerRef.current.querySelectorAll(".tech-card");

    gsap.fromTo(
      cards,
      { autoAlpha: 0, scale: 0.95, y: 20 },
      {
        autoAlpha: 1,
        scale: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.05,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="w-full max-w-[1400px] mx-auto px-[clamp(1.5rem,5vw,4rem)] py-[clamp(6rem,15vh,12rem)]"
      id="stack"
    >
      <div className="mb-12">
        <h2 className="text-[clamp(2rem,5vw,4rem)] font-bold tracking-tight mb-2">Current Loop</h2>
        <p className="text-[var(--text-secondary)] text-lg">The tools I reach for, repeatedly.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {STACK.map((tech, index) => (
          <div
            key={index}
            className="tech-card group flex flex-col gap-3 p-6 rounded-xl border border-[rgba(255,255,255,0.06)] bg-[var(--bg-surface)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-[rgba(255,255,255,0.15)] hover:bg-[var(--bg-elevated)]"
          >
            <div className="w-8 h-8 rounded bg-[var(--chrome-dark)] flex items-center justify-center mb-2">
              <div className="w-4 h-4 bg-[var(--text-tertiary)] rounded-sm group-hover:bg-[var(--accent-cyan)] transition-colors" />
            </div>
            <h3 className="font-mono text-[var(--text-primary)] tracking-tight">{tech.name}</h3>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{tech.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
