const { test, expect } = require('@playwright/test');



let vegetableToBuy = 'ADIDAS ORIGINAL';
const baseURL = "https://rahulshettyacademy.com/seleniumPractise/";

test('Special playwright locators', async ({ page }) => {




     await page.goto(baseURL);

     page.waitForLoadState('networkidle');

     page.locator("div.product").first().waitFor();

     await page.locator("div.product").filter({hasText:'Potato - 1 Kg'}).getByRole('button',{name:'ADD TO CART'}).click();

     

     await page.getByAltText('Cart').click();
     page.waitForLoadState('networkidle');
     page.getByRole("button",{name:'PROCEED TO CHECKOUT'}).waitFor();
     await page.getByRole("button",{name:'PROCEED TO CHECKOUT'}).click();

     page.locator("//tbody/tr/td").first().waitFor();
     const vegiText = page.locator("//tbody/tr/td").getByText('Potato - 1 Kg');
     console.log("vegetabke preent in Cart: ",vegiText);
     await expect(vegiText).toBeVisible();

     await page.getByText('Place Order').click();

     page.locator("div.products select").waitFor();
     await page.locator("div.products select").selectOption({label:'India'});

     await page.locator("input.chkAgree").click();

     await page.getByRole("button",{name:'Proceed'}).click();

     page.getByText("Thank you, your order has been placed successfully You'll be redirected to Home page shortly!!").waitFor();

     const orderSuccessMsg = page.getByText("Thank you, your order has been placed successfully You'll be redirected to Home page shortly!!");
     
     console.log("order Success Msg : ",orderSuccessMsg)
     await expect(orderSuccessMsg).toBeVisible();

     







});