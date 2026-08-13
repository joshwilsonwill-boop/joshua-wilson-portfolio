import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";

export default function AuraCaseStudy() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] w-full overflow-x-hidden pt-32 pb-24">
      <div className="w-full max-w-[1200px] mx-auto px-[clamp(1.5rem,5vw,4rem)] flex flex-col gap-24">
        
        {/* Navigation & Breadcrumbs */}
        <div className="flex items-center gap-4 text-[0.875rem] font-mono tracking-widest uppercase text-[var(--text-tertiary)]">
          <Link href="/work" className="hover:text-[var(--text-primary)] transition-colors inline-flex items-center gap-2">
            <ArrowLeft size={16} /> Work
          </Link>
          <span>/</span>
          <span className="text-[var(--text-secondary)]">AURA</span>
        </div>

        {/* SECTION 1: Case Study Hero */}
        <section className="flex flex-col gap-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <div className="flex flex-col gap-4">
              <h1 className="font-display font-bold text-[clamp(2.5rem,6vw,5rem)] leading-[1] tracking-tight">
                AURA
              </h1>
              <p className="text-[clamp(1.25rem,2.5vw,1.5rem)] text-[var(--text-secondary)] font-medium max-w-[40ch] leading-[1.4]">
                UI primitives for the spatial web. A design system built for founders who want interfaces that feel alive.
              </p>
            </div>

            <div className="flex flex-col gap-6 w-full md:w-auto shrink-0 border-l border-[rgba(255,255,255,0.1)] pl-6">
              <div>
                <p className="text-[0.75rem] font-mono uppercase tracking-[0.2em] text-[var(--text-tertiary)] mb-1">Role</p>
                <p className="font-medium text-[1rem]">Open Source Creator</p>
              </div>
              <div>
                <p className="text-[0.75rem] font-mono uppercase tracking-[0.2em] text-[var(--text-tertiary)] mb-1">Year</p>
                <p className="font-medium text-[1rem]">2026</p>
              </div>
              <div>
                <p className="text-[0.75rem] font-mono uppercase tracking-[0.2em] text-[var(--text-tertiary)] mb-1">Live</p>
                <a href="https://aura-ui.vercel.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-medium text-[1rem] hover:text-[var(--chrome-light)] transition-colors group">
                  aura-ui.vercel.app
                  <ExternalLink size={16} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>

          <div className="w-full aspect-video bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.06)] rounded-[1rem] flex items-center justify-center text-[var(--text-tertiary)] font-mono text-[0.875rem] uppercase tracking-widest bg-center bg-cover" style={{ backgroundImage: 'url(/images/aura-ui-kit.jpg)' }}>
          </div>
        </section>

        {/* SECTION 2: The Problem */}
        <section className="flex flex-col gap-6 max-w-[80ch]">
          <h2 className="font-display font-bold text-[clamp(1.5rem,3vw,2rem)] tracking-tight text-[var(--text-primary)] border-b border-[rgba(255,255,255,0.1)] pb-4">
            The Problem
          </h2>
          <p className="text-[1.125rem] text-[var(--text-secondary)] leading-[1.8]">
            Modern web applications are visually flat. Adding 3D depth to the browser using pure WebGL or Three.js is complex and completely unapproachable for 99% of frontend developers who simply want to add a premium touch without writing raw shader code.
          </p>
        </section>

        {/* SECTION 3: What I Built */}
        <section className="flex flex-col gap-10">
          <h2 className="font-display font-bold text-[clamp(1.5rem,3vw,2rem)] tracking-tight text-[var(--text-primary)] border-b border-[rgba(255,255,255,0.1)] pb-4">
            What I Built
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            <div className="flex flex-col gap-3">
              <h3 className="font-bold text-[1.25rem]">React Three Fiber Integration</h3>
              <p className="text-[0.9375rem] text-[var(--text-secondary)] leading-[1.6]">Packaged complex 3D scenes and lighting setups into incredibly simple declarative React components that can be used just like standard UI elements.</p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-3 py-1 rounded-full bg-[rgba(255,255,255,0.05)] text-[0.75rem] font-mono text-[var(--text-tertiary)]">React Three Fiber</span>
              </div>
            </div>
            
            <div className="flex flex-col gap-3">
              <h3 className="font-bold text-[1.25rem]">Liquid Chrome Shaders</h3>
              <p className="text-[0.9375rem] text-[var(--text-secondary)] leading-[1.6]">Engineered custom GLSL fragment shaders for beautiful reflective and refractive glass materials that distort DOM content sitting behind the canvas.</p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-3 py-1 rounded-full bg-[rgba(255,255,255,0.05)] text-[0.75rem] font-mono text-[var(--text-tertiary)]">WebGL · GLSL</span>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="font-bold text-[1.25rem]">Zero-Config Animations</h3>
              <p className="text-[0.9375rem] text-[var(--text-secondary)] leading-[1.6]">Integrated directly with Framer Motion 3D to allow for physics-based layout animations on 3D elements, without wrestling with render loops.</p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-3 py-1 rounded-full bg-[rgba(255,255,255,0.05)] text-[0.75rem] font-mono text-[var(--text-tertiary)]">Framer Motion 3D</span>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="font-bold text-[1.25rem]">Accessible Primitives</h3>
              <p className="text-[0.9375rem] text-[var(--text-secondary)] leading-[1.6]">Used Radix UI under the hood to ensure that while visually a 3D interface, it remains perfectly readable by screen readers and navigable via keyboard.</p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-3 py-1 rounded-full bg-[rgba(255,255,255,0.05)] text-[0.75rem] font-mono text-[var(--text-tertiary)]">Radix UI · A11y</span>
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
              <span className="font-mono text-[var(--text-tertiary)] uppercase tracking-widest w-[140px] shrink-0">Framework</span>
              <span className="text-[var(--text-secondary)]">React, Next.js</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
              <span className="font-mono text-[var(--text-tertiary)] uppercase tracking-widest w-[140px] shrink-0">3D Engine</span>
              <span className="text-[var(--text-secondary)]">Three.js, React Three Fiber, WebGL, GLSL</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
              <span className="font-mono text-[var(--text-tertiary)] uppercase tracking-widest w-[140px] shrink-0">Animation</span>
              <span className="text-[var(--text-secondary)]">Framer Motion, GSAP</span>
            </div>
          </div>
        </section>

        {/* SECTION 8: CTA */}
        <section className="flex flex-col sm:flex-row gap-6 items-center justify-center md:justify-start pt-12 border-t border-[rgba(255,255,255,0.1)]">
          <a 
            href="https://aura-ui.vercel.app" 
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
