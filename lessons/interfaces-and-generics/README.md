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
