"use client";

import React, { useState, useEffect, useRef } from "react";
import { ClipboardList, Handshake, Check, Video, Trophy } from "lucide-react";

// Native scroll reveal helper
const RevealOnScroll = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -30px 0px" }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out h-full ${
        isVisible ? "opacity-100 translate-x-0 scale-100" : "opacity-0 translate-x-16 scale-95"
      }`}
    >
      {children}
    </div>
  );
};

const STEPS = [
  {
    num: "1",
    tag: "Step 1",
    title: "Book Your Stay",
    description: "Tell us about your pet and choose your preferred dates.",
    color: "bg-[#e8dcff]",
    icon: <ClipboardList className="w-5 h-5 text-[#2d1f47]" />
  },
  {
    num: "2",
    tag: "Step 2",
    title: "Meet Our Team",
    description: "Visit our facility so your pet can become familiar with us.",
    color: "bg-[#cbeeff]",
    icon: <Handshake className="w-5 h-5 text-[#2d1f47]" />
  },
  {
    num: "3",
    tag: "Step 3",
    title: "Drop Off",
    description: "Leave your pet with confidence while we take care of the rest.",
    color: "bg-[#ffebd2]",
    icon: <Check className="w-5 h-5 text-[#2d1f47]" />
  },
  {
    num: "4",
    tag: "Step 4",
    title: "Stay Connected",
    description: "Receive regular updates, photos, and videos throughout their stay.",
    color: "bg-[#bdf4c5]",
    icon: <Video className="w-5 h-5 text-[#2d1f47]" />
  },
  {
    num: "5",
    tag: "Step 5",
    title: "Welcome Home",
    description: "Pick up a happy, healthy, and tail-wagging companion.",
    color: "bg-[#fee8c8]",
    icon: <Trophy className="w-5 h-5 text-[#2d1f47]" />
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#ffffff] py-20 select-none border-t border-[#2d1f47]/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-2">
          <span className="text-[10px] bg-[#ffd54f] border border-[#2d1f47] text-[#2d1f47] font-black uppercase tracking-widest px-3.5 py-1.5 rounded-full inline-block shadow-xs">
            Simple 5-Step Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-display text-[#2d1f47] tracking-tight">
            How It Works
          </h2>
          <p className="text-[#2d1f47]/70 text-sm sm:text-base font-semibold max-w-lg mx-auto">
            From reservation request to welcoming back your happy companion, we make it effortless.
          </p>
        </div>

        {/* Process Steps Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-6xl mx-auto relative md:after:content-[''] md:after:absolute md:after:top-14 md:after:left-10 md:after:right-10 md:after:h-[2px] md:after:border-t-2 md:after:border-dashed md:after:border-[#2d1f47]/20 md:after:z-0">
          {STEPS.map((step, idx) => (
            <RevealOnScroll key={idx} delay={idx * 100}>
              <div
                className={`${step.color} border-2 border-[#2d1f47] rounded-3xl p-6 shadow-[2px_2px_0px_#2d1f47] hover:shadow-[4px_4px_0px_#2d1f47] hover:-translate-y-1 transition-all duration-300 relative z-10 flex flex-col justify-between h-full`}
              >
                <div className="space-y-4">
                  {/* Step badge */}
                  <div className="flex justify-between items-center">
                    <div className="w-9 h-9 bg-white border-2 border-[#2d1f47] rounded-xl flex items-center justify-center text-[#2d1f47] shadow-sm">
                      {step.icon}
                    </div>
                    <span className="text-xs bg-[#2d1f47] text-white font-black w-6 h-6 rounded-full flex items-center justify-center">
                      {step.num}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h4 className="font-bold text-sm text-[#2d1f47] leading-tight">
                      {step.title}
                    </h4>
                    <p className="text-[11px] text-[#2d1f47]/80 font-semibold leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
