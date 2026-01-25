import React, { useEffect, useRef, useState } from "react";

export default function ContactModal({
  isOpen,
  onClose,
  formAction, // your Formspree endpoint
  titleId = "contact-modal-title",
}) {
  const dialogRef = useRef(null);
  const closeBtnRef = useRef(null);
  const lastActiveElementRef = useRef(null);

  const [status, setStatus] = useState("idle"); // "idle" | "submitting" | "success" | "error"
  const [errorMsg, setErrorMsg] = useState("");

  // Save focus and focus modal when opened; restore when closed
  useEffect(() => {
    if (!isOpen) return;

    lastActiveElementRef.current = document.activeElement;

    // lock background scroll while modal open
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Focus close button first for accessibility
    requestAnimationFrame(() => closeBtnRef.current?.focus());

    return () => {
      document.body.style.overflow = originalOverflow; // ✅ restore scroll
      lastActiveElementRef.current?.focus?.();
      setStatus("idle");
      setErrorMsg("");
    };
  }, [isOpen]);

  // ESC to close and focus trap
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key === "Tab") {
        const focusable = dialogRef.current?.querySelectorAll(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusable || focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }

        if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);

      const res = await fetch(formAction, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        const data = await res.json().catch(() => null);
        setStatus("error");
        setErrorMsg(
          data?.errors?.[0]?.message || "Something went wrong. Please try again."
        );
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center px-4" role="presentation">
      {/* Backdrop (click closes) */}
      <button
        type="button"
        className="absolute inset-0 bg-black/60"
        onClick={onClose}
        aria-label="Close contact form"
      />

      {/* Dialog */}
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby="contact-modal-desc"
        className="relative z-[71] w-full max-w-lg rounded-2xl bg-[#0B3356] text-white shadow-2xl border border-white/10"
        onMouseDown={(e) => e.stopPropagation()}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 px-6 pt-6">
          <h2 id={titleId} className="text-xl font-semibold">
            Contact Us
          </h2>

          <button
            ref={closeBtnRef}
            type="button"
            onClick={onClose}
            className="rounded-md px-3 py-2 text-white/90 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/70 focus:ring-offset-2 focus:ring-offset-[#0B3356]"
            aria-label="Close contact form"
          >
            ✕
          </button>
        </div>

        <div className="px-6 pb-6">
          <p id="contact-modal-desc" className="mt-2 text-white/80">
            Fill out the form below and we’ll get back to you.
          </p>

          {status === "success" && (
            <div
              className="mt-4 rounded-lg border border-white/15 bg-white/10 p-4"
              role="status"
              aria-live="polite"
            >
              ✅ Thank you! Your message was sent successfully.
            </div>
          )}

          {status === "error" && (
            <div className="mt-4 rounded-lg border border-red-300/30 bg-red-500/10 p-4" role="alert">
              ❌ {errorMsg}
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-5 space-y-4">
            <div>
              <label htmlFor="contact-name" className="block text-sm font-medium">
                Full name <span className="text-white/70">(optional)</span>
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                className="mt-2 w-full rounded-lg bg-white/10 px-4 py-3 text-white placeholder:text-white/50 border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/70"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="contact-email" className="block text-sm font-medium">
                Email <span className="text-white/70">(required)</span>
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="mt-2 w-full rounded-lg bg-white/10 px-4 py-3 text-white placeholder:text-white/50 border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/70"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-sm font-medium">
                Message <span className="text-white/70">(required)</span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                className="mt-2 w-full rounded-lg bg-white/10 px-4 py-3 text-white placeholder:text-white/50 border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/70"
                placeholder="How can we help?"
              />
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="inline-flex w-full items-center justify-center rounded-lg bg-[#5568F2] px-5 py-3 font-semibold shadow-md hover:bg-[#4658D8] transition disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-white/70 focus:ring-offset-2 focus:ring-offset-[#0B3356]"
            >
              {status === "submitting" ? "Sending..." : "Send Message"}
            </button>

            <p className="text-sm text-white/70">
              Prefer email?{" "}
              <a
                className="underline hover:text-white focus:outline-none focus:ring-2 focus:ring-white/70 focus:ring-offset-2 focus:ring-offset-[#0B3356] rounded"
                href="mailto:BestSupplySideSolutions@p3squaredse.com?subject=Inquiry%20from%20P3Squared%20Website"
              >
                BestSupplySideSolutions@p3squaredse.com
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}