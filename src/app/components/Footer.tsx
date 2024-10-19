import Link from 'next/link';
import { Box, Container, Typography, TextField, Button, Grid } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';

// Import the necessary Font Awesome library styles
import '@fortawesome/fontawesome-svg-core/styles.css';

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: '#121212', color: 'white', py: 4, position: 'relative', zIndex: 50 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Logo Section */}
          <Grid item xs={12} md={4}>
            <Box display="flex" alignItems="center">
              <Typography variant="h5" fontWeight="bold">MobileMasters</Typography>
            </Box>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Your one-stop shop for the latest smartphones and accessories.
            </Typography>
          </Grid>

          {/* Quick Links Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight="bold">Quick Links</Typography>
            <Box mt={1}>
              <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>
                <Typography variant="body2" sx={{ '&:hover': { textDecoration: 'underline' } }}>Home</Typography>
              </Link>
              <Link href="/store" style={{ color: 'white', textDecoration: 'none' }}>
                <Typography variant="body2" sx={{ '&:hover': { textDecoration: 'underline' } }}>Store</Typography>
              </Link>
              <Link href="/about" style={{ color: 'white', textDecoration: 'none' }}>
                <Typography variant="body2" sx={{ '&:hover': { textDecoration: 'underline' } }}>About Us</Typography>
              </Link>
              <Link href={`https://wa.me/${+212644332797}`} style={{ color: 'white', textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">
                <Typography variant="body2" sx={{ '&:hover': { textDecoration: 'underline' } }}>Contact</Typography>
              </Link>
            </Box>
          </Grid>

          {/* Email Subscription Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight="bold">Subscribe to our Newsletter</Typography>
            <Box mt={1} display="flex">
              <TextField
                variant="outlined"
                placeholder="Enter your email"
                size="small"
                sx={{ flexGrow: 1, backgroundColor: 'white' }}
              />
              <Button variant="contained" color="primary" sx={{ ml: 1 }}>
                Subscribe
              </Button>
            </Box>
          </Grid>
        </Grid>

        {/* Social Media Icons */}
        <Box display="flex" justifyContent="center" mt={4}>
          <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
            <FontAwesomeIcon icon={faFacebook} size="2x" style={{ color: '#3b5998' }} /> {/* Facebook Blue */}
          </Link>
          <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
            <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: '#E1306C' }} /> {/* Instagram Pink */}
          </Link>
          <Link href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
            <FontAwesomeIcon icon={faTiktok} size="2x" style={{ color: '#69C9D0' }} /> {/* TikTok Teal */}
          </Link>
        </Box>

        {/* Contact Information */}
        <Box textAlign="center" mt={4}>
          <Typography variant="body2" color="gray">
            Phone: <a href="tel:+212644332797" style={{ color: 'white' }}>+(212) 644 332 797</a>
          </Typography>
          <Typography variant="body2" color="gray">
            Email: <a href="mailto:MobileMasters@gmail.com" style={{ color: 'white' }}>MobileMasters@gmail.com</a>
          </Typography>
        </Box>

        {/* Copyright Section */}
        <Typography variant="body2" align="center" sx={{ mt: 4, color: 'gray' }}>
          &copy; {new Date().getFullYear()} MobileMasters. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
