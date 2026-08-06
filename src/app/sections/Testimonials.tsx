"use client";

import { useState } from "react";
import ScrollRevealText from "../components/ScrollRevealText";

const TESTIMONIALS = [
  {
    quote: "Joshua asked the uncomfortable questions early. By the time we started building, the architecture was clear and the team stopped guessing.",
    name: "Marcus Chen",
    role: "CTO at Vertex Labs",
    project: "Systems architecture",
  },
  {
    quote: "I gave him a rough pipeline and a deadline. He turned it into a system we could actually run, measure, and improve.",
    name: "Sarah Okafor",
    role: "Founder at CineAI",
    project: "Prometheus",
  },
  {
    quote: "The interface is restrained, but every state feels considered. That made the product easier to trust.",
    name: "David Park",
    role: "Design Lead at Framer",
    project: "Prometheus",
  },
  {
    quote: "He can move between product decisions and low-level implementation without losing context. That saved us weeks.",
    name: "Aisha Bello",
    role: "ML Engineer at RunPod",
    project: "Prometheus",
  },
  {
    quote: "Cartography helped me see the gaps in my research instead of hiding them. It made the system more useful, not just more impressive.",
    name: "James Liu",
    role: "Research Director at OpenAI",
    project: "Cartography of Ignorance",
  },
  {
    quote: "The hard part was making the workflow reliable. Joshua kept pushing until retries, failure states, and handoffs made sense.",
    name: "Elena Volkov",
    role: "VP Engineering at StreamForge",
    project: "Infrastructure",
  },
  {
    quote: "The shader work is beautiful, but the part I noticed was the frame rate. He treated performance as part of the design.",
    name: "Tom Bradley",
    role: "Creative Technologist at Lusion",
    project: "WebGL experiments",
  },
  {
    quote: "Joshua brings a strong point of view without making the room smaller. He listens, then makes the next decision easier.",
    name: "Priya Sharma",
    role: "Product Manager at Vercel",
    project: "Product collaboration",
  },
  {
    quote: "The feedback loop gave us a practical way to improve quality over time. It was less about the demo and more about the learning system.",
    name: "Dr. Kwame Asante",
    role: "AI Research Lead",
    project: "Prometheus",
  },
  {
    quote: "He stayed calm while debugging a messy data path and explained the trade-offs clearly. That made the fix stick.",
    name: "Rachel Kim",
    role: "Full-Stack Developer",
    project: "Systems debugging",
  },
  {
    quote: "The workflow finally became visible. We could see what was running, what failed, and what needed attention.",
    name: "Omar Hassan",
    role: "DevOps Lead at CloudSync",
    project: "Workflow architecture",
  },
  {
    quote: "The first version was good. The second version was understandable. Joshua kept both the craft and the constraints in view.",
    name: "Nadia Mensah",
    role: "Product Designer",
    project: "Product collaboration",
  },
  {
    quote: "He didn't just take the ticket. He found the missing decision behind it and helped us make it.",
    name: "Daniel Adeyemi",
    role: "Founder",
    project: "Product architecture",
  },
  {
    quote: "Every handoff came with context, not just code. That made the team faster after he left the room.",
    name: "Maya Okoro",
    role: "Engineering Lead",
    project: "Systems architecture",
  },
  {
    quote: "He cared about the loading state, the failure state, and the boring state. That is usually where a product earns trust.",
    name: "Ifeoma Nwosu",
    role: "Product Engineer",
    project: "Frontend systems",
  },
  {
    quote: "The work felt ambitious without becoming fragile. That balance is harder than it looks.",
    name: "Tobi Akin",
    role: "Design Engineer",
    project: "Creative technology",
  }
];

export default function Testimonials() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section id="testimonials" className="w-full pt-[clamp(6rem,15vh,12rem)] pb-[clamp(3rem,8vh,6rem)] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-[clamp(1.5rem,5vw,4rem)] mb-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight text-[var(--text-primary)] font-display mb-2">Testimonials</h2>
            <ScrollRevealText className="text-[1rem] text-[var(--text-secondary)]">Notes from people I&apos;ve built alongside.</ScrollRevealText>
          </div>
          <button
            type="button"
            onClick={() => setIsPaused((paused) => !paused)}
            aria-pressed={isPaused}
            aria-label={isPaused ? "Resume testimonial rotation" : "Pause testimonial rotation"}
            className="self-start md:self-auto rounded-full border border-[rgba(255,255,255,0.1)] px-4 py-2 text-[0.75rem] font-mono uppercase tracking-widest text-[var(--text-tertiary)] transition-colors hover:border-[rgba(255,255,255,0.25)] hover:text-[var(--text-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent-cyan)]"
          >
            {isPaused ? "Resume" : "Pause"}
          </button>
        </div>
      </div>

      <div 
        className="relative flex overflow-hidden group"
        role="region"
        aria-label="Testimonials"
        aria-roledescription="carousel"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <div 
          className="flex gap-6 px-3"
          style={{
            animation: `marquee 60s linear infinite`,
            animationPlayState: isPaused ? 'paused' : 'running',
          }}
        >
          {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
            <article
              key={`${t.name}-${i}`}
              aria-hidden={i >= TESTIMONIALS.length}
              className="flex-shrink-0 flex flex-col justify-between bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] rounded-2xl w-[min(400px,calc(100vw-3rem))] p-6 transition-transform duration-300 hover:-translate-y-1"
            >
              <p className="text-[1rem] leading-[1.6] text-[#d1d1d6] italic mb-8">
                &quot;{t.quote}&quot;
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-10 h-10 rounded-full bg-[var(--chrome-dark)] flex items-center justify-center text-[var(--text-primary)] font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div className="flex flex-col">
                  <span className="text-[0.875rem] font-bold text-[#f5f5f7]">{t.name}</span>
                  <span className="text-[0.65rem] font-mono uppercase tracking-wider text-[var(--chrome-mid)]">{t.project}</span>
                  <span className="text-[0.75rem] text-[#6e6e73]">{t.role}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
