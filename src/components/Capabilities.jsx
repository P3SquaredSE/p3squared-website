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

       
      </div>
    </section>
  );
}