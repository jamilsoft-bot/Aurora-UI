# Layout utilities

Aurora UI ships with a utility-first layout layer so you can assemble page structure without writing custom CSS. These classes are small, composable, and designed to work with Aurora tokens (spacing, breakpoints, colors).

## When to use flex vs. grid
- **Flex** is best for one-dimensional layouts (navigation bars, button rows, inline cards).
- **Grid** shines for two-dimensional layouts (card galleries, dashboards, responsive columns).

If you only need to align items along a single axis, reach for flex. If you need both rows and columns, use grid.

## Containers and breakpoints
Aurora provides standard containers and mobile-first breakpoints.

**Containers**
```html
<div class="container">...</div>
<div class="container-fluid">...</div>
<div class="container-narrow">...</div>
```

- `.container` uses responsive max-widths at `sm`, `md`, `lg`, `xl`, and `2xl`.
- `.container-fluid` stays full width.
- `.container-narrow` caps width at `60rem`.

**Breakpoints** (CSS variables from tokens)
- `sm`: `640px`
- `md`: `768px`
- `lg`: `1024px`
- `xl`: `1280px`

Use prefix classes for responsive layouts:
```html
<div class="grid grid-cols-1 md-grid-cols-2 lg-grid-cols-3">...</div>
```

## Flex utilities (examples)
**Navbar**
```html
<nav class="container">
  <div class="flex items-center justify-between gap-4">
    <strong>Aurora</strong>
    <div class="flex items-center gap-3">
      <a href="#">Docs</a>
      <a href="#">Guides</a>
      <a href="#">Blog</a>
    </div>
  </div>
</nav>
```

**Button row**
```html
<div class="flex flex-wrap gap-2">
  <button class="aurora-btn">Save</button>
  <button class="aurora-btn secondary">Cancel</button>
  <button class="aurora-btn ghost">Learn more</button>
</div>
```

**Card footer**
```html
<div class="flex items-center justify-between gap-2">
  <span class="u-text-muted">Updated 2m ago</span>
  <button class="aurora-btn sm">View</button>
</div>
```

## Grid utilities (examples)
**Responsive card grid**
```html
<div class="grid grid-cols-1 sm-grid-cols-2 lg-grid-cols-4 gap-4">
  <article class="aurora-card">Card 1</article>
  <article class="aurora-card">Card 2</article>
  <article class="aurora-card">Card 3</article>
  <article class="aurora-card">Card 4</article>
</div>
```

**3-column dashboard**
```html
<div class="grid grid-cols-1 md-grid-cols-3 gap-6">
  <section class="aurora-card">Primary</section>
  <section class="aurora-card md-col-span-2">Secondary</section>
</div>
```

## Layout patterns (beginner friendly)
These helpers are built to be copy/paste friendly and configurable with CSS variables.

### Stack
Vertical flow with adjustable gap.
```html
<div class="stack" style="--stack-gap: var(--aurora-space-6);">
  <h2>Overview</h2>
  <p class="u-text-muted">Everything you need to get started.</p>
  <button class="aurora-btn">Get started</button>
</div>
```

### Cluster
Horizontal wrap cluster with adjustable gap.
```html
<div class="cluster" style="--cluster-gap: var(--aurora-space-2);">
  <span class="aurora-badge">Design</span>
  <span class="aurora-badge">Build</span>
  <span class="aurora-badge">Launch</span>
</div>
```

### Sidebar
Two-column layout that stacks on smaller screens.
```html
<div class="sidebar" style="--sidebar-min: 12rem; --sidebar-max: 18rem;">
  <aside class="aurora-card">Sidebar content</aside>
  <section class="aurora-card">Main content</section>
</div>
```

### Center
Center content with a maximum width.
```html
<div class="center" style="--center-width: 48rem;">
  <h2>Centered content</h2>
  <p class="u-text-muted">Use for readable text blocks or marketing sections.</p>
</div>
```

## Troubleshooting
- **Items aren’t aligning**: check that the parent has `flex` or `grid` applied. Use `items-center` or `place-items-center` as needed.
- **Gaps not appearing**: ensure you are using the `gap-*` utilities on the layout container (not on children).
- **Overflow issues**: apply `overflow-hidden` or `overflow-auto` on the element that should clip or scroll.
- **Grid columns not changing on resize**: verify breakpoint prefixes like `md-grid-cols-3` and ensure your viewport is wide enough.
