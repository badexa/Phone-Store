'use client'; // Ensure this is a Client Component

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  return (
    <>
      {/* Fixed Contact Section */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white font-bold text-black text-center py-2 flex items-center justify-center shadow-md">
        <span>You want to order or have a question? Contact us on WhatsApp </span>
        <a href={`https://wa.me/${+212644332797}`} target="_blank" rel="noopener noreferrer" className="ml-2">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            width={40}
            height={24}
            className="inline"
          />
        </a>
      </div>

      {/* Navbar - not fixed, but with a high z-index */}
      <nav className="bg-white shadow-md mt-10 relative z-40"> {/* Added relative and z-40 */}
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-40">
            {/* Logo on the far left */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/logo.jpg"
                  alt="PhoneStore Logo"
                  width={65}
                  height={40}
                  className="mr-2"
                />
                <span className="text-2xl font-bold text-black-600">MobileMasters</span>
              </Link>
            </div>

            {/* Hamburger Menu for Mobile */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`text-gray-900 focus:outline-none transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              </button>
            </div>

            {/* Navigation links on the far right */}
            <div className="hidden md:block">
              <div className="flex items-baseline space-x-12">
                <Link href="/" className="text-xl text-gray-900 hover:text-indigo-600 px-3 py-2 rounded-md font-medium">
                  Home
                </Link>
                <Link href="/store" className="text-xl text-gray-900 hover:text-indigo-600 px-3 py-2 rounded-md font-medium">
                  Store
                </Link>
                <Link href="/about" className="text-xl text-gray-900 hover:text-indigo-600 px-3 py-2 rounded-md font-medium">
                  About
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-md">
            <div className="flex flex-col items-center">
              <Link href="/" className="text-xl text-gray-900 hover:text-indigo-600 px-3 py-2 rounded-md font-medium">
                Home
              </Link>
              <Link href="/store" className="text-xl text-gray-900 hover:text-indigo-600 px-3 py-2 rounded-md font-medium">
                Store
              </Link>
              <Link href="/about" className="text-xl text-gray-900 hover:text-indigo-600 px-3 py-2 rounded-md font-medium">
                About
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
