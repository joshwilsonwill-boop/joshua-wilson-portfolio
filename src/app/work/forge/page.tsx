import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";

export default function ForgeCaseStudy() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] w-full overflow-x-hidden pt-32 pb-24">
      <div className="w-full max-w-[1200px] mx-auto px-[clamp(1.5rem,5vw,4rem)] flex flex-col gap-24">
        
        {/* Navigation & Breadcrumbs */}
        <div className="flex items-center gap-4 text-[0.875rem] font-mono tracking-widest uppercase text-[var(--text-tertiary)]">
          <Link href="/work" className="hover:text-[var(--text-primary)] transition-colors inline-flex items-center gap-2">
            <ArrowLeft size={16} /> Work
          </Link>
          <span>/</span>
          <span className="text-[var(--text-secondary)]">FORGE</span>
        </div>

        {/* SECTION 1: Case Study Hero */}
        <section className="flex flex-col gap-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <div className="flex flex-col gap-4">
              <h1 className="font-display font-bold text-[clamp(2.5rem,6vw,5rem)] leading-[1] tracking-tight">
                FORGE
              </h1>
              <p className="text-[clamp(1.25rem,2.5vw,1.5rem)] text-[var(--text-secondary)] font-medium max-w-[40ch] leading-[1.4]">
                Describe your product, get a deployable landing page in 30 seconds. End-to-end AI-native product design.
              </p>
            </div>

            <div className="flex flex-col gap-6 w-full md:w-auto shrink-0 border-l border-[rgba(255,255,255,0.1)] pl-6">
              <div>
                <p className="text-[0.75rem] font-mono uppercase tracking-[0.2em] text-[var(--text-tertiary)] mb-1">Role</p>
                <p className="font-medium text-[1rem]">Founding Engineer — Frontend & Product</p>
              </div>
              <div>
                <p className="text-[0.75rem] font-mono uppercase tracking-[0.2em] text-[var(--text-tertiary)] mb-1">Year</p>
                <p className="font-medium text-[1rem]">2026–Present</p>
              </div>
              <div>
                <p className="text-[0.75rem] font-mono uppercase tracking-[0.2em] text-[var(--text-tertiary)] mb-1">Live</p>
                <a href="https://forge-ai.vercel.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-medium text-[1rem] hover:text-[var(--chrome-light)] transition-colors group">
                  forge-ai.vercel.app
                  <ExternalLink size={16} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>

          <div className="w-full aspect-video bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.06)] rounded-[1rem] flex items-center justify-center text-[var(--text-tertiary)] font-mono text-[0.875rem] uppercase tracking-widest bg-center bg-cover" style={{ backgroundImage: 'url(/images/forge-dashboard.jpg)' }}>
          </div>
        </section>

        {/* SECTION 2: The Problem */}
        <section className="flex flex-col gap-6 max-w-[80ch]">
          <h2 className="font-display font-bold text-[clamp(1.5rem,3vw,2rem)] tracking-tight text-[var(--text-primary)] border-b border-[rgba(255,255,255,0.1)] pb-4">
            The Problem
          </h2>
          <p className="text-[1.125rem] text-[var(--text-secondary)] leading-[1.8]">
            Building landing pages from scratch is slow. Existing website builders are bloated, and most AI builders produce generic, uninspired slop. Founders need high-end design that compiles to clean, perfectly responsive React code—instantly.
          </p>
        </section>

        {/* SECTION 3: What I Built */}
        <section className="flex flex-col gap-10">
          <h2 className="font-display font-bold text-[clamp(1.5rem,3vw,2rem)] tracking-tight text-[var(--text-primary)] border-b border-[rgba(255,255,255,0.1)] pb-4">
            What I Built
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            <div className="flex flex-col gap-3">
              <h3 className="font-bold text-[1.25rem]">LLM Generation Engine</h3>
              <p className="text-[0.9375rem] text-[var(--text-secondary)] leading-[1.6]">A custom structured output pipeline utilizing OpenAI to synthesize raw text descriptions into a full JSON representation of the page layout, copy, and components.</p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-3 py-1 rounded-full bg-[rgba(255,255,255,0.05)] text-[0.75rem] font-mono text-[var(--text-tertiary)]">OpenAI API · TypeScript</span>
              </div>
            </div>
            
            <div className="flex flex-col gap-3">
              <h3 className="font-bold text-[1.25rem]">Real-time Live Preview</h3>
              <p className="text-[0.9375rem] text-[var(--text-secondary)] leading-[1.6]">An entirely custom virtual DOM renderer that maps the generated JSON directly into a live, interactive React tree without reloading or deploying.</p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-3 py-1 rounded-full bg-[rgba(255,255,255,0.05)] text-[0.75rem] font-mono text-[var(--text-tertiary)]">React · Webpack</span>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="font-bold text-[1.25rem]">Next.js / Tailwind Compiler</h3>
              <p className="text-[0.9375rem] text-[var(--text-secondary)] leading-[1.6]">When the user is satisfied with the preview, the system compiles the layout to a production-ready Next.js project with Tailwind CSS utility classes and provides a downloadable ZIP.</p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-3 py-1 rounded-full bg-[rgba(255,255,255,0.05)] text-[0.75rem] font-mono text-[var(--text-tertiary)]">Next.js · Tailwind</span>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="font-bold text-[1.25rem]">AI Design System Constraints</h3>
              <p className="text-[0.9375rem] text-[var(--text-secondary)] leading-[1.6]">Implemented strict prompt engineering to force the AI to adhere to premium design system tokens (e.g. limiting colors to a curated monochromatic palette and enforcing high-contrast typography).</p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-3 py-1 rounded-full bg-[rgba(255,255,255,0.05)] text-[0.75rem] font-mono text-[var(--text-tertiary)]">Design Systems · Prompt Engineering</span>
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
              <span className="text-[var(--text-secondary)]">Next.js, TypeScript, Tailwind CSS, Framer Motion</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
              <span className="font-mono text-[var(--text-tertiary)] uppercase tracking-widest w-[140px] shrink-0">Backend / Edge</span>
              <span className="text-[var(--text-secondary)]">Vercel Edge Functions, PostgreSQL</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
              <span className="font-mono text-[var(--text-tertiary)] uppercase tracking-widest w-[140px] shrink-0">AI Pipeline</span>
              <span className="text-[var(--text-secondary)]">OpenAI API (GPT-4o), LangChain</span>
            </div>
          </div>
        </section>

        {/* SECTION 8: CTA */}
        <section className="flex flex-col sm:flex-row gap-6 items-center justify-center md:justify-start pt-12 border-t border-[rgba(255,255,255,0.1)]">
          <a 
            href="https://forge-ai.vercel.app" 
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
