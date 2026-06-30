"use client";

import React, { useEffect, useRef, useState } from "react";

// Daisy Flower component
const DaisyIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 filter drop-shadow-xs select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Petals */}
    <circle cx="12" cy="5" r="2.5" fill="#ffffff" stroke="#2d1f47" strokeWidth="1.5" />
    <circle cx="12" cy="19" r="2.5" fill="#ffffff" stroke="#2d1f47" strokeWidth="1.5" />
    <circle cx="5" cy="12" r="2.5" fill="#ffffff" stroke="#2d1f47" strokeWidth="1.5" />
    <circle cx="19" cy="12" r="2.5" fill="#ffffff" stroke="#2d1f47" strokeWidth="1.5" />
    <circle cx="7" cy="7" r="2.5" fill="#ffffff" stroke="#2d1f47" strokeWidth="1.5" />
    <circle cx="17" cy="7" r="2.5" fill="#ffffff" stroke="#2d1f47" strokeWidth="1.5" />
    <circle cx="7" cy="17" r="2.5" fill="#ffffff" stroke="#2d1f47" strokeWidth="1.5" />
    <circle cx="17" cy="17" r="2.5" fill="#ffffff" stroke="#2d1f47" strokeWidth="1.5" />
    {/* Center */}
    <circle cx="12" cy="12" r="3" fill="#ffd54f" stroke="#2d1f47" strokeWidth="1.5" />
  </svg>
);

const SERVICES = [
  {
    title: "Pet Boarding",
    description: "Comfortable accommodations with personalized care, feeding schedules, play, and plenty of love.",
    bgColorClass: "bg-[#ebdfff]",
    illustration: (
      <svg viewBox="0 0 100 100" className="w-20 h-20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M 20 50 L 50 20 L 80 50 L 80 82 L 20 82 Z" fill="#ffffff" stroke="#2d1f47" strokeWidth="3" />
        <path d="M 15 50 L 50 16 L 85 50" stroke="#2d1f47" strokeWidth="4.5" strokeLinecap="round" />
        <path d="M 38 82 C 38 65, 62 65, 62 82" fill="#ffd54f" stroke="#2d1f47" strokeWidth="3" />
      </svg>
    )
  },
  {
    title: "Dog Daycare",
    description: "A fun and engaging space where dogs can socialize, play, exercise, and stay active throughout the day.",
    bgColorClass: "bg-[#ffebd2]",
    illustration: (
      <svg viewBox="0 0 100 100" className="w-20 h-20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="52" r="26" fill="#ffffff" stroke="#2d1f47" strokeWidth="3" />
        <path d="M 24 35 Q 12 50 22 45" fill="#ffd54f" stroke="#2d1f47" strokeWidth="3" />
        <path d="M 76 35 Q 88 50 78 45" fill="#ffd54f" stroke="#2d1f47" strokeWidth="3" />
        <circle cx="38" cy="48" r="4.5" fill="#2d1f47" />
        <circle cx="62" cy="48" r="4.5" fill="#2d1f47" />
        <path d="M 44 58 Q 50 63 56 58" stroke="#2d1f47" strokeWidth="3.5" strokeLinecap="round" fill="none" />
      </svg>
    )
  },
  {
    title: "Cat Boarding",
    description: "A peaceful and cozy environment specially designed to keep cats relaxed and comfortable during their stay.",
    bgColorClass: "bg-[#d2f4ff]",
    illustration: (
      <svg viewBox="0 0 100 100" className="w-20 h-20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="54" r="24" fill="#ffffff" stroke="#2d1f47" strokeWidth="3" />
        <polygon points="26,38 38,22 44,36" fill="#ffd54f" stroke="#2d1f47" strokeWidth="3" strokeLinejoin="round" />
        <polygon points="74,38 62,22 56,36" fill="#ffd54f" stroke="#2d1f47" strokeWidth="3" strokeLinejoin="round" />
        <circle cx="40" cy="50" r="3.5" fill="#2d1f47" />
        <circle cx="60" cy="50" r="3.5" fill="#2d1f47" />
        <polygon points="48,56 52,56 50,60" fill="#2d1f47" />
      </svg>
    )
  },
  {
    title: "Feeding & Daily Care",
    description: "We follow your pet's routine, ensuring meals are served on time with fresh water always available.",
    bgColorClass: "bg-[#ebdfff]",
    illustration: (
      <svg viewBox="0 0 100 100" className="w-20 h-20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M 20 68 L 80 68 C 80 68, 85 83, 75 83 L 25 83 C 15 83, 20 68, 20 68 Z" fill="#ffd54f" stroke="#2d1f47" strokeWidth="3" />
        <ellipse cx="50" cy="68" rx="30" ry="4" fill="#ffffff" stroke="#2d1f47" strokeWidth="2.5" />
        <circle cx="42" cy="64" r="3" fill="#2d1f47" />
        <circle cx="58" cy="65" r="3" fill="#2d1f47" />
        <circle cx="50" cy="61" r="4" fill="#2d1f47" />
        <path d="M 50 61 C 50 48, 65 43, 65 43 C 65 43, 60 56, 50 61 Z" fill="#bdf4c5" stroke="#2d1f47" strokeWidth="2" />
      </svg>
    )
  },
  {
    title: "Exercise & Playtime",
    description: "Daily walks, interactive games, and supervised activities help your pet stay happy and healthy.",
    bgColorClass: "bg-[#ffebd2]",
    illustration: (
      <svg viewBox="0 0 100 100" className="w-20 h-20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="26" fill="#ffd54f" stroke="#2d1f47" strokeWidth="3" />
        <path d="M 28 38 C 35 48, 50 48, 57 38" stroke="#2d1f47" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M 43 62 C 50 52, 65 52, 72 62" stroke="#2d1f47" strokeWidth="3" fill="none" strokeLinecap="round" />
      </svg>
    )
  },
  {
    title: "Grooming",
    description: "Bathing, brushing, nail trimming, and basic grooming services to keep your pet looking and feeling their best.",
    bgColorClass: "bg-[#d2f4ff]",
    illustration: (
      <svg viewBox="0 0 100 100" className="w-20 h-20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M 15 55 H 85 Q 80 85 50 85 Q 20 85 15 55 Z" fill="#ffffff" stroke="#2d1f47" strokeWidth="3" />
        <circle cx="35" cy="44" r="7" fill="#ebdfff" stroke="#2d1f47" strokeWidth="2" />
        <circle cx="50" cy="38" r="9" fill="#ebdfff" stroke="#2d1f47" strokeWidth="2" />
        <circle cx="65" cy="46" r="6" fill="#ebdfff" stroke="#2d1f47" strokeWidth="2" />
      </svg>
    )
  },
  {
    title: "Medication Support",
    description: "Our caregivers carefully administer medications and follow any special care instructions provided by pet parents.",
    bgColorClass: "bg-[#ebdfff]",
    illustration: (
      <svg viewBox="0 0 100 100" className="w-20 h-20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M 35 25 H 65 V 40 H 80 V 60 H 65 V 75 H 35 V 60 H 20 V 40 H 35 Z" fill="#ff608c" stroke="#2d1f47" strokeWidth="3.5" strokeLinejoin="round" />
        <path d="M 50 42 C 48 37, 42 37, 42 43 C 42 49, 50 54, 50 54 C 50 54, 58 49, 58 43 C 58 37, 52 37, 50 42 Z" fill="#ffd54f" stroke="#2d1f47" strokeWidth="1.8" />
      </svg>
    )
  },
  {
    title: "Pickup & Drop-off",
    description: "Convenient transportation services are available to make your pet's stay even easier.",
    bgColorClass: "bg-[#ffebd2]",
    illustration: (
      <svg viewBox="0 0 100 100" className="w-20 h-20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="35" width="60" height="34" rx="5" fill="#ffffff" stroke="#2d1f47" strokeWidth="3" />
        <rect x="62" y="39" width="14" height="14" rx="2" fill="#cbeeff" stroke="#2d1f47" strokeWidth="2" />
        <circle cx="35" cy="72" r="8" fill="#ffd54f" stroke="#2d1f47" strokeWidth="3" />
        <circle cx="65" cy="72" r="8" fill="#ffd54f" stroke="#2d1f47" strokeWidth="3" />
      </svg>
    )
  }
];

