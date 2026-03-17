import React, { useMemo, useState, useCallback} from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import mriIcon from "../assets/icons/mriIcon.png";
import pharmacyshopIcon from "../assets/icons/pharmacyshopIcon.png";
import brainIcon from "../assets/icons/brainIcon.png";


function clamp(n, min, max) {
    return Math.max(min, Math.min(n, max));
}

function HtmlText({ as = "p", className = "", html = "" }) {
    const Tag = as;
    return <Tag className={className} dangerouslySetInnerHTML={{ __html: html }} />;
}

function BulletList({ items }) {
    return (
        <ul className="mt-3 list-disc pl-5 space-y-2 text-white/85">
            {items.map((t, i) => (
                <li key={i} className="leading-relaxed">
                    <HtmlText as="span" className="text-white/85" html={t} />
                </li>
            ))}
        </ul>
    );
}

function NumberList({ items }) {
  return (
    <ol className="mt-3 list-decimal pl-6 space-y-2 text-white/85">
      {items.map((t, i) => (
        <li key={i} className="leading-relaxed">
            <HtmlText as="span" className="text-white/85" html={t} />
        </li>
      ))}
    </ol>
  );
}

function CardBody({ blocks }) {
  return (
    <div className="mt-4 space-y-3">
      {blocks.map((b, idx) => {
        if (b.type === "bullets") return <BulletList key={idx} items={b.items} />;
        if (b.type === "numbers") return <NumberList key={idx} items={b.items} />;

        if (b.type === "h") {
          return (
            <h4 key={idx} className="mt-4 text-white font-semibold text-lg">
              {b.text}
            </h4>
          );
        }

        if (b.type === "b") {
          return (
            <p key={idx} className="text-white font-semibold">
              {b.text}
            </p>
          );
        }

        // type "p" (contains <i> tags sometimes)
        return (
          <HtmlText
            key={idx}
            as="p"
            className="text-white/85 leading-relaxed"
            html={b.text}
          />
        );
      })}
    </div>
  );
}

