import Image from "next/image";

export default function InfoBar() {
  return (
    <div className="relative w-full bg-[#FE5A2F] lg:h-[220px] flex flex-col lg:flex-row items-center justify-center px-6 py-10 lg:px-12">
      
      {/* Left lines on desktop */}
      <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2">
        <Image src="/Vector 4.png" alt="line" width={40} height={80} />
        <Image src="/Vector 4.png" alt="line" width={40} height={80} />
      </div>

      {/* Middle section */}
      <div className="w-full max-w-[1214px] flex flex-col lg:grid lg:grid-cols-3 text-center text-white gap-6 lg:gap-10">
        {/* For Coaches */}
        <div className="flex flex-col items-center">
          <Image src="/coaches.png" alt="Coaches" width={50} height={50} />
          <p className="font-bold mt-3 text-lg">For Coaches</p>
          <p className="text-sm opacity-90">Build your global practice</p>
        </div>

        {/* Divider on mobile */}
      <hr className="border-t border-gray-300 w-full my-6 lg:hidden" />


        {/* For Clients */}
        <div className="flex flex-col items-center">
          <Image src="/clients.png" alt="Clients" width={50} height={50} />
          <p className="font-bold mt-3 text-lg">For Clients</p>
          <p className="text-sm opacity-90">Find your perfect match</p>
        </div>

        {/* Divider on mobile */}
     <hr className="border-t border-gray-200 w-full my-6 lg:hidden" />


        {/* For Everyone */}
        <div className="flex flex-col items-center">
          <Image src="/people.png" alt="Everyone" width={50} height={50} />
          <p className="font-bold mt-3 text-lg">For Everyone</p>
          <p className="text-sm opacity-90">Fitness made personal</p>
        </div>
      </div>

      {/* Right lines on desktop */}
      <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2">
        <Image src="/Vector 8.png" alt="line" width={40} height={80} />
        <Image src="/Vector 8.png" alt="line" width={40} height={80} />
      </div>
    </div>
  );
}
