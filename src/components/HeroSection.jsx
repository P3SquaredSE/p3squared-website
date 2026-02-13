import React from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import heroTop from "../assets/P3SquaredSE.png";

export default function HeroSection({ onContactClick }) {
  const shouldReduceMotion = useReducedMotion();

  // Parallax effect for the image
  //const { scrollY } = useScroll();
  //const parallaxY = useTransform(scrollY, [0, 400], [0, 40]);
 // const yValue = shouldReduceMotion ? 0 : parallaxY;

  return (
    <section id="home" className="relative overflow-hidden bg-[#0B3356] text-white">
      {/* Glow backgrounds */}
      <div
        className="pointer-events-none absolute -top-32 -left-32 h-72 w-72 rounded-full blur-3xl opacity-25"
        style={{
          background: "radial-gradient(circle at 30% 30%, rgba(85,104,242,0.7), transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-40 -right-32 h-80 w-80 rounded-full blur-3xl opacity-25"
        style={{
          background: "radial-gradient(circle at 70% 70%, rgba(41,196,255,0.4), transparent 70%)",
        }}
      />

      {/* Text Content */}
      <div className="container mx-auto px-6 pt-16 pb-20 md:pt-24 md:pb-24">
        <div className="max-w-2xl text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight">
            Transforming Rural Healthcare
            <br className="hidden sm:block" />
            with AI + Human Oversight
          </h1>
        </div>

        {/* Hero Image */}
        <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-[#0B3356]">
          <img
            src={heroTop}
            alt="Illustration representing human-AI collaboration in healthcare logistics"
            className="block w-full h-auto object-cover"
            loading="eager"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}