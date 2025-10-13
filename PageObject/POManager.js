const { Loginpage } = require('./Loginpage');
const { Shoppingpage } = require('./Shoppingpage');
const { Cartpage } = require('./Cartpage');
const { Checkoutpage } = require('./Checkoutpage');
const { Orderhistorypage } = require('./Orderhistorypage');

class POManager {


    constructor(page) {

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