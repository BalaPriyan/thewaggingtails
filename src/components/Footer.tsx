"use client";

import React from "react";

export default function Footer() {
  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#2d1f47] text-white py-16 px-6 relative border-t-2 border-[#2d1f47] select-none">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo & Tagline */}
        <div className="space-y-4">
          <a href="/" className="flex items-center select-none py-1">
            <img
              src="/logo.png"
              alt="The Wagging Tails"
              className="h-28 w-auto object-contain"
            />
          </a>
          <p className="text-xs text-white/70 font-bold uppercase tracking-wider">
            Safe • Loving • Trusted Pet Care
          </p>
          <p className="text-xs text-white/50 leading-relaxed font-semibold">
            Where Every Tail Wags with Happiness. We provide a safe, clean, and nurturing environment where every pet is treated like family.
          </p>
        </div>

        {/* Services List */}
        <div>
          <h5 className="text-xs font-black uppercase tracking-wider text-white mb-4">Our Services</h5>
          <ul className="space-y-2.5 text-xs text-white/60 font-bold">
            <li><a href="#services" onClick={(e) => scrollToSection(e, "services")} className="hover:text-[#e58e26] transition-colors">Pet Boarding</a></li>
            <li><a href="#services" onClick={(e) => scrollToSection(e, "services")} className="hover:text-[#e58e26] transition-colors">Dog Daycare</a></li>
            <li><a href="#services" onClick={(e) => scrollToSection(e, "services")} className="hover:text-[#e58e26] transition-colors">Cat Care</a></li>
            <li><a href="#services" onClick={(e) => scrollToSection(e, "services")} className="hover:text-[#e58e26] transition-colors">Grooming</a></li>
            <li><a href="#services" onClick={(e) => scrollToSection(e, "services")} className="hover:text-[#e58e26] transition-colors">Pickup &amp; Drop-off</a></li>
          </ul>
        </div>

        {/* Navigations */}
        <div>
          <h5 className="text-xs font-black uppercase tracking-wider text-white mb-4">Navigations</h5>
          <ul className="space-y-2.5 text-xs text-white/60 font-bold">
            <li><a href="#" className="hover:text-[#e58e26] transition-colors">Home</a></li>
            <li><a href="#about" onClick={(e) => scrollToSection(e, "about")} className="hover:text-[#e58e26] transition-colors">About Us</a></li>
            <li><a href="#services" onClick={(e) => scrollToSection(e, "services")} className="hover:text-[#e58e26] transition-colors">Our Services</a></li>
            <li><a href="#why-choose-us" onClick={(e) => scrollToSection(e, "why-choose-us")} className="hover:text-[#e58e26] transition-colors">Why Choose Us</a></li>
            <li><a href="#how-it-works" onClick={(e) => scrollToSection(e, "how-it-works")} className="hover:text-[#e58e26] transition-colors">How It Works</a></li>
            <li><a href="#faq" onClick={(e) => scrollToSection(e, "faq")} className="hover:text-[#e58e26] transition-colors">FAQ</a></li>
          </ul>
        </div>

        {/* Contact Details */}
        <div className="space-y-4">
          <h5 className="text-xs font-black uppercase tracking-wider text-white mb-2">Contact Us</h5>
          <ul className="space-y-2.5 text-xs text-white/60 font-bold">
            <li>Phone: +91 XXXXX XXXXX</li>
            <li>Email: <a href="mailto:hello@thewaggingtails.com" className="hover:text-[#e58e26] transition-colors">hello@thewaggingtails.com</a></li>
            <li>Location: Your Address</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/10 text-center text-xs text-white/40 font-bold">
        © 2026 The Wagging Tails. All rights reserved.
      </div>
    </footer>
  );
}
