const {test, expect} = require('@playwright/test')
test('Takescreenshot-desktop view', async ({page}) => {
  await page.goto('https://www.timesjobs.com/candidate/register.html?pageFlow=TJ_HOME');
  //await page.locator('#curLocation').selectOption('198676')
 const workLocation = page.locator('#curLocation');

 await workLocation.selectOption();
  await page.waitForTimeout(5000);


})