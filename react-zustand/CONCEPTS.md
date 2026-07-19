# Zustand Concepts

This project demonstrates the core Zustand patterns for state management in React.

---

## 1. Store Creation (`useStore`)

`create` from `zustand` creates a hook that doubles as a store API. The store is a **singleton** — one global instance.

```ts
const useStore = create<Store>()((set) => ({
  count: 0,
  increment: () => set((s) => ({ count: s.count + 1 })),
}));
```

- **`useStore()`** — use as a React hook inside components
- **`useStore.getState()`** — read state outside React
- **`useStore.setState(partial)`** — write state outside React
- **`useStore.subscribe(listener)`** — listen to changes outside React

---

## 2. Slice Pattern

Split a large store into separate files (slices), each exporting its own interface and creator function. The main store composes them via spread.

**Slice file** (`counterSlice.ts`):
```ts
export interface CounterSlice {
  count: number;
  increment: () => void;
}

export const createCounterSlice: StateCreator<CounterSlice, [], []> = (set) => ({
  count: 0,
  increment: () => set((s) => ({ count: s.count + 1 })),
});
```

**Main store** (`useStore.ts`):
```ts
const useStore = create<Store>()((...a) => ({
  ...createCounterSlice(...a),
  ...createUISlice(...a),
}));
```

Each slice receives the same `(set, get, api)` tuple, so actions can cross-reference other slices via `get()`.

---

## 3. Selectors (Granular Subscriptions)

By default `useStore()` subscribes to the **entire** store — any change causes a re-render. Use a **selector function** to subscribe to only the values you need.

```ts
// ✅ Fine-grained — only re-renders when `count` changes
const count = useStore((s) => s.count);

// ❌ Broad — re-renders on any state change
const { count } = useStore();
```

**Advantages:**
- Components only re-render when their selected value changes
- Better performance in large stores

---

## 4. `useShallow`

When selecting multiple values as an object, a new object reference is created every render, causing unnecessary re-renders. `useShallow` performs a **shallow comparison** of the result.

```ts
import { useShallow } from 'zustand/react/shallow';

const { increment, decrement } = useStore(
  useShallow((s) => ({
    increment: s.increment,
    decrement: s.decrement,
  }))
);
```

Without `useShallow`, the component re-renders every time **any** state changes because the inline object `{ increment, decrement }` is a new reference each time.

---

## 5. Async Actions

Zustand actions are plain functions, so they can be `async`. No thunks or sagas needed.

```ts
fetchTodos: async () => {
  set({ isLoading: true, error: null });
  try {
    const data = await fetch('/api/todos').then((r) => r.json());
    set({ todos: data, isLoading: false });
  } catch {
    set({ error: 'Failed', isLoading: false });
  }
}
```

**Pattern:** Manage loading/error states explicitly alongside data (`isLoading`, `error`, `todos`).

---

## 6. Middleware

### `devtools`
Enables Redux DevTools integration. Every mutation is logged with an action name.

```ts
import { devtools } from 'zustand/middleware';

create(
  devtools(initializer, { name: 'AppStore' })
);
```

In slices, the third argument to `set` becomes the action name:
```ts
set({ count: 1 }, false, 'counter/increment');
```

### `persist`
Persists store slices to `localStorage` (or other storage). On page load, persisted values are rehydrated.

```ts
import { persist } from 'zustand/middleware';

create(
  persist(initializer, {
    name: 'app-storage',
    partialize: (state) => ({ theme: state.theme }),
  })
);
```

- **`partialize`** selects which keys to persist (avoids storing ephemeral data)
- Rehydration happens synchronously on load

### Middleware Composition
Order matters — innermost wrapper runs first:

```ts
create<Store>()(
  devtools(                    // 3. wraps persist
    persist(                   // 2. wraps immer
      immer(initializer),      // 1. wraps the raw store
      { name: '...' }
    ),
    { name: 'AppStore' }
  )
);
```

For TypeScript, slices declare which middleware mutators they use:
```ts
StateCreator<Slice, [["zustand/devtools", never]], []>
```

---

## 7. `subscribe()` (Outside React)

`store.subscribe(listener)` registers a callback that fires on every state change. Useful for analytics, WebSocket sync, or side effects outside the React tree.

```ts
useEffect(() => {
  const unsub = useStore.subscribe((state) => {
    console.log('State changed:', state.todos.length);
  });
  return unsub; // cleanup on unmount
}, []);
```

The unsubscribe function is returned — always clean up in `useEffect`.

---

## 8. `getState()` / `setState()` (Imperative Access)

Read and write state from anywhere (event handlers, timers, navigation guards):

```ts
// Read
const count = useStore.getState().count;

// Write
useStore.setState({ count: 100 });
```

With `devtools`, `setState` also accepts an action name:
```ts
useStore.setState({ count: 100 }, false, 'manual/setCount');
```

---

## 9. Loading / Error / Data Pattern

A standard async state shape:

```ts
interface AsyncState<T> {
  data: T | null;
  isLoading: boolean;
  error: string | null;
}
```

Components render different UI for each state:
```ts
if (isLoading) return <Spinner />;
if (error) return <Error />;
return <List data={data} />;
```

---

## File Reference

| File | Concepts |
|---|---|
| `src/store/useStore.ts` | Store creation, middleware composition (devtools + persist) |
| `src/store/counterSlice.ts` | Slice pattern, devtools action names |
| `src/store/uiSlice.ts` | Slice pattern, persisted state (theme) |
| `src/store/todosSlice.ts` | Slice pattern, async actions, loading/error/data pattern |
| `src/components/ShowCounter.tsx` | Granular selector (`s => s.count`) |
| `src/components/ShowTheme.tsx` | Granular selector (`s => s.theme`) |
| `src/components/SetCounter.tsx` | `useShallow`, `getState()`, `setState()` |
| `src/components/TodoList.tsx` | Async actions, `subscribe()` |
