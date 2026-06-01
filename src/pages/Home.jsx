import React from "react";

import Layout from "../components/Layout";

import HeroSection from "../components/HeroSection";
import Capabilities from "../components/Capabilities";
import HumanAICollab from "../components/HumanAICollab";


export default function Home() {

  return (   
    <Layout>

      <HeroSection />

      <section id="solutions">
        <Capabilities />
      </section>


    </Layout>
  );
}