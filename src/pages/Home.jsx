import React from "react";
import HeroSection from "../components/HeroSection";
import Capabilities from "../components/Capabilities";
import HumanAICollab from "../components/HumanAICollab";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Capabilities />
      <HumanAICollab />
    </>
  );
}