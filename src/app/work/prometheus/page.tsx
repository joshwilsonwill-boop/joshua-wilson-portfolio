import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";

export default function PrometheusCaseStudy() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] w-full overflow-x-hidden pt-32 pb-24">
      <div className="w-full max-w-[1200px] mx-auto px-[clamp(1.5rem,5vw,4rem)] flex flex-col gap-24">
        
        {/* Navigation & Breadcrumbs */}
        <div className="flex items-center gap-4 text-[0.875rem] font-mono tracking-widest uppercase text-[var(--text-tertiary)]">
          <Link href="/work" className="hover:text-[var(--text-primary)] transition-colors inline-flex items-center gap-2">
            <ArrowLeft size={16} /> Work
          </Link>
          <span>/</span>
          <span className="text-[var(--text-secondary)]">Prometheus Studio</span>
        </div>

        {/* SECTION 1: Case Study Hero */}
        <section className="flex flex-col gap-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <div className="flex flex-col gap-4">
              <h1 className="font-display font-bold text-[clamp(2.5rem,6vw,5rem)] leading-[1] tracking-tight">
                Prometheus Studio
              </h1>
              <p className="text-[clamp(1.25rem,2.5vw,1.5rem)] text-[var(--text-secondary)] font-medium max-w-[40ch] leading-[1.4]">
                AI-native video production. Upload. Choose a lane. Ship the next edit.
              </p>
            </div>

            <div className="flex flex-col gap-6 w-full md:w-auto shrink-0 border-l border-[rgba(255,255,255,0.1)] pl-6">
              <div>
                <p className="text-[0.75rem] font-mono uppercase tracking-[0.2em] text-[var(--text-tertiary)] mb-1">Role</p>
                <p className="font-medium text-[1rem]">Founding Engineer — Full-Stack & Systems</p>
              </div>
              <div>
                <p className="text-[0.75rem] font-mono uppercase tracking-[0.2em] text-[var(--text-tertiary)] mb-1">Year</p>
                <p className="font-medium text-[1rem]">2026–Present</p>
              </div>
              <div>
                <p className="text-[0.75rem] font-mono uppercase tracking-[0.2em] text-[var(--text-tertiary)] mb-1">Live</p>
                <a href="https://prometheusstudio.tech" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-medium text-[1rem] hover:text-[var(--chrome-light)] transition-colors group">
                  prometheusstudio.tech
                  <ExternalLink size={16} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>

          <div className="w-full aspect-video bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.06)] rounded-[1rem] flex items-center justify-center text-[var(--text-tertiary)] font-mono text-[0.875rem] uppercase tracking-widest">
            [Prometheus Studio Screenshot - 1200x675]
          </div>
        </section>

        {/* SECTION 2: The Problem */}
        <section className="flex flex-col gap-6 max-w-[80ch]">
          <h2 className="font-display font-bold text-[clamp(1.5rem,3vw,2rem)] tracking-tight text-[var(--text-primary)] border-b border-[rgba(255,255,255,0.1)] pb-4">
            The Problem
          </h2>
          <p className="text-[1.125rem] text-[var(--text-secondary)] leading-[1.8]">
            Video editors spend 80% of their time on repetitive cuts, color matching, and caption timing. The creative decisions — the actual art — get buried under technical execution. Prometheus removes the boilerplate so filmmakers can focus on the story.
          </p>
        </section>

        {/* SECTION 3: What I Built */}
        <section className="flex flex-col gap-10">
          <h2 className="font-display font-bold text-[clamp(1.5rem,3vw,2rem)] tracking-tight text-[var(--text-primary)] border-b border-[rgba(255,255,255,0.1)] pb-4">
            What I Built
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            <div className="flex flex-col gap-3">
              <h3 className="font-bold text-[1.25rem]">AI Video Pipeline</h3>
              <p className="text-[0.9375rem] text-[var(--text-secondary)] leading-[1.6]">Transcription (AssemblyAI), content classification, style profiling, caption segmentation, subtitle generation with domain-specific animation (business = pop-up/elastic, lifestyle = fade-in/power2, cinematic = zoom-out/power3).</p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-3 py-1 rounded-full bg-[rgba(255,255,255,0.05)] text-[0.75rem] font-mono text-[var(--text-tertiary)]">AssemblyAI · Groq · Python</span>
              </div>
            </div>
            
            <div className="flex flex-col gap-3">
              <h3 className="font-bold text-[1.25rem]">GPU Render Orchestration</h3>
              <p className="text-[0.9375rem] text-[var(--text-secondary)] leading-[1.6]">Modal warm pools (keep_warm + memory snapshots), RunPod Serverless for RTX 4090 bursts. Cold start impossible for 2-min render target. H100 for 6DOF matting, A10 for standard motion graphics.</p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-3 py-1 rounded-full bg-[rgba(255,255,255,0.05)] text-[0.75rem] font-mono text-[var(--text-tertiary)]">Modal · RunPod · Serverless</span>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="font-bold text-[1.25rem]">6DOF Video Matting</h3>
              <p className="text-[0.9375rem] text-[var(--text-secondary)] leading-[1.6]">RECAM Masters 1.2B parameter model for depth-aware subject extraction. Requires persistent warm pool architecture.</p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-3 py-1 rounded-full bg-[rgba(255,255,255,0.05)] text-[0.75rem] font-mono text-[var(--text-tertiary)]">RECAM Masters · PyTorch</span>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="font-bold text-[1.25rem]">Durable Execution Layer</h3>
              <p className="text-[0.9375rem] text-[var(--text-secondary)] leading-[1.6]">Temporal workflows for crashproof pipeline orchestration. Automatic retry, checkpoint recovery, replaces in-process queue.</p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-3 py-1 rounded-full bg-[rgba(255,255,255,0.05)] text-[0.75rem] font-mono text-[var(--text-tertiary)]">Temporal · Go · Node.js</span>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="font-bold text-[1.25rem]">Real-Time Collaboration</h3>
              <p className="text-[0.9375rem] text-[var(--text-secondary)] leading-[1.6]">WebRTC-based review sessions. Upload to R2, stream with inline playback, tap-to-play, double-tap ±10s seek, playback speed control.</p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-3 py-1 rounded-full bg-[rgba(255,255,255,0.05)] text-[0.75rem] font-mono text-[var(--text-tertiary)]">WebRTC · Cloudflare R2</span>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="font-bold text-[1.25rem]">Revenue & Outreach System</h3>
              <p className="text-[0.9375rem] text-[var(--text-secondary)] leading-[1.6]">Hybrid AI/manual lead gen. AI bot handles $997.99 tier volume outreach. Manual surgical outreach (Loom audits, trigger events) for $5K tier. Calendly → Google Meet auto-generated.</p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-3 py-1 rounded-full bg-[rgba(255,255,255,0.05)] text-[0.75rem] font-mono text-[var(--text-tertiary)]">Automation · AI Bots</span>
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
              <span className="font-mono text-[var(--text-tertiary)] uppercase tracking-widest w-[140px] shrink-0">Frontend</span>
              <span className="text-[var(--text-secondary)]">Next.js, TypeScript, Tailwind CSS, Framer Motion, GSAP</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
              <span className="font-mono text-[var(--text-tertiary)] uppercase tracking-widest w-[140px] shrink-0">Backend</span>
              <span className="text-[var(--text-secondary)]">Python, PostgreSQL, Supabase, pgvector</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
              <span className="font-mono text-[var(--text-tertiary)] uppercase tracking-widest w-[140px] shrink-0">AI / ML</span>
              <span className="text-[var(--text-secondary)]">Groq, AssemblyAI, RECAM Masters</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
              <span className="font-mono text-[var(--text-tertiary)] uppercase tracking-widest w-[140px] shrink-0">Infrastructure</span>
              <span className="text-[var(--text-secondary)]">Cloudflare R2, Modal, RunPod, Docker, Temporal</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
              <span className="font-mono text-[var(--text-tertiary)] uppercase tracking-widest w-[140px] shrink-0">Real-Time</span>
              <span className="text-[var(--text-secondary)]">WebRTC</span>
            </div>
          </div>
        </section>

        {/* SECTION 5: Key Metrics */}
        <section className="flex flex-col gap-6">
          <h2 className="font-display font-bold text-[clamp(1.5rem,3vw,2rem)] tracking-tight text-[var(--text-primary)] border-b border-[rgba(255,255,255,0.1)] pb-4">
            Impact & Scale
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.06)] rounded-[1rem] p-6 flex flex-col justify-center">
              <p className="text-[2rem] font-bold font-display text-[var(--chrome-light)] mb-2">2 min</p>
              <p className="text-[0.875rem] text-[var(--text-secondary)] leading-[1.5]">Target render time for 10-min videos via warm GPU pools.</p>
            </div>
            <div className="bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.06)] rounded-[1rem] p-6 flex flex-col justify-center">
              <p className="text-[2rem] font-bold font-display text-[var(--chrome-light)] mb-2">1.2B</p>
              <p className="text-[0.875rem] text-[var(--text-secondary)] leading-[1.5]">Parameters in 6DOF matting model for depth-aware extraction.</p>
            </div>
            <div className="bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.06)] rounded-[1rem] p-6 flex flex-col justify-center">
              <p className="text-[2rem] font-bold font-display text-[var(--chrome-light)] mb-2">3 Tiers</p>
              <p className="text-[0.875rem] text-[var(--text-secondary)] leading-[1.5]">Revenue modeling across $997, $2,500, and $5,000 packages.</p>
            </div>
            <div className="bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.06)] rounded-[1rem] p-6 flex flex-col justify-center">
              <p className="text-[2rem] font-bold font-display text-[var(--chrome-light)] mb-2">100%</p>
              <p className="text-[0.875rem] text-[var(--text-secondary)] leading-[1.5]">Crashproof durability with Temporal automatic retry & recovery.</p>
            </div>
          </div>
        </section>

        {/* SECTION 6: Gallery */}
        <section className="flex flex-col gap-6">
          <h2 className="font-display font-bold text-[clamp(1.5rem,3vw,2rem)] tracking-tight text-[var(--text-primary)] border-b border-[rgba(255,255,255,0.1)] pb-4">
            Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="w-full aspect-video bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.06)] rounded-[1rem] flex items-center justify-center text-[var(--text-tertiary)] font-mono text-[0.75rem] md:text-[0.875rem] uppercase tracking-widest text-center px-4">
              [Landing Page Screenshot - 16:9]
            </div>
            <div className="w-full aspect-video bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.06)] rounded-[1rem] flex items-center justify-center text-[var(--text-tertiary)] font-mono text-[0.75rem] md:text-[0.875rem] uppercase tracking-widest text-center px-4">
              [Dashboard / Editor UI - 16:9]
            </div>
            <div className="w-full aspect-video bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.06)] rounded-[1rem] flex items-center justify-center text-[var(--text-tertiary)] font-mono text-[0.75rem] md:text-[0.875rem] uppercase tracking-widest text-center px-4 md:col-span-2 lg:col-span-1">
              [Mobile Editor View - 16:9]
            </div>
          </div>
        </section>

        {/* SECTION 7: Lessons & Reflection */}
        <section className="flex flex-col gap-6 max-w-[80ch]">
          <h2 className="font-display font-bold text-[clamp(1.5rem,3vw,2rem)] tracking-tight text-[var(--text-primary)] border-b border-[rgba(255,255,255,0.1)] pb-4">
            Lessons & Reflection
          </h2>
          <ul className="list-disc pl-5 flex flex-col gap-4 text-[1.125rem] text-[var(--text-secondary)] leading-[1.6]">
            <li><strong className="text-[var(--text-primary)] font-medium">Warm pools are non-negotiable</strong> for GPU-heavy AI products. Cold starts kill user trust.</li>
            <li><strong className="text-[var(--text-primary)] font-medium">Temporal durable execution is essential</strong> for production pipelines with paying clients. In-process queues die silently.</li>
            <li><strong className="text-[var(--text-primary)] font-medium">The grid UI</strong> for structured diversity + human feedback is a teaching tool, not the product. Production is 99% automated with outlier detection.</li>
            <li><strong className="text-[var(--text-primary)] font-medium">Client-specific correction heads</strong> (~10MB each) are the real moat, not the base model.</li>
          </ul>
        </section>

        {/* SECTION 8: CTA */}
        <section className="flex flex-col sm:flex-row gap-6 items-center justify-center md:justify-start pt-12 border-t border-[rgba(255,255,255,0.1)]">
          <a 
            href="https://prometheusstudio.tech" 
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
