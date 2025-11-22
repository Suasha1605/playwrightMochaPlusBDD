const { test, expect } = require('@playwright/test')

let timestamp = Date.now();
test('@smoke Takescreenshot-desktop view', async ({ page }) => {
    //open url
    await page.goto('https://www.amazon.com/');
    await page.screenshot({ path: `ScreenShots/Screenshot_homepage${timestamp}.png` })
    await expect.soft(page.url()).toContain('amazon');
    expect.soft(await page.title()).toBe('Amazon.com. Spend less. Smile more.');
});
test('@smoke Takescreenshot-fullscreen', async ({ page }) => {
    //open url
    await page.goto('https://www.amazon.com/');
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot(`fullPage${timestamp}.png`);
});
test('@regression Amazon Logo', async ({ page }) => {
    //open url
    await page.goto('https://www.amazon.com/', { waitUntil: 'load' });
    //    await page.locator('#nav-logo-sprites').screenshot({path:'ScreenShots/Logo.png'})
    // await page.locator('#nav-logo-sprites').waitFor();
    await expect(page.locator('#nav-logo-sprites')).toHaveScreenshot(`AmazonLogo${timestamp}.png`)
});
