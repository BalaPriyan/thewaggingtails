"use client";

import { Heart, PawPrint, Sparkles } from "lucide-react";
import React from "react";

export default function Hero() {
  return (
    <section className="relative w-full bg-[#dfd5fc] overflow-hidden pt-10 pb-28 flex items-center min-h-[500px] md:min-h-[600px] select-none">
      {/* Decorative Wavy Blue Line running behind text and dog */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        <svg
          viewBox="0 0 1440 400"
          fill="none"
          className="w-full h-full object-cover opacity-80"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M -100 120 C 300 280, 600 -20, 1000 210 C 1200 310, 1400 240, 1600 240"
            stroke="#8d9dfb"
            strokeWidth="32"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10 w-full">
        
        {/* Left Column: Bold Text and CTA */}
        <div className="col-span-1 lg:col-span-7 flex flex-col items-start text-left space-y-6 md:space-y-8">
          <div className="space-y-3">
            <span className="text-[11px] bg-[#ffd54f] border border-[#2d1f47] text-[#2d1f47] font-black uppercase tracking-widest px-3.5 py-1.5 rounded-full inline-block shadow-xs">
              Where Every Tail Wags with Happiness
            </span>
            <h1 className="font-display text-[#2d1f47] text-[44px] sm:text-[60px] md:text-[72px] lg:text-[84px] leading-[1.0] tracking-tight uppercase">
              Your Pet&apos;s Second Home
            </h1>
          </div>

          <div className="max-w-xl space-y-6">
            <p className="text-[#2d1f47]/80 text-sm md:text-base font-semibold leading-relaxed font-sans">
              Whether you&apos;re away for a day, a weekend, or an extended trip, your pet deserves a place filled with love, comfort, and care. At The Wagging Tails, we provide a safe, clean, and nurturing environment where every pet is treated like family.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <a
                href="#booking"
                className="relative inline-flex items-center justify-center font-bold text-xs uppercase tracking-widest text-white px-10 py-5 transition-transform duration-200 active:scale-95 group cursor-pointer"
              >
                <svg
                  viewBox="0 0 180 60"
                  preserveAspectRatio="none"
                  className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-sm transition-transform duration-200 group-hover:scale-[1.03]"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M 24 16 C 12 4, 3 18, 15 28 C 3 38, 12 52, 24 40 C 56 44, 124 44, 156 40 C 168 52, 177 38, 165 28 C 177 18, 168 4, 156 16 C 124 12, 56 12, 24 16 Z"
                    fill="#e58e26"
                    stroke="#2d1f47"
                    strokeWidth="3.2"
                    vectorEffect="non-scaling-stroke"
                  />
                  <path
                    d="M 26 19 C 16 8, 8 20, 18 28 C 8 36, 16 48, 26 37 C 56 41, 124 41, 154 37 C 164 48, 172 36, 162 28 C 172 20, 164 8, 154 19 C 124 15, 56 15, 26 19 Z"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="1.2"
                    strokeDasharray="3,3"
                    vectorEffect="non-scaling-stroke"
                    opacity="0.5"
                  />
                </svg>
                <span className="relative z-10 text-white">Book a Stay</span>
              </a>

              <a
                href="#booking"
                className="relative inline-flex items-center justify-center font-bold text-xs uppercase tracking-widest text-[#2d1f47] px-10 py-5 transition-transform duration-200 active:scale-95 group cursor-pointer"
              >
                <svg
                  viewBox="0 0 180 60"
                  preserveAspectRatio="none"
                  className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-sm transition-transform duration-200 group-hover:scale-[1.03]"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M 24 16 C 12 4, 3 18, 15 28 C 3 38, 12 52, 24 40 C 56 44, 124 44, 156 40 C 168 52, 177 38, 165 28 C 177 18, 168 4, 156 16 C 124 12, 56 12, 24 16 Z"
                    fill="#ffffff"
                    stroke="#2d1f47"
                    strokeWidth="3.2"
                    vectorEffect="non-scaling-stroke"
                  />
                  <path
                    d="M 26 19 C 16 8, 8 20, 18 28 C 8 36, 16 48, 26 37 C 56 41, 124 41, 154 37 C 164 48, 172 36, 162 28 C 172 20, 164 8, 154 19 C 124 15, 56 15, 26 19 Z"
                    fill="none"
                    stroke="#2d1f47"
                    strokeWidth="1.2"
                    strokeDasharray="3,3"
                    vectorEffect="non-scaling-stroke"
                    opacity="0.4"
                  />
                </svg>
                <span className="relative z-10 text-[#2d1f47]">Schedule a Visit</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Cartoon Dog Illustration */}
        <div className="col-span-1 lg:col-span-5 flex justify-center lg:justify-end relative">
          {/* Animated floating elements */}
          <div className="absolute top-8 left-4 sm:left-12 bg-[#ffd54f] border-2 border-[#2d1f47] p-2.5 rounded-2xl shadow-[2px_2px_0px_#2d1f47] animate-float z-20 text-[#2d1f47] select-none">
            <PawPrint className="w-5 h-5" />
          </div>
          <div className="absolute bottom-10 right-4 sm:-right-4 bg-[#ff608c] border-2 border-[#2d1f47] p-2.5 rounded-2xl shadow-[2px_2px_0px_#2d1f47] animate-float z-20 text-[#2d1f47] select-none" style={{ animationDelay: "1.5s" }}>
            <Heart className="w-5 h-5 fill-current" />
          </div>
          <div className="absolute top-0 right-8 bg-[#cbeeff] border-2 border-[#2d1f47] p-2.5 rounded-2xl shadow-[2px_2px_0px_#2d1f47] animate-float z-20 text-[#2d1f47] select-none" style={{ animationDelay: "3s" }}>
            <Sparkles className="w-5 h-5" />
          </div>

          <div className="w-[280px] sm:w-[360px] md:w-[420px] transition-transform duration-500 hover:scale-105 relative z-10">
            <svg
              viewBox="0 0 400 400"
              fill="none"
              className="w-full h-auto drop-shadow-md"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g className="animate-breathe">
                {/* DOG BODY */}
                {/* Back thigh and foot */}
                <ellipse cx="280" cy="270" rx="45" ry="35" fill="#fafafa" stroke="#2d1f47" strokeWidth="6" />
                <path d="M 245 285 C 245 305, 275 305, 275 285" stroke="#2d1f47" strokeWidth="6" strokeLinecap="round" fill="#fafafa" />
                <ellipse cx="295" cy="255" rx="15" ry="12" fill="#ffd54f" /> {/* Yellow patch on leg */}

                {/* Main body & Back */}
                <path
                  d="M 180 230 C 150 250, 180 300, 250 290 C 290 280, 290 230, 260 210 Z"
                  fill="#fafafa"
                  stroke="#2d1f47"
                  strokeWidth="6"
                  strokeLinejoin="round"
                />
                <path d="M 200 240 Q 230 250 240 280" stroke="#2d1f47" strokeWidth="4" strokeLinecap="round" />

                {/* Yellow patches on back */}
                <path d="M 185 240 Q 200 260 215 245 Q 200 230 185 240 Z" fill="#ffd54f" />
                <path d="M 240 220 Q 255 240 265 225 Q 255 210 240 220 Z" fill="#ffd54f" />

                {/* Tail */}
                <path
                  d="M 285 220 C 310 170, 320 180, 310 230 C 305 240, 290 230, 285 220 Z"
                  fill="#fafafa"
                  stroke="#2d1f47"
                  strokeWidth="6"
                  strokeLinejoin="round"
                />
                <path d="M 298 185 C 315 190, 310 210, 295 210" fill="#ffd54f" /> {/* Yellow tail tip patch */}

                {/* Front Legs */}
                {/* Left leg (back layer) */}
                <rect x="145" y="270" width="26" height="50" rx="13" fill="#eeeeee" stroke="#2d1f47" strokeWidth="6" />
                {/* Right leg (front layer) */}
                <rect x="175" y="280" width="28" height="52" rx="14" fill="#fafafa" stroke="#2d1f47" strokeWidth="6" />
                <line x1="188" y1="315" x2="188" y2="325" stroke="#2d1f47" strokeWidth="4" strokeLinecap="round" />
                <line x1="195" y1="315" x2="195" y2="325" stroke="#2d1f47" strokeWidth="4" strokeLinecap="round" />

                {/* DOG HEAD */}
                {/* Head Base */}
                <circle cx="180" cy="180" r="65" fill="#fafafa" stroke="#2d1f47" strokeWidth="6" />
                
                {/* Yellow patch on left eye (viewer's right) */}
                <path
                  d="M 180 120 C 230 130, 250 200, 200 235 C 160 220, 160 140, 180 120 Z"
                  fill="#ffd54f"
                />

                {/* Left Ear (yellow floppy) */}
                <path
                  d="M 125 145 C 90 150, 95 220, 130 205 C 145 195, 140 155, 125 145 Z"
                  fill="#ffd54f"
                  stroke="#2d1f47"
                  strokeWidth="6"
                  strokeLinejoin="round"
                />
                
                {/* Right Ear (yellow floppy) */}
                <path
                  d="M 235 145 C 270 150, 265 220, 230 205 C 215 195, 220 155, 235 145 Z"
                  fill="#ffd54f"
                  stroke="#2d1f47"
                  strokeWidth="6"
                  strokeLinejoin="round"
                />

                {/* Big Shiny Eyes */}
                {/* Left Eye */}
                <circle cx="150" cy="170" r="11" fill="#2d1f47" />
                <circle cx="147" cy="166" r="3.5" fill="#ffffff" />
                {/* Right Eye (inside yellow patch) */}
                <circle cx="205" cy="170" r="11" fill="#2d1f47" />
                <circle cx="202" cy="166" r="3.5" fill="#ffffff" />

                {/* Blushing cheeks */}
                <ellipse cx="138" cy="185" rx="8" ry="5" fill="#ffb0c4" />
                <ellipse cx="218" cy="185" rx="8" ry="5" fill="#ffb0c4" />

                {/* Muzzle and Smile */}
                <path d="M 162 192 Q 178 178 194 192" stroke="#2d1f47" strokeWidth="5" strokeLinecap="round" fill="none" />
                <path d="M 166 193 C 166 215, 190 215, 190 193" stroke="#2d1f47" strokeWidth="5" strokeLinecap="round" fill="none" />
                
                {/* Cute tongue hanging out */}
                <path
                  d="M 172 201 C 172 225, 186 225, 186 201 Z"
                  fill="#ff608c"
                  stroke="#2d1f47"
                  strokeWidth="4.5"
                  strokeLinejoin="round"
                />
                <line x1="179" y1="202" x2="179" y2="216" stroke="#2d1f47" strokeWidth="2.5" />

                {/* Little nose */}
                <polygon points="173,184 183,184 178,190" fill="#2d1f47" stroke="#2d1f47" strokeWidth="2.5" strokeLinejoin="round" />
              </g>
            </svg>
          </div>
        </div>

      </div>

      {/* Wavy bottom transition helper filled with the color of the next section (#faf6f0) */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-[0] z-20">
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="relative block w-full h-[40px] md:h-[60px] fill-[#faf6f0]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,40 C320,90 640,-10 960,40 C1120,50 1280,60 1440,30 L1440,80 L0,80 Z"
          />
        </svg>
      </div>
    </section>
  );
}

