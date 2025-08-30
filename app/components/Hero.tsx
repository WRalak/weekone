"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full bg-white px-6 lg:px-20 py-12">
      <div className="flex flex-col lg:flex-row items-center lg:justify-between relative">
        
        {/* Left Section */}
        <div className="max-w-lg text-center lg:text-left">
          <p className="font-bold text-sm uppercase tracking-wide">
            FITNESS WITHOUT LIMITS
          </p>
          <h1 className="text-3xl lg:text-5xl font-bold mt-4">
            Your Fitness Journey Starts Here
          </h1>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Whether you're ready to transform lives as a coach or transform your
            own – we've got the perfect match waiting. Be among the first to
            experience personalized coaching that fits your life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center lg:justify-start">
            <button className="bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-600 transition">
              Join Waitlist
            </button>
            <button className="border border-orange-500 text-orange-500 px-6 py-3 rounded-xl font-semibold hover:bg-orange-50 transition">
              Founding Coach
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative mt-10 lg:mt-0 w-full lg:w-[680px] h-[500px] flex justify-center">
          {/* Main phone image */}
          <Image
            src="/mobile.png"
            alt="Phone"
            width={400}
            height={600}
            className="relative z-10 object-contain"
          />

          {/* Floating Images */}
          <Image
            src="/Graph.png"
            alt="Bottom Left"
            width={220}
            height={220}
            className="absolute bottom-0 left-0 object-contain"
          />
          <Image
            src="/Arrow 01.png"
            alt="Middle Right"
            width={150}
            height={150}
            className="absolute top-1/3 right-0 object-contain"
          />
          <Image
            src="/illustration 01.png"
            alt="Top Right"
            width={80}
            height={70}
            className="absolute top-0 right-10 object-contain"
          />
        </div>
      </div>
    </section>
  );
}
