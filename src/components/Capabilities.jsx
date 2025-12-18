import React from "react";

const cards = [
  { title: "Strategize",
    desc: "Define AI-driven frameworks for system optimization." },
  { title: "Integrate",
    desc: "Merge human workflows with intelligent automation." },
  { title: "Collaborate",
    desc: "Design interfaces for Human + AI decision synergy." },
  { title: "Support",
    desc: "Provide continuous improvement and insights." },
  { title: "Optimize",
    desc: "Fine-tune infrastructure for reliability and speed." },
  { title: "Develop",
    desc: "Build high-perfomance, accessible software systems." },
];

export default function Capabilities() {
  return (
    <section id="capabilities" aria-labelledby="capabilities-title" className="py-24 bg-[#0B3356] text-white border-t border-white/5">
      {/* heading + text */}
      <div className="container mx-auto px-6">
        <h2 id="capabilities-title" className="text-3xl md:text-4xl font-heading text-center mb-4">
          Where Human Insights Meets AI Precision
        </h2>
        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-10">
          We design intelligent systems that combine human creativity with
          machine efficiency to drive innovation, reliabilty, and real-world
          impact.
        </p>

        {/* 2 x 3 cards grid (for screen readers)*/}
        <ul className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto" role="list">
          {cards.map((c) => (
            <li key={c.title}>
              <div
                tabIndex={0}
                className="p-6 rounded-2xl bg-[#15294F] shadow-md transition hover:bg-[#1A3370] focus:outline-none focus:ring-2 focus:ring-white/70 focus:ring-offset-2 focus:ring-offset-[#0B3356] motion-reduce:transition-none"
                aria-label={`${c.title}. ${c.desc}`}
                >
                <h3 className="text-xl font-semibold mb-3">{c.title}</h3>
                <p className="text-sm text-gray-300">{c.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}