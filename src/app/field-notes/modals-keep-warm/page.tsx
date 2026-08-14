import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import AudioPlayer from "../../components/AudioPlayer";

export default function ModalsKeepWarmPage() {
  const title = "Why Modal's keep_warm isn't enough for real-time rendering";
  const content = `I thought keeping one GPU warm would solve cold starts. It doesn't. Memory snapshots, queue depth, and the 2-minute wall are a different problem entirely. When you're dealing with massive AI rendering tasks, cold starting a container on a cloud provider like Modal or RunPod takes tens of seconds, sometimes minutes. If you're building a real-time system, that's unacceptable. So, the obvious solution is to keep a pool of GPUs warm. 

However, what the documentation doesn't tell you is that "warm" doesn't necessarily mean "ready to compute immediately". Even if the container is running, the model weights might need to be transferred from CPU RAM to VRAM, or the CUDA context might need to be initialized on the first request. I ran into this wall hard when building Prometheus. We had paying users staring at a loading spinner because the keep_warm instance was warm in name only.

The real solution involved a hybrid approach. We had to implement persistent memory snapshots and aggressively manage our queue depth to ensure requests were routed only to instances that had already warmed their CUDA contexts. We also had to implement a Temporal-backed durable execution layer just to handle the inevitable timeouts when the 2-minute wall hit. It was a brutal week of debugging, but it fundamentally changed how I view GPU orchestration in the cloud.`;

  return (
    <main className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] w-full overflow-x-hidden pt-32 pb-24">
      <div className="w-full max-w-[800px] mx-auto px-[clamp(1.5rem,5vw,4rem)] flex flex-col gap-12">
        
        {/* Navigation & Breadcrumbs */}
        <div className="flex items-center gap-4 text-[0.875rem] font-mono tracking-widest uppercase text-[var(--text-tertiary)]">
          <Link href="/#field-notes" className="hover:text-[var(--text-primary)] transition-colors inline-flex items-center gap-2">
            <ArrowLeft size={16} /> Field Notes
          </Link>
          <span>/</span>
          <span className="text-[var(--text-secondary)]">Infrastructure</span>
        </div>

        <AudioPlayer title={title} content={content} />

        {/* Hero */}
        <header className="flex flex-col gap-6">
          <h1 className="font-display font-bold text-[clamp(2rem,5vw,4rem)] leading-[1.1] tracking-tight text-[var(--text-primary)]">
            {title}
          </h1>
          <div className="flex items-center gap-4 font-mono text-[0.875rem] text-[var(--text-tertiary)] uppercase tracking-widest border-t border-[rgba(255,255,255,0.1)] pt-6">
            <span>Aug 2026</span>
            <span>·</span>
            <span>8-min read</span>
          </div>
        </header>

        {/* Hero Image */}
        <div className="w-full aspect-video relative rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.06)] bg-[var(--bg-surface)]">
          <Image
            src="/images/note-modal.jpg"
            alt={title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Article Body */}
        <article className="prose prose-invert prose-lg max-w-none text-[var(--text-secondary)]">
          <p className="text-[1.25rem] leading-[1.8] text-[var(--text-primary)] font-medium mb-8">
            I thought keeping one GPU warm would solve cold starts. It doesn't. Memory snapshots, queue depth, and the 2-minute wall are a different problem entirely.
          </p>
          <p className="leading-[1.8] mb-6">
            When you're dealing with massive AI rendering tasks, cold starting a container on a cloud provider like Modal or RunPod takes tens of seconds, sometimes minutes. If you're building a real-time system, that's unacceptable. So, the obvious solution is to keep a pool of GPUs warm.
          </p>
          <p className="leading-[1.8] mb-6">
            However, what the documentation doesn't tell you is that "warm" doesn't necessarily mean "ready to compute immediately". Even if the container is running, the model weights might need to be transferred from CPU RAM to VRAM, or the CUDA context might need to be initialized on the first request. I ran into this wall hard when building Prometheus. We had paying users staring at a loading spinner because the keep_warm instance was warm in name only.
          </p>
          <h2 className="text-[1.5rem] font-bold text-[var(--text-primary)] mt-12 mb-6 font-display">The Memory Snapshot Pivot</h2>
          <p className="leading-[1.8] mb-6">
            The real solution involved a hybrid approach. We had to implement persistent memory snapshots and aggressively manage our queue depth to ensure requests were routed only to instances that had already warmed their CUDA contexts. We also had to implement a Temporal-backed durable execution layer just to handle the inevitable timeouts when the 2-minute wall hit.
          </p>
          <p className="leading-[1.8] mb-6">
            It was a brutal week of debugging, but it fundamentally changed how I view GPU orchestration in the cloud. You can't just trust the orchestrator's definition of "ready". You have to measure it yourself at the hardware level.
          </p>
        </article>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-[rgba(255,255,255,0.1)]">
          <Link href="/#field-notes" className="group inline-flex items-center gap-2 text-[1rem] font-medium text-[var(--text-primary)] hover:text-[var(--chrome-light)] transition-colors">
            <ArrowLeft size={18} className="transition-transform duration-300 group-hover:-translate-x-1" />
            <span className="relative">
              Back to Field Notes
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[var(--chrome-mid)] transition-all duration-300 group-hover:w-full" />
            </span>
          </Link>
        </footer>
        
      </div>
    </main>
  );
}
