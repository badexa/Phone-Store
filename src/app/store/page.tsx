// src/app/store/page.tsx
'use client'; // Add this line to mark the component as a Client Component

import { useState } from 'react'; // Import useState for managing state
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardMedia, Typography, Button, Grid, TextField } from '@mui/material'; // Import Material UI components
import WhatsAppPopup from '../components/WhatsAppPopup'; // Import the WhatsAppPopup component

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string; // Added imageUrl property
}

const products: Product[] = [
  { id: 1, name: 'iPhone 13', price: 799, description: 'The latest iPhone with amazing features.', imageUrl: 'https://via.placeholder.com/300x200.png?text=iPhone+13' },
  { id: 2, name: 'Samsung Galaxy S21', price: 699, description: 'Powerful Android phone with great camera.', imageUrl: 'https://via.placeholder.com/300x200.png?text=Samsung+Galaxy+S21' },
  { id: 3, name: 'Google Pixel 6', price: 599, description: 'Pure Android experience with excellent AI capabilities.', imageUrl: 'https://via.placeholder.com/300x200.png?text=Google+Pixel+6' },
  { id: 4, name: 'OnePlus 9', price: 729, description: 'Fast charging and smooth performance.', imageUrl: 'https://via.placeholder.com/300x200.png?text=OnePlus+9' },
  { id: 5, name: 'Xiaomi Mi 11', price: 749, description: 'High-end specs at a competitive price.', imageUrl: 'https://via.placeholder.com/300x200.png?text=Xiaomi+Mi+11' },
  { id: 6, name: 'Sony Xperia 5 III', price: 999, description: 'Compact phone with pro camera features.', imageUrl: 'https://via.placeholder.com/300x200.png?text=Sony+Xperia+5+III' },
  { id: 7, name: 'Nokia 8.3', price: 699, description: '5G ready with a great camera.', imageUrl: 'https://via.placeholder.com/300x200.png?text=Nokia+8.3' },
  { id: 8, name: 'Oppo Find X3', price: 1149, description: 'Stunning design and powerful performance.', imageUrl: 'https://via.placeholder.com/300x200.png?text=Oppo+Find+X3' },
  { id: 9, name: 'Motorola Edge 20', price: 499, description: 'Affordable phone with a high refresh rate display.', imageUrl: 'https://via.placeholder.com/300x200.png?text=Motorola+Edge+20' },
  { id: 10, name: 'Asus ROG Phone 5', price: 999, description: 'Ultimate gaming phone with a massive battery.', imageUrl: 'https://via.placeholder.com/300x200.png?text=Asus+ROG+Phone+5' },
  { id: 11, name: 'Huawei P40', price: 799, description: 'Flagship phone with excellent camera capabilities.', imageUrl: 'https://via.placeholder.com/300x200.png?text=Huawei+P40' },
  { id: 12, name: 'LG Velvet', price: 599, description: 'Stylish design with a dual-screen option.', imageUrl: 'https://via.placeholder.com/300x200.png?text=LG+Velvet' },
  { id: 13, name: 'Realme GT', price: 499, description: 'High performance at an affordable price.', imageUrl: 'https://via.placeholder.com/300x200.png?text=Realme+GT' },
  { id: 14, name: 'Vivo X60', price: 699, description: 'Camera-focused smartphone with great features.', imageUrl: 'https://via.placeholder.com/300x200.png?text=Vivo+X60' },
  { id: 15, name: 'ZTE Axon 20', price: 499, description: 'First phone with an under-display camera.', imageUrl: 'https://via.placeholder.com/300x200.png?text=ZTE+Axon+20' },
];

export default function Store() {
  const [searchQuery, setSearchQuery] = useState(''); // State for search query

  // Filter products based on the search query
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-16"> {/* Padding for the entire container */}
      <div className="container mx-auto mt-12 mb-12"> {/* Added margin-top and margin-bottom */}
        {/* Search Bar */}
        <TextField
          variant="outlined"
          placeholder="Search products..."
          fullWidth
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="mb-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          InputProps={{
            style: {
              padding: '8px 12px', // Decreased padding for a lower height
              fontSize: '14px',
            },
          }}
        />
        <Grid container spacing={4}>
          {filteredProducts.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4}>
              <Card elevation={3} className="hover:shadow-lg transition-shadow duration-300">
                <CardMedia>
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    width={300} // Set a fixed width for consistent layout
                    height={200} // Set a fixed height for consistent layout
                    layout="fixed" // Maintain aspect ratio and prevent stretching
                    priority // Prioritize loading for a better user experience
                  />
                </CardMedia>
                <CardContent>
                  <Typography variant="h6" component="h2" gutterBottom>
                    {product.name}
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    ${product.price}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" paragraph>
                    {product.description}
                  </Typography>
                  <Link href={`/product/${product.id}`} passHref>
                    <Button variant="contained" color="primary" fullWidth>
                      View Details
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        {/* WhatsApp Popup */}
        <WhatsAppPopup />
      </div>
    </div>
  );
}