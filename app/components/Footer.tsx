import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          {/* Logo */}
          <div className="mb-6 md:mb-0 px-">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/Logo.svg"
                alt="logo"
                width={147}
                height={42}
                priority
              />
            </Link>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 text-[16px] text-gray-600">
            <a href="#privacy" className="hover:text-gray-800 transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-gray-800 transition-colors">
              Terms & Conditions
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 mt-6 pt-6">
          {/* Bottom Row */}
          <p className="text-[18px] font-medium text-gray-500 text- md:text-left">
            © {new Date().getFullYear()} weekone. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}