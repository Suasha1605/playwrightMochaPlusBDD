/** @type {import('@playwright/test').Page} */

const { test } = require('@playwright/test');


const credential = { email: 'sunilpawar1506@outlook.com', password: 'Hawks@1234' };

let webContext;

test.beforeAll(async ({ browser }) => {

   const context = await browser.newContext();

   const page = await context.newPage();

   const userEmail = page.locator('input#userEmail');
   const userPassword = page.locator('input#userPassword');
   const loginButton = page.locator('input[name="login"]');

   await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
   await page.waitForLoadState('networkidle');
   await userEmail.fill(credential.email);
   await userPassword.fill(credential.password);
   await loginButton.click();

   await context.storageState({ path: 'state.json' });
   webContext = await browser.newContext({ storageState: 'state.json' });







});


test('test1', async () => {

   const page = await webContext.newPage();

   await page.goto("https://rahulshettyacademy.com/client/");
   await page.waitForLoadState('networkidle');

   const links = await page.locator('a').allTextContents();



   console.log(links);

});


test('test2', async () => {

   const page = await webContext.newPage();

   await page.goto("https://rahulshettyacademy.com/client/");
   await page.waitForLoadState('networkidle');

   const buttons = await page.locator('button').allTextContents();


   console.log(buttons);

});
