export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-between items-start">
          {/* Logo */}
          <div className="mb-7 md:mb-0">
            <h1 className="text-2xl font-bold font-sans text-[32px] leading-[40px]">
              week<span className="text-[#FE5A2F]">.one</span>
            </h1>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row sm:space-x-8 text-sm gap-2 sm:gap-0">
            <a href="#privacy" className=" ">
              Privacy Policy
            </a>
            <a href="#terms" className="">
              Terms & Conditions
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 mt-6 pt-4">
          {/* Bottom Row */}
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} week.one. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
