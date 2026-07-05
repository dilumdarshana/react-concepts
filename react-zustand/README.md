# React + Zustand

Lightweight state management with Zustand — a simpler alternative to the Context API for small to medium projects.

## Stack

| Tool | |
|------|-|
| React | 19 |
| Zustand | 5 |
| Vite | 8 |
| TypeScript | 6 |
| ESLint | 10 (flat config) |

## Commands

```bash
pnpm dev       # start dev server
pnpm build     # tsc -b && vite build
pnpm lint      # eslint .
pnpm preview   # vite preview
```

## Project structure

```
src/
├── store/
│   └── useStore.ts       # Zustand store (counter example)
├── components/
│   ├── SetCounter.tsx     # mutate & read outside component
│   └── ShowCounter.tsx    # read via hook
├── App.tsx
└── main.tsx
```

[Zustand docs](https://zustand.docs.pmnd.rs/getting-started/introduction)