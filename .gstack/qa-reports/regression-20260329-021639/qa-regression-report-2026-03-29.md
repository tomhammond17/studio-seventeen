# QA Regression Report — studio-seventeen

- Date: 2026-03-29
- Mode: Regression
- Target: http://localhost:3000
- Baseline compared: `.gstack/qa-reports/baseline.json` (2026-03-29, score 81)
- Regression run: `.gstack/qa-reports/regression-20260329-021639`

## Summary
- Baseline score: **81/100**
- Current score: **94/100**
- Delta: **+13**
- Status: **DONE_WITH_CONCERNS**

## Re-tested Coverage
- Routes: `/`, `/projects`, `/about`, `/contact`
- Contact submit flow exercised with valid inputs
- Test suite executed: `npm run test -- --reporter=verbose`

## Issue Delta

### Fixed Since Baseline
1. **ISSUE-001 fixed** — CSP/`unsafe-eval` runtime errors no longer reproduced on tested routes.
- Evidence: `.gstack/qa-reports/regression-20260329-021639/console-scan.json` shows empty `errors` arrays for all route checks.

2. **ISSUE-003 fixed** — test suite now passes.
- Evidence: `25 passed (25)` and `3 passed (3 test files)` in latest `npm test` run.

### Still Open / Changed
1. **ISSUE-002 changed (partially improved)** — contact form now stays on `/contact` and shows an explicit error message, but submission still fails in this environment with 503.
- Evidence:
  - Screenshot: `.gstack/qa-reports/regression-20260329-021639/screenshots/contact-after-submit.png`
  - Console: `Failed to load resource: the server responded with a status of 503 (Service Unavailable)`
  - Scan: `contactSubmit.finalUrl = "http://localhost:3000/contact"`

## Screenshots
- Home: `.gstack/qa-reports/regression-20260329-021639/screenshots/home.png`
- Projects: `.gstack/qa-reports/regression-20260329-021639/screenshots/projects.png`
- About: `.gstack/qa-reports/regression-20260329-021639/screenshots/about.png`
- Contact: `.gstack/qa-reports/regression-20260329-021639/screenshots/contact.png`
- Contact after submit: `.gstack/qa-reports/regression-20260329-021639/screenshots/contact-after-submit.png`
- Mobile home: `.gstack/qa-reports/regression-20260329-021639/screenshots/home-mobile.png`

## Health Scoring
- Console (15%): 70
- Links (10%): 100
- Visual (10%): 100
- Functional (20%): 92
- UX (15%): 100
- Performance (10%): 100
- Content (5%): 100
- Accessibility (15%): 100

Weighted total: **94/100**

## CTO Handoff
Regression is materially improved (+13 points). Two prior blockers are resolved (CSP runtime errors and failing tests). Remaining concern is contact API returning 503 in this environment; frontend now handles it gracefully with in-form error messaging.
