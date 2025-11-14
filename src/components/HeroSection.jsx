import React from 'react';

export default function HeroSection() {
    return (
        <section id="home" className="relative bg-[#0F1D3A] text-white overflow-hidden">
            {/* decorative glow */}
            <div className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full blur-3xl opacity-20"
                    style={{ background: "radial-gradient(40% 40% at 50% 50%, #2253F6 0%, transparent 70%)" }} />
            <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full blur-3xl opacity-20"
                    style={{ background: "radial-gradient(40% 40% at 50% 50%, #1A3370 0%, transparent 70%)" }} />

            <div className="container mx-auto px-6 py-24 md:py-32">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left: copy + CTAs */}
                    <div>
                        {/* tiny badge (optional) */}
                        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm mb-5">
                            <span className="h-2 w-2 rounded-full bg-[#2253F6]" />
                            <span>Human + AI Collaboration</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight">
                            Build with <span className="text-[#2253F6]">P3Squared</span>
                        </h1>

                        <p className="mt-4 text-lg text-gray-300 max-w-xl">
                            Empower your team with AI-driven systems, clear UX, and reliable infrastructure — all
                            designed to accelerate real-world projects.
                        </p>

                        <div className="mt-8 flex flex-wrap items-center gap-3">
                            <a href="#capabilities"
                                className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold bg-[#2253F6] hover:bg-[#163CD1] transition">
                                Explore Capabilities
                            </a>
                            <a href="#contact"
                                className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold border border-white/20 hover:border-white/40 bg-white/0 transition">
                                Talk to Us
                            </a>
                        </div>
                    </div>

                    {/* Right: image / mockup */}
                    <div className="md:justify-self-end">
                        <div className="relative w-full max-w-xl aspect-[16/10] rounded-2xl border border-white/10 bg-[#15294F] shadow-xl overflow-hidden flex items-center justify-center">
                            {/* If you have an image, uncomment the img and remove the placeholder */}
                            {/* <img src={heroImg} alt="P3Squared preview" className="h-full w-full object-cover" /> */}

                            {/* Placeholder if you don't have an asset yet */}
                            <div className="grid grid-cols-3 gap-3 p-6 w-full">
                                <div className="h-28 rounded-lg bg-[#1A3370]"></div>
                                <div className="h-28 rounded-lg bg-[#1A3370]"></div>
                                <div className="h-28 rounded-lg bg-[#1A3370]"></div>
                                <div className="h-28 rounded-lg bg-[#1A3370]"></div>
                                <div className="h-28 rounded-lg bg-[#1A3370]"></div>
                                <div className="h-28 rounded-lg bg-[#1A3370]"></div>
                            </div>

                            {/* subtle top gradient */}
                            <div className="pointer-events-none absolute inset-x-0 -top-24 h-48 bg-gradient-to-b from-white/10 to-transparent"></div>
                         </div>
                    </div>
                </div>
            </div>
        </section>
    );
}