"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import MagneticButton from "../components/MagneticButton";

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
  {
    title: "Prometheus",
    desc: "Stealth Project — AI-native video editing platform",
    tags: ["Next.js", "WebGL", "Rust"],
    large: true,
  },
  {
    title: "Cartography of Ignorance",
    desc: "Personal knowledge management system",
    tags: ["React", "Python", "Neo4j"],
    large: false,
  },
  {
    title: "Portfolio v1",
    desc: "This very site, engineered for zero friction",
    tags: ["Next.js", "GSAP", "Three.js"],
    large: false,
  },
];

export default function Work() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const cards = containerRef.current.querySelectorAll(".project-card");

    cards.forEach((card) => {
      gsap.fromTo(
        card,
        { autoAlpha: 0, rotateX: 10, y: 50, transformPerspective: 1000 },
        {
          autoAlpha: 1,
          rotateX: 0,
          y: 0,
          duration: 0.8,
          ease: "cubic-bezier(0.16, 1, 0.3, 1)",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="w-full max-w-[1400px] mx-auto px-[clamp(1.5rem,5vw,4rem)] py-[clamp(6rem,15vh,12rem)]"
      id="work"
    >
      <h2 className="text-[clamp(2rem,5vw,4rem)] font-bold tracking-tight mb-12">Selected Work</h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
        {/* Left Col - Large Feature */}
        <div className="lg:col-span-7 project-card">
          <ProjectCard project={PROJECTS[0]} />
        </div>

        {/* Right Col - Stacked */}
        <div className="lg:col-span-5 flex flex-col gap-6 lg:gap-8">
          <div className="project-card flex-1">
            <ProjectCard project={PROJECTS[1]} />
          </div>
          <div className="project-card flex-1">
            <ProjectCard project={PROJECTS[2]} />
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: any }) {
  return (
    <a
      href="#"
      className="group relative block w-full h-full flex-col overflow-hidden rounded-xl bg-[var(--bg-surface)] border border-[rgba(255,255,255,0.06)] transition-colors hover:border-[rgba(255,255,255,0.15)] flex min-h-[300px]"
    >
      <div className="relative w-full aspect-video overflow-hidden bg-[var(--bg-elevated)] border-b border-[rgba(255,255,255,0.04)]">
        {/* Placeholder for project image */}
        <div className="absolute inset-0 flex items-center justify-center text-[var(--text-tertiary)] font-mono text-sm uppercase tracking-widest transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105">
          Image: {project.title}
        </div>
      </div>
      
      <div className="p-6 md:p-8 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="text-2xl font-bold text-[var(--text-primary)] tracking-tight mb-2">
            {project.title}
          </h3>
          <p className="text-[var(--text-secondary)] mb-6">
            {project.desc}
          </p>
        </div>
        
        <div className="flex items-center justify-between mt-auto">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag: string) => (
              <span key={tag} className="px-3 py-1 rounded-full border border-[rgba(255,255,255,0.1)] text-xs font-mono text-[var(--text-secondary)]">
                {tag}
              </span>
            ))}
          </div>
          <div className="hidden md:block opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
            <MagneticButton className="text-sm font-medium text-[var(--accent-cyan)]">
              View &rarr;
            </MagneticButton>
          </div>
        </div>
      </div>
    </a>
  );
}
