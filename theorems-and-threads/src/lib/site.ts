// Site-wide settings. Edit these and the whole site updates.
export const SITE = {
  name: "Theorems & Threads",
  tagline:
    "A think-out-loud blog about mathematics, statistics, and questions that don't have easy answers.",
  author: "Shiv",
  // Used for the RSS feed and sitemap. On Vercel this is filled in automatically.
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000"),
};
