# Troubleshooting

## npm install fails
- Ensure Node.js 18+ is installed.
- Run:
  ```bash
  node -v
  npm -v
  ```

## `npm run build:css` fails
- Make sure dependencies are installed (`npm install`).
- Delete `node_modules` and reinstall if needed:
  ```bash
  rm -rf node_modules
  npm install
  ```

## `dist/styles.css` is missing
- Run:
  ```bash
  npm run build:css
  ```
- Ensure the `dist/` folder exists in the repo root.

## Demo server doesn’t load
- Start the server again:
  ```bash
  npm run demo
  ```
- Open http://localhost:5173/demos/basic/ in your browser.

## FAQ
**Q: Do I need a bundler?**
A: No. You can use the built CSS directly in HTML.

**Q: Can I customize colors?**
A: Yes—edit `packages/tokens/tokens.css` and rebuild.

**Q: Why do buttons look unstyled?**
A: Ensure the CSS file is loaded and the element uses Aurora classes like `aurora-btn`.
