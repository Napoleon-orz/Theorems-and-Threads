import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Every .md file inside content/posts is one article.
const POSTS_DIR = path.join(process.cwd(), "content", "posts");

export type PostMeta = {
  slug: string; // the file name without ".md" - it becomes the web address
  title: string;
  date: string; // YYYY-MM-DD
  category: string;
  summary: string;
  readMinutes: number;
};

export type Post = PostMeta & { content: string };

function readPost(file: string): Post | null {
  const slug = file.replace(/\.md$/, "");
  const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf8");

  // gray-matter splits the "---" header (data) from the article body (content)
  const parsed = matter(raw);
  const data = parsed.data;
  if (data.draft) return null; // draft: true hides an unfinished article

  // Anything written as <!-- like this --> is a private note and is not shown
  const content = parsed.content.replace(/<!--[\s\S]*?-->/g, "");

  // YAML turns a bare 2026-10-28 into a Date object, so normalise it back
  const date =
    data.date instanceof Date
      ? data.date.toISOString().slice(0, 10)
      : String(data.date ?? "2000-01-01");

  const words = content.trim().split(/\s+/).length;

  return {
    slug,
    title: data.title ?? slug,
    date,
    category: data.category ?? "Notes",
    summary: data.summary ?? "",
    readMinutes: Math.max(1, Math.round(words / 200)),
    content,
  };
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".md") && !f.startsWith("_"))
    .map(readPost)
    .filter((p): p is Post => p !== null)
    .sort((a, b) => (a.date < b.date ? 1 : -1)); // newest first
}

export function getPost(slug: string): Post | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}

export function formatDate(date: string): string {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
