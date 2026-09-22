# TypeScript: From First Steps to Professional

This is a course on [Masters.dev](https://master.dev/courses/typescript-first-steps/) (formerly
known as Front-End Masters).

- [Course Website](https://anjana.dev/typescript-first-steps)
- [Course Repo](https://github.com/vakila/typescript-first-steps)
- [Intro Slides](https://anjana.dev/typescript-first-steps/0-intro/slides)

## TypeScript Playground

[TypeScript Playground](https://www.typescriptlang.org/play/)

## Running TypeScript in Node

Depending on the version of Node being used, the `tsx` tool may be needed.

<!-- prettier-ignore -->
> [!NOTE]
> The tool `tsx` is not to confused with `.tsx` files from React + TypeScript

This app `tsx` runs TypeScript code in Node.js:

[tsx on GitHub](https://github.com/privatenumber/tsx)

```fish
tsx $PATH_TO_TS_SRC
```

To re-run each time the file is modified:

```fish
tsx --watch $PATH_TO_TS_SRC
```

<!-- prettier-ignore -->
> [!WARNING]
> `tsx` does not do the type checking that `tsc` does.
