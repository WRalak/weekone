// app/page.tsx (Next.js 13+)
"use client";
import Image from "next/image";

export default function Page() {
  return (
    <section className="w-full max-w-[1258px] mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 lg:px-20 py-12 gap-10">
      
      {/* LEFT SIDE */}
      <div className="relative flex justify-center w-full md:w-1/2">
        {/* Phone Image */}
        <div className="relative w-[371px] h-[625px]">
          <Image
            src="/phone.png"
            alt="Phone"
            fill
            className="rounded-xl object-contain"
            priority
          />
        </div>

        {/* Small Image - absolute top-right of phone */}
        <div className="absolute -top-6 right-6 w-[87px] h-[124px]">
          <Image
            src="/illustration 01.png"
            alt="Small overlay"
            fill
            className="object-contain rounded-lg"
          />
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex flex-col items-start w-full md:w-1/2 space-y-4">
        <p className="text-sm font-semibold  uppercase tracking-wide">
          CLIENTS
        </p>
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-snug">
          Your Fitness Journey <br /> <span className="text-[#FE5A2F]">Simplified</span>
        </h2>

        <ul className="list-disc list-outside pl-6 text-gray-600 space-y-2">
          <li>Discover certified trainers who match your goals and schedule.</li>
          <li>Book sessions that fit your busy lifestyle - anytime, anywhere.</li>
          <li>Build lasting habits with trainers who keep you motivated and on track.</li>
        </ul>

        <button className="mt-4 px-6 py-3 bg-[#FE5A2F] text-white rounded-xl font-semibold shadow hover:bg-[#e14e28] transition">
          Secure Your Spot
        </button>

        {/* Bottom Right Image */}
        <div className="mt-3 relative w-full max-w-[100px] h-[50px]">
          <Image
            src="/Vector 14.png"
            alt="Right Side Image"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
