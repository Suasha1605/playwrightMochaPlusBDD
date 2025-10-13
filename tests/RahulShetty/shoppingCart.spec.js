const { test, expect } = require('@playwright/test');

const credential = {
     email: process.env.username,
     password: process.env.password
};


let productToBuy = 'ADIDAS ORIGINAL';
const baseURL = process.env.base_url;

let webContext;

test.beforeAll(async ({ browser }) => {

     const context = await browser.newContext();
     const page = await context.newPage();

     const userEmail = page.locator('input#userEmail');
     const userPassword = page.locator('input#userPassword');
     const loginButton = page.locator('input[name="login"]');

     await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
     await userEmail.fill(credential.email);
     await userPassword.fill(credential.password);
     await loginButton.click();
     await page.waitForLoadState('networkidle');
     await context.storageState({ path: 'state.json' }); //create session file with all cookies info
     webContext = await browser.newContext({ storageState: 'state.json' });


});

test('Shopping Cart test ', async () => {

     const page = await webContext.newPage();

     const products = page.locator("div.card-body");
     const allProducts = page.locator("div.card-body b");
     const cartButton = page.locator('[routerlink*="cart"]');
     const itemsInCart = page.locator(`h3:has-text('${productToBuy}')`);
     const checkout = page.locator("button:has-text('Checkout')");
     const countryDropdown = page.locator("[placeholder*='Country']");
     const countryOptions = page.locator(".ta-results button");
     const shippingEmail = page.locator('div.user__name label');
     const placeorderButton = page.locator('a.action__submit');
     const orderSuccessMsg = page.locator('h1.hero-primary');
     const orderId = page.locator('.em-spacer-1 .ng-star-inserted');
     const orderButton = page.locator("button[routerlink*='myorders']");
     const orderTable = page.locator("div table.table tbody  tr");
     const orderIDFromOrderSummary = page.locator("div.col-text");


     await page.goto(baseURL);

     const homePageTitle = await page.title();

     console.log("homePageTitle: ", homePageTitle);

     expect(homePageTitle).toEqual("Let's Shop");
     const count = await products.count();
     console.log(count);

     const allProductsName = await allProducts.allTextContents();

     console.log("All Products:", allProductsName);

     for (let i = 0; i < count; i++) {

          const productName = await products.nth(i).locator("b").textContent();

          if (productName === productToBuy) {
               await products.nth(i).locator('text= Add To Cart').click();

               console.log('product Name : ', productName, ' selected')
               break;

          }

     }

     await page.waitForLoadState('networkidle');

     page.locator('//button[@class="btn btn-custom"]').first().waitFor();

     await cartButton.click();

     const itemNameInCart = await itemsInCart.isVisible();

     expect(itemNameInCart).toBeTruthy();

     const item = await itemsInCart.textContent();

     console.log(` ${item} is present in the cart`);

     await checkout.click();
     await countryDropdown.pressSequentially('ind', { delay: 100 });
     await countryOptions.first().waitFor();
     const countryCount = await countryOptions.count();
     console.log("country Count: ", countryCount);

     for (let i = 0; i < countryCount; i++) {

          const text = await countryOptions.nth(i).textContent();

          console.log("Country Options : ", text);

          if (text.trim() === 'India') {

               await countryOptions.nth(i).click();
               console.log(`Country Options ${text} is selected`);
               break;
          }
     }

     expect(shippingEmail).toHaveText(credential.email);

     await placeorderButton.click();
     await orderSuccessMsg.waitFor();
     const thankYouMsg = await orderSuccessMsg.textContent();
     console.log(thankYouMsg);
     expect(thankYouMsg.trim()).toBe('Thankyou for the order.');
     const orderNumber = await orderId.textContent();
     console.log('order Number is: ', orderNumber);


     // Check placed order
     await orderButton.click();
     await orderTable.first().waitFor();
     const orderCount = await orderTable.count();

     for (let i = 0; i < orderCount; i++) {

          const orderIDFromOrderTable = await orderTable.nth(i).locator("th").textContent();

          console.log('orderID From OrderTable :', orderIDFromOrderTable);

          if (orderNumber.includes(orderIDFromOrderTable)) {

               console.log(`New order ${orderIDFromOrderTable} is present in order table`);
               await orderTable.nth(i).locator("td button").first().click();

               break;


          }

     }

     // await orderIDFromOrderSummary.waitFor();
     const orderSummaryID = await orderIDFromOrderSummary.textContent();

     console.log("Order Summary ID: ", orderSummaryID)

     expect(orderNumber.includes(orderSummaryID)).toBeTruthy();



     await page.close();


});


test('Page title validation test ', async () => {

     const page = await webContext.newPage();

     await page.goto(baseURL);

     const homePageTitle = await page.title();

     console.log("homePageTitle: ", homePageTitle);

     expect(homePageTitle).toEqual("Let's Shop");

     await page.close();


});