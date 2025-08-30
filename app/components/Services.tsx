import Image from "next/image";

export default function InfoBar() {
  return (
    <div className="relative w-full bg-[#FE5A2F] lg:h-[220.5px] flex items-center justify-center px-6 py-6 lg:px-12 overflow-visible">
      {/* Left lines */}
      <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2">
        <Image src="/Vector 7.png" alt="line" width={40} height={80} />
      </div>

      {/* Middle section */}
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center text-white">
        <div>
          <Image
            src="/coaches.png"
            alt="Coaches"
            width={50}
            height={50}
            className="mx-auto"
          />
          <p className="font-bold mt-2">For Coaches</p>
          <p className="text-sm">Build your global practice</p>
        </div>

        <div>
          <Image
            src="/clients.png"
            alt="Clients"
            width={50}
            height={50}
            className="mx-auto"
          />
          <p className="font-bold mt-2">For Clients</p>
          <p className="text-sm">Find your perfect match</p>
        </div>

        <div>
          <Image
            src="/people.png"
            alt="Everyone"
            width={50}
            height={50}
            className="mx-auto"
          />
          <p className="font-bold mt-2">For Everyone</p>
          <p className="text-sm">Fitness made personal</p>
        </div>
      </div>

      {/* Right lines */}
      <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2">
        <Image src="/Vector 6.png" alt="line" width={40} height={80} />
      </div>
    </div>
  );
}
