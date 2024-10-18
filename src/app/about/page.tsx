'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import L from 'leaflet'; // Import Leaflet at the top
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
      </main>
      {/* WhatsApp Popup */}
      <WhatsAppPopup />
    </div>
  );
}