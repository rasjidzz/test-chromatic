# Chromatic integration

This folder contains Chromatic-specific configuration for visual regression testing of Storybook.

## Files

- `chromatic.config.json`: shared Chromatic CLI settings used by `npm run chromatic`.
- `chromatic.strict.config.json`: strict settings for demos/CI checks where visual diffs must fail the command.

## Required environment variable

- `CHROMATIC_PROJECT_TOKEN`: Chromatic project token generated from your Chromatic dashboard.

## Local run

Use the root project script:

`npm run chromatic`

### Simulate a Chromatic failure when design changes

To demonstrate Chromatic failing on UI changes, this project includes two scripts:

- `npm run chromatic:strict`: normal snapshots, but fails when changes are detected.
- `npm run chromatic:error-demo`: injects a time-based visual change seed via `VITE_CHROMATIC_ERROR_DEMO_SEED=$(date +%s)` and runs strict mode.

Recommended flow:

1. Run `npm run chromatic:strict` once to establish/confirm baseline.
2. Run `npm run chromatic:error-demo`.
3. Chromatic should report visual changes and exit with a non-zero status in strict mode (no auto-accept).

## CI usage

For GitHub Actions, store `CHROMATIC_PROJECT_TOKEN` in repository secrets and use the workflow template at `.github/workflows/chromatic.yml`.