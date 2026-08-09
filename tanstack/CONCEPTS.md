# TanStack Concepts

This project demonstrates the core TanStack libraries — Query, Router, and Table — with React 19.

---

## 1. Why TanStack Query

React has no built-in way to manage **server state** (data that lives on a backend). `useState` + `useEffect` re-fetches on every mount, has no caching, and causes duplicate requests for the same data.

TanStack Query solves this by treating server data as a **cache**:

- **Caching** — fetched data is stored in a global cache keyed by `queryKey`
- **Deduplication** — multiple components requesting the same key share one request
- **Background refetch** — data is refreshed silently when it becomes stale
- **Retry / error handling** — failed requests are retried with backoff
- **Garbage collection** — unused cache entries are cleaned up after `gcTime`

```ts
const { data, isPending, error } = useQuery({
  queryKey: ['todos'],
  queryFn: fetchTodos,
});
```

---

## 2. Query Keys and Query Functions

Every query needs two things:

- **`queryKey`** — a unique identifier (array). The cache stores data under this key. Keys are **serialized**, so `['todos', { page: 1 }]` and `['todos', { page: 2 }]` are different entries.
- **`queryFn`** — the async function that returns data. It receives a context with `queryKey`, `signal` (for cancellation), and `pageParam` (for infinite queries).

```ts
useQuery({
  queryKey: ['todos', page],
  queryFn: () => fetchTodos(page),
});
```

---

## 3. Cache Lifecycle: `staleTime` vs `gcTime`

| Option | Default | Meaning |
|--------|---------|---------|
| `staleTime` | `0` | How long data is considered **fresh**. Fresh data is never refetched. |
| `gcTime` | `5 min` | How long unused data stays in the cache before being garbage collected. |

- `staleTime` controls **when** a refetch happens (on mount, on window focus, etc.)
- `gcTime` controls **how long** the cache entry survives after no observer is using it

```ts
useQuery({
  queryKey: ['todos'],
  queryFn: fetchTodos,
  staleTime: 30_000, // fresh for 30s, no refetch during that window
  gcTime: 60_000,    // keep unused data for 1 min
});
```

---

## 4. `isPending` vs `isFetching`

These two flags are often confused:

- **`isPending`** — no cached data exists yet (first load). Use it for the initial loading state.
- **`isFetching`** — a request is in flight, **including background refetches**. Use it for subtle "refreshing" indicators.

A query can be `isFetching: true` while `isPending: false` (background refetch of cached data).

---

## 5. `placeholderData` / `keepPreviousData`

When the `queryKey` changes (e.g. pagination), the default behavior is to show the loading state and drop the old data. `placeholderData` keeps the UI responsive:

```ts
import { keepPreviousData } from '@tanstack/react-query';

useQuery({
  queryKey: ['todos', page],
  queryFn: () => fetchTodos(page),
  placeholderData: keepPreviousData, // show previous page's data while fetching the next
});
```

---

## 6. `queryOptions` Factories

Instead of scattering `queryKey`/`queryFn` across components, define them once in a factory (`src/queryOptions/`):

```ts
// src/queryOptions/createTodoQueryOptions.ts
export default function createTodoQueryOptions() {
  return {
    queryKey: ['todos'],
    queryFn: getTodos,
    placeholderData: keepPreviousData,
  };
}
```

```ts
const { data } = useQuery({ ...createTodoQueryOptions(), enabled: true });
```

This keeps keys consistent, makes options reusable, and centralizes fetch logic.

---

## 7. `useQueries` — Multiple Queries

Fetch several queries at once, either **synchronously** (all defined up front) or **asynchronously** (built from data of another query):

```ts
// Sync: fixed set of queries
const results = useQueries({
  queries: [createTodoQueryOptions(), createUserQueryOptions()],
});

// Async: queries depend on previously fetched data
const results = useQueries({
  queries: (data) => data.map((item) => createCommentsQueryOptions(item.id)),
});
```

---

## 8. `useSuspenseQuery`

Suspense-compatible fetching. Instead of returning `isPending`, it **throws** while loading, letting a `<Suspense>` boundary render the fallback. `data` is guaranteed to exist when the component renders.

```ts
const { data } = useSuspenseQuery(createTodoQueryOptions());
// no isPending branch needed — data is always defined
```

---

## 9. `useMutation` — Writing Data

Mutations handle **side effects** (POST/PUT/DELETE). Unlike queries, they are not cached and must be triggered manually via `mutate`.

Key callbacks:

- **`onMutate`** — run before the request (start optimistic updates)
- **`onSuccess`** — after success (invalidate related queries)
- **`onError`** — roll back optimistic changes
- **`onSettled`** — always runs (invalidate to resync with server)

