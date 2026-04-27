# thePREP — Design System

A design-system proposal for **thePREP** — the AI-first legal and life-planning product.

This repo is the language and contract behind every screen: tokens, components, voice, motion, and accessibility, documented as a Storybook so any designer or engineer can read it from cover to cover.

## Run it locally

```bash
npm install
npm run storybook
```

Storybook opens at `http://localhost:6006`. Read it in this order:

1. **Introduction** — the manifesto and how to use this site
2. **Principles** — the four ideas that shape every decision
3. **Foundations** — colour, typography, spacing, motion, elevation
4. **Voice & Tone** — the words that carry the design
5. **Accessibility** — what's built in
6. **Components** — Button, Card, Input, Badge, Stepper, Nav, ChatMessage
7. **Compositions** — Dashboard, Intake, Lawyer Review (real screens, system-built)

## Build the static site

```bash
npm run build-storybook
```

The build outputs to `storybook-static/` and can be served from any static host.

## How the system is organised

```
src/
  tokens/           Single source of truth — TS + CSS variables
  styles/           reset.css · tokens.css · global.css
  components/       Each component: .tsx + .module.css + .stories.tsx + index
  compositions/     Real product screens, built only from the system
docs/               MDX foundation pages (rendered inside Storybook)
.storybook/         Config + custom theme
design.md           The original written brief that started this work
```

Tokens drive everything. Components reference CSS variables, never raw values. Compositions reference components, never raw markup. If you change `--color-action-primary`, every primary action in the system follows.

## Stack

- React 19 · TypeScript (strict)
- Vite 8 · Storybook 10
- CSS Modules (chosen over Tailwind so tokens stay the contract)
- Inter via `@fontsource/inter` (self-hosted, no runtime CDN)
