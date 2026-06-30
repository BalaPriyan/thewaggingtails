"use client";

import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import CareServices from "@/components/CareServices";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#faf6f0] font-sans text-[#2d1f47] scroll-smooth overflow-x-hidden">
      {/* Global Wavy Filter for hand-drawn paper borders */}
      <svg className="absolute w-0 h-0" width="0" height="0">
        <defs>
          <filter id="wavy-card-filter">
            <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="10" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>

      {/* Brand Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* About Us & Our Promise */}
        <AboutUs />

        {/* Our Services */}
        <CareServices />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* How It Works */}
        <HowItWorks />

        {/* Frequently Asked Questions */}
        <FAQ />

        {/* Call to Action Booking Form */}
        <BookingForm />
      </main>

      {/* Brand Footer */}
      <Footer />
    </div>
  );
}