```ts
const addTodo = useMutation({
  mutationFn: (title) => postTodo(title),
  onSuccess: () => queryClient.invalidateQueries({ queryKey: ['todos'] }),
});
```

### Optimistic Updates

Update the cache **before** the server responds, then roll back on error:

```ts
const deleteTodo = useMutation({
  mutationFn: (id) => deleteTodo(id),
  onMutate: async (id) => {
    await queryClient.cancelQueries({ queryKey: ['todos'] });
    const previous = queryClient.getQueryData(['todos']);
    queryClient.setQueryData(['todos'], (old) => old.filter((t) => t.id !== id));
    return { previous }; // snapshot for rollback
  },
  onError: (_err, _id, context) => {
    queryClient.setQueryData(['todos'], context.previous);
  },
  onSettled: () => queryClient.invalidateQueries({ queryKey: ['todos'] }),
});
```

---

## 10. `useInfiniteQuery` — Pagination / Infinite Scroll

Fetches pages of data. `getNextPageParam` derives the next page from the last one; returning `undefined` stops pagination.

```ts
const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
  queryKey: ['todos', 'infinite'],
  queryFn: ({ pageParam }) => fetchTodosPage(pageParam),
  initialPageParam: 1,
  getNextPageParam: (lastPage) => lastPage.nextPage,
});
```

`data.pages` is an array of pages — flatten it when rendering.

---

## 11. `useQueryClient` — Imperative Cache Access

The query client is the cache manager. Use it outside hooks for:

- **`prefetchQuery`** — fetch data before it's needed (e.g. on hover/navigation)
- **`setQueryData`** — write directly into the cache without a network request
- **`removeQueries`** — drop a query from the cache
- **`invalidateQueries`** — mark queries stale and refetch them
- **`cancelQueries`** — cancel in-flight requests (used in optimistic updates)

```ts
const queryClient = useQueryClient();
await queryClient.prefetchQuery(createTodoQueryOptions());
queryClient.setQueryData(['todos'], (old) => [...old, newTodo]);
queryClient.removeQueries({ queryKey: ['todos'] });
```

---

## 12. `useIsFetching` / `useIsMutating`

Global counters for all in-flight requests across the app:

```ts
const isFetching = useIsFetching(); // number of queries fetching
const isMutating = useIsMutating(); // number of mutations running
```

Useful for global loading bars or disabling actions while any request is active.

---

## 13. TanStack Router

File-based routing: each file in `src/routes/` becomes a route.

```ts
// src/routes/useQuery.tsx
export const Route = createFileRoute('/useQuery')({
  component: UseQuery,
});
```

- `src/routes/__root.tsx` — root layout (sidebar nav + footer)
- `src/routeTree.gen.ts` — auto-generated route tree (**never edit manually**)
- `<Link to="/...">` — type-safe navigation

---

## 14. TanStack Table v9

Headless table library: it manages state and models, you own the markup.

### Features

v9 uses `useTable` with **explicit feature registration** via `tableFeatures`. Only the features you use are included (tree-shakeable):

```ts
const features = tableFeatures({
  columnFilteringFeature,
  globalFilteringFeature,
  rowSortingFeature,
  rowPaginationFeature,
  sortedRowModel: createSortedRowModel(),
  filteredRowModel: createFilteredRowModel(),
  paginatedRowModel: createPaginatedRowModel(),
});
```

### Columns

`createColumnHelper` is typed with the features and the row data type:

```ts
const columnHelper = createColumnHelper<typeof features, UserType>();
const columns = columnHelper.columns([
  columnHelper.accessor('name', { header: 'Name', cell: (info) => info.getValue() }),
]);
```

### Rendering

`table.FlexRender` renders header/cell templates with the correct context:

```tsx
{header.isPlaceholder ? null : <table.FlexRender header={header} />}
{row.getAllCells().map((cell) => <table.FlexRender cell={cell} key={cell.id} />)}
```

### State

State is controlled via `state` + `on*Change` callbacks, and read from `table.state`:

```ts
const table = useTable({
  features,
  data,
  columns,
  state: { sorting, globalFilter, pagination },
  onSortingChange: setSorting,
  onGlobalFilterChange: setGlobalFilter,
  onPaginationChange: setPagination,
});
```

### Manual (server-side) pagination

Set `manualPagination: true` and provide `rowCount`; the table only manages state while you fetch each page from the server.

---

## 15. Project Structure

| Path | Purpose |
|------|---------|
| `src/routes/` | One file per route (Query demos, Table demos) |
| `src/queryOptions/` | Reusable `queryOptions` factories |
| `src/components/` | Shared UI (`LeftMenu`, `TodoList`, `UserList`) |
| `src/main.tsx` | `QueryClientProvider` + router setup |