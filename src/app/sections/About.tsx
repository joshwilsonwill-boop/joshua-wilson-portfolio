"use client";

import { useRef } from "react";
import ImageParallax from "../components/ImageParallax";
import ScrollRevealText from "../components/ScrollRevealText";
import { ArrowRight } from "lucide-react";

export default function About() {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section 
      id="about" 
      ref={containerRef}
      className="relative w-full bg-[var(--bg-primary)] pt-12 pb-32"
    >
      <div className="w-full max-w-[1400px] mx-auto px-[clamp(1.5rem,5vw,4rem)] grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left - Image Context (40%) */}
        <div className="md:col-span-5 order-2 md:order-1">
          <div className="relative w-full aspect-[3/4] liquid-chrome-border rounded-[1rem] overflow-hidden">
            <ImageParallax
              src="https://images.unsplash.com/photo-1607743386760-88ac62b89b8a?q=80&w=1000&auto=format&fit=crop"
              alt="Workspace context"
              containerClassName="w-full h-full bg-[var(--bg-surface)]"
            />
          </div>
          <div className="mt-4 flex flex-col gap-1">
            <span className="text-[0.75rem] font-mono tracking-widest text-[var(--text-tertiary)] uppercase">
              Location
            </span>
            <span className="text-[0.875rem] text-[var(--text-secondary)]">
              San Francisco, CA
            </span>
          </div>
        </div>

        {/* Right - Text Content (60%) */}
        <div className="md:col-span-7 order-1 md:order-2 flex flex-col pt-0 md:pt-8">
          <div className="mb-8">
            <span className="text-[1rem] font-mono tracking-[0.2em] uppercase text-[var(--text-tertiary)] block mb-6">
              / The Builder
            </span>
            <h2 className="text-[clamp(2rem,6vw,4rem)] font-display font-bold text-[var(--text-primary)] leading-[1.1] tracking-tight mb-8">
              Hey!
            </h2>
          </div>
          
          <div className="flex flex-col gap-6 text-[clamp(1rem,1.5vw,1.25rem)] text-[var(--text-secondary)] leading-[1.6]">
            <ScrollRevealText>
              I am a creative technologist and full-stack engineer who specializes in the intersection of high-end design and robust systems engineering. Most developers can build functional apps; most designers can create beautiful comps. I do both, seamlessly.
            </ScrollRevealText>
            
            <ScrollRevealText>
              Over the last 6 years, I've architected platforms that scale to millions of users, designed interactions that win Awwwards, and helped stealth startups turn raw ideas into fundable products.
            </ScrollRevealText>

            <ScrollRevealText>
              My philosophy is simple: write less code, build better systems, and never compromise on the user's sensory experience.
            </ScrollRevealText>
          </div>

          <div className="mt-12">
            <a href="#contact" className="group inline-flex items-center gap-2 text-[1rem] font-medium text-[var(--text-primary)] hover:text-[var(--chrome-light)] transition-colors">
              <span className="relative">
                Let's Talk
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[var(--chrome-mid)] transition-all duration-300 group-hover:w-full" />
              </span>
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
