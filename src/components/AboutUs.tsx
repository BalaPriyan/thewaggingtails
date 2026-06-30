"use client";

import React, { useState, useEffect, useRef } from "react";

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
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-x-0 scale-100" : "opacity-0 translate-x-16 scale-95"
      }`}
    >
      {children}
    </div>
  );
};

export default function AboutUs() {
  return (
    <section id="about" className="bg-[#ffffff] py-20 select-none">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* About Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block: Content */}
          <div className="lg:col-span-7 space-y-6">
            <RevealOnScroll delay={100}>
              <span className="text-[10px] bg-[#dfd5fc] border border-[#2d1f47] text-[#2d1f47] font-black uppercase tracking-widest px-3.5 py-1.5 rounded-full inline-block">
                About The Wagging Tails
              </span>
            </RevealOnScroll>
            
            <RevealOnScroll delay={200}>
              <h2 className="text-3xl sm:text-4xl font-display text-[#2d1f47] leading-tight">
                Every Pet Deserves to Feel at Home
              </h2>
            </RevealOnScroll>

            <RevealOnScroll delay={300}>
              <div className="space-y-4 text-sm sm:text-base text-[#2d1f47]/80 font-semibold leading-relaxed">
                <p>
                  We know how difficult it can be to leave your pet behind. They&apos;re more than companions—they&apos;re family. That&apos;s why we created The Wagging Tails, a place where pets can feel safe, loved, and cared for while you&apos;re away.
                </p>
                <p>
                  Our goal is simple: to provide a stress-free experience for both pets and their owners. From cozy spaces and playtime to personalized care and daily updates, we make sure every stay is comfortable and enjoyable.
                </p>
                <p>
                  Whether it&apos;s an overnight stay, daycare, or a longer visit, your pet will always receive the attention, affection, and care they deserve.
                </p>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Block: Mascot / Graphic */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <RevealOnScroll delay={200}>
              <div className="w-[280px] sm:w-[320px] transition-transform duration-500 hover:scale-105">
                <img src="/thewaggingtailfounderbgremoved.png" alt="founder" className="w-full h-auto drop-shadow-md" />
              </div>
            </RevealOnScroll>
          </div>
        </div>

        {/* Our Promise Banner */}
        <RevealOnScroll delay={400}>
          <div className="mt-16 bg-[#e8dcff]/50 border-2 border-dashed border-[#2d1f47] rounded-3xl p-8 md:p-10 text-center space-y-4">
            <span className="text-[10px] bg-[#ffd54f] border border-[#2d1f47] text-[#2d1f47] font-black uppercase tracking-widest px-3.5 py-1.5 rounded-full inline-block shadow-xs">
              Our Promise
            </span>
            <h3 className="text-xl sm:text-2xl font-display text-[#2d1f47] leading-tight">
              A Safe &amp; Loving Environment
            </h3>
            <p className="text-sm sm:text-base text-[#2d1f47]/80 font-semibold max-w-3xl mx-auto leading-relaxed">
              Every pet that walks through our doors is treated with kindness, patience, and genuine affection. We believe in creating a home away from home where pets can relax, play, and thrive until they&apos;re reunited with their families.
            </p>
          </div>
        </RevealOnScroll>

      </div>
    </section>
  );
}
