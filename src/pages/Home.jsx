import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Capabilities from "../components/Capabilities";
import HumanAICollab from "../components/HumanAICollab";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0F1D3A] text-white">
      <Header />
      <main className="pt-24"> {/*offsets for fixed header*/}
        <HeroSection />
        <Capabilities />
        <HumanAICollab />
      </main>
    </div>
  );
}