import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import AudioPlayer from "../../components/AudioPlayer";

export default function SixDofMattingT4Page() {
  const title = "I tried to build 6DOF matting on a T4 and learned why H100s exist";
  const content = `12 hours of training. 4GB VRAM. The model crashed on frame 3. Here's the cost analysis and the pivot. When I first started working on the RECAM Masters model for Prometheus, I was stubbornly convinced that I could optimize the architecture enough to run on commodity hardware. I spun up an instance with an NVIDIA T4, thinking I was being incredibly cost-efficient. 

The reality hit me about 12 hours into the first test run. The VRAM peaked, the CUDA out-of-memory error killed the process, and I was left staring at a completely useless checkpoint file. 6 Degrees of Freedom (6DOF) video matting requires depth-aware subject extraction across multiple temporal frames. You are essentially asking the model to hold the context of 3D space in memory while predicting alpha channels. A T4 simply doesn't have the memory bandwidth or capacity for it.

Switching to an H100 was financially painful but technically revelatory. The training run that took 12 hours (before crashing) on the T4 completed in under 45 minutes on the H100. More importantly, the massive VRAM allowed me to increase the batch size, leading to significantly better gradient stability. The lesson here wasn't just "buy bigger GPUs." It was about understanding the fundamental constraints of the architecture you're building. Sometimes, being cheap with infrastructure is the most expensive mistake you can make in terms of engineering time.`;

  return (
    <main className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] w-full overflow-x-hidden pt-32 pb-24">
      <div className="w-full max-w-[800px] mx-auto px-[clamp(1.5rem,5vw,4rem)] flex flex-col gap-12">
        
        {/* Navigation & Breadcrumbs */}
        <div className="flex items-center gap-4 text-[0.875rem] font-mono tracking-widest uppercase text-[var(--text-tertiary)]">
          <Link href="/#field-notes" className="hover:text-[var(--text-primary)] transition-colors inline-flex items-center gap-2">
            <ArrowLeft size={16} /> Field Notes
          </Link>
          <span>/</span>
          <span className="text-[var(--text-secondary)]">Machine Learning</span>
        </div>

        <AudioPlayer title={title} content={content} />

        {/* Hero */}
        <header className="flex flex-col gap-6">
          <h1 className="font-display font-bold text-[clamp(2rem,5vw,4rem)] leading-[1.1] tracking-tight text-[var(--text-primary)]">
            {title}
          </h1>
          <div className="flex items-center gap-4 font-mono text-[0.875rem] text-[var(--text-tertiary)] uppercase tracking-widest border-t border-[rgba(255,255,255,0.1)] pt-6">
            <span>Jul 2026</span>
            <span>·</span>
            <span>6-min read</span>
          </div>
        </header>

        {/* Hero Image */}
        <div className="w-full aspect-video relative rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.06)] bg-[var(--bg-surface)]">
          <Image
            src="/images/note-t4.jpg"
            alt={title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Article Body */}
        <article className="prose prose-invert prose-lg max-w-none text-[var(--text-secondary)]">
          <p className="text-[1.25rem] leading-[1.8] text-[var(--text-primary)] font-medium mb-8">
            12 hours of training. 4GB VRAM. The model crashed on frame 3. Here's the cost analysis and the pivot.
          </p>
          <p className="leading-[1.8] mb-6">
            When I first started working on the RECAM Masters model for Prometheus, I was stubbornly convinced that I could optimize the architecture enough to run on commodity hardware. I spun up an instance with an NVIDIA T4, thinking I was being incredibly cost-efficient.
          </p>
          <p className="leading-[1.8] mb-6">
            The reality hit me about 12 hours into the first test run. The VRAM peaked, the CUDA out-of-memory error killed the process, and I was left staring at a completely useless checkpoint file. 6 Degrees of Freedom (6DOF) video matting requires depth-aware subject extraction across multiple temporal frames. You are essentially asking the model to hold the context of 3D space in memory while predicting alpha channels. A T4 simply doesn't have the memory bandwidth or capacity for it.
          </p>
          <h2 className="text-[1.5rem] font-bold text-[var(--text-primary)] mt-12 mb-6 font-display">The Financial Reality of Scale</h2>
          <p className="leading-[1.8] mb-6">
            Switching to an H100 was financially painful but technically revelatory. The training run that took 12 hours (before crashing) on the T4 completed in under 45 minutes on the H100. More importantly, the massive VRAM allowed me to increase the batch size, leading to significantly better gradient stability.
          </p>
          <p className="leading-[1.8] mb-6">
            The lesson here wasn't just "buy bigger GPUs." It was about understanding the fundamental constraints of the architecture you're building. Sometimes, being cheap with infrastructure is the most expensive mistake you can make in terms of engineering time. Optimize the model, absolutely, but know when hardware is the only answer.
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
