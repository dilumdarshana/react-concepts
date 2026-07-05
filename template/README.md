# React + TypeScript + Vite boilerplate

Minimal, modern React boilerplate ready to clone and go.

## Stack

- React 19 + TypeScript 6 + Vite 8
- Tailwind CSS v4
- React Router v8
- Zustand (state management)
- Playwright (E2E testing)
- ESLint (flat config) with auto-fix on save

## Project structure

```
src/
├── @types/          # Global type declarations
├── assets/          # Static assets
├── components/      # Reusable UI components
│   ├── ErrorBoundary.tsx
│   ├── ThemeProvider.tsx
│   ├── layout/      # Structural page components
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── ui/          # Presentational primitives (buttons, cards, etc.)
├── contexts/        # React context providers
│   └── theme.ts     # Theme context (light/dark)
├── hooks/           # Custom React hooks
│   ├── useDocumentTitle.ts
│   └── useTheme.ts
├── layouts/         # Layout components
│   └── Default.tsx
├── lib/             # Utility functions
│   └── cn.ts        # Tailwind class merging (clsx + twMerge)
├── pages/           # Route page components
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Counter.tsx
│   └── NotFound.tsx
├── stores/          # Zustand state stores
│   └── counter.ts
├── index.css        # Global styles (Tailwind import)
└── main.tsx         # Entry point with router
```

## Commands

| Command | Action |
|---------|--------|
| `pnpm dev` | Start Vite dev server |
| `pnpm build` | `tsc -b && vite build` |
| `pnpm lint` | `eslint .` |
| `pnpm preview` | `vite preview` |
| `pnpm test:e2e` | Run Playwright tests (headless) |
| `pnpm test:e2e:ui` | Run Playwright tests (headed) |

## Getting started

```bash
pnpm install
pnpm dev
```

## Path alias

Use `@/` to import from `src/`:

```ts
import Home from '@/pages/Home';
```

## State management

Two approaches demonstrated:

- **Context API** — `src/contexts/theme.ts` + `src/components/ThemeProvider.tsx` for simple global state (theme).
- **Zustand** — `src/stores/counter.ts` for state that benefits from selective subscriptions and no boilerplate.

## Environment variables

Copy `.env.example` to `.env` and fill in the values. Only `VITE_*` variables are exposed to the client.
