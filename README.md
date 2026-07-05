# React concepts

Learning monorepo with 6 independent React 19 projects. Each is fully self-contained in its own subdirectory.

## Projects

| Directory | Stack |
|-----------|-------|
| `template/` | Boilerplate — Vite + React 19 + TS 6 + Tailwind v4 + React Router v8 + Zustand + Playwright + ESLint |
| `basics/` | React Router v8, React Hook Form + Zod, Context API |
| `react-zustand/` | Zustand state management |
| `RTK/` | Redux Toolkit + Tailwind v4 + shadcn/ui + lucide-react + React Hook Form + Zod |
| `SSR/` | Express-based SSR (streaming + non-streaming) |
| `tanstack/` | TanStack Query + Table + Router (file-based) |

## Commands

Run all commands **inside** the relevant subdirectory (`cd basics/ && ...`).

| Command | Action |
|---------|--------|
| `pnpm dev` | Start dev server |
| `pnpm build` | `tsc -b && vite build` (except SSR) |
| `pnpm lint` | `eslint .` |
| `pnpm preview` | `vite preview` |

See each project's `AGENTS.md` or `README.md` for project-specific details.

## Environment

- Node: v24.15.0
- Package manager: pnpm (no npm/yarn)
- No tests, no CI/CD (except `template/` has Playwright E2E tests)
