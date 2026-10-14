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

[^1]: or whatever specific node version you are using.
