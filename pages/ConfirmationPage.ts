import { Page, expect } from '@playwright/test';

export class ConfirmationPage {

    constructor(private page: Page) {}

    async verifyConfirmation() {

        await expect(
            this.page.getByText('Payment accepted, thank you!')
        ).toBeVisible();

        await expect(
            this.page.getByText('Your gift voucher code is:')
        ).toBeVisible();

        await expect(
            this.page.getByText('Your gift voucher value is:')
        ).toBeVisible();

        await expect(
            this.page.getByText('€50.00').first()
        ).toBeVisible();

    }

}