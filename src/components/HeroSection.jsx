import React from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import heroTop from "../assets/P3SquaredSE.png";

export default function HeroSection({ onContactClick }) {
  const shouldReduceMotion = useReducedMotion();

  // Parallax effect (very light to avoid GPU glitches)
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 500], [0, 18]);
  const yValue = shouldReduceMotion ? 0 : parallaxY;

  return (
    <section id="home" className="relative overflow-hidden text-white">
      {/* Background image */}
      <motion.div
        style={{ y: yValue }}
        className="absolute inset-0"
        aria-hidden="true"
      >
        <img
          src={heroTop}
          alt=""
          className="h-full w-full object-cover"
          loading="eager"
          decoding="async"
        />
      </motion.div>

      {/* Dark overlay tint (keeps your original blue vibe) */}
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(180deg, rgba(11,51,86,0.78) 0%, rgba(11,51,86,0.70) 55%, rgba(11,51,86,0.88) 100%)",
        }}
      />

      {/* Optional subtle glows (keep your existing style) */}
      <div
        className="pointer-events-none absolute -top-28 -left-28 h-72 w-72 rounded-full blur-3xl opacity-20"
        style={{
          background: "radial-gradient(circle at 30% 30%, rgba(85,104,242,0.7), transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-36 -right-28 h-80 w-80 rounded-full blur-3xl opacity-20"
        style={{
          background: "radial-gradient(circle at 70% 70%, rgba(41,196,255,0.45), transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Content container (centers the card like your example) */}
      <div className="relative z-10 container mx-auto px-6 py-20 md:py-28">
        <div className="flex min-h-[520px] items-center justify-center">
          {/* Overlay card */}
          <div className="w-full max-w-3xl rounded-2xl border border-white/15 bg-[#0B3356]/80 backdrop-blur-md shadow-2xl px-6 py-10 md:px-12 md:py-14 text-center">
            <p className="text-xs tracking-[0.25em] text-white/80 font-semibold">
              WELCOME TO
            </p>

            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Transforming Rural Healthcare
              <br className="hidden sm:block" />
              with AI + Human Oversight
            </h1>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => onContactClick?.()}
                className="inline-flex items-center justify-center rounded-lg bg-[#5568F2] px-8 py-3 text-sm md:text-base font-semibold shadow-md hover:bg-[#4658D8] transition
                           focus:outline-none focus:ring-2 focus:ring-white/70 focus:ring-offset-2 focus:ring-offset-[#0B3356]"
              >
                Contact Us
              </button>

              <a
                href="#invest"
                className="inline-flex items-center justify-center rounded-lg bg-[#27D5E6] px-8 py-3 text-sm md:text-base font-semibold text-[#041023] shadow-md hover:bg-[#1EC4D4] transition
                           focus:outline-none focus:ring-2 focus:ring-white/70 focus:ring-offset-2 focus:ring-offset-[#0B3356]"
              >
                Invest
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}