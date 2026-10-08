# Interfaces and Generics

## Interfaces

[TypeScript Interfaces](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#interfaces)

### Extending Interfaces

<!-- prettier-ignore -->
> [!NOTE]
> I wonder if extends is frowned upon these days as being too OOP?

Interfaces can be extended...

```ts
interface User {
  username: string
  id: number
}

interface Human extends User {
  fullname: string
}

interface AiAgent extends User {
  modelName: string
}

const batman: Human = {
  username: "batman",
  id: 12391,
  fullname: "Bruce Wayne",
}

const claude: AiAgent = {
  username: "claude",
  id: 33191,
  modelName: "Claude Sonnet 5.5",
}
```

### Adding Types to Promises

```ts
function wave(): string {
  return ":wave:"
}

// Typescript adds string as a generic type parameter to the Promise (more to come)
async function asyncWave(): Promise<string> {
  return ":wave:"
}

const waveStr = wave()
const waveStr2 = await asyncWave()
```

## Generics

See [Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html)

This is pretty straightforward:

```ts
// T is the type variable
type Nullable<T> = T | null

interface User {
  username: string
  id: number
}

let x: Nullable<number> = 4
let y: Nullable<string> = null
let z: Nullable<string> = "hello"
let obj: Nullable<User> = { username: "Chris", id: 4 }
// Object literals are fine, wow
let wow: Nullable<{ name: string }> = null

console.log(x)
console.log(y)
console.log(z)
console.log(obj)
```

### Utility Types

Typescript has a bunch of utility types that are generic.

[Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.html)

#### `Readonly<T>`

Makes the objects fields immutable (shallow though does not nest).

```ts
interface User {
  username: string
  id: number
}

const fixed: Readonly<User> = { username: "rcd", id: 3 }
fixed.username = "amn" // NOT OK, this object is Read Only
```

This is shorthand for:

```ts
interface User {
  readonly username: string
  readonly id: number
}
```

<!-- prettier-ignore -->
> [!NOTE]
> `Readonly<T>` and `readonly` for fields are shallow. They don't nest the read only to fields
> of nested types.

Great! We can make immutable data structures in Typescript, nice!

#### `Partial<T>`

Partial makes all properties in an object optional:

```ts
interface User {
  username: string
  id: number
}

// Partial<User> is equivalent to User2
interface User2 {
  username?: string
  id?: number
}

const rcd: Partial<User> = { username: "rcd" }
const idOnly: Partial<User> = { id: 3 }

console.log(rcd)
console.log(idOnly)
```

#### `Pick<T>`

This lets you create a new type from the selected fields of the passed in type variable:

```ts
interface Todo {
  title: string
  description: string
  completed: boolean
}

// Use a union to define which fields to include
type TodoPreview = Pick<Todo, "title" | "completed">

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
}

todo
```

#### `Omit<T>`

This lets you create a new type leaving out the specified properties from the passed in type
variable:

```ts
interface Todo {
  title: string
  description: string
  completed: boolean
  createdAt: number
}

type TodoPreview = Omit<Todo, "description">

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
  createdAt: 1615544252770,
}

todo

// Again we can use a union type for multiple fields
type TodoInfo = Omit<Todo, "completed" | "createdAt">

const todoInfo: TodoInfo = {
  title: "Pick up kids",
  description: "Kindergarten closes at 5pm",
}

todoInfo
```

## `any` TYpe and `@ts-ignore`

This let's use re-assign any type to a variable like we are in JS:

```ts
let roflsauce: any = "whatever"
roflsauce = 5
roflsauce.toUpperCase() // Runtime error, TS can no longer help us
```

### `noImplicitAny`

When this option is enabled we don't let Typescript fall back to `any` when it cannot infer the type
of a parameter to a function:

```ts
// Error if noImplicitAny is enabled
function fn(s) {
  console.log(s.subtr(3))
}
fn(42)
```

You can still use an explicit `any`.

### `@ts-ignore`

This tells the compiler to ignore all type errors on the next line:

```ts
// @ts-ignore
function fn(s) {
  console.log(s.subtr(3))
}
```

### Type-Checking Dev Workflow

Often you may want to to a test like this:

```json
{
  "scripts": {
    "test": "tsc --noEmit & vitest"
  }
}
```

#### Notes

- In Node `package.json` the `&` means the first command has to succeed before the second is
  executed. So if `tsc` is not happy `vitest` does not run.
- As a reminder, `--noEmit` runs the compiler to check the types but it doesn't generate target `js`
  files.
- `tsc --watch` is an option but as of TypeScript 7.0 `tsc` is also an LSP which is even better.

### `keyof` Operator

<!-- prettier-ignore -->
> [!NOTE]
> Each item in a union type in TS is usually called a `key` or a `union member`.

[keyof operator](https://www.typescriptlang.org/docs/handbook/2/keyof-types.html)

The `keyof` operator applied to a type `T` returns a union were each key is the name of a property.
Because JavaScript is weird the names can be `string`, `number`, or a `symbol`.

```ts
interface Place {
  id: number
  location: string
  latitude: number
  longtitude: number
}

// placeProps = "id" | "location" | "latitude" | "longtitude"
type placeProps = keyof Place

// These are the name of the properties
const idProp: placeProps = "id"
const locationProp: placeProps = "location"
console.log(idProp) // 'id'
console.log(locationProp) // 'location'

// Concrete instance
const place: Place = {
  id: 129946109,
  location: "HappyRoflLand",
  latitude: 48.992,
  longtitude: 89.112,
}

// these are the values of the properties
const idVal = place[idProp]
const locationVal = place[locationProp]
console.log(idVal) // 129946109
console.log(locationVal) // "HappyRoflLand
```

There is more to it if you want to get more advanced. See the link above.
