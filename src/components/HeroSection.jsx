import React from "react";
import heroTop from "../assets/P3SquaredSE.png";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#0B3356] text-white"
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[#0B3356]" />

      <div className="relative z-10 container mx-auto px-6 py-16 md:py-24 lg:py-28">
        <div className="grid items-center gap-5 lg:grid-cols-2">
          
          {/* LEFT CONTENT */}
          <div className="order-2 lg:order-1">
            <div className="max-w-xl rounded-2xl border border-white/15 bg-white/10 backdrop-blur-sm shadow-2xl px-6 py-7 md:px-8 md:py-9">
              <p className="text-xs tracking-[0.25em] text-white/70 font-semibold">
                WELCOME TO
              </p>

              <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                Transforming Rural Healthcare
                <br className="hidden sm:block" />
                with AI + Human Oversight
              </h1>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <img
              src={heroTop}
              alt="Healthcare AI"
              className="
                w-full
                max-w-[500px]
                md:max-w-[600px]
                lg:max-w-[800px]
                object-cover
              "
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}