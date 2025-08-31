"use client";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <section
        id="clients"
        className="w-full max-w-[1258px] mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-6 lg:px-20 py-12 gap-"
      >
        {/* LEFT SIDE - Phone */}
        <div className="relative flex justify-center w-full md:w-1/2">
          <div className="relative w-[371px] h-[625px]">
            <Image
              src="/Mobile .png"
              alt="Phone"
              fill
              className="rounded-xl object-contain"
              priority
            />
          </div>
        </div>

        {/* RIGHT SIDE - Text */}
        <div className="flex flex-col items-center md:items-start w-full md:w-1/2 space-y-4 text-center md:text-left relative">
            <div className="flex items-center w-full my-4 ">
<hr className="w-16 border-t border-gray-400 mr-2 lg:hidden" />

  <p className="text-sm font-semibold uppercase tracking-wide">
    CLIENTS
  </p>
</div>



          <h2 className="text-5xl md:text-5xl font-extrabold text-gray-900 leading-snug">
            Your Fitness Journey <br />
            <span className="text-[#FE5A2F]">Simplified</span>
          </h2>

          <ul className="list-disc list-outside pl-6 text-gray-600 space-y-2">
            <li>Discover certified trainers who match your goals and schedule.</li>
            <li>Book sessions that fit your busy lifestyle - anytime, anywhere.</li>
            <li>Build lasting habits with trainers who keep you motivated and on track.</li>
          </ul>

          <button className="mt-4 cursor-pointer  px-6 py-3 bg-[#FE5A2F] text-white rounded-xl font-semibold shadow hover:bg-[#e14e28] transition">
            Secure Your Spot
          </button>

          {/* Bottom Right Connector */}
          <div className="mt-3 relative w-[130px] h-[80px] block md:hidden">
  <Image
    src="/Vector 14.png"
    alt="Right Side Image"
    fill
    className="object-contain rotate-90 -translate-x-20 " // facing up
  />
</div>
          <div className="mt-3 relative w-[80px] h-[50px] ml-30 hidden md:block">
            <Image
              src="/Vector 14.png"
              alt="Right Side Image"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* HR separator between sections */}
      <hr className="border-t border-gray-400 w-full mt-8" />
    </>
  );
}
