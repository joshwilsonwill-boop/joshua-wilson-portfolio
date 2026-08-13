"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ScrollRevealText from "../components/ScrollRevealText";

gsap.registerPlugin(ScrollTrigger);

const LAB_EXPERIMENTS = [
  {
    title: "Gravitational Cursor",
    desc: "Every mouse movement warps a particle field via WebGL compute shaders.",
    link: "#",
    metric: "60fps · 10k particles",
  },
  {
    title: "Liquid Chrome Type",
    desc: "Real-time metallic text with adjustable light angle, roughness, and iridescence.",
    link: "#",
    metric: "Custom GLSL",
  },
  {
    title: "Procedural City",
    desc: "Buildings grow and light up based on Spotify audio frequency analysis.",
    link: "#",
    metric: "Web Audio API + Three.js",
  },
  {
    title: "Temporal Viz",
    desc: "3D force-directed graph of durable execution states.",
    link: "#",
    metric: "D3 + WebGL",
  },
];

export default function Lab() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const cards = containerRef.current.querySelectorAll(".lab-card");
    
    gsap.fromTo(
      cards,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "cubic-bezier(0.16, 1, 0.3, 1)",
        stagger: 0.15,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          once: true,
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section id="lab" ref={containerRef} className="w-full max-w-[1400px] mx-auto px-[clamp(1.5rem,5vw,4rem)] py-[clamp(6rem,15vh,12rem)]">
      <div className="mb-16">
        <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight text-[var(--text-primary)] font-display mb-2">LAB</h2>
        <ScrollRevealText className="text-[1rem] text-[var(--text-secondary)]">The weird experiments and technical toys.</ScrollRevealText>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {LAB_EXPERIMENTS.map((lab, idx) => (
          <a
            key={idx}
            href={lab.link}
            target="_blank"
            rel="noopener noreferrer"
            className="lab-card group flex flex-col bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.06)] hover:border-[rgba(255,255,255,0.12)] hover:-translate-y-1 transition-all duration-300 rounded-[1rem] overflow-hidden"
          >
            <div className="flex flex-col pt-8 pb-10 pl-[clamp(1.5rem,4vw,3.5rem)] pr-[clamp(1.5rem,2vw,2rem)] flex-1">
              
              <h3 className="font-display font-bold text-[clamp(1.5rem,3vw,2rem)] tracking-tight text-[var(--text-primary)] leading-[1.1] mb-4 transition-colors group-hover:text-[var(--chrome-light)]">
                {lab.title}
              </h3>
              
              <p className="text-[0.875rem] md:text-[1rem] text-[var(--text-secondary)] leading-[1.6] mb-8 line-clamp-3">
                {lab.desc}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="px-3 py-1 rounded-full border border-[rgba(255,255,255,0.1)] text-[0.75rem] font-mono text-[var(--text-tertiary)] group-hover:text-[var(--text-secondary)] group-hover:border-[rgba(255,255,255,0.15)] transition-colors duration-300">
                  {lab.metric}
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
