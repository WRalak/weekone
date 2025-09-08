"use client";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <section
        id="clients"
        className="w-full max-w-[1258px] mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 lg:px-20 py-12 gap-10"
      >
        {/* Left Side: Phone Image */}
        <div className="relative flex justify-center w-full md:w-1/2">
          <div className="relative w-full max-w-[371px] h-[450px] sm:h-[550px] md:h-[625px]">
            <Image
              src="/Mobile .png"
              alt="Phone"
              fill
              className="rounded-xl object-contain"
              priority
            />
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="flex flex-col items-center md:items-start w-full md:w-1/2 space-y-4 text-center md:text-left relative">
          {/* Heading label */}
          <div className="flex items-center w-full my-2 md:my-0 justify-center md:justify-start">
            <hr className="w-12 border-t border-gray-400 mr-2 " />
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
              CLIENTS
            </p>
          </div>

          {/* Title */}
          <h1 className="mt-5 text-5xl font-black  leading-snug tracking-tight text-pretty text-gray-900">
            Your Fitness Journey <br />
            <span className="text-[#FE5A2F] ">Simplified</span>
          </h1>

         {/* Bullet Points */}
<ul className="text-base text-sm md:text-[18px] text-gray-600 space-y-3 mt-4 list-disc pl-6">
  <li>
    Discover certified trainers who match your goals and <br /> schedule.
  </li>
  <li>
    Book sessions that fit your busy lifestyle – anytime,<br /> anywhere.
  </li>
  <li>
    Build lasting habits with trainers who keep you <br /> motivated and on track.
  </li>
</ul>


          {/* Button */}
          <button className="mt-6 cursor-pointer px-6 py-3 bg-[#FE5A2F] text-white rounded-xl font-semibold shadow hover:bg-[#e14e28] transition w-full sm:w-auto">
            Secure Your Spot
          </button>

          {/* Decorative Arrows */}
          <div className="mt-6 relative w-20 h-14 block md:hidden">
            <Image
              src="/Vector 14.png"
              alt="Arrow Mobile"
              fill
              className="object-contain rotate-90 -translate-x-12"
            />
          </div>

          <div className="mt-6 relative w-20 h-14 hidden md:block">
            <Image
              src="/Vector 14.png"
              alt="Arrow Desktop"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Separator */}
      <hr className="border-t border-gray-400 w-full mt-8" />
    </>
  );
}
