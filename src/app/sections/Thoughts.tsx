"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ScrollRevealText from "../components/ScrollRevealText";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const POSTS = [
  {
    date: "May 5, 2025",
    title: "Building Trust Through Clear Design",
    excerpt: "How thoughtful visual choices create a stronger sense of reliability for modern brands.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200",
  },
  {
    date: "Jun 16, 2025",
    title: "The Role of Art Direction in Branding",
    excerpt: "Why visual direction helps brands create emotion and a distinct point of view.",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1200",
  },
];

export default function Thoughts() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const cards = containerRef.current.querySelectorAll(".post-card");
    
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
    <section id="thoughts" ref={containerRef} className="w-full max-w-[1400px] mx-auto px-[clamp(1.5rem,5vw,4rem)] py-[clamp(6rem,15vh,12rem)]">
      <div className="mb-16">
        <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight text-[var(--text-primary)] font-display mb-4">Thoughts</h2>
        <ScrollRevealText className="text-[1rem] text-[var(--text-secondary)] max-w-[50ch] leading-[1.6]">
          See how I shape ideas with clarity and craft — explore my blog.
        </ScrollRevealText>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-16">
        {POSTS.map((post, idx) => (
          <a 
            key={idx}
            href="#"
            className="post-card group flex flex-col gap-6 bg-transparent hover:bg-[rgba(255,255,255,0.02)] transition-colors p-4 -mx-4 rounded-2xl"
          >
            <div className="w-full aspect-video rounded-xl overflow-hidden relative border border-[rgba(255,255,255,0.04)]">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover grayscale transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 group-hover:grayscale-0"
                loading="lazy"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <span className="text-[0.75rem] font-mono text-[var(--text-tertiary)] uppercase tracking-wider">{post.date}</span>
              <h3 className="text-[clamp(1.25rem,2.5vw,1.75rem)] font-bold text-[var(--text-primary)] leading-tight group-hover:text-[var(--chrome-light)] transition-colors">
                {post.title}
              </h3>
              <p className="text-[0.875rem] text-[var(--text-secondary)] leading-[1.6] line-clamp-2 mt-2">
                {post.excerpt}
              </p>
            </div>
          </a>
        ))}
      </div>

      <div>
        <a href="#" className="group inline-flex items-center gap-2 text-[1rem] font-medium text-[var(--text-primary)] hover:text-[var(--chrome-light)] transition-colors">
          <span className="relative">
            View All Posts
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[var(--chrome-mid)] transition-all duration-300 group-hover:w-full" />
          </span>
          <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  );
}
