
/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    eslint: {
      // Warning: This allows production builds to successfully complete even if
      // your project has ESLint errors.
      ignoreDuringBuilds: false
    },
    images: {
      domains: ["cloud.squidex.io"],
      images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cloud.squidex.io',
            port: '',
            pathname: '/api/assets/emirat-propiedades-web/**',
          },
        ],
      },
    },
  }
  
  module.exports = nextConfig
  