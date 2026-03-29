# QA Quick Smoke — studio-seventeen

- Date: 2026-03-29
- Mode: Quick
- Target: http://localhost:3000
- Run dir: `.gstack/qa-reports/quick-20260329-041959`
- Status: **DONE_WITH_CONCERNS**

## Scope Covered
- Homepage (`/`)
- Top-nav targets (`/projects`, `/about`, `/contact`)
- Contact submit smoke flow

## Results
- Route availability: 4/4 returned HTTP 200
- Console/page errors on route load: none
- Contact submit: fails with API 503 and visible in-form error message

## Evidence
- Scan JSON: `.gstack/qa-reports/quick-20260329-041959/quick-scan.json`
- Contact submit screenshot: `.gstack/qa-reports/quick-20260329-041959/screenshots/contact-after-submit.png`

## CTO Handoff
Smoke test passes for navigation and page load behavior. Remaining bug is environment/backend readiness for contact submission: `/api/contact` returns 503 due missing `RESEND_API_KEY`.
