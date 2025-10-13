import {Page, Locator} from '@playwright/test';

export class Shoppingpage {

     page : Page;
     products: Locator;
     allProducts: Locator;
     cartButton: Locator;
     cartIcons: Locator;

    // /** @param {import('@playwright/test').Page} page */

    constructor(page: Page) {
        this.page = page;

        this.products = page.locator("div.card-body");
        this.allProducts = page.locator("div.card-body b");
        this.cartButton = page.locator('[routerlink*="cart"]');
        this.cartIcons =page.locator('//button[@class="btn btn-custom"]');
        
    }

    async selectProduct(buyingProduct: string) {

        const count = await this.products.count();

        const allProductsName = await this.allProducts.allTextContents();

        console.log("All Products:", allProductsName);

       await this.products.filter({hasText: buyingProduct}).locator('text= Add To Cart').click();
       console.log('product Name : ', buyingProduct, '  is selected')

        // for (let i = 0; i < count; i++) {

        //     const productName = await this.products.nth(i).locator("b").textContent();

        //     if (productName === buyingProduct) {
        //         await this.products.nth(i).locator('text= Add To Cart').click();

        //         console.log('product Name : ', productName, ' selected')
        //         break;

        //     }

        // }
          
       
    }

    async navigateToCart(){

        await this.cartButton.waitFor();
        await this.cartButton.click();
    }


}

module.exports = { Shoppingpage };