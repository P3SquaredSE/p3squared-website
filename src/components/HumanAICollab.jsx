import React from "react";
import collabImg from "../assets/HumanMachineCollaboration.png";

export default function HumanAICollab() {
  return (
    <section id="collaboration" aria-labelledby="collaboration-title" className="py-24 bg-gradient-to-b from-[#0B3356] to-[#061A2E]">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 id="collaboration-title" className="text-4xl font-heading font-semibold mb-6">
            Human–Machine Collaboration
          </h2>

          <p className="text-gray-300 mb-6">
            Inspired by MIT’s <em>Designing AI Systems With Human–Machine Teams
              </em>, we engineer systems that amplify both human reasoning and machine precision.
          </p>

          <p className="text-gray-400">
            Our approach prioritizes interoperability, authority balance, and 
            mutual trust between human operators and AI models.
          </p>
        </div>

        <figure className="h-80 bg-[#15294F] rounded-2xl overflow-hidden">
          <div>
            <img
            src={collabImg}
            alt="Illustration of human machine collaboration in healthcare, showing ethical AI and human oversight"
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b3356]/55 via-transparent to-transparent"/>
          </div>
          <figcaption className="px-6 py-4 text-sm text-white/80">
            Human and AI collaboration visualization for healthcare systems, illustrating ethical AI practices and human oversight in medical decision-making.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}