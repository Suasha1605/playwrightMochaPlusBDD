
const { test } = require('@playwright/test');


test('multiple window handling', async ({ browser }) => {

  const context = await browser.newContext();

  const page = await context.newPage();

  await page.goto("https://rahulshettyacademy.com/locatorspractice/");

  const pageLink = page.locator('button#visitUsTwo');
  

  const [newPage] = await Promise.all([context.waitForEvent('page'),
  pageLink.click()]);

  const title = await newPage.title();

  console.log(title);

  await newPage.waitForLoadState('networkidle');

  await newPage.locator("a[href*='sign_up']").first().waitFor();

  await newPage.getByRole('link', { name: 'Register' }).click();

  await newPage.screenshot({ path: './Screenshots/newPage.png' });

  console.log(await page.title());

  await page.close();

});

test.only('iframe Handling', async ({ browser }) => {

  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://rahulshettyacademy.com/AutomationPractice/", { waitUntil: 'networkidle' });



  const framePage = page.frameLocator('#courses-iframe');

  const frameLinks = await framePage.locator('a').allTextContents();

  console.log("frameLinks: ", frameLinks);



});



