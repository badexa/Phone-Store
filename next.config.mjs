/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org', // For Wikipedia images
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com', // For placeholder images
        port: '',
        pathname: '/**',
      },
     
      // Add any other domains you need here
    ],
  },
};

export default nextConfig;
