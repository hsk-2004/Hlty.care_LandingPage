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

  // Use the built-in image optimizer (/ _next/image)
  images: {
    // Disable optimization completely for now to fix loading issues
    unoptimized: true,
  },

  // App-level headers (play well with your Nginx caching)
  async headers() {
    const isDevelopment = process.env.NODE_ENV === 'development';
    
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
        headers: [{ 
          key: 'Cache-Control', 
          value: isDevelopment 
            ? 'public, max-age=0, must-revalidate' 
            : `public, max-age=${ONE_DAY}` 
        }],
      },
      // Root level images (logo, etc.)
      {
        source: '/:path*\\.(png|jpg|jpeg|gif|webp|svg|ico)',
        headers: [{ 
          key: 'Cache-Control', 
          value: isDevelopment 
            ? 'public, max-age=0, must-revalidate' 
            : `public, max-age=${ONE_DAY}` 
        }],
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
