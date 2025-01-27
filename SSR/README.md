# Express based SSR demo

## How to start
```bash
pnpm install

pnpm dev
```

## Switch between streaming and non-streaming mode
```
# Streaming mode - change the package.json dev command to
"dev": "node server_stream --watch",

# Non-streaming mode - change the package.json dev command to
"dev": "node server --watch",
```