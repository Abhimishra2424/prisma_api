Create Table database command
Define 
1. cmd: npx prisma migrate dev --name init 
generator
2. cmd:  npx prisma generate

Environment variables loaded from .env
Prisma schema loaded from prisma/schema.prisma

✔ Generated Prisma Client (v6.9.0) to ./generated/prisma in 59ms

Start by importing your Prisma Client (See: https://pris.ly/d/importing-client)

Tip: Interested in query caching in just a few lines of code? Try Accelerate today! https://pris.ly/tip-3-accelerate

seed
3. cmd:  npx prisma db seed

Environment variables loaded from .env
Running seed command `node --loader ts-node/esm prisma/seed.ts` ...
(node:13688) ExperimentalWarning: `--experimental-loader` may be removed in the future; instead use `register()`:
--import 'data:text/javascript,import { register } from "node:module"; import { pathToFileURL } from "node:url"; register("ts-node/esm", pathToFileURL("./"));'
(Use `node --trace-warnings ...` to show where the warning was created)

🌱  The seed command has been executed.