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
- `--removeComments` - Removes comments from the generated JS files.

---

## Compiler Targets

```fish
tsc --target $TARGET
```

Target is the version of JS to use as the target language. For TypeScript v7 `es2025` is the
default.

## tsconfig.json

```json
{
  // Visit https://aka.ms/tsconfig to read more about this file
  "compilerOptions": {
    // File Layout
    "rootDir": "./src",
    "outDir": "./dist",

    // Environment Settings
    // See also https://aka.ms/tsconfig/module
    "module": "nodenext",
    "target": "es2025",
    "types": [],
    // For nodejs:
    // "lib": ["esnext"],
    // "types": ["node"],
    // and npm install -D @types/node

    // Other Outputs
    "sourceMap": true,
    "declaration": true,
    "declarationMap": true,

    // Stricter Typechecking Options
    // "noUncheckedIndexedAccess": true,
    // "exactOptionalPropertyTypes": true,

    // Style Options
    "noImplicitReturns": true,
    "noImplicitOverride": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "noPropertyAccessFromIndexSignature": true,

    // Recommended Options
    "strict": true,
    "jsx": "react-jsx",
    "verbatimModuleSyntax": true,
    "isolatedModules": true,
    "noUncheckedSideEffectImports": true,
    "moduleDetection": "force",
    "skipLibCheck": true
  }
}
```
