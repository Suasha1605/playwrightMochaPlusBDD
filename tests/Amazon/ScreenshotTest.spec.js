const { test, expect } = require('@playwright/test')
test('@smoke Takescreenshot-desktop view', async ({ page }) => {
    //open url
    await page.goto('https://www.amazon.com/');
    await page.screenshot({ path: 'ScreenShots/Screenshot_homepage.png' })
    expect.soft(await page.url()).toContain('amazon');
    expect.soft(await page.title()).toBe('Amazon.com. Spend less. Smile more.');
});
test('@smoke Takescreenshot-fullscreen', async ({ page }) => {
    //open url
    await page.goto('https://www.amazon.com/');
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot('fullPage.png');
});
test('@regression Amazon Logo', async ({ page }) => {
    //open url
    await page.goto('https://www.amazon.com/');
    //    await page.locator('#nav-logo-sprites').screenshot({path:'ScreenShots/Logo.png'})
    await page.locator('#nav-logo-sprites').waitFor();
    expect(await page.locator('#nav-logo-sprites').screenshot()).toMatchSnapshot('AmazonLogo.png')
});
