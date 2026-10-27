# Contributing to PaperPic

Thanks for your interest in contributing. This guide covers how to set up the project and what a pull request needs.

## Before you start

- Report bugs and request features in [issues](https://github.com/paperpic/paperpic/issues/new/choose).
- Ask questions in [Discussions](https://github.com/paperpic/paperpic/discussions).
- Report security problems privately, never in a public issue. See the [security policy](SECURITY.md).
- For larger changes, open an issue first so we can agree on the approach.
- By taking part in this project you agree to follow the [code of conduct](CODE_OF_CONDUCT.md).

## Setup

You need Node.js 26 and pnpm 12. Other Node.js versions fail at install time.

```sh
git clone https://github.com/<your-user>/paperpic.git
cd paperpic
pnpm install
```

`pnpm install` also sets up the git hooks.

## Project structure

| Path            | Contents                                              |
| --------------- | ----------------------------------------------------- |
| `packages/core` | `@paperpic/core`: framework-agnostic image processing |
| `packages/vue`  | `@paperpic/vue`: Vue 3 components                     |
| `apps/docs`     | Documentation site, built with VitePress              |

## Scripts

| Command          | What it does                                      |
| ---------------- | ------------------------------------------------- |
| `pnpm dev`       | Starts the docs site                              |
| `pnpm test`      | Runs all tests (`pnpm test:watch` for watch mode) |
| `pnpm typecheck` | Type-checks every package                         |
| `pnpm lint`      | Runs ESLint and Stylelint                         |
| `pnpm lint:fix`  | Fixes lint and formatting problems                |
| `pnpm build`     | Builds every package                              |

CI runs lint, typecheck, test and build on every pull request.

## Making changes

1. Create a branch from `development`.
   If you push to this repository instead of a fork, the branch name must start with a type, such as `feat/zoom-controls` or `fix/rotation-angle`.
2. Commit using [Conventional Commits](https://www.conventionalcommits.org/), for example `feat(vue): add zoom controls`.
   - Types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`.
   - Optional scopes: `core`, `vue`, `docs`.
   - A git hook checks each commit message, and another one fixes lint problems in staged files.
3. If your change affects `@paperpic/core` or `@paperpic/vue`, add a changeset:

   ```sh
   pnpm changeset
   ```

   Pick the bump type and write a short summary for the changelog. Changes to docs, tests or tooling do not need one.

4. Open a pull request against `development`.

## Pull requests

- The title must follow Conventional Commits, and its subject must not start with an uppercase letter. A check validates it.
- Pull requests are squash merged, so the title becomes the commit message in `development`.
- All checks must pass and all review threads must be resolved before merging.
