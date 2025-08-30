import Image from "next/image";

export default function CoachesSection() {
  return (
    <section id="coaches" className="w-full bg-white py-16">
      <div className="max-w-[1214px] mx-auto px-4 md:px-10 lg:px-20 flex flex-col md:flex-row items-center gap-12">
        
        {/* Left side */}
        <div className="flex-1 flex flex-col items-start gap-6 text-center md:text-left">
          <p className="text-sm uppercase tracking-wide text-gray-500">Coaches</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
            Get Paid on Time, <br /> 
            <span className="text-[#FE5A2F]">Every Time</span>
          </h2>

          {/* Grid of images */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full">
            <Image
              src="/1st.png"
              alt="Coach 1"
              width={400}
              height={300}
              className="w-full h-auto rounded-lg object-cover"
            />
            <Image
              src="/2nd.png"
              alt="Coach 2"
              width={400}
              height={300}
              className="w-full h-auto rounded-lg object-cover"
            />
            <Image
              src="/3rd.png"
              alt="Coach 3"
              width={400}
              height={300}
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        </div>

        {/* Right side single image */}
        <div className="flex-1 w-full">
          <Image
            src="/savings.png"
            alt="Main Coach"
            width={600}
            height={500}
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}

