# PROMPTS.md

> A log of the prompts used to build this site, what model they went to, and a quality score (1–5). The best ones are templates the maintainer can re-use.

## Initial scaffold

- **Date:** 2026-06-15
- **Model:** Gemini 2.0 Flash
- **Intent:** Generate a Vite + React + Tailwind project with a shadcn-style design system.
- **Prompt:** "Scaffold a Vite + React + Tailwind project. Configure Tailwind with the shadcn theme tokens (background, foreground, primary, secondary, muted, accent, destructive, border, input, ring). Add path alias `@/` → `src/`. Light mode is the default; add a dark class via `class` strategy."
- **Output quality:** 5/5 — worked first try.

## Module-card pattern

- **Date:** 2026-06-15
- **Model:** Gemini 2.0 Flash
- **Intent:** Render a day page from a single data structure.
- **Prompt:** "Given a `days` array where each day has `modules`, render each module as a card with: number badge, timebox badge, challenge badge, title, description, topics list, deliverable, activity, an optional worked-example code block, a collapsible step-by-step walkthrough, and a per-module progress checklist that persists in `localStorage`."
- **Output quality:** 4/5 — required iteration on the collapsible (first version had ARIA issues).

## Black-and-white refactor

- **Date:** 2026-06-15
- **Model:** Claude Sonnet
- **Intent:** Strip all colors and gradients from the site.
- **Prompt:** "Refactor this site to a strict black-and-white palette. Remove `bg-gradient-*`, `from-[…hsl…]`, `via-[…]`, `to-[…]`, and the custom Tailwind tokens `day1`–`day5`, `success`, `warning`, `info`. Use only `primary`, `foreground`, `card`, `muted`, `background`, `border`, and `destructive` (kept as B/W). Keep the lucide-react icons but recolor them to `text-foreground` or `text-muted-foreground`."
- **Output quality:** 5/5 — clean diff, build still passes.

## Adding the facilitator card

- **Date:** 2026-06-15
- **Model:** Gemini 2.0 Flash
- **Intent:** Add a facilitator credit on the Setup page.
- **Prompt:** "Add a facilitator card to the Setup page header. Show: avatar (initials or icon), role label 'Bootcamp Facilitator', name 'Mark Joseph J. Solidarios', and a link to `https://github.com/mjsolidarios`. Add a 'View organization' button on the right linking to `https://github.com/dict-ai-productivity-automation`. Use the existing card and button components. No new colors."
- **Output quality:** 5/5.

## RTCF for this site's own prompts

When you ask the model to write a new page or component, structure the prompt as:

- **Role:** "You are a senior front-end engineer who builds clean, accessible React + Tailwind sites."
- **Task:** "Add a `…` page that does `…`."
- **Context:** "This is a Vite + React 19 + Tailwind 3 + shadcn-style site. All content is in `src/data/course.js`. No backend. No new colors. Light mode default. Bundle budget: 130 kB gzipped."
- **Constraints:** "Do not introduce TypeScript, new state libraries, or new colors. Do not commit `dist/` or `node_modules/`. Use the `cn()` helper for class composition."
- **Format:** "Output the full file content. Mention any other files that need to change."
