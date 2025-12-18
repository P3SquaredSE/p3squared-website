import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Capabilities from "../components/Capabilities";
import HumanAICollab from "../components/HumanAICollab";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0B3356] text-white">
      <Header />
      <main id="main" className="pt-24" aria-label="Main content"> {/*offsets for fixed header*/}
        <HeroSection />

        <section id="solutions">
          <Capabilities />
        </section>
        
        <section id="about">
          <HumanAICollab />
        </section>
      </main>
    </div>
  );
}