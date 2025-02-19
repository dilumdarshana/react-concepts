# React Advanced concepts

## The list
- tanstack query (tanstack will cache the rusult using queryKey parameter)
  - useQuery - no guarantee on data returned
  - useSuspenseQuery - guaranteed for data return. Compatible with react Suspense
  - useQueries - multiple queries
- tanstack table

## How to setup
```bash
# add tanstack query to the project
pnpm add @tanstack/react-query

# setup tanstack table need tailwindcss intalled first
pnpm add tailwindcss @tailwindcss/vite

# then install tanstack table
pnpm add @tanstack/react-table

```

## How to run
```bash
pnpm dev
```
