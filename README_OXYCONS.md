## Publishing to npm

Follow these steps to publish a new version of the package to the npm registry.

1. Verify `package.json`:

- Ensure `name` is correct and unique (e.g. `@your-scope/oxycons` or `oxycons`).
- Ensure `private` is `false`.
- Ensure `main`, `module`, and `types` (if TypeScript) point to the build output.
- Ensure `files` or `.npmignore` include the built `lib/` (or `dist/`) output.

2. Build the package:

```bash
pnpm build
```

3. Inspect the package contents (optional but recommended):

```bash
pnpm pack --no-install
# or inspect the tarball created in the project root
```

4. Bump the version (choose `patch`, `minor`, or `major`):

```bash
pnpm version patch
```

5. Login to npm (if not already logged in):

```bash
npm login
```

6. Publish the package:

- For a public scoped package (e.g. `@your-scope/name`):

```bash
pnpm publish --access public
```

- For an unscoped package:

```bash
pnpm publish
```

7. Verify the package on npm and test installation in a clean project:

```bash
npm i @your-scope/oxycons
# or
pnpm add @your-scope/oxycons
```

Notes:

- If your package is scoped (starts with `@`), you must publish with `--access public` to make it public.
- If `private` is `true` in `package.json`, change it to `false` before publishing.
- Make sure the build output (e.g. `lib/` or `dist/`) is included in the package using the `files` array in `package.json` or via `.npmignore`.
- If you want CI to publish automatically, set up an authenticated `NPM_TOKEN` and use `pnpm publish --no-git-checks --access public` in your pipeline.

## License

MIT © 2024 onimuxha Design
