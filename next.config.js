// /** @type {import('next').NextConfig} */

// const nextConfig = {};

// module.exports = nextConfig;

// next.config.js

require("dotenv").config();

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "drive.google.com",
      "www.googleapis.com",
      "lh3.googleusercontent.com",
    ],
  },
  env: {
    API_KEY: process.env.API_KEY,
  },

  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