export default function OurPhilosophy({ onContactClick }) {
    const items = useMemo(() => [
        {
            key:"capital-assets",
            icon: mriIcon,
            title: "Capital Assets (Predictive Maintenance)",
            blocks: [
                    {type: "h", text: "Rural Hospitals: The Underserved Superheroes - From the Ground Up"

                    },
                    {type: "p", text: `Rural healthcare facilities operate on a razor edge. They are the first line of defense for
                        millions of Americans, acting as the underserved superheroes of the medical landscape. Yet, as
                        highlighted in a recent <i>HealthExec</i> report (Jan 2026), these institutions are fighting a battle
                        against geography, economics, and obsolescence—often with one hand tied behind their backs.`
                    },
                    {type: "h", text: "The Geography Barrier and The Knowledge Gap"},
                    {type: "p", text: `The single biggest hurdle for rural maintenance is physical distance. In a major urban center, a biomedical
                        engineer is often just down the hall. In rural America, that engineer is a luxury. <i>HealthExec</i>
                        notes that geography is the primary reason skilled maintenance personnel are difficult to access.
                        Consequently, Original Equipment Manufacturers (OEMs) often cite response times of 24–72 hours for
                        rural rural tickets—an eternity in emergency medicine compared to the rapid response in cities.`
                    },
                    {type: "h", text: 'The Threat of the "Single Point of Failure"' },
                    {type: "p", text: `This delay is compounded by a stark lack of redundancy. Unlike urban centers that may
                        have backup wings, a rural clinic often possesses only one CT scanner or one MRI machine. When that
                        machine goes down, patient care stops completely.`
                    },
                    {type: "p", text: `The financial reality forces these hospitals to maintain "aging fleets"—equipment kept
                        long past its prime because the facility cannot afford the capital expenditure of new models. This creates
                        a dangerous cycle:`
                    },
                    {type: "bullets", items: [
                        'OEMs discontinue support for "end of life" models.',
                        'Hospitals cannot afford the rigid, expensive repair contracts OEMs demand.',
                        'Administrators are left scrambling to resource replacement parts that are no longer manufactured.'
                        ],
                    },
                    {type: "h", text: "The Human Cost"},
                    {type: "p",  text: `The result is not just a line item on a budget; it is a disruption of human lives.
                        When equipment fails, patients must be transferred to hospitals many miles away. This separates patients
                        from their support systems and families while driving up costs by forcing care into more expensive, distant facilities.`
                    },
                    {type: "h", text: "The Engineering Mandate: From Prediction to Forecasting "},
                    {type: "p", text: `Anticipating these failures is the only way to stabilize the rural health system. As researcher
                        L. Subramanian states, "A good health system will necessitate a supply chain that can deliver and guarantee affordable
                        health commodities at the appropriate quality." Crucially, Subramanian notes that supply chains must not only deliver
                        hardware but must "return information on demand, consumption, and shortages to the health planners" (Logistics, 2021).`
                    },
                    {type: "p", text: `This is where P3Squared steps in. We believe that bottlenecks can be erased through collaboration and
                        continuous, AI-assisted information flow. It is no longer enough to react to a breakdown. Rural clinics need to move
                        beyond mere prediction (guessing when a break might occur) to forecasting (identifying potential future events to proactively manage the supply chain).`},
                    {type: "p", text: `By utilizing software to bridge the gap between inventory, skilled labor availability, and equipment status, we can
                        support the "underserved superheroes" of rural healthcare, ensuring that distance and budget are no longer barriers to saving lives.`
                    },
            ],
        },

        {
            key: "consumables",
            icon: pharmacyshopIcon,
            title: "Consumables (Automated Replenishment)",
            blocks: [
                {type: "h", text: "The Consumable Lifeline – From Drugs to Kleenex"},
                {type: "p", text: `While a broken CT scanner is a headline event, a rural hospital can be brought to its knees just as quickly by a shortage of
                    the mundane: IV fluids, surgical gloves, or even sterile saline.`
                },
                {type: "b", text:'The Problem: The "Just-in-Time" Trap '},
                {type: "p", text: 'For decades, hospitals relied on "Just-in-Time" delivery to keep costs low. In rural healthcare, this model is broken.'},
                {type: "bullets", items: [
                    '<b>The "Last Mile" Tax:</b> Distributors often prioritize high-volume urban centers, leaving rural clinics at the end of the delivery route.',
                    '<b>The Expiration Risk:</b> Without precise tracking, rural clinics often over-order "just in case," leading to thousands of dollars in expired medications, or under-order and face critical stockouts.',
                    '<b>Manual Blind Spots:</b> In many small clinics, inventory is still counted by hand on clipboards. If a nurse forgets to log a box of catheters during a shift change, the system assumes they are still on the shelf.'
                    ],
                },
                { type: "h", text: "Real-World Context (2025-2026)"},
                { type: "p", text: `Recent supply chain shocks—such as the IV fluid shortages following manufacturing disruptions in 2025—proved that rural hospitals',
                    need more than a clipboard. They need a shield. When the supply chain snaps, rural facilities are the last to be restocked.`
                },
            ],
        },

        {
            key: "command-center",
            icon: brainIcon,
            title: "The P3Squared Command Center",
            blocks: [
                { type: "h", text: "The P3Squared Solution: Automated Resilience"},
                { type: "p", text: `P3Squared extends its forecasting engine beyond machinery to manage the flow of every consumable item, creating a "Touchless Supply Chain."`},
                { type: "numbers", items: [
                    `<b>Smart Usage Tracking:</b> Instead of manual logging, we integrate with "Smart Cabinet" data and Electronic Health Records (EHR). When a doctor prescribes a flu treatment, our system automatically decrements the viral swab and medication inventory instantly.`,
                    `<b>Seasonal Predictive Ordering:</b> Our AI doesn't just replace what was used yesterday; it looks ahead. It analyzes local epidemiological data to see that flu season is spiking in the neighboring county, automatically increasing orders for antivirals and tissues before the first wave of patients walks through the door.`,
                    `<b>Dynamic Sourcing:</b> If the primary vendor is out of stock, P3Squared instantly scans alternative verified distributors to secure essential supplies, preventing a local shortage from becoming a crisis.`
                    
                    ],
                },
            ],
        },
    ], 
    []
);

const [index, setIndex] = useState(0);

const goTo = useCallback(
    (next) => setIndex((prev) => clamp(next, 0, items.length - 1)),
    [items.length]
);

const next = useCallback(
    () => setIndex((prev) => clamp(prev + 1, 0, items.length - 1)),
    [items.length]
);

const prev = useCallback(
    () => setIndex((prev) => clamp(prev - 1, 0, items.length - 1)),
    [items.length]
);

const active = items[index];

const prefersReducedMotion = useReducedMotion();

const iconPosClass =
  active.key === "capital-assets"
    ? "top-6 left-6" // MRI upper-left
    : active.key === "consumables"
    ? "top-1/2 right-6 -translate-y-1/2" // Pill middle-right
    : "top-6 left-6"; // Brain left again (upper-left style)

return (
    <section className="relative w-full overflow-hidden pb-28"
        aria-labelledby="philosophy-title"
        >
        <p className="sr-only" aria-live="polite">
            Showing: {active.title}
        </p>

        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0 opacity-70">
            <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-48 right-[-120px] h-[520px] w-[520px] rounded-full bg-white/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-14 md:py-20">
            {/* Header */}
            <div className="text-center">
                <div>
                    <p className="text-white/80 text-sm tracking-wide uppercase">
                        Our Philosophy 
                    </p>
                    <h2 
                        id="philosophy-title"
                        className="mt-2 mx-auto max-w-3xl text-3xl md:text-4xl font-semibold text-white text-center">
                        Build Resilience for Rural Healthcare
                    </h2>
                    <p className="mt-3 mx-auto max-w-2xl text-white/80 leading-relaxed text-center">
                        Three pillars: Capital Assets, Consumables, and a Unified Command
                        Center so rural facilities can plan ahead instead of reacting late.                        
                    </p>
                </div>
            </div>

            {/* tabs */}
            <div className="mt-8 flex flex-wrap justify-center gap-2"
                role="radiogroup"
                aria-label="Select a philosophy pillar"
                >
                {items.map((it, i) => (
                    <button
                        key={it.key}
                        type="button"
                        onClick={() => goTo(i)}
                        role="radio"
                        aria-checked={i === index}
                        aria-label={`Show ${it.title}`}
                        className={["flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition",
                            i === index
                                ? "border-white/30 bg-white/15 text-white"
                                : "border-white/10 bg-white/5 text-white/80 hover:bg-white/10",
                        ].join(" ")}
                        >
                            <img src={it.icon} alt="" className="h-5 w-5" />
                            <span>{it.title}</span>
                    </button>
                ))}
            </div>

            {/* card */}
            <div className="mt-6">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={active.key}
                        initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
                        animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                        exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
                        transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.25 }}
                        role="region"
                        aria-labelledby="active-card-title"
                        tabIndex={-1}
                        className="relative rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 shadow-xl"
                    >
                        {/* Floating icon */}
                        <div
                            className={[
                                "absolute",
                                iconPosClass,
                                "rounded-2xl border border-white/20 bg-white/10 p-3",
                            ].join(" ")}
                        >
                            <img
                                src={active.icon}
                                alt=""
                                aria-hidden="true"
                                className="h-10 w-10 drop-shadow-[0_2px_10px_rgba(255,255,255,0.35)]"
                            />
                        </div>

                        {/* Content padding so text doesn't collide with icon */}
                        <div
                            className={[
                                "min-w-0",
                                active.key === "consumables" ? "pr-24" : "pl-24",
                            ].join(" ")}
                        >
                            <h3 
                                id="active-card-title"
                                className="text-xl md:text-2xl font-semibold text-white">
                                {active.title}
                            </h3>
                            <CardBody blocks={active.blocks} />
                        </div>
                    </motion.div>
                </AnimatePresence>

                <div className="sticky bottom-4 mt-6 flex justify-end gap-2">
                    <button
                        type="button"
                        onClick={prev}
                        disabled={index === 0}
                        aria-disabled={index === 0}
                        className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-white/90 hover:bg-white/10 
                                    disabled:opacity-40 disabled:cursor-not-allowed
                                    focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B3356]"
                    >
                        Previous
                    </button>

                    <button 
                        type="button"
                        onClick={next}
                        disabled={index === items.length - 1}
                        aria-disabled={index === items.length - 1}
                        className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-white/90 hover:bg-white/10 
                                    disabled:opacity-40 disabled:cursor-not-allowed
                                    focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B3356]"
                    > 
                        Next
                    </button>

                    {onContactClick && ( 
                        <button
                            type="button"
                            onClick={onContactClick}
                            aria-haspopup="dialog"
                            className="rounded-xl bg-white px-4 py-2 font-semibold text-black hover:opacity-90
                                        focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 
                                        focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B3356]"
                        > 
                            Contact
                        </button>
                    )}
                </div>               


            </div>

        </div>
    </section>
);
}