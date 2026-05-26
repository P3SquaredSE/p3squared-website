import React, { useState } from "react";

import Header from "../components/Header"; 
import ContactModal from "../components/ContactModal";

export default function Blog() {
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
        <div className="pointer-events-none absolute inset-0 opacity-70 overflow-hidden">
          <div className="absolute -top-32 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
          
          <div className="absolute bottom-0 right-[-120px] h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-3xl" />
        </div>
       
        <section className="relative">
          <div className="container mx-auto px-6 py-16 md:py-24 text-center">

            <h1 className="mt-1 text-4xl md:text-6xl font-bold tracking-tight leading-tight">
                The P3 Blog
            </h1>

           
          </div>
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