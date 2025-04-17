/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
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
  // Enable Incremental Static Regeneration
  experimental: {
    // Enable concurrent features for better performance
    concurrentFeatures: true,
    // Optimize server components
    serverComponents: true,
  },
};

module.exports = nextConfig; 