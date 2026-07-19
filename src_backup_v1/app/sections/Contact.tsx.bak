"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ScrollRevealText from "../components/ScrollRevealText";
import DualXPopup from "../components/DualXPopup";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    gsap.fromTo(
      containerRef.current.querySelectorAll(".contact-animate"),
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "cubic-bezier(0.16, 1, 0.3, 1)",
        stagger: 0.1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          once: true,
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section id="contact" ref={containerRef} className="w-full max-w-[1000px] mx-auto px-[clamp(1.5rem,5vw,4rem)] py-[clamp(8rem,20vh,16rem)]">
      
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Left Column - Header & Socials */}
        <div className="lg:w-5/12 flex flex-col">
          <h2 className="contact-animate font-display text-[clamp(2.5rem,6vw,5rem)] font-bold tracking-tight mb-6 text-[var(--text-primary)] leading-none">
            Let's talk.
          </h2>
          
          <ScrollRevealText className="text-[1rem] text-[var(--text-secondary)] leading-[1.6] mb-12 max-w-[40ch]">
            Have a project or need help? Fill out the form, and I'll get back to you soon.
          </ScrollRevealText>

          <div className="contact-animate flex flex-wrap gap-6 text-[var(--text-tertiary)] items-center">
            <DualXPopup />
            
            <a href="https://instagram.com/i_m_joshwilson" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text-primary)] hover:scale-110 transition-all duration-300" aria-label="Instagram">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            
            {/* TODO: Add LinkedIn */}
            {/* <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text-primary)] hover:scale-110 transition-all duration-300" aria-label="LinkedIn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a> */}
            
            <a href="https://t.me/josh_will" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text-primary)] hover:scale-110 transition-all duration-300" aria-label="Telegram">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            </a>
            
            <a href="https://youtube.com/@joshuaayogu1916" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text-primary)] hover:scale-110 transition-all duration-300" aria-label="YouTube">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
            </a>
            
            <a href="https://github.com/joshwilsonwill-boop" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text-primary)] hover:scale-110 transition-all duration-300" aria-label="GitHub">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
            </a>
            
            <a href="mailto:joshwilsonwill@gmail.com" className="hover:text-[var(--text-primary)] hover:scale-110 transition-all duration-300" aria-label="Email">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </a>
            
            <button 
              onClick={() => {
                navigator.clipboard.writeText("joshwill1896");
                const btn = document.getElementById("discord-btn");
                if (btn) {
                  btn.innerText = "Copied!";
                  setTimeout(() => btn.innerText = "Discord: joshwill1896", 2000);
                }
              }}
              className="ml-auto md:ml-0 flex items-center gap-2 px-3 py-1.5 rounded-full border border-[rgba(255,255,255,0.06)] hover:border-[rgba(255,255,255,0.12)] hover:bg-[rgba(255,255,255,0.02)] transition-all text-[0.75rem] font-mono tracking-wider hover:text-[var(--text-primary)]"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
              <span id="discord-btn">Discord: joshwill1896</span>
            </button>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="lg:w-7/12">
          <form className="contact-animate flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex flex-col gap-2 flex-1">
                <label htmlFor="name" className="text-[0.875rem] text-[var(--text-secondary)]">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="Enter your name" 
                  className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-[0.75rem] px-5 py-4 text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] focus:outline-none focus:border-[rgba(255,255,255,0.2)] focus:shadow-[0_0_15px_rgba(255,255,255,0.05)] transition-all"
                  required
                />
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <label htmlFor="email" className="text-[0.875rem] text-[var(--text-secondary)]">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="Enter your email" 
                  className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-[0.75rem] px-5 py-4 text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] focus:outline-none focus:border-[rgba(255,255,255,0.2)] focus:shadow-[0_0_15px_rgba(255,255,255,0.05)] transition-all"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="project" className="text-[0.875rem] text-[var(--text-secondary)]">Your Project</label>
              <textarea 
                id="project" 
                placeholder="Tell me about your project" 
                className="w-full min-h-[160px] bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-[0.75rem] px-5 py-4 text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] focus:outline-none focus:border-[rgba(255,255,255,0.2)] focus:shadow-[0_0_15px_rgba(255,255,255,0.05)] transition-all resize-y"
                required
              />
            </div>

            <button type="submit" className="liquid-chrome-btn mt-4 w-full md:w-auto self-start px-8 py-4 rounded-full font-bold text-[1rem]">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
