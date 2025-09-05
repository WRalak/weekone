"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full bg-white mb-20 lg:mb-20 px-6 lg:px-20 xl:px-20 ">
      <div className="max-w-[1214px] mx-auto flex flex-col lg:flex-row items-center lg:justify-between relative">

        {/* Left Section - Centered on small screens */}
        <div className="flex flex-col mt-6  items-center lg:items-start w-full lg:w-[50%] text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start w-full mb-">
            {/* HR only on mobile */}
            <hr className="w-12 border-t border-gray-400 mr-3 lg:" />
            <p className="hero-pretext font-extrabold text-[#80959A] text-base uppercase tracking-wide">
              FITNESS WITHOUT LIMITS
            </p>
          </div>

          <h1 className="md:text-[60px] text-[60px] font-nunito lg:text-[60px] mt-4 leading-tight lg:leading-[1.1]">
            Your Fitness <br className="hidden lg:block" />
            Journey Starts <span className="text-[#FE5A2F]">Here</span>
          </h1>

          {/* Paragraphs */}
          <p className="mt-4 text-gray-600 text-[18px] leading-relaxed hidden md:block">
            Whether you&apos;re ready to transform lives as a coach or <br /> transform your
            own – we&apos;ve got the perfect match waiting.
          </p>

          <p className="mt-2 text-sm md:text-[18px] text-gray-600 leading-relaxed">
            Be among the first to experience personalized coaching that
            <br className="hidden sm:block" /> fits your life.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center lg:justify-start w-full">
            <button className="bg-orange-500 cursor-pointer text-white px-6 py-3 sm:px-6 sm:py-4 rounded-xl font-semibold hover:bg-orange-600 transition w-full sm:w-auto">
              Join Waitlist
            </button>

            <button className="border-2 border-orange-500 text-orange-500 px-6 py-3 rounded-xl font-semibold hover:bg-orange-50 transition hidden md:block cursor-pointer w-full sm:w-auto">
              Founding Coach
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative  lg:mt-0 w-full lg:w-[680px] h-[607px] sm:h-[500px] flex justify-center">
          <Image
            src="/Hero.png"
            alt="Phone"
            width={680}
            height={607}
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
