import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mx-auto w-full max-w-2xl px-5 py-10 font-sans text-sm text-muted">
      <div className="flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
        <span>
          © {new Date().getFullYear()} {SITE.author}
        </span>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          {SITE.email && (
            <a href={`mailto:${SITE.email}`} className="transition-colors hover:text-ink">
              {SITE.email}
            </a>
          )}
          {SITE.phone && (
            <a href={`tel:${SITE.phone}`} className="transition-colors hover:text-ink">
              {SITE.phoneDisplay}
            </a>
          )}
          <a href="/feed.xml" className="transition-colors hover:text-ink">
            RSS
          </a>
        </div>
      </div>
    </footer>
  );
}
