import React from "react";

export default function HumanAICollab() {
  return (
    <section id="collaboration" className="py-24 bg-gradient-to-b from-[#0B3356] to-[#061A2E]">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-heading font-semibold mb-6">Human–Machine Collaboration</h2>
          <p className="text-gray-300 mb-6">
            Inspired by MIT’s <em>Designing AI Systems With Human–Machine Teams
              </em>, we engineer systems that amplify both human reasoning and machine precision.
          </p>
          <p className="text-gray-400">
            Our approach prioritizes interoperability, authority balance, and 
            mutual trust between human operators and AI models.
          </p>
        </div>
        <div className="h-80 bg-[#15294F] rounded-2xl flex items-center justify-center text-accent font-mono">
          ⚙️ Visualization Placeholder
        </div>
      </div>
    </section>
  );
}