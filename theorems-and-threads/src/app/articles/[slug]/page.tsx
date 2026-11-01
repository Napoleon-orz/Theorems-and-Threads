import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import rehypeKatex from "rehype-katex";
import { formatDate, getAllPosts, getPost } from "@/lib/posts";

type Props = { params: { slug: string } };

// Tell Next.js which article pages exist so it can build them ahead of time.
export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};
  return { title: post.title, description: post.summary };
}

export default function ArticlePage({ params }: Props) {
  const post = getPost(params.slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-2xl px-5 pb-10 pt-6">
      <Link href="/" className="font-sans text-sm text-muted transition-colors hover:text-ink">
        ← All articles
      </Link>

      <header className="mb-10 mt-8">
        <p className="font-sans text-xs uppercase tracking-wide text-muted">
          {formatDate(post.date)} · {post.category} · {post.readMinutes} min read
        </p>
        <h1 className="mt-3 text-4xl font-semibold leading-tight sm:text-5xl">{post.title}</h1>
        {post.summary && <p className="mt-4 text-xl italic leading-relaxed text-muted">{post.summary}</p>}
      </header>

      <div className="prose prose-lg max-w-none">
        <ReactMarkdown remarkPlugins={[remarkMath, remarkGfm]} rehypePlugins={[rehypeKatex]}>
          {post.content}
        </ReactMarkdown>
      </div>

      {/* Q.E.D. - the traditional end-of-proof mark */}
      <p className="mt-12 text-right text-2xl text-muted" aria-hidden>
        ∎
      </p>
    </article>
  );
}
