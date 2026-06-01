import React, { useState } from "react";

import Header from "./Header";
import Footer from "./Footer";
import ContactModal from "./ContactModal";

export default function Layout({ children }) {
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

    const CONTACT_FORM_ACTION = "https://formspree.io/f/meeedlyp"; //Formspree endpoint

    return (
        <div className="min-h-screen overflow-hidden bg-[#0B3356] text-white flex flex-col">

            <Header onContactClick={openContact} />

            <main 
                id="main" 
                className="relative pt-24 flex-1" 
                aria-label="Main content">
                    
                {/* Background glow */}
                <div className="pointer-events-none absolute inset-0 opacity-70 overflow-hidden">
                    <div className="absolute -top-32 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

                    <div className="absolute bottom-0 right-[-120px] h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-3xl" />
                </div>

                <div className="relative">
                    {typeof children === "function"
                        ? children({ onContactClick: openContact })
                        : children
                    }
                </div>

            </main>

            <Footer />

            <ContactModal
                isOpen={isContactOpen}
                onClose={closeContact}
                formAction={CONTACT_FORM_ACTION}
                preset={contactPreset}
            />

        </div>
    );
}