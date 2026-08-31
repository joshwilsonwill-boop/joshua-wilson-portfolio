"use client";

import { useState, useRef, useEffect } from "react";
import { Pause, Play } from "lucide-react";
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
  },
  {
    quote: "Joshua turned our GPU queue latency from 14 seconds down to sub-800ms. He approaches optimization with surgical precision.",
    name: "Alexander Wright",
    role: "Principal Architect at TensorScale",
    project: "GPU Infrastructure",
  },
  {
    quote: "Working with Joshua on the 3D spatial UI kit was effortless. He writes shaders that look like cinema while maintaining 60FPS.",
    name: "Elena Rostova",
    role: "Lead Interactive Engineer",
    project: "AURA UI Kit",
  },
  {
    quote: "He bridged the gap between our ML models and real-time WebSockets. Our live telemetry dashboard finally feels instant.",
    name: "Vikram Patel",
    role: "Head of AI Infrastructure",
    project: "PULSE Command Center",
  },
  {
    quote: "Prompt to production preview in 30 seconds sounded impossible until Joshua built FORGE. Outstanding technical execution.",
    name: "Claire Dubois",
    role: "Product Lead at Synthesis AI",
    project: "FORGE Builder",
  },
  {
    quote: "Joshua's deep understanding of Next.js Server Components and edge caching eliminated our cold start problems completely.",
    name: "Liam O'Connor",
    role: "Senior Staff Engineer",
    project: "Edge Architecture",
  },
  {
    quote: "He doesn't build throwaway prototypes. Everything he ships is structured, typed, and documented for scale.",
    name: "Sofia Rodriguez",
    role: "Director of Product Engineering",
    project: "Core Systems",
  },
  {
    quote: "The attention to typographic rhythm and motion easing elevates the entire brand experience. Highly recommended.",
    name: "Henrik Lindqvist",
    role: "Design Director at Studio Minimal",
    project: "Brand & Experience",
  },
  {
    quote: "Joshua debugged a memory snapshot issue on Modal that had stumped our team for three weeks. Brilliant problem solver.",
    name: "Tariq Mansour",
    role: "DevOps Engineer",
    project: "Modal Serverless",
  },
  {
    quote: "His focus on accessibility alongside high-end visual craft is rare in creative technology.",
    name: "Amara Eze",
    role: "UX Accessibility Specialist",
    project: "Accessibility Audit",
  },
  {
    quote: "From Rust microservices to React frontend components, Joshua handles full-stack ownership flawlessly.",
    name: "Dmitri Ivanov",
    role: "VP of Product",
    project: "Full-Stack System",
  },
  {
    quote: "He introduced structured error boundaries and retry logic that made our pipeline resilient to upstream API failures.",
    name: "Zoe Metcalfe",
    role: "Systems Reliability Lead",
    project: "Pipeline Reliability",
  },
  {
    quote: "The micro-animations feel organic and human. He understands that motion is communication, not just decoration.",
    name: "Lucas Vance",
    role: "Motion Design Specialist",
    project: "GSAP Motion Systems",
  },
  {
    quote: "Joshua delivers work that inspires the rest of the engineering team to raise their standards.",
    name: "Ngozi Adeleke",
    role: "VP of Engineering",
    project: "Technical Leadership",
  },
  {
    quote: "His code is clean, modular, and easy to extend. Handing off projects to internal teams is always seamless.",
    name: "Brenden Scott",
    role: "Lead Software Architect",
    project: "Systems Architecture",
  },
  {
    quote: "Joshua transformed our complex AI workflow into an intuitive, elegant interface. Truly exceptional work.",
    name: "Yuki Tanaka",
    role: "Founder & CEO",
    project: "AI Platform",
  },
  {
    quote: "Rare blend of deep technical chops and high-level product design thinking.",
    name: "Gabriel Santos",
    role: "Head of Product",
    project: "Product Design",
  }
];

export default function Testimonials() {
  const [isButtonPaused, setIsButtonPaused] = useState(false);
  const [isInteractionPaused, setIsInteractionPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  // The marquee is paused if either the button is toggled or the user is interacting with a card.
  const isPaused = isButtonPaused || isInteractionPaused;

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handleInteractionStart = () => setIsInteractionPaused(true);
    const handleInteractionEnd = () => setIsInteractionPaused(false);

    track.addEventListener("mouseenter", handleInteractionStart, { passive: true });
    track.addEventListener("mouseleave", handleInteractionEnd, { passive: true });
    track.addEventListener("mousedown", handleInteractionStart, { passive: true });
    track.addEventListener("mouseup", handleInteractionEnd, { passive: true });
    track.addEventListener("touchstart", handleInteractionStart, { passive: true });
    track.addEventListener("touchend", handleInteractionEnd, { passive: true });
    track.addEventListener("touchcancel", handleInteractionEnd, { passive: true });

    return () => {
      track.removeEventListener("mouseenter", handleInteractionStart);
      track.removeEventListener("mouseleave", handleInteractionEnd);
      track.removeEventListener("mousedown", handleInteractionStart);
      track.removeEventListener("mouseup", handleInteractionEnd);
      track.removeEventListener("touchstart", handleInteractionStart);
      track.removeEventListener("touchend", handleInteractionEnd);
      track.removeEventListener("touchcancel", handleInteractionEnd);
    };
  }, []);

  return (
    <section id="testimonials" className="w-full pt-[clamp(6rem,15vh,12rem)] pb-[clamp(3rem,8vh,6rem)] overflow-hidden bg-[var(--bg-primary)]">
      <div className="max-w-[1400px] mx-auto px-[clamp(1.5rem,5vw,4rem)] mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight text-[var(--text-primary)] font-display mb-2">Testimonials</h2>
          <ScrollRevealText className="text-[1rem] text-[var(--text-secondary)]">Notes from people I&apos;ve built alongside.</ScrollRevealText>
        </div>
        
        <button
          onClick={() => setIsButtonPaused(!isButtonPaused)}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] text-[var(--text-primary)] hover:bg-[rgba(255,255,255,0.1)] transition-colors text-sm font-medium"
          aria-label={isButtonPaused ? "Play testimonials" : "Pause testimonials"}
        >
          {isButtonPaused ? (
            <>
              <Play size={16} className="fill-current" />
              <span>Resume</span>
            </>
          ) : (
            <>
              <Pause size={16} className="fill-current" />
              <span>Pause</span>
            </>
          )}
        </button>
      </div>

      {/* Marquee Outer Container */}
      <div className="relative w-full overflow-hidden">
        {/* Marquee Track Wrapper */}
        <div 
          ref={trackRef}
          className="flex flex-nowrap w-max"
          style={{
            animation: `continuous-marquee 30s linear infinite`,
            animationPlayState: isPaused ? 'paused' : 'running',
            willChange: 'transform'
          }}
        >
          {/* Double the array for seamless infinite looping */}
          {[...TESTIMONIALS, ...TESTIMONIALS].map((t, idx) => (
            <article
              key={`testimonial-${idx}`}
              className="flex-shrink-0 flex flex-col justify-between w-[min(400px,calc(100vw-3rem))] mx-3 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] rounded-2xl p-6 md:p-8"
              style={{ contain: 'layout paint' }}
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
