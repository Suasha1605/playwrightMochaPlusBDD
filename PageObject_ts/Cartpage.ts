
import {Page,Locator} from '@playwright/test';
export class Cartpage {

    // /** @param {import('@playwright/test').Page} page */

    page:Page;
    checkout:Locator;
    constructor(page:Page) {

        this.page = page;
        this.checkout = page.locator("button:has-text('Checkout')");

    }

    async getProductLocatorInCart(productToBuy:string) {

        const itemsInCart = this.page.locator(`h3:has-text('${productToBuy}')`);
         await itemsInCart.waitFor();
         return itemsInCart;

    }

    async verifyProductPresentInCart(productToBuy:string) {


        const productInCart = await this.getProductLocatorInCart(productToBuy);
        const isItemNameInCart = await productInCart.isVisible();
        const item = await productInCart.textContent();
        console.log(` ${item} is present in the cart`);

        return isItemNameInCart;

    }

    async nevigateToCheckout() {

        await this.checkout.click();
        await this.page.waitForLoadState('networkidle');
    }


}

module.exports = { Cartpage };