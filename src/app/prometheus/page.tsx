"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowLeft, Activity, Cpu, Network } from "lucide-react";
import ScrollRevealText from "../components/ScrollRevealText";

gsap.registerPlugin(ScrollTrigger);

export default function PrometheusCaseStudy() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    // Header entrance
    gsap.fromTo(
      ".hero-text",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: "power3.out", delay: 0.2 }
    );

    // Section fades
    const sections = containerRef.current.querySelectorAll("section");
    sections.forEach((sec) => {
      gsap.fromTo(
        sec,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: sec,
            start: "top 80%",
          },
        }
      );
    });
  }, { scope: containerRef });

  return (
    <main ref={containerRef} className="min-h-screen pt-32 pb-24 px-[clamp(1.5rem,5vw,4rem)] max-w-[1200px] mx-auto text-[var(--text-primary)]">
      
      {/* Back Button */}
      <Link href="/#work" className="inline-flex items-center gap-2 text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors mb-16 group">
        <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
        <span className="text-[0.875rem] font-mono tracking-widest uppercase">Back to Portfolio</span>
      </Link>

      {/* Hero */}
      <header className="mb-32">
        <div className="flex items-center gap-4 mb-6 hero-text">
          <div className="h-[1px] w-12 bg-[var(--chrome-mid)]"></div>
          <span className="text-[0.75rem] font-mono tracking-[0.2em] uppercase text-[var(--chrome-light)]">Case Study</span>
        </div>
        <h1 className="hero-text text-[clamp(3rem,8vw,6rem)] font-display font-bold leading-[0.9] tracking-tight mb-8">
          PROMETHEUS
        </h1>
        <p className="hero-text text-[clamp(1.25rem,3vw,1.75rem)] text-[var(--text-secondary)] max-w-3xl leading-relaxed">
          An AI-native video editing platform. 6DOF video matting, RL feedback loops, and bare-metal GPU-orchestrated rendering built for creators who refuse to compromise on quality.
        </p>
      </header>

      {/* The Problem / Solution */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
        <section>
          <h2 className="text-sm font-mono text-[var(--text-tertiary)] uppercase tracking-widest mb-6 border-b border-[rgba(255,255,255,0.1)] pb-2">The Problem</h2>
          <ScrollRevealText className="text-lg leading-relaxed text-[var(--text-secondary)]">
            Existing video pipelines are constrained by browser memory and slow serverless execution limits. Creators spend more time waiting for renders than actually editing. The industry accepted 1080p proxies and jagged edge matting as the standard.
          </ScrollRevealText>
        </section>
        
        <section>
          <h2 className="text-sm font-mono text-[var(--chrome-light)] uppercase tracking-widest mb-6 border-b border-[rgba(255,255,255,0.1)] pb-2">The Solution</h2>
          <ScrollRevealText className="text-lg leading-relaxed text-[var(--text-secondary)]">
            Prometheus bypasses standard limits by orchestrating dedicated A100 GPU clusters via WebRTC and Rust microservices. The result is real-time 4K rendering and frame-perfect AI depth mapping that runs natively at 60fps in the browser. I don't write code. I write inevitability.
          </ScrollRevealText>
        </section>
      </div>

      {/* Architecture Diagram Visualization */}
      <section className="mb-32">
        <h2 className="text-2xl font-bold font-display mb-8">System Architecture</h2>
        <div className="w-full aspect-[16/9] md:aspect-[21/9] bg-[#0a0a0f] rounded-2xl border border-[rgba(255,255,255,0.05)] relative overflow-hidden flex items-center justify-center shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          {/* Abstract Nodes representing stack */}
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(0, 212, 255, 0.1) 0%, transparent 50%)' }}></div>
          
          <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-4xl px-8 z-10 gap-8">
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full border border-[#00d4ff]/30 flex items-center justify-center bg-black/50 shadow-[0_0_20px_rgba(0,212,255,0.1)]">
                <Network className="text-[#00d4ff]" />
              </div>
              <span className="font-mono text-xs tracking-widest text-[var(--text-secondary)]">WebGL Client</span>
            </div>
            
            <div className="flex-1 h-[1px] bg-gradient-to-r from-[#00d4ff]/10 via-[#00d4ff]/50 to-[#00d4ff]/10 relative hidden md:block">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[0.6rem] font-mono text-[#00d4ff]/50 bg-[#0a0a0f] px-2">WebRTC</div>
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="w-20 h-20 rounded-xl border border-white/20 flex items-center justify-center bg-black/50 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                <Cpu className="text-white" size={32} />
              </div>
              <span className="font-mono text-xs tracking-widest text-[var(--text-secondary)]">Rust Orchestrator</span>
            </div>

            <div className="flex-1 h-[1px] bg-gradient-to-r from-white/10 via-[#00d4ff]/50 to-white/10 relative hidden md:block">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[0.6rem] font-mono text-[#00d4ff]/50 bg-[#0a0a0f] px-2">gRPC</div>
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full border border-[#00d4ff]/30 flex items-center justify-center bg-black/50 shadow-[0_0_20px_rgba(0,212,255,0.1)]">
                <Activity className="text-[#00d4ff]" />
              </div>
              <span className="font-mono text-xs tracking-widest text-[var(--text-secondary)]">A100 GPU Cluster</span>
            </div>
          </div>
        </div>
      </section>

      {/* GPU Orchestration Metrics */}
      <section className="mb-32">
        <h2 className="text-2xl font-bold font-display mb-8">Performance Telemetry</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Latency", value: "14ms" },
            { label: "Throughput", value: "60 FPS" },
            { label: "Model VRAM", value: "24GB" },
            { label: "Resolution", value: "4K Native" }
          ].map((metric, i) => (
            <div key={i} className="bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] p-6 rounded-xl flex flex-col gap-2">
              <span className="text-[0.75rem] font-mono tracking-widest uppercase text-[var(--text-tertiary)]">{metric.label}</span>
              <span className="text-3xl font-display font-bold text-[var(--chrome-light)]">{metric.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[rgba(255,255,255,0.1)] pt-12 flex justify-between items-center">
        <span className="font-mono text-sm text-[var(--text-tertiary)]">© 2026 Prometheus Dev</span>
        <Link href="/#work" className="font-mono text-sm text-[var(--chrome-light)] hover:text-white transition-colors">
          RETURN
        </Link>
      </footer>
    </main>
  );
}
