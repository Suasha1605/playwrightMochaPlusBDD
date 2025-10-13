
const { test, expect } = require('@playwright/test');

const playwright = require('playwright');

const hrmLoginTest = require('../../Fixture/loginFixture')

let webContext;
test.beforeAll('Browser Launch with session storage', async () => {

    const browser = await playwright.chromium.launch({ channel: 'msedge' });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.waitForSelector("input[name='username']", { state: 'visible', timeout: 30000 });
    await page.getByPlaceholder('Username').fill('admin');
    await page.waitForSelector("input[name='password']", { state: 'attached', hasText: 'Password' });
    await page.getByPlaceholder('Password').fill('admin123');

    await page.getByRole('button', { name: 'Login' }).click();

    await page.waitForLoadState('networkidle');
    console.log(await page.title());
    await context.storageState({ path: 'state.json' });

    webContext = await browser.newContext({ storageState: 'state.json' });



})


test("session 2", async () => {

    const page = await webContext.newPage();

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers");
    await page.waitForLoadState('networkidle');
    console.log(await page.title());


})


test.describe('Playwright browser actions', () => {


    test('Window handle', async ({ browser }) => {
        const context = await browser.newContext();

        const page = await context.newPage();
        await page.goto("https://testautomationpractice.blogspot.com/");

        const newTab = page.getByRole('button').filter({ hasText: 'New Tab' });

        const [newPage] = await Promise.all([context.waitForEvent('page'), newTab.click()]);

        console.log("New tab title: ", await newPage.title());


    });


    test('Dailog Handling', async ({ page }) => {

        await page.goto("https://testautomationpractice.blogspot.com/");

        page.on('dialog', (dailog) => {


            console.log('Type:', dailog.type());
            console.log('Dailog text:', dailog.message());
            dailog.accept();


        })

        await page.locator('button', { hasText: 'Prompt Alert' }).click();
        await page.waitForTimeout(2000);


    })



    test('Popup Window Handling', async ({ page }) => {

        await page.goto("https://testautomationpractice.blogspot.com/");

        page.on('popup', async (popup) => {

            await popup.waitForLoadState('networkidle');
            console.log('Title:', await popup.title());

            await popup.close();


        })

        await page.locator("//button[contains(text(),'Popup Windows')]").click({ button: 'left' });
        await page.waitForTimeout(2000);


        await page.waitForLoadState('networkidle');

        const titleName = await page.locator('div#PageList2 li').allTextContents();



        console.log('titleName', titleName);



    })


});