"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Navigation from "../components/Navigation";
import ScrollRevealText from "../components/ScrollRevealText";
import Footer from "../sections/Footer";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

// TODO: Add live links to projects
const PROJECTS = [
  {
    title: "Prometheus",
    tag: "STEALTH",
    desc: "An AI-native video editing platform with 6DOF video matting, RL feedback loops, and GPU-orchestrated rendering. Built for creators who refuse to compromise on quality.",
    tags: ["Next.js", "WebGL", "Rust", "Python"],
    image: "https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "Cartography of Ignorance",
    tag: "PERSONAL SYSTEM",
    desc: "A personal knowledge management system built on Notion, custom Python pipelines, and graph databases. It maps what I don't know so I can navigate what I do.",
    tags: ["React", "Python", "Neo4j"],
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "Portfolio v1",
    tag: "THIS SITE",
    desc: "This very site — engineered for zero friction, maximum impact. Liquid chrome shader, scroll-driven animations, and a build pipeline that deploys in seconds.",
    tags: ["Next.js", "GSAP", "Three.js"],
    image: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "More coming soon.",
    tag: "FUTURE",
    desc: "I am always building. More case studies and open source contributions will be published here as they ship.",
    tags: ["TBD"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200",
  },
];

export default function WorkPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const cards = containerRef.current.querySelectorAll(".work-grid-card");

    // Hero entrance
    gsap.fromTo(
      ".work-hero-text",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: "cubic-bezier(0.16, 1, 0.3, 1)", stagger: 0.1 }
    );

    // Cards entrance
    gsap.fromTo(
      cards,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "cubic-bezier(0.16, 1, 0.3, 1)",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".work-grid",
          start: "top 80%",
        },
      }
    );

    // Subtle parallax on images
    cards.forEach((card) => {
      const img = card.querySelector("img");
      if (img) {
        gsap.to(img, {
          yPercent: 15,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    });
  }, { scope: containerRef });

  return (
    <main ref={containerRef} className="relative w-full flex flex-col min-h-screen bg-[var(--bg-primary)] overflow-x-hidden">
      <Navigation />

      {/* Background Gradient to match void theme */}
      <div className="fixed inset-0 z-[-1] pointer-events-none bg-gradient-to-br from-[#050505] via-[#0a0a0f] to-[#050505]" />

      <section className="w-full max-w-[1600px] mx-auto px-[clamp(1.5rem,5vw,4rem)] pt-[clamp(8rem,20vh,12rem)] pb-12">
        <Link href="/" className="inline-flex items-center gap-2 text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors mb-12 text-sm font-mono uppercase tracking-widest group">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <h1 className="work-hero-text text-[clamp(3rem,10vw,8rem)] font-display font-bold leading-[0.9] tracking-tight text-[var(--text-primary)] mb-6">
          Selected<br />Work.
        </h1>
        
        <div className="work-hero-text max-w-[600px]">
          <ScrollRevealText className="text-[clamp(1rem,1.5vw,1.25rem)] text-[var(--text-secondary)] leading-[1.6]">
            A few things I've built. Some public, some stealth, all deliberate.
          </ScrollRevealText>
        </div>
      </section>

      <section className="w-full max-w-[1600px] mx-auto px-[clamp(1.5rem,5vw,4rem)] pb-[clamp(6rem,15vh,12rem)]">
        <div className="work-grid grid grid-cols-1 md:grid-cols-2 gap-[clamp(2rem,4vw,3rem)] masonry-style-grid">
          {PROJECTS.map((project, idx) => (
            <a 
              key={idx}
              href="#"
              className={`work-grid-card group relative w-full rounded-[1rem] overflow-hidden bg-[var(--bg-surface)] aspect-[4/3] md:aspect-auto ${idx % 2 !== 0 ? 'md:mt-24 md:aspect-[3/4]' : 'md:aspect-[4/3]'}`}
            >
              {/* Image Container with Parallax wrapper */}
              <div className="absolute inset-[-10%] w-[120%] h-[120%]">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  loading="lazy"
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-[rgba(10,10,15,0.4)] to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute inset-0 p-[clamp(1.5rem,3vw,3rem)] flex flex-col justify-end">
                <span className="text-[0.75rem] font-mono tracking-[0.2em] uppercase text-[var(--chrome-light)] mb-3 block transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  {project.tag}
                </span>
                
                <h3 className="font-display font-bold text-[clamp(2rem,4vw,3rem)] tracking-tight text-white leading-[1.1] mb-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] drop-shadow-2xl">
                  {project.title}
                </h3>
                
                <div className="flex flex-wrap gap-2 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] delay-75">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1.5 rounded-full bg-[rgba(255,255,255,0.1)] backdrop-blur-md border border-[rgba(255,255,255,0.1)] text-[0.75rem] font-mono text-white shadow-xl">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
