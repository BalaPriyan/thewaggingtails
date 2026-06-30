"use client";

import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";

export default function BookingForm() {
  const [petName, setPetName] = useState("");
  const [petType, setPetType] = useState("dog");
  const [serviceType, setServiceType] = useState("boarding");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [ownerPhone, setOwnerPhone] = useState("");
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!petName || !startDate || !ownerPhone) {
      alert("Please fill in the pet's name, start date, and your contact phone number.");
      return;
    }
    setBookingSuccess(true);
  };

  const resetBooking = () => {
    setPetName("");
    setStartDate("");
    setEndDate("");
    setOwnerPhone("");
    setBookingSuccess(false);
  };

  return (
    <section id="booking" className="bg-[#dfd5fc]/40 py-20 border-t border-[#2d1f47]/10">
      <div className="max-w-2xl mx-auto px-6">
        <div className="bg-white border-2 border-[#2d1f47] rounded-3xl p-6 md:p-10 shadow-[6px_6px_0px_0px_#2d1f47]">
          {!bookingSuccess ? (
            <>
              <div className="text-center mb-8">
                <span className="text-[10px] bg-[#ffd54f] border border-[#2d1f47] text-[#2d1f47] font-black uppercase tracking-widest px-3.5 py-1.5 rounded-full inline-block mb-3 shadow-xs">
                  Call to Action
                </span>
                <h3 className="text-2xl font-display text-[#2d1f47]">Let Your Pet Feel Right at Home</h3>
                <p className="text-xs text-[#2d1f47]/80 font-semibold mt-2 max-w-md mx-auto leading-relaxed">
                  When life takes you away, trust The Wagging Tails to provide the love, attention, and care your furry family member deserves.
                </p>
              </div>

              <form onSubmit={handleBookingSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Pet Name */}
                  <div>
                    <label className="block text-xs font-bold text-[#2d1f47]/80 mb-1.5">
                      Pet&apos;s Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={petName}
                      onChange={(e) => setPetName(e.target.value)}
                      placeholder="e.g. Max or Bella"
                      className="w-full border-2 border-[#2d1f47] rounded-xl px-4 py-2.5 text-xs sm:text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#e58e26]/20 bg-white"
                    />
                  </div>

                  {/* Pet Type */}
                  <div>
                    <label className="block text-xs font-bold text-[#2d1f47]/80 mb-1.5">
                      Pet Type *
                    </label>
                    <select
                      value={petType}
                      onChange={(e) => setPetType(e.target.value)}
                      className="w-full border-2 border-[#2d1f47] rounded-xl px-4 py-2.5 text-xs sm:text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#e58e26]/20 bg-white"
                    >
                      <option value="dog">Dog (Woof)</option>
                      <option value="cat">Cat (Meow)</option>
                      <option value="other">Small Pet / Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Service */}
                  <div>
                    <label className="block text-xs font-bold text-[#2d1f47]/80 mb-1.5">
                      Select Service
                    </label>
                    <select
                      value={serviceType}
                      onChange={(e) => setServiceType(e.target.value)}
                      className="w-full border-2 border-[#2d1f47] rounded-xl px-4 py-2.5 text-xs sm:text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#e58e26]/20 bg-white"
                    >
                      <option value="boarding">Pet Boarding</option>
                      <option value="daycare">Dog Daycare</option>
                      <option value="cat">Cat Boarding</option>
                      <option value="grooming">Grooming Session</option>
                    </select>
                  </div>

                  {/* Check-In */}
                  <div>
                    <label className="block text-xs font-bold text-[#2d1f47]/80 mb-1.5">
                      Check-In Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="w-full border-2 border-[#2d1f47] rounded-xl px-4 py-2.5 text-xs sm:text-sm font-semibold focus:outline-none bg-white"
                    />
                  </div>

                  {/* Check-Out */}
                  <div>
                    <label className="block text-xs font-bold text-[#2d1f47]/80 mb-1.5">
                      Check-Out Date
                    </label>
                    <input
                      type="date"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      className="w-full border-2 border-[#2d1f47] rounded-xl px-4 py-2.5 text-xs sm:text-sm font-semibold focus:outline-none bg-white"
                    />
                  </div>
                </div>

                {/* Owner Phone */}
                <div>
                  <label className="block text-xs font-bold text-[#2d1f47]/80 mb-1.5">
                    Your Contact Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={ownerPhone}
                    onChange={(e) => setOwnerPhone(e.target.value)}
                    placeholder="e.g. +91 XXXXX XXXXX"
                    className="w-full border-2 border-[#2d1f47] rounded-xl px-4 py-2.5 text-xs sm:text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#e58e26]/20 bg-white"
                  />
                </div>

                <button
                  type="submit"
                  className="relative inline-flex items-center justify-center font-bold text-xs uppercase tracking-widest text-white px-10 py-5 transition-transform duration-200 active:scale-95 group cursor-pointer w-full mt-4"
                >
                  <svg
                    viewBox="0 0 320 60"
                    preserveAspectRatio="none"
                    className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-sm transition-transform duration-200 group-hover:scale-[1.01]"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M 24 16 C 12 4, 3 18, 15 28 C 3 38, 12 52, 24 40 C 96 44, 224 44, 296 40 C 308 52, 317 38, 305 28 C 317 18, 308 4, 296 16 C 224 12, 96 12, 24 16 Z"
                      fill="#e58e26"
                      stroke="#2d1f47"
                      strokeWidth="3.2"
                      vectorEffect="non-scaling-stroke"
                    />
                    <path
                      d="M 26 19 C 16 8, 8 20, 18 28 C 8 36, 16 48, 26 37 C 96 41, 224 41, 294 37 C 304 48, 312 36, 302 28 C 312 20, 304 8, 294 19 C 224 15, 96 15, 26 19 Z"
                      fill="none"
                      stroke="#ffffff"
                      strokeWidth="1.2"
                      strokeDasharray="4,3"
                      vectorEffect="non-scaling-stroke"
                      opacity="0.5"
                    />
                  </svg>
                  <span className="relative z-10 text-white">Book Your Pet&apos;s Stay Today</span>
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-8 space-y-6">
              <div className="w-16 h-16 rounded-full bg-[#a2f3bd]/30 border-2 border-[#a2f3bd] text-[#2d1f47] flex items-center justify-center mx-auto animate-bounce">
                <CheckCircle2 className="w-10 h-10 text-[#e58e26]" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-[#2d1f47]">Reservation Requested!</h3>
                <p className="text-xs sm:text-sm text-[#2d1f47]/80 font-semibold mt-2 max-w-sm mx-auto leading-relaxed">
                  Thank you! We have received your query for <strong>{petName}</strong> starting <strong>{startDate}</strong>. 
                </p>
                <p className="text-xs sm:text-sm text-[#2d1f47]/80 font-semibold mt-1 max-w-sm mx-auto leading-relaxed">
                  Our facility caregiver will contact you shortly at <strong>{ownerPhone}</strong>.
                </p>
              </div>
              <button
                onClick={resetBooking}
                className="bg-[#2d1f47] hover:bg-[#e58e26] text-white font-extrabold text-xs uppercase tracking-wider px-6 py-2.5 rounded-xl transition-colors cursor-pointer"
              >
                Submit Another Request
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
