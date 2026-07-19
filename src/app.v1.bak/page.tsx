import LiquidChrome from "./components/LiquidChrome";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Stack from "./sections/Stack";
import Work from "./sections/Work";
import Contact from "./sections/Contact";

export default function Home() {
  return (
    <main className="relative w-full flex flex-col min-h-screen">
      <LiquidChrome />
      
      <div className="z-10 w-full relative">
        <Hero />
        <About />
        <Stack />
        <Work />
        <Contact />
      </div>
    </main>
  );
}
