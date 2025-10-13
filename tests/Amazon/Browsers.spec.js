const { test, expect } = require('@playwright/test');



test('open browser method', async ({ browser }) => {

    const context = await browser.newContext();


    const page1 = await context.newPage();

    await page1.goto("https://www.amazon.in/");

    var title1 = await page1.title();

    console.log(title1);

    await expect.soft(page1).toHaveTitle(title1);


    await page1.waitForTimeout(1000);


    //  await page1.close();





})