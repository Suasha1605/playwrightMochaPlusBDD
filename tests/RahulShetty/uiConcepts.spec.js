const { test, expect } = require('@playwright/test');


const year = "2027";
const monthNumber = "5";
const date = "15";

const expectedValue = [monthNumber, date, year];

// test.describe.configure({mode:'parallel'}); // Run all the tests in the file concurrently using parallel workers.

// Running tests serially, retrying from the start.
// NOTE Running serially is not recommended. It is usually better to make your tests isolated, so they can be run independently.
// test.describe.configure({mode:'serial'});

// Each test in the file will be retried twice and have a timeout of 20 seconds.
test.describe.configure({ retries: 0, timeout: 20_000, mode: 'parallel' });
test("Calender test", async ({ page }) => {

    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");

    await page.locator(".react-date-picker__inputGroup").click();
    await page.locator(".react-calendar__navigation__label").click();
    await page.locator(".react-calendar__navigation__label").click();
    await page.getByRole('button', { name: `${year}` }).click();
    await page.locator(".react-calendar__year-view__months__month").nth(monthNumber - 1).click();
    await page.locator(".react-calendar__month-view__days__day").locator(`xpath=//abbr[text()='${date}']`).click();
    const inputDate = page.locator("div.react-date-picker__inputGroup input");

    for (let i = 0; i < expectedValue.length; i++) {

        const uiDateValue = await inputDate.nth(i + 1).inputValue(); // i+1 is used to to handle hidden element
        console.log("UI Date Value : ", uiDateValue)
        console.log("expected Date Value : ", expectedValue[i])

        expect(uiDateValue).toEqual(expectedValue[i]);



    }
    await page.close();

});


test('Validate hidden element', async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

    await page.goBack();
    await page.goForward();

    const hiddenElement = page.locator('input#displayed-text');

    await expect(hiddenElement).toBeVisible();

    await page.locator('input#hide-textbox').click();

    await expect(hiddenElement).toBeVisible();


});


test('Alert popups and Hover', async ({ page }) => {

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

    page.on('dialog', (dialog) => {
        const dialogType = dialog.type();
        console.log("dialogType : ", dialogType);
        const alertMsg = dialog.message();
        console.log("alertMsg : ", alertMsg);
        dialog.accept();
    });

    await page.locator("input#alertbtn").click();
    await page.locator("input.confirmbtn").click();


    await page.getByRole('button', { name: 'Mouse Hover' }).hover();


});

test('Iframe handling', async ({ page }) => {

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

    const iframePage = page.frameLocator("#courses-iframe");

    await iframePage.locator("li a[href*='lifetime-access']:visible").click();

    const subscriberCount = await iframePage.locator("div.text h2").textContent();

    const arr = subscriberCount.split(" ");

    for (let i = 0; i < arr.length; i++) {

        console.log(arr[i]);

        expect(arr[1]).toEqual("13,5");

    }


});