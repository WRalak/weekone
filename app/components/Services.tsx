import Image from "next/image";

export default function InfoBar() {
  return (
    <div className="w-full  mx-auto bg-[#FE5A2F] h-[220.5px] flex items-center justify-between ">
      {/* Left lines */}
      <div className="flex flex-col gap-2">
        <Image src="/Vector 7.png" alt="line" width={40} height={40} />
        <Image src="/Vector 7.png" alt="line" width={40} height={40} />
      </div>

      {/* Middle section */}
      <div className="flex items-center justify-center gap-20 text-center text-white">
        <div>
          <Image src="/coaches.png" alt="Coaches" width={50} height={50} className="mx-auto" />
          <p className="font-bold mt-2">For Coaches</p>
          <p>Build your global practice</p>
        </div>
        <div>
          <Image src="/clients.png" alt="Clients" width={50} height={50} className="mx-auto" />
          <p className="font-bold mt-2">For Clients</p>
          <p>Find your perfect match</p>
        </div>
        <div>
          <Image src="/people.png" alt="Everyone" width={50} height={50} className="mx-auto" />
          <p className="font-bold mt-2">For Everyone</p>
          <p>Fitness made personal</p>
        </div>
      </div>

      {/* Right lines */}
      <div className="flex flex-col gap-2">
        <Image src="/Vector 6.png" alt="line" width={40} height={40} />
        <Image src="/Vector 6.png" alt="line" width={40} height={40} />
      </div>
    </div>
  );
}
