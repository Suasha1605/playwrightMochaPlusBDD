class Cartpage {

    /** @param {import('@playwright/test').Page} page */
    constructor(page) {

        this.page = page;
        this.checkout = page.locator("button:has-text('Checkout')");

    }

    async getProductLocatorInCart(productToBuy) {

        const itemsInCart = this.page.locator(`h3:has-text('${productToBuy}')`);
         await itemsInCart.waitFor();
         return itemsInCart;

    }

    async verifyProductPresentInCart(productToBuy) {


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