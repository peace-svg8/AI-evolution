import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Timeline from "./components/Timeline";
import Stats from "./components/Stats";
import TechSection from "./components/TechSection";
import Applications from "./components/Applications";
import ProsCons from "./components/ProsCons";
import FutureOutlook from "./components/FutureOutlook";
import Footer from "./components/Footer";
import ParticleField from "./components/ui/ParticleField";
import SectionDivider from "./components/ui/SectionDivider";

export default function App() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-cyan-500/30 selection:text-white relative noise-overlay">
      {/* Animated neural particle background */}
      <ParticleField />

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <SectionDivider variant="cyan" />
        <Timeline />
        <SectionDivider variant="purple" />
        <Stats />
        <SectionDivider variant="blue" />
        <TechSection />
        <SectionDivider variant="pink" />
        <Applications />
        <SectionDivider variant="cyan" />
        <ProsCons />
        <SectionDivider variant="purple" />
        <FutureOutlook />
        <Footer />
      </div>
    </main>
  );
}