// Native scroll reveal helper
const RevealOnScroll = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => {
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
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-x-0 scale-100" : "opacity-0 translate-x-16 scale-95"
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default function CareServices() {
  const scrollToBooking = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById("booking");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="bg-[#ffffff] py-20 select-none border-t border-[#2d1f47]/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-2">
          <span className="text-[10px] bg-[#ffd54f] border border-[#2d1f47] text-[#2d1f47] font-black uppercase tracking-widest px-3.5 py-1.5 rounded-full inline-block shadow-xs">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl font-display text-[#2d1f47] tracking-tight">
            Our Services
          </h2>
          <p className="text-[#2d1f47]/70 text-sm sm:text-base font-semibold max-w-lg mx-auto">
            Comprehensive care options customized for your companion&apos;s physical health, hygiene, and behavior routines.
          </p>
        </div>

        {/* Wavy Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {SERVICES.map((srv, idx) => (
            <RevealOnScroll key={idx} delay={(idx % 4) * 100}>
              <div
                onClick={scrollToBooking}
                className="relative p-8 flex flex-col justify-between min-h-[460px] group cursor-pointer"
              >
                {/* Wavy Background (Displacement filter applied only to this background container) */}
                <div 
                  className={`absolute inset-0 border-[3.5px] border-[#2d1f47] rounded-[48px] z-0 pointer-events-none transition-transform duration-300 group-hover:scale-[1.02] shadow-[2px_2px_0px_#2d1f47] group-hover:shadow-[4px_4px_0px_#2d1f47] ${srv.bgColorClass}`}
                  style={{ filter: "url(#wavy-card-filter)" }}
                />

                {/* Card Content (Stays clean and sharp) */}
                <div className="relative z-10 space-y-4">
                  <h3 className="text-2xl font-display text-[#2d1f47] leading-tight">
                    {srv.title}
                  </h3>
                  <p className="text-[#2d1f47]/80 text-sm font-semibold leading-relaxed">
                    {srv.description}
                  </p>
                </div>

                {/* Graphic, Black Title Tag, Yellow Detail Badge & Daisy Flower */}
                <div className="relative z-10 flex flex-col items-center pt-6">
                  
                  {/* Illustration wrapper */}
                  <div className="relative">
                    {srv.illustration}
                    
                    {/* Floating Daisy Flower */}
                    <div className="absolute -top-1 -right-2 z-20">
                      <DaisyIcon />
                    </div>
                  </div>

                  {/* Brand Banner (Black pill) */}
                  <div className="bg-[#2d1f47] border border-[#2d1f47] text-white text-[9px] font-black uppercase tracking-widest px-4.5 py-1.5 rounded-md -mt-1.5 relative z-10 shadow-sm text-center">
                    THE WAGGING TAILS
                  </div>

                  {/* Detail Banner (Yellow pill) */}
                  <div className="bg-[#ffd54f] border border-[#2d1f47] text-[#2d1f47] text-[8px] font-black uppercase tracking-wider px-3.5 py-1 rounded-sm mt-1.5 relative z-10 shadow-xs text-center">
                    {srv.title}
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
