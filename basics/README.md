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
  -  useEffect: Equivalent to component did mount
  -  useRef: Can make reference to DOM elements without HTML query selector like document.getElementById(..)
  -  useTransition: Can make expensive executions low priority
  -  useDeferredValue: Replication for debounce
  -  useId: To generate random ID
    
- Custom hooks: 
  - Rules:
    - Hooks inside hooks are allowed
    - Must be called inside a component. Hook will follow the generic component patterns
  - Examples:
    - useFetch
    - useForm
    - useLocalStorage

- Experimental hooks
  - use: To handle promises, contexts, etc

- Context API

- Error Boundaries

- Other terms
  - Suspense: Use with asynchorinous calls to show something like 'loading...' state. Work inside conditions and loops unlike other hooks

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