"use client";

import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Navigation from "../components/Navigation";
import ScrollRevealText from "../components/ScrollRevealText";
import Footer from "../sections/Footer";
import FilterBar, { Platform } from "../components/FilterBar";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

interface Post {
  id: string;
  platform: "X (Twitter)" | "Instagram" | "Telegram";
  date: string;
  content: string;
  url: string;
  image?: string;
  username: string;
}

// TODO: Replace with real post URLs and content
// Future enhancement: Add API integration to fetch these automatically
const POSTS: Post[] = [
  {
    id: "1",
    platform: "X (Twitter)",
    date: "July 12, 2026",
    content: "Building high-performance animations in React requires understanding the lifecycle. If you're not cleaning up your GSAP contexts on unmount, you're leaking memory. It's that simple.",
    url: "https://x.com/joshwilson_will/status/placeholder",
    username: "@joshwilson_will",
  },
  {
    id: "2",
    platform: "Instagram",
    date: "June 28, 2026",
    content: "Exploring spatial depth with Three.js. Liquid chrome studies.",
    url: "https://instagram.com/p/placeholder",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    username: "@i_m_joshwilson",
  },
  {
    id: "3",
    platform: "Telegram",
    date: "June 15, 2026",
    content: "Just dropped the new system architecture diagram in the chat. We're moving from a monolithic structure to a distributed set of edge functions.",
    url: "https://t.me/josh_will/placeholder",
    username: "Joshua",
  },
  {
    id: "4",
    platform: "X (Twitter)",
    date: "May 20, 2026",
    content: "Design is not just what it looks like and feels like. Design is how it works. - Steve Jobs. Still the most accurate definition.",
    url: "https://x.com/gadflyrebel/status/placeholder",
    username: "@gadflyrebel",
  },
];

const PLATFORM_ICONS = {
  "X (Twitter)": (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
  ),
  "Instagram": (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
  ),
  "Telegram": (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
  ),
};

export default function ThoughtsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState<Platform>("All");
  
  const filteredPosts = POSTS.filter(post => filter === "All" || post.platform === filter);

  useGSAP(() => {
    if (!containerRef.current) return;

    // Hero entrance
    gsap.fromTo(
      ".thoughts-hero-text",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: "cubic-bezier(0.16, 1, 0.3, 1)", stagger: 0.1 }
    );

    // Filter entrance
    gsap.fromTo(
      ".filter-bar",
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 0.3 }
    );
  }, { scope: containerRef });

  // Handle post animations when filter changes
  useGSAP(() => {
    if (!containerRef.current) return;
    
    const postCards = containerRef.current.querySelectorAll(".post-card-anim");
    
    if (postCards.length > 0) {
      gsap.fromTo(
        postCards,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.05, ease: "power2.out" }
      );
    }
  }, { scope: containerRef, dependencies: [filter] });

  return (
    <main ref={containerRef} className="relative w-full flex flex-col min-h-screen bg-[var(--bg-primary)] overflow-x-hidden">
      <Navigation />

      <div className="fixed inset-0 z-[-1] pointer-events-none bg-gradient-to-br from-[#050505] via-[#0a0a0f] to-[#050505]" />

      <section className="w-full max-w-[1200px] mx-auto px-[clamp(1.5rem,5vw,4rem)] pt-[clamp(8rem,20vh,12rem)] pb-12">
        <Link href="/" className="inline-flex items-center gap-2 text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors mb-12 text-sm font-mono uppercase tracking-widest group">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <h1 className="thoughts-hero-text text-[clamp(3rem,8vw,6rem)] font-display font-bold leading-[0.9] tracking-tight text-[var(--text-primary)] mb-6">
          Thoughts.
        </h1>
        
        <div className="thoughts-hero-text max-w-[600px] mb-16">
          <ScrollRevealText className="text-[clamp(1rem,1.5vw,1.25rem)] text-[var(--text-secondary)] leading-[1.6]">
            See how I shape ideas with clarity and craft.
          </ScrollRevealText>
        </div>
        
        <div className="filter-bar">
          <FilterBar activeFilter={filter} onFilterChange={setFilter} />
        </div>
      </section>

      <section className="w-full max-w-[1200px] mx-auto px-[clamp(1.5rem,5vw,4rem)] pb-[clamp(6rem,15vh,12rem)] min-h-[50vh]">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredPosts.map((post) => (
            <a 
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="post-card-anim block w-full bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.06)] hover:border-[rgba(255,255,255,0.15)] rounded-2xl p-5 transition-all duration-300 hover:bg-[rgba(255,255,255,0.03)] hover:-translate-y-1 break-inside-avoid"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-[var(--text-primary)] font-medium text-sm">{post.username}</span>
                  <span className="text-[var(--text-tertiary)] text-xs font-mono">{post.date}</span>
                </div>
                <div className="text-[var(--text-tertiary)]">
                  {PLATFORM_ICONS[post.platform]}
                </div>
              </div>
              
              {post.image && (
                <div className="w-full aspect-[4/3] rounded-lg overflow-hidden mb-4 border border-[rgba(255,255,255,0.04)]">
                  <img src={post.image} alt="Post attachment" className="w-full h-full object-cover" />
                </div>
              )}
              
              <p className="text-[var(--text-secondary)] text-[0.9375rem] leading-[1.6] mb-4">
                {post.content}
              </p>
              
              <div className="flex items-center text-[0.75rem] text-[var(--chrome-mid)] font-medium gap-1 group-hover:text-[var(--text-primary)] transition-colors">
                View original post
                <ExternalLink size={12} className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
              </div>
            </a>
          ))}
        </div>
        
        {filteredPosts.length === 0 && (
          <div className="w-full py-20 text-center text-[var(--text-tertiary)]">
            No posts found for this platform.
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}
