const { test, expect, request } = require('@playwright/test');

const { apiUtils } = require('../../utils/apiUtils');


const loginPayload = { userEmail: "sunilpawar1506@outlook.com", userPassword: "Hawks@1234" };
const createOrderPayload = { orders: [{ country: "Cuba", productOrderedId: "68a86429b01c5d7abb27e634" }] };
const NoOrderPayload = { data: [], message: "No Orders" };

let sessionToken;
let orderId;

const webUrl = "https://rahulshettyacademy.com/client";
test.beforeAll(async () => {

    const apiContext = await request.newContext();

    const objApiUtils = new apiUtils(apiContext, loginPayload, createOrderPayload);

    sessionToken = await objApiUtils.getToken();

    orderId = await objApiUtils.createOrder();


});


test("Response intercept test", async ({ page }) => {

    await page.addInitScript(Value => {

        window.localStorage.setItem('token', Value)
    }, sessionToken);

    const orderButton = page.locator("button[routerlink*='myorders']");

    await page.goto(webUrl);

    await page.route('https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*',
        async (route) => {

            const response = await page.request.fetch(route.request());

            route.fulfill(
                {
                    response: response,
                    body: JSON.stringify(NoOrderPayload)
                });
        }
    );
    await orderButton.click();
    await page.waitForLoadState('networkidle');
    const noOrderMsg = await page.locator("div.mt-4").textContent();

    console.log("noOrderMsg: ", noOrderMsg);

    expect(noOrderMsg).toBe(' You have No Orders to show at this time. Please Visit Back Us ');





});


test("Request intercept test", async ({ page }) => {

    await page.addInitScript(Value => {

        window.localStorage.setItem('token', Value)
    }, sessionToken);

    const orderButton = page.locator("button[routerlink*='myorders']");

    await page.goto(webUrl);
    // abort img call with jpg and png file extention
    await page.route('**/*.{jpg,png}', route => route.abort());
    await orderButton.click();
    await page.waitForLoadState('networkidle');

    await page.route('https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=*',
        route => route.continue({ url: "https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=68am8d28k669d6356920a9ce4c8" })

    );

    await page.locator("//tbody/tr/td/button[text()='View']").first().click();
    await page.waitForLoadState('networkidle');

    const unAuthorizeMsg = await page.locator('p.blink_me').textContent();

    console.log("UnauthorizedMsg: ", unAuthorizeMsg);

    expect(unAuthorizeMsg).toEqual("You are not authorize to view this order");





});

