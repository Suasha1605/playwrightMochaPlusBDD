const { test, expect, request } = require('@playwright/test');

const { apiUtils } = require('../../utils/apiUtils');


const loginPayload = { userEmail: "sunilpawar1506@outlook.com", userPassword: "Hawks@1234" };
const createOrderPayload = { orders: [{ country: "Cuba", productOrderedId: "68a86429b01c5d7abb27e634" }] };

let sessionToken;
let orderId;

const webUrl ="https://rahulshettyacademy.com/client";
test.beforeAll(async () => {

    const apiContext = await request.newContext();

    const objApiUtils = new apiUtils(apiContext, loginPayload, createOrderPayload);

    sessionToken = await objApiUtils.getToken();

    orderId = await objApiUtils.createOrder();


});


test("Place the order", async ({ page }) => {

    await page.addInitScript(Value => {

        window.localStorage.setItem('token', Value)
    }, sessionToken);


    const orderTable = page.locator("div table.table tbody  tr");
    const orderIDFromOrderSummary = page.locator("div.col-text");
    const orderButton = page.locator("button[routerlink*='myorders']");

    await page.goto(webUrl);
    await orderButton.click();

    await orderTable.first().waitFor();
    const orderCount = await orderTable.count();

    for (let i = 0; i < orderCount; i++) {

        const orderIDFromOrderTable = await orderTable.nth(i).locator("th").textContent();

        console.log('orderID From OrderTable :', orderIDFromOrderTable);

        if (orderId.includes(orderIDFromOrderTable)) {

            console.log(`New order ${orderIDFromOrderTable} is present in order table`);
            await orderTable.nth(i).locator("td button").first().click();

            break;


        }

    }

    // await orderIDFromOrderSummary.waitFor();
    const orderSummaryID = await orderIDFromOrderSummary.textContent();

    console.log("Order Summary ID: ", orderSummaryID)

    expect(orderId.includes(orderSummaryID)).toBeTruthy();



    await page.close();

});



test.afterAll( () => {


    console.log("After all test");

});

