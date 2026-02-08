// next.config.js (or next.config.mjs)

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // Cloudinary – your main image host
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**', // allows all folders, transformations, etc.
      },

      // Unsplash – for placeholder/demo images
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },

      // Optional: also allow source.unsplash.com (often used for random images)
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
        pathname: '/**',
      },

      
    ],
  },
}

export default nextConfig