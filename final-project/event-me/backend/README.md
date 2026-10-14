# Backend Application TypeScript

## Initial Setup

See [../frontend/README.md] for the initial instuctions.

### Differences from front-end

We want the node-lts[^1] and node-ts extensions:

```ts
"extends": [
  "@tsconfig/recommended/tsconfig.json",
  "@tsconfig/node-lts/tsconfig.json",
  "@tsconfig/node-ts/tsconfig.json"
]
```

## DefinitelyTyped

Type definitions for many common JS libraries:

[DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped)

```bash
npm i -D @types/<packageName>
```

## Exporting Types

To be able to import types or functions in other files we have to export them.

```ts
// Use export to be able to use a type in other files
export type Id = number | string
```

## Importing Types

To import types we define:

```ts
import type { MyEvent, Id, Rsvp } from "../types.ts"
```

[^1]: or whatever specific node version you are using.
