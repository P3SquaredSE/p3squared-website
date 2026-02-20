import React from "react";
import heroTop from "../assets/P3SquaredSE.png";

export default function HeroSection() {
  return (
    <section id="home" className="relative bg-[#0B3356] text-white">
      {/* HERO IMAGE */}
      <div className="container mx-auto px-6 pt-10 pb-12">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
          <div className="relative h-[360px] sm:h-[440px] md:h-[520px] lg:h-[560px] bg-[#0B3356]">
            <img
              src={heroTop}
              alt="Illustration representing human-AI collaboration in healthcare logistics"
              className="absolute inset-0 h-full w-full object-contain"
              loading="eager"
              decoding="async"
            />

            {/* Dark gradient for readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B3356]/35 via-[#0B3356]/15 to-transparent" />
            {/* LEFT OVERLAY CARD */}
            <div className="absolute inset-y-0 left-0 flex items-center">
              <div className="m-4 sm:m-6 md:m-8 max-w-[520px] rounded-2xl border border-white/10 bg-[#0B3356]/35 backdrop-blur-sm p-6 sm:p-8">
                <p className="text-xs tracking-[0.25em] text-white/70">
                  WELCOME TO
                </p>

                <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
                  Transforming Rural Healthcare
                  <br className="hidden sm:block" />
                  with AI + Human Oversight
                </h1>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}