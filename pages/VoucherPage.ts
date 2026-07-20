import { Page, expect } from '@playwright/test';

export class VoucherPage {

    constructor(private page: Page) {}

    async open() {
        await this.page.goto('https://gift-cards-dev.phorest.com/salons/automationvouchersdemo#');
    }

    async selectVoucher() {
        await this.page.getByRole('radio', { name: '€50' }).check();
        await expect(
            this.page.getByRole('radio', { name: '€50' })
        ).toBeChecked();
    }

    async enterCustomerDetails() {
        await this.page
            .getByRole('textbox', { name: 'the receipt will be sent here' })
            .fill('normantest@gmail.com');

        await this.page
            .getByRole('textbox', { name: 'first name' })
            .fill('Norman');

        await this.page
            .getByRole('textbox', { name: 'last name' })
            .fill('Norman');
    }

    async checkout() {
        await this.page
            .getByRole('button', { name: 'Checkout' })
            .click();
    }
}