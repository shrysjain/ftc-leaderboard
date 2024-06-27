/** @type {import('next').NextConfig} */
const nextConfig = {};
// next.config.js

export default {
  nextConfig,
  async rewrites() {
    return [
      {
        source: '/:region',
        destination: '/[region]',
      },
    ];
  },
};
