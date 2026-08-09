import Navigation from "./components/Navigation";
import LiquidChrome from "./components/LiquidChrome";
import HeroPortfolioCard from "./components/hero-portfolio-card";
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
        <HeroPortfolioCard
          name="JOSHUA WILSON"
          title="FOUNDING ENGINEER"
          subtitle="Your code is bad"
          since="2022"
        />
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
