"use client";

import React from "react";
import { ShieldCheck, Heart, UserCheck, Camera, Sparkles } from "lucide-react";

// Beautiful large Paw Card Background SVG
const PawCardBg = ({ color }: { color: string }) => (
  <svg
    viewBox="0 0 240 230"
    preserveAspectRatio="none"
    className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-sm transition-transform duration-300 group-hover:scale-[1.03] overflow-visible"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* 4 Toes */}
    <circle cx="50" cy="55" r="22" fill={color} stroke="#2d1f47" strokeWidth="4.5" vectorEffect="non-scaling-stroke" />
    <circle cx="98" cy="38" r="25" fill={color} stroke="#2d1f47" strokeWidth="4.5" vectorEffect="non-scaling-stroke" />
    <circle cx="146" cy="38" r="25" fill={color} stroke="#2d1f47" strokeWidth="4.5" vectorEffect="non-scaling-stroke" />
    <circle cx="194" cy="55" r="22" fill={color} stroke="#2d1f47" strokeWidth="4.5" vectorEffect="non-scaling-stroke" />

    {/* Main Pad */}
    <path
      d="M 28 130 C 20 180, 60 215, 120 215 C 180 215, 220 180, 212 130 C 204 90, 168 82, 120 82 C 72 82, 36 90, 28 130 Z"
      fill={color}
      stroke="#2d1f47"
      strokeWidth="4.5"
      vectorEffect="non-scaling-stroke"
    />

    {/* Inner Dashed Line for main pad */}
    <path
      d="M 34 132 C 27 175, 65 208, 120 208 C 175 208, 213 175, 206 132 C 199 97, 166 89, 120 89 C 74 89, 41 97, 34 132 Z"
      fill="none"
      stroke="#2d1f47"
      strokeWidth="1.2"
      strokeDasharray="4,4"
      vectorEffect="non-scaling-stroke"
      opacity="0.4"
    />
  </svg>
);

const REASONS = [
  {
    title: "Safe & Secure",
    description: "A clean, pet-friendly space designed for companion safety.",
    color: "#ebdfff",
    icon: <ShieldCheck className="w-5 h-5 text-[#2d1f47]" />,
    rotateClass: "md:rotate-[-4deg] rotate-[-1deg]",
    zIndexClass: "z-10"
  },
  {
    title: "Loving Care",
    description: "Every guest receives individual attention and affection.",
    color: "#ffebd2",
    icon: <Heart className="w-5 h-5 text-[#2d1f47]" />,
    rotateClass: "md:rotate-[3deg] rotate-[1deg]",
    zIndexClass: "z-20"
  },
  {
    title: "Expert Caregivers",
    description: "Passionate animal lovers dedicated to guest enjoyment.",
    color: "#d2f4ff",
    icon: <UserCheck className="w-5 h-5 text-[#2d1f47]" />,
    rotateClass: "md:rotate-[-3deg] rotate-[-1deg]",
    zIndexClass: "z-30"
  },
  {
    title: "Daily Updates",
    description: "Photos and videos sent so you stay connected throughout.",
    color: "#bdf4c5",
    icon: <Camera className="w-5 h-5 text-[#2d1f47]" />,
    rotateClass: "md:rotate-[4deg] rotate-[1deg]",
    zIndexClass: "z-40"
  },
  {
    title: "Custom Routines",
    description: "From dietary schedules to favorite toys, cared for your way.",
    color: "#fee8c8",
    icon: <Sparkles className="w-5 h-5 text-[#2d1f47]" />,
    rotateClass: "md:rotate-[-2deg] rotate-[-1deg]",
    zIndexClass: "z-50"
  }
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="relative bg-[#faf6f0] py-16 md:py-20 select-none border-t border-[#2d1f47]/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="text-center mb-10 md:mb-16 space-y-2 relative z-50">
          <span className="text-[10px] bg-[#dfd5fc] border border-[#2d1f47] text-[#2d1f47] font-black uppercase tracking-widest px-3.5 py-1.5 rounded-full inline-block shadow-xs">
            Why Pet Parents Trust Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-display text-[#2d1f47] tracking-tight">
            Why Choose Us
          </h2>
          <p className="text-[#2d1f47]/70 text-sm sm:text-base font-semibold max-w-lg mx-auto">
            We go above and beyond to provide a premium, low-stress stay that keeps tails wagging.
          </p>
        </div>

        {/* Responsive Grid/Flex layout of cards - no animation */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 max-w-7xl mx-auto px-2 relative overflow-visible">
          {REASONS.map((item, idx) => (
            <div
              key={idx}
              className={`relative w-[250px] sm:w-[280px] h-[230px] sm:h-[260px] p-5 sm:p-6 pt-16 sm:pt-24 pb-6 sm:pb-8 flex flex-col items-center justify-center text-center group cursor-pointer transition-transform duration-300 hover:scale-105 hover:z-10 ${item.rotateClass}`}
            >
              {/* SVG Background Paw shape */}
              <PawCardBg color={item.color} />

              {/* Card Content inside main pad */}
              <div className="relative z-10 space-y-2.5 px-4 max-w-[200px]">
                <div className="w-8 h-8 bg-white border border-[#2d1f47]/30 rounded-xl flex items-center justify-center text-[#2d1f47] mx-auto shadow-2xs">
                  {item.icon}
                </div>
                <div className="space-y-0.5">
                  <h4 className="font-bold text-[13px] sm:text-sm text-[#2d1f47] leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-[10px] sm:text-xs text-[#2d1f47]/80 font-semibold leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
