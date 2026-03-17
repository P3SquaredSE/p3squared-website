import React, { useState} from "react";
import Header from "../components/Header";
import ContactModal from "../components/ContactModal";
import OurPhilosophy from "../components/OurPhilosophy";


export default function Philosophy() {
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [ contactPreset, setContactPreset ] = useState(null);

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
        <div className="min-h-screen bg-[#0B3356] text-white">
            <Header onContactClick={openContact}/>

            <main id="main" className="pt-24" aria-label="Main content">
                <OurPhilosophy onContactClick={openContact}/>
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