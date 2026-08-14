"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ScrollRevealText from "../components/ScrollRevealText";

import Link from "next/link";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const NOTES = [
  {
    date: "Aug 2026",
    title: "Why Modal's keep_warm isn't enough for real-time rendering",
    excerpt: "I thought keeping one GPU warm would solve cold starts. It doesn't. Memory snapshots, queue depth, and the 2-minute wall are a different problem.",
    readTime: "8-min read",
    slug: "modals-keep-warm",
    image: "/images/note-modal.jpg",
  },
  {
    date: "Jul 2026",
    title: "I tried to build 6DOF matting on a T4 and learned why H100s exist",
    excerpt: "12 hours of training. 4GB VRAM. The model crashed on frame 3. Here's the cost analysis and the pivot.",
    readTime: "6-min read",
    slug: "6dof-matting-t4",
    image: "/images/note-t4.jpg",
  },
  {
    date: "Jun 2026",
    title: "The grid UI is a teaching tool, not a product",
    excerpt: "Structured diversity + human feedback works for exploration. For production, you need outlier detection and automated correction heads. We learned this the hard way.",
    readTime: "5-min read",
    slug: "grid-ui-teaching-tool",
    image: "/images/note-grid.jpg",
  },
];

export default function FieldNotes() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const items = containerRef.current.querySelectorAll(".field-note-item");
    
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
    <section id="field-notes" ref={containerRef} className="w-full max-w-[1400px] mx-auto px-[clamp(1.5rem,5vw,4rem)] py-[clamp(6rem,15vh,12rem)]">
      <div className="mb-16">
        <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight text-[var(--text-primary)] font-display mb-2">FIELD NOTES</h2>
        <ScrollRevealText className="text-[1rem] text-[var(--text-secondary)]">Investigations, failures, rabbit holes, and things I'm learning.</ScrollRevealText>
      </div>

      <div className="flex flex-col border-t border-[rgba(255,255,255,0.04)]">
        {NOTES.map((note, idx) => (
          <Link
            key={idx}
            href={`/field-notes/${note.slug}`}
            className="field-note-item group py-8 lg:py-12 border-b border-[rgba(255,255,255,0.04)] flex flex-col hover:bg-[rgba(255,255,255,0.01)] transition-colors px-4 -mx-4 rounded-xl gap-6 md:flex-row md:items-start"
          >
            <div className="w-full md:w-32 shrink-0 flex flex-col gap-1">
               <p className="font-mono text-[0.875rem] text-[var(--text-tertiary)] opacity-60 group-hover:text-[var(--text-secondary)] transition-colors">{note.date}</p>
               <span className="font-mono text-[0.75rem] text-[var(--text-tertiary)] opacity-60 mt-1">{note.readTime}</span>
            </div>
            
            <div className="flex flex-col gap-3 flex-1">
               <h3 className="text-[clamp(1.25rem,2.5vw,1.75rem)] font-bold text-[var(--text-primary)] group-hover:text-[var(--chrome-light)] transition-colors leading-tight">{note.title}</h3>
               <p className="text-[1rem] text-[var(--text-secondary)] leading-[1.6] max-w-[80ch] opacity-80">{note.excerpt}</p>
            </div>
            
            <div className="w-full md:w-[240px] shrink-0 mt-4 md:mt-0 ml-auto aspect-video rounded-lg overflow-hidden border border-[rgba(255,255,255,0.04)] bg-[var(--bg-surface)]">
              <Image
                src={note.image} 
                alt={note.title}
                width={400}
                height={225}
                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
