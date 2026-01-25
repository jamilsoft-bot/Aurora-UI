# Build Guide

This project builds a **single compiled CSS file** using the existing monorepo packages.

## One-command build
```bash
npm run build:css
```

What this does:
1) Builds tokens (`packages/tokens`) to generate CSS variables.
2) Builds core CSS (`packages/core`).
3) Concatenates both into `dist/styles.css`.

## Output
- `dist/styles.css`

## Optional: rebuild + serve demos
```bash
npm run demo:build
```
This builds the CSS and launches a small static server for `demos/`.

## Contribution guide (simple)
1) Create a branch for your work.
2) Make changes and rebuild CSS if needed:
   ```bash
   npm run build:css
   ```
3) Run lint/format if you touch packages that include them:
   ```bash
   npm run lint
   npm run format
   ```
4) Open a PR with a clear summary and screenshots if UI changes are visible.
