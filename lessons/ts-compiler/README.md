# TypeScript compiler

---

## Compiler Overview

The compiler generates JavaScript code from our TypeScript code.

- The TS compiler is powerful, it has many features including type inference

---

## Inputs and Outputs

[tsc CLI Options](https://www.typescriptlang.org/docs/handbook/compiler-options.html)

```text
Typescript (.ts) -> tsc -> JavaScript (.js)
```

### Common Flags

- `--noEmit` - Do not write target JS files
- `--strict` - Enable strict mode (if not already enabled in config)
- `--checkJs` - Runs the check on vanilla JavaScript (`.js`) files (will still emit JS btw).

---
