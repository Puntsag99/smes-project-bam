const nextConfig = {
  env: {
    env: process.env.NODE_ENV || "development",
    R2_BUCKET: process.env.R2_BUCKET,
    R2_ACCESS_KEY: process.env.R2_ACCESS_KEY,
    R2_ACCOUNT_ID: process.env.R2_ACCOUNT_ID,
    R2_DEVELOPMENT_URL: process.env.R2_DEVELOPMENT_URL,
    R2_SECRET_KEY: process.env.R2_SECRET_KEY,
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY:
      process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
    DATABASE_URL: process.env.DATABASE_URL,
  },
};

export default nextConfig;
