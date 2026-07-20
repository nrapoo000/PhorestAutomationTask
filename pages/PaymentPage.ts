import { Page } from '@playwright/test';

export class PaymentPage {

    constructor(private page: Page) {}

    async enterCardDetails() {

        const stripeFrame = this.page.frameLocator(
            'iframe[title="Secure card payment input frame"]'
        );

        await stripeFrame
            .getByRole('textbox', {
                name: 'Credit or debit card number'
            })
            .fill('4111111111111111');

        await stripeFrame
            .getByRole('textbox', {
                name: 'Credit or debit card expiration date'
            })
            .fill('1226');

        await stripeFrame
            .getByRole('textbox', {
                name: 'Credit or debit card CVC/CVV'
            })
            .fill('999');
    }

    async pay() {

        await this.page
            .getByRole('button', { name: 'Pay' })
            .click();

    }
}