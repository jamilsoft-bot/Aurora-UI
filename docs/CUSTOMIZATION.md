# Customization

Aurora is designed around **CSS custom properties** (tokens). You can theme the system by overriding variables.

## Where to edit tokens
- `packages/tokens/tokens.css`
  - Colors, spacing, radii, shadows, typography, and motion variables.

Example:
```css
:root {
  --aurora-color-primary: #6d28d9;
  --aurora-radius-md: 0.75rem;
}
```

## Where to edit components
- `packages/core/src/aurora.css`
  - Buttons, inputs, cards, modals, tables, alerts, etc.

## Rebuild after changes
```bash
npm run build:css
```

## Add your own styles
You can append your own CSS after Aurora:
```html
<link rel="stylesheet" href="./dist/styles.css" />
<link rel="stylesheet" href="./my-app.css" />
```
