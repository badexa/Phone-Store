'use client';

import { useState } from 'react';

interface Product {
  name: string;
  price: number;
}

interface WhatsAppButtonProps {
  product: Product;
}

export default function WhatsAppButton({ product }: WhatsAppButtonProps) {
  const [showPopup, setShowPopup] = useState(false);

  const handleOrder = () => {
    const message = `Hi, I'm interested in ordering the ${product.name} for $${product.price}.`;
    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <button onClick={() => setShowPopup(true)}>Order via WhatsApp</button>
      {showPopup && (
        <div className="popup">
          <p>Are you sure you want to order this product?</p>
          <button onClick={handleOrder}>Yes, order now</button>
          <button onClick={() => setShowPopup(false)}>Cancel</button>
        </div>
      )}
    </>
  );
}
