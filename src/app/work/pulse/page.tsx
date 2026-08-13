import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";

export default function PulseCaseStudy() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] w-full overflow-x-hidden pt-32 pb-24">
      <div className="w-full max-w-[1200px] mx-auto px-[clamp(1.5rem,5vw,4rem)] flex flex-col gap-24">
        
        {/* Navigation & Breadcrumbs */}
        <div className="flex items-center gap-4 text-[0.875rem] font-mono tracking-widest uppercase text-[var(--text-tertiary)]">
          <Link href="/work" className="hover:text-[var(--text-primary)] transition-colors inline-flex items-center gap-2">
            <ArrowLeft size={16} /> Work
          </Link>
          <span>/</span>
          <span className="text-[var(--text-secondary)]">PULSE</span>
        </div>

        {/* SECTION 1: Case Study Hero */}
        <section className="flex flex-col gap-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <div className="flex flex-col gap-4">
              <h1 className="font-display font-bold text-[clamp(2.5rem,6vw,5rem)] leading-[1] tracking-tight">
                PULSE
              </h1>
              <p className="text-[clamp(1.25rem,2.5vw,1.5rem)] text-[var(--text-secondary)] font-medium max-w-[40ch] leading-[1.4]">
                Real-time 3D visualization of GPU clusters, render queues, and pipeline health.
              </p>
            </div>

            <div className="flex flex-col gap-6 w-full md:w-auto shrink-0 border-l border-[rgba(255,255,255,0.1)] pl-6">
              <div>
                <p className="text-[0.75rem] font-mono uppercase tracking-[0.2em] text-[var(--text-tertiary)] mb-1">Role</p>
                <p className="font-medium text-[1rem]">Lead Systems Visualization</p>
              </div>
              <div>
                <p className="text-[0.75rem] font-mono uppercase tracking-[0.2em] text-[var(--text-tertiary)] mb-1">Year</p>
                <p className="font-medium text-[1rem]">2026</p>
              </div>
              <div>
                <p className="text-[0.75rem] font-mono uppercase tracking-[0.2em] text-[var(--text-tertiary)] mb-1">Live</p>
                <a href="https://pulse-infra.vercel.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-medium text-[1rem] hover:text-[var(--chrome-light)] transition-colors group">
                  pulse-infra.vercel.app
                  <ExternalLink size={16} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>

          <div className="w-full aspect-video bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.06)] rounded-[1rem] flex items-center justify-center text-[var(--text-tertiary)] font-mono text-[0.875rem] uppercase tracking-widest bg-center bg-cover" style={{ backgroundImage: 'url(/images/pulse-dashboard.jpg)' }}>
          </div>
        </section>

        {/* SECTION 2: The Problem */}
        <section className="flex flex-col gap-6 max-w-[80ch]">
          <h2 className="font-display font-bold text-[clamp(1.5rem,3vw,2rem)] tracking-tight text-[var(--text-primary)] border-b border-[rgba(255,255,255,0.1)] pb-4">
            The Problem
          </h2>
          <p className="text-[1.125rem] text-[var(--text-secondary)] leading-[1.8]">
            Monitoring distributed infrastructure usually involves staring at flat 2D line charts on Datadog or Grafana. While effective, it's incredibly difficult to intuitively grasp and debug spatial network bottlenecks, container spin-ups, and GPU clustering issues.
          </p>
        </section>

        {/* SECTION 3: What I Built */}
        <section className="flex flex-col gap-10">
          <h2 className="font-display font-bold text-[clamp(1.5rem,3vw,2rem)] tracking-tight text-[var(--text-primary)] border-b border-[rgba(255,255,255,0.1)] pb-4">
            What I Built
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            <div className="flex flex-col gap-3">
              <h3 className="font-bold text-[1.25rem]">Spatial Node Graph</h3>
              <p className="text-[0.9375rem] text-[var(--text-secondary)] leading-[1.6]">A custom force-directed 3D graph system to visually represent the entire cloud architecture. High-performance rendering capable of displaying over 10,000 active instances simultaneously.</p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-3 py-1 rounded-full bg-[rgba(255,255,255,0.05)] text-[0.75rem] font-mono text-[var(--text-tertiary)]">WebGL · Force-Directed Graph</span>
              </div>
            </div>
            
            <div className="flex flex-col gap-3">
              <h3 className="font-bold text-[1.25rem]">High-Frequency Telemetry Stream</h3>
              <p className="text-[0.9375rem] text-[var(--text-secondary)] leading-[1.6]">Engineered an ultra-low latency WebSocket pipeline reading from a Redis Pub/Sub cluster to stream server health data at 60 updates per second directly into the client.</p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-3 py-1 rounded-full bg-[rgba(255,255,255,0.05)] text-[0.75rem] font-mono text-[var(--text-tertiary)]">WebSockets · Redis · Node.js</span>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="font-bold text-[1.25rem]">Visual Anomaly Detection</h3>
              <p className="text-[0.9375rem] text-[var(--text-secondary)] leading-[1.6]">Instead of setting up threshold alerts in a text log, node failures trigger a cascading visual "pulse" through the network topology, allowing operators to see the exact blast radius of a failing service.</p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-3 py-1 rounded-full bg-[rgba(255,255,255,0.05)] text-[0.75rem] font-mono text-[var(--text-tertiary)]">Visual Systems · Shaders</span>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="font-bold text-[1.25rem]">Command Center Aesthetics</h3>
              <p className="text-[0.9375rem] text-[var(--text-secondary)] leading-[1.6]">Built with an industrial, brutalist UI direction. Raw data, glowing network streams, monospaced data readouts. Observability doesn't just have to work, it can be beautiful.</p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-3 py-1 rounded-full bg-[rgba(255,255,255,0.05)] text-[0.75rem] font-mono text-[var(--text-tertiary)]">UI/UX Design · Data Visualization</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: The Stack */}
        <section className="flex flex-col gap-6">
          <h2 className="font-display font-bold text-[clamp(1.5rem,3vw,2rem)] tracking-tight text-[var(--text-primary)] border-b border-[rgba(255,255,255,0.1)] pb-4">
            The Stack
          </h2>
          <div className="flex flex-col gap-4 text-[0.9375rem]">
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
              <span className="font-mono text-[var(--text-tertiary)] uppercase tracking-widest w-[140px] shrink-0">Client</span>
              <span className="text-[var(--text-secondary)]">React, Next.js, Tailwind CSS</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
              <span className="font-mono text-[var(--text-tertiary)] uppercase tracking-widest w-[140px] shrink-0">Visualization Engine</span>
              <span className="text-[var(--text-secondary)]">WebGL, Custom Shaders</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
              <span className="font-mono text-[var(--text-tertiary)] uppercase tracking-widest w-[140px] shrink-0">Data Streaming</span>
              <span className="text-[var(--text-secondary)]">WebSockets, Redis Pub/Sub, Node.js</span>
            </div>
          </div>
        </section>

        {/* SECTION 8: CTA */}
        <section className="flex flex-col sm:flex-row gap-6 items-center justify-center md:justify-start pt-12 border-t border-[rgba(255,255,255,0.1)]">
          <a 
            href="https://pulse-infra.vercel.app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-2 bg-[var(--text-primary)] text-black px-6 py-3 rounded-full font-medium hover:bg-[var(--chrome-light)] transition-colors"
          >
            View Live Site 
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
          <Link 
            href="/work" 
            className="group flex items-center gap-2 px-6 py-3 rounded-full font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
          >
            Back to All Work
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </section>
        
      </div>
    </main>
  );
}
