'use client'

import { useState } from 'react'
import Image from 'next/image'


export const Hero = () => {
  const [] = useState(false)

  return (
    <div className="bg-white">
      <div className="relative isolate">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:flex lg:items-center lg:gap-x-10">
          <div className="mx-auto max-w-xl lg:mx-0 lg:flex-auto">
            <div className="flex">
              <div className="relative flex items-center gap-x-4 bg-white text-sm/6 text-gray-600 ">
              <Image src="dash.svg" alt="hero" width={20} height={20} />
                <a href="#" className="flex items-center gap-x-1 font-extrabold text-[#80959A] uppercase">
                  <span aria-hidden="true" className="absolute inset-0" />
                  FITNESS WITHOUT LIMITS

                </a>
              </div>
            </div>
            <h1 className="mt-5 text-6xl font-black tracking-tight text-pretty text-gray-900">
              Your Fitness<br />
              Journey Starts <span className="text-[#FE5A2F]">Here</span>
            </h1>
            <p className="mt-8 text-lg font-normal text-pretty text-gray-500">
                Whether you&apos;re ready to transform lives as a coach or <br /> transform your own - we&apos;ve got the perfect match waiting.
            </p>
            <p className="mt-4 text-lg font-normal text-pretty text-gray-500">
                Be among the first to experience personalized coaching that<br /> fits your life.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
            <button
                type="button"
                className="hidden sm:block relative items-center gap-x-1.5 rounded-xl bg-[#FE5A2F] px-4 py-3 text-sm font-semibold text-white hover:bg-[#FE5A2F]/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FE5A2F] capitalize cursor-pointer"
              >
                Join waitlist
              </button>
              <button
                type="button"
                className="hidden sm:block relative items-center gap-x-1.5 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-[#FE5A2F]  border-[#FE5A2F] border-[1.5px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FE5A2F] capitalize cursor-pointer"
              >
                Founding coach
              </button>
            </div>
          </div>
          <div className="mt-16 sm:mt-24 lg:mt-0 lg:shrink-0 lg:grow">
            <Image alt="" src="app-screenshot.svg" className="w-full h-full object-contain" width={500} height={500} />
          </div>
        </div>
      </div>
    </div>
  )
}