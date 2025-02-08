# Redux Tool Kit - RTK (Vite + Typescript)
- Simple user CRUD app

## What included
- pnpm
- react-router
- tailwind
- RTK
  - stage management
  - query
- shadcn/ui

## Steps to setup
```bash
# 1. Install dependencies
pnpm add @reduxjs/toolkit react-redux

# 2. Wrap redux provider in the entry point with store prop. main.tsx

# 3. Create a store.js in the src root.

# 4. Create slice

# Adding shadcn/ui to the project. Note, at this movement, shadcn/ui doesn't work well with
# tailwind 4.x. Therefore, we need to use tailwind 3.x until issue get resolved.
# issue: https://github.com/shadcn-ui/ui/issues/6446
pnpm dlx shadcn@latest init

# Adding Shadcn card component
pnpm dlx shadcn@latest add card
```
## Terms explained
- reducer - How to update the state. 
- slice - Group of states Reducers and Actions call slice
- dispatch - Call a action
- useSlector - Ask latest state from the store
