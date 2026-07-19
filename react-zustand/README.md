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

## Concepts demonstrated

| Concept | Details |
|---------|---------|
| [Slice pattern](CONCEPTS.md#2-slice-pattern) | Split store into independent files (`counterSlice`, `uiSlice`, `todosSlice`) |
| [Selectors](CONCEPTS.md#3-selectors-granular-subscriptions) | Granular subscriptions — `useStore(s => s.count)` to avoid wasted re-renders |
| [useShallow](CONCEPTS.md#4-useshallow) | Shallow-compare multi-value selections without re-rendering on every change |
| [Async actions](CONCEPTS.md#5-async-actions) | `async/await` in actions with loading/error/data state pattern |
| [devtools](CONCEPTS.md#6-middleware) | Redux DevTools integration with named actions |
| [persist](CONCEPTS.md#6-middleware) | localStorage persistence via `persist` middleware |
| [subscribe()](CONCEPTS.md#7-subscribe-outside-react) | Listen to state changes outside the React tree |
| [getState / setState](CONCEPTS.md#8-getstate--setstate-imperative-access) | Imperative read/write outside components |

## Project structure

```
src/
├── store/
│   ├── useStore.ts        # Composed store (devtools + persist middleware)
│   ├── counterSlice.ts     # Counter state & actions
│   ├── uiSlice.ts          # Theme state & actions
│   └── todosSlice.ts       # Async data fetching (todos)
├── components/
│   ├── SetCounter.tsx      # useShallow, getState, setState
│   ├── ShowCounter.tsx     # Granular selector (count only)
│   ├── ShowTheme.tsx       # Granular selector (theme only)
│   └── TodoList.tsx        # Async actions, subscribe()
├── App.tsx                 # Theme sync to <html>, component grid
└── main.tsx
```

<a href="https://zustand.docs.pmnd.rs/learn/getting-started/introduction" target="_blank">Zustand docs</a> | <a href="CONCEPTS.md" target="_blank">Full concept reference →</a>
