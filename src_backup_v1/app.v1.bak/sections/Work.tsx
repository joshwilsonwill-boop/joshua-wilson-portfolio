"use client";

import { useRef, useEffect, useState } from "react";
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
  const pinRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);

  // We use a state to ensure we only run the GSAP logic matching the active breakpoint.
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const checkIsDesktop = () => setIsDesktop(window.matchMedia("(min-width: 1024px)").matches);
    checkIsDesktop();
    window.addEventListener('resize', checkIsDesktop);
    return () => window.removeEventListener('resize', checkIsDesktop);
  }, []);

  useGSAP(() => {
    if (!pinRef.current || !trackRef.current || !mobileRef.current) return;

    if (isDesktop) {
      // Desktop: Horizontal Scroll
      const scrollWidth = trackRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;
      
      // Calculate how far to move the track so the last item touches the right edge
      const distance = scrollWidth - viewportWidth;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinRef.current,
          start: "top top",
          end: () => `+=${distance + window.innerHeight}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        }
      });

      tl.to(trackRef.current, { x: -distance, ease: "none" });

      // Card entrance animation inside horizontal scroll
      const cards = trackRef.current.querySelectorAll(".project-card-desktop");
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { scale: 0.92, rotateY: 8, transformPerspective: 1000 },
          {
            scale: 1,
            rotateY: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              containerAnimation: tl,
              start: "left 90%",
              end: "left 40%",
              scrub: 1,
            }
          }
        );
      });
    } else {
      // Mobile: Vertical Stack
      const cards = mobileRef.current.querySelectorAll(".project-card-mobile");
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { autoAlpha: 0, y: 50 },
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
    }

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, { scope: pinRef, dependencies: [isDesktop] });

  return (
    <section id="work" className="w-full relative bg-[var(--bg-primary)]">
      
      {/* DESKTOP LAYOUT (Horizontal Scroll) */}
      <div ref={pinRef} className="hidden lg:flex w-full h-screen items-center overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none px-[4rem] py-[8rem] flex flex-col justify-start z-10">
          <div className="max-w-[400px]">
            <h2 className="text-[4rem] font-bold tracking-tight mb-4 skew-on-scroll">Selected Work</h2>
            <p className="text-[var(--text-secondary)] text-lg skew-on-scroll">
              A few things I've built. Some public, some stealth, all deliberate.
            </p>
          </div>
        </div>

        <div ref={trackRef} className="flex h-full items-center pt-[20vh] pl-[40vw] pr-[10vw] gap-16 w-max">
          {PROJECTS.map((project, idx) => (
            <ProjectCard key={idx} project={project} className="project-card-desktop w-[45vw] max-w-[800px] h-[60vh] min-h-[500px]" />
          ))}
        </div>
      </div>

      {/* MOBILE LAYOUT (Vertical Stack) */}
      <div ref={mobileRef} className="flex lg:hidden flex-col w-full px-[clamp(1.5rem,5vw,4rem)] py-[8rem]">
        <div className="mb-12">
          <h2 className="text-[clamp(2.5rem,8vw,4rem)] font-bold tracking-tight mb-4 skew-on-scroll">Selected Work</h2>
          <p className="text-[var(--text-secondary)] text-lg skew-on-scroll">
            A few things I've built. Some public, some stealth, all deliberate.
          </p>
        </div>

        <div className="flex flex-col gap-12">
          {PROJECTS.map((project, idx) => (
            <ProjectCard key={idx} project={project} className="project-card-mobile w-full min-h-[400px]" />
          ))}
        </div>
      </div>

    </section>
  );
}

function ProjectCard({ project, className }: { project: any; className?: string }) {
  return (
    <a
      href="#"
      className={`group relative flex flex-col overflow-hidden rounded-xl bg-[var(--bg-surface)] border border-[rgba(255,255,255,0.06)] transition-colors hover:border-[rgba(255,255,255,0.15)] ${className}`}
    >
      <div className="relative w-full h-1/2 min-h-[250px] overflow-hidden bg-[var(--bg-elevated)] border-b border-[rgba(255,255,255,0.04)]">
        {/* Placeholder for project image */}
        <div className="absolute inset-0 flex items-center justify-center text-[var(--text-tertiary)] font-mono text-xl tracking-[0.2em] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]">
          {project.imageText}
        </div>
      </div>
      
      <div className="p-8 flex flex-col flex-1 justify-between gap-6">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <h3 className="text-2xl font-bold text-[var(--text-primary)] tracking-tight">
              {project.title}
            </h3>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono tracking-wider font-bold bg-[rgba(255,255,255,0.1)] text-[var(--text-primary)]">
              {project.tag}
            </span>
          </div>
          <p className="text-[var(--text-secondary)] leading-[1.6] text-[0.95rem]">
            {project.desc}
          </p>
        </div>
        
        <div className="flex items-end justify-between mt-auto">
          <div className="flex flex-wrap gap-2 max-w-[70%]">
            {project.tags.map((tag: string) => (
              <span key={tag} className="px-3 py-1 rounded-full border border-[rgba(255,255,255,0.1)] text-xs font-mono text-[var(--text-secondary)]">
                {tag}
              </span>
            ))}
          </div>
          <div className="opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
            <MagneticButton className="text-sm font-medium text-[var(--accent-cyan)] whitespace-nowrap">
              View Project &rarr;
            </MagneticButton>
          </div>
        </div>
      </div>
    </a>
  );
}
