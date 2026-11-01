import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mx-auto w-full max-w-2xl px-5 py-10 font-sans text-sm text-muted">
      <div className="flex items-center justify-between border-t border-line pt-6">
        <span>
          © {new Date().getFullYear()} {SITE.author}
        </span>
        <a href="/feed.xml" className="transition-colors hover:text-ink">
          RSS
        </a>
      </div>
    </footer>
  );
}
