"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

// FAQS data from the copy deck
const FAQS = [
  {
    question: "What types of pets do you care for?",
    answer: "We welcome dogs, cats, and selected small pets. Contact us to discuss your pet's needs."
  },
  {
    question: "Can I visit before booking?",
    answer: "Yes. We encourage pet parents to tour our facility and meet our team before making a reservation."
  },
  {
    question: "Will I receive updates?",
    answer: "Absolutely! We share regular photos and videos so you always know how your pet is doing."
  },
  {
    question: "What should I bring?",
    answer: "Bring your pet's food, medications (if any), vaccination records, and any favorite items that help them feel at home."
  }
];

export default function FAQ() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-[#faf6f0] border-t border-[#2d1f47]/10 py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display text-[#2d1f47]">Frequently Asked Questions</h2>
          <p className="text-sm text-[#2d1f47]/70 font-semibold mt-2">
            Get answers to common pet boarding, grooming, and daycare queries.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white border-2 border-[#2d1f47] rounded-2xl overflow-hidden shadow-[2px_2px_0px_#2d1f47] transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-5 flex items-center justify-between font-extrabold text-sm sm:text-base text-[#2d1f47] hover:bg-[#faf6f0]/30 select-none cursor-pointer focus:outline-none"
                >
                  <span>{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-[#2d1f47]/60" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#2d1f47]/60" />
                  )}
                </button>

                {isOpen && (
                  <div className="p-5 border-t border-dashed border-[#2d1f47]/10 bg-[#faf6f0]/20 text-xs sm:text-sm text-[#2d1f47]/80 leading-relaxed font-semibold">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
