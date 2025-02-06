# React Concepts

- Vite: To generate projet skeliton

- Router
  - React Router: To create routes and navigate between them. react-router-dom is depricated and react-router-native is best fit for mobile applications.

- Components
  - Functional components: Pure functions that receive props and return UI

- Hooks
  -  useState: Functional component state management
  -  useReducer: Functional level reducer
  -  useContext: Usage of context API
  -  useCallback: Stop rebinding functions on re render
  -  useEffect: Equivalent to component did mount. Trigger after DOM printed to the screen
  -  useLayoutEffect: This will trigger before DOM get printed to the screen
  -  useRef: Can make reference to DOM elements without HTML query selector like document.getElementById(..)
  -  useTransition: Can make expensive executions low priority
  -  useDeferredValue: Replication for debounce
  -  useMemo: To memorise the complex calculations
  -  useLayoutEffect: 
  -  useId: To generate random ID
    
- Custom hooks: 
  - Rules:
    - Hooks inside hooks are allowed
    - Must be called inside a component. Hook will follow the generic component patterns
  - Examples:
    - useFetch
    - useForm
    - useLocalStorage
    - usePrevious

- Experimental hooks
  - use: To handle promises, contexts, etc

- Context API

- Error Boundaries

- Other terms
  - Suspense: Use with asynchorinous calls to show something like 'loading...' state. Work inside conditions and loops unlike other hooks

## 3rd party utils

- react-form-hooks
  ```bash
  # adding module to the project
  pnpm add react-form-hook
  ```
  - Add zod schema validation. zod in a good combination of react-form-hooks
  ```bash
  # add zod and suported module to the project
  pnpm add zod @hookform/resolvers
  ```
  - API Doc: [Link] https://react-hook-form.com/docs

## How to run
```bash
pnpm start
```

## How to build
```bash
pnpm build
```

## Production build
```bash
serve dist
```

Demo (JS)
<a href="https://codesandbox.io/s/react-samples-latest-e0wqp">https://codesandbox.io/s/react-samples-latest-e0wqp</a>

Demo (Typescript)