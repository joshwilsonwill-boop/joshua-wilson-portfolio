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
    tag: "STEALTH",
    desc: "An AI-native video editing platform with 6DOF video matting, RL feedback loops, and GPU-orchestrated rendering. Built for creators who refuse to compromise on quality. Currently in closed beta.",
    tags: ["Next.js", "WebGL", "Rust", "Python"],
    imageText: "PROMETHEUS",
  },
  {
    title: "Cartography of Ignorance",
    tag: "PERSONAL SYSTEM",
    desc: "A personal knowledge management system built on Notion, custom Python pipelines, and graph databases. It maps what I don't know so I can navigate what I do. Used daily for research, writing, and decision-making.",
    tags: ["React", "Python", "Neo4j"],
    imageText: "KNOWLEDGE GRAPH",
  },
  {
    title: "Portfolio v1",
    tag: "THIS SITE",
    desc: "This very site — engineered for zero friction, maximum impact. Liquid chrome shader, scroll-driven animations, and a build pipeline that deploys in seconds. It is both a portfolio and a proof of concept.",
    tags: ["Next.js", "GSAP", "Three.js"],
    imageText: "LIQUID CHROME",
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
        { autoAlpha: 0, y: 30 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );
    });

  }, { scope: containerRef });

  return (
    <section id="work" ref={containerRef} className="w-full relative bg-[var(--bg-primary)] px-[clamp(1.5rem,5vw,4rem)] py-[clamp(8rem,20vh,16rem)] max-w-[1600px] mx-auto">
      <div className="mb-20">
        <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-bold tracking-tight mb-4 font-display text-[var(--text-primary)] skew-on-scroll">Selected Work</h2>
      </div>

      <div className="flex flex-col gap-16 lg:gap-32">
        {PROJECTS.map((project, idx) => (
          <ProjectCard key={idx} project={project} className="project-card" />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, className }: { project: any; className?: string }) {
  return (
    <a
      href="#"
      className={`group relative flex flex-col lg:flex-row gap-8 lg:gap-16 w-full ${className}`}
    >
      <div className="lg:w-1/2 flex flex-col justify-center order-2 lg:order-1 pl-0 lg:pl-[clamp(2rem,6vw,8rem)] pr-0 lg:pr-[2rem]">
        <div className="mb-6">
          <span className="block text-[0.75rem] font-mono tracking-[0.2em] uppercase text-[var(--text-tertiary)] mb-4">
            {project.tag}
          </span>
          <h3 className="font-display font-bold text-[clamp(2rem,4vw,3.5rem)] tracking-tight text-[var(--text-primary)] leading-[1.1] mb-6 transition-colors group-hover:text-[var(--chrome-light)]">
            {project.title}
          </h3>
          <p className="text-[clamp(0.875rem,1.2vw,1.125rem)] text-[var(--text-secondary)] leading-[1.7] max-w-[50ch]">
            {project.desc}
          </p>
        </div>
        
        <div className="flex flex-wrap gap-3 mt-8">
          {project.tags.map((tag: string) => (
            <span key={tag} className="px-4 py-1.5 rounded-full border border-[rgba(255,255,255,0.1)] text-[0.75rem] font-mono text-[var(--text-secondary)]">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="lg:w-1/2 relative min-h-[300px] lg:min-h-[500px] overflow-hidden rounded-[1rem] bg-[var(--bg-surface)] border border-[rgba(255,255,255,0.06)] order-1 lg:order-2">
        <div className="absolute inset-0 flex items-center justify-center text-[var(--text-tertiary)] font-mono text-xl tracking-[0.2em] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]">
          {project.imageText}
        </div>
      </div>
    </a>
  );
}
