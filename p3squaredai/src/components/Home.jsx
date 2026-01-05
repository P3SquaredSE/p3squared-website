import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import Capabilities from "./Capabilities";
import HumanAICollab from "./HumanAICollab";

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