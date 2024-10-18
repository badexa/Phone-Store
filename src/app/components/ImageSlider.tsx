'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const images = [
  { src: '/images/phone1.webp', alt: 'Latest Smartphones' },
  { src: '/images/phone2.jpg', alt: 'Premium Phone Accessories' },
  { src: '/images/phone3.jpg', alt: 'Expert Phone Repair Services' },
  { src: '/images/phone4.webp', alt: 'Exclusive Phone Deals' },
];

export default function ImageSlider() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-screen h-[600px] overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            style={{ objectFit: 'cover' }}
            priority={index === 0}
          />
          <div className="absolute inset-0 flex flex-col items-start justify-center bg-black bg-opacity-50 p-6"> {/* Align items to the left */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-left mb-4">
              {image.alt}
            </h2>
            <Link href="/store">
              <button className="bg-black text-white font-bold py-5 px-4 rounded-lg hover:bg-red-800">
                Explore Now
              </button>
            </Link>
          </div>
        </div>
      ))}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-4">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full ${
              index === currentImage ? 'bg-white' : 'bg-gray-400'
            }`}
            onClick={() => setCurrentImage(index)}
          />
        ))}
      </div>
    </div>
  );
}