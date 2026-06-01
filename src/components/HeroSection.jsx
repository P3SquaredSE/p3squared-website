import React from "react";
import heroTop from "../assets/P3SquaredSE.png";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#0B3356] text-white"
    >
      {/* Mobile/Tablet version */}
      <div className="relative z-10 block lg:hidden">
        <div className="container mx-auto px-6 py-14">
          <div className="flex flex-col items-center gap-10">
            
            {/* Image */}
            <div className="flex justify-center">
              <img
                src={heroTop}
                alt="Healthcare AI"
                className="w-full max-w-[500px] object-contain"
              />
            </div>

            {/* TEXT CARD */}
            <div className="max-w-xl rounded-2xl border border-white/15 bg-white/10 backdrop-blur-sm shadow-2xl px-6 py-7">
              <p className="text-xs tracking-[0.25em] text-white/70 font-semibold">
                WELCOME TO
              </p>

              <h1 className="mt-3 text-3xl sm:text-4xl font-bold leading-tight">
                Transforming Rural Healthcare 
                <br className="hidden sm:block" />
                with AI + Human Oversight
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* DESKTOP VERSION  */}
      <div className="hidden lg:block">
        
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={heroTop}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover object-bottom md:object-[50%_100%]"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B3356]/70 via-[#0B3356]/30 to-transparent" />
        </div>

        {/* CONTENT */}
        <div className="relative z-10">
          <div className="container mx-auto px-6 py-20 md:py-28 lg:py-32">
            
            {/* LEFT CARD */}
            <div className="max-w-xl rounded-2xl border border-white/15 bg-white/10 backdrop-blur-sm shadow-2xl px-6 py-7 md:px-8 md:py-9">
              <p className="text-xs tracking-[0.25em] text-white/70 font-semibold">
                WELCOME TO
              </p>

              <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                Transforming Rural Healthcare
                <br />
                with AI + Human Oversight
              </h1>
            </div>
          </div>

          {/* Image HEIGHT */}
          <div className="h-[280px] md:h-[320px] lg:h-[360px]" />
        </div>
      </div>
    </section>
  );
}