import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import AudioPlayer from "../../components/AudioPlayer";

export default function GridUiTeachingToolPage() {
  const title = "The grid UI is a teaching tool, not a product";
  const content = `Structured diversity and human feedback works for exploration. For production, you need outlier detection and automated correction heads. We learned this the hard way. Early on in development, we shipped a beautiful grid interface that allowed users to select variations of an AI-generated output. It felt highly interactive and gave a strong illusion of control. We thought it was the core product.

We were wrong. When users are generating content for production, they don't want to browse a gallery of "almost right" options. They want one perfect output. The grid UI was forcing the user to act as the final loss function, manually sorting through the noise. While this is great for teaching a model what a user prefers during an onboarding phase, it's a terrible UX for a high-volume professional tool.

We had to pivot our entire backend. Instead of serving a grid of variations, we implemented automated correction heads—smaller, specialized neural networks that evaluate the base model's output and correct it before the user ever sees it. We built outlier detection to automatically reject hallucinatory frames in our video matting pipeline. The grid UI is still there, but it's now hidden under an "Explore" tab. The main product just works, first time, every time.`;

  return (
    <main className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] w-full overflow-x-hidden pt-32 pb-24">
      <div className="w-full max-w-[800px] mx-auto px-[clamp(1.5rem,5vw,4rem)] flex flex-col gap-12">
        
        {/* Navigation & Breadcrumbs */}
        <div className="flex items-center gap-4 text-[0.875rem] font-mono tracking-widest uppercase text-[var(--text-tertiary)]">
          <Link href="/#field-notes" className="hover:text-[var(--text-primary)] transition-colors inline-flex items-center gap-2">
            <ArrowLeft size={16} /> Field Notes
          </Link>
          <span>/</span>
          <span className="text-[var(--text-secondary)]">Product Design</span>
        </div>

        <AudioPlayer title={title} content={content} />

        {/* Hero */}
        <header className="flex flex-col gap-6">
          <h1 className="font-display font-bold text-[clamp(2rem,5vw,4rem)] leading-[1.1] tracking-tight text-[var(--text-primary)]">
            {title}
          </h1>
          <div className="flex items-center gap-4 font-mono text-[0.875rem] text-[var(--text-tertiary)] uppercase tracking-widest border-t border-[rgba(255,255,255,0.1)] pt-6">
            <span>Jun 2026</span>
            <span>·</span>
            <span>5-min read</span>
          </div>
        </header>

        {/* Hero Image */}
        <div className="w-full aspect-video relative rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.06)] bg-[var(--bg-surface)]">
          <Image
            src="/images/note-grid.jpg"
            alt={title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Article Body */}
        <article className="prose prose-invert prose-lg max-w-none text-[var(--text-secondary)]">
          <p className="text-[1.25rem] leading-[1.8] text-[var(--text-primary)] font-medium mb-8">
            Structured diversity and human feedback works for exploration. For production, you need outlier detection and automated correction heads. We learned this the hard way.
          </p>
          <p className="leading-[1.8] mb-6">
            Early on in development, we shipped a beautiful grid interface that allowed users to select variations of an AI-generated output. It felt highly interactive and gave a strong illusion of control. We thought it was the core product.
          </p>
          <p className="leading-[1.8] mb-6">
            We were wrong. When users are generating content for production, they don't want to browse a gallery of "almost right" options. They want one perfect output. The grid UI was forcing the user to act as the final loss function, manually sorting through the noise. While this is great for teaching a model what a user prefers during an onboarding phase, it's a terrible UX for a high-volume professional tool.
          </p>
          <h2 className="text-[1.5rem] font-bold text-[var(--text-primary)] mt-12 mb-6 font-display">Automating the Loss Function</h2>
          <p className="leading-[1.8] mb-6">
            We had to pivot our entire backend. Instead of serving a grid of variations, we implemented automated correction heads—smaller, specialized neural networks that evaluate the base model's output and correct it before the user ever sees it. We built outlier detection to automatically reject hallucinatory frames in our video matting pipeline.
          </p>
          <p className="leading-[1.8] mb-6">
            The grid UI is still there, but it's now hidden under an "Explore" tab. The main product just works, first time, every time. Don't mistake a high-friction exploration interface for a complete product experience.
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
