# Phorest Automation Task

## Overview

This project contains an automated end-to-end UI test for purchasing a €50 gift voucher using Playwright and TypeScript.

The automation follows the **Page Object Model (POM)** design pattern to improve readability, maintainability, and reusability.

---

## Technologies Used

- Playwright
- TypeScript
- Node.js
- Page Object Model (POM)

---

## Project Structure

```
PhorestAutomationTask
│
├── pages
│   ├── VoucherPage.ts
│   ├── SummaryPage.ts
│   ├── PaymentPage.ts
│   └── ConfirmationPage.ts
│
├── tests
│   └── giftVoucher.spec.ts
│
├── playwright.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## Test Scenario

The automated test covers the following user journey:

- Select a €50 gift voucher
- Enter recipient details
- Verify the purchase summary
- Confirm the purchase details
- Enter payment information
- Complete the payment
- Verify the confirmation page

The test runs successfully across the following browsers:

- Chromium
- Firefox
- WebKit

---

## Installation

Clone the repository:

```bash
git clone https://github.com/nrapoo000/PhorestAutomationTask.git
```

Install dependencies:

```bash
npm install
```

---

## Running the Tests

Run all Playwright tests across Chromium, Firefox and WebKit:

```bash
npx playwright test
```

Run only the gift voucher test:

```bash
npx playwright test tests/giftVoucher.spec.ts
```

View the HTML report:

```bash
npx playwright show-report
```

---

## Notes

The assignment requested verification of the confirmation emails following a successful purchase.

The UI purchase flow has been fully automated. Email verification was not implemented because the provided development environment did not include access to a test mailbox or email testing service. If such an environment were available, the automation could be extended to validate delivery of both the gift voucher email and the purchase receipt.

---

## Observations

During repeated execution of the automated tests, intermittent behaviour was observed while exercising the demo application.

The same end-to-end test occasionally passed across all supported browsers (Chromium, Firefox and WebKit), while subsequent executions produced intermittent failures at different stages of the purchase flow (for example, the Summary page loading and Payment confirmation).

To improve the reliability of the automation, explicit synchronization was added before page interactions and assertions. The intermittent behaviour was observed during testing and may warrant further investigation.