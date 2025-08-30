import Image from "next/image";

export default function CoachesSection() {
  return (
    <section id="coaches" className="w-full bg-white py-10">
      <div className="container mx-auto md:px-20 px-4 flex flex-col md:flex-row items-center gap-8">
        {/* Left side */}
        <div className="flex-1 flex flex-col items-start gap-6">
          <p className="text-sm uppercase tracking-wide text-gray-500">Coaches</p>
          <h2 className="text-5xl font-bold text-gray-900">
            Get Paid on Time, <br /> <span className="text-[#FE5A2F]">Every Time</span> 
          </h2>

          {/* Grid of images */}
          <div className="grid grid-cols-1 gap-4">
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
        <div className="flex-1">
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
