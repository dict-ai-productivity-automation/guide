# Contributing

Thanks for helping improve the AI-Native Bootcamp student guide.

## Before you start

1. Read `README.md` (what the project is) and `AGENTS.md` (the rules an AI agent follows). The agent rules apply to you too — they're the same.
2. Run the site locally (`npm run dev`) and look at the page(s) you'll touch.

## Editing content

**Almost all course content lives in `src/data/course.js`.** If you want to:

- Add or change a module's topics, steps, or example — edit that file.
- Add a new glossary term, FAQ, app idea, or rubric — same file, look for the matching export.
- Add a brand-new page — read "Adding a new page" below.

## Adding a new page

1. Create `src/pages/<route>.jsx`. Export a named component.
2. Register the route in `src/App.jsx` inside the `<Layout />` route.
3. Add a sidebar entry in `src/components/layout/sidebar.jsx` and a header entry in `src/components/layout/header.jsx` (visible on `xl:` screens).
4. If the page uses new data, put it in `src/data/course.js` (or a sibling file if it's clearly separate).

## Adding a new interactive component

1. Place it under `src/components/content/` (or `src/components/ui/` if it's a generic primitive).
2. If the state needs to survive a refresh, persist it in `localStorage` using the same `useState` + `useEffect` pattern as `src/components/content/checklist.jsx`.
3. Wrap localStorage reads/writes in `try/catch` — it can be disabled in some browsers.

## Style rules (summary — full list in `AGENTS.md`)

- **No new colors.** Black/white only.
- **No gradients.**
- **No TypeScript.** Use `.jsx` / `.js`.
- **No new dependencies** without a clear reason. Check `package.json` first.
- Use the `cn()` helper for class composition.
- Run `npm run lint` and `npm run build` before pushing — both must pass.

## Commit & PR

- One logical change per commit.
- PR title: a single sentence. E.g. "Add SWOT board component to Day 3 Module 8".
- PR description: what changed, why, and screenshots if UI.
- Reference any related issue with `Fixes #123` or `Closes #123`.

## Code of conduct

Be kind, be constructive, assume good faith. The bootcamp is a learning environment — model the behaviour you want students to copy.
