# Redux Tool Kit - RTK (Vite + Typescript)

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

# Adding shadcn/ui to the project
npx shadcn-ui@latest init
```
## Terms explained
- reducer - How to update the state. 
- slice - Group of states Reducers and Actions call slice
- dispatch - Call a action
- useSlector - Ask latest state from the store
