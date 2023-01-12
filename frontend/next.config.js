module.exports = {
  env: {
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
    SANITY_TOKEN: process.env.SANITY_TOKEN,
    BACKEND_SANITY_TOKEN: process.env.BACKEND_SANITY_TOKEN,
    JWT_SECRET: process.env.JTW_SECRET,
    JWT_PAYLOAD: process.env.JWT_PAYLOAD,
    SANITY_DOC_ID: process.env.SANITY_DOC_ID,

    MAGIC_PUBLISHABLE_KEY: process.env.MAGIC_PUBLISHABLE_KEY,
    MAGIC_SECRET_KEY: process.env.MAGIC_SECRET_KEY,
    ENCRYPTION_SECRET: process.env.ENCRYPTION_SECRET,
  },
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
}
