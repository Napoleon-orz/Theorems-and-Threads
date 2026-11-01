import Link from "next/link";
import { SITE } from "@/lib/site";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="mx-auto flex w-full max-w-2xl items-center justify-between px-5 py-5">
      <Link href="/" className="flex items-center gap-2 text-xl font-semibold">
        <span className="text-accent">∑</span>
        {SITE.name}
      </Link>
      <nav className="flex items-center gap-4 font-sans text-sm">
        <Link href="/about" className="text-muted transition-colors hover:text-ink">
          About
        </Link>
        <ThemeToggle />
      </nav>
    </header>
  );
}
