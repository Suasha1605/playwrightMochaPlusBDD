import {Locator, Page} from '@playwright/test';

export class Orderhistorypage {

    page: Page;
    orderSuccessMsg: Locator;
    orderId: Locator;
    orderButton: Locator;
    orderTable: Locator;
    orderIDFromOrderSummary: Locator;   
     // /** @param {import('@playwright/test').Page} page */
    constructor(page:Page) {

        this.page = page;
        this.orderSuccessMsg = this.page.locator('h1.hero-primary');
        this.orderId = this.page.locator('.em-spacer-1 .ng-star-inserted');
        this.orderButton = this.page.locator("button[routerlink*='myorders']");
        this.orderTable = this.page.locator("div table.table tbody  tr");
        this.orderIDFromOrderSummary = this.page.locator("div.col-text");

    }

    async getOrderSuccessMsgAndOrderNumber() {
        await this.page.waitForLoadState('networkidle');
        await this.orderSuccessMsg.waitFor({ state: 'visible', timeout: 5000 });
        let thankYouMsg: any;
        thankYouMsg = await this.orderSuccessMsg.textContent();
        console.log(thankYouMsg);
        
        let orderNumber: any;
        orderNumber = await this.orderId.textContent();
        console.log('order Number is: ', orderNumber);

        const orderDetail: { msg: string, orderCode: any } = { msg: thankYouMsg, orderCode: orderNumber };

        return orderDetail;
    }

    async nevigateToOrderHistoryPage() {

        await this.orderButton.click();
        await this.page.waitForLoadState('networkidle');

    }

    async getOrderHistory(newOrderId:any) {

        await this.orderTable.first().waitFor();
        const orderCount = await this.orderTable.count();

        for (let i = 0; i < orderCount; i++) {
            let orderIDFromOrderTable: any;
           orderIDFromOrderTable = await this.orderTable.nth(i).locator("th").textContent();

            console.log('orderID From OrderTable :', orderIDFromOrderTable);
            if (newOrderId.includes(orderIDFromOrderTable)) {

                console.log(`New order ${orderIDFromOrderTable} is present in order table`);
                await this.orderTable.nth(i).locator("td button").first().click();

                break;


            }

        }

    }

    async getOrderSummary() {

        await this.page.waitForLoadState('networkidle');
        await this.orderIDFromOrderSummary.waitFor();
        const orderSummaryID = await this.orderIDFromOrderSummary.textContent();

        console.log("Order Summary ID: ", orderSummaryID)

        return orderSummaryID;
    }




}

module.exports = { Orderhistorypage };