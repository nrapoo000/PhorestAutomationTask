# Phorest Automation Task

## Overview

This project contains an automated end-to-end UI test for purchasing a €50 gift voucher using Playwright and TypeScript.

The automation follows the **Page Object Model (POM)** design pattern to improve readability, maintainability, and reusability.

---

## Technologies Used

- Playwright
- TypeScript
- Node.js

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

The test runs successfully in:

- Chromium
- Firefox
- WebKit

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Install dependencies:

```bash
npm install
```

---

## Running the Tests

Run all Playwright tests:

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

The assignment requested verification of the confirmation emails after purchase.

The UI purchase flow has been fully automated. Email verification was not implemented because the provided development environment did not provide access to a test mailbox or email testing service, making automated verification of email delivery outside the scope of the provided environment.
