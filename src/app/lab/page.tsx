import LabSection from "../sections/Lab";
import Navigation from "../components/Navigation";
import LiquidChrome from "../components/LiquidChrome";
import Footer from "../sections/Footer";

export default function LabPage() {
  return (
    <main className="relative w-full flex flex-col min-h-screen overflow-x-hidden pt-24">
      <Navigation />
      <LiquidChrome />
      
      <div className="z-10 w-full relative flex-1">
        <div className="w-full max-w-[1400px] mx-auto px-[clamp(1.5rem,5vw,4rem)] pt-12 pb-8">
          <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold font-display tracking-tight text-[var(--text-primary)]">
            Lab Archive
          </h1>
          <p className="text-[1.125rem] text-[var(--text-secondary)] mt-4 max-w-[60ch]">
            A complete collection of technical experiments, WebGL toys, and procedural systems.
          </p>
        </div>
        
        <LabSection />
      </div>
      
      <Footer />
    </main>
  );
}
