import Image from "next/image";

export default function CtaSection() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 mt-10">
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
          <p className="font-nunito font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-[70px] leading-tight mb-6">
            Your Fitness Journey Awaits
          </p>

          {/* Responsive Email Input */}
          {/* Mobile (<sm) */}
          <div className="relative w-full max-w-md flex flex-col sm:hidden mt-4">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-5 py-3 pr-32 rounded bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FE5A2F]"
            />
            <button className="absolute top-1/2 right-2 -translate-y-1/2 bg-[#FE5A2F] text-white px-4 py-1.5 rounded font-medium hover:bg-[#e14e27] transition text-sm">
              Subscribe
            </button>
          </div>

          {/* Small (sm only) */}
          <div className="relative w-full max-w-md hidden sm:flex md:hidden mt-4">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-5 py-3 pr-32 rounded bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FE5A2F]"
            />
            <button className="absolute top-1/2 right-2 -translate-y-1/2 bg-[#FE5A2F] text-white px-4 py-1.5 rounded font-medium hover:bg-[#e14e27] transition text-sm">
              Subscribe
            </button>
          </div>

          {/* Medium and above (md+) */}
          <div className="relative w-full max-w-md hidden md:flex mt-4">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="w-full px-5 py-3 pr-32 rounded bg-orange-100 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FE5A2F]"
            />
            <button className="absolute top-1/2 right-2 -translate-y-1/2 bg-[#FE5A2F] text-white px-5 py-2 rounded font-medium hover:bg-[#e14e27] transition text-base">
              NOTIFY ME
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
