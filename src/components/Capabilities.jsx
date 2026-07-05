import React from "react";

const pillars = [
  {
    title: "Protecting the Rural Economy",
    description: 
      "A hospital is often the largest employer in a rural county. When a facility stabilizes, the local economy stabilizes. We fight to keep healthcare jobs where they belong-in the community."
  },
  {
    title: "Equitable Access to Care",
    description: 
      "We believe federal subsidies should empower hospitals, not restrict them. We advocate for operational models that balance financial viability with the human need for local inpatient care and maternity services."
  },
  {
    title: "Empowering Local Leadership",
    description: 
      "Rural healthcare leaders are being asked to do the impossible with fewer resources. We stand behind these CEOs and Boards, providing the data-driven 'armor' they need to navigate complex regulations and stay independent. We don't just see data points; we see neighbors, families, and the fundamental right to emergency care. P3Squared exists to ensure the 'Golden Hour' remains a reality for every American, regardless of how far they live from a city center."
  }
];

export default function Capabilities() {

  return (
    <section id="capabilities" aria-labelledby="capabilities-title" className="py-24 bg-[#0B3356] text-white border-t border-white/5">
      
      <div className="container mx-auto px-6">
        {/* heading + text */}
        <div className="text-center">
          <h2 id="capabilities-title" className="text-3xl md:text-4xl font-heading text-center mb-4">
            Where Human Insights Meets AI Precision
          </h2>
          <p className="text-gray-300 text-center max-w-2xl mx-auto mb-10">
            Our team is dedicated to bringing hospitals together to centralize supply ordering for rural hospitals 
            and then disperse those supplies to each respective facility. This decreases supply costs and supports 
            better deliveries.
          </p>
        </div>

        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading text-center mb-5">
            Our Mission
          </h2>
          <p className="text-white/80 leading-relaxed mb-10" > 
            At P3Squared, we believe survival shouldn’t be a gamble. We support Critical Access
            Hospitals (CAHs) and Rural Emergency Hospitals (REHs) by providing the predictive tools and
            operational strategies needed for survival and regulatory compliance.
          </p> 
          <p className="text-white/80 leading-relaxed mb-16" > 
            The P3Squared Team refuses to accept the decline of rural healthcare as an inevitability. We advocate
            for the idea that your zip code should not determine your life expectancy. Our advocacy is rooted in three
            core pillars: 
          </p> 
        </div>

        {/* Pillars section */}
        <div className="mt-24">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading mb-4">
              Our Three Pillars
            </h2>

            <p className="text-white/70 leading-relaxed">
              Every recommendation we make is guided by three commitments
              designed to strengthen rural healthcare and protect the communities
              that depend on it.
            </p>
          </div>

          <div className="space-y-8">

            {pillars.map((pillar, index) => (

              <article
                key={pillar.title}
                className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm
                p-8 md:p-10 transition-all duration-300 ease-out hover:border-cyan-400/30 hover:bg-white/10"
                >

                  <div className="flex flex-col md:flex-row md:items-start md:gap-10">

                    {/* Pillar number */}
                    <div className="flex-shrink-0 mb-6 md:mb-0">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-400/10 
                      border border-cyan-400/30 text-cyan-300 text-xl font-bold">

                        {index + 1}
                      </div>
                    </div>

                    {/* Pillar content */}
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                        {pillar.title}
                      </h3>
                      <p className="text-white/80 leading-relaxed max-w-4xl">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}