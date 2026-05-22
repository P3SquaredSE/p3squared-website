import React, { useState } from "react";
import Header from "../components/Header"; 
import ContactModal from "../components/ContactModal"; 

export default function Team() {
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

        {/*Header */}
        <section className="relative">
          <div className="container mx-auto px-6 py-16 md:py-24 text-center">

            <h1 className="mt-1 text-4xl md:text-6xl font-bold tracking-tight leading-tight">
                Meet The Team
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



//You havent used a return function to show the actual content of the page, so nothing will render on the screen except for the contact modal when you click the contact button. 
// You need to add a return statement that includes the Header component and any other content you want to show on the Team page. For example:
// return (
//   <div className="min-h-screen overflow-hidden bg-[#0B3356] text-white">
//     <Header onContactClick={openContact} />
//   </div>
// ); 

//This will at least render the header and allow you to open the contact modal. You can then add more content about the team below the header as needed.