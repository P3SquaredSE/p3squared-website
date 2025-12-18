import React, { useEffect, useState } from "react";
import {Menu, X} from "lucide-react";
import logo from "../assets/P3SquaredSElogo.png"; // Replace with actual logo path

const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#solutions", label: "Solutions" },
    { href: "#contact", label: "Contact" },
    { href: "#invest", label: "Invest" },
    { href: "#team", label: "Team" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = "mobile-nav";

  const handleNavClick = () => setIsOpen(false);

  // close on ESC (accessibility)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-[#0B3356] shadow-md">
        {/* skip link (keyboard users) */}
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-black">
            Skip to main content
        </a>

        <div className="container mx-auto flex items-center justify-between px-6 py-4">

            {/* Logo */}
            <a href="/" className="flex items-center gap-2">
                <img
                    src={logo}
                    alt="P3SquaredSE Logo"
                    className="h-10 w-auto"
                    loading="eager"
                    decoding="async"
                />
                <span className="hidden md:block font-semibold text-white text-lg tracking-wide">
                    P3SquaredSE
                </span>
            </a>

            {/* Navigation Links - Desktop */}
            <nav className="hidden lg:flex items-center gap-10 text-white/90 text-sm font-medium"
                aria-label="Primary">
                    
                {navLinks.map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        className="hover:text-white transition"
                    >
                        {link.label}
                    </a>
                ))}
            </nav>

            {/* Button - Desktop */}
            <a
                href="#contact"
                className="hidden lg:inline-flex items-center rounded-lg bg-[#5568F2] px-5 py-2 text-white font-semibold shadow-md hover:bg-[#4658D8] transition"
            >
                Contact Us
            </a>

            {/* Mobile Menu Button */}
            <button
                type="button"
                className="lg:hidden text-white"
                onClick={() => setIsOpen((prev) => !prev)}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
                aria-controls={menuId}
                >
                    {isOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
        </div>

        {/* Mobile menu dropdown */}
        {isOpen && (
            <div id={menuId} className="lg:hidden bg-[#0B3356] border-t border-white/10">
                <nav aria-label="Mobile" className="flex flex-col px-6 py-4 gap-4 text-white/90 text-base">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="hover:text-white"
                            onClick={handleNavClick}
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="mt-4 inline-flex items-center justify-center rounded-lg bg-[#5568F2] px-5 py-2 text-white font-semibold shadow-md hover:bg-[#4658D8] transition"
                        onClick={handleNavClick}
                    >
                        Contact Us
                    </a>
                </nav>
            </div>
        )}
    </header>
  );
}