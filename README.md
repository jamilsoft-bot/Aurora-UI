# Aurora Design System

Aurora is a lightweight, framework-agnostic CSS design system with polished defaults, reusable components, and practical utilities. It provides ready-to-use styling for common UI patterns (buttons, forms, cards, navigation, alerts, modals, tables, etc.) so you can move from idea to interface quickly without wiring up a complex build toolchain.

**Who it’s for:** beginners and teams who want a clean UI baseline, design tokens for themeable styling, and a simple HTML-first workflow that can also integrate into any JavaScript app.

## What’s inside
- **Design tokens** (`@aurora/tokens`): theme variables for color, spacing, radii, typography, etc.
- **Core CSS** (`@aurora/core`): component styles, base reset, and utilities.
- **Demos** (`demos/`): beginner-friendly HTML samples.
- **Docs** (`docs/`): step-by-step guides.

## Quick start (3–5 minutes)
> This gets you a compiled CSS file in `dist/` and a demo you can open in the browser.

### 1) Prerequisites
- **Node.js 18+** (works with Node 20/22 too)
- **npm** (bundled with Node)

### 2) Install dependencies
```bash
npm install
```

### 3) Build the production CSS
```bash
npm run build:css
```
This generates a single distributable CSS file at:
- `dist/styles.css`

### 4) View a demo (no-build)
Open the demo HTML file directly in your browser:
- `demos/basic/index.html`

### 5) Optional: run a local demo server
```bash
npm run demo
```
Then open:
- http://localhost:5173/demos/basic/

## Usage options
### 1) Use the built CSS directly
```html
<link rel="stylesheet" href="./dist/styles.css" />
```

### 2) Develop locally
```bash
npm run build:css
npm run demo
```
Edit demo HTML in `demos/` and refresh the browser.

### 3) Integrate into another project
Copy `dist/styles.css` into your project or use it as a static asset and include it in your HTML. You can also import it via your bundler if desired:
```js
import "./styles.css";
```

## Customization (tokens + components)
- **Theme tokens:** edit `packages/tokens/tokens.css` to adjust colors, spacing, typography, radii, or shadows.
- **Core components:** edit `packages/core/src/aurora.css` to change component styling.
- **Rebuild after changes:**
  ```bash
  npm run build:css
  ```

## File/folder map
- `dist/` — production CSS output (`styles.css`)
- `packages/tokens/` — token definitions and generator
- `packages/core/` — component CSS source
- `demos/` — runnable demo HTML files
- `docs/` — detailed guides

## Learn more
Start with the documentation index:
- `docs/INDEX.md`

## Contributing
See `docs/BUILD.md` and `docs/TROUBLESHOOTING.md` for build and troubleshooting guidance.

---

### Package list (monorepo)
- `@aurora/tokens`: Design tokens and theming primitives.
- `@aurora/core`: Precompiled CSS layers, component styles, and base layout.
- `@aurora/utils`: Aurora-flavored utility classes.
- `@aurora/react`: React component library (hybrid headless/styled).
- `@aurora/docs`: Docs site + Storybook.
