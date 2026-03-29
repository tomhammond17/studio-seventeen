# QA Report — studio-seventeen

- Date: 2026-03-29
- Mode: Full (report-only)
- Target: http://localhost:3000
- Tester: QA Engineer (Codex)
- Duration: ~20 minutes
- Pages visited: 4 (`/`, `/projects`, `/about`, `/contact`)
- Screenshots captured: 6
- Framework: Next.js 14

## Executive Summary
- Overall health score: **81/100**
- Verdict: **DONE_WITH_CONCERNS**
- Top risk: Client-side JS runtime is blocked by CSP (`unsafe-eval`), causing page errors and breaking contact form behavior.

## Severity Summary
- Critical: 1
- High: 1
- Medium: 1
- Low: 0

## Findings

### ISSUE-001 — Client runtime blocked by CSP (`unsafe-eval` denied)
- Severity: **Critical**
- Category: Functional / Console
- Status: **Open**
- Evidence:
  - Screenshot: `.gstack/qa-reports/screenshots/home.png`
  - Screenshot: `.gstack/qa-reports/screenshots/projects.png`
  - Screenshot: `.gstack/qa-reports/screenshots/about.png`
  - Screenshot: `.gstack/qa-reports/screenshots/contact.png`
  - Console evidence: `.gstack/qa-reports/console-scan.json`
- Observed error:
  - `EvalError: Refused to evaluate a string as JavaScript because 'unsafe-eval' is not an allowed source of script in the Content Security Policy directive: "script-src 'self' 'unsafe-inline'".`
- Repro steps:
  1. Run app locally with `npm run dev`.
  2. Open `http://localhost:3000` (repeat on `/projects`, `/about`, `/contact`).
  3. Inspect browser console.
  4. Observe `EvalError` on every tested route.
- Impact:
  - Client-side script execution is constrained, causing runtime errors and breaking interactive behavior.

### ISSUE-002 — Contact form submits as URL query string instead of async API flow
- Severity: **Medium**
- Category: Functional / UX
- Status: **Open**
- Evidence:
  - Screenshot: `.gstack/qa-reports/screenshots/contact.png`
  - Screenshot: `.gstack/qa-reports/screenshots/contact-after-submit.png`
  - URL evidence after submit: `http://localhost:3000/contact?name=QA+Bot&email=qa%40example.com&subject=Smoke+test&message=Testing+contact+flow.`
- Repro steps:
  1. Go to `http://localhost:3000/contact`.
  2. Fill `Name`, `Email`, `Subject`, `Message`.
  3. Click `Send message`.
  4. Observe navigation to `/contact?...` query URL and no visible success/error state.
- Impact:
  - User message is not processed through expected async contact workflow; no clear feedback to user.

## Console Health
- Route checks with errors: 4/4
- Distinct error class: CSP `unsafe-eval` `EvalError`
- Console error details captured in `.gstack/qa-reports/console-scan.json`

## Responsive Check
- Mobile viewport (`375x812`) captured:
  - `.gstack/qa-reports/screenshots/home-mobile.png`
- No obvious layout breakage seen on homepage in mobile viewport.

## Health Score Breakdown
- Console (15%): 40
- Links (10%): 100
- Visual (10%): 100
- Functional (20%): 75
- UX (15%): 92
- Performance (10%): 100
- Content (5%): 100
- Accessibility (15%): 100

Weighted total: **81/100**

## Top 3 Things To Fix
1. Resolve CSP/client runtime conflict causing `unsafe-eval` errors on all pages.
2. Restore contact form submit workflow to API-backed async behavior with explicit success/error UI.
3. Re-run smoke QA after fixes to confirm console is clean and form flow is stable.

## CTO Handoff Summary
QA found **3 issues** (1 critical, 1 high, 1 medium). The critical issue is a CSP runtime error on all tested routes; interactive behavior is impacted. Contact form currently falls back to query-string submission with no user feedback. See screenshots and `console-scan.json` for evidence.

### ISSUE-003 — Automated test suite failing in contact API tests
- Severity: **High**
- Category: Reliability / Test
- Status: **Open**
- Evidence:
  - Command: `npm run test -- --reporter=verbose`
  - Failing assertions: `__tests__/contact-api.test.ts:52`, `:59`, `:118`
  - Related runtime line in handler: `app/api/contact/route.ts:104`
- Repro steps:
  1. Run `npm run test -- --reporter=verbose`.
  2. Observe 3 failures in `__tests__/contact-api.test.ts`.
  3. Error includes missing export in mock setup: `No "getResend" export is defined on the "@/lib/resend" mock`.
- Impact:
  - CI/test gate is red for contact API scenarios; release confidence is reduced.
