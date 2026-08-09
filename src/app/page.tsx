import Navigation from "./components/Navigation";
import LiquidChrome from "./components/LiquidChrome";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Stack from "./sections/Stack";
import Services from "./sections/Services";
import Work from "./sections/Work";
import Testimonials from "./sections/Testimonials";
import Thoughts from "./sections/Thoughts";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <main className="relative w-full flex flex-col min-h-screen overflow-x-hidden">
      <Navigation />
      
      <LiquidChrome />
      
      <div className="z-10 w-full relative">
        <Hero />
        <About />
        <Stack />
        <Services />
        <Work />
        <Testimonials />
        <Thoughts />
        <Contact />
      </div>
      
      <Footer />
    </main>
  );
}
