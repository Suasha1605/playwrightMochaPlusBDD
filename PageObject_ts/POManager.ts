import {Page} from '@playwright/test';
import {Loginpage} from './Loginpage';
import {Cartpage} from './Cartpage';
import {Shoppingpage} from './Shoppingpage';
import {Checkoutpage} from './Checkoutpage';
import {Orderhistorypage} from './Orderhistorypage';


export class POManager {

   page: Page;
   loginPage: Loginpage;
   shoppingPage: Shoppingpage;
   cartPage: Cartpage;
   checkoutPage: Checkoutpage;
    OrderHistoryPage: Orderhistorypage;

    constructor(page: Page) {

        this.page = page;

        this.loginPage = new Loginpage(this.page);
        this.shoppingPage = new Shoppingpage(this.page);
        this.cartPage = new Cartpage(this.page);
        this.checkoutPage = new Checkoutpage(this.page);
        this.OrderHistoryPage = new Orderhistorypage(this.page);

    }

    getLoginPage() {

        return this.loginPage;
    }

    getShoppingPage() {

        return this.shoppingPage;
    }

    getCartPage() {

        return this.cartPage;
    }

    getCheckoutPage() {

        return this.checkoutPage;
    }

    getOrderHistoryPage() {

        return this.OrderHistoryPage;
    }




}

module.exports = { POManager };