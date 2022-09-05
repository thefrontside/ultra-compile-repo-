# Dynamic import reproduction repo

## to reproduce

works in `dev mode

```sh
deno task dev
```

Problem exists in production mode:

```sh
deno task build
//
// replace the first line in `./.ultra/importMap.server.json
// "./server.js": "./server.js",
// with
// "./server.tsx": "./server.js",
//
deno task start
```

This [file](./src/context/context.ts) contains the dynamic import.