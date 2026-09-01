# Emamul Islam Nadid — Portfolio

A single-page portfolio for a graphic designer / web developer: brand identity work, case studies,
skills, timeline and a working contact form. Dark-first design system with a fully considered light
theme, self-hosted variable fonts, WebP imagery and reduced-motion support.

**Live:** https://einadid.vercel.app

## Stack

| Layer     | Choice                                                        |
| --------- | ------------------------------------------------------------- |
| Framework | React 19 + TypeScript (strict) + Vite 7                       |
| Styling   | Tailwind CSS 3 driven by CSS custom properties (design tokens) |
| Motion    | Framer Motion, all scroll reveals respect `prefers-reduced-motion` |
| Routing   | React Router 7 (`/`, `/projects`, `/projects/:id`)            |
| Type      | Sora, Inter and JetBrains Mono — self-hosted via Fontsource   |
| Forms     | EmailJS (`@emailjs/browser`)                                    |
| Hosting   | Vercel (`vercel.json` handles SPA rewrites + cache/security headers) |

## Getting started

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # tsc -b && vite build → dist/
npm run preview    # serve the production build
npm run lint       # eslint
```

## Editing content

Everything the site prints comes from `src/data`:

- `personalInfo.ts` — name, tagline, bio, contact details, socials
- `projects.ts` — case studies (`status: 'live' | 'progress'`; `featured` projects sort first)
- `services.ts` — service list + the 4-step process
- `skills.ts` — skill categories, toolbelt chips, hero marquee, hero stats
- `education.ts`, `experience.ts`, `certificates.ts` — the Journey timeline
- `siteNav.ts` — the nav items used by the header and the footer

Add a project = add an object to `projects.ts` and drop images in `public/projects/<id>/`. Nothing
else needs to change; the archive page, sitemap generator input, filters and counts are derived.

## Design tokens

Colours, fonts, shadows and animations live in `tailwind.config.js`; the actual values are CSS
variables in `src/index.css` (`:root` for light, `.dark` for dark). Add a token there once and both
themes update. Reusable classes (`.panel`, `.btn-solid`, `.chip`, `.spot`, `.h-section`, `.field`)
are defined in the same file.

## Performance notes

- Every raster asset is WebP, generated from the originals in `design-source/originals/`.
- Fonts are local (`@fontsource-variable/*`) — no third-party requests, no layout shift.
- Images use `loading="lazy"` + explicit aspect ratios; the hero portrait is `fetchpriority="high"`.
- Vendor code splits into `react` / `motion` chunks for long-term caching.

## Contact form

Service/template/public key are hard-coded with an env override:

```bash
# .env.local
VITE_EMAILJS_SERVICE_ID=...
VITE_EMAILJS_TEMPLATE_ID=...
VITE_EMAILJS_PUBLIC_KEY=...
```

Template variables expected by EmailJS: `from_name`, `from_email`, `subject`, `message`, `interest`.

## Repo layout

```
src/
  components/     UI sections (Hero, Projects, Services, Skills, Journey, About, Contact, Footer)
  components/ui/   Primitives: Reveal, SectionHeading, Marquee, SmartImage, Backdrop, ThemeToggle…
  data/            All editable content (edit here, not in components)
  lib/             hooks + helpers (scroll progress, spotlight, copy, escape, body-lock)
public/            served assets: WebP images, resume.pdf, og-image.jpg, favicon, sitemap
design-source/     heavy original JPG/PNG exports — never served, kept for re-exporting
```
