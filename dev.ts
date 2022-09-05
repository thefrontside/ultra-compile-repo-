#!/usr/bin/env -S deno run -A --watch=server/,graphql/

import { main } from "./src/server/server.ts";

await main();
