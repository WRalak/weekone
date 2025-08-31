"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full bg-white px-6 lg:px-10 xl:px-20 py-4">
      <div className="max-w-[1214px] mx-auto flex flex-col lg:flex-row items-center lg:justify-between relative gap-6">
        
        {/* Left Section */}
        <div className="flex flex-col items-start w-full lg:w-[50%]">
  <div className="flex items-center space-x-2">
   

    <div className="flex items-center w-full mb-4 lg:block">
  {/* HR only on mobile */}
  <hr className="w-12 border-t border-gray-200 mr-3 lg:hidden" />
  
  <p className="font-bold text-[#80959A] text-sm uppercase tracking-wide self-center">
    FITNESS WITHOUT LIMITS
  </p>
</div>

  </div>

  <h1 className="text-5xl lg:text-[50px] font-bold mt-4 leading-tight lg:leading-[1.1]">
    Your Fitness <br className="hidden lg:block" />
    Journey Starts <span className="text-[#FE5A2F]">Here</span>
  </h1>

  {/* Paragraphs */}
  <p className="mt-4 text-gray-600 leading-relaxed hidden sm:block">
    Whether you&apos;re ready to transform lives as a coach or transform your
    own – we&apos;ve got the perfect match waiting.
  </p>

  <p className="mt-4 text-gray-600 leading-relaxed">
    Be among the first to experience personalized coaching that <br /> fits your life.
  </p>

  {/* Buttons */}
  <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center lg:justify-start w-full">
    <button className="bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-600 transition">
      Join Waitlist
    </button>
    <button className="border border-orange-500 text-orange-500 px-6 py-3 rounded-xl font-semibold hover:bg-orange-50 transition hidden sm:block">
      Finding Coach
    </button>
  </div>
</div>


        {/* Right Section */}
        <div className="relative mt-10 lg:mt-0 w-full lg:w-[680px] h-[500px] flex justify-center">
          <Image
            src="/Hero.png"
            alt="Phone"
            width={400}
            height={600}
            className="object-contain"
          />
        </div>

      </div>
    </section>
  );
}
