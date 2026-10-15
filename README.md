# Kiowope Capital — website

React + TypeScript + Vite implementation of the redesign, built from the Design canvas mockups
(Home, About, Services, Contact).

## Setup

Dependencies aren't installed yet — this was built in a sandboxed environment with no access to the
npm registry, so run this once on your own machine:

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Structure

- `src/data/content.ts` — every piece of real copy (services, sectors, client types, values, contact
  details) in one place. Edit content here rather than hunting through JSX.
- `src/components/` — `Nav`, `Footer` (full homepage variant + compact variant for inner pages),
  `Logomark`, `PageHero`, `CTASection`.
- `src/pages/` — `Home`, `About`, `Services`, `Contact`, plus `Privacy`, `Terms` and `NotFound` stubs.
- `src/index.css` — the whole design system as CSS custom properties and utility classes (colors,
  type scale, spacing, buttons, cards). This is the single place to retune the look.

## Before this goes live

Carried over from the handoff doc's launch checklist:

- **Security**: the current kiowope.money WordPress install is compromised (hidden spam injections).
  That needs cleaning up independently of this rebuild — see the handoff doc for the runbook. Consider
  not going back to WordPress at all, since this is now a static React app with no PHP/plugin surface.
- **Privacy Policy / Terms of Use**: `src/pages/Privacy.tsx` and `src/pages/Terms.tsx` are placeholders
  that say so explicitly. Replace with real legal content before launch.
- **Contact form**: currently opens the visitor's email client via a `mailto:` link (no backend). Wire
  up a real form handler (Formspree, a serverless function, etc.) if you want submissions to land
  somewhere other than their own outbox.
- **Favicon**: done — `public/favicon.svg`, built from the same route/node mark used in the nav.
- **Domain**: kiowope.money already exists; point it at wherever this gets deployed (Vercel, Netlify,
  etc. all work well with a Vite app).
