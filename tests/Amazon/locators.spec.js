


const { test } = require('@playwright/test');

const playwright = require('playwright');


test("Test1", async () => {

    const browser = await playwright.chromium.launch({ headless: true });

    const context = await browser.newContext();

    const page = await context.newPage();

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

    await page.waitForLoadState('networkidle');
    const headers = await page.locator("xpath=//button[@class='btn btn-primary']")
        .filter({ hasNotText: 'Login' }).all();

    for (const h of headers) {

        console.log(await h.textContent());

    }

    const table = page.locator("xpath=//table[@id='product']/parent::div[@class='tableFixHead']");

    const texts = await table.getByRole('table').allTextContents();

    for (const text of texts) {


        console.log(text);
    }



    // const table = page.locator("xpath=//table[@id='product']/parent::div[@class='tableFixHead']");





});