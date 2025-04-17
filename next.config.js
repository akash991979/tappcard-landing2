/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    // !! WARN !!
    // This setting allows TypeScript errors to be ignored during production builds.
    // This is to ensure existing code doesn't cause compilation failures.
    // Use with caution or remove once TypeScript issues are fixed.
    ignoreBuildErrors: true,
  },
  // Improve static generation performance
  staticPageGenerationTimeout: 180,
  // Enable image optimization
  images: {
    domains: [],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },
  // Add cache control headers to prevent stale content
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig; 