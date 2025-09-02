"use client";
import { useState } from "react";
import Image from "next/image";

export default function CtaSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter your email");
      return;
    }

    // Example: send email to backend or API
    console.log("Subscribed with:", email);
    alert(`Subscribed with: ${email}`);

    setEmail(""); // clear field
  };

  return (
    <div className="w-full px-6 sm:px-6 lg:px-20 mt-10">
      <section className="relative w-full max-w-[1214px] min-h-[280px] h-auto md:h-[280px] rounded-2xl overflow-hidden mx-auto">
        {/* Background image */}
        <Image
          src="/input.jpg"
          alt="Fitness Background"
          fill
          className="object-cover"
          priority
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FE5A2F]/80 via-[#FE5A2F]/60 to-[#FE5A2F]/50"></div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center md:items-start px-6 sm:px-10 lg:px-16 py-8 md:py-0 text-white text-center md:text-left">
          <p className="font-nunito font-[800]  text-[32px] leading-[36px]  leading-tight   font-extrabold sm:text-5xl md:text-6xl lg:text-[70px]  mb-6">
            Your Fitness Journey Awaits
          </p>

          {/* Form wrapper */}
          <form onSubmit={handleSubmit} className="w-full max-w-md">
            {/* Mobile (<sm) */}
            <div className="relative flex flex-col sm:hidden mt-4">
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-5 py-3 pr-32 text-xs rounded bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FE5A2F]"
              />
              <button
                type="submit"
                className="absolute top-1/2 right-2 text-xs -translate-y-1/2 bg-[#FE5A2F] text-white px-4 py-1.5 rounded font-medium hover:bg-[#e14e27] transition text-sm"
              >
                SUBSCRIBE
              </button>
            </div>

            {/* Small (sm only) */}
            <div className="relative hidden sm:flex md:hidden mt-4">
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-5 py-3 pr-32 rounded bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FE5A2F]"
              />
              <button
                type="submit"
                className="absolute top-1/2 right-2 -translate-y-1/2 bg-[#FE5A2F] text-white px-4 py-1.5 rounded font-medium hover:bg-[#e14e27] transition text-sm"
              >
                SUBSCRIBE
              </button>
            </div>

            {/* Medium and above (md+) */}
            <div className="relative hidden md:flex mt-4">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-5 py-3 pr-32 rounded bg-orange-100 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FE5A2F]"
              />
              <button
                type="submit"
                className="absolute top-1/2 right-2 -translate-y-1/2 bg-[#FE5A2F] text-white px-5 py-2 rounded font-medium hover:bg-[#e14e27] cursor-pointer transition text-base"
              >
                NOTIFY ME
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
