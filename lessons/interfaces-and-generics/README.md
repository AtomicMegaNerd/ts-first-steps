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

// Typescript adds types to the Promise using generics (more to come)
async function asyncWave(): Promise<string> {
  return ":wave:"
}

const waveStr = wave()
const waveStr2 = await asyncWave()
```
