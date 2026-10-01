# Use AI Better

Practical ways to use AI for better work, learning, thinking, and execution.

Use AI Better helps people turn goals and problems into useful AI workflows. Start from what you are trying to do,
follow a workflow that keeps you in charge of the thinking, adapt a proven prompt pattern, and check what still
needs verification before you act.

## What you can do

- **Discover use cases.** Search and filter 48 goal-first use cases across learning, work, research, coding,
  automation, thinking, planning, productivity, and everyday tasks. Each one explains what it is best for, what you
  need, the workflow, a starting prompt, and what to verify.
- **Follow playbooks.** 10 step-by-step workflows, such as a Socratic tutor, deep research with a stopping rule,
  debugging from evidence, and human-in-the-loop automation.
- **Use interactive tools.** 10 small tools that produce copyable Markdown: Goal Breakdown, Eisenhower Matrix, Daily
  Five, Energy Matching, Productivity Blockers, Weekly Review, Current Situation Review, Prompt Checklist, Coding
  Task Brief, and Automation Mapper.
- **Browse the Prompt Library.** 25 reusable prompt patterns with variables, the reasoning behind them, and what
  to check in the result.
- **Learn the fundamentals.** 13 short lessons on how models behave, learning and working with AI, choosing tools,
  prompting, planning, and verification, plus an 11-point prompt checklist.

## V1 scope

- Content is static and ships with the app. There are no accounts, no database, and no AI API calls.
- Unfinished tool drafts are saved in the browser's `localStorage`, so a refresh does not erase active work.
- The **Prompt Builder** is **Coming Soon**. Its page describes the planned guided builder; it does not generate
  prompts yet.
- Light and dark themes, responsive layouts from phone to desktop, and keyboard-accessible navigation.

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router, React 19). Content pages are statically prerendered.
- [Tailwind CSS v4](https://tailwindcss.com) with theme tokens in `src/app/globals.css`.
- [shadcn/ui](https://ui.shadcn.com) components on Radix primitives.
- [next-themes](https://github.com/pacocoursey/next-themes), [sonner](https://sonner.emilkowal.ski), and
  [lucide-react](https://lucide.dev).
- TypeScript and ESLint.

## Getting started

Requires Node.js 20.9 or later.

```bash
npm install
npm run dev      # http://localhost:3100
```

| Script | Purpose |
| --- | --- |
| `npm run dev` | Development server on port 3100 |
| `npm run build` | Production build, including type checking and content integrity checks |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |

## Project structure

```
src/
  app/          Routes, metadata, sitemap.ts, robots.ts
  components/   Layout shell, shared building blocks, shadcn/ui primitives
  features/     One folder per product area (home, use-cases, playbooks, prompts, tools, learn)
  content/      Static, typed content: use cases, playbooks, prompts, lessons, site copy
  config/       Site name, URL, and navigation
  hooks/        Local draft storage and clipboard helpers
  lib/          Metadata and small utilities
  types/        Shared content types
public/         Static assets
```

Pages stay thin: a route loads data through a feature's `queries.ts` and renders that feature's components.

## Adding content

All content lives in `src/content/`. Detail pages, static params, metadata, and sitemap entries are generated
from it.

- **Use case:** add an entry to `use-cases.ts`. Link it to 1–2 playbooks, at most 1 tool, 1–2 prompts, and 1–2
  lessons.
- **Playbook, prompt, or lesson:** add the record to its file and its slug to `slugs.ts`.
- **Tool:** add a definition in `src/features/tools/definitions/`, its id to `src/content/tool-ids.ts`, and register
  it in `src/features/tools/registry.ts`.
- **Navigation:** edit `src/config/navigation.ts`.

Relationships are type-checked, and `npm run build` fails if a slug is missing or a use case has the wrong number of
related items.

## Deployment

The app runs on any Node.js host that supports Next.js, including Vercel.

Production requires the public site URL:

```bash
https://use-ai-better.vercel.app/
```

Set it in your hosting provider's environment variables before building. It is used for canonical URLs, Open
Graph and X metadata, `sitemap.xml`, and `robots.txt`. See `.env.example`. The production URL will be added after the
first deployment. Until it is set, builds use the placeholder `https://use-ai-better.example` and print a warning.
Local addresses are rejected.

**Social preview image:** add a 1200×630 image at `public/og-image.png`, then set `socialImage.available` to `true`
in `src/config/site.ts`.
