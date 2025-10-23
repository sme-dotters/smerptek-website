/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    formats: ['image/webp', 'image/avif'],
  },
  async redirects() {
    return [
      {
        source: '/admin',
        destination: '/superadmindev',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
