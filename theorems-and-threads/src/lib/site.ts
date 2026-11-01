// Site-wide settings. Edit these and the whole site updates.
export const SITE = {
  name: "Theorems & Threads",
  tagline:
    "A think-out-loud blog about mathematics, statistics, and questions that don't have easy answers.",
  author: "Shiv",
  // Shown in the footer on every page. Leave a value empty ("") to hide it.
  email: "shivumahiya@gmail.com",
  phone: "+918602545196",
  phoneDisplay: "+91 86025 45196",
  // Used for the RSS feed and sitemap. On Vercel this is filled in automatically.
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000"),
};

// Comments are powered by Giscus (https://giscus.app), which stores them in
// your GitHub repository's "Discussions" tab. Fill in the four values below.
// While any of them is empty, the comment section stays hidden.
export const COMMENTS = {
  repo: "", // e.g. "yourusername/theorems-and-threads"
  repoId: "", // e.g. "R_kgDO..."  (from giscus.app)
  category: "Announcements",
  categoryId: "", // e.g. "DIC_kwDO..."  (from giscus.app)
};
