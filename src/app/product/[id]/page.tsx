'use client';

import { useParams } from 'next/navigation';
import Header from '../../components/Header';
import Link from 'next/link';
import Image from 'next/image';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

const products: Product[] = [
  { id: 1, name: 'iPhone 13', price: 799, description: 'The latest iPhone with amazing features.' },
  { id: 2, name: 'Samsung Galaxy S21', price: 699, description: 'Powerful Android phone with great camera.' },
  { id: 3, name: 'Google Pixel 6', price: 599, description: 'Pure Android experience with excellent AI capabilities.' },
  { id: 4, name: 'OnePlus 9', price: 729, description: 'Fast charging and smooth performance.' },
  { id: 5, name: 'Xiaomi Mi 11', price: 749, description: 'High-end specs at a competitive price.' },
  { id: 6, name: 'Sony Xperia 5 III', price: 999, description: 'Compact phone with pro camera features.' },
  { id: 7, name: 'Nokia 8.3', price: 699, description: '5G ready with a great camera.' },
  { id: 8, name: 'Oppo Find X3', price: 1149, description: 'Stunning design and powerful performance.' },
  { id: 9, name: 'Motorola Edge 20', price: 499, description: 'Affordable phone with a high refresh rate display.' },
  { id: 10, name: 'Asus ROG Phone 5', price: 999, description: 'Ultimate gaming phone with a massive battery.' },
  { id: 11, name: 'Huawei P40', price: 799, description: 'Flagship phone with excellent camera capabilities.' },
  { id: 12, name: 'LG Velvet', price: 599, description: 'Stylish design with a dual-screen option.' },
  { id: 13, name: 'Realme GT', price: 499, description: 'High performance at an affordable price.' },
  { id: 14, name: 'Vivo X60', price: 699, description: 'Camera-focused smartphone with great features.' },
  { id: 15, name: 'ZTE Axon 20', price: 499, description: 'First phone with an under-display camera.' },
];

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id as string));

  if (!product) return <div>Product not found</div>;

  const handleWhatsAppOrder = () => {
    const message = `Hi, I'm interested in ordering the ${product.name} .`;
    const whatsappUrl = `https://wa.me/${+212644332797}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header title="Product Details" />
      <main className="container mx-auto px-4 py-8">
        <Link href="/store" className="text-blue-500 hover:underline mb-4 inline-block">
          &larr; Back to Store
        </Link>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <Image
                className="h-48 w-full object-cover md:w-48"
                src={`/product-${product.id}.jpg`}
                alt={product.name}
                width={192}
                height={192}
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                {product.name}
              </div>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900">
                ${product.price}
              </p>
              <p className="mt-4 text-gray-500">
                {product.description}
              </p>
              <div className="mt-6">
                <button 
                  onClick={handleWhatsAppOrder}
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded flex items-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Order via WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}