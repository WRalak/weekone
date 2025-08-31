import Image from "next/image";

export default function CoachesSection() {
  return (
    <section id="coaches" className="w-full flex justify-center px-10 py-12">
      <div className="max-w-[1251px] w-full flex flex-col lg:flex-row items-start gap-8">
        
        {/* Left side: Text + Images */}
        <div className="flex-1 flex flex-col w-full">
        <div className="flex items-center w-full mb-6 lg:px-20 lg:block">
  {/* HR only on mobile */}
  <hr className="w-12 border-t border-gray-200 mr-3 lg:hidden" />
  
  <h2 className="text-sm sm:text-base md:text-lg lg:text-[16px] text-[#80959A] font-bold text-center lg:text-left">
    COACHES
  </h2>
</div>

          
          {/* Two images below */}
          <div className="flex flex-col lg:flex-row gap-4 w-full relative">
            
            {/* First image */}
            <div className="relative w-full lg:flex-1 aspect-[4/3]">
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
            <div className="relative w-full lg:flex-1 aspect-[4/3]">
              <Image
                src="/savings.png"
                alt="Coach 2"
                fill
                className="object-cover rounded-xl"
              />
            </div>

          </div>

          <hr className="border-t border-gray-400 mt-8 w-full lg:w-auto" />



        </div>
      </div>
    </section>
  );
}
