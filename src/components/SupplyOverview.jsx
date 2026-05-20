import React from "react";
import {
  Boxes,
  Truck,
  BrainCircuit,
  Radar,
} from "lucide-react";

const stages = [
  {
    icon: Boxes,
    number: "01",
    title: 'Collective Procurement (The Power of "We")',
    description:
      "Small hospitals often pay a rural premium because they lack the volume of city systems. P3Squared coordinates Joint Ordering Groups where neighboring hospitals and clinics purchase materials together. By aggregating needs, facilities gain access to Tier-1 pricing and higher-quality materials that were previously out of reach.",
  },
  {
    icon: Truck,
    number: "02",
    title: "Coordinated Distribution & Logistics",
    description:
      "Ordering supplies is only half the battle. P3Squared assists with the physical distribution and logistics of shared orders to ensure materials move efficiently from manufacturers to rural facilities.",
  },
  {
    icon: BrainCircuit,
    number: "03",
    title: '"Human-in-Command" AI (Predictive Patterns)',
    description:
      "P3Squared uses Human-in-Command AI on top of a Databricks data lake to identify ordering patterns, match hospitals and clinics with shared procurement needs, and provide purchasing managers with data-backed reorder suggestions.",
    bullets: [
      "Identify Patterns: Automatically spots supplies frequently ordered together across the network.",
      'Match Partners: Suggests which hospitals or clinics should "buddy up" for future orders.',
      "Suggest Reorders: Reduces manual inventory management through data-backed suggestions.",
    ],
  },
  {
    icon: Radar,
    number: "04",
    title: "Seasonal Forecasting & Global Data Tracking",
    description:
      "P3Squared uses local health trends, weather patterns, and global supply chain indicators to forecast supply needs months in advance.",
    bullets: [
      "Flu / Respiratory Season: Predicts surges in PPE and respiratory supply demand.",
      "Agricultural Cycles: Accounts for seasonal shifts that impact clinic volume.",
      'Predictive Armor: Provides visibility into future supply needs before shortages occur.',
    ],
  },
];

export default function SupplyOptimizationOverview() {
  return (
    <section
      aria-labelledby="supply-engine-title"
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 md:p-10 shadow-2xl"
    >
      {/* Background GLOW */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 h-[300px] w-[300px] rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      <div className="relative">
        {/* Header */}
        <div className="max-w-4xl">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">
            Human-in-Command AI
          </p>

          <h2
            id="supply-engine-title"
            className="mt-4 text-3xl md:text-5xl font-bold tracking-tight leading-tight"
          >
            P3Squared Supply Side Engine
          </h2>

          <p className="mt-6 text-lg text-white/75 leading-relaxed">
            Bringing Rural Hospitals and Clinics together for supply side needs.
          </p>
        </div>

        {/* intro */}
        <div className="mt-10 rounded-3xl border border-white/10 bg-[#0D2742]/80 p-6 md:p-8">
          <p className="text-lg text-white/80 leading-relaxed">
            In rural healthcare, a supply chain disruption isn't just a
            logistical headache—it’s a threat to patient safety. P3Squared
            transforms the traditional, fragmented procurement process into a
            unified, AI-driven powerhouse. We don't just help you buy supplies;
            we ensure you never face a shortage or a price spike alone.
          </p>
        </div>

        {/* Title */}
        <div className="mt-14">
          <h3 className="text-2xl md:text-3xl font-semibold">
            Our Four-Stage Supply Optimization
          </h3>
        </div>

        {/* Stages */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {stages.map((stage) => {
            const Icon = stage.icon;

            return (
              <article
                key={stage.number}
                className="rounded-3xl border border-white/10 bg-[#0D2742]/80 p-6 md:p-8"
              >
                {/* TOP */}
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10">
                    <Icon className="h-7 w-7 text-cyan-300" />
                  </div>

                  <span className="text-sm font-semibold text-white/40">
                    {stage.number}
                  </span>
                </div>

                
                <h4 className="mt-6 text-xl md:text-2xl font-semibold leading-snug">
                  {stage.title}
                </h4>

                
                <p className="mt-4 text-white/75 leading-relaxed">
                  {stage.description}
                </p>

            
                {stage.bullets && (
                  <ul className="mt-6 space-y-3">
                    {stage.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="rounded-2xl border border-white/10 bg-white/5 p-4 text-white/75 leading-relaxed"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            );
          })}
        </div>

        {/* closing section */}
        <div className="mt-14 rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-6 md:p-8">
          <h3 className="text-2xl font-semibold">
            Closing the Loop: Guaranteed Delivery
          </h3>

          <p className="mt-5 text-white/80 leading-relaxed">
            A prediction is only as good as the delivery. P3Squared provides
            end-to-end oversight to ensure deliveries are made on time across
            all associated clinics and hospitals. We monitor transit data in
            real-time, intervening at the first sign of a delay to ensure your
            staff always has the tools they need to save lives.
          </p>
        </div>
      </div>
    </section>
  );
}