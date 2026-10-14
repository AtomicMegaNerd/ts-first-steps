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
