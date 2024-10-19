'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from "@/app/components/ui/button"

const images = [
  { src: '/images/phone1.webp', alt: 'Latest Smartphones' },
  { src: '/images/phone2.jpg', alt: 'Premium Phone Accessories' },
  { src: '/images/phone3.jpg', alt: 'Expert Phone Repair Services' },
  { src: '/images/phone4.webp', alt: 'Exclusive Phone Deals' },
];

export default function ImageSlider() {
  const [currentImage, setCurrentImage] = useState(0);
  const [progress, setProgress] = useState(0);
  const [key, setKey] = useState(0);

  const nextImage = useCallback(() => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    setProgress(0);
    setKey(prev => prev + 1);
  }, []);

  const prevImage = useCallback(() => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
    setProgress(0);
    setKey(prev => prev + 1);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          nextImage();
          return 0;
        }
        return prevProgress + 2;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [nextImage]);

  return (
    <div className="relative w-full h-[40vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh] xl:h-[75vh] overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden={index !== currentImage}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            style={{ objectFit: 'cover' }}
            priority={index === 0}
          />
          <div className="absolute inset-0 flex flex-col items-start justify-end p-6 sm:p-10 bg-gradient-to-t from-black/70 to-transparent">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-left mb-6 max-w-xl">
              {image.alt}
            </h2>
            <Link href="/store" passHref>
              <Button 
                key={key}
                variant="custom" 
                size="lg" 
                hoverBg="black"
                hoverText="white"
                className="mb-8 bg-white text-black animate-bounce-once"
              >
                Explore Now
              </Button>
            </Link>
          </div>
        </div>
      ))}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/30">
        <div
          className="h-full bg-white transition-all duration-100 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-4">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImage ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/70'
            }`}
            onClick={() => setCurrentImage(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all duration-300"
        onClick={prevImage}
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all duration-300"
        onClick={nextImage}
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}
