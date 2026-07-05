# React + TypeScript + Vite boilerplate

Minimal, modern React boilerplate ready to clone and go.

## Stack

- React 19 + TypeScript 6 + Vite 8
- Tailwind CSS v4
- React Router v8
- ESLint (flat config) with auto-fix on save

## Project structure

```
src/
├── @types/          # Global type declarations
├── assets/          # Static assets
├── components/      # Reusable UI components
│   └── ErrorBoundary.tsx
├── contexts/        # React context providers
├── hooks/           # Custom React hooks
│   └── useDocumentTitle.ts
├── layouts/         # Layout components
│   └── Default.tsx
├── lib/             # Utility functions
│   └── cn.ts        # Tailwind class merges (clsx + twMerge)
├── pages/           # Route page components
│   ├── Home.tsx
│   ├── About.tsx
│   └── NotFound.tsx
├── index.css        # Global styles (Tailwind import)
└── main.tsx         # Entry point with router
```

## Commands

| Command | Action |
|---------|--------|
| `pnpm dev` | Start dev server |
| `pnpm build` | `tsc -b && vite build` |
| `pnpm lint` | `eslint .` |
| `pnpm preview` | `vite preview` |

## Getting started

```bash
pnpm install
pnpm dev
```

## Path alias

Use `@/` to import from `src/`:

```ts
import Home from '@/pages/Home.tsx';
```

## Environment variables

Copy `.env.example` to `.env` and fill in the values. Only `VITE_*` variables are exposed to the client.
