const {test,expect} = require('@playwright/test');


test('Playwright locators', async ({page})=>{

await page.goto("https://rahulshettyacademy.com/angularpractice/");

expect(await page.screenshot()).toMatchSnapshot('angularpractice_Homepage.png');
await page.waitForLoadState('networkidle');
page.on('request', resquest=>{console.log(resquest.url())});
page.on('response', Response=>{console.log(Response.url(), Response.status())});
// await page.route('**/*.{jpg,png}',route=>route.abort());// abort img call with jpg and png file extention

await page.locator("div.form-group input[name='name']").fill("Rakesh Varma");
await page.locator("div.form-group input[name='email']").fill("rakesh.varma@gmail.com");
await page.getByPlaceholder('Password').fill("Rakesh@1234");
await page.getByLabel('Check me out if you Love IceCreams!').click();
await page.getByLabel('Gender').selectOption("Male");
await page.getByLabel('Employed').click();
// await page.locator("input[type='date']").fill("12-01-1990");
await page.getByRole('button',{name : 'Submit'}).click();
await page.getByText("Success! The Form has been submitted successfully!.").isVisible();
await page.getByRole('link',{name : 'Shop'}).click();
await page.locator("app-card").filter({hasText: 'Nokia Edge'}).getByRole('button',{name: 'Add'}).click();
await page.locator("div#navbarResponsive a").click();

await page.close();





})