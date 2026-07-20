import { test } from '@playwright/test';
import { VoucherPage } from '../pages/VoucherPage';
import { SummaryPage } from '../pages/SummaryPage';
import { PaymentPage } from '../pages/PaymentPage';
import { ConfirmationPage } from '../pages/ConfirmationPage';

test('Purchase a €50 gift voucher', async ({ page }) => {

    const voucher = new VoucherPage(page);
    const summary = new SummaryPage(page);
    const payment = new PaymentPage(page);
    const confirmation = new ConfirmationPage(page);

    await voucher.open();
    await voucher.selectVoucher();
    await voucher.enterCustomerDetails();
    await voucher.checkout();

    await summary.verifySummary();
    await summary.confirmDetails();

    await payment.enterCardDetails();
    await payment.pay();

    await confirmation.verifyConfirmation();

});