import {expect} from '@playwright/test';
import {POManager} from '../../PageObject_ts/POManager';
import {customTest} from '../../utils_ts/test-base';


customTest(`Shopping Cart test using Fixture Testdata `, async ({ page,placeOrderTestdata }) => {

     const pomanager = new POManager(page);
     const loginPage = pomanager.getLoginPage();
     const shoppingPage = pomanager.getShoppingPage();
     const cartPage = pomanager.getCartPage();
     const checkoutPage = pomanager.getCheckoutPage();
     const orderHistoryPage = pomanager.getOrderHistoryPage();


     await loginPage.negivateToLoginPage(placeOrderTestdata.baseURL);
     await loginPage.getLogin(placeOrderTestdata.email, placeOrderTestdata.password);

     await page.waitForLoadState('networkidle');
     const homePageTitle = await page.title();
     console.log("homePageTitle: ", homePageTitle);
     expect(homePageTitle).toEqual("Let's Shop");

     await shoppingPage.selectProduct(placeOrderTestdata.productToBuy);
     await shoppingPage.navigateToCart();

     const isItemNameInCart = await cartPage.verifyProductPresentInCart(placeOrderTestdata.productToBuy);
     expect(isItemNameInCart).toBeTruthy();
     await cartPage.nevigateToCheckout();

     await checkoutPage.selectCountry(placeOrderTestdata.countryCode, placeOrderTestdata.countryName);
     const actualShippingEmail = await checkoutPage.verifyShippingEmail();
     expect(actualShippingEmail).toHaveText(placeOrderTestdata.email);
     await checkoutPage.placeOrder();

     const orderDetail = await orderHistoryPage.getOrderSuccessMsgAndOrderNumber();
     const newOrderId = orderDetail.orderCode;

     expect(orderDetail.msg.trim()).toBe('Thankyou for the order.');

     await orderHistoryPage.nevigateToOrderHistoryPage();

     await orderHistoryPage.getOrderHistory(newOrderId);
     const orderSummaryID = await orderHistoryPage.getOrderSummary();
     expect(newOrderId.includes(orderSummaryID)).toBeTruthy();



});



