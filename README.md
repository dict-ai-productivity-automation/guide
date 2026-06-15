# AI-Native Bootcamp — Student Guide Website

An interactive, single-page student guide for the 5-day **AI-Native Productivity & Automation Bootcamp** (described in `../guide.pdf`).

Built with React 19, Vite 8, Tailwind 3, and shadcn-style components. Light mode is the default; dark mode is available from the header.

> Looking for the bootcamp content itself? Start at `/` (Overview), then jump to a Day. Facilitator info and the printable handout are on the **Setup** and **At-a-glance** pages.

## Quick start

```bash
npm install
npm run dev      # http://localhost:5173
```

Other scripts:

```bash
npm run build    # production build to dist/
npm run preview  # preview the production build
npm run lint     # ESLint
```

## Project layout

```
bootcamp-guide/
├── public/                       # static assets (favicon, etc.)
├── src/
│   ├── components/
│   │   ├── ui/                   # Button, Card, Badge, CodeBlock, Tabs, …
│   │   ├── layout/               # Sidebar, Header, Layout shell
│   │   └── content/              # ModuleCard, DayHero, Checklist, PromptBuilder, …
│   ├── data/
│   │   └── course.js             # ALL course content lives here
│   ├── lib/utils.js              # cn() helper
│   ├── pages/                    # one file per route
│   ├── App.jsx                   # router
│   ├── main.jsx                  # entry
│   └── index.css                 # Tailwind + theme tokens
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js                # @/ alias → src/
└── package.json
```

## Adding or editing course content

Almost everything — every module, topic, step, deliverable, code sample, and copy-to-clipboard block — lives in **`src/data/course.js`**. Edit the `days` array to update the curriculum. Components pick up the changes automatically.

Per-page data lives next to it (schedule, app ideas, glossary, FAQ, rubrics, templates).

## Conventions

- **Path alias:** `@/` → `src/` (see `vite.config.js`).
- **Styling:** Tailwind classes only. No CSS modules. Theme tokens are CSS variables in `src/index.css` (`--background`, `--foreground`, `--primary`, etc.). Do **not** reintroduce colored tokens — the project is intentionally black/white.
- **Components:** shadcn-style — small, composable, no business logic. New UI primitives go in `src/components/ui/`. Page-specific components go in `src/components/content/`.
- **Icons:** `lucide-react` only. The GitHub icon is a tiny inline SVG because lucide removed the named export.
- **State:** Local component state + `localStorage` for progress. No Redux, no React Query.
- **Routing:** `react-router-dom` v6+. The sidebar and header are part of `<Layout />` in `App.jsx`.

## Accessibility & quality

- All interactive elements are buttons or links — no click handlers on `<div>`.
- The header theme toggle, the search input, and the checklist items are all keyboard-navigable.
- Run `npm run lint` before pushing.
- Build must succeed (`npm run build` produces ~105 kB gzipped JS).

## Deployment

Any static host works (Netlify, Vercel, Cloudflare Pages, GitHub Pages). Build to `dist/`.

```bash
npm run build
# then deploy dist/ to your host of choice
```
