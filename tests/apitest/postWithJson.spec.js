const { test, expect } = require('@playwright/test');
const fs = require('fs')
const baseURL = "https://restful-booker.herokuapp.com";
let bookingId;



test('Create Method Ext Json file', async ({ request }) => {

    const jsonfilePath = './testdata/bookingAPI.json';
    const requestBody = JSON.parse(fs.readFileSync(jsonfilePath, 'utf-8'));


    const response = await request.post(`${baseURL}/booking`,
        { data: requestBody, headers: { 'Content-Type': 'application/json', 'cookie': 'token=83fbc54722b6f81' } }

    );

    const headers = response.headers();
    console.log("Headers: ", headers);
    const responseBody = await response.json();
    bookingId = responseBody.bookingid;

    console.log("Booking ID: ", bookingId);

    console.log("Response Body: ", responseBody);
    expect.soft(response.ok()).toBeTruthy();
    expect.soft(response.status()).toBe(200);
    expect.soft(responseBody).toHaveProperty('bookingid')
    expect.soft(responseBody.booking.depositpaid).toBe(true);
    expect.soft(responseBody.booking).toMatchObject(

        {
            firstname: requestBody.firstname,
            lastname: requestBody.lastname,
            totalprice: requestBody.totalprice,
            depositpaid: requestBody.depositpaid,
            additionalneeds: requestBody.additionalneeds
        }
    );

    expect.soft(responseBody.booking.bookingdates).toMatchObject({

        checkin: requestBody.bookingdates.checkin,
        checkout: requestBody.bookingdates.checkout


    })




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