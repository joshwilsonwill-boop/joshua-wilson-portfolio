"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ScrollRevealText from "../components/ScrollRevealText";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

type Project = {
  title: string;
  tag: string;
  desc: string;
  tags: string[];
  image?: string;
  placeholderText?: string;
  link?: string;
};

const PROJECTS: Project[] = [
  {
    title: "PROMETHEUS",
    tag: "STEALTH",
    desc: "An AI-native video editing platform with 6DOF video matting, RL feedback loops, and GPU-orchestrated rendering. Built for creators who refuse to compromise on quality.",
    tags: ["Next.js", "WebGL", "Rust"],
    image: "/images/prometheus-landing.png",
    link: "/work/prometheus",
  },
  {
    title: "PULSE",
    tag: "INFRASTRUCTURE COMMAND CENTER",
    desc: "Real-time 3D visualization of GPU clusters, render queues, and pipeline health. Built to prove systems architecture isn't just backend — it's observable, beautiful, and alive.",
    tags: ["WebGL", "WebSockets", "React"],
    image: "/images/pulse-dashboard.jpg",
    link: "https://pulse-infra.vercel.app",
  },
  {
    title: "FORGE",
    tag: "AI LANDING PAGE BUILDER",
    desc: "Describe your product, get a deployable landing page in 30 seconds. End-to-end AI-native product design — prompt to preview to export.",
    tags: ["Next.js", "AI", "Tailwind"],
    image: "/images/forge-dashboard.jpg",
    link: "https://forge-ai.vercel.app",
  },
  {
    title: "AURA",
    tag: "3D SPATIAL UI KIT",
    desc: "UI primitives for the spatial web. Liquid chrome, glass refraction, holographic text — copy, paste, ship. A design system built for founders who want interfaces that feel alive.",
    tags: ["React", "Three.js", "Framer Motion"],
    image: "/images/aura-ui-kit.jpg",
    link: "https://aura-ui.vercel.app",
  },
];

export default function Work() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const cards = containerRef.current.querySelectorAll(".project-card");
    
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
    <section id="work" ref={containerRef} className="w-full max-w-[1400px] mx-auto px-[clamp(1.5rem,5vw,4rem)] py-[clamp(6rem,15vh,12rem)]">
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
        <div>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight text-[var(--text-primary)] font-display mb-2">Featured Projects</h2>
          <ScrollRevealText className="text-[1rem] text-[var(--text-secondary)]">Work that speaks for itself.</ScrollRevealText>
        </div>
        <div className="hidden md:block">
          <Link href="/work" className="group inline-flex items-center gap-2 text-[1rem] font-medium text-[var(--text-primary)] hover:text-[var(--chrome-light)] transition-colors">
            <span className="relative">
              View All Work
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[var(--chrome-mid)] transition-all duration-300 group-hover:w-full" />
            </span>
            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {PROJECTS.map((project, idx) => (
          <Link
            key={idx}
            href={project.link || "/work"}
            className="project-card group flex flex-col bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.06)] hover:border-[rgba(255,255,255,0.12)] hover:-translate-y-1 transition-all duration-300 rounded-[1rem] overflow-hidden"
          >
            {/* Thumbnail */}
            <div className="w-full aspect-video relative overflow-hidden bg-[var(--bg-surface)] border-b border-[rgba(255,255,255,0.04)]">
              {project.image ? (
                <Image
                  src={project.image} 
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover grayscale transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 group-hover:grayscale-0"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-[#111] grayscale transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 group-hover:grayscale-0 group-hover:bg-[#1a1a1a]">
                  <span className="text-[var(--text-tertiary)] font-mono text-sm tracking-widest text-center px-6 opacity-60">
                    {project.placeholderText}
                  </span>
                </div>
              )}
            </div>
            
            {/* Content (Asymmetric padding) */}
            <div className="flex flex-col pt-8 pb-10 pl-[clamp(1.5rem,4vw,3.5rem)] pr-[clamp(1.5rem,2vw,2rem)] flex-1">
              <span className="text-[0.75rem] font-mono tracking-[0.2em] uppercase text-[var(--text-tertiary)] mb-4 block">
                {project.tag}
              </span>
              
              <h3 className="font-display font-bold text-[clamp(1.5rem,3vw,2rem)] tracking-tight text-[var(--text-primary)] leading-[1.1] mb-4 transition-colors group-hover:text-[var(--chrome-light)]">
                {project.title}
              </h3>
              
              <p className="text-[0.875rem] md:text-[1rem] text-[var(--text-secondary)] leading-[1.6] mb-8 line-clamp-3">
                {project.desc}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full border border-[rgba(255,255,255,0.1)] text-[0.75rem] font-mono text-[var(--text-secondary)]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="md:hidden mt-12 flex justify-center">
        <Link href="/work" className="group inline-flex items-center gap-2 text-[1rem] font-medium text-[var(--text-primary)] hover:text-[var(--chrome-light)] transition-colors">
          <span className="relative">
            View All Work
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[var(--chrome-mid)] transition-all duration-300 group-hover:w-full" />
          </span>
          <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
