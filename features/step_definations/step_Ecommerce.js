const { Given, When, Then } = require('@cucumber/cucumber');
const { POManager } = require('../../PageObject/POManager');
const { expect } = require('@playwright/test');




Given('Navigate to {string}',{timeout: 100*1000}, async function (url) {
    this.loginPage = this.pomanager.getLoginPage();
    await this.loginPage.negivateToLoginPage(url);
});


Given('Login to the application with {string} and {string}', async function (username, password) {
    // const loginPage = pomanager.getLoginPage();
    await this.loginPage.getLogin(username, password);
});

When('Select {string} from dashboard', async function (product) {
    const shoppingPage = this.pomanager.getShoppingPage();
    await shoppingPage.selectProduct(product);
    await shoppingPage.navigateToCart();
});

Then('Verify selected {string} is available on cart page', async function (product) {
    const cartPage = this.pomanager.getCartPage();
    const isItemNameInCart = await cartPage.verifyProductPresentInCart(product);
    expect(isItemNameInCart).toBeTruthy();
    await cartPage.nevigateToCheckout();
});

When('Enter the valid {string} and {string} and place the order', async function (countryCode, countryName) {

    const checkoutPage = this.pomanager.getCheckoutPage();
    await checkoutPage.selectCountry(countryCode, countryName);
    //   const actualShippingEmail = await checkoutPage.verifyShippingEmail();
    //   expect(actualShippingEmail).toHaveText(data.email);
    await checkoutPage.placeOrder();
});

Then('Verify order is present on order history page', async function () {

    const orderHistoryPage = this.pomanager.getOrderHistoryPage();
    const orderDetail = await orderHistoryPage.getOrderSuccessMsgAndOrderNumber();
    const newOrderId = orderDetail.orderCode;

    expect(orderDetail.msg.trim()).toBe('Thankyou for the order.');

    await orderHistoryPage.nevigateToOrderHistoryPage();

    await orderHistoryPage.getOrderHistory(newOrderId);
    const orderSummaryID = await orderHistoryPage.getOrderSummary();
    expect(newOrderId.includes(orderSummaryID)).toBeTruthy();
});     