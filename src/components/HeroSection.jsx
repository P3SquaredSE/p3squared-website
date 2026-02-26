import React from "react";
import heroTop from "../assets/P3SquaredSE.png";

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#0B3356] text-white">
      {/* HERO IMAGE */}
      <div className="absolute inset-0">
        <img
          src={heroTop}
          alt=""
          className="h-full w-full object-cover 
            object-bottom 
            md:object-[50%_100%]"
          loading="eager"
          decoding="async"
        />

        {/* Dark gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B3356]/55 via-[#0B3356]/20 to-transparent" />
      </div>
      {/* CONTENT CARD */}
      <div className="relative z-10">
        <div className="container mx-auto px-6 py-20 md:py-28 lg:py-32">
          {/* Left Overlay Card */}
          <div className="max-w-xl rounded-2xl border border-white/15 bg-white/10 backdrop-blur-sm shadow-2xl px-6 py-7 md:px-8 md:py-9">
            <p className="text-xstracking-[0.25em] text-white/70 font-semibold">
              WELCOME TO
            </p>

            <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Transforming Rural Healthcare
              <br className="hidden sm:block" />
              with AI + Human Oversight
            </h1>            
          </div>
        </div>       
        <div className="h-[280px] md:h-[320px] lg:h-[360px]" />
      </div>
    </section>
  );
}