import { motion, useScroll, useTransform, scale } from "framer-motion";
import React from "react";

export default function HeroSection() {
  // Parallax effect for the image
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 400], [0, -40]);
  
  return (
    <section id="home" className="bg-[#0F1D3A] text-white">
      <div className="container mx-auto px-6 py-20 md:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
            Transforming Rural Healthcare
            <br className="hidden sm:block" />
            with AI + Human Oversight
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base text-white/80 md:text-lg">
            Digital eve AI is reshaping medical logistics for underserved
            communities. We combine machine learning with human intelligence to
            reduce costs, prevent stockouts, and improve outcomes.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center rounded-lg bg-[#5568F2] px-6 py-3 font-semibold text-white shadow-lg shadow-black/20 transition hover:bg-[#495AE6] active:translate-y-px"
            >
              Contact Us
            </a>

            <a
              href="#invest"
              className="inline-flex items-center rounded-lg bg-[#2ED3D0] px-6 py-3 font-semibold text-[#0F1D3A] shadow-lg shadow-black/20 transition hover:bg-[#25C1BE] active:translate-y-px"
            >
              Invest in the Mission
            </a>
          </div>
        </div>
      </div>

      {/*Animated image*/}
      <div className="container mx-auto px-6 pb-20 md:pb-28">
        <motion.figure
          style={{ y: parallaxY }}
          className="relative mx-auto w-full max-w-3xl"
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >

            {/*Make it float(yoyo) and subtle hover tilt*/}
            <motion.img
              src="/P3SquaredSE.png"// Replace with actual image path
              alt="Rural helathcare logistics"
              className="w-full rounded-2xl border-white/10 bg-[#10192d] object-cover shadow-2xl"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ rotate: 0.4, scale: 1.01}}
            />
            
            {/* glossy highlight */}
            <motion.div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-2xl"
              initial={{ x: "-120%" }}
              animate={{ x: ["-120%", "140%"] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              style={{
              background:
                "linear-gradient(115deg, transparent 0%, rgba(255,255,255,0.06) 45%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.06) 55%, transparent 100%)",
            }}
          />

          {/* glow behind the image */}
          <div
            aria-hidden
            className="absolute -inset-6 -z-10 rounded-[28px] blur-2xl"
            style={{
              background:
                "radial-gradient(60% 60% at 50% 40%, rgba(110,168,254,0.22), transparent 60%), radial-gradient(60% 60% at 60% 70%, rgba(46,211,208,0.18), transparent 65%)",
            }}
          />
        </motion.figure>
      </div>
    </section>
  );
}
