import { Page, expect } from '@playwright/test';

export class SummaryPage {

    constructor(private page: Page) {}

    async verifySummary() {

        await expect(
            this.page.locator('#confirm-voucher-value')
        ).toHaveText('€50.00');

        await expect(
            this.page.locator('#confirm-purchaser-email')
        ).toContainText('normantest@gmail.com');
    }

    async confirmDetails() {

        await this.page
            .getByRole('button', { name: 'Confirm Details' })
            .click();

    }
}