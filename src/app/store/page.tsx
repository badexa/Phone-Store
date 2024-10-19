// src/app/store/page.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@mui/material';
import WhatsAppPopup from '../components/WhatsAppPopup';
import { Search, Smartphone, X } from 'lucide-react';

export type Product = {
  id: number;
  name: string;
  description: string;
  imageUrl: string; // Changed from 'image' to 'imageUrl'
};

const products: Product[] = [
  { id: 1, name: 'iPhone 13',  description: 'The latest iPhone with amazing features.', imageUrl: '/images/iphone.jpg' },
  { id: 2, name: 'Samsung Galaxy S21',  description: 'Powerful Android phone with great camera.', imageUrl: '/images/samsung.webp' },
  { id: 3, name: 'Google Pixel 6',  description: 'Pure Android experience with excellent AI capabilities.', imageUrl: '/images/pixel6.jpg' },
  { id: 4, name: 'OnePlus 9',  description: 'Fast charging and smooth performance.', imageUrl: '/images/oneplus.jpg' },
  { id: 5, name: 'Xiaomi Mi 11',  description: 'High-end specs at a competitive price.', imageUrl: '/images/xioami.jpg' },
  { id: 6, name: 'Sony Xperia 5 III',  description: 'Compact phone with pro camera features.', imageUrl: '/images/xperia.jpg' },
  { id: 7, name: 'Nokia 8.3',  description: '5G ready with a great camera.', imageUrl: '/images/nokia.jpg' },
  { id: 8, name: 'Oppo Find X3',  description: 'Stunning design and powerful performance.', imageUrl: '/images/oppo.jpg' },
  { id: 9, name: 'Motorola Edge 20', description: 'Affordable phone with a high refresh rate display.', imageUrl: '/images/edge.webp' },
  { id: 10, name: 'Asus ROG Phone 5',  description: 'Ultimate gaming phone with a massive battery.', imageUrl: '/images/asus.jpg' },
  { id: 11, name: 'Huawei P40', description: 'Flagship phone with excellent camera capabilities.', imageUrl: '/images/p40.jpg' },
  { id: 12, name: 'LG Velvet', description: 'Stylish design with a dual-screen option.', imageUrl: '/images/lg.jpg' },
  { id: 13, name: 'Realme GT',  description: 'High performance at an affordable price.', imageUrl: '/images/realme.jpg' },
  { id: 14, name: 'Vivo X60', description: 'Camera-focused smartphone with great features.', imageUrl: '/images/vivo.webp' },
  { id: 15, name: 'ZTE Axon 20', description: 'First phone with an under-display camera.', imageUrl: '/images/zte.webp' },
];

function CoolSearchBar({ onSearch, initialQuery }: { onSearch: (query: string) => void, initialQuery: string }) {
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [isFocused, setIsFocused] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setSearchQuery(newQuery);
    onSearch(newQuery); // This will update the search results as the user types
  };

  return (
    <div className="w-full max-w-3xl mx-auto relative z-10">
      <form onSubmit={handleSearch} className="relative">
        <div
          className={`flex items-center bg-white border-2 rounded-full transition-all duration-300 ${
            isFocused ? 'border-primary shadow-lg' : 'border-gray-300'
          }`}
        >
          <div className="pl-4">
            <Smartphone className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search for phones..."
            value={searchQuery}
            onChange={handleInputChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="w-full py-3 px-4 rounded-full focus:outline-none"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                onSearch('');
              }}
              className="p-2 text-gray-400 hover:text-gray-600 focus:outline-none"
            >
              <X className="w-5 h-5" />
            </button>
          )}
          <button
            type="submit"
            className={`flex items-center justify-center w-12 h-12 rounded-full text-white transition-all duration-300 ${
              isFocused ? 'bg-primary hover:bg-primary/90' : 'bg-gray-300 hover:bg-gray-400'
            }`}
          >
            <Search className="w-5 h-5" />
          </button>
        </div>
        {isFocused && (
          <div className="absolute mt-2 w-full bg-white rounded-lg shadow-lg border border-gray-200 py-2 px-4 text-sm text-gray-600 z-20">
            <p>Try searching for: iPhone, Samsung Galaxy, Google Pixel...</p>
          </div>
        )}
      </form>
    </div>
  );
}

const PhoneStoreBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const elements: Element[] = [];
    const elementCount = 20;

    class Element {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      type: 'phone' | 'chip' | 'wifi';
      rotation: number;
      rotationSpeed: number;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.size = Math.random() * 20 + 10;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.type = Math.random() < 0.6 ? 'phone' : Math.random() < 0.8 ? 'chip' : 'wifi';
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.02;
      }

      update() {
        if (!canvas) return;
        this.x += this.speedX;
        this.y += this.speedY;
        this.rotation += this.rotationSpeed;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }

      draw() {
        if (!ctx) return;
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.4)';  // Increased opacity to 40%
        ctx.lineWidth = 2;

        switch (this.type) {
          case 'phone':
            this.drawPhone(ctx);
            break;
          case 'chip':
            this.drawChip(ctx);
            break;
          case 'wifi':
            this.drawWifi(ctx);
            break;
        }

        ctx.restore();
      }

      drawPhone(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.roundRect(-this.size / 2, -this.size, this.size, this.size * 2, this.size / 5);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(0, -this.size * 0.8, this.size / 10, 0, Math.PI * 2);
        ctx.stroke();
      }

      drawRoundedRect(ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, radius: number) {
        ctx.beginPath();
        ctx.moveTo(x + radius, y);
        ctx.lineTo(x + width - radius, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
        ctx.lineTo(x + width, y + height - radius);
        ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
        ctx.lineTo(x + radius, y + height);
        ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
        ctx.lineTo(x, y + radius);
        ctx.quadraticCurveTo(x, y, x + radius, y);
        ctx.closePath();
      }

      drawChip(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.rect(-this.size / 2, -this.size / 2, this.size, this.size);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(-this.size / 4, -this.size / 2);
        ctx.lineTo(-this.size / 4, -this.size * 0.7);
        ctx.moveTo(this.size / 4, -this.size / 2);
        ctx.lineTo(this.size / 4, -this.size * 0.7);
        ctx.stroke();
      }

      drawWifi(ctx: CanvasRenderingContext2D) {
        for (let i = 0; i < 3; i++) {
          ctx.beginPath();
          ctx.arc(0, 0, this.size * (0.5 + i * 0.25), -Math.PI, 0);
          ctx.stroke();
        }
      }
    }

    const init = () => {
      for (let i = 0; i < elementCount; i++) {
        elements.push(new Element());
      }
    };

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create a lighter gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, '#e8eaf6');  // Light indigo
      gradient.addColorStop(1, '#bbdefb');  // Light blue
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      elements.forEach((element) => {
        element.update();
        element.draw();
      });

      requestAnimationFrame(animate);
    };

    init();
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0" />;
};

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group relative overflow-hidden rounded-xl backdrop-blur-md bg-white/30 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
      <div className="aspect-[3/4] relative overflow-hidden bg-gray-100">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          style={{ objectFit: 'contain' }}
          className="transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-lg font-semibold mb-2 text-white">{product.name}</h3>
        <p className="text-sm text-gray-200 mb-4">{product.description}</p>
        <div className="flex justify-between items-center">
          <Link href={`/product/${product.id}`} passHref>
            <Button
              variant="contained"
              color="primary"
              className="bg-primary hover:bg-primary/90 text-white"
            >
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Store() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="relative min-h-screen">
      <PhoneStoreBackground />
      <div className="relative z-10 pt-52 pb-20">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <CoolSearchBar onSearch={handleSearch} initialQuery={searchQuery} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
      <WhatsAppPopup />
    </div>
  );
}
