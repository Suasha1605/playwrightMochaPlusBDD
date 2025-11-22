const { test, expect } = require('@playwright/test');
const playwright = require('playwright');

const { loginTest } = require('../../Fixture/loginFixture')
const { hrmLoginTest } = require('../../Fixture/HRMtestdataFixture')


loginTest.only('custom Login Test', async ({ UILogin }) => {
    console.log("HomePage URL: ", await UILogin.page.url());




});

hrmLoginTest('Browser Launch with session storage', async ({ HRMLoginCred }) => {

    const browser = await playwright.chromium.launch({ channel: 'msedge' });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.waitForSelector("input[name='username']", { state: 'visible', timeout: 30000 });
    await page.getByPlaceholder('Username').fill(HRMLoginCred.username);
    await page.waitForSelector("input[name='password']", { state: 'attached', hasText: 'Password' });
    await page.getByPlaceholder('Password').fill(HRMLoginCred.password);

    await page.getByRole('button', { name: 'Login' }).click();

    await page.waitForLoadState('networkidle');
    console.log(await page.title());

  await context.storageState({path:'session.json'});

  const webcontext = await browser.newContext({storageState:'session.json'});


})


