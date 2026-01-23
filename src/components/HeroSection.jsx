import React, { use, useEffect, useId, useRef, useState} from "react";
import { motion, AnimatePresence, useScroll, useTransform, useReducedMotion } from "framer-motion";
import heroTop from "../assets/P3SquaredSE.png";

const FORM_ENDPOINT = "https://formspree.io/f/meedlyp"; // Replace with your Formspree endpoint

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const lastFocusedRef = useRef(null);
  
  // Parallax effect for the image
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 400], [0, -40]);
  const yValue = shouldReduceMotion ? 0 : parallaxY;

  //Modal state and submit status
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState(""); // "SUCCESS", "ERROR", "" or "SENDING"

  //accessibiltiy refs for focus management
  const dialogId = useId();
  const openBtnRef = useRef(null);
  const closeBtnRef = useRef(null);

  const openModal = () => {
    lastFocusedRef.current = document.activeElement;
    setStatus("idle");
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  //Esc closes, trap, initial and return focus
  useEffect(() => {
    if (isOpen) return;

    //prevent background scroll while modal open
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closeModal();
        return;
      }

      if (e.key === "Tab") {
        const dialogEl = document.getElementById(dialogId);
        if (!dialogEl) return;

        const focusable = dialogEl.querySelectorAll(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        //shift+tab from first to last
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } 
        // tab from last to first
        else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    
    window.addEventListener("keydown", onKeyDown);

    // move focus into dialog (close button)
    setTimeout(() => closeBtnRef.current?.focus(), 0);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = originalOverflow;

      //restore focus to the last focused element
      const last = lastFocusedRef.current;
      if (last && typeof last.focus === "function") last.focus();
      else openBtnRef.current?.focus();
    };
  }, [isOpen, dialogId]);

  // submitting to Formspree
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("SENDING");

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("SUCCESS");
        form.reset();
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      setStatus("ERROR");
    }
  };


  return (
    <section id="home" className="relative overflow-hidden bg-[#0B3356] text-white">

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
        <div className="mx-auto max-w-3xl text-center mb-12 md:mb-16 relative z-10">
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
            <button
              ref={openBtnRef}
              type="button"
              onClick={openModal}
              className="inline-flex items-center justify-center rounded-lg bg-[#5568F2] px-7 py-3 text-sm md:text-base font-semibold shadow-md hover:bg-[#4658D8] transition"
              aria-haspopup="dialog"
              aria-controls={dialogId}
            >
              Contact Us
            </button>

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
          style={{ y: yValue, willChange: "transform" }}
          className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-white/10 transform-gpu"
        >
          <img
            src={heroTop}
            alt="Connected rural logistics"
            className="block w-full h-auto object-cover bg-[#0B3356] [backface-visibility:hidden]"
            loading="eager"
            decoding="async"
          />
        </motion.div>
      </div>

      {/* Modal Dialog  + focus trap + escape close */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop click to close */}
            <motion.button
              type="button"
              aria-label="Close contact form"
              onClick={closeModal}
              className="absolute inset-0 bg-[#041023]/80 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }} 
            />

            {/* Modal Dialog */}
            <motion.div
              id={dialogId}
              role="dialog"
              aria-modal="true"
              aria-labelledby="contact-title"
              aria-describedby="contact-desc"
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-white/20 bg-[#0B3356] shadow-2xl"
            >
              <div className="h-2 w-full bg-gradient-to-r from-[#5568F2] to-[#27D5E6]" />

              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 id="contact-title" className="text-2xl font-bold">
                      Contact Us
                    </h2>
                    <p id="contact-desc" className="mt-1 text-sm text-gray-300">
                      Fill out the form below and we will get back to you as soon as possible.
                    </p>
                  </div>

                  <button
                    ref={closeBtnRef}
                    type="button"
                    onClick={closeModal}
                    className="rounded-md px-3 py-2 text-sm font-semibold text-white/90 hover:bg-white/10 transition
                               focus:outline-none focus:ring-2 focus:ring-white/70 focus:ring-offset-2 focus:ring-offset-[#0B3356]"
                    aria-label="Close dialog"
                  >
                    Close
                  </button>
                </div>

                {/* Live region for screen readers */}
                <p className="sr-only" role="status" aria-live="polite">
                  {status === "sending"
                    ? "Sending message"
                    : status === "success"
                    ? "Message sent"
                    : status === "error"
                    ? "Submission failed"
                    : ""}
                </p>

                {status === "success" ? (
                  <div className="mt-8 text-center">
                    <p className="text-lg font-semibold">Message sent ✅</p>
                    <p className="text-sm text-gray-300 mt-2">
                      Thank you for reaching out! We will get back to you shortly.
                    </p>
                    <button
                      type="button"
                      onClick={closeModal}
                      className="mt-6 w-full rounded-lg bg-white/10 py-3 font-semibold hover:bg-white/20 transition
                                 focus:outline-none focus:ring-2 focus:ring-white/70 focus:ring-offset-2 focus:ring-offset-[#0B3356]"
                    >
                      Done
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-200 mb-1"
                      >
                        Full Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        className="w-full rounded-lg border border-white/10 bg-white/5 p-3 text-white
                                   focus:outline-none focus:ring-2 focus:ring-[#27D5E6]/80"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-200 mb-1"
                      >
                        Email Address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        className="w-full rounded-lg border border-white/10 bg-white/5 p-3 text-white
                                   focus:outline-none focus:ring-2 focus:ring-[#27D5E6]/80"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-200 mb-1"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        className="w-full rounded-lg border border-white/10 bg-white/5 p-3 text-white
                                   focus:outline-none focus:ring-2 focus:ring-[#27D5E6]/80"
                        placeholder="How can we help?"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="w-full rounded-lg bg-[#27D5E6] py-3 font-bold text-[#041023] hover:bg-[#1EC4D4] transition disabled:opacity-50
                                 focus:outline-none focus:ring-2 focus:ring-white/70 focus:ring-offset-2 focus:ring-offset-[#0B3356]"
                    >
                      {status === "sending" ? "Sending..." : "Send"}
                    </button>

                    {status === "error" && (
                      <p className="text-sm text-red-300 text-center" role="status" aria-live="polite">
                        Something went wrong. Please try again.
                      </p>
                    )}
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}