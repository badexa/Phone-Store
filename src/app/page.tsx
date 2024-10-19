'use client';

import ImageSlider from './components/ImageSlider';
import WhatsAppPopup from './components/WhatsAppPopup';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/app/components/ui/button";
import { Product } from '@/app/store/page';
import Link from 'next/link';

export default function Home() {
  // Add this near the top of your component
  const featuredProducts: Product[] = [
    {
      id: 1,
      name: 'iPhone 13 Pro',
      description: 'Apple\'s latest flagship with ProMotion display.',
      imageUrl: '/images/iphone.jpg',
    },
    {
      id: 2,
      name: 'Samsung Galaxy S21',
      description: 'Powerful Android device with excellent camera.',
      imageUrl: '/images/samsung.webp',
    },
    {
      id: 3,
      name: 'Google Pixel 6',
      description: 'Pure Android experience with top-notch AI features.',
      imageUrl: '/images/pixel6.jpg',
    },
  ];

  return (
    <div className="flex flex-col items-center overflow-x-hidden bg-gradient-to-b from-gray-50 to-white">
      <div className="w-screen">
        <ImageSlider />
      </div>

      {/* Quality Hardware Section */}
      <section className="w-full text-center py-20 bg-white">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Quality hardware makes all the difference in a
          <br className="hidden md:inline" />smartphone
        </motion.h2>
        <motion.div
          className="mt-8 flex justify-center space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Button variant="secondary" className="bg-white">Learn More</Button>
          <Link href="/store">
            <Button variant="primary">Shop Now</Button>
          </Link>
        </motion.div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

      {/* Discover Section */}
      <section className="relative w-full py-20 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gray-100 skew-y-3 transform origin-top-right z-0" />
        <div className="relative z-10 flex flex-col lg:flex-row items-center max-w-7xl mx-auto px-4">
          <motion.div
            className="relative mb-10 lg:mb-0 lg:mr-8 w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-full h-0 pb-[100%] relative">
              <Image
                src="/images/1.jpg"
                alt="Discover"
                fill
                className="rounded-full border-4 border-white object-cover shadow-2xl"
                style={{ maxWidth: '600px', maxHeight: '600px' }}
              />
            </div>
          </motion.div>
          <motion.div
            className="text-left lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold mb-4 text-gray-800">Discover</h3>
            <p className="text-primary text-4xl lg:text-5xl font-bold mb-6">
              Explore Endless Options
            </p>
            <p className="text-gray-600 text-xl lg:text-2xl leading-relaxed mb-8">
              Welcome to a world of limitless possibilities at
              our phone store, where the journey to finding
              your perfect device is just as exciting as using
              it. Every moment spent here is an opportunity
              to discover the latest technology and make
              your mark in the digital landscape!
            </p>
            <Link href="/store">
            <Button size="lg" className="group">
              Start Exploring
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div 
                key={product.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div 
                  className="relative pt-[75%]"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    className="object-contain"
                  />
                </motion.div>
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                  </div>
                  <div className="mt-auto">
                    <Link href={`/product/${product.id}`} passHref>
                      <Button
                        variant="primary"
                        className="w-full bg-primary hover:bg-primary/90 text-white"
                      >
                        View Details
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp Popup */}
      <WhatsAppPopup />
    </div>
  );
}
