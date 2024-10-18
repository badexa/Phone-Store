//hone-store/src/app/components/WhatsAppPopup.tsx
import React from 'react';
import Image from 'next/image';

const WhatsAppPopup: React.FC = () => {
  const whatsappNumber = '+212644332797'; // Define WhatsApp number

  return (
    <a
      href={`https://wa.me/${whatsappNumber}`} // Use whatsappNumber here
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed', // Fixed position to stay in view
        bottom: '20px',    // Distance from the bottom of the viewport
        right: '20px',     // Distance from the right of the viewport
        backgroundColor: '#25D366', // WhatsApp color
        borderRadius: '50%', // Circular shape
        padding: '10px',    // Padding around the icon
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)', // Shadow for depth
        zIndex: 1000,       // Ensure it appears above other elements
      }}
    >
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" // WhatsApp icon
        alt="WhatsApp"
        width={50} // Width of the icon
        height={50} // Height of the icon
      />
    </a>
  );
};

export default WhatsAppPopup;