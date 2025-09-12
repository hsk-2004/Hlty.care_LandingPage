// next.config.mjs
/** @type {import('next').NextConfig} */

const ONE_HOUR  = 60 * 60;
const ONE_DAY   = 24 * ONE_HOUR;
const ONE_YEAR  = 365 * ONE_DAY;

const securityHeaders = [
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  // Enable after HTTPS is confirmed everywhere:
  // { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains; preload' },
  { key: 'Permissions-Policy', value: 'geolocation=(), camera=(), microphone=()' },
];

const nextConfig = {
  // Supported flags
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,

  // Build for server deploys; run with node .next/standalone/server.js
  output: 'standalone',

  // Use the built-in image optimizer (/ _next/image)
  images: {
    formats: ['image/avif', 'image/webp'],
    // Add remote hosts here if you load external images:
    // remotePatterns: [{ protocol: 'https', hostname: 'your-cdn.example.com' }],
    // DO NOT set `loader` or `unoptimized` if you want /_next/image to work
  },

  // App-level headers (play well with your Nginx caching)
  async headers() {
    return [
      // Immutable build assets
      {
        source: '/_next/static/:path*',
        headers: [{ key: 'Cache-Control', value: `public, max-age=${ONE_YEAR}, immutable` }],
      },
      // Optimized images
      {
        source: '/_next/image',
        headers: [{ key: 'Cache-Control', value: `public, max-age=${ONE_YEAR}, immutable` }],
      },
      // Public images (tune while iterating)
      {
        source: '/images/:path*',
        headers: [{ key: 'Cache-Control', value: `public, max-age=${ONE_DAY}` }],
      },
      // Security headers for everything
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
