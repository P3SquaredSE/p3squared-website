import React, { useState } from "react";

import Header from "../components/Header"; 
import ContactModal from "../components/ContactModal";
import LaborCalculator from "../components/LaborCalculator";

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
    <div className="min-h-screen bg-[#0B3356] text-white">
      <Header onContactClick={openContact} />

      <main id="main" className="pt-24" aria-label="Main content">
        {/*Page Header */}
        <section className="relative overflow-hidden">
          {/* Background glow */}
          <div className="pointer-events-none absolute inset-0 opacity-70">
            <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
          </div>

          <div className="relative container mx-auto px-6 py-14 md:py-20 text-center">
            <p className="text-white/80 text-sm tracking-wide uppercase">
              Cost Analysis
            </p>

            <h1 className="mt-3 text-3xl md:text-5xl font-semibold">
              Labor Calculator
            </h1>

            <p className="mt-4 mx-auto max-w-3xl text-white/80 leading-relaxed">
              Estimate operational inefficiencies, labor waste, 
              and hidden supply chain costs impacting rural healthcare facilities.
            </p>
          </div>
        </section>

        {/* Calculator */}
        <section className="container mx-auto px-4 md:px-6 pb-20 max-w-5xl" aria-label="Calculator section">
          <LaborCalculator 
            onContactClick={openContact}
          />
        </section>
      </main>

      <ContactModal
        isOpen={isContactOpen}
        onClose={closeContact}
        preset={contactPreset}
        action={CONTACT_FORM_ACTION}
      />
    </div>
  );
}