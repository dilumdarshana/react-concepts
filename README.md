# React Hooks and Context API Examples

Demo
<a href="https://codesandbox.io/s/react-samples-latest-e0wqp">https://codesandbox.io/s/react-samples-latest-e0wqp</a>

Run

```bash
yarn start
```

Build
```bash
yarn build
```

Production view
```bash
serve dist
```
Note: yarn global add serve 

Used tech terms

- Vite: To generate projet skeliton

-   Hooks
    -   useState: Functional component state management
    -   useReducer: Functional level reducer
    -   useContext: Usage of context API
    -   useCallback: Stop rebinding functions on re render
    -   useEffect: Equivalent to component did mount
    -   useRef: Can make reference to DOM elements without HTML query selector like document.getElementById(..)
    -   useTransition: Can make expensive executions low priority
    -   useDeferredValue: Replication for debounce
    -   useId: To generate random ID
    
-   Custom hooks
    - useFetch
    - useForm
    - useLocalStorage

-   Experimental hooks
    - use: To handle promises, contexts, etc

-   Context API

-   Error Boundaries

-   Other terms
    - Suspense: Use with asynchorinous calls to show something like 'loading...' state. Work inside conditions and loops unlike other hooks
