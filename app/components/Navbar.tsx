"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiX } from "react-icons/fi";
import { RiMenu3Line } from "react-icons/ri";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="top-0 left-0 w-full bg-white z-50">
    
      <div className="max-w-[1214px] mx-auto py-4 px-6 lg:px- sm:px-6">
        <div className="flex flex-col">
       
<div className="flex justify-between items-center h-16">

  <div className="flex items-center space-x-8">
  
    <Link href="/" className="flex-shrink-0">
      <Image
        src="/Logo.png"
        alt="logo"
        width={147}
        height={42}
        priority
        className="block"
      />
    </Link>

  
    <div className="hidden md:flex items-center space-x-6">
      <a href="#clients" className="text-gray-600 text-[17px] font-bold cursor-pointer ">
        For Clients
      </a>
      <a href="#coaches" className="text-gray-600 text-[17px] font-bold cursor-pointer ">
        For Coaches
      </a>
    </div>
  </div>

 
  <div className="hidden md:flex items-center">
    <button className="bg-[#FE5A2F] text-white px-6 py-2.5 rounded-2xl cursor-pointer  font-medium">
      Get early access
    </button>
  </div>

 
  <div className="md:hidden flex items-center">
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="text-gray-800 focus:outline-none"
    >
      {isOpen ? <FiX size={28} /> : <RiMenu3Line size={28} />}
    </button>
  </div>
</div>


        
          <hr className=" border-[1px] border-gray-300 mt-5" />
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
