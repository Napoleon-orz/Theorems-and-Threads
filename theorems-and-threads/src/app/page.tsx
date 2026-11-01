import katex from "katex";
import { PostList } from "@/components/PostList";
import { getAllPosts } from "@/lib/posts";
import { SITE } from "@/lib/site";

// Euler's identity, rendered on the server as the home page's math decoration.
const euler = katex.renderToString("e^{i\\pi} + 1 = 0", { displayMode: true });

export default function HomePage() {
  const posts = getAllPosts();

  return (
    <>
      <section className="relative">
        <div className="grid-paper absolute inset-0" aria-hidden />
        <div className="relative mx-auto max-w-2xl px-5 pb-16 pt-14 text-center">
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">{SITE.name}</h1>
          <p className="mx-auto mt-5 max-w-md text-xl leading-relaxed text-muted">{SITE.tagline}</p>
          <div
            className="mt-8 text-2xl text-accent"
            aria-hidden
            dangerouslySetInnerHTML={{ __html: euler }}
          />
        </div>
      </section>

      <section id="articles" className="mx-auto max-w-2xl px-5 pb-8">
        <h2 className="border-b border-line pb-3 font-sans text-sm font-semibold uppercase tracking-wide text-muted">
          Articles
        </h2>
        <PostList posts={posts} />
      </section>
    </>
  );
}
