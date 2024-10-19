import ImageSlider from './components/ImageSlider';
import WhatsAppPopup from './components/WhatsAppPopup'; // Import the WhatsAppPopup component
import Image from 'next/image'; // Import Image for the circular image

export default function Home() {
  return (
    <div className="flex flex-col items-center overflow-x-hidden">
      <div className="w-screen">
        <ImageSlider />
      </div>

      {/* Quality Hardware Section */}
      <section className="w-full text-center py-20">
        <h2 className="text-3xl">Quality hardware makes all the difference in a
          <br />smartphone</h2>
      </section>

      <hr className="w-full border-t border-gray-300" />

      {/* Discover Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-center w-full py-40 margin-top-50">
        <div className="flex flex-col md:flex-row items-center">
          <div className="relative mb-6 md:mb-0 md:mr-6">
            <Image
              src="/images/1.jpg"
              alt="Discover"
              width={500}
              height={500}
              className="rounded-full border-4 object-cover w-full max-w-xs md:max-w-md" // Responsive width
            />
          </div>
          <div className="text-left">
            <h3 className="text-2xl">Discover</h3>
            <br />
            <p className="text-black-900 text-2xl md:text-3xl font-bold">
              Explore Endless Options
            </p>
            <br />
            <p className="text-gray-600 text-lg md:text-xl">
              Welcome to a world of limitless possibilities at<br />
              our phone store, where the journey to finding<br />
              your perfect device is just as exciting as using<br />
              it. Every moment spent here is an opportunity<br />
              to discover the latest technology and make<br />
              your mark in the digital landscape!
            </p>
          </div>
        </div>
      </section>

      {/* WhatsApp Popup */}
      <WhatsAppPopup />
    </div>
  );
}