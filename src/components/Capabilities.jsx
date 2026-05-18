
// WE DONT NEED THIS COMPONENT ANYMORE, BUT I DONT WANT TO DELETE IT JUST YET IN CASE WE WANT TO REUSE IT IN THE FUTURE

import React from "react";

export default function Capabilities() {
  return (
    <section id="capabilities" aria-labelledby="capabilities-title" className="py-24 bg-[#0B3356] text-white border-t border-white/5">
      {/* heading + text */}
      <div className="container mx-auto px-6">
        <h2 id="capabilities-title" className="text-3xl md:text-4xl font-heading text-center mb-4">
          Where Human Insights Meets AI Precision
        </h2>
        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-10">
          Our team is dedicated to bringing hospitals together to centralize supply ordering for rural hospitals 
          and then disperse those supplies to each respective facility. This decreases supply costs and supports 
          better deliveries.
        </p>
        <h2 id="capabilities-title" className="text-3xl md:text-4xl font-heading text-center mb-4">
          Our Mission
        </h2>
        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-10" > 
          At P3Squared, we believe survival shouldn’t be a gamble. We support Critical Access
          Hospitals (CAHs) and Rural Emergency Hospitals (REHs) by providing the predictive tools and
          operational strategies needed for survival and regulatory compliance.
        </p> 
        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-10"> 
          The P3Squared Team refuses to accept the decline of rural healthcare as an inevitability. We advocate
          for the idea that your zip code should not determine your life expectancy. Our advocacy is rooted in three
          core pillars: 
        </p> 
        <h2 id="capabilities-title" className="text-3xl md:text-4xl font-heading text-center mb-4">
          Protecting the Rural Economy:
        </h2> 
        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-10"> 
          A hospital is often the largest employer in a rural county. When a facility
          stabilizes, the local economy stabilizes. We fight to keep healthcare jobs where they belong—in the
          community.
        </p>
        <h2 id="capabilities-title" className="text-3xl md:text-4xl font-heading text-center mb-4">
          Equitable Access to Care:
        </h2> 
        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-10"> 
          We believe federal subsidies should empower hospitals, not restrict them. We
          advocate for operational models that balance financial viability with the human need for local inpatient
          care and maternity services.
        </p>
        <h2 id="capabilities-title" className="text-3xl md:text-4xl font-heading text-center mb-4">
          Empowering Local Leadership:
        </h2> 
        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-10"> 
          Rural healthcare leaders are being asked to do the impossible with fewer
          resources. We stand behind these CEOs and Boards, providing the data-driven "armor" they need to
          navigate complex regulations and stay independent."We don't just see data points; we see neighbors,
          families, and the fundamental right to emergency care. P3Squared exists to ensure the 'Golden Hour'
          remains a reality for every American, regardless of how far they live from a city center."
        </p>
      </div>
    </section>
  );
}