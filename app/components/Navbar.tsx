import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import Image from 'next/image'
import { Cancel01Icon, Menu11Icon } from '@hugeicons-pro/core-twotone-rounded'
import { HugeiconsIcon } from '@hugeicons/react'

interface Link {
  name: string
  href: string
}

const links: Link[] = [
  { name: "For clients", href: "/#" },
  { name: "For coaches", href: "/#" }
]

export const Navbar = () => {
  return (
    <Disclosure as="nav" className="relative bg-white">
      <div className="mx-auto max-w-7xl px-4  border-b border-gray-200 py-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          {/* Left side: Logo + Links */}
          <div className="flex">
            {/* Logo */}
            <div className="flex shrink-0 items-center">
              <Image
                alt="Your Company"
                src="Logo.svg"
                className=""
                width={147}
                height={42}
              />
            </div>

            {/* Desktop links */}
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              {links.map((link, index) => (
                <a
                  key={`${link.name}-${index}`}
                  href={link.href}
                  className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-[18px] font-medium text-gray-500 "
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right side: CTA + Mobile menu */}
          <div className="flex items-center gap-2.5">
            {/* CTA button (desktop only) */}
            <div className="shrink-0">
              <button
                type="button"
                className="hidden sm:block relative items-center gap-x-1.5 rounded-xl bg-[#FE5A2F] px-4 py-3 text-[18px] font-semibold text-white hover:bg-[#FE5A2F]/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FE5A2F] capitalize cursor-pointer"
              >
                Get early access
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-gray-800 ">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <HugeiconsIcon icon={Menu11Icon} className="block size-8 group-data-open:hidden" />
                <HugeiconsIcon icon={Cancel01Icon} className="hidden size-8 group-data-open:block" />
              </DisclosureButton>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu content */}
      <DisclosurePanel className="md:hidden">
        <div className="space-y-1 pt-2 pb-3">
          {links.map((link, index) => (
            <DisclosureButton
              key={`${link.name}-${index}`}
              as="a"
              href={link.href}
              className="block border-l-4 border-transparent py-2 pr-4 pl-3 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800 sm:pr-6 sm:pl-5"
            >
              {link.name}
            </DisclosureButton>
          ))}

          {/* CTA inside mobile menu */}
          <div className="mt-3 px-3">
            <button
              type="button"
              className="w-full rounded-xl bg-[#FE5A2F] px-4 py-3 text-sm font-semibold text-white hover:bg-[#FE5A2F]/80 "
            >
              Get early access
            </button>
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
