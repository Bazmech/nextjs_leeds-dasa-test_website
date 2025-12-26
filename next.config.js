/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.leedsdasa.co.uk',
      },
    ],
  },
}

module.exports = nextConfig
