const { test, expect } = require('@playwright/test');
const { POManager } = require('../../PageObject/POManager')
const dataset = JSON.parse(JSON.stringify(require('../../Testdata/shoppingCartPOTestdata.json')));

for (let data of dataset) {

     test(`Shopping Cart test for ${data.productToBuy}`, async ({ page }) => {

          const pomanager = new POManager(page);
          const loginPage = pomanager.getLoginPage();
          const shoppingPage = pomanager.getShoppingPage();
          const cartPage = pomanager.getCartPage();
          const checkoutPage = pomanager.getCheckoutPage();
          const orderHistoryPage = pomanager.getOrderHistoryPage();


          await loginPage.negivateToLoginPage(data.baseURL);
          await loginPage.getLogin(data.email, data.password);

          await page.waitForLoadState('networkidle');
          const homePageTitle = await page.title();
          console.log("homePageTitle: ", homePageTitle);
          expect(homePageTitle).toEqual("Let's Shop");

          await shoppingPage.selectProduct(data.productToBuy);
          await shoppingPage.navigateToCart();

          const isItemNameInCart = await cartPage.verifyProductPresentInCart(data.productToBuy);
          expect(isItemNameInCart).toBeTruthy();
          await cartPage.nevigateToCheckout();

          await checkoutPage.selectCountry(data.countryCode, data.countryName);
          const actualShippingEmail = await checkoutPage.verifyShippingEmail();
          expect(actualShippingEmail).toHaveText(data.email);
          await checkoutPage.placeOrder();

          const orderDetail = await orderHistoryPage.getOrderSuccessMsgAndOrderNumber();
          const newOrderId = orderDetail.orderCode;

          expect(orderDetail.msg.trim()).toBe('Thankyou for the order.');

          await orderHistoryPage.nevigateToOrderHistoryPage();

          await orderHistoryPage.getOrderHistory(newOrderId);
          const orderSummaryID = await orderHistoryPage.getOrderSummary();
          expect(newOrderId.includes(orderSummaryID)).toBeTruthy();



     });
}


