import Image from "next/image";

export default function CtaSection() {
  return (
    <section className="relative w-full max-w-[1214px] h-[280px] rounded-2xl overflow-hidden mx-auto mt-10">
      {/* Background image */}
      <Image
        src="/input.jpg" // replace with your image path
        alt="Fitness Background"
        fill
        className="object-cover"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FE5A2F]/80 via-[#FE5A2F]/60 to-[#FE5A2F]/50"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 sm:px-10 text-white">
        <p className="font-nunito font-extrabold text-[70px] leading-none mb-6">
          Your Fitness Journey Awaits
        </p>

        {/* Input with button inside */}
        <div className="relative w-full max-w-md">
          <input
            type="email"
            placeholder="Enter Your Email Address"
            className="w-full px-5 py-3 pr-32 rounded bg-white text-black placeholder-gray-500 focus:outline-none"
          />
          <button className="absolute top-1/2 right-2 -translate-y-1/2 bg-[#FE5A2F] text-white px-5 py-2 rounded font-medium hover:bg-[#e14e27] transition">
            NOTIFY ME
          </button>
        </div>
      </div>
    </section>
  );
}
