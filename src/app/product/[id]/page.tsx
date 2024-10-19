'use client';

import { useParams } from 'next/navigation';
import Header from '../../components/Header';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef } from 'react';

interface Product {
  id: number;
  name: string;
  description: string;
  images: string[]; // Change this from 'image' to 'images'
  specifications: string[];
  features: string[];
}

const products: Product[] = [
  {
    id: 1,
    name: 'iPhone 13',
    description: 'The latest iPhone with amazing features.',
    images: [
      '/images/a1.jpg',
      '/images/a2.jpg',
      '/images/a3.jpg',
    ],
    specifications: [
      'Display: 6.1-inch Super Retina XDR',
      'Processor: A15 Bionic chip',
      'RAM: 4GB',
      'Storage: 128GB / 256GB / 512GB',
      'Camera: Dual 12MP system',
      'Battery: Up to 19 hours talk time',
    ],
    features: [
      '5G connectivity',
      'Ceramic Shield front cover',
      'MagSafe technology',
      'iOS 15',
      'Face ID',
    ],
  },
  {
    id: 2,
    name: 'Samsung Galaxy S21',
    description: 'Powerful Android phone with great camera.',
    images: [
      '/images/b1.jpg',
      '/images/b2.jpg', // Replace with actual image paths
      '/images/b3.webp',
    ],
    specifications: [
      'Display: 6.2-inch Dynamic AMOLED 2X',
      'Processor: Exynos 2100 / Snapdragon 888',
      'RAM: 8GB',
      'Storage: 128GB / 256GB',
      'Camera: Triple camera setup (12MP + 64MP + 12MP)',
      'Battery: 4000mAh',
    ],
    features: [
      '5G connectivity',
      'IP68 water and dust resistance',
      'Wireless charging',
      'Samsung DeX',
      'One UI 3.1',
    ],
  },
  {
    id: 3,
    name: 'Google Pixel 6',
    description: 'Pure Android experience with excellent AI capabilities.',
    images: [
      '/images/google-pixel-6.jpg',
      '/images/placeholder-image-2.jpg', // Replace with actual image paths
      '/images/placeholder-image-3.jpg',
    ],
    specifications: [
      'Display: 6.4-inch AMOLED',
      'Processor: Google Tensor',
      'RAM: 8GB',
      'Storage: 128GB / 256GB',
      'Camera: Dual 50MP + 12MP',
      'Battery: 4614mAh',
    ],
    features: [
      '5G connectivity',
      'Stock Android experience',
      'Magic Eraser for photos',
      'Titan M2 security chip',
      'Adaptive Battery technology',
    ],
  },
  {
    id: 4,
    name: 'OnePlus 9',
    description: 'Fast charging and smooth performance.',
    images: [
      '/images/oneplus-9.jpg',
      '/images/placeholder-image-2.jpg', // Replace with actual image paths
      '/images/placeholder-image-3.jpg',
    ],
    specifications: [
      'Display: 6.55-inch Fluid AMOLED',
      'Processor: Snapdragon 888',
      'RAM: 8GB / 12GB',
      'Storage: 128GB / 256GB',
      'Camera: Triple camera setup (48MP + 50MP + 2MP)',
      'Battery: 4500mAh with 65W fast charging',
    ],
    features: [
      '5G connectivity',
      'Hasselblad camera partnership',
      'Fluid Display with 120Hz refresh rate',
      'OxygenOS based on Android 11',
      'In-display fingerprint sensor',
    ],
  },
  {
    id: 5,
    name: 'Xiaomi Mi 11',
    description: 'High-end specs at a competitive price.',
    images: [
      '/images/xiaomi-mi-11.jpg',
      '/images/placeholder-image-2.jpg', // Replace with actual image paths
      '/images/placeholder-image-3.jpg',
    ],
    specifications: [
      'Display: 6.81-inch AMOLED',
      'Processor: Snapdragon 888',
      'RAM: 8GB / 12GB',
      'Storage: 128GB / 256GB',
      'Camera: Triple camera setup (108MP + 13MP + 5MP)',
      'Battery: 4600mAh with 55W fast charging',
    ],
    features: [
      '5G connectivity',
      'Harman Kardon speakers',
      'MIUI 12 based on Android 11',
      '120Hz refresh rate',
      'In-display fingerprint sensor',
    ],
  },
  {
    id: 6,
    name: 'Sony Xperia 5 III',
    description: 'Compact phone with pro camera features.',
    images: [
      '/images/sony-xperia-5-iii.jpg',
      '/images/placeholder-image-2.jpg', // Replace with actual image paths
      '/images/placeholder-image-3.jpg',
    ],
    specifications: [
      'Display: 6.1-inch OLED',
      'Processor: Snapdragon 888',
      'RAM: 8GB',
      'Storage: 128GB / 256GB',
      'Camera: Triple camera setup (12MP + 12MP + 12MP)',
      'Battery: 4500mAh',
    ],
    features: [
      '5G connectivity',
      'Pro camera features with Eye AF',
      '4K HDR OLED display',
      'IP65/68 water and dust resistance',
      'Stereo speakers',
    ],
  },
  {
    id: 7,
    name: 'Nokia 8.3',
    description: '5G ready with a great camera.',
    images: [
      '/images/nokia-8-3.jpg',
      '/images/placeholder-image-2.jpg', // Replace with actual image paths
      '/images/placeholder-image-3.jpg',
    ],
    specifications: [
      'Display: 6.81-inch IPS LCD',
      'Processor: Snapdragon 765G',
      'RAM: 8GB',
      'Storage: 128GB',
      'Camera: Quad camera setup (64MP + 12MP + 2MP + 2MP)',
      'Battery: 4500mAh',
    ],
    features: [
      '5G connectivity',
      'Pure Android experience',
      'Zeiss optics for camera',
      'Android One program',
      'Nokia\'s commitment to updates',
    ],
  },
  {
    id: 8,
    name: 'Oppo Find X3',
    description: 'Stunning design and powerful performance.',
    images: [
      '/images/oppo-find-x3.jpg',
      '/images/placeholder-image-2.jpg', // Replace with actual image paths
      '/images/placeholder-image-3.jpg',
    ],
    specifications: [
      'Display: 6.7-inch AMOLED',
      'Processor: Snapdragon 888',
      'RAM: 8GB / 12GB',
      'Storage: 256GB',
      'Camera: Quad camera setup (50MP + 50MP + 13MP + 3MP)',
      'Battery: 4500mAh with 65W fast charging',
    ],
    features: [
      '5G connectivity',
      'Color management system',
      'IP68 water and dust resistance',
      'OxygenOS based on Android 11',
      'In-display fingerprint sensor',
    ],
  },
  {
    id: 9,
    name: 'Motorola Edge 20',
    description: 'Affordable phone with a high refresh rate display.',
    images: [
      '/images/motorola-edge-20.jpg',
      '/images/placeholder-image-2.jpg', // Replace with actual image paths
      '/images/placeholder-image-3.jpg',
    ],
    specifications: [
      'Display: 6.7-inch OLED',
      'Processor: Snapdragon 778G',
      'RAM: 8GB',
      'Storage: 128GB',
      'Camera: Triple camera setup (108MP + 16MP + 8MP)',
      'Battery: 4000mAh',
    ],
    features: [
      '5G connectivity',
      '144Hz refresh rate',
      'Near-stock Android experience',
      'IP52 water resistance',
      'Ready for PC feature',
    ],
  },
  {
    id: 10,
    name: 'Asus ROG Phone 5',
    description: 'Ultimate gaming phone with a massive battery.',
    images: [
      '/images/asus-rog-phone-5.jpg',
      '/images/placeholder-image-2.jpg', // Replace with actual image paths
      '/images/placeholder-image-3.jpg',
    ],
    specifications: [
      'Display: 6.78-inch AMOLED',
      'Processor: Snapdragon 888',
      'RAM: 8GB / 12GB / 16GB',
      'Storage: 128GB / 256GB',
      'Camera: Triple camera setup (64MP + 13MP + 5MP)',
      'Battery: 6000mAh with 65W fast charging',
    ],
    features: [
      '5G connectivity',
      'AirTrigger touch sensors for gaming',
      'ROG UI for gaming experience',
      'High refresh rate display',
      'Dual front-facing speakers',
    ],
  },
  {
    id: 11,
    name: 'Huawei P40',
    description: 'Flagship phone with excellent camera capabilities.',
    images: [
      '/images/huawei-p40.jpg',
      '/images/placeholder-image-2.jpg', // Replace with actual image paths
      '/images/placeholder-image-3.jpg',
    ],
    specifications: [
      'Display: 6.1-inch OLED',
      'Processor: Kirin 990 5G',
      'RAM: 8GB',
      'Storage: 128GB',
      'Camera: Triple camera setup (50MP + 16MP + 8MP)',
      'Battery: 3800mAh',
    ],
    features: [
      '5G connectivity',
      'SuperSensing camera technology',
      'EMUI 10.1 based on Android 10',
      'IP53 water and dust resistance',
      'Wireless charging',
    ],
  },
  {
    id: 12,
    name: 'Nokia G50',
    description: 'Affordable 5G smartphone with a large display.',
    images: [
      '/images/nokia-g50.jpg',
      '/images/placeholder-image-2.jpg', // Replace with actual image paths
      '/images/placeholder-image-3.jpg',
    ],
    specifications: [
      'Display: 6.82-inch HD+',
      'Processor: Snapdragon 480',
      'RAM: 4GB',
      'Storage: 64GB / 128GB',
      'Camera: Triple camera setup (48MP + 5MP + 2MP)',
      'Battery: 5000mAh',
    ],
    features: [
      '5G connectivity',
      'Stock Android experience',
      'Zeiss optics for camera',
      'Android One program',
      'Nokia\'s commitment to updates', // Fixed line
    ],
  },
  {
    id: 13,
    name: 'Realme GT',
    description: 'High performance at an affordable price.',
    images: [
      '/images/realme-gt.jpg',
      '/images/placeholder-image-2.jpg', // Replace with actual image paths
      '/images/placeholder-image-3.jpg',
    ],
    specifications: [
      'Display: 6.43-inch Super AMOLED',
      'Processor: Snapdragon 888',
      'RAM: 8GB / 12GB',
      'Storage: 128GB / 256GB',
      'Camera: Triple camera setup (64MP + 8MP + 2MP)',
      'Battery: 4500mAh with 65W fast charging',
    ],
    features: [
      '5G connectivity',
      '120Hz refresh rate',
      'Realme UI 2.0 based on Android 11',
      'Dual stereo speakers',
      'In-display fingerprint sensor',
    ],
  },
  {
    id: 14,
    name: 'Vivo X60',
    description: 'Camera-focused smartphone with great features.',
    images: [
      '/images/vivo-x60.jpg',
      '/images/placeholder-image-2.jpg', // Replace with actual image paths
      '/images/placeholder-image-3.jpg',
    ],
    specifications: [
      'Display: 6.56-inch AMOLED',
      'Processor: Exynos 1080',
      'RAM: 8GB / 12GB',
      'Storage: 128GB / 256GB',
      'Camera: Triple camera setup (48MP + 13MP + 13MP)',
      'Battery: 4300mAh',
    ],
    features: [
      '5G connectivity',
      'Gimbal stabilization for camera',
      'Vivo Funtouch OS 11.1 based on Android 11',
      '120Hz refresh rate',
      'In-display fingerprint sensor',
    ],
  },
  {
    id: 15,
    name: 'ZTE Axon 20',
    description: 'First phone with an under-display camera.',
    images: [
      '/images/zte-axon-20.jpg',
      '/images/placeholder-image-2.jpg', // Replace with actual image paths
      '/images/placeholder-image-3.jpg',
    ],
    specifications: [
      'Display: 6.92-inch AMOLED',
      'Processor: Snapdragon 765G',
      'RAM: 8GB',
      'Storage: 128GB',
      'Camera: Quad camera setup (64MP + 8MP + 2MP + 2MP)',
      'Battery: 4220mAh',
    ],
    features: [
      '5G connectivity',
      'Under-display front camera',
      'MyOS 11 based on Android 10',
      'In-display fingerprint sensor',
      'Fast charging support',
    ],
  },
];

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id as string));
  const [selectedImage, setSelectedImage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);

  if (!product) return <div>Product not found</div>;

  const handleWhatsAppOrder = () => {
    const message = `Hi, I'm interested in ordering the ${product.name}.`;
    const whatsappUrl = `https://wa.me/${+212644332797}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current || !isZoomed) return;

    const { left, top, width, height } = imageRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width * 100;
    const y = (e.clientY - top) / height * 100;

    imageRef.current.style.transformOrigin = `${x}% ${y}%`;
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header title="Product Details" />
      <main className="container mx-auto px-4 py-8">
        <Link
          href="/store"
          className="text-black text-lg mb-4 inline-block hover:text-gray-700 transition-transform duration-300 ease-in-out transform hover:scale-110"
        >
          &larr; Back to Store
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image Section */}
          <div>
            <div 
              className="mb-4 relative overflow-hidden cursor-zoom-in"
              style={{ paddingBottom: '100%' }}
              onMouseEnter={() => setIsZoomed(true)}
              onMouseLeave={() => setIsZoomed(false)}
              onMouseMove={handleMouseMove}
              ref={imageRef}
            >
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                layout="fill"
                objectFit="contain"
                className={`transition-transform duration-200 ${isZoomed ? 'scale-150' : 'scale-100'}`}
              />
            </div>
            <div className="grid grid-cols-3 gap-2">
              {product.images.map((img, index) => (
                <div
                  key={index}
                  className={`cursor-pointer border-2 ${
                    selectedImage === index ? 'border-blue-500' : 'border-gray-300'
                  } relative aspect-square`}
                  onClick={() => setSelectedImage(index)}
                >
                  <Image
                    src={img}
                    alt={`${product.name} - Image ${index + 1}`}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Information */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col h-full">
            <div className="flex-grow">
              <h2 className="text-3xl font-semibold mb-4">{product.name}</h2>
              <p className="text-gray-600 mb-6">{product.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 p-9">
                <div>
                  <h3 className="text-xl font-medium mb-2">Specifications</h3>
                  <ul className="list-disc pl-5">
                    {product.specifications.map((spec, index) => (
                      <li key={index} className="text-gray-600">{spec}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Features</h3>
                  <ul className="list-disc pl-5">
                    {product.features.map((feature, index) => (
                      <li key={index} className="text-gray-600">{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-auto">
              <button
                onClick={handleWhatsAppOrder}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center w-full"
              >
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Order via WhatsApp
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
