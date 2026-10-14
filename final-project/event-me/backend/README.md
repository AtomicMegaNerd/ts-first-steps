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

Could do this too:

```ts
// Can also:
export { type Id, type MyEvent, type User }
```

## Importing Types

To import types we define:

```ts
import type { MyEvent, Id, Rsvp } from "../types.ts"
```

or

```ts
import { type MyEvent, type Id, type Rsvp } from "../types.ts"
```

## Index Access Types

[Index Access Types](https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html)

This is a thing:

```ts
export interface User {
  id: number
  name: string
  username: string
  email: string
}

type UserId = User["id"] // Will be number
type UserName = User["name"] // Will be string

// You can do this:
const PrintId(userID: User["id"]) {
  console.log(userId)
}
```

## Type Assertions

[Type Assertions](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions)

If I know more about a type than TS does I can use a Type Assertion to force TypeScript to regard
the object as the specified type. These assertions are removed at compile time.

```ts
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement
```

You can only assert as a more specific type you can't use this to cast from one unrelated type to
another.

## Spread syntax `...`

[Spread Syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

[^1]: or whatever specific node version you are using.
