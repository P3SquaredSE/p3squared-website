import React, {useState} from "react";
import {Menu, X} from "lucide-react";
import { href } from "react-router-dom";
import { nav, s } from "framer-motion/client";

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

  const handleNavClick = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-[#0A1124] shadow-md">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">

            {/* Logo */}
            <a href="/" className="flex items-center gap-2">
                <img
                    src="/assets/P3SquaredSElogo.png" // Replace with actual logo path
                    alt="P3SquaredSE Logo"
                    className="h-12 w-auto"
                />
                <span className="hidden md:block font-semibold text-white text-lg tracking-wide">
                    P3SquaredSE
                </span>
            </a>

            {/* Navigation Links - Desktop */}
            <nav className="hidden lg:flex items-center gap-10 text-white/90 text-sm font-medium">
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
                className="lg:hidden text-white"
                onClick={() => setIsOpen((prev) => !prev)}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                >
                    {isOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
        </div>

        {/* Mobile menu dropdown */}
        {isOpen && (
            <div className="lg:hidden bg-[#0A1124] border-t border-white/10">
                <nav className="flex flex-col px-6 py-4 gap-4 text-white/90 text-base">
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