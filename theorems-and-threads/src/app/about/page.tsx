import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-2xl px-5 pb-10 pt-6">
      <header>
        <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">Theorems and Threads</h1>
        <p className="mt-4 text-xl leading-relaxed text-muted">
          An open, think-out-loud blog of ideas, observations, mathematical tidbits, and questions that resist
          simple answers.
        </p>
        <p className="mt-4 font-sans text-xs uppercase tracking-wide text-muted">
          Author: {SITE.author} · Mathematics &amp; statistics geek
        </p>
      </header>

      <div className="prose prose-lg mt-10 max-w-none">
        <blockquote>
          <p>
            Hi! I&apos;m {SITE.author}, a mathematics/statistics geek with an interest in uncovering the mysteries
            of the universe—well, at least the ones that can be uncovered with math and science.
          </p>
        </blockquote>

        <p>
          I started this blog to do some thinking out loud about the various ideas, tidbits, and discussions that
          occur to me from time to time, or that I come across in my reading. Sometimes it will be math, sometimes
          it will be something else entirely. Occasionally I&apos;ll start tossing around ideas and realize that I
          need to write a post about it. Other times it will be simple musings about different ideas.
        </p>
        <p>
          I hope to eventually turn this into a collection of interesting posts, observations, and ideas. You might
          stumble across a post that has a particularly interesting mathematical proof, or an observation about
          philosophy, or something else entirely. I&apos;m interested in anything that touches on math, statistics,
          and their relationships to everything else, so expect posts about both more &lsquo;philosophical&rsquo;
          topics, and the more down to earth.
        </p>
        <p>
          This is not meant to be a formal repository for my work or thoughts, but rather a place to do some
          thinking out loud, have ideas, think about them, and then eventually write about them somewhere. Some
          ideas will evolve into longer posts, some will languish, waiting for further development, and others will
          be abandoned as I move on to new interests.
        </p>
        <p>
          If you&apos;re interested, feel free to follow along, read, and comment. If you&apos;re looking for a
          compendium of my works, you may be disappointed, as this is rather a think-out-loud blog. However, I hope
          that you&apos;ll enjoy reading what I write, and if you&apos;re looking for ideas, observations, and
          musings on a large variety of topics, you may find some interesting things here.
        </p>

        <h2>Core philosophy</h2>
        <blockquote>
          <p>
            <strong>
              After all, there&apos;s nothing wrong with asking questions that have answers, but there is something
              fascinating about the far more numerous class of questions that don&apos;t have them.
            </strong>
          </p>
          <p>— {SITE.author}</p>
        </blockquote>

        <h2>The anatomy of Theorems and Threads</h2>
        <ol>
          <li>
            <strong>Rigorous proofs &amp; lemmas.</strong> Unexpected discoveries in non-Euclidean geometry,
            high-dimensional probability, spectral theory, and pure algebra—fully rendered with LaTeX precision.
          </li>
          <li>
            <strong>Stochastic &amp; statistical musings.</strong> Algorithmic Kolmogorov complexity, Monte Carlo
            error limits, stochastic resonance, and the fuzzy boundary between determinism and true randomness.
          </li>
          <li>
            <strong>Philosophical inquiries.</strong> Epistemology, synthetic foundations of logic, structural
            category theory, and discussions touching on the broader relationships between mathematics and reality.
          </li>
          <li>
            <strong>Tossing around ideas.</strong> Curiosities, sparks noticed while reading, and informal thinking
            out loud on topics that deserve further exploration or remain beautiful mysteries.
          </li>
        </ol>

        <h2>The idea lifecycle: evolution, stasis &amp; abandonment</h2>
        <ul>
          <li>
            <strong>Stage A: Spark &amp; sketch.</strong> A tidbit noticed while reading or an odd statistical
            property.
          </li>
          <li>
            <strong>Stage B: Thinking out loud.</strong> Tossing ideas around, numerical simulation, and informal
            notes.
          </li>
          <li>
            <strong>Stage C: Long-form post or perpetual puzzle.</strong> Some evolve into longer posts; others
            remain open questions.
          </li>
        </ul>

        <h2>Under the hood</h2>
        <p>
          Built with Next.js 14, TypeScript, Tailwind CSS, and KaTeX. All essays are stored locally without
          commercial databases, subscriptions, or tracking scripts.
        </p>
      </div>

      <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6 font-sans text-sm">
        <Link href="/" className="font-medium text-accent hover:underline">
          Explore {SITE.author}&apos;s posts &amp; musings →
        </Link>
        <Link href="/" className="text-muted transition-colors hover:text-ink">
          Return to homepage
        </Link>
      </div>
    </div>
  );
}
