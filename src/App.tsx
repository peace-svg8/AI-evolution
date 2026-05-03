/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Timeline from "./components/Timeline";
import Stats from "./components/Stats";
import TechSection from "./components/TechSection";
import Applications from "./components/Applications";
import ProsCons from "./components/ProsCons";
import FutureOutlook from "./components/FutureOutlook";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Navbar />
      <Hero />
      <Timeline />
      <Stats />
      <TechSection />
      <Applications />
      <ProsCons />
      <FutureOutlook />
      <Footer />
    </main>
  );
}

