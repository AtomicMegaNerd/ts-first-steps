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
