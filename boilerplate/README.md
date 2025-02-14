# Sample boilerplate (Vite + Typescript)

## What included
- pnpm
- react-router 7.x
- tailwind 4.x
- playwright
- vitest
- shadcn - TBD (shadcn doesn't work well with Tailwind 4)
- path alias (@components, @pages, @)

## How setup done
- tailwind
```bash
# 1. install tailwind
pnpm install tailwindcss @tailwindcss/vite

# 2. update vite.config.ts as plugin

# 3. import tailwindcss from main css file (eg. index.css)
@import "tailwindcss";
# 4. now can use tailwindcss anywhere in the project
```
- shadcn (as of now only canary works with tailwind v4)
```bash
# 1. setup tailwindcss as above

# 2. create path alias in tsconfig.json
# {
#   "compilerOptions": {
#     "baseUrl": ".",
#     "paths": {
#       "@/*": ["./src/*"]
#     }
#   }
# }

# 3. install node types
pnpm add -D @types/node

# 4. update vite.config.ts for resolver
# resolve: {
#   alias: {
#     '@': resolve(__dirname, './src'),
#   },
# }

# 5. initialize shadcn
pnpm dlx shadcn@canary init # This will create your components.json and set up your CSS variables

# 6. add shadcn button to see everything is working. from here we can skip canary with latest
pnpm dlx shadcn@latest add button

```

- vitest
```bash
# install dependencies
pnpm install -D vitest @testing-library/react @testing-library/user-event @testing-library/jest-dom jsdom

# vitest: The test runner.
# jsdom: Simulates a browser environment.
# @testing-library/react: Helps test React components.
# @testing-library/jest-dom: Provides custom matchers for assertions.
# @testing-library/user-event: Simulates user interactions.

# create vitest.config.ts

# update vitest.config.ts file

```

## Vitest
- Vitest is a test runner. It has assertions and mocking only
- Vitest use Testing Library for DOM querying and UI rendering

## Testing Library
- screen.getByText() - will fail when text is not found
- screen.queryByText() - when it unsure eliment exists

## Usable links
- [Testing Library Cheatsheet](https://testing-library.com/docs/react-testing-library/cheatsheet/)
