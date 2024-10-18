import React from 'react';
import Image from 'next/image';

const WhatsAppPopup: React.FC = () => {
  const whatsappNumber = '15555555555'; // Replace with your WhatsApp number in international format

  return (
    <a
      href={`https://wa.me/${+212644332797}`}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#25D366',
        borderRadius: '50%',
        padding: '10px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
        zIndex: 1000,
      }}
    >
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" // WhatsApp icon
        alt="WhatsApp"
        width={50}
        height={50}
      />
    </a>
  );
};

export default WhatsAppPopup;
