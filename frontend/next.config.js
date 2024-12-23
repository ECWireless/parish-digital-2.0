const nextConfig = {
  env: {
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
    BACKEND_SANITY_PROJECT_ID: process.env.BACKEND_SANITY_PROJECT_ID,
    BACKEND_SANITY_TOKEN: process.env.BACKEND_SANITY_TOKEN,
    SANITY_DOC_ID: process.env.SANITY_DOC_ID,

    MAGIC_PUBLISHABLE_KEY: process.env.MAGIC_PUBLISHABLE_KEY,
    MAGIC_SECRET_KEY: process.env.MAGIC_SECRET_KEY,
    ENCRYPTION_SECRET: process.env.ENCRYPTION_SECRET,
    RECAPTCHA_API_KEY: process.env.RECAPTCHA_API_KEY,
  },
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  experimental: {
    optimizePackageImports: ['@chakra-ui/react'],
  },
  images: {
    domains: ['upcity-marketplace.s3.amazonaws.com', 'cdn.sanity.io'],
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = nextConfig;
