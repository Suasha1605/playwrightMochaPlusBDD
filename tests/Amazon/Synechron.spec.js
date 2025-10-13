const { test, expect } = require('@playwright/test');


test('first test', async ({ browser }) => {


    const context = await browser.newContext();

    const page = await context.newPage();

    await page.goto('https://www.amazon.in/');

    

  

    
});