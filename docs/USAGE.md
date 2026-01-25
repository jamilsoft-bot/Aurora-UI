# Usage

Aurora ships as a **single CSS file** after build: `dist/styles.css`.

## Option 1: Use the built CSS directly (HTML)
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="./dist/styles.css" />
    <title>Aurora UI</title>
  </head>
  <body>
    <button class="aurora-btn">Primary button</button>
  </body>
</html>
```

## Option 2: Local development (edit demos)
```bash
npm run build:css
npm run demo
```
Then open http://localhost:5173/demos/basic/.

## Option 3: Integrate into another project
1) Copy `dist/styles.css` into your project.
2) Reference it in your HTML or via your bundler:
```js
import "./styles.css";
```

## Basic class examples
```html
<section class="aurora-card">
  <h3 class="aurora-card-title">Card title</h3>
  <p class="aurora-card-body">Cards give you a ready-made container.</p>
  <button class="aurora-btn">Action</button>
</section>
```

## Utilities
Aurora includes a few utility classes for layout and spacing:
- `.u-flex`, `.u-grid`, `.u-center`, `.u-space-between`
- `.u-gap-2`, `.u-gap-4`
- `.u-text-muted`, `.u-rounded`, `.u-shadow`
