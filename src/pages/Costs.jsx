import React, { useState } from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Capabilities from "../components/Capabilities"; 
import ContactModal from "../components/ContactModal";
import HiddenLaborTaxCalculator from "../components/HiddenLaborTaxCalculator";

export default function Costs() {
  const [isContactOpen, setIsContactOpen] = React.useState(false);
  const [contactPreset, setContactPreset] = React.useState(null);

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
    <Header onContactClick={openContact}/>
    
      <main id="main" className="pt-24" aria-label="Main content">
        <HeroSection onContactClick={openContact}/>
        
        <section id="solutions">
          
          <Capabilities />
        </section>
        
        <section className="container mx-auto px-6 mt-12" aria-label="Calculator section">
          <HiddenLaborTaxCalculator onContactClick={openContact}/>
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