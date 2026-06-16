# AGENTS.md

> Instructions for AI coding agents (OpenCode, Claude Code, Cursor, etc.) working in this repository. Human contributors: see `README.md`.

## What this project is

A Vite + React + Tailwind website that renders the student guide for a 5-day AI bootcamp. There is **no backend**, no database, no API — it is a static SPA whose entire content lives in `src/data/course.js` and the route files under `src/pages/`.

The site is intentionally **black-and-white**. Do not add color, gradients, or brand tints. Use the existing theme tokens in `src/index.css` (`bg-primary`, `bg-foreground`, `bg-card`, `bg-muted`, `bg-background`, `text-foreground`, `text-muted-foreground`, `border-border`).

## Tech stack

- **React 19** + **Vite 8** (`@vitejs/plugin-react`)
- **Tailwind CSS 3** with shadcn-style design tokens (see `src/index.css`)
- **react-router-dom** for client-side routing
- **lucide-react** for icons
- **Radix UI** primitives only where needed (e.g. `Slot` for `asChild`)
- **No TypeScript.** Files are `.jsx` / `.js`.

## Repo map

```
src/
├── components/
│   ├── ui/          # generic primitives (Button, Card, Badge, CodeBlock, Tabs, Accordion, Checkbox, Progress, Alert, Input, Textarea, Separator)
│   ├── layout/      # Sidebar, Header, Layout (the shell that wraps every route)
│   └── content/     # domain components (ModuleCard, DayHero, DayNav, Checklist, PromptBuilder, ModelComparisonTable, SwotBoard, RiskMatrix)
├── data/course.js   # EVERY module, topic, step, deliverable. Plus schedule, glossary, FAQ, app ideas, rubrics, templates.
├── lib/utils.js     # cn() — clsx + tailwind-merge
├── pages/           # one file per route (overview, setup, day-1…day-5, dashboard, schedule, at-a-glance, glossary, faq, resources, assessment, responsible-ai)
├── App.jsx          # the router
├── main.jsx         # entry
└── index.css        # Tailwind + theme tokens
```

## How to work in this repo

1. **Make content changes** in `src/data/course.js`. Do not hardcode text into components.
2. **Make a new page**:
   1. Add the route in `App.jsx` inside the `<Layout />` route.
   2. Add a sidebar link in `src/components/layout/sidebar.jsx` if it's a top-level page.
   3. Add a header link in `src/components/layout/header.jsx` (visible on `xl:` and up).
3. **Add a new shadcn-style primitive** to `src/components/ui/` and export named components. Follow the patterns of `button.jsx`, `card.jsx`, `badge.jsx`.
4. **Add a new interactive template** (like a SWOT board or risk matrix) to `src/components/content/`. Persist its state in `localStorage` like the existing `Checklist` does.

## Style rules

- **No new colors.** Stick to `primary`, `foreground`, `card`, `muted`, `background`, `border`, `destructive` and their foregrounds.
- **No gradients.** No `bg-gradient-*`, no `from-[...]`, no `via-[...]`, no `to-[...]`.
- **No emojis.**
- **No comments in code** unless something is genuinely non-obvious.
- Use **2-space indentation**.
- **Components are functions, not classes.**
- **Forward refs** when building primitives (`React.forwardRef`).
- **Use `cn()` for class composition.** It merges Tailwind classes correctly.

## Component conventions

```jsx
// src/components/ui/example.jsx
import * as React from "react";
import { cn } from "@/lib/utils";

export const Example = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("rounded-md border bg-card p-4", className)} {...props} />
));
Example.displayName = "Example";
```

- Use `React.forwardRef` for any primitive that wraps a single element.
- Always pass `...props` last; do not swallow unknown props.
- Always set `displayName` (helps React DevTools and ESLint).

## State conventions

- **Local UI state:** `useState` in the component.
- **Persisted state (progress, drafts):** `useState` initialised from `localStorage`, written back in a `useEffect`. Wrap reads/writes in `try/catch` (localStorage can be disabled). See `src/components/content/checklist.jsx` for the pattern.
- **No global store.** No Redux, no Zustand, no Context for state.

## Accessibility

- Use real `<button>` for clickable things, `<a>` for navigation.
- Every form input has a `<label>`.
- Use `aria-label` for icon-only buttons.
- Honour `prefers-reduced-motion` for animations if you add any.

## Forbidden

- Adding a backend or API.
- Adding a database, even client-side IndexedDB.
- Adding state-management libraries.
- Adding TypeScript.
- Adding color tokens to Tailwind config.
- Adding new dependencies without good reason — check `package.json` first.
- Committing the `dist/` folder, `node_modules/`, `.env`, or any API keys.

## Running the project

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build to dist/
npm run lint     # ESLint must be clean before pushing
```

## Models and tools available to you

You are encouraged to use any of:

- **Gemini** (cloud) — set `GOOGLE_API_KEY` in `.env` (never commit it).
- **Ollama + Gemma 4** (local, CLI) — `ollama run gemma4:2b` after installing from <https://ollama.com>.
- **LM Studio + Gemma 4** (local, GUI) — beginner-friendly alternative to Ollama. Download from <https://lmstudio.ai>; exposes an OpenAI-compatible API on `http://127.0.0.1:1234`.
- **OpenCode CLI** — see `../guide.pdf` Module 10 for the install steps.

## Escalation

If a task would require:
- A new dependency,
- A breaking change to the design (colors, gradients, layout),
- A change to the bootcamp curriculum (anything in `src/data/course.js`),

…stop and ask a human before doing it.
