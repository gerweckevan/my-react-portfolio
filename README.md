# :heart: React + Tailwind CSS + Glassmorphism

This project uses Tailwind CSS to design a glassmorphism based portfolio website.

:point_right: [CLICK HERE TO SEE IN YOUR BROWSER]() :point_left:

<img src="./images/Website.png" alt="An image of the website" />

- Project: React + TypeScript + Tailwind CSS (CRACO)
- Key folders: `src/` (App, Components, Services, @types)
- Build: uses `craco` scripts defined in `package.json` (`yarn start` / `npm start` -> `craco start`).

# What you need to know up-front

- TypeScript: `tsconfig.json` sets `baseUrl: "."` and `typeRoots` to include `./src/@types`. Imports like `src/Services` use absolute paths from project root.
- Global types: `src/@types/models.d.ts` defines a `namespace App` with `GithubUser` used across components. Prefer those types for consistency.
- API surface: `src/Services/GithubAPI.ts` exports a configured Axios instance (baseURL: `https://api.github.com`). Use it for any GitHub requests to maintain consistent headers/config.

# Code patterns and conventions

- React components are functional and typed (React.FC). Props are defined as explicit interfaces (see `src/Components/KnowledgeLevel.tsx`). Follow the same style for new components.
- Styling uses Tailwind utility classes and a small amount of inline style for `backdropFilter`. Prefer Tailwind classes; only add inline styles when replicating the glassmorphism blur usage.
- Custom hooks: data fetching is implemented via hooks (example: `src/App/useFetchGithubUser.ts`) which return loading flags and typed data. Mirror this pattern when adding asynchronous data access.
- Central exports: `src/Components/index.ts` re-exports components. Add new components to that index for easy imports elsewhere.

# Build, run, test workflow (explicit)

- Install: use the repository's package manager (the project uses yarn in scripts, but npm is compatible). Example:
  - `yarn install` or `npm install`
- Start dev server: `yarn start` (runs `craco start`). On Windows PowerShell use the same commands.
- Build for production: `yarn build` (runs `craco build`). The `predeploy`/`deploy` scripts use `gh-pages` to publish the `build` folder.
- Tests: `yarn test` (runs `craco test`). There are no repository-specific test helpers beyond CRA testing libs.

# Editing and imports guidance

- Prefer absolute imports that begin with `src/` (e.g. `import { GitHubAPI } from 'src/Services'`) because `tsconfig.baseUrl` is `.` and many files already use that style.
- When adding new types for shared use, place them under `src/@types` and update `typeRoots` only if necessary. Use the existing `App` namespace for related GitHub user types.

# Examples to reference when changing behavior

- Fetching GitHub user:

  - Hook: `src/App/useFetchGithubUser.ts` — uses `useLayoutEffect`, Axios via `GitHubAPI`, returns `{ isLoading, userData }`.
  - Service: `src/Services/GithubAPI.ts` — Axios instance with `baseURL`.

- Component pattern: `src/Components/KnowledgeLevel.tsx` — small presentational component using explicit props interface and Tailwind classes.

# Safety and tests

- Keep changes small and localized. When changing shared types (in `src/@types`), update all usages (search for `App.GithubUser`).
- If you modify any import paths, run the TypeScript compiler or `yarn start` to surface path/type errors.

# When to ask for human review

- Introduce or change runtime behavior (networking, environment variables).
- Modify publishing or CI scripts (gh-pages, craco config).

# Quick checklist for edits

- Use `src/` absolute import style.
- Add component to `src/Components/index.ts` if it should be publicly imported.
- Add shared types under `src/@types` if needed.
- Run `yarn start` or `yarn build` to verify no compile/runtime errors.

---

If any part of the repo's runtime environment (node/yarn version, CRACO plugins, or CI) is needed and not present in this file, ask the repo maintainer for those specifics before making large changes.

## :man: Author

Evan Gerweck| [Follow me on Linkedin](https://www.linkedin.com/in/evan-gerweck-8b95b9199/)

