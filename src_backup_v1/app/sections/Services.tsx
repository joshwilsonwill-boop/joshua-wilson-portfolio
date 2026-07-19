"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ScrollRevealText from "../components/ScrollRevealText";

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  {
    name: "Creative Technology",
    tags: ["WebGL", "Shaders", "Spatial Experiences", "3D Web"],
  },
  {
    name: "Full-Stack Engineering",
    tags: ["Next.js", "Infrastructure", "AI APIs", "Edge Computing"],
  },
  {
    name: "AI-Native Product Design",
    tags: ["Video Intelligence", "RL Systems", "Automation", "GPU Orchestration"],
  },
  {
    name: "Systems Architecture",
    tags: ["Temporal", "Modal", "RunPod", "Docker", "CI/CD"],
  },
];

export default function Services() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const items = containerRef.current.querySelectorAll(".service-item");
    
    gsap.fromTo(
      items,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "cubic-bezier(0.16, 1, 0.3, 1)",
        stagger: 0.1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          once: true,
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section id="services" ref={containerRef} className="w-full max-w-[1400px] mx-auto px-[clamp(1.5rem,5vw,4rem)] py-[clamp(6rem,15vh,12rem)]">
      <div className="mb-16">
        <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight text-[var(--text-primary)] font-display mb-2">Services</h2>
        <ScrollRevealText className="text-[1rem] text-[var(--text-secondary)]">What I do.</ScrollRevealText>
      </div>

      <div className="flex flex-col border-t border-[rgba(255,255,255,0.04)]">
        {SERVICES.map((service, idx) => (
          <div 
            key={idx}
            className="service-item group py-8 lg:py-12 border-b border-[rgba(255,255,255,0.04)] flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-[rgba(255,255,255,0.01)] transition-colors px-4 -mx-4 rounded-xl"
          >
            <h3 className="text-[clamp(1.25rem,2.5vw,1.75rem)] font-bold text-[var(--text-primary)] transition-transform duration-300 group-hover:translate-x-2">
              {service.name}
            </h3>
            
            <div className="flex flex-wrap gap-2 md:justify-end">
              {service.tags.map((tag) => (
                <span 
                  key={tag}
                  className="border border-[rgba(255,255,255,0.08)] rounded-full px-3 py-1 text-[0.75rem] text-[var(--text-tertiary)] transition-colors duration-300 group-hover:text-[var(--text-secondary)] group-hover:border-[rgba(255,255,255,0.15)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
