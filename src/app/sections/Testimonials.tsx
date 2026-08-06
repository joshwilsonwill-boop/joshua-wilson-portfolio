"use client";

import { useState } from "react";
import ScrollRevealText from "../components/ScrollRevealText";

const TESTIMONIALS = [
  {
    quote: "Joshua doesn't write code. He engineers inevitability. Working with him felt like watching a chess grandmaster play five moves ahead.",
    name: "Marcus Chen",
    role: "CTO at Vertex Labs",
    project: "Systems architecture",
  },
  {
    quote: "I gave him a napkin sketch of a video pipeline. Two weeks later, he handed me a GPU-orchestrated render farm with RL feedback loops. Unreal.",
    name: "Sarah Okafor",
    role: "Founder at CineAI",
    project: "Prometheus",
  },
  {
    quote: "The Prometheus editor's liquid chrome UI made our entire design team question their career choices. It's not a tool. It's a statement.",
    name: "David Park",
    role: "Design Lead at Framer",
    project: "Prometheus",
  },
  {
    quote: "He built our 6DOF matting pipeline in Rust while the rest of us were still arguing about JavaScript frameworks. The man is a weapon.",
    name: "Aisha Bello",
    role: "ML Engineer at RunPod",
    project: "Prometheus",
  },
  {
    quote: "Joshua's Cartography of Ignorance system changed how I research. I now know exactly what I don't know. That's terrifying and liberating.",
    name: "James Liu",
    role: "Research Director at OpenAI",
    project: "Cartography of Ignorance",
  },
  {
    quote: "We had a 2-minute render target for 10-minute videos. He hit it using Modal warm pools and Temporal durable execution. I stopped asking how.",
    name: "Elena Volkov",
    role: "VP Engineering at StreamForge",
    project: "Infrastructure",
  },
  {
    quote: "His WebGL shaders don't just look good. They run at 60fps on a 2020 Android. That's not frontend. That's dark magic.",
    name: "Tom Bradley",
    role: "Creative Technologist at Lusion",
    project: "WebGL experiments",
  },
  {
    quote: "Joshua operates at the intersection of 'this is impossible' and 'it's already deployed.' I've stopped using the word impossible around him.",
    name: "Priya Sharma",
    role: "Product Manager at Vercel",
    project: "Product collaboration",
  },
  {
    quote: "The RL feedback loop in Prometheus isn't a feature. It's a moat. No one else is doing quality diversity with human-in-the-loop at this scale.",
    name: "Dr. Kwame Asante",
    role: "AI Research Lead",
    project: "Prometheus",
  },
  {
    quote: "I watched him debug a Supabase pgvector query at 3AM while explaining fluid mechanics aesthetics. The duality is unsettling.",
    name: "Rachel Kim",
    role: "Full-Stack Developer",
    project: "Systems debugging",
  },
  {
    quote: "He turned our entire infrastructure into a Temporal workflow in one weekend. Our previous team spent six months on the same problem.",
    name: "Omar Hassan",
    role: "DevOps Lead at CloudSync",
    project: "Workflow architecture",
  },
  {
    quote: "Joshua's portfolio isn't a portfolio. It's a threat. To every mediocre engineer who thinks 'good enough' is a valid standard.",
    name: "Anonymous",
    role: "Former Competitor",
    project: "Portfolio review",
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
            className="self-start md:self-auto rounded-full border border-[rgba(255,255,255,0.1)] px-4 py-2 text-[0.75rem] font-mono uppercase tracking-widest text-[var(--text-tertiary)] transition-colors hover:border-[rgba(255,255,255,0.25)] hover:text-[var(--text-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent-cyan)]"
          >
            {isPaused ? "Resume" : "Pause"}
          </button>
        </div>
      </div>

      <div 
        className="relative flex overflow-hidden group"
        aria-label="Testimonials"
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
              className="flex-shrink-0 flex flex-col justify-between bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] rounded-2xl w-[400px] p-6 transition-transform duration-300 hover:-translate-y-1"
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
