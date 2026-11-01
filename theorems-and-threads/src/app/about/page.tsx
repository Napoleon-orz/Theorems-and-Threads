import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-2xl px-5 pb-10 pt-6">
      <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">About</h1>

      <div className="prose prose-lg mt-8 max-w-none">
        <blockquote>
          <p>
            Hi! I&apos;m {SITE.author}, a mathematics/statistics geek with an interest in uncovering the mysteries
            of the universe—well, at least the ones that can be uncovered with math and science.
          </p>
        </blockquote>

        <p>
          I started this blog to do some thinking out loud about the various ideas, tidbits, and discussions that
          occur to me from time to time, or that I come across in my reading. Sometimes it will be math, sometimes
          it will be something else entirely.
        </p>
        <p>
          I&apos;m interested in anything that touches on math, statistics, and their relationships to everything
          else, so expect posts about both more &lsquo;philosophical&rsquo; topics and the more down to earth.
        </p>
        <p>
          This is not meant to be a formal repository of my work, but a place to have ideas, think about them, and
          eventually write about them. Some ideas will grow into longer posts, some will wait for further
          development, and others will be abandoned as I move on to new interests.
        </p>
        <p>
          After all, there&apos;s nothing wrong with asking questions that have answers, but there is something
          fascinating about the far more numerous class of questions that don&apos;t have them.
        </p>
      </div>
    </div>
  );
}
