"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full bg-white px-6 lg:px-10 xl:px-20 py-12">
      {/* Centered container */}
      <div className="max-w-[1214px] mx-auto flex flex-col lg:flex-row items-center lg:justify-between relative">
        
        {/* Left Section */}
        <div className="max-w-lg text-center lg:text-left">
          <p className="font-bold text-[#80959A] text-sm uppercase tracking-wide">
            FITNESS WITHOUT LIMITS
          </p>
          <h1 className="text-3xl lg:text-5xl font-bold mt-4">
            Your Fitness <br /> Journey Starts <span className="text-[#FE5A2F]">Here</span>
          </h1>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Whether you&apos;re ready to transform lives as a coach or transform your
            own – we&apos;ve got the perfect match waiting.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Be among the first to experience personalized coaching that <br /> fits your life.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center lg:justify-start">
            <button className="bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-600 transition">
              Join Waitlist
            </button>
            <button className="hidden sm:block border border-orange-500 text-orange-500 px-6 py-3 rounded-xl font-semibold hover:bg-orange-50 transition">
              Founding Coach
            </button>
          </div>
        </div>

        {/* Right Section */}
<div className="relative mt-10 lg:mt-0 w-full lg:w-[680px] h-[500px] flex justify-center">
  {/* Phone */}
  <Image
    src="/mobile.png"
    alt="Phone"
    width={400}
    height={600}
    className="relative z-10 object-contain"
  />

  {/* Graph positioned bottom-left, overlapping phone */}
  <div className="absolute bottom-0 left-0 z-20">
    <Image
      src="/Graph.png"
      alt="Graph"
      width={220}
      height={220}
      className="object-contain"
    />
    {/* Small image pinned to bottom-left of Graph */}
    <Image
      src="/illustration 02.png"
      alt="Small Bottom Left"
      width={70}
      height={70}
      className="absolute bottom-0 left-0 z-30 object-contain"
    />
  </div>

  {/* Right middle image */}
  <Image
    src="/Arrow 01.png"
    alt="Middle Right"
    width={150}
    height={150}
    className="absolute top-1/3 right-0 z-20 object-contain"
  />

  {/* Right top image */}
  <Image
    src="/1st.png"
    alt="Top Right"
    width={300}
    height={100}
    className="absolute top-5 right-10 z-20 object-contain"
  />

  {/* Far top-right image */}
  <Image
    src="/illusion.png"
    alt="Far Top Right"
    width={70}
    height={70}
    className="absolute top-0 right-0 z-20 object-contain"
  />
</div>



      </div>
    </section>
  );
}
