# Client Application TypeScript

## Adding TypeScript to this Vite Front-End

```bash
npm i -D typescript # installs typescript
tsc --init # generate config
```

## Compiler Configuration

See
[Modules - Choosing Compiler Options](https://www.typescriptlang.org/docs/handbook/modules/guides/choosing-compiler-options.html)

However there is a shortcut.

## `tsconfig` Bases

These are ready made config options:

[tsconfig bases repo](https://github.com/tsconfig/bases)

### Install

```bash
npm i -D @tsconfig/recommended
npm i -D @tsconfig/vite-react
```

Add this to our `tsconfig.json` file:

```json
{
  "extends": ["@tsconfig/recommended/tsconfig.json", "@tsconfig/vite-react/tsconfig.json"]
}
```

I also had to remove the modules, target, etc. sections.

## Show Final `tsc` Config

You can show the actual active config with the following command:

```bash
tsc --showConfig | bat -l json
```

## Pointing `tsc` to Vite Types

We can add sources for additional libraries to our `tsconfig.json` config.

See [Vite Env Vars and Modes](https://vite.dev/guide/env-and-mode).

```json
{
  "types": ["vite/client"]
}
```

## `unknown` Type

[unknown type](https://www.typescriptlang.org/docs/handbook/2/functions.html#unknown)

In some instances we can use the `unknown` type instead of the `any` type.

- `any` turns off type checking.
- `unknown` says that we don't know the type _yet_. However, we have to check the actual type that
  we get back before we try to use any methods or properties on it.
- The catch variable is inferred as unknown when `useUnknownInCatchVariables` is enabled (it’s
  enabled by `strict`).

```ts
const loadEventsData = async (): Promise<MyEvent[]> => {
  try {
    const response = await fetch(`${API_URL}/events`)
    return response.json()
  }
  // `err` shows up as the `unknown` type, this is not the same as the `any` type.
  // Unlike `any` which turns off type checking, `unknown` makes us check the resulting type
  // we actually get before using it
  catch (err) {
    console.error(err)
  }
  return []
}
```

## `never` Type

[never type](https://www.typescriptlang.org/docs/handbook/2/functions.html#never)

This type represents a value that will never be obesrved.
