

const { test, expect } = require('@playwright/test')
const playwright = require('playwright')

test('launch browser', async () => {
    const browser = await playwright.chromium.launch({ channel: 'msedge' })
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.amazon.in/')
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot('amazonHomePage.png')
    await browser.close();


})

// test.use({ ...playwright.devices['Galaxy A55'] });
test.describe('mobile emulation', () => {



    test("GalaxyA55", async ({ page }) => {

        await page.goto('https://www.amazon.in/', { waitUntil: 'networkidle' });
        expect(await page.screenshot()).toMatchSnapshot('amazonHomePage_GalaxyA55.png')
        await page.close();

    })

})