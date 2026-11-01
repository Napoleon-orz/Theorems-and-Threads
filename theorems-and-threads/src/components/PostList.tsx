import Link from "next/link";
import { formatDate, type PostMeta } from "@/lib/posts";

export function PostList({ posts }: { posts: PostMeta[] }) {
  if (posts.length === 0) {
    return <p className="text-muted">No articles yet. The first one is coming soon.</p>;
  }

  return (
    <ul className="divide-y divide-line">
      {posts.map((post) => (
        <li key={post.slug}>
          <Link href={`/articles/${post.slug}`} className="group block py-6">
            <p className="font-sans text-xs uppercase tracking-wide text-muted">
              {formatDate(post.date)} · {post.category} · {post.readMinutes} min read
            </p>
            <h3 className="mt-1.5 text-2xl font-semibold leading-snug transition-colors group-hover:text-accent">
              {post.title}
            </h3>
            {post.summary && <p className="mt-2 text-lg leading-relaxed text-muted">{post.summary}</p>}
          </Link>
        </li>
      ))}
    </ul>
  );
}
