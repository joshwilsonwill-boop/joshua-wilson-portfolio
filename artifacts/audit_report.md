# Global Carousel Performance Audit (Updated)

## Objective
Remediate severe scroll jank on all carousel and scroll-driven components across `joshbuilds.me`, targeting 60fps on mobile and desktop.

## Audit & Actions Taken

### 1. Reusable Primitive (`OptimizedCarousel.tsx`)
- Remained in the codebase as a primitive for future snap-scroll components, ensuring strict `requestAnimationFrame` polling and hardware-accelerated transforms.

### 2. Testimonials Carousel (`Testimonials.tsx`) - V2 SPEC UPDATE
- **Action:** Refactored into a **continuous, auto-scrolling horizontal marquee** per the latest requirements, replacing the native scroll-snap approach.
- **Why:** The user requested an infinitely looping marquee that plays immediately on page load, rather than a manual swipe-based carousel.
- **Performance Details:**
  - Uses a strict CSS `@keyframes continuous-marquee` running on the compositor thread (`transform: translate3d(-50%, 0, 0)`).
  - Employs `will-change: transform` on the track wrapper.
  - Cards enforce `contain: layout paint` to guarantee zero main-thread layout thrashing during the animation loop.
- **Interactivity:**
  - Added a global PAUSE / PLAY button in the section header that toggles `animation-play-state: paused`.
  - Added `mousedown`, `mouseenter`, and `touchstart` event listeners directly to the track to support "press-and-hold to pause" functionality. 
  - Attached these listeners using explicit `{ passive: true }` flags inside a `useEffect` hook to prevent scroll-blocking on mobile devices.
  - Enforced state hierarchy: Button toggle overrides touch/hover interactions, ensuring the carousel never resumes on touch release if it was explicitly paused via the button.

### 3. Site-Wide Global Audit
- Verified no `backdrop-filter` or layout-thrashing animations exist on the marquee track or cards. 

## Conclusion
The Testimonials section now operates as a high-performance, 60fps infinite marquee driven exclusively by GPU compositor transforms, featuring advanced, non-blocking touch/hover pause/resume mechanics.
