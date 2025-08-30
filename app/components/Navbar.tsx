"use client";
import Link from "next/link";
import { useState } from "react";
import { FiX } from "react-icons/fi";
import { RiMenu3Line } from "react-icons/ri";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="top-0 left-0 w-full bg-white z-50">
      <div className="max-w-8xl mx-auto py-4 px-4 sm:px-6 lg:px-10 xl:px-20">
        <div className="flex flex-col">
          {/* Top row: logo + navlinks + button */}
          <div className="flex justify-between items-center h-16">
            {/* Logo + Navlinks in one line */}
            <div className="flex items-center space-x-8">
              {/* Logo */}
               <Link 
              href={'/'} 
              className="flex-shrink-0 text-[32px] font-black text-gray-900 leading-[130%] vertical-align-middle"
              style={{ fontFamily: 'Nunito, sans-serif' }}
            >
              week<span className="text-[#FE5A2F]">.one</span>
            </Link>

              {/* Desktop Navlinks */}
              <div className="hidden md:flex items-center space-x-6">
                <a href="#clients" className="text-gray-800">
                  For Clients
                </a>
                <a href="#coaches" className="text-gray-800">
                  For Coaches
                </a>
              </div>
            </div>

            {/* Right CTA Button */}
            <div className="hidden md:flex">
              <button className="bg-[#FE5A2F] text-white px-6 py-4 rounded-2xl font-medium">
                Get early access
              </button>
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-800 focus:outline-none"
              >
                {isOpen ? <FiX size={28} /> : <RiMenu3Line size={28} />}
              </button>
            </div>
          </div>

          {/* HR under entire row */}
          <hr className="hidden lg:block border-[1px] border-gray-300 mt-5" />
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg px-4 pt-2 pb-4 space-y-4">
          <a
            href="#clients"
            className="block text-gray-800"
            onClick={() => setIsOpen(false)}
          >
            For Clients
          </a>
          <a
            href="#coaches"
            className="block text-gray-800"
            onClick={() => setIsOpen(false)}
          >
            For Coaches
          </a>
          <button className="w-full bg-[#FE5A2F] text-white px-4 py-2 rounded-lg font-medium">
            Get early access
          </button>
        </div>
      )}
    </nav>
  );
}
