"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ScrollRevealText from "../components/ScrollRevealText";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// TODO: Replace with real posts
// Sample post placeholders
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
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-8">
        <div className="max-w-[600px]">
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight text-[var(--text-primary)] font-display mb-4">Thoughts</h2>
          <ScrollRevealText className="text-[1rem] text-[var(--text-secondary)] leading-[1.6]">
            See how I shape ideas with clarity and craft — explore my blog.
          </ScrollRevealText>
        </div>
        <div className="hidden md:block">
          <a href="/thoughts" className="group inline-flex items-center gap-2 text-[1rem] font-medium text-[var(--text-primary)] hover:text-[var(--chrome-light)] transition-colors">
            <span className="relative">
              View All Posts
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[var(--chrome-mid)] transition-all duration-300 group-hover:w-full" />
            </span>
            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      <div className="flex flex-col border-t border-[rgba(255,255,255,0.04)]">
        {POSTS.map((post, idx) => (
          <a 
            key={idx}
            href="/thoughts"
            className="post-item group py-8 lg:py-12 border-b border-[rgba(255,255,255,0.04)] grid grid-cols-1 md:grid-cols-12 gap-6 items-start hover:bg-[rgba(255,255,255,0.01)] transition-colors px-4 -mx-4 rounded-xl"
          >
            <div className="md:col-span-3 flex flex-col pt-1">
              <span className="text-[0.875rem] font-mono text-[var(--text-tertiary)] group-hover:text-[var(--text-secondary)] transition-colors">
                {post.date}
              </span>
            </div>
            
            <div className="md:col-span-6 flex flex-col gap-3">
              <h3 className="text-[clamp(1.25rem,2.5vw,1.75rem)] font-bold text-[var(--text-primary)] group-hover:text-[var(--chrome-light)] transition-colors">
                {post.title}
              </h3>
              <p className="text-[1rem] text-[var(--text-secondary)] leading-[1.6]">
                {post.excerpt}
              </p>
            </div>
            
            <div className="md:col-span-3 w-full md:w-3/4 ml-auto aspect-video rounded-lg overflow-hidden border border-[rgba(255,255,255,0.04)] bg-[var(--bg-surface)] mt-4 md:mt-0">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </a>
        ))}
      </div>

      <div className="md:hidden mt-12 flex justify-center">
        <a href="/thoughts" className="group inline-flex items-center gap-2 text-[1rem] font-medium text-[var(--text-primary)] hover:text-[var(--chrome-light)] transition-colors">
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
