# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Vite dev server with HMR
npm run build     # tsc -b && vite build (type-check first, output to dist/)
npm run lint      # oxlint (not ESLint)
npm run preview   # serve the built dist/
```

There is no test runner configured. `npm run build` is the type-check gate (`noUnusedLocals`, `noUnusedParameters`, `erasableSyntaxOnly`, `verbatimModuleSyntax` are on — use `import type` for type-only imports, and avoid enums/parameter properties).

## Architecture

Single-page personal portfolio: React 19 + TypeScript + Vite + Tailwind CSS v4 + framer-motion + lucide-react. No router, no backend — one scrolling page.

- **`src/App.tsx`** renders `Navbar`, then `Hero → About → Skills → Experience → Portfolio → Resume → Quotes → Contact`, then `Footer`.
- **Content is separated from presentation.** All copy, links, and lists live in `src/data/*.ts` (`profile`, `experience`, `projects`, `quotes`, `skills`, `nav`), typed by interfaces in `src/types/content.ts`. To change site content, edit the data files; to add a field, update the interface first.
- **Nav ↔ section ids are coupled by string.** `src/data/nav.ts` item ids must match the `id` passed to each section's `<Section id="...">` (and `home` for Hero). `useActiveSection` uses an `IntersectionObserver` over those ids to highlight the active nav item, and `Navbar` scrolls via `document.getElementById(id).scrollIntoView`. Adding a section means adding it in both `App.tsx` and `nav.ts`.
- **`components/layout/Section.tsx`** is the shared section wrapper (anchor id, `scroll-mt-24` to clear the fixed navbar, eyebrow/heading with a framer-motion reveal). New sections should use it.
- **Brand icons** (GitHub, LinkedIn, etc.) are custom SVGs in `components/icons/BrandIcons.tsx`; `SocialLink.icon` is a string union that maps to them or to lucide icons.
- **Theming** is defined in `src/index.css` via Tailwind v4 `@theme` tokens (`bg-bg`, `text-text-muted`, `text-accent`, `font-heading`, etc.) — there is no `tailwind.config`. Use these tokens rather than raw colors. Fonts (Jost, Inter) are loaded from Google Fonts in `index.html`.
- **Path alias:** `@/` → `src/` (configured in both `vite.config.ts` and `tsconfig.app.json`).
- **Static assets** live in `public/` and are referenced by absolute URL strings in the data files (e.g. `/images/project-1.jpg`, resume PDF in `public/resume/`), not imported.

## Notes

- `legacy-site-backup/` is the old v1 jQuery site, kept for reference only; it is not part of the build. `dist/` is gitignored build output.
