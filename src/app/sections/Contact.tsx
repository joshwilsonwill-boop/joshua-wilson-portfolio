"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ScrollRevealText from "../components/ScrollRevealText";
import DualXPopup from "../components/DualXPopup";
import { useForm, ValidationError } from "@formspree/react";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const containerRef = useRef<HTMLElement>(null);
  const [state, handleSubmit] = useForm('xvzeaezk');

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
            
            <a href="https://instagram.com/i_m_joshwilson" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-6 h-6 hover:text-[var(--text-primary)] hover:scale-110 transition-all duration-300" aria-label="Instagram">
              <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            
            <a href="https://t.me/josh_will" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-6 h-6 hover:text-[var(--text-primary)] hover:scale-110 transition-all duration-300" aria-label="Telegram">
              <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            </a>
            
            <a href="https://youtube.com/@joshuaayogu1916" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-6 h-6 hover:text-[var(--text-primary)] hover:scale-110 transition-all duration-300" aria-label="YouTube">
              <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
            </a>
            
            <a href="https://github.com/joshwilsonwill-boop" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-6 h-6 hover:text-[var(--text-primary)] hover:scale-110 transition-all duration-300" aria-label="GitHub">
              <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
            </a>
            
            <a href="mailto:joshwilsonwill@gmail.com" className="flex items-center justify-center w-6 h-6 hover:text-[var(--text-primary)] hover:scale-110 transition-all duration-300" aria-label="Email">
              <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </a>
            
            <a 
              href="https://discord.com/users/joshwill1896"
              target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center w-6 h-6 hover:text-[var(--text-primary)] hover:scale-110 transition-all duration-300" aria-label="Discord"
            >
              <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
              </svg>
            </a>
            
            <a 
              href="https://linktr.ee/Joshua_Will"
              target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center w-6 h-6 hover:text-[var(--text-primary)] hover:scale-110 transition-all duration-300" aria-label="Linktree"
            >
              <svg className="w-full h-full" viewBox="0 0 256 256" fill="currentColor">
                <path d="M136 160v72a8 8 0 0 1-16 0v-72a8 8 0 0 1 16 0m72-64h-60.69l42.35-42.34a8 8 0 0 0-11.32-11.32L136 84.69V24a8 8 0 0 0-16 0v60.69L77.66 42.34a8 8 0 0 0-11.32 11.32L108.69 96H48a8 8 0 0 0 0 16h60.69l-42.35 42.34a8 8 0 0 0 11.32 11.32L120 123.31V232a8 8 0 0 0 16 0v-108.69l58.34 58.35a8 8 0 0 0 11.32-11.32L148.69 112H208a8 8 0 0 0 0-16" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="lg:w-7/12">
          {state.succeeded ? (
            <div className="contact-animate flex flex-col items-center justify-center h-full min-h-[300px] border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)] rounded-[0.75rem] p-8 text-center">
              <h3 className="font-display text-[2rem] font-bold tracking-tight mb-2 text-[var(--text-primary)]">Message Received</h3>
              <p className="text-[var(--text-secondary)]">Thanks for reaching out! I'll get back to you shortly.</p>
            </div>
          ) : (
            <form 
              className="contact-animate flex flex-col gap-6" 
              onSubmit={handleSubmit}
            >
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex flex-col gap-2 flex-1">
                  <label htmlFor="name" className="text-[0.875rem] text-[var(--text-secondary)]">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    placeholder="Enter your name" 
                    className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-[0.75rem] px-5 py-4 text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] focus:outline-none focus:border-[rgba(255,255,255,0.2)] focus:shadow-[0_0_15px_rgba(255,255,255,0.05)] transition-all"
                    required
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-sm" />
                </div>
                <div className="flex flex-col gap-2 flex-1">
                  <label htmlFor="email" className="text-[0.875rem] text-[var(--text-secondary)]">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    placeholder="Enter your email" 
                    className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-[0.75rem] px-5 py-4 text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] focus:outline-none focus:border-[rgba(255,255,255,0.2)] focus:shadow-[0_0_15px_rgba(255,255,255,0.05)] transition-all"
                    required
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-sm" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="project" className="text-[0.875rem] text-[var(--text-secondary)]">Your Project</label>
                <textarea 
                  id="project" 
                  name="project"
                  placeholder="Tell me about your project" 
                  className="w-full min-h-[160px] bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-[0.75rem] px-5 py-4 text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] focus:outline-none focus:border-[rgba(255,255,255,0.2)] focus:shadow-[0_0_15px_rgba(255,255,255,0.05)] transition-all resize-y"
                  required
                />
                <ValidationError prefix="Project" field="project" errors={state.errors} className="text-red-500 text-sm" />
              </div>

              <button 
                type="submit" 
                disabled={state.submitting}
                className="liquid-chrome-btn mt-4 w-full md:w-auto self-start px-8 py-4 rounded-full font-bold text-[1rem] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                {state.submitting ? "Sending..." : "Submit"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
