/** @type {import('next').NextConfig} */
const runtimeCaching = require("next-pwa/cache");
const  withPWA  =  require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  runtimeCaching,
});

const nextConfig = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains: ['res.cloudinary.com'],
  }
})

module.exports = nextConfig

