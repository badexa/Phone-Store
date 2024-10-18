import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <div>
      {/* Fixed Contact Section */}
      <div className="bg-white font-bold text-black text-center py-2 flex items-center justify-center fixed top-0 left-0 w-full z-50 shadow-md">
        <span>You want to order or have a question? Contact us on WhatsApp </span>
        <a href={`https://wa.me/${+212644332797}`} target="_blank" rel="noopener noreferrer" className="ml-2">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" // Web-hosted WhatsApp icon
            alt="WhatsApp"
            width={40} // Adjust size as needed
            height={24} // Adjust size as needed
            className="inline" // Align icon with text
          />
        </a>
      </div>

      {/* Separator Line */}
      <div className="border-b border-gray-300 mt-10"></div> {/* Added margin-top to avoid overlap */}

      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-40">
            {/* Logo on the far left */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/logo.jpg" // Replace with a web-hosted logo image
                  alt="PhoneStore Logo"
                  width={65} // Adjust width as needed
                  height={40} // Adjust height as needed
                  className="mr-2" // Space between logo and text
                />
                <span className="text-2xl font-bold text-black-600">MobileMasters</span>
              </Link>
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
      </nav>
    </div>
  );
}