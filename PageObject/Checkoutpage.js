
class Checkoutpage {

    /** @param {import('@playwright/test').Page} page */
    constructor(page) {

        this.page = page;
        this.countryDropdown = page.locator("[placeholder*='Country']");
        this.countryOptions = page.locator(".ta-results button");
        this.shippingEmail = page.locator('div.user__name label');
        this.placeorderButton = page.locator('a.action__submit');

    }


    async selectCountry(coutryCode,countryName) {

        await this.countryDropdown.pressSequentially(coutryCode, { delay: 100 });
        await this.page.waitForLoadState('networkidle');
        await this.countryOptions.first().waitFor();
        const countryCount = await this.countryOptions.count();
        console.log("country Count: ", countryCount);

        for (let i = 0; i < countryCount; i++) {

            const text = await this.countryOptions.nth(i).textContent();

            console.log("Country Options : ", text);

            if (text.trim() === countryName) {

                await this.countryOptions.nth(i).click();
                console.log(`Country Options ${text} is selected`);
                break;
            }
        }


    }

    async verifyShippingEmail() {

        const actualShippingEmail = await this.shippingEmail;

        return actualShippingEmail;

    }

    async placeOrder() {

        await this.placeorderButton.click();
        
    }

}

module.exports = { Checkoutpage };