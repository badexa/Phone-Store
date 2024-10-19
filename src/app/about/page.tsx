// src/app/about/page.tsx
'use client';

import Image from 'next/image';
import dynamic from 'next/dynamic';

// Dynamically import WhatsAppPopup to ensure it only loads on the client side
const WhatsAppPopup = dynamic(() => import('../components/WhatsAppPopup'), { ssr: false });

export default function About() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <div className="relative h-64 sm:h-80 md:h-96">
        <Image
          src="/images/h.jpg"
          alt="Phone Store Team"
          layout="fill"
          objectFit="cover"
          className="object-center opacity-80"
        />
      </div>
      
      <main className="p-6 sm:p-10 bg-white shadow-lg rounded-lg mx-4 sm:mx-10 mt-[-40px] z-10">
        <section className="mb-12">
          <p className="text-gray-600 font-bold leading-relaxed">
            Founded with a passion for mobile technology, MobileMasters has been serving the Safi community since our inception. 
            We pride ourselves on offering the latest smartphones and accessories, coupled with expert advice and 
            unparalleled customer service.
          </p>
        </section>
        
        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Visit Us</h2>
          <p className="text-gray-600 mb-4">
            We&apos;d love to see you in person! Visit our store located in the heart of Safi.
          </p>
         
          <p className="mt-4 text-gray-600">
            <strong>Address:</strong> 7QJC+7PF, Safi 20160, Morocco<br />
            <strong>Phone:</strong> +(212) 644 332 797<br />
            <strong>Email:</strong> MobileMasters@gmail.com
          </p>
        </section>

        {/* Embed Google Map using iframe */}
        <section className="mt-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Location</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d738.4448459993603!2d-9.244962317356315!3d32.27298633654452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzLCsDE2JzIyLjQiTiA5wrAxNCc0MC43Ilc!5e1!3m2!1sfr!2sma!4v1729299522987!5m2!1sfr!2sma"
            width="100%" // Make it responsive
            height="400" // Adjust height as needed
            allowFullScreen
            className="rounded-lg shadow-md"
            loading="lazy" // Optional: improves performance
            referrerPolicy="no-referrer-when-downgrade" // Optional: for security
          ></iframe>
        </section>
      </main>
      {/* WhatsApp Popup */}
      <WhatsAppPopup />
    </div>
  );
}