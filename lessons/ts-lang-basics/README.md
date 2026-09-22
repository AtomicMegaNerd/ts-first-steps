# Typescript Language Basics

---

## Typescript Syntax

[TypeScript Everyday Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)

### Primitive Types

```ts
let n: number = 4
n = 5 // 👍 OK
n = "four" // 😬 Error!

let m: string = "Type systems matter"
m = "Dynamic typing is so 2010" // 👍 OK
m = null // 😬 Error!

// Declaring the type beforehand is also fine
let n: number
n = 42 // 👍 OK
```

<!-- prettier-ignore-->
> [!NOTE]
> All JS types are included in TS.

```ts
let missing: undefined = undefined
let nothing: null = null
```

### Literal Types

We can tell Typescript that instance of the type has to contain one of the specified values:

```ts
let state: "alive" | "dead"
state = "alive" // 👍 OK
state = "dead" // 👍 OK
state = "in-between" // 😬 Error
```

This can be useful that a value has to be even more specific.

### Typed Functions

Adding types to functions is fine

```ts
function add(a: number, b: number): number {
  return a + b
}

add(3, 4) // 7
add("oh", "no") // 😬 Error

const concat = (a: string, b: string): string => {
  return a + b
}

concat("oh ", "yeah") // oh yeah
```
