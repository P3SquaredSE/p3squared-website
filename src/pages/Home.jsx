import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Capabilities from "../components/Capabilities";
import HumanAICollab from "../components/HumanAICollab";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <Capabilities />
      <HumanAICollab />
    </>
  );
}