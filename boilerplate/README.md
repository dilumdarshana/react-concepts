# Sample boilerplate (Vite + Typescript)

## What included
- pnpm
- react-router 7.x
- tailwind 4.x
- playwright
- vitest
- shadcn - TBD (shadcn doesn't work well with Tailwind 4)

## How setup done
```bash
# install vitest depencies
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
