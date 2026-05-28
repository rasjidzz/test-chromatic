# Chromatic error demo

This demo intentionally modifies the `CoverSlide` visual style when the environment variable `VITE_CHROMATIC_ERROR_DEMO_SEED` is set.

The toggle is implemented in:

- `src/components/CoverSlide.jsx`
- `src/styles/theme.css` (`.cover-slide-regression-demo` rules)
- `visual-regression/chromatic/chromatic.strict.config.json`

## How to reproduce a failing Chromatic run

1. Ensure `CHROMATIC_PROJECT_TOKEN` is available.
2. Run baseline in strict mode:

   - `npm run chromatic:strict`

3. Run the error demo command (it generates a new seed each run):

   - `npm run chromatic:error-demo`

Expected behavior:

- Chromatic detects snapshot diffs in the `CoverSlide` story.
- Because strict mode uses `--exit-zero-on-changes=false`, the command fails (non-zero exit).