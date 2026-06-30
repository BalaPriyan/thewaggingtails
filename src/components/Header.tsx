"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#", active: true },
    { name: "About Us", href: "#about", active: false },
    { name: "Services", href: "#services", active: false },
    { name: "Why Choose Us", href: "#why-choose-us", active: false },
    { name: "How It Works", href: "#how-it-works", active: false },
    { name: "FAQ", href: "#faq", active: false },
  ];

  const scrollToBooking = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById("booking");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="w-full bg-[#dfd5fc] z-50 transition-colors">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Left: Branded Logo Image */}
        <a href="/" className="flex items-center select-none py-1">
          <img
            src="/logo.png"
            alt="The Wagging Tails"
            className="h-28 md:h-36 w-auto object-contain pt-10"
          />
        </a>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-sans text-[15px] font-semibold tracking-wide relative py-1 transition-all duration-200 text-[#2d1f47] hover:text-[#e58e26] ${
                link.active
                  ? "after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-full after:h-[2px] after:bg-[#e58e26]"
                  : ""
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right: Desktop "Book Now" CTA */}
        <div className="hidden md:flex items-center">
          <a
            href="#booking"
            onClick={scrollToBooking}
            className="relative inline-flex items-center justify-center font-bold text-[11px] uppercase tracking-widest text-[#2d1f47] px-8 py-4.5 transition-transform duration-200 active:scale-95 group cursor-pointer"
          >
            <svg
              viewBox="0 0 160 60"
              preserveAspectRatio="none"
              className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-xs transition-transform duration-200 group-hover:scale-[1.03]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 24 16 C 12 4, 3 18, 15 28 C 3 38, 12 52, 24 40 C 56 44, 104 44, 136 40 C 148 52, 157 38, 145 28 C 157 18, 148 4, 136 16 C 104 12, 56 12, 24 16 Z"
                fill="#ffd54f"
                stroke="#2d1f47"
                strokeWidth="3.2"
                vectorEffect="non-scaling-stroke"
              />
              <path
                d="M 26 19 C 16 8, 8 20, 18 28 C 8 36, 16 48, 26 37 C 56 41, 104 41, 134 37 C 144 48, 152 36, 142 28 C 152 20, 144 8, 134 19 C 104 15, 56 15, 26 19 Z"
                fill="none"
                stroke="#2d1f47"
                strokeWidth="1"
                strokeDasharray="3,3"
                vectorEffect="non-scaling-stroke"
                opacity="0.4"
              />
            </svg>
            <span className="relative z-10">Book Now</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-[#2d1f47] hover:bg-white/30 rounded-xl transition-colors cursor-pointer"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#dfd5fc] border-t border-purple-200/40 px-6 py-4 flex flex-col gap-4 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`font-sans text-[16px] font-semibold text-[#2d1f47] py-1.5 ${
                  link.active ? "text-[#e58e26] font-bold" : ""
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-purple-200/40 w-full flex justify-center">
            <a
              href="#booking"
              onClick={scrollToBooking}
              className="relative inline-flex items-center justify-center font-bold text-[11px] uppercase tracking-widest text-[#2d1f47] px-8 py-4.5 transition-transform duration-200 active:scale-95 group cursor-pointer w-full max-w-[200px]"
            >
              <svg
                viewBox="0 0 160 60"
                preserveAspectRatio="none"
                className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-xs transition-transform duration-200 group-hover:scale-[1.03]"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M 24 16 C 12 4, 3 18, 15 28 C 3 38, 12 52, 24 40 C 56 44, 104 44, 136 40 C 148 52, 157 38, 145 28 C 157 18, 148 4, 136 16 C 104 12, 56 12, 24 16 Z"
                  fill="#ffd54f"
                  stroke="#2d1f47"
                  strokeWidth="3.2"
                  vectorEffect="non-scaling-stroke"
                />
                <path
                  d="M 26 19 C 16 8, 8 20, 18 28 C 8 36, 16 48, 26 37 C 56 41, 104 41, 134 37 C 144 48, 152 36, 142 28 C 152 20, 144 8, 134 19 C 104 15, 56 15, 26 19 Z"
                  fill="none"
                  stroke="#2d1f47"
                  strokeWidth="1"
                  strokeDasharray="3,3"
                  vectorEffect="non-scaling-stroke"
                  opacity="0.4"
                />
              </svg>
              <span className="relative z-10">Book Now</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}



