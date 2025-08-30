import Image from "next/image";

export default function CoachesSection() {
  return (
    <section className="w-full flex justify-center px-4 py-12">
      <div className="max-w-[1251px] w-full h-auto lg:h-[601px] flex flex-col lg:flex-row items-start gap-8">
        
        {/* Left side: Text + Images */}
        <div className="flex-1 flex flex-col items-start w-full">
          {/* Text on top */}
          <h2 className="text-sm lg:text-sm px-4 lg:px-0 font-bold mb-6">COACHES</h2>
          
          {/* Two images below */}
          <div className="flex flex-col lg:flex-row gap-4 w-full relative">
            
            {/* First image */}
            <div className="relative w-full lg:flex-1 h-[200px] sm:h-[300px] lg:h-[460px]">
              <Image
                src="/Purchase Text.png"
                alt="Coach 1"
                fill
                className="object-cover rounded-xl"
              />
            </div>

            {/* Connector image (visible only on small screens) */}
           <div className="relative block lg:hidden w-full h-[60px] flex justify-end items-center">
  <div className="relative w-[80px] h-[60px] rotate-270">
    <Image
      src="/Vector 14.png"
      alt="Connector"
      fill
      className="object-contain"
    />
  </div>
</div>


            {/* Second image */}
            <div className="relative w-full lg:flex-1 h-[200px] sm:h-[300px] lg:h-[570px]">
              <Image
                src="/savings.png"
                alt="Coach 2"
                fill
                className="object-cover rounded-xl"
              />
            </div>

          </div>

          {/* Horizontal line below the images */}
          <hr className="border-t border-gray-300 mt-8 w-full" />
        </div>
      </div>
    </section>
  );
}
