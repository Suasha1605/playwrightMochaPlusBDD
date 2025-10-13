import {Locator, Page} from '@playwright/test';
export class Checkoutpage {

    page: Page;
    countryDropdown: Locator;
    countryOptions: Locator;
    shippingEmail: Locator;
    placeorderButton: Locator;
    // /** @param {import('@playwright/test').Page} page */
    constructor(page:Page) {

        this.page = page;
        this.countryDropdown = page.locator("[placeholder*='Country']");
        this.countryOptions = page.locator(".ta-results button");
        this.shippingEmail = page.locator('div.user__name label');
        this.placeorderButton = page.locator('a.action__submit');

    }


    async selectCountry(coutryCode:string,countryName:string) {

        await this.countryDropdown.pressSequentially(coutryCode, { delay: 100 });
        await this.page.waitForLoadState('networkidle');
        await this.countryOptions.first().waitFor();
        const countryCount = await this.countryOptions.count();
        console.log("country Count: ", countryCount);

        for (let i = 0; i < countryCount; i++) {
            let text: any;
            text = await this.countryOptions.nth(i).textContent();

            console.log("Country Options : ", text);

            if (text.trim() === countryName) {

                await this.countryOptions.nth(i).click();
                console.log(`Country Options ${text} is selected`);
                break;
            }
        }


    }

    async verifyShippingEmail() {

        const actualShippingEmail = this.shippingEmail;

        return actualShippingEmail;

    }

    async placeOrder() {

        await this.placeorderButton.click();
        
    }

}

module.exports = { Checkoutpage };