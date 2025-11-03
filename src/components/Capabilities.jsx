import React from "react";

const cards = [
  { title: "AI Systems Design", desc: "Integrating AI-driven workflows for data-driven companies." },
  { title: "Human-Machine Research", desc: "Building collaborative frameworks inspired by MIT studies." },
  { title: "Software Engineering", desc: "Full-stack development for performance and reliability." },
  { title: "Accessibility & UX", desc: "Designing systems that are intuitive and inclusive." },
  { title: "Data Infrastructure", desc: "Building scalable backends for smart systems." },
  { title: "Automation & DevOps", desc: "Deploying efficient CI/CD pipelines." },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="py-24 bg-[#0F1D3A] text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-heading text-center mb-12">Our Capabilities</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((c, i) => (
            <div key={i} className="p-8 rounded-2xl bg-[#15294F] hover:bg-[#1A3370] transition">
              <h3 className="text-2xl font-semibold mb-3">{c.title}</h3>
              <p className="text-gray-400">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}