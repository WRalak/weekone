"use client";
import { useState } from "react";
import {  FiX } from "react-icons/fi";
import { RiMenu3Line } from "react-icons/ri";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo + Navlinks (left side) */}
          <div className="flex items-center space-x-8">
            {/* Logo */}
            <div className="flex-shrink-0 text-3xl font-bold text-black font-sans">
              week<span className="text-[#FE5A2F]">.one</span>
            </div>

            {/* Desktop Navlinks */}
            <div className="hidden md:flex items-center space-x-6">
              <a
                href="#clients"
                className="relative text-gray-800 hover:text-[#FE5A2F] transition after:content-[''] after:block after:h-[2px] after:w-0 after:bg-[#FE5A2F] after:transition-all after:duration-300 hover:after:w-full"
              >
                For Clients
              </a>
              <a
                href="#coaches"
                className="relative text-gray-800 hover:text-[#FE5A2F] transition after:content-[''] after:block after:h-[2px] after:w-0 after:bg-[#FE5A2F] after:transition-all after:duration-300 hover:after:w-full"
              >
                For Coaches
              </a>
            </div>
          </div>

          {/* Right CTA Button */}
          <div className="hidden md:flex">
            <button className="bg-[#FE5A2F] text-white px-6 py-4 rounded-2xl font-medium hover:opacity-90 transition">
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
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg px-4 pt-2 pb-4 space-y-4">
          <a
            href="#clients"
            className="block text-gray-800 hover:text-[#FE5A2F]"
            onClick={() => setIsOpen(false)}
          >
            For Clients
          </a>
          <a
            href="#coaches"
            className="block text-gray-800 hover:text-[#FE5A2F]"
            onClick={() => setIsOpen(false)}
          >
            For Coaches
          </a>
          <button className="w-full bg-[#FE5A2F] text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 transition">
            Get early access
          </button>
        </div>
      )}
    </nav>
  );
}
