import React, { useState } from "react";

import Header from "../components/Header"; 
import ContactModal from "../components/ContactModal";
import LaborCalculator from "../components/LaborCalculator";
import SupplyOverview from "../components/SupplyOverview";

export default function Costs() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactPreset, setContactPreset] = useState(null);

  const openContact = (opts) => {
    setContactPreset(opts?.preset ?? null);
    setIsContactOpen(true);
  };

  const closeContact = () => {
    setIsContactOpen(false);
    setContactPreset(null);
  };

  const CONTACT_FORM_ACTION = "https://formspree.io/f/meeedlyp";

  return (
    <div className="min-h-screen overflow-hidden bg-[#0B3356] text-white">
      <Header onContactClick={openContact} />

      <main id="main" className="relative pt-24" aria-label="Main content">

        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0 opacity-70 overflow-hidden">
          <div className="absolute -top-32 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
          
          <div className="absolute bottom-0 right-[-120px] h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-3xl" />
        </div>

        {/* Hero section */}
        <section className="relative">
          <div className="container mx-auto px-6 py-16 md:py-24 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">
              Cost Analysis
            </p>

            <h1 className="mt-5 text-4xl md:text-6xl font-bold tracking-tight leading-tight">
              Healthcare Operations
              <br className="hidden md:block" />
               Impact Simulator
            </h1>

            <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-white/75 leading-relaxed">
              Estimate operational inefficiencies, labor waste, and
              hidden supply chain costs affecting rural
              healthcare facilities.
            </p>
          </div>
        </section>

        {/* Supply Overview */}
        <Section className="container mx-auto px-4 md:px-6 max-w=7xl">
          <SupplyOverview />
        </Section>

        {/* Labor Calculator */}
        <section className="relative container mx-auto max-w-7xl px-4 md:px-6 pb-24"
          aria-label="Calculator section"
          >
          <LaborCalculator 
          onContactClick={openContact}
          />
        </section>

      </main>

      <ContactModal
        isOpen={isContactOpen}
        onClose={closeContact}
        formAction={CONTACT_FORM_ACTION}
        preset={contactPreset}  
      />
    </div>
  );
}