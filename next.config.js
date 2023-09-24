/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { remotePatterns: [{ hostname: 'cdn.sanity.io' }] },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
