const { test } = require('@playwright/test');


test('Popup handling', async ({ browser }) => {

  const context = await browser.newContext();

  const page = await context.newPage();

  await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

   page.on('dialog', dailog=>

    dailog.accept()
);
  // await page.locator('button#alertbtn').click();
  await page.locator('button#confirmbtn').waitFor();
  await page.locator('button#confirmbtn').click();



});