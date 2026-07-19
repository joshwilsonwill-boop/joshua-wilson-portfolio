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
  { name: "Vercel", desc: "Edge deployment, performance" },
];

export default function Stack() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const cards = containerRef.current.querySelectorAll(".tech-card");

    gsap.fromTo(
      cards,
      { autoAlpha: 0, y: 40, rotateX: 12, transformPerspective: 1000 },
      {
        autoAlpha: 1,
        y: 0,
        rotateX: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.08,
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
      className="w-full max-w-[1400px] mx-auto px-[clamp(1.5rem,5vw,4rem)] py-[clamp(8rem,20vh,16rem)]"
      id="stack"
    >
      <div className="mb-16 md:w-2/3 lg:w-1/2">
        <h2 className="text-[clamp(2rem,5vw,4rem)] font-bold tracking-tight mb-4 skew-on-scroll">Current Loop</h2>
        <p className="text-[var(--text-secondary)] text-lg mb-6 skew-on-scroll">The tools I reach for, repeatedly.</p>
        <p className="text-[var(--text-tertiary)] text-[1rem] leading-[1.7] skew-on-scroll">
          My stack is not a list of buzzwords. It is a loop — a recurrent pattern of technologies I have mastered and combined in dozens of configurations. These are the tools I trust when the deadline is tight and the stakes are high.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {STACK.map((tech, index) => (
          <div
            key={index}
            className="tech-card group flex flex-col gap-3 p-6 rounded-xl border border-[rgba(255,255,255,0.06)] bg-[var(--bg-surface)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-[6px] hover:border-[var(--accent-cyan)] hover:shadow-[0_0_20px_rgba(0,212,255,0.1)] hover:bg-[var(--bg-elevated)]"
          >
            <div className="w-8 h-8 rounded bg-[var(--chrome-dark)] flex items-center justify-center mb-2">
              <div className="w-4 h-4 bg-[var(--text-tertiary)] rounded-sm group-hover:bg-[var(--accent-cyan)] transition-colors duration-300 shadow-[0_0_0_rgba(0,212,255,0)] group-hover:shadow-[0_0_10px_rgba(0,212,255,0.5)]" />
            </div>
            <h3 className="font-mono text-[var(--text-primary)] tracking-tight">{tech.name}</h3>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{tech.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
