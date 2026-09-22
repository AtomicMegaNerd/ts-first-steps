# Typescript Language Basics

---

## Typescript Syntax

This module explores basic syntax

[TypeScript Everyday Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
[Typescript Playground](https://www.typescriptlang.org/play/)

### Primitive Types

```ts
let n: number = 4
n = 5 // OK
n = "four" // Error!

let m: string = "Type systems matter"
m = "Dynamic typing is so 2010" // OK
m = null // Error!

// Declaring the type beforehand is also fine
let n: number
n = 42 // OK
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
// The variable must be one of the specified values
let state: "alive" | "dead"
state = "alive" // OK
state = "dead" // OK
state = "in-between" // Error

// Works with numbers as well
let validNumbers: 3 | 4 | 5 | 6
validNumbers = 3 // OK
validNumbers = 7 // Error

// Of course I can define the literal type as a type
type ValidErrorCodes = 200 | 201 | 204 | 400 | 401 | 403 | 404 | 500
const ok: ValidErrorCodes = 200
const created: ValidErrorCodes = 201
```

This can be useful that a value has to be even more specific.

### Typed Functions

Adding types to functions is fine

```ts
function add(a: number, b: number): number {
  return a + b
}

add(3, 4) // 7
add("oh", "no") // Error

const concat = (a: string, b: string): string => {
  return a + b
}

concat("oh ", "yeah") // oh yeah
```

---

## Arrays and Objects

### Typed Arrays

```ts
const items: number[] = [1, 2, 3]
items.push(4) // OK

const letters: string[] = "hello".split()
letters.push("!") // OK
```

### Typed Objects

This works:

```ts
let user: { name: string; id: number } // OK but use interfaces!
```

However, let's make an interface because that is the way:

```ts
interface User {
  name: string
  id: number
}

// Much better
let user: User = { name: "Chris", id: 9001 }

console.log(user)
```

Of course TS will enforce the types on the fields. Also if `strict` mode is on missing properties
are not okay.

### Optional properties

<!-- prettier-ignore-->
> [!NOTE]
> `variable?: mytype` is equivalent to `mytype | undefined`
> So it allows the variable to be undefined

#### `?.`

- Works with `null` or `undefined`
- Returns `undefined` if properties or methods in the chain do not exist

See
[Optional Chaining ?.](https://github.com/AtomicMegaNerd/js-course-v3/tree/main/control-flow#optional-chaining-)

#### `??`

-- Only considers `null` and `undefined` as falsy

See
[Nullish Coalescing](https://github.com/AtomicMegaNerd/js-course-v3/tree/main/control-flow#nullish-coalescing-)

```ts
interface User {
  name: string
  company?: string // string | undefined
  id: number
}

// This will handle either case just fine
const logUser = (u: User) => {
  console.log(u)
}

// We can declare the object without the optional field
const rcd: User = { name: "Chris", id: 9001 } // OK

let uppercase: string | undefined
// uppercase = rcd.company.toUpperCase() // Error, as the field may be undefined
uppercase = rcd.company?.toUpperCase() // OK

// Use ?? with "" to make it empty string when the property is missing
const upper: string = rcd.company?.toUpperCase() ?? "" // OK

logUser(rcd)
rcd.company = "Megaparsec Industries"
logUser(rcd)
```

---

## Union Types

```ts
let numOrStr: number | string
numOrStr = 3
numOrStr = "hello"

let x: number | null
x = 4
x = null

// ?. also works with null
let strOrNull: string | null
strOrNull = "rofl"
let upper = strOrNull?.toUpperCase()
```

<!-- prettier-ignore-->
> [!NOTE]
> Arrays with union types need parenthesis

```ts
// use parens for Arrays where the elements are union types
const items: (number | string)[] = ["1", 2, "three", 4]

for (const item of items) {
  console.log(item)
}

type StrOrNum = string | number

// Type alias also works fine
const items2: StrOrNum[] = ["1", 2, "three", 4] // use parens with union types with Arrays
for (const item of items) {
  console.log(item)
}

for (const item of items2) {
  console.log(item)
}
```
