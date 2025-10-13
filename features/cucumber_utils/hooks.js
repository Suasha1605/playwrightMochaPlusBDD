
const { Before, After, BeforeStep, AfterStep, Status,setDefaultTimeout } = require('@cucumber/cucumber');
const { POManager } = require('../../PageObject/POManager')
const playwright = require('@playwright/test');


setDefaultTimeout(30*1000);


Before( async function () {

    const browser = await playwright.chromium.launch({ headless: false });
    const context = await browser.newContext();
    this.page = await context.newPage();
    this.pomanager = new POManager(this.page);

}
);

// BeforeStep(async function () {
 
//     await this.page.screenshot({ path:'./Screenshots/beforestep.png' });
// })

AfterStep(async function ({ result }) {

    if (result.status === Status.FAILED)
        await this.page.screenshot({ path:'./Screenshots/AfterStep.png' });
})

After(async function () {

    await this.page.close();
    console.log('!!!!!Browser got closed now !!!!!');
});