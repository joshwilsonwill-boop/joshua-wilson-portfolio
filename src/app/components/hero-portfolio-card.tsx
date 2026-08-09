"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { PORTRAIT_COLOR_B64, PORTRAIT_GRAY_B64 } from "./hero-portrait-data";

// ---------------------------------------------------------------------------
// Easing — custom cubic-bezier for that premium, weighty flip feel
// ---------------------------------------------------------------------------
const FLIP_EASE = [0.22, 1, 0.36, 1] as const;

// ---------------------------------------------------------------------------
// Inline SVG assets (no external dependencies)
// ---------------------------------------------------------------------------
const SparkleIcon = ({ className }: { className?: string }) => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2L13.5 9.5L21 12L13.5 14.5L12 22L10.5 14.5L3 12L10.5 9.5L12 2Z"
      fill="url(#sparkle-grad)"
    />
    <defs>
      <linearGradient id="sparkle-grad" x1="3" y1="2" x2="21" y2="22">
        <stop stopColor="#a78bfa" />
        <stop offset="1" stopColor="#c084fc" />
      </linearGradient>
    </defs>
  </svg>
);

const LightningIcon = ({ className }: { className?: string }) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13 2L4 14H11L10 22L20 10H13L13 2Z"
      stroke="url(#bolt-grad)"
      strokeWidth="1.5"
      fill="none"
    />
    <defs>
      <linearGradient id="bolt-grad" x1="4" y1="2" x2="20" y2="22">
        <stop stopColor="#c084fc" />
        <stop offset="1" stopColor="#a78bfa" />
      </linearGradient>
    </defs>
  </svg>
);

