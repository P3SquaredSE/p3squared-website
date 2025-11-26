import React from "react";
import { motion, useScroll, useTransform, scale } from "framer-motion";
import heroTop from "../assets/P3SquaredSE.png";

export default function HeroSection() {
  
  // Parallax effect for the image
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 400], [0, -40]);

  return (
    <section id="home" className="relative overflow-hidden bg-[#0F1D3A] text-white">

      {/* Glow backgrounds */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-72 w-72 rounded-full blur-3xl opacity-25"
        style={{
          background:"radial-gradient(circle at 30% 30%, rgba(85,104,242,0.7), transparent 70%)",
        }}
      />
      <div className="pointer-events-none absolute -bottom-40 -right-32 h-80 w-80 rounded-full blur-3xl opacity-25"
        style={{
          background:"radial-gradient(circle at 70% 70%, rgba(41,196,255,0.4), transparent 70%)",
        }}
      />

      {/*Text Content*/}
      <div className="container mx-auto px-6 pt-16 pb-20 md:pt-24 md:pb-24">
        <div className="mx-auto max-w-3xl text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Transforming Rural Healthcare
            <br className="hidden md:block" />
            with AI + Human Oversight
          </h1>

          <p className="text-sm md:text-lg text-gray-300 max-w-2xl mx-auto">
            Digital eve AI is reshaping medical logistics for underserved
            communities. We combine machine learning with human intelligence to
            reduce costs, prevent stockouts, and improve outcomes.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg bg-[#5568F2] px-7 py-3 text-sm md:text-base font-semibold shadow-md hover:bg-[#4658D8] transition"
            >
              Contact Us
            </a>

            <a
              href="#invest"
              className="inline-flex items-center justify-center rounded-lg bg-[#27D5E6] px-7 py-3 text-sm md:text-base font-semibold text-[#041023] shadow-md hover:bg-[#1EC4D4] transition"
            >
              Invest in the Mission
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <motion.div
          style={{ y: parallaxY }}
          className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-white/10"
        >
          <img
            src={heroTop}
            alt="Connected rural logistics"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
