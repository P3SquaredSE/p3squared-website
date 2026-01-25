import React, { useState } from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Capabilities from "../components/Capabilities";
import HumanAICollab from "../components/HumanAICollab";
import ContactModal from "../components/ContactModal";

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);

    const openContact = () => setIsContactOpen(true);
    const closeContact = () => setIsContactOpen(false);

    const CONTACT_FORM_ACTION = "https://formspree.io/f/meedlyp"; // Replace with your Formspree endpoint


  return (   
    <div className="min-h-screen bg-[#0B3356] text-white">
      <Header onContactClick={openContact}/>
      <main id="main" className="pt-24" aria-label="Main content">
        <HeroSection onContactClick={openContact}/>

        <section id="solutions">
          <Capabilities />
        </section>
        
        <section id="about">
          <HumanAICollab />
        </section>
      </main>

      <ContactModal
        isOpen={isContactOpen}
        onClose={closeContact}
        formAction={CONTACT_FORM_ACTION}
      />
    </div>
  );
}