const MenuIcon = ({ className }: { className?: string }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <path d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
interface HeroPortfolioCardProps {
  name: string;
  title: string;
  subtitle?: string;
  since: string;
  imageAlt?: string;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export default function HeroPortfolioCard({
  name,
  title,
  subtitle,
  since,
  imageAlt = "Portrait",
}: HeroPortfolioCardProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // 80ms delay lets the browser paint once before animating — prevents jank
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  // Split title on space for two-line layout
  const titleWords = title.split(" ");
  const titleLine1 = titleWords[0] ?? "";
  const titleLine2 = titleWords.slice(1).join(" ");

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[100dvh] bg-[#0f0f0f] px-4 overflow-hidden selection:bg-purple-500/30">
      {/* ================================================================ */}
      {/* FLOATING DECORATIVE ELEMENTS                                      */}
      {/* ================================================================ */}
      <motion.div
        className="absolute top-[10%] left-[6%] pointer-events-none z-10"
        animate={{
          y: [0, -20, 5, -12, 0],
          x: [0, 12, -8, 10, 0],
          rotate: [0, 90, 180, 270, 360],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <SparkleIcon />
      </motion.div>

      <motion.div
        className="absolute top-[16%] right-[8%] pointer-events-none z-10"
        animate={{
          y: [0, 14, -16, 8, 0],
          x: [0, -12, 10, -8, 0],
          rotate: [-5, 8, -8, 5, -5],
        }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <LightningIcon />
      </motion.div>

      {/* ================================================================ */}
      {/* NAME PILL (top nav)                                               */}
      {/* ================================================================ */}
      <motion.div
        className="flex items-center justify-between w-full max-w-[340px] bg-[#1a1a1a]/80 backdrop-blur-md border border-white/5 rounded-full px-5 py-3 mb-10 z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: FLIP_EASE }}
      >
        <span className="text-white text-sm font-semibold tracking-wide">
          {name}
        </span>
        <button
          className="text-neutral-400 hover:text-white transition-colors duration-200"
          aria-label="Open menu"
        >
          <MenuIcon />
        </button>
      </motion.div>

      {/* ================================================================ */}
      {/* TITLE                                                             */}
      {/* ================================================================ */}
      <motion.h1
        className="text-white text-[clamp(2.8rem,9vw,5rem)] font-extrabold leading-[0.92] tracking-tight text-center mb-3 z-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: FLIP_EASE }}
      >
        {titleLine1}
        <br />
        {titleLine2}
      </motion.h1>

      {subtitle && (
        <motion.p
          className="text-neutral-500 text-sm md:text-base font-medium text-center mb-8 z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {subtitle}
        </motion.p>
      )}

      {/* ================================================================ */}
      {/* 3D FLIP IMAGE                                                     */}
      {/*                                                                   */}
      {/*  SIZING RATIONALE:                                                */}
      {/*    - Reference video (Majd):   ~200px wide                        */}
      {/*    - Your current screenshot:  ~90vw (way too big)                */}
      {/*    - Target:                   260px mobile / 300px desktop       */}
      {/*                                                                   */}
      {/*  ANIMATION:                                                       */}
      {/*    - rotateY: -90deg → 0deg   (3D flip into view)                 */}
      {/*    - filter:  grayscale(100%) brightness(0.2) → grayscale(0%)     */}
      {/*               brightness(1)   (B&W silhouette → full color)       */}
      {/*                                                                   */}
      {/*  The grayscale-to-color transition is driven by CSS filter on     */}
      {/*  the colored image. This is smoother than swapping src mid-flip   */}
      {/*  and avoids FOUC / loading race conditions.                       */}
      {/* ================================================================ */}
      <div className="relative z-20" style={{ perspective: "1000px" }}>
        <motion.div
          className="relative w-[260px] h-[340px] sm:w-[300px] sm:h-[390px] rounded-2xl overflow-hidden shadow-2xl shadow-black/60"
          initial={{
            rotateY: -90,
            filter: "grayscale(100%) brightness(0.2) contrast(1.3)",
          }}
          animate={
            mounted
              ? {
                  rotateY: 0,
                  filter: "grayscale(0%) brightness(1) contrast(1)",
                }
              : {}
          }
          transition={{
            duration: 1.5,
            ease: FLIP_EASE,
            delay: 0.35,
          }}
          style={{
            transformStyle: "preserve-3d",
            willChange: "transform, filter",
            backfaceVisibility: "hidden",
          }}
        >
          {/* ---------------------------------------------------------- */}
          {/* MAIN IMAGE — colored version, filter drives the B&W reveal  */}
          {/* ---------------------------------------------------------- */}
          <img
            src={PORTRAIT_COLOR_B64}
            alt={imageAlt}
            className="w-full h-full object-cover"
            draggable={false}
            loading="eager"
          />

          {/* Subtle vignette for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
        </motion.div>

        {/* Soft ambient glow behind the image */}
        <motion.div
          className="absolute -inset-5 bg-red-600/8 rounded-3xl blur-3xl -z-10"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={mounted ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.8, delay: 0.6, ease: FLIP_EASE }}
        />
      </div>

      {/* ================================================================ */}
      {/* META TEXT                                                         */}
      {/* ================================================================ */}
      <motion.p
        className="text-neutral-500 text-xs tracking-[0.25em] uppercase mt-8 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.1 }}
      >
        /CREATING SINCE {since}
      </motion.p>

      <motion.p
        className="text-neutral-600 text-[10px] tracking-[0.3em] uppercase mt-3 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.3 }}
      >
        Scroll to explore
      </motion.p>

      {/* ================================================================ */}
      {/* ALTERNATIVE: Two-image crossfade (commented out)                  */}
      {/*                                                                   */}
      {/*  If you prefer using your actual grayscale image instead of the   */}
      {/*  CSS filter approach, replace the image block above with this:    */}
      {/*                                                                   */}
      {/*  <div className="relative w-[260px] h-[340px] ..."                */}
      {/*       style={{ perspective: "1000px" }}>                          */}
      {/*    <motion.div                                                    */}
      {/*      className="relative w-full h-full rounded-2xl overflow-hidden"*/}
      {/*      initial={{ rotateY: -90 }}                                   */}
      {/*      animate={mounted ? { rotateY: 0 } : {}}                      */}
      {/*      transition={{ duration: 1.5, ease: FLIP_EASE, delay: 0.35 }} */}
      {/*      style={{ transformStyle: "preserve-3d" }}>                   */}
      {/*                                                                   */}
      {/*      {/* Colored image — back layer *\/}                           */}
      {/*      <img src={imageColorSrc} className="absolute inset-0 ..." /> */}
      {/*                                                                   */}
      {/*      {/* Grayscale image — front layer, fades out *\/}             */}
      {/*      <motion.img                                                  */}
      {/*        src={imageGraySrc}                                         */}
      {/*        className="absolute inset-0 w-full h-full object-cover"    */}
      {/*        initial={{ opacity: 1 }}                                   */}
      {/*        animate={mounted ? { opacity: 0 } : {}}                    */}
      {/*        transition={{ duration: 0.9, delay: 0.5, ease: FLIP_EASE }}*/}
      {/*      />                                                           */}
      {/*    </motion.div>                                                  */}
      {/*  </div>                                                           */}
      {/* ================================================================ */}
    </section>
  );
}
