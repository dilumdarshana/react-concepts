# template

React boilerplate for bootstrapping new projects. Clean minimal setup — clone and go.

## Stack

- React 19 + TypeScript + Vite
- Tailwind CSS v4 (`@tailwindcss/vite` plugin)
- ESLint flat config (`eslint.config.js`)
- Node v24.15.0 (`.nvmrc` at monorepo root)
- Package manager: pnpm

## Directory structure

```
src/
├── @types/        # Global type declarations
├── assets/        # Static assets (images, svgs, etc.)
├── components/    # Reusable UI components
├── contexts/      # React context providers
├── hooks/         # Custom React hooks
├── App.tsx        # Root app component
├── index.css      # Global styles / Tailwind import
└── main.tsx       # Entry point
```

## Commands

| Command | Action |
|---------|--------|
| `pnpm dev` | Start Vite dev server |
| `pnpm build` | `tsc -b && vite build` |
| `pnpm lint` | `eslint .` |
| `pnpm preview` | `vite preview` |

## Usage as boilerplate

1. Copy this directory to a new location
2. Update `package.json` (name, version)
3. Update `index.html` (`<title>`)
4. Install deps: `pnpm install`
5. Start coding

## Commit conventions

Use conventional commits across all projects: `feat:`, `fix:`, `chore:`, `docs:`, `refactor:`, `style:`, `test:`. Keep messages short and scoped to the project directory.

## Conventions

- Mimic any of the sibling projects (`basics/`, `RTK/`, `tanstack/`, etc.) for patterns on routing, state management, or SSR — each is a self-contained reference.
- Conventional commits: `feat:`, `fix:`, `chore:`, `refactor:`, `docs:`, `style:`, `test:`
- No tests, no CI/CD
- ESLint flat config — extend from `eslint.config.js`
- Tailwind v4 via `@import "tailwindcss"` in CSS (no config file)
