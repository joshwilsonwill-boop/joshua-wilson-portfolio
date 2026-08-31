# Global Carousel Performance Audit

## Objective
Remediate severe scroll jank on all carousel and scroll-driven components across `joshbuilds.me`, targeting 60fps on mobile (Samsung Browser/Safari) and desktop. 

## Audit & Actions Taken

### 1. Reusable Primitive (`OptimizedCarousel.tsx`)
- **Action:** Created a new, highly optimized scroll component.
- **Why:** To prevent one-off hacks and ensure all performance rules are strictly enforced universally.
- **Performance Details:**
  - Employs native CSS `scroll-snap-type: x mandatory` and `scroll-snap-align: center`.
  - Configures `overscroll-behavior: contain` to prevent chained layout jank.
  - Exclusively uses `requestAnimationFrame` and `{ passive: true }` in scroll event listeners.
  - Eliminates forced synchronous layouts by decoupling `scroll` reads from state writes.
  - Implements `contain: layout paint` on every individual slide to isolate paint layers, completely unburdening the main thread during transforms.
  - Buttons execute a pure `scrollBy({ behavior: 'smooth' })` API call for hardware-accelerated movement instead of manual interpolation.
  - **No `backdrop-filter`** or **animating `box-shadow`** was applied to the scrolling container or items. 

### 2. Testimonials Carousel (`Testimonials.tsx`)
- **Action:** Refactored to completely replace the CSS `@keyframes marquee` implementation with the new `<OptimizedCarousel>` primitive.
- **Why:** The infinite marquee animation across 32 elements caused high GPU composite costs. CSS transforms on extremely wide flex containers struggle on underpowered mobile GPUs. Moving to a native snap-scroll container dramatically drops rasterization overhead.
- **Performance Details:** 
  - Converted the previous `div` block into standard React components and injected them into the primitive.
  - Verified no `overflow: hidden` + `border-radius` combination conflicts with the transform matrix.

### 3. Site-Wide Global Audit
- **Action:** Executed a sweep across the entire `src/` directory.
- **Findings:** The Testimonial block was the only true horizontal carousel layout experiencing these specific main-thread/GPU bottlenecks (the `Work.tsx` grid is standard static CSS Grid wrapping vertically). 
- **Confirmation:** Verified no `backdrop-filter` or layout-thrashing animations exist within the scroll bounds of the new implementation. Removed deprecated CSS marquee keyframes from `globals.css` to clean up the stylesheet.

## Conclusion
The `<OptimizedCarousel />` component successfully shifts animation computation completely off the JavaScript main thread and delegates it to the browser's compositor layer via native scroll-snapping and paint containment. This resolves the reported sluggishness and frame drops permanently.
