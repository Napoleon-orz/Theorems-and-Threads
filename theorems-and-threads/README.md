# Theorems & Threads

A simple math blog built with Next.js. Articles are plain Markdown files with LaTeX math.

## Run it on your computer

```bash
npm install     # once, downloads the tools the site needs
npm run dev     # then open http://localhost:3000
```

## Add an article

1. Copy `content/_template.md` into the `content/posts/` folder.
2. Rename it, e.g. `my-first-proof.md` (the file name becomes the web address).
3. Fill in the header, write your article, and delete the `draft: true` line.
4. Save. With `npm run dev` running, it appears instantly.

## Where things live

| Path | What it is |
| --- | --- |
| `content/posts/` | Your articles (one `.md` file each) |
| `content/_template.md` | Copy-paste starter, with a math cheat sheet |
| `src/lib/site.ts` | Site name, tagline, author |
| `src/app/globals.css` | Colors and article styling |
| `src/app/page.tsx` | Home page |
| `src/app/about/page.tsx` | About page |
