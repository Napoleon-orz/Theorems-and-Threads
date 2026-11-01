import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-5 py-24 text-center">
      <p className="text-6xl text-accent">∄</p>
      <h1 className="mt-6 text-3xl font-semibold">This page does not exist.</h1>
      <p className="mt-3 text-lg text-muted">There is no such page; the proof is left to the reader.</p>
      <Link href="/" className="mt-8 inline-block font-sans text-sm text-accent hover:underline">
        ← Back to the articles
      </Link>
    </div>
  );
}
