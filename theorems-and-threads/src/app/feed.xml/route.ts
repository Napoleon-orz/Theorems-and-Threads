import { getAllPosts } from "@/lib/posts";
import { SITE } from "@/lib/site";

// An RSS feed lets people follow the blog in a feed reader.
export function GET() {
  const items = getAllPosts()
    .map(
      (p) => `
    <item>
      <title><![CDATA[${p.title}]]></title>
      <link>${SITE.url}/articles/${p.slug}</link>
      <guid>${SITE.url}/articles/${p.slug}</guid>
      <pubDate>${new Date(p.date).toUTCString()}</pubDate>
      <description><![CDATA[${p.summary}]]></description>
    </item>`
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title><![CDATA[${SITE.name}]]></title>
    <link>${SITE.url}</link>
    <description><![CDATA[${SITE.tagline}]]></description>${items}
  </channel>
</rss>`;

  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
}
