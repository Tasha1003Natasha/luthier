// /** @type {import('next').NextConfig} */

// const nextConfig = {};

// module.exports = nextConfig;

// next.config.js
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "drive.google.com",
      "www.googleapis.com",
      "lh3.googleusercontent.com",
    ],
  },
};

module.exports = nextConfig;
