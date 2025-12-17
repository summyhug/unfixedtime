/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['unfixedtime.com', 'i0.wp.com', 'i1.wp.com', 'i2.wp.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.wordpress.com',
      },
      {
        protocol: 'https',
        hostname: '**.wp.com',
      },
    ],
  },
}

module.exports = nextConfig




