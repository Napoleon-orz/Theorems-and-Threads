import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about"].map((path) => ({ url: `${SITE.url}${path}` }));
  const posts = getAllPosts().map((p) => ({
    url: `${SITE.url}/articles/${p.slug}`,
    lastModified: new Date(p.date),
  }));
  return [...pages, ...posts];
}
