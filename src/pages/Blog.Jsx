import React, { useState } from "react";
import Header from "../components/Header"; 
import ContactModal from "../components/ContactModal";

export default function Blog() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [ contactPreset, setContactPreset ] = useState(false);

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
        <h1 classname="text-4xl text-center font-bold mt-10">Blog page is loading!</h1>
       
       

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