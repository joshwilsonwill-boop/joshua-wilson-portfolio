"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ScrollRevealText from "../components/ScrollRevealText";

gsap.registerPlugin(ScrollTrigger);

const TESTIMONIALS = [
  {
    quote: "Joshua completely changed how I approach building systems. The attention to detail is not just beautiful, it's actually structured in a way that makes scaling so much easier.",
    name: "Yakoub Kashmiri",
    role: "Marketing Director",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100",
  },
  {
    quote: "Working with Joshua saved me weeks of work. I was able to launch my platform in days, and it still looks fully custom.",
    name: "Daniel K.",
    role: "Indie Maker",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=100",
  },
  {
    quote: "The quality is insane. Clean structure, smooth animations, and super easy to customize. It feels like a premium product from start to finish.",
    name: "Mark M.",
    role: "Startup Founder",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100",
  },
];

export default function Testimonials() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const cards = containerRef.current.querySelectorAll(".testimonial-card");
    
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
    <section id="testimonials" ref={containerRef} className="w-full max-w-[1400px] mx-auto px-[clamp(1.5rem,5vw,4rem)] py-[clamp(6rem,15vh,12rem)]">
      <div className="mb-16">
        <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight text-[var(--text-primary)] font-display mb-2">Testimonials</h2>
        <ScrollRevealText className="text-[1rem] text-[var(--text-secondary)]">What people say.</ScrollRevealText>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TESTIMONIALS.map((t, idx) => (
          <div 
            key={idx}
            className="testimonial-card flex flex-col justify-between bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] rounded-2xl p-6 md:p-8"
          >
            <p className="text-[1rem] leading-[1.6] text-[#d1d1d6] mb-8">
              "{t.quote}"
            </p>
            
            <div className="flex items-center gap-4 mt-auto">
              <img 
                src={t.avatar} 
                alt={t.name}
                className="w-12 h-12 rounded-full object-cover grayscale opacity-80"
                loading="lazy"
              />
              <div className="flex flex-col">
                <span className="text-[0.875rem] font-bold text-[var(--text-primary)]">{t.name}</span>
                <span className="text-[0.75rem] text-[var(--text-tertiary)]">{t.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
