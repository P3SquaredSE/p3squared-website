import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#0B1A33] text-gray-400 text-center py-8">
      <p>© {new Date().getFullYear()} P3Squared Software Engineering</p>
    </footer>
  );
}