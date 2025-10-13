const { test, expect } = require('@playwright/test');


test('Validate Assertions Test', async ({ page }) => {

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

    await expect(page).toHaveURL("https://rahulshettyacademy.com/AutomationPractice/");

    await expect.soft(page).toHaveTitle("Practice Page!!");

    const logo = page.locator('.logoClass');
    const logoValue = await logo.isVisible();
    expect.soft(logoValue).toBeFalsy();

    await expect(logo).toBeVisible();

    await page.locator('#hide-textbox').click();

    const hiddenLoc = page.locator('#displayed-text');

    const value = await expect(hiddenLoc).toBeHidden();

    const meetText = page.locator('.blinkingText:visible');

    await expect.soft(meetText).toHaveText('London QA Meetup @Rahul Shetty - Limited Seats! Book Now!');

    const name = page.getByPlaceholder('Enter Your Name');

    await name.fill('Sunil Pawar');

    await expect.soft(name).toHaveValue(/^[A-Za-z\s]+$/);

});


test('Mouse Actions', async ({ page }) => {

    await page.goto('https://jqueryui.com/droppable/');

    const frame = page.frame({ url: 'https://jqueryui.com/resources/demos/droppable/default.html' });

    const source = frame.locator('#draggable');

    const target = frame.locator('#droppable');

    await source.dragTo(target);

    await page.waitForTimeout(2000);


});

test.only('Mouse double click', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');


    const source = page.getByRole('button', { name: 'Copy Text' });

    await source.dblclick();

    const target = page.locator('#field2').first();

    console.log(await target.inputValue());

    expect.soft(target).toHaveValue('Hello World!');

    await page.waitForTimeout(2000);

    const rightClick = page.getByRole('button', { name: 'Copy Text' });

    await rightClick.click({ button: 'right' });

    await page.waitForTimeout(2000);

})