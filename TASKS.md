# TASKS.md

> Backlog for AI coding agents and the human maintainer. Pick from "Now" first. Format: `TASK-NNN — title — owner — acceptance criteria`.

## Now

- [ ] TASK-001 — Wire new pages into the router — agent — App.jsx has routes for `/dashboard`, `/glance`, `/schedule`, `/glossary`, `/faq`, `/resources` and renders without errors.
- [ ] TASK-002 — Add sidebar + header links for new pages — agent — Sidebar lists Dashboard, Schedule, At-a-glance, Glossary, FAQ, Resources, Responsible AI, Assessment, Setup, Overview. Header shows them on `xl:` and up.
- [ ] TASK-003 — Embed the ModelComparisonTable inside Day 1 Module 1 — agent — Module 1 renders the new comparison component with the 3 models × 5 criteria.
- [ ] TASK-004 — Embed the SwotBoard + RiskMatrix inside Day 3 Module 8 — agent — Module 8 renders both new components below the existing example.
- [ ] TASK-005 — Add an "App idea picker" section to Day 4 Module 12 — agent — Renders the four app ideas from `appIdeas` with difficulty, blurb, data example, and a hint.
- [ ] TASK-006 — Add a global search shortcut (`Ctrl/Cmd + K`) — agent — Opens a search palette that finds pages, modules, and glossary terms.
- [ ] TASK-007 — Add a print stylesheet for the At-a-glance page — agent — `@media print` rules hide nav/sidebar, expand content, and use black-on-white only.

## Next

- [ ] TASK-010 — Lightweight syntax highlighting in CodeBlock — agent — Use `shiki` or `prismjs` only on the highlighted line ranges. Skip if it pushes bundle > 130 kB gz.
- [ ] TASK-011 — Add a per-day "Where am I" breadcrumb — agent — Each Day page shows the module's position (e.g. "M2 of 3") with prev/next module anchors.
- [ ] TASK-012 — Persist the Dashboard's expanded/collapsed state — agent — Optional. Tracked for later.

## Backlog

- [ ] TASK-020 — Add tests with `vitest` for the Checklist and ModuleCard — agent — One unit test per file, no DOM snapshot tests.
- [ ] TASK-021 — Add a "Export my progress" button on the Dashboard — agent — Downloads a `progress.json` with per-module completion percentages.
- [ ] TASK-022 — Add a Chinese / Filipino localisation switch — human — Out of scope unless requested.

## Done

- [x] TASK-000 — Scaffold Vite + React + Tailwind project — agent — `bootcamp-guide/` runs on `npm run dev`, builds cleanly, lints clean.
- [x] TASK-001 — Build the layout shell (Sidebar + Header + Theme toggle) — agent — Light by default, dark toggle persists to `localStorage`.
- [x] TASK-002 — Build all 5 Day pages with the module data from `guide.pdf` — agent — Topics, activities, deliverables, worked examples, step-by-step instructions per module.
- [x] TASK-003 — Build the Setup, Assessment, and Responsible-AI pages — agent — Each with copy-to-clipboard code blocks.
- [x] TASK-004 — Add interactive checklist on every module — agent — Progress persists in `localStorage`.
- [x] TASK-005 — Add the interactive RTCF Prompt Builder on Day 1 — agent — Output is a copyable prompt that updates live.
- [x] TASK-006 — Switch the entire site to a strict black/white palette — agent — Removed all gradients, day colours, success/warning/info tints. Build still passes.
- [x] TASK-007 — Add the facilitator card (Mark Joseph J. Solidarios) on Setup and Overview — agent — Links to `github.com/mjsolidarios` and the org page.
- [x] TASK-008 — Add an "AI League" section on the Assessment page with all 5 ranks — agent — Bronze → Diamond, no gradients.
