/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ['mysql2']
  },
}

module.exports = nextConfig
