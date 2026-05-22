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
    </div>
   ); 

    

 <ContactModal
    isOpen={isContactOpen}
    onClose={closeContact}
    formAction={CONTACT_FORM_ACTION}
    preset={contactPreset}  
    />
}



//You havent used a return function to show the actual content of the page, so nothing will render on the screen except for the contact modal when you click the contact button. 
// You need to add a return statement that includes the Header component and any other content you want to show on the Team page. For example:
// return (
//   <div className="min-h-screen overflow-hidden bg-[#0B3356] text-white">
//     <Header onContactClick={openContact} />
//   </div>
// ); 

//This will at least render the header and allow you to open the contact modal. You can then add more content about the team below the header as needed.