const { test, expect } = require('@playwright/test');

const { faker } = require('@faker-js/faker');
const DateTime = require('luxon')



test.describe('CRUD Operations for Booking API', () => {
    const baseURL = "https://restful-booker.herokuapp.com";
    let bookingId;
    test('Create Method', async ({ request }) => {

        const firstName = faker.person.firstName();
        const lastName = faker.person.lastName();
        const totalPrice = faker.number.int({ min: 1000, max: 5000 });
        const depositPaid = faker.datatype.boolean();
        const checkInDate = DateTime.DateTime.now().toFormat('yyyy-MM-dd');
        const checkOutDate = DateTime.DateTime.now().plus({ days: 30 }).toFormat('yyyy-MM-dd');
        const additionalNeeds = "Breakfast";




        const requestBody = {
            "firstname": firstName,
            "lastname": lastName,
            "totalprice": totalPrice,
            "depositpaid": depositPaid,
            "bookingdates": {
                "checkin": checkInDate,
                "checkout": checkOutDate
            },
            "additionalneeds": additionalNeeds
        };


        const response = await request.post(`${baseURL}/booking`,
            { data: requestBody, headers: { 'Content-Type': 'application/json', 'cookie': 'token=83fbc54722b6f81' } }

        );

        const headers = await response.headers();
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
                firstname: firstName,
                lastname: lastName,
                totalprice: totalPrice,
                depositpaid: depositPaid,
                additionalneeds: additionalNeeds
            }
        );

        expect.soft(responseBody.booking.bookingdates).toMatchObject({

            "checkin": checkInDate,
            "checkout": checkOutDate


        })




    });



    test.only('Get method by ID', async ({ request }) => {

        const response = await request.get(`${baseURL}/booking/1`);

        const responseBody = await response.json();
        console.log('Get Response Body:', responseBody);


    })

    test.only('Get method by names', async ({ request }) => {

        const response = await request.get(`${baseURL}/booking`,
            {
                params:
                    { firstname: "Mary", lastname: "Brown" }
            }
        );

        const responseBody = await response.json();
        console.log('Get Response Body:', responseBody);
        expect.soft(response.ok()).toBeTruthy();
        expect.soft(response.status()).toBe(200);
        expect.soft(responseBody.length).toBeGreaterThan(0)


    })

})



































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