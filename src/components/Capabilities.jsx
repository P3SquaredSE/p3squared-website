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
    <section id="capabilities" className="bg-[#0F1D3A] text-white py-24">
      <div className="container mx-auto px-6">
        {/* heading + text */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Where Human Insights Meets AI Precision
            </h2>
          <p className="mt-4 text-white/80">
          We design intelligent systems that combine human creativity with
          machine efficiency to drive innovation, reliabilty, and real-world
          impact.
          </p>
        </div>

        {/* 2 x 3 cards grid */}
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {cards.map((c, i) => (
            <div
              key={i}
              className="rounded-2xl bg-[#15294F] PX-8 PY-10 shadow-lg shadow-black/30 border border-white/5 transition hover:-translate-y-1 hover:bg-[#1A3460]">
              <h3 className="mb-3 text-xl font-semibold">{c.title}</h3>
              <p className="text-sm text-gray-300">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}