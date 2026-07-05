# template

React boilerplate for bootstrapping new projects. Clone, update, and go.

## Stack

- React 19 + TypeScript 6 + Vite 8
- Tailwind CSS v4 (`@tailwindcss/vite` plugin)
- React Router v8
- Zustand (state management)
- Playwright (E2E testing)
- ESLint flat config (`eslint.config.js`)
- Node v24.15.0 (`.nvmrc` at monorepo root)
- Package manager: pnpm

## Directory structure

```
src/
├── @types/          # Global type declarations
├── assets/          # Static assets
├── components/
│   ├── ErrorBoundary.tsx
│   ├── ThemeProvider.tsx
│   ├── layout/      # Header, Footer
│   └── ui/          # Primitives (buttons, cards, etc.)
├── contexts/        # React context definitions
├── hooks/           # Custom React hooks
├── layouts/         # Page layout wrappers
├── lib/             # Utilities (cn.ts)
├── pages/           # Route page components
├── stores/          # Zustand stores
├── index.css        # Tailwind import
└── main.tsx         # Entry point with router
```

## Commands

| Command | Action |
|---------|--------|
| `pnpm dev` | Start Vite dev server |
| `pnpm build` | `tsc -b && vite build` |
| `pnpm lint` | `eslint .` |
| `pnpm preview` | `vite preview` |
| `pnpm test:e2e` | Run Playwright E2E tests (headless) |
| `pnpm test:e2e:ui` | Run Playwright E2E tests (headed) |

## Usage as boilerplate

1. Copy this directory to a new location
2. Update `package.json` (name, version)
3. Update `index.html` (`<title>`)
4. Install deps: `pnpm install`
5. Start coding

## Key patterns

- **Routing**: Add pages to `src/pages/` and register them in `src/main.tsx` via `<Route>`
- **State (simple)**: Context API — see `src/contexts/theme.ts` + `src/components/ThemeProvider.tsx`
- **State (complex)**: Zustand — see `src/stores/counter.ts`
- **E2E tests**: Add specs to `e2e/` — see existing examples
- **Path alias**: `@/` maps to `src/`

## Commit conventions

Use conventional commits: `feat:`, `fix:`, `chore:`, `docs:`, `refactor:`, `style:`, `test:`. Keep messages short and scoped to the project directory.

## Style notes

- ESLint flat config — extend from `eslint.config.js`
- Tailwind v4 via `@import "tailwindcss"` in CSS (no config file)
- Auto-fix on save via `.vscode/settings.json` (requires VS Code ESLint extension)
