const { test, expect } = require('@playwright/test');
const { syncBuiltinESMExports } = require('module');

const baseURL = "https://restful-booker.herokuapp.com";

test('Create Method', async ({ request }) => {

    const requestBody = {
        "firstname": "Aarvi",
        "lastname": "Pawar",
        "totalprice": 5000,
        "depositpaid": true,
        "bookingdates": {
            "checkin": "2025-09-26",
            "checkout": "2025-09-27"
        },
        "additionalneeds": "Breakfast"
    };


    const response = await request.post(`${baseURL}/booking`,
        { data: requestBody, headers: { 'Content-Type': 'application/json' } }

    );

    const responseBody = await response.json();

    console.log(responseBody);
    expect.soft(response.ok()).toBeTruthy();
    expect.soft(response.status()).toBe(200);
    expect.soft(responseBody).toHaveProperty('bookingid')
    expect.soft(responseBody).toHaveProperty('booking.totalprice')
    expect.soft(responseBody.booking).toMatchObject(

        {
            firstname: 'Aarvi',
            lastname: 'Pawar',
            totalprice: 5000,
            depositpaid: true,
            additionalneeds: 'Breakfast'
        }
    );




});





































// test('Alert', async ({ page }) => {
//     await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
//     page.on('dialog', async (dialog) => {
//         console.log(dialog.type());
//         console.log(dialog.message());
//         // dialog.accept();
//         await page.waitForTimeout(2000);
//         await dialog.dismiss();

//     })

//     await page.locator("input#confirmbtn").click();

//     console.log(await page.title());



// });