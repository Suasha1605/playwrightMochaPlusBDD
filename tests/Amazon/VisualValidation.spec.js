const {test, expect} = require('@playwright/test')
test('Takescreenshot-desktop view', async ({page}) => {
  await page.goto('https://www.amazon.com/');
  const logo = page.locator('#nav-logo-sprites')
   
  await expect(logo).toHaveScreenshot('ExpetedLogo.png')
